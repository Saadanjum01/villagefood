const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_TO = process.env.CONTACT_NOTIFY_TO || "john@villagepizzaseafood.com";
const FROM_ADDRESS = process.env.RESEND_FROM || "Village Pizza & Seafood <john@villagepizzaseafood.com>";

const LOCATION_NAMES = {
  "dickinson": "Dickinson",
  "la-porte": "La Porte",
  "league-city": "League City",
  "pasadena": "Pasadena",
  "santa-fe": "Santa Fe",
  "seabrook": "Seabrook",
  "ce-king": "CE King (Houston)",
};

const escape = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const STARS = (n) => "★".repeat(n) + "☆".repeat(5 - n);

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, location, rating, message } = req.body || {};

  if (!name || !location || !rating || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const safeName = escape(name);
  const safeMessage = escape(message).replace(/\n/g, "<br/>");
  const locationLabel = LOCATION_NAMES[location] || location;
  const safeLocation = escape(locationLabel);
  const ratingNum = Number(rating);

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: NOTIFY_TO,
      subject: `New feedback (${ratingNum}/5) — ${locationLabel}`,
      html: `
        <div style="font-family:Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;background:#fbf6ec;border:1px solid #e8e1d2;border-radius:8px;overflow:hidden;">
          <div style="background:#1b2b6b;padding:24px;text-align:center;">
            <h1 style="color:#f5c518;margin:0;font-size:22px;letter-spacing:1px;">VILLAGE PIZZA &amp; SEAFOOD</h1>
            <p style="color:#fbf6ec;margin:6px 0 0;font-size:13px;opacity:0.85;">New Customer Feedback</p>
          </div>
          <div style="padding:28px 28px 20px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;color:#1b2b6b;">
              <tr><td style="padding:8px 0;width:110px;color:#888;">Name</td><td style="padding:8px 0;font-weight:600;">${safeName}</td></tr>
              <tr><td style="padding:8px 0;color:#888;">Location</td><td style="padding:8px 0;">${safeLocation}</td></tr>
              <tr><td style="padding:8px 0;color:#888;">Rating</td><td style="padding:8px 0;color:#f5c518;font-size:20px;letter-spacing:2px;">${STARS(ratingNum)} <span style="color:#1b2b6b;font-size:14px;">(${ratingNum}/5)</span></td></tr>
            </table>
            <div style="margin-top:18px;">
              <div style="font-size:13px;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Feedback</div>
              <div style="background:#fff;padding:16px;border-left:4px solid #d62b2b;border-radius:4px;color:#1b2b6b;line-height:1.55;">${safeMessage}</div>
            </div>
          </div>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Feedback email error:", err);
    res.status(500).json({ error: err.message || "Failed to send email" });
  }
};
