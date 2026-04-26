import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/feedback", label: "Feedback" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="navbar"
      initial={false}
      animate={{ paddingTop: scrolled ? 8 : 18, paddingBottom: scrolled ? 8 : 18 }}
      transition={{ duration: 0.25 }}
      className="sticky top-0 z-50 w-full bg-navy"
      style={{
        boxShadow: scrolled ? "0 8px 24px rgba(17,17,17,0.25)" : "none",
        borderBottom: "3px solid var(--gold)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" data-testid="navbar-home-link" className="flex items-center">
          <motion.div
            animate={{ scale: scrolled ? 0.85 : 1 }}
            transition={{ duration: 0.25 }}
          >
            <Logo size={scrolled ? 48 : 64} />
          </motion.div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `nav-link text-cream ${isActive ? "active text-gold" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          data-testid="navbar-mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-cream"
        >
          {open ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-navy"
            data-testid="navbar-mobile-drawer"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `font-ui text-lg py-3 border-b border-white/10 ${
                      isActive ? "text-gold" : "text-cream"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
