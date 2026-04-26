import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";
import { toast } from "sonner";
import { locations } from "../data/locations";

const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    rating: 0,
    message: "",
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.location || form.rating === 0 || !form.message) {
      toast.error("Please complete all fields, including a star rating.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", location: "", rating: 0, message: "" });
      toast.success("Thanks for the feedback — we read every word!");
    }, 600);
  };

  return (
    <div data-testid="feedback-page" className="bg-cream">
      {/* Hero */}
      <section className="bg-navy hero-pattern clip-diagonal-tr py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-ui text-sm text-cream/80">Tell Us How We Did</div>
            <h1
              className="font-display mt-2 text-gold"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", lineHeight: 0.95 }}
              data-testid="feedback-title"
            >
              WE APPRECIATE YOUR FEEDBACK!
            </h1>
            <p className="font-body mx-auto mt-5 max-w-xl text-cream/85">
              Good, bad, or somewhere in between — your honest take helps us
              keep the kitchen humming.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="rounded-md bg-white p-8 shadow-lg"
          style={{ borderTop: "4px solid var(--red)" }}
          data-testid="feedback-form"
        >
          <h2 className="font-display text-3xl text-navy">SHARE YOUR EXPERIENCE</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label" htmlFor="fname">Name</label>
              <input
                id="fname"
                name="name"
                className="field"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                data-testid="feedback-input-name"
              />
            </div>
            <div>
              <label className="label" htmlFor="floc">Location Visited</label>
              <select
                id="floc"
                name="location"
                className="field"
                value={form.location}
                onChange={handleChange}
                data-testid="feedback-input-location"
              >
                <option value="">Select a location</option>
                {locations.map((l) => (
                  <option key={l.id} value={l.id}>{l.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <div className="label">Your Rating</div>
            <div className="flex items-center gap-2" data-testid="feedback-stars">
              {[1, 2, 3, 4, 5].map((n) => {
                const filled = (hoverRating || form.rating) >= n;
                return (
                  <button
                    type="button"
                    key={n}
                    aria-label={`Rate ${n} out of 5`}
                    onMouseEnter={() => setHoverRating(n)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setForm({ ...form, rating: n })}
                    className="transition-transform hover:scale-110"
                    data-testid={`feedback-star-${n}`}
                  >
                    <Star
                      size={32}
                      strokeWidth={2}
                      color={filled ? "var(--gold)" : "var(--navy)"}
                      fill={filled ? "var(--gold)" : "none"}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5">
            <label className="label" htmlFor="fmsg">Your Feedback</label>
            <textarea
              id="fmsg"
              name="message"
              rows={6}
              className="field"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your visit..."
              data-testid="feedback-input-message"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary mt-6"
            data-testid="feedback-submit"
          >
            {submitting ? "Submitting..." : "Submit Feedback"} <Send size={16} />
          </button>
        </motion.form>
      </section>
    </div>
  );
};

export default Feedback;
