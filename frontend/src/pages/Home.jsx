import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, ChevronRight, Star, Award, Utensils } from "lucide-react";
import Slideshow from "../components/Slideshow";
import { locations, mapsUrl } from "../data/locations";

// Hero background uses one of the user's own food shots.
const HERO_BG =
  "https://customer-assets.emergentagent.com/job_pizzavillage-deploy/artifacts/dnp52cey_WhatsApp%20Image%202026-04-21%20at%209.18.29%20PM.jpeg";

// Stock images for feature blocks (Unsplash, free-to-use)
const PIZZA_IMG =
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80&auto=format&fit=crop";
const SEAFOOD_IMG =
  "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1200&q=80&auto=format&fit=crop";
const STORY_IMG =
  "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1200&q=80&auto=format&fit=crop";

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* HERO — full-bleed food photo, editorial asymmetric layout */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "92vh" }}
        data-testid="home-hero"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <motion.img
            src={HERO_BG}
            alt=""
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="h-full w-full object-cover"
          />
          {/* Color wash + vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(27,43,107,0.92) 0%, rgba(27,43,107,0.78) 38%, rgba(17,17,17,0.55) 70%, rgba(17,17,17,0.55) 100%)",
            }}
          />
          {/* Subtle radial accent */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 85% 20%, rgba(245,197,24,0.18) 0%, transparent 40%), radial-gradient(circle at 5% 90%, rgba(200,40,30,0.25) 0%, transparent 45%)",
            }}
          />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
          {/* Top eyebrow row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-ui flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gold sm:text-sm"
          >
            <span className="inline-flex items-center gap-1.5">
              <Award size={14} /> Est. 1995
            </span>
            <span className="opacity-50">/</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> 7 Texas Locations
            </span>
            <span className="opacity-50">/</span>
            <span className="inline-flex items-center gap-1.5">
              <Star size={14} /> Family-Owned
            </span>
          </motion.div>

          {/* Headline + supporting block (left-aligned, asymmetric) */}
          <div className="mt-8 grid items-end gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h1
                className="font-display text-cream"
                style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)", lineHeight: 0.9 }}
                data-testid="home-hero-title"
              >
                <span className="block text-gold">HAND-TOSSED.</span>
                <span className="block">GULF-FRESH.</span>
                <span
                  className="block"
                  style={{ color: "var(--orange)" }}
                >
                  TEXAS-RAISED.
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="lg:col-span-4 lg:pl-6"
              style={{ borderLeft: "2px solid rgba(245,197,24,0.6)" }}
            >
              <p
                className="font-body text-lg text-cream/95 lg:text-xl"
                data-testid="home-hero-tagline"
              >
                Three decades of pies, platters, and packed dining rooms.
                One family. One recipe book. Seven hometowns.
              </p>
            </motion.div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <Link to="/menu" className="btn-primary" data-testid="home-cta-menu">
              View Our Menu <ArrowRight size={18} />
            </Link>
            <Link to="/locations" className="btn-gold" data-testid="home-cta-locations">
              Find a Location <MapPin size={18} />
            </Link>
          </motion.div>

          {/* Floating stat cards (right side, desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute right-8 top-24 hidden w-64 flex-col gap-3 lg:flex"
          >
            <div
              className="rounded-md bg-cream/10 p-4 backdrop-blur-md"
              style={{ border: "1px solid rgba(245,197,24,0.35)" }}
            >
              <div className="font-ui text-xs text-gold">Open Daily</div>
              <div className="font-display text-2xl text-cream">10:30A — 10P</div>
            </div>
            <div
              className="rounded-md bg-cream/10 p-4 backdrop-blur-md"
              style={{ border: "1px solid rgba(245,197,24,0.35)" }}
            >
              <div className="font-ui text-xs text-gold">Order Online</div>
              <div className="font-display text-2xl text-cream">7 Branches</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom marquee strip */}
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{
            background: "var(--red)",
            borderTop: "3px solid var(--gold)",
          }}
        >
          <div className="font-ui flex animate-[marquee_28s_linear_infinite] whitespace-nowrap py-3 text-cream">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex shrink-0 items-center gap-10 pr-10">
                <span>● HAND-STRETCHED DOUGH</span>
                <span>● GULF-FRESH SEAFOOD</span>
                <span>● FAMILY-OWNED SINCE 1995</span>
                <span>● 7 TEXAS LOCATIONS</span>
                <span>● ORDER ONLINE</span>
                <span>● CATERING AVAILABLE</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY — split with photo */}
      <section className="bg-cream py-24" data-testid="home-story">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-md"
            style={{ aspectRatio: "4 / 5", border: "4px solid var(--navy)" }}
          >
            <img
              src={STORY_IMG}
              alt="Wood-fired kitchen"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{
                background:
                  "linear-gradient(0deg, rgba(17,17,17,0.85) 0%, transparent 100%)",
              }}
            >
              <div className="font-ui text-xs text-gold">Since 1995</div>
              <div className="font-display text-3xl text-cream">30 YEARS &amp; COUNTING</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="font-ui text-sm text-red">Our Story</div>
            <h2
              className="font-display mt-2 text-navy"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1 }}
            >
              GOOD FOOD.<br />GOOD PEOPLE.<br />
              <span className="text-red">GOOD TIMES.</span>
            </h2>
            <p className="mt-6 font-body text-lg text-dark/80">
              Seven neighborhood kitchens across the Texas Gulf Coast — one
              family recipe book. We slice the cheese, hand-stretch the dough,
              and source seafood from the coast we call home.
            </p>
            <p className="mt-4 font-body text-lg text-dark/80">
              Whether it's a busy Tuesday or a Friday-night feast, you're
              always welcome at the Village.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "30+", l: "Years" },
                { n: "7", l: "Locations" },
                { n: "1", l: "Family" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-md bg-white p-4 text-center shadow-sm"
                  style={{ borderTop: "3px solid var(--gold)" }}
                >
                  <div className="font-display text-4xl text-red">{s.n}</div>
                  <div className="font-ui text-xs text-navy">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHOTO SLIDESHOW */}
      <Slideshow />

      {/* SIDE-BY-SIDE FEATURE BLOCKS — with images */}
      <section className="grid md:grid-cols-2" data-testid="home-feature-blocks">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden"
          style={{ minHeight: 480 }}
          data-testid="home-feature-pizza"
        >
          <img
            src={PIZZA_IMG}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(200,40,30,0.92) 0%, rgba(200,40,30,0.78) 60%, rgba(17,17,17,0.6) 100%)",
            }}
          />
          <div className="relative flex h-full flex-col justify-end p-10 text-cream md:p-14">
            <Utensils className="text-gold" size={36} />
            <h3 className="font-display mt-4 text-6xl text-gold">PIZZA</h3>
            <p className="font-body mt-3 max-w-md text-cream/95 text-lg">
              Hand-tossed dough, vine-ripe sauce, and mountains of mozzarella.
              Classic, specialty, and build-your-own — small or large.
            </p>
            <Link
              to="/menu#pizza"
              className="font-ui mt-6 inline-flex w-fit items-center gap-2 border-b-2 border-gold pb-1 text-gold hover:text-cream"
              data-testid="home-feature-pizza-link"
            >
              Browse Pizzas <ChevronRight size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden"
          style={{ minHeight: 480 }}
          data-testid="home-feature-seafood"
        >
          <img
            src={SEAFOOD_IMG}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(27,43,107,0.92) 0%, rgba(27,43,107,0.78) 60%, rgba(17,17,17,0.6) 100%)",
            }}
          />
          <div className="relative flex h-full flex-col justify-end p-10 text-cream md:p-14">
            <Star className="text-gold" size={36} />
            <h3 className="font-display mt-4 text-6xl text-gold">SEAFOOD</h3>
            <p className="font-body mt-3 max-w-md text-cream/95 text-lg">
              Gulf shrimp, fresh-fried catfish, oysters and more — golden,
              crispy, and served with the sides that make a Texas plate complete.
            </p>
            <Link
              to="/menu#seafood"
              className="font-ui mt-6 inline-flex w-fit items-center gap-2 border-b-2 border-gold pb-1 text-gold hover:text-cream"
              data-testid="home-feature-seafood-link"
            >
              Browse Seafood <ChevronRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* LOCATIONS PREVIEW */}
      <section className="bg-cream py-24" data-testid="home-locations-preview">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <div className="font-ui text-sm text-red">Find Your Village</div>
              <h2
                className="font-display text-navy"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1 }}
              >
                SEVEN TEXAS LOCATIONS
              </h2>
            </div>
            <Link to="/locations" className="btn-ghost-navy" data-testid="home-all-locations-link">
              All Locations <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {locations.map((l, idx) => (
              <motion.div
                key={l.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="location-card flex flex-col rounded-md bg-white p-6 shadow-md transition-shadow hover:shadow-xl"
                data-testid={`home-location-card-${l.id}`}
              >
                <h3 className="font-display text-3xl text-navy">{l.name}</h3>
                <div className="mt-3 flex items-start gap-2 font-body text-sm text-dark/80">
                  <MapPin size={16} className="mt-1 flex-none text-red" />
                  <span>{l.address}</span>
                </div>
                <a
                  href={`tel:${l.phone.replace(/\D/g, "")}`}
                  className="mt-2 flex items-center gap-2 font-ui text-sm text-red hover:text-navy"
                  data-testid={`home-location-phone-${l.id}`}
                >
                  <Phone size={14} /> {l.phone}
                </a>
                <div className="mt-5 flex flex-wrap gap-2">
                  {l.orderUrl ? (
                    <a
                      href={l.orderUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                      style={{ padding: "0.55rem 1rem", fontSize: "0.78rem" }}
                      data-testid={`home-order-${l.id}`}
                    >
                      Order
                    </a>
                  ) : null}
                  <a
                    href={mapsUrl(l.address)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost-navy"
                    style={{ padding: "0.55rem 1rem", fontSize: "0.78rem" }}
                    data-testid={`home-directions-${l.id}`}
                  >
                    Directions
                  </a>
                  <Link
                    to={`/locations/${l.id}`}
                    className="font-ui inline-flex items-center gap-1 self-center text-sm text-navy hover:text-red"
                    data-testid={`home-details-${l.id}`}
                  >
                    Details <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
