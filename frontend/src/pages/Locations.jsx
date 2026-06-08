import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, ExternalLink, Navigation, ChevronRight } from "lucide-react";
import { locations, mapsUrl } from "../data/locations";

const Locations = () => {
  return (
    <div data-testid="locations-page" className="bg-cream">
      {/* Hero */}
      <section className="bg-navy hero-pattern clip-diagonal-tr py-24" data-testid="locations-hero">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-ui text-sm text-cream/80">
              {locations.length} Texas Communities
            </div>
            <h1
              className="font-display mt-2 text-gold"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.95 }}
              data-testid="locations-title"
            >
              FIND YOUR VILLAGE
            </h1>
            <p className="font-body mx-auto mt-5 max-w-xl text-cream/85">
              From the Bay to the Bayou — there's always a Village near you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l, idx) => (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -8 }}
              className="location-card flex flex-col rounded-md bg-white p-7 shadow-md transition-shadow hover:shadow-2xl"
              data-testid={`location-card-${l.id}`}
            >
              <div className="brand-gradient-warm h-1.5 w-12 rounded-full" />
              <h2 className="font-display mt-3 text-3xl text-navy">{l.name}</h2>

              <div className="mt-4 flex items-start gap-2 font-body text-sm text-dark/80">
                <MapPin size={16} className="mt-1 flex-none text-red" />
                <span>{l.address}</span>
              </div>

              <a
                href={`tel:${l.phone.replace(/\D/g, "")}`}
                className="mt-2 inline-flex items-center gap-2 font-ui text-sm text-red hover:text-navy"
                data-testid={`location-phone-${l.id}`}
              >
                <Phone size={14} /> {l.phone}
              </a>

              <div className="mt-6 flex flex-col gap-2.5">
                {l.orderUrl ? (
                  <a
                    href={l.orderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full"
                    data-testid={`location-order-${l.id}`}
                  >
                    Order Online <ExternalLink size={16} />
                  </a>
                ) : null}
                <a
                  href={mapsUrl(l.address)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost-navy w-full"
                  data-testid={`location-directions-${l.id}`}
                >
                  Get Directions <Navigation size={16} />
                </a>
                <Link
                  to={`/locations/${l.id}`}
                  className="font-ui mt-1 inline-flex items-center justify-center gap-1 self-center text-sm text-navy hover:text-red"
                  data-testid={`location-details-${l.id}`}
                >
                  View Details <ChevronRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Locations;
