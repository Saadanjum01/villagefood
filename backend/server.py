from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
import resend
import asyncio
import json
import urllib.parse
import urllib.request


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

resend.api_key = os.environ.get('RESEND_API_KEY', '')

app = FastAPI()

api_router = APIRouter(prefix="/api")


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    location: Optional[str] = None
    message: str
    captcha: str

class FeedbackForm(BaseModel):
    name: str
    location: str
    rating: int = Field(ge=1, le=5)
    message: str
    captcha: str


async def verify_captcha(token: str):
    secret = os.environ.get('RECAPTCHA_SECRET_KEY', '')
    if not secret:
        raise HTTPException(status_code=500, detail="CAPTCHA not configured.")
    data = urllib.parse.urlencode({'secret': secret, 'response': token}).encode()

    def call():
        with urllib.request.urlopen('https://www.google.com/recaptcha/api/siteverify', data, timeout=10) as r:
            return json.load(r)

    try:
        ok = (await asyncio.to_thread(call)).get('success')
    except Exception as e:
        logger.error("reCAPTCHA verify failed: %s", e)
        raise HTTPException(status_code=502, detail="CAPTCHA check failed.")
    if not ok:
        raise HTTPException(status_code=400, detail="CAPTCHA verification failed.")


LOCATION_NAMES = {
    "dickinson": "Dickinson",
    "la-porte": "La Porte",
    "pasadena": "Pasadena",
    "santa-fe": "Santa Fe",
    "seabrook": "Seabrook",
    "league-city": "League City",
}


@api_router.get("/")
async def root():
    return {"status": "ok", "service": "villagefood-email"}


@api_router.post("/contact")
async def send_contact_email(form: ContactForm):
    await verify_captcha(form.captcha)
    if not resend.api_key:
        raise HTTPException(status_code=500, detail="Email service not configured.")

    from_address = os.environ.get('RESEND_FROM', 'Village Pizza & Seafood <john@villagepizzaseafood.com>')
    notify_to = os.environ.get('CONTACT_NOTIFY_TO', 'john@villagepizzaseafood.com')
    location_label = LOCATION_NAMES.get(form.location, form.location) if form.location else None
    location_line = f"<tr><td style='padding:8px 0;color:#888;'>Location</td><td style='padding:8px 0;'>{location_label}</td></tr>" if location_label else ""

    try:
        # Notification email to John
        resend.Emails.send({
            "from": from_address,
            "to": [notify_to],
            "reply_to": form.email,
            "subject": f"New contact message from {form.name}",
            "html": f"""
                <div style="font-family:Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;background:#fbf6ec;border:1px solid #e8e1d2;border-radius:8px;overflow:hidden;">
                  <div style="background:#1b2b6b;padding:24px;text-align:center;">
                    <h1 style="color:#f5c518;margin:0;font-size:22px;letter-spacing:1px;">VILLAGE PIZZA &amp; SEAFOOD</h1>
                    <p style="color:#fbf6ec;margin:6px 0 0;font-size:13px;opacity:0.85;">New Contact Form Submission</p>
                  </div>
                  <div style="padding:28px;">
                    <table style="width:100%;border-collapse:collapse;font-size:15px;color:#1b2b6b;">
                      <tr><td style="padding:8px 0;width:110px;color:#888;">Name</td><td style="padding:8px 0;font-weight:600;">{form.name}</td></tr>
                      <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;"><a href="mailto:{form.email}" style="color:#d62b2b;text-decoration:none;">{form.email}</a></td></tr>
                      {location_line}
                    </table>
                    <div style="margin-top:18px;">
                      <div style="font-size:13px;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Message</div>
                      <div style="background:#fff;padding:16px;border-left:4px solid #f5c518;border-radius:4px;color:#1b2b6b;line-height:1.55;">{form.message}</div>
                    </div>
                  </div>
                </div>
            """,
        })
    except Exception as e:
        logger.error("Resend contact email failed: %s", e)
        raise HTTPException(status_code=502, detail="Failed to send email.")

    return {"success": True}


@api_router.post("/feedback")
async def send_feedback_email(form: FeedbackForm):
    await verify_captcha(form.captcha)
    if not resend.api_key:
        raise HTTPException(status_code=500, detail="Email service not configured.")

    from_address = os.environ.get('RESEND_FROM', 'Village Pizza & Seafood <john@villagepizzaseafood.com>')
    notify_to = os.environ.get('CONTACT_NOTIFY_TO', 'john@villagepizzaseafood.com')
    location_label = LOCATION_NAMES.get(form.location, form.location)
    stars = "★" * form.rating + "☆" * (5 - form.rating)

    try:
        resend.Emails.send({
            "from": from_address,
            "to": [notify_to],
            "subject": f"New feedback ({form.rating}/5) — {location_label}",
            "html": f"""
                <div style="font-family:Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;background:#fbf6ec;border:1px solid #e8e1d2;border-radius:8px;overflow:hidden;">
                  <div style="background:#1b2b6b;padding:24px;text-align:center;">
                    <h1 style="color:#f5c518;margin:0;font-size:22px;letter-spacing:1px;">VILLAGE PIZZA &amp; SEAFOOD</h1>
                    <p style="color:#fbf6ec;margin:6px 0 0;font-size:13px;opacity:0.85;">New Customer Feedback</p>
                  </div>
                  <div style="padding:28px;">
                    <table style="width:100%;border-collapse:collapse;font-size:15px;color:#1b2b6b;">
                      <tr><td style="padding:8px 0;width:110px;color:#888;">Name</td><td style="padding:8px 0;font-weight:600;">{form.name}</td></tr>
                      <tr><td style="padding:8px 0;color:#888;">Location</td><td style="padding:8px 0;">{location_label}</td></tr>
                      <tr><td style="padding:8px 0;color:#888;">Rating</td><td style="padding:8px 0;color:#f5c518;font-size:20px;letter-spacing:2px;">{stars} <span style="color:#1b2b6b;font-size:14px;">({form.rating}/5)</span></td></tr>
                    </table>
                    <div style="margin-top:18px;">
                      <div style="font-size:13px;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Feedback</div>
                      <div style="background:#fff;padding:16px;border-left:4px solid #d62b2b;border-radius:4px;color:#1b2b6b;line-height:1.55;">{form.message}</div>
                    </div>
                  </div>
                </div>
            """,
        })
    except Exception as e:
        logger.error("Resend feedback email failed: %s", e)
        raise HTTPException(status_code=502, detail="Failed to send email.")

    return {"success": True}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
