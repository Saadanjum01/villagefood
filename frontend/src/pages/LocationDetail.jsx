import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink, ArrowLeft, Navigation } from "lucide-react";
import { getLocationById, mapsUrl, mapEmbedUrl } from "../data/locations";

const LocationDetail = () => {
  const { id } = useParams();
  const loc = getLocationById(id);

  if (!loc) return <Navigate to="/locations" replace />;

  return (
    <div data-testid={`location-detail-${loc.id}`} className="bg-cream">
      {/* Hero */}
      <section className="bg-navy hero-pattern clip-diagonal-tr py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/locations"
              className="font-ui inline-flex items-center gap-2 text-cream/80 hover:text-gold"
              data-testid="back-to-locations"
            >
              <ArrowLeft size={16} /> All Locations
            </Link>
            <div className="font-ui mt-6 text-sm text-cream/80">Village Pizza & Seafood</div>
            <h1
              className="font-display mt-1 text-gold"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.95 }}
              data-testid="location-detail-name"
            >
              {loc.name.toUpperCase()}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-md bg-white p-8 shadow-md"
          style={{ borderLeft: "4px solid var(--red)" }}
          data-testid="location-detail-info"
        >
          <h2 className="font-display text-3xl text-navy">VISIT US</h2>

          <div className="mt-6 space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 flex-none text-red" size={20} />
              <div>
                <div className="label">Address</div>
                <div className="font-body text-dark">{loc.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 flex-none text-red" size={20} />
              <div>
                <div className="label">Phone</div>
                <a
                  href={`tel:${loc.phone.replace(/\D/g, "")}`}
                  className="font-body text-red hover:underline"
                  data-testid="location-detail-phone"
                >
                  {loc.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 flex-none text-red" size={20} />
              <div>
                <div className="label">Hours</div>
                <div className="font-body text-dark">
                  {loc.hours || "Call for hours"}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {loc.orderUrl ? (
              <a
                href={loc.orderUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                data-testid="location-detail-order"
              >
                Order Online Now <ExternalLink size={16} />
              </a>
            ) : null}
            <a
              href={mapsUrl(loc.address)}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-navy"
              data-testid="location-detail-directions"
            >
              Directions <Navigation size={16} />
            </a>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-md shadow-md"
          style={{ minHeight: 360, border: "3px solid var(--navy)" }}
          data-testid="location-detail-map"
        >
          <iframe
            title={`${loc.name} Map`}
            src={mapEmbedUrl(loc.address)}
            className="h-full min-h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default LocationDetail;
