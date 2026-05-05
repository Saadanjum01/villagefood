from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

resend.api_key = os.environ.get('RESEND_API_KEY', '')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    location: Optional[str] = None
    message: str

class FeedbackForm(BaseModel):
    name: str
    location: str
    rating: int = Field(ge=1, le=5)
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact")
async def send_contact_email(form: ContactForm):
    if not resend.api_key:
        raise HTTPException(status_code=500, detail="Email service not configured.")

    from_address = os.environ.get('RESEND_FROM', 'onboarding@resend.dev')
    notify_to = os.environ.get('CONTACT_NOTIFY_TO', 'hello@villagepizzaseafood.com')
    location_line = f"<p><strong>Location:</strong> {form.location}</p>" if form.location else ""

    try:
        resend.Emails.send({
            "from": from_address,
            "to": [notify_to],
            "reply_to": form.email,
            "subject": f"New Contact Message from {form.name}",
            "html": f"""
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> {form.name}</p>
                <p><strong>Email:</strong> {form.email}</p>
                {location_line}
                <p><strong>Message:</strong></p>
                <p>{form.message}</p>
            """,
        })
    except Exception as e:
        logger.error("Resend contact email failed: %s", e)
        raise HTTPException(status_code=502, detail="Failed to send email.")

    return {"success": True}


@api_router.post("/feedback")
async def send_feedback_email(form: FeedbackForm):
    if not resend.api_key:
        raise HTTPException(status_code=500, detail="Email service not configured.")

    from_address = os.environ.get('RESEND_FROM', 'onboarding@resend.dev')
    notify_to = os.environ.get('CONTACT_NOTIFY_TO', 'hello@villagepizzaseafood.com')
    stars = "⭐" * form.rating

    try:
        resend.Emails.send({
            "from": from_address,
            "to": [notify_to],
            "subject": f"New Feedback ({form.rating}/5) — {form.location}",
            "html": f"""
                <h2>New Feedback Submission</h2>
                <p><strong>Name:</strong> {form.name}</p>
                <p><strong>Location:</strong> {form.location}</p>
                <p><strong>Rating:</strong> {stars} ({form.rating}/5)</p>
                <p><strong>Feedback:</strong></p>
                <p>{form.message}</p>
            """,
        })
    except Exception as e:
        logger.error("Resend feedback email failed: %s", e)
        raise HTTPException(status_code=502, detail="Failed to send email.")

    return {"success": True}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()