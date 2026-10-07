import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  ChevronDown,
  ExternalLink,
  Navigation,
  X,
} from "lucide-react";
import { locations, mapsUrl } from "../data/locations";

// ONLY Real dish photos from client's /images/menu/
const PIZZA_HERO = "/images/menu/pizza-10-topping-special.jpg";
const PIZZA_CLASSIC_IMG = "/images/menu/pizza-any-one-topping.jpg";
const PIZZA_SPECIALTY_IMG = "/images/menu/pizza-meat-combo.jpg";
const PIZZA_BUILD_IMG = "/images/menu/pizza-vegetarian-combo-lg.jpg";
const SEAFOOD_PREVIEW_IMG = "/images/menu/seafood-platter-for-two.jpg";

const pizzaFaqs = [
  {
    q: "Does Village Pizza & Seafood serve homemade pizza?",
    a: "Yes. Homemade pizza is one of the core foods Village Pizza & Seafood has built its brand around since 1995.",
  },
  {
    q: "Can I order pizza online?",
    a: "Yes. Customers can choose their preferred Village Pizza & Seafood location and use the available online ordering option to place an order.",
  },
  {
    q: "Does Village Pizza & Seafood offer pizza for pickup?",
    a: "Pickup ordering is available through participating Village Pizza & Seafood locations. Select your nearest location to view current ordering options.",
  },
  {
    q: "Can I customize my pizza?",
    a: "Pizza options and available toppings can be viewed on the current menu when placing your order.",
  },
  {
    q: "What else can I order with pizza?",
    a: "Village Pizza & Seafood also serves seafood, chicken, pasta, subs, salads, sides and other menu items, making it convenient when different people in your group want different meals.",
  },
  {
    q: "Where is Village Pizza & Seafood located?",
    a: "Village Pizza & Seafood currently lists locations in Pasadena, League City, Dickinson, Santa Fe, Seabrook and La Porte, Texas.",
  },
];

