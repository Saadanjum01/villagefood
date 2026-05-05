import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { locations } from "../data/locations";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/_/backend/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setForm({ name: "", email: "", location: "", message: "" });
      toast.success("Message sent! We'll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="bg-cream">
      {/* Hero */}
      <section className="bg-navy hero-pattern clip-diagonal-tr py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-ui text-sm text-cream/80">Say Hello</div>
            <h1
              className="font-display mt-2 text-gold"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.95 }}
              data-testid="contact-title"
            >
              GET IN TOUCH
            </h1>
            <p className="font-body mx-auto mt-5 max-w-xl text-cream/85">
              Catering, questions, compliments — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
            data-testid="contact-info"
          >
            <div className="font-ui text-sm text-red">Reach the Village</div>
            <h2
              className="font-display text-navy"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", lineHeight: 1 }}
            >
              WE'RE HERE WHEN YOU NEED US.
            </h2>

            <ul className="space-y-5 pt-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-none text-red" size={20} />
                <div>
                  <div className="label">Headquarters</div>
                  <div className="font-body">2314 West Main St, League City, TX 77573</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 flex-none text-red" size={20} />
                <div>
                  <div className="label">Main Line</div>
                  <a className="font-body text-red hover:underline" href="tel:2813323606">
                    281-332-3606
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 flex-none text-red" size={20} />
                <div>
                  <div className="label">Email</div>
                  <a
                    href="mailto:hello@villagepizzaseafood.com"
                    className="font-body text-red hover:underline"
                  >
                    hello@villagepizzaseafood.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 flex-none text-red" size={20} />
                <div>
                  <div className="label">Hours</div>
                  <div className="font-body">Mon–Sun: 10:30am – 10:00pm</div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-md bg-white p-8 shadow-lg"
            style={{ borderTop: "4px solid var(--gold)" }}
            data-testid="contact-form"
          >
            <h3 className="font-display text-3xl text-navy">SEND A MESSAGE</h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  className="field"
                  value={form.name}
                  onChange={handleChange}
                  data-testid="contact-input-name"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="field"
                  value={form.email}
                  onChange={handleChange}
                  data-testid="contact-input-email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="label" htmlFor="location">Location</label>
              <select
                id="location"
                name="location"
                className="field"
                value={form.location}
                onChange={handleChange}
                data-testid="contact-input-location"
              >
                <option value="">Select a location</option>
                {locations.map((l) => (
                  <option key={l.id} value={l.id}>{l.name}</option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label className="label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="field"
                value={form.message}
                onChange={handleChange}
                data-testid="contact-input-message"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary mt-6 w-full sm:w-auto"
              data-testid="contact-submit"
            >
              {submitting ? "Sending..." : "Send Message"} <Send size={16} />
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
