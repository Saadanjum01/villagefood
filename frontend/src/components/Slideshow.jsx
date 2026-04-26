import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/slide-pepperoni.jpeg",
    eyebrow: "Hand-tossed",
    title: "Pepperoni Classic",
    body: "Vine-ripe sauce, mountains of mozzarella, and crisped-edge pepperoni — the way a pizza ought to be.",
  },
  {
    src: "/images/slide-meatballs.jpeg",
    eyebrow: "Family Style",
    title: "Meatballs & Marinara",
    body: "Slow-simmered sauce, melted mozzarella, and a basket of warm garlic bread alongside.",
  },
  {
    src: "/images/home-hero.jpeg",
    eyebrow: "Catering Ready",
    title: "Lasagna & Garlic Bread",
    body: "Layered, baked, and bubbling — feed the table with a Village classic.",
  },
];

const AUTO_MS = 4500;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // Preload slideshow images to avoid blank/slow transitions.
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), AUTO_MS);
    return () => clearTimeout(t);
  }, [index, paused]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const slide = slides[index];

  return (
    <section
      className="bg-cream py-20"
      data-testid="home-slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end"
        >
          <div>
            <div className="font-ui text-sm text-red">From The Kitchen</div>
            <h2
              className="font-display text-navy"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", lineHeight: 1 }}
            >
              FRESH OUT OF THE OVEN
            </h2>
          </div>
          <div className="font-ui text-sm text-dark/60">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </motion.div>

        <div
          className="relative overflow-hidden rounded-md shadow-2xl"
          style={{
            border: "4px solid var(--navy)",
            aspectRatio: "16 / 8",
            background: "var(--navy)",
          }}
          data-testid="slideshow-stage"
        >
          {/* Slides (crossfade + ken-burns) */}
          <AnimatePresence mode="sync">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={slide.src}
                alt={slide.title}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                className="h-full w-full object-cover"
                draggable={false}
              />
              {/* Gradient overlay for legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(17,17,17,0.78) 0%, rgba(17,17,17,0.45) 45%, rgba(17,17,17,0.05) 75%)",
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Caption */}
          <div className="absolute inset-0 flex items-end sm:items-center">
            <div className="w-full p-6 sm:max-w-xl sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`caption-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="font-ui text-xs text-gold sm:text-sm">{slide.eyebrow}</div>
                  <h3
                    className="font-display mt-1 text-cream"
                    style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)", lineHeight: 0.95 }}
                  >
                    {slide.title.toUpperCase()}
                  </h3>
                  <p className="font-body mt-3 max-w-md text-cream/90">{slide.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Arrow controls */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            data-testid="slideshow-prev"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-gold p-2 text-navy shadow-lg transition-transform hover:scale-110 sm:left-5 sm:p-3"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            data-testid="slideshow-next"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-gold p-2 text-navy shadow-lg transition-transform hover:scale-110 sm:right-5 sm:p-3"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-cream/20">
            <motion.div
              key={`bar-${index}-${paused}`}
              initial={{ width: "0%" }}
              animate={{ width: paused ? "0%" : "100%" }}
              transition={{ duration: paused ? 0 : AUTO_MS / 1000, ease: "linear" }}
              className="h-full bg-gold"
            />
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-3" data-testid="slideshow-dots">
          {slides.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                data-testid={`slideshow-dot-${i}`}
                className="group flex items-center gap-2"
              >
                <motion.span
                  animate={{ width: active ? 32 : 10, backgroundColor: active ? "#C8281E" : "#1B2B6B" }}
                  transition={{ duration: 0.3 }}
                  className="block h-2.5 rounded-full"
                  style={{ opacity: active ? 1 : 0.35 }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