const pizzaLocationsData = [
  {
    id: "pasadena",
    name: "Pasadena",
    desc: "Enjoy Village Pizza & Seafood at our Fairmont Parkway location in Pasadena.",
  },
  {
    id: "league-city",
    name: "League City",
    desc: "Order your Village Pizza & Seafood favorites from our West Main Street location in League City.",
  },
  {
    id: "dickinson",
    name: "Dickinson",
    desc: "Find homemade pizza, seafood and more at our Dickinson restaurant.",
  },
  {
    id: "santa-fe",
    name: "Santa Fe",
    desc: "Visit Village Pizza & Seafood in Santa Fe for pizza, seafood, chicken and family favorites.",
  },
  {
    id: "seabrook",
    name: "Seabrook",
    desc: "Order your favorite Village Pizza & Seafood dishes from our Seabrook location on NASA Parkway.",
  },
  {
    id: "la-porte",
    name: "La Porte",
    desc: "Visit our La Porte restaurant when the family cannot decide between pizza, seafood, chicken and more.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.villagepizzaseafood.com/pizza/#webpage",
      url: "https://www.villagepizzaseafood.com/pizza/",
      name: "Homemade Pizza in Texas | Village Pizza & Seafood",
      description:
        "Order homemade pizza from Village Pizza & Seafood. Explore pizza options and order online from six Texas locations.",
      isPartOf: {
        "@id": "https://www.villagepizzaseafood.com/#website",
      },
      about: {
        "@type": "Thing",
        name: "Pizza",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.villagepizzaseafood.com/pizza/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.villagepizzaseafood.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pizza",
          item: "https://www.villagepizzaseafood.com/pizza/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.villagepizzaseafood.com/pizza/#faq",
      mainEntity: pizzaFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

const Pizza = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    document.title = "Homemade Pizza in Texas | Village Pizza & Seafood";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Craving homemade pizza? Order fresh pizza from Village Pizza & Seafood at one of our six Texas locations. Explore classic and specialty pizzas for pickup or delivery.";

    let scriptTag = document.getElementById("pizza-schema");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "pizza-schema";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById("pizza-schema");
      if (el) el.remove();
    };
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div data-testid="pizza-landing-page" className="bg-cream">
      {/* Order Online Modal */}
      <AnimatePresence>
        {showOrderModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowOrderModal(false)}
            style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          >
            <motion.div
              className="relative max-w-xl w-full bg-white rounded-xl overflow-hidden shadow-2xl p-6 md:p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <h3 className="font-display text-2xl text-navy">Select Your Location</h3>
                  <p className="font-body text-xs text-dark/70 mt-0.5">
                    Choose a Texas restaurant to view online ordering options
                  </p>
                </div>
                <button
                  onClick={() => setShowOrderModal(false)}
                  className="rounded-full bg-cream text-dark p-2 hover:bg-gold/20 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-5 grid gap-3 max-h-[60vh] overflow-y-auto pr-1">
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg bg-cream/60 border border-navy/10 hover:border-gold hover:shadow-md transition-all"
                  >
                    <div>
                      <h4 className="font-display text-lg text-navy">{loc.name}</h4>
                      <p className="font-body text-xs text-dark/70">{loc.address}</p>
                    </div>
                    {loc.orderUrl ? (
                      <a
                        href={loc.orderUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary text-xs py-2 px-4 flex items-center justify-center gap-1.5 shrink-0"
                        data-testid={`order-modal-link-${loc.id}`}
                      >
                        Order Online <ExternalLink size={14} />
                      </a>
                    ) : (
                      <a
                        href={`tel:${loc.phone.replace(/\D/g, "")}`}
                        className="btn-ghost-navy text-xs py-2 px-4 flex items-center justify-center gap-1.5 shrink-0"
                      >
                        Call {loc.phone} <Phone size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION (HOMEMADE PIZZA MADE FOR SHARING) */}
      <section className="bg-navy py-16 lg:py-24 text-cream clip-diagonal-tr relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <span className="font-ui text-xs text-gold uppercase tracking-widest block mb-2">
                Village Pizza &amp; Seafood
              </span>
              <h1
                className="font-display text-gold"
                style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)", lineHeight: 0.95 }}
                data-testid="pizza-hero-title"
              >
                HOMEMADE PIZZA MADE FOR SHARING
              </h1>
              <div className="mt-6 font-body text-base text-cream/90 sm:text-lg space-y-4 leading-relaxed">
                <p>
                  There is nothing complicated about great pizza. Start with a good crust, add rich
                  sauce, plenty of cheese, your favorite toppings, and make it fresh.
                </p>
                <p>
                  At Village Pizza &amp; Seafood, pizza has been at the heart of what we do since
                  1995. Whether you are feeding the family, grabbing lunch, ordering dinner for the
                  office, or simply craving your favorite pizza, we make it easy to enjoy a
                  satisfying meal close to home.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/menu?category=pizza" className="btn-primary" data-testid="pizza-cta-menu">
                  View Our Pizza Menu
                </Link>
                <button
                  onClick={() => setShowOrderModal(true)}
                  className="btn-gold"
                  data-testid="pizza-cta-order"
                >
                  Order Online
                </button>
                <Link to="/locations" className="btn-ghost-gold" data-testid="pizza-cta-locations">
                  Find a Location
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/40">
                <img
                  src={PIZZA_HERO}
                  alt="Village 10-Topping Special Homemade Pizza"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PIZZA FOR EVERY KIND OF CRAVING */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl text-navy">
            PIZZA FOR EVERY KIND OF CRAVING
          </h2>
          <div className="brand-gradient-warm mx-auto mt-3 h-1.5 w-20 rounded-full" />
          <div className="mt-6 font-body text-base text-dark/80 sm:text-lg space-y-4">
            <p>
              Some days call for a simple cheese pizza. Other days need pepperoni, plenty of meat,
              vegetables, chicken, or all your favorite toppings on one pizza.
            </p>
            <p>
              Our menu gives you plenty of ways to make pizza night your own.
            </p>
            <p>
              Choose a familiar favorite, explore one of our specialty pizzas, or create a pizza
              with the toppings you love most.
            </p>
            <p>
              Whether you are ordering for one person or bringing everyone together around the table,
              Village Pizza &amp; Seafood makes pizza an easy choice for lunch, dinner, family
              nights and weekend get togethers.
            </p>
          </div>
        </div>

        {/* Sub-items */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white overflow-hidden shadow-md border-t-4 border-red flex flex-col justify-between">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={PIZZA_CLASSIC_IMG}
                alt="Classic Pizza Favorites"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-navy">Classic Pizza Favorites</h3>
                <p className="font-body mt-2 text-sm text-dark/75 leading-relaxed">
                  Keep things simple with the pizza combinations you already know and love. Choose
                  your size, select your toppings and enjoy a freshly prepared pizza made for the
                  occasion.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white overflow-hidden shadow-md border-t-4 border-gold flex flex-col justify-between">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={PIZZA_SPECIALTY_IMG}
                alt="Specialty Pizzas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-navy">Specialty Pizzas</h3>
                <p className="font-body mt-2 text-sm text-dark/75 leading-relaxed">
                  Looking for something with a little more going on? Explore our specialty pizza
                  options featuring combinations of meats, vegetables, chicken and other customer
                  favorites.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white overflow-hidden shadow-md border-t-4 border-navy flex flex-col justify-between">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={PIZZA_BUILD_IMG}
                alt="Build Your Own Pizza"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-navy">Build Your Own Pizza</h3>
                <p className="font-body mt-2 text-sm text-dark/75 leading-relaxed">
                  Everyone has their own idea of the perfect pizza. Start with your pizza and
                  customize it with the toppings you want. Keep it classic or load it up.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to="/menu?category=pizza" className="btn-primary" data-testid="pizza-explore-menu-btn">
            Explore the Full Menu
          </Link>
        </div>
      </section>

      {/* 3. FRESH PIZZA FOR LUNCH, DINNER AND EVERYTHING BETWEEN */}
      <section className="bg-navy py-16 lg:py-20 text-cream border-t-4 border-gold">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-cream text-center">
            FRESH PIZZA FOR LUNCH, DINNER AND EVERYTHING BETWEEN
          </h2>
          <div className="brand-gradient-warm mx-auto mt-3 h-1.5 w-16 rounded-full" />

          <div className="mt-8 font-body text-base sm:text-lg text-cream/90 space-y-4 max-w-3xl mx-auto">
            <p>Pizza works for almost any occasion.</p>
            <p>Need a quick lunch? Order a pizza to share.</p>
            <p>Dinner plans fell through? We have you covered.</p>
            <p>Feeding the whole family? Add sides, chicken, seafood, pasta or another pizza to the order.</p>
            <p>Planning a casual get together? Order several pizzas so everyone can grab their favorite.</p>
            <p className="pt-2 text-gold italic">
              Village Pizza &amp; Seafood combines the convenience you want with the neighborhood
              restaurant experience people have been coming back to for decades.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MORE THAN JUST PIZZA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20 lg:px-8">
        <div className="rounded-2xl bg-white border border-navy/10 p-8 sm:p-12 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl sm:text-4xl text-navy">
                MORE THAN JUST PIZZA
              </h2>
              <div className="brand-gradient-warm mt-3 h-1.5 w-16 rounded-full" />

              <div className="mt-6 font-body text-dark/85 text-base sm:text-lg space-y-3 leading-relaxed">
                <p>
                  One person wants pizza. Someone else wants seafood. Another wants chicken.
                </p>
                <p>
                  That is exactly why Village Pizza &amp; Seafood works so well for families and
                  groups.
                </p>
                <p>
                  Along with homemade pizza, our menu includes seafood, chicken, pasta, subs,
                  salads, sides and more, giving everyone at the table something to choose from.
                </p>
              </div>

              <div className="mt-8">
                <p className="font-ui text-sm text-navy mb-2">Looking for seafood?</p>
                <Link
                  to="/seafood"
                  className="btn-primary"
                  data-testid="pizza-to-seafood-link"
                >
                  Explore Our Seafood Menu
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-md border-2 border-gold">
                <img
                  src={SEAFOOD_PREVIEW_IMG}
                  alt="Village Seafood Platter"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ORDER PIZZA ONLINE FOR PICKUP OR DELIVERY */}
      <section className="bg-cream py-16 border-y border-navy/10 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-navy">
            ORDER PIZZA ONLINE FOR PICKUP OR DELIVERY
          </h2>
          <div className="brand-gradient-warm mx-auto mt-3 h-1 w-16 rounded-full" />

          <div className="mt-6 font-body text-dark/80 text-base sm:text-lg space-y-3">
            <p>When a pizza craving hits, ordering should be the easy part.</p>
            <p>
              Choose your nearest Village Pizza &amp; Seafood location, browse the menu and place your
              order online.
            </p>
            <p>
              Depending on your location and available ordering options, you can enjoy your meal
              through convenient pickup or delivery.
            </p>
          </div>

          <div className="mt-8">
            <button
              onClick={() => setShowOrderModal(true)}
              className="btn-primary px-8 py-3 text-base"
              data-testid="pizza-order-online-btn"
            >
              Order Pizza Online
            </button>
          </div>
        </div>
      </section>

      {/* 6. FIND VILLAGE PIZZA & SEAFOOD NEAR YOU */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl text-navy">
            FIND VILLAGE PIZZA &amp; SEAFOOD NEAR YOU
          </h2>
          <div className="brand-gradient-warm mx-auto mt-3 h-1.5 w-20 rounded-full" />
          <p className="font-body mt-4 text-dark/75 text-base sm:text-lg">
            Village Pizza &amp; Seafood currently serves customers from six Texas locations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pizzaLocationsData.map((loc) => {
            const locDetails = locations.find((l) => l.id === loc.id);
            return (
              <div
                key={loc.id}
                className="flex flex-col justify-between rounded-xl bg-white p-7 shadow-md border border-navy/10"
                data-testid={`pizza-location-card-${loc.id}`}
              >
                <div>
                  <h3 className="font-display text-2xl text-navy">{loc.name}</h3>
                  <p className="font-body mt-3 text-sm text-dark/80 leading-relaxed">{loc.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
                  <Link
                    to={`/${loc.id}`}
                    className="btn-ghost-navy text-center text-xs py-2.5"
                    data-testid={`pizza-view-location-${loc.id}`}
                  >
                    View {loc.name} Location
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. WHY CHOOSE VILLAGE PIZZA & SEAFOOD? */}
      <section className="bg-navy py-16 lg:py-20 text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-5xl text-cream">
              WHY CHOOSE VILLAGE PIZZA &amp; SEAFOOD?
            </h2>
            <div className="brand-gradient-warm mx-auto mt-4 h-1.5 w-20 rounded-full" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-display text-xl text-gold">Family Owned Since 1995</h3>
              <p className="font-body mt-3 text-xs text-cream/80 leading-relaxed">
                Village Pizza &amp; Seafood has been serving Texas communities since 1995, growing
                around a simple idea: serve food people genuinely enjoy coming back for.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-display text-xl text-gold">Something for the Whole Family</h3>
              <p className="font-body mt-3 text-xs text-cream/80 leading-relaxed">
                Pizza may be in our name, but it is only part of the menu. Seafood, chicken,
                pasta, subs and sides make ordering for different tastes easier.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-display text-xl text-gold">Six Convenient Texas Locations</h3>
              <p className="font-body mt-3 text-xs text-cream/80 leading-relaxed">
                With restaurants in Pasadena, League City, Dickinson, Santa Fe, Seabrook and La
                Porte, your next Village Pizza &amp; Seafood meal may be closer than you think.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-display text-xl text-gold">Easy Online Ordering</h3>
              <p className="font-body mt-3 text-xs text-cream/80 leading-relaxed">
                Browse the menu, choose your nearest restaurant and order your favorites online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MAKE TONIGHT PIZZA NIGHT */}
      <section className="bg-dark py-16 text-cream border-t-4 border-gold">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl sm:text-5xl text-cream">
            MAKE TONIGHT PIZZA NIGHT
          </h2>
          <div className="brand-gradient-warm mx-auto mt-3 h-1.5 w-20 rounded-full" />
          <div className="mt-6 font-body text-cream/85 text-base sm:text-lg space-y-3">
            <p>
              Whether you already know exactly what you want or need a few minutes with the menu, we
              are ready when hunger hits.
            </p>
            <p>
              Find your nearest Village Pizza &amp; Seafood, choose your pizza and let us take care
              of dinner.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/menu?category=pizza" className="btn-primary">
              View Pizza Menu
            </Link>
            <button onClick={() => setShowOrderModal(true)} className="btn-gold">
              Order Online
            </button>
            <Link to="/locations" className="btn-ghost-gold">
              Find Your Nearest Location
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20 lg:px-8" id="faq-section">
        <div className="text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-navy">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="brand-gradient-warm mx-auto mt-3 h-1 w-16 rounded-full" />
        </div>

        <div className="mt-10 space-y-4">
          {pizzaFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-gray-200 overflow-hidden shadow-sm"
                data-testid={`pizza-faq-item-${idx}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-xl text-navy hover:text-red transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-300 text-red ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 font-body text-sm text-dark/80 leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Pizza;
