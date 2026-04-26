import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Logo from "./Logo";
import { locations } from "../data/locations";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-cream"
      data-testid="footer"
      style={{ borderTop: "4px solid var(--gold)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <Logo size={56} withText />
          <p className="mt-5 max-w-sm font-body text-cream/80">
            Family-owned Texas pizza and seafood since 1995. Serving the
            communities we love, one slice at a time.
          </p>
        </div>

        <div>
          <h4 className="font-display text-2xl text-gold">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 font-ui text-sm">
            <li><Link to="/menu" className="hover:text-gold" data-testid="footer-link-menu">Menu</Link></li>
            <li><Link to="/locations" className="hover:text-gold" data-testid="footer-link-locations">Locations</Link></li>
            <li><Link to="/about" className="hover:text-gold" data-testid="footer-link-about">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold" data-testid="footer-link-contact">Contact</Link></li>
            <li><Link to="/feedback" className="hover:text-gold" data-testid="footer-link-feedback">Feedback</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-2xl text-gold">Our Locations</h4>
          <ul className="mt-4 space-y-2 font-body text-sm text-cream/85">
            {locations.map((l) => (
              <li key={l.id} className="flex items-center justify-between gap-3">
                <span className="font-ui">{l.name}</span>
                <a
                  href={`tel:${l.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-1 text-gold hover:text-cream"
                  data-testid={`footer-phone-${l.id}`}
                >
                  <Phone size={14} /> {l.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="border-t border-white/10 px-6 py-5 text-center font-ui text-xs text-cream/70"
        data-testid="footer-copyright"
      >
        © 2026 Village Pizza & Seafood. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
