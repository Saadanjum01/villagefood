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
  const firstName = safeName.split(" ")[0];

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

    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      reply_to: NOTIFY_TO,
      subject: "We received your message — Village Pizza & Seafood",
      html: `
        <div style="font-family:Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;background:#fbf6ec;border:1px solid #e8e1d2;border-radius:8px;overflow:hidden;">
          <div style="background:#1b2b6b;padding:28px;text-align:center;">
            <h1 style="color:#f5c518;margin:0;font-size:26px;letter-spacing:1px;">VILLAGE PIZZA &amp; SEAFOOD</h1>
            <p style="color:#fbf6ec;margin:8px 0 0;font-size:13px;opacity:0.85;">Family-Owned. Texas-Raised. Since 1995.</p>
          </div>
          <div style="padding:32px 28px;color:#1b2b6b;line-height:1.6;font-size:15px;">
            <p style="margin:0 0 14px;font-size:18px;">Hi ${firstName},</p>
            <p style="margin:0 0 14px;">
              Thanks for reaching out to <strong>Village Pizza &amp; Seafood</strong>. We've received your message and one of our team will get back to you as soon as possible — usually within one business day.
            </p>
            <div style="background:#fff;padding:14px 16px;border-left:4px solid #f5c518;border-radius:4px;margin:18px 0;">
              <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Your message</div>
              <div style="color:#1b2b6b;">${safeMessage}</div>
            </div>
            <p style="margin:0 0 14px;">
              In the meantime, feel free to give us a call at <strong><a href="tel:2813323606" style="color:#d62b2b;text-decoration:none;">281-332-3606</a></strong> or stop by one of our seven Texas locations.
            </p>
            <p style="margin:24px 0 0;">— The Village Pizza &amp; Seafood Team</p>
          </div>
          <div style="background:#1b2b6b;color:#fbf6ec;text-align:center;padding:16px;font-size:12px;">
            <div style="opacity:0.85;">Dickinson · La Porte · League City · Pasadena · Santa Fe · Seabrook · CE King</div>
            <div style="margin-top:6px;opacity:0.7;">villagepizzaseafood.com</div>
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
