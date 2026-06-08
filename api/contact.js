const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_TO = process.env.CONTACT_NOTIFY_TO || "john@villagepizzaseafood.com";
const FROM_ADDRESS = process.env.RESEND_FROM || "Village Pizza & Seafood <john@villagepizzaseafood.com>";

const LOCATION_NAMES = {
  "dickinson": "Dickinson",
  "la-porte": "La Porte",
  "pasadena": "Pasadena",
  "santa-fe": "Santa Fe",
  "seabrook": "Seabrook",
  "league-city": "League City",
};

const escape = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, location, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const safeName = escape(name);
  const safeEmail = escape(email);
  const safeMessage = escape(message).replace(/\n/g, "<br/>");
  const locationLabel = location ? (LOCATION_NAMES[location] || location) : null;

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: NOTIFY_TO,
      reply_to: email,
      subject: `New contact message from ${name}`,
      html: `
        <div style="font-family:Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;background:#fbf6ec;padding:0;border:1px solid #e8e1d2;border-radius:8px;overflow:hidden;">
          <div style="background:#1b2b6b;padding:24px;text-align:center;">
            <h1 style="color:#f5c518;margin:0;font-size:22px;letter-spacing:1px;">VILLAGE PIZZA &amp; SEAFOOD</h1>
            <p style="color:#fbf6ec;margin:6px 0 0;font-size:13px;opacity:0.85;">New Contact Form Submission</p>
          </div>
          <div style="padding:28px 28px 20px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;color:#1b2b6b;">
              <tr><td style="padding:8px 0;width:110px;color:#888;">Name</td><td style="padding:8px 0;font-weight:600;">${safeName}</td></tr>
              <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#d62b2b;text-decoration:none;">${safeEmail}</a></td></tr>
              ${locationLabel ? `<tr><td style="padding:8px 0;color:#888;">Location</td><td style="padding:8px 0;">${escape(locationLabel)}</td></tr>` : ""}
            </table>
            <div style="margin-top:18px;">
              <div style="font-size:13px;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Message</div>
              <div style="background:#fff;padding:16px;border-left:4px solid #f5c518;border-radius:4px;color:#1b2b6b;line-height:1.55;">${safeMessage}</div>
            </div>
          </div>
          <div style="background:#1b2b6b;color:#fbf6ec;text-align:center;padding:14px;font-size:12px;opacity:0.85;">
            Reply directly to this email to respond to ${safeName}.
          </div>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    res.status(500).json({ error: err.message || "Failed to send email" });
  }
};
