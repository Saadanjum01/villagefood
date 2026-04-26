import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    image: "/images/home-story.jpg",
    eyebrow: "What Drives Us",
    title: "Mission",
    body: "Serve every neighbor a plate worth coming back for — made fresh, served fast, and rooted in Texas hospitality.",
  },
  {
    image: "/images/about-vision.jpg",
    eyebrow: "Where We're Headed",
    title: "Vision",
    body: "Be the favorite hometown table from the Bay to the Bayou, where pizza night and seafood Friday belong to one name: Village.",
  },
  {
    image: "/images/about-values.jpg",
    eyebrow: "How We Show Up",
    title: "Values",
    body: "Family first. Quality always. Community above all. We hire local, source local, and serve the people who built us.",
  },
];

const About = () => {
  return (
    <div data-testid="about-page" className="bg-cream">
      {/* Hero */}
      <section className="bg-navy hero-pattern clip-diagonal-tr py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-ui text-sm text-cream/80">Established 1995</div>
            <h1
              className="font-display mt-2 text-gold"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.95 }}
              data-testid="about-title"
            >
              FAMILY-OWNED.<br />TEXAS-RAISED.
            </h1>
            <p className="font-body mx-auto mt-6 max-w-2xl text-lg text-cream/90">
              For more than three decades, the same family has been turning out
              pies and platters at Village Pizza & Seafood — one neighbor, one
              table, one Texas town at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8" data-testid="about-story">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-ui text-sm text-red">Our Story</div>
            <h2
              className="font-display mt-2 text-navy"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", lineHeight: 1 }}
            >
              ONE OVEN. ONE FAMILY. ONE PROMISE.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-dark/85"
          >
            <p>
              We started in 1995 with a single oven, a small dining room, and
              one belief: the best food is the food you'd serve your own family.
              Three decades later, that promise still drives every dough ball
              we toss and every basket of shrimp we lift from the fryer.
            </p>
            <p className="mt-4">
              Today, seven Village kitchens serve communities across the Texas
              Gulf Coast — from Dickinson to Houston, La Porte to Santa Fe.
              Different towns, same recipes, same family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-20" data-testid="about-values">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="font-ui text-sm text-gold">The Village Way</div>
            <h2
              className="font-display mt-2 text-gold"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", lineHeight: 1 }}
            >
              WHAT WE STAND FOR
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col overflow-hidden rounded-md bg-cream shadow-lg"
                style={{ borderTop: "4px solid var(--red)" }}
                data-testid={`about-value-${v.title.toLowerCase()}`}
              >
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(27,43,107,0.1) 0%, rgba(27,43,107,0.55) 100%)",
                    }}
                  />
                  <div className="absolute bottom-3 left-5">
                    <div className="font-ui text-xs text-gold">{v.eyebrow}</div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-3xl text-navy">
                    {v.title.toUpperCase()}
                  </h3>
                  <p className="font-body mt-3 text-dark/80">{v.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
