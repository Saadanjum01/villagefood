import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { menu, menuCategories } from "../data/menu";

const Menu = () => {
  const [active, setActive] = useState("pizza");
  const sectionRefs = useRef({});

  useEffect(() => {
    // Sync active tab with scroll position
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
              EAT THE VILLAGE
            </h1>
            <p className="font-body mx-auto mt-5 max-w-xl text-cream/85">
              From hand-tossed pizzas to gulf-fresh seafood — every bite, every day.
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
              className="mb-8 flex items-end justify-between gap-4 border-b-4 border-red pb-4"
            >
              <h2
                className="font-display text-navy"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", lineHeight: 1 }}
              >
                {cat.label.toUpperCase()}
              </h2>
              {cat.id === "pizza" && (
                <div className="font-ui hidden text-sm text-dark/60 sm:flex sm:items-center sm:gap-6">
                  <span>SMALL</span>
                  <span>LARGE</span>
                </div>
              )}
            </motion.div>

            {cat.id === "pizza" ? (
              <div className="grid gap-x-12 gap-y-2 md:grid-cols-2">
                {menu.pizza.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="flex items-start justify-between gap-4 border-b border-dark/10 py-4"
                    data-testid={`menu-pizza-${i}`}
                  >
                    <div className="flex-1">
                      <h3 className="font-display text-2xl text-navy">{item.name}</h3>
                      <p className="font-body text-sm text-dark/75">{item.description}</p>
                    </div>
                    <div className="font-ui flex shrink-0 gap-5 text-right text-red">
                      <span className="w-14">{item.sm}</span>
                      <span className="w-14">{item.lg}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {menu[cat.id].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="flex flex-col rounded-md bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                    style={{ borderTop: "3px solid var(--gold)" }}
                    data-testid={`menu-item-${cat.id}-${i}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl text-navy">{item.name}</h3>
                      <span className="font-ui shrink-0 text-red">{item.price}</span>
                    </div>
                    <p className="font-body mt-2 text-sm text-dark/75">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Menu;
