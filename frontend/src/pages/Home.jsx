import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, ChevronRight } from "lucide-react";
import Logo from "../components/Logo";
import Slideshow from "../components/Slideshow";
import { locations, mapsUrl } from "../data/locations";

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section
        className="relative bg-navy hero-pattern clip-diagonal-tr"
        style={{ minHeight: "92vh" }}
        data-testid="home-hero"
      >
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Logo size={140} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display mt-8 text-gold"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 0.95 }}
            data-testid="home-hero-title"
          >
            VILLAGE PIZZA<br /><span style={{ color: "var(--cream)" }}>& SEAFOOD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body mt-6 max-w-2xl text-lg text-cream/90"
            data-testid="home-hero-tagline"
          >
            Hand-tossed pies. Gulf-fresh seafood. A Texas family tradition since 1995.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link to="/menu" className="btn-primary" data-testid="home-cta-menu">
              View Our Menu <ArrowRight size={18} />
            </Link>
            <Link to="/locations" className="btn-gold" data-testid="home-cta-locations">
              Find a Location <MapPin size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="bg-cream py-24" data-testid="home-story">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-ui text-sm text-red">Established 1995</div>
            <h2
              className="font-display mt-2 text-navy"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1 }}
            >
              GOOD FOOD. GOOD PEOPLE. GOOD TIMES.
            </h2>
            <p className="mt-6 font-body text-lg text-dark/80">
              Seven neighborhood kitchens across the Texas Gulf Coast — one
              family recipe book. We slice the cheese, hand-stretch the dough,
              and source seafood from the coast we call home. Whether it's a
              busy Tuesday or a Friday-night feast, you're always welcome at the
              Village.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PHOTO SLIDESHOW */}
      <Slideshow />

      {/* SIDE-BY-SIDE FEATURE BLOCKS */}
      <section className="grid md:grid-cols-2" data-testid="home-feature-blocks">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-red px-8 py-20 text-cream md:px-14"
          data-testid="home-feature-pizza"
        >
          <div className="brand-gradient-sunset h-2 w-16 rounded-full" />
          <h3 className="font-display mt-5 text-5xl text-gold">PIZZA</h3>
          <p className="font-body mt-4 max-w-md text-cream/90 text-lg">
            Hand-tossed dough, vine-ripe sauce, and mountains of mozzarella.
            Classic, specialty, and build-your-own — small or large, every pie
            is made to order.
          </p>
          <Link
            to="/menu#pizza"
            className="font-ui mt-7 inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-gold hover:text-cream"
            data-testid="home-feature-pizza-link"
          >
            Browse Pizzas <ChevronRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-navy px-8 py-20 text-cream md:px-14"
          data-testid="home-feature-seafood"
        >
          <div className="brand-gradient-cool h-2 w-16 rounded-full" />
          <h3 className="font-display mt-5 text-5xl text-gold">SEAFOOD</h3>
          <p className="font-body mt-4 max-w-md text-cream/90 text-lg">
            Gulf shrimp, fresh-fried catfish, oysters and more — golden,
            crispy, and served with the sides that make a Texas plate complete.
          </p>
          <Link
            to="/menu#seafood"
            className="font-ui mt-7 inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-gold hover:text-cream"
            data-testid="home-feature-seafood-link"
          >
            Browse Seafood <ChevronRight size={18} />
          </Link>
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
              <h2 className="font-display text-navy" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1 }}>
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
