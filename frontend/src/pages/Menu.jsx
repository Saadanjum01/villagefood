import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { menu, menuCategories } from "../data/menu";

const Lightbox = ({ item, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ backgroundColor: "rgba(0,0,0,0.82)" }}
      >
        <motion.div
          className="relative max-w-lg w-full bg-white rounded-lg overflow-hidden shadow-2xl"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.image}
            alt={item.title ?? item.name}
            className="w-full h-full object-contain bg-white"
            style={{ maxHeight: "420px" }}
          />
          <div className="p-5" style={{ borderTop: "3px solid var(--gold)" }}>
            <h3 className="font-display text-2xl text-navy">{item.title ?? item.name}</h3>
            {item.description ? (
              <p className="font-body mt-1 text-sm text-dark/75">{item.description}</p>
            ) : null}
            {item.price ? (
              <p className="font-ui mt-3 font-bold text-red">{item.price}</p>
            ) : null}
            {item.sm ? (
              <p className="font-ui mt-3 text-red">
                Small: {item.sm} &nbsp;|&nbsp; Large: {item.lg}
              </p>
            ) : null}
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 rounded-full bg-black/50 text-white w-8 h-8 flex items-center justify-center text-lg leading-none hover:bg-black/75 transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Menu = () => {
  const [active, setActive] = useState("pizza");
  const [lightboxItem, setLightboxItem] = useState(null);
  const sectionRefs = useRef({});
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const catParam = searchParams.get("category");
    if (catParam && sectionRefs.current[catParam]) {
      setTimeout(() => {
        const el = sectionRefs.current[catParam];
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 170;
          window.scrollTo({ top: y, behavior: "smooth" });
          setActive(catParam);
        }
      }, 100);
    }
  }, [location.search]);

  useEffect(() => {
    const handler = () => {
      const offset = 220;
      let current = "pizza";
      for (const cat of menuCategories) {
        const el = sectionRefs.current[cat.id];
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = cat.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 170;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div data-testid="menu-page" className="bg-cream">
      {lightboxItem && (
        <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}

      {/* Hero */}
      <section className="bg-navy hero-pattern clip-diagonal-tr py-20" data-testid="menu-hero">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-ui text-sm text-cream/80">Our Full Menu</div>
            <h1
              className="font-display mt-2 text-gold"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.95 }}
              data-testid="menu-title"
            >
              EAT IT LOVE IT
            </h1>
            <p className="font-body mx-auto mt-5 max-w-xl text-cream/85">
              From homemade pizzas to gulf-fresh seafood — every bite, every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky tabs */}
      <div
        className="sticky z-40 bg-cream"
        style={{ top: "76px", borderBottom: "2px solid rgba(27,43,107,0.12)" }}
        data-testid="menu-tabs"
      >
        <div className="mx-auto max-w-7xl px-2 lg:px-6">
          <nav className="no-scrollbar flex gap-1 overflow-x-auto py-3">
            {menuCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                data-testid={`menu-tab-${c.id}`}
                className="font-ui whitespace-nowrap rounded-sm px-4 py-2 text-sm transition-colors"
                style={{
                  color: active === c.id ? "var(--navy)" : "var(--dark)",
                  background: active === c.id ? "var(--gold)" : "transparent",
                  fontWeight: active === c.id ? 700 : 500,
                }}
              >
                {c.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Sections */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {menuCategories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            ref={(el) => (sectionRefs.current[cat.id] = el)}
            className="scroll-mt-40 py-12"
            data-testid={`menu-section-${cat.id}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="mb-8 border-b-4 border-red pb-4"
            >
              <h2
                className="font-display text-navy"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", lineHeight: 1 }}
              >
                {cat.label.toUpperCase()}
              </h2>
              {cat.note ? (
                <p
                  className={`font-body mt-3 max-w-2xl text-sm ${cat.id === "hotSubs" ? "font-bold text-dark" : "text-dark/75"
                    }`}
                >
                  {cat.note}
                </p>
              ) : null}
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {menu[cat.id].map((item, i) => {
                const displayPrice =
                  item.price || (item.sm ? `Sm ${item.sm} / Lg ${item.lg}` : "");
                return (
                  <motion.div
                    key={i}
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.01 }}
                    transition={{ duration: 0.2 }}
                    className={`flex flex-col rounded-md bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden ${item.image ? "cursor-pointer" : ""}`}
                    style={{ borderTop: "3px solid var(--gold)" }}
                    onClick={() => item.image && setLightboxItem(item)}
                    data-testid={`menu-item-${cat.id}-${i}`}
                  >
                    {item.image && (
                      <div className="w-full overflow-hidden" style={{ height: "180px" }}>
                        <img
                          src={item.image}
                          alt={item.title ?? item.name}
                          className="w-full h-full object-contain bg-white transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-xl text-navy">{item.title ?? item.name}</h3>
                        <span className="font-ui shrink-0 text-red">{displayPrice}</span>
                      </div>
                      {item.description ? (
                        <p className="font-body mt-2 text-sm text-dark/75">{item.description}</p>
                      ) : null}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Menu;
