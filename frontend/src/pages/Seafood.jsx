import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  ChevronDown,
  ExternalLink,
  X,
} from "lucide-react";
import { locations } from "../data/locations";

// ONLY Real dish photos from client's /images/menu/
const SEAFOOD_HERO = "/images/menu/seafood-platter-for-two.jpg";
const SEAFOOD_FISH_IMG = "/images/menu/seafood-fish-dinner.jpg";
const SEAFOOD_SHRIMP_IMG = "/images/menu/seafood-butterfly-shrimp.jpg";
const SEAFOOD_POPCORN_IMG = "/images/menu/seafood-popcorn-shrimp.jpg";
const SEAFOOD_CLAMS_IMG = "/images/menu/seafood-clam-strips.jpg";
const SEAFOOD_COMBO_IMG = "/images/menu/seafood-double-choice.jpg";
const SEAFOOD_FAMILY_IMG = "/images/menu/seafood-triple-catch.jpg";
const PIZZA_PREVIEW_IMG = "/images/menu/pizza-10-topping-special.jpg";

const seafoodFaqs = [
  {
    q: "What seafood does Village Pizza & Seafood serve?",
    a: "The current menu includes seafood choices such as fish, shrimp, popcorn shrimp and clams. Available items and combinations may vary by location.",
  },
  {
    q: "Does Village Pizza & Seafood serve fish?",
    a: "Yes. Fish is included among the seafood choices listed on the Village Pizza & Seafood menu.",
  },
  {
    q: "Does Village Pizza & Seafood serve shrimp?",
    a: "Yes. Shrimp and popcorn shrimp are among the seafood selections currently listed on the menu.",
  },
  {
    q: "Can I get more than one type of seafood?",
    a: "Yes. The current menu includes combination options where customers can choose from items including fish, shrimp, popcorn shrimp and clams.",
  },
  {
    q: "Can I order pizza and seafood together?",
    a: "Yes. Village Pizza & Seafood serves both homemade pizza and seafood, along with chicken and other menu favorites.",
  },
  {
    q: "Can I order seafood online?",
    a: "Village Pizza & Seafood provides online ordering through its locations. Select your nearest restaurant to see its current menu and ordering options.",
  },
  {
    q: "Where can I find Village Pizza & Seafood?",
    a: "Village Pizza & Seafood currently lists locations in Pasadena, League City, Dickinson, Santa Fe, Seabrook and La Porte, Texas.",
  },
];

const seafoodLocationsData = [
  {
    id: "pasadena",
    name: "Pasadena",
    desc: "Looking for seafood in Pasadena? Visit Village Pizza & Seafood on Fairmont Parkway for seafood, homemade pizza, chicken and more.",
  },
  {
    id: "league-city",
    name: "League City",
    desc: "Find Village Pizza & Seafood on West Main Street in League City and order your seafood favorites alongside pizza and other family meals.",
  },
  {
    id: "dickinson",
    name: "Dickinson",
    desc: "Our Dickinson restaurant serves the combination Village Pizza & Seafood is known for: pizza and seafood together in one neighborhood restaurant.",
  },
  {
    id: "santa-fe",
    name: "Santa Fe",
    desc: "Order seafood, pizza, chicken and other menu favorites from Village Pizza & Seafood in Santa Fe.",
  },
  {
    id: "seabrook",
    name: "Seabrook",
    desc: "Visit our Seabrook location on NASA Parkway when you are craving seafood and the rest of the family wants options.",
  },
  {
    id: "la-porte",
    name: "La Porte",
    desc: "Find seafood, homemade pizza and more at Village Pizza & Seafood in La Porte.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.villagepizzaseafood.com/seafood/#webpage",
      url: "https://www.villagepizzaseafood.com/seafood/",
      name: "Seafood Restaurant in Texas | Village Pizza & Seafood",
      description:
        "Enjoy fish, shrimp, popcorn shrimp, clams and more at Village Pizza & Seafood. Find fresh seafood near you at one of our six Texas locations.",
      isPartOf: {
        "@id": "https://www.villagepizzaseafood.com/#website",
      },
      about: {
        "@type": "Thing",
        name: "Seafood",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.villagepizzaseafood.com/seafood/#breadcrumb",
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
          name: "Seafood",
          item: "https://www.villagepizzaseafood.com/seafood/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.villagepizzaseafood.com/seafood/#faq",
      mainEntity: seafoodFaqs.map((faq) => ({
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

const Seafood = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    document.title = "Seafood Restaurant in Texas | Village Pizza & Seafood";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Enjoy fish, shrimp, popcorn shrimp, clams and more at Village Pizza & Seafood. Find fresh seafood near you at one of our six Texas locations.";

    let scriptTag = document.getElementById("seafood-schema");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "seafood-schema";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById("seafood-schema");
      if (el) el.remove();
    };
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div data-testid="seafood-landing-page" className="bg-cream">
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
                    Choose a Texas restaurant to view seafood online ordering options
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
                        data-testid={`seafood-order-modal-link-${loc.id}`}
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

      {/* 1. HERO SECTION (SEAFOOD MADE FOR SERIOUS CRAVINGS) */}
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
                data-testid="seafood-hero-title"
              >
                SEAFOOD MADE FOR SERIOUS CRAVINGS
              </h1>
              <div className="mt-6 font-body text-base text-cream/90 sm:text-lg space-y-4 leading-relaxed">
                <p className="font-semibold text-gold">
                  Crispy fish. Shrimp. Popcorn shrimp. Clams. Hot sides. Plenty to share.
                </p>
                <p>
                  When you are craving seafood without turning dinner into a complicated plan, Village
                  Pizza &amp; Seafood makes it easy.
                </p>
                <p>
                  Seafood has been part of our identity for decades. Pair your favorites with sides,
                  add pizza or chicken for the rest of the family, and enjoy a meal that gives
                  everyone something they actually want.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/menu?category=seafood" className="btn-primary" data-testid="seafood-cta-menu">
                  View Our Seafood Menu
                </Link>
                <button
                  onClick={() => setShowOrderModal(true)}
                  className="btn-gold"
                  data-testid="seafood-cta-order"
                >
                  Order Online
                </button>
                <Link to="/locations" className="btn-ghost-gold" data-testid="seafood-cta-locations">
                  Find a Location
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/40">
                <img
                  src={SEAFOOD_HERO}
                  alt="Village Seafood Platter for Two"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEAFOOD FAVORITES FOR LUNCH AND DINNER */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl text-navy">
            SEAFOOD FAVORITES FOR LUNCH AND DINNER
          </h2>
          <div className="brand-gradient-warm mx-auto mt-3 h-1.5 w-20 rounded-full" />
          <div className="mt-6 font-body text-base text-dark/80 sm:text-lg space-y-3">
            <p>Sometimes you want pizza.</p>
            <p>Sometimes nothing but a plate of seafood will do.</p>
            <p>
              Our seafood menu gives you several ways to satisfy that craving, whether you are
              stopping in for your own meal or ordering enough for the family.
            </p>
            <p className="text-navy font-semibold">
              Current seafood selections include fish, shrimp, popcorn shrimp and clams, with
              combinations available from the menu.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white overflow-hidden shadow-md border-t-4 border-navy flex flex-col justify-between">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={SEAFOOD_FISH_IMG}
                alt="Fish"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-navy">Fish</h3>
                <p className="font-body mt-2.5 text-sm text-dark/75 leading-relaxed">
                  Craving something hot, crispy and satisfying? Explore our fish options and turn
                  them into a complete meal with your favorite sides.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white overflow-hidden shadow-md border-t-4 border-gold flex flex-col justify-between">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={SEAFOOD_SHRIMP_IMG}
                alt="Shrimp"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-navy">Shrimp</h3>
                <p className="font-body mt-2.5 text-sm text-dark/75 leading-relaxed">
                  Shrimp is one of those seafood favorites that works for lunch, dinner, family
                  meals and almost any appetite in between. Choose from the available shrimp options on
                  our current menu.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white overflow-hidden shadow-md border-t-4 border-red flex flex-col justify-between">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={SEAFOOD_POPCORN_IMG}
                alt="Popcorn Shrimp"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-navy">Popcorn Shrimp</h3>
                <p className="font-body mt-2.5 text-sm text-dark/75 leading-relaxed">
                  Small bites. Big seafood craving. Popcorn shrimp makes an easy choice on its own
                  or alongside other favorites.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white overflow-hidden shadow-md border-t-4 border-navy flex flex-col justify-between">
            <div className="h-48 overflow-hidden bg-gray-100">
              <img
                src={SEAFOOD_CLAMS_IMG}
                alt="Clams"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-navy">Clams</h3>
                <p className="font-body mt-2.5 text-sm text-dark/75 leading-relaxed">
                  Looking for something different from your usual fish or shrimp order? Explore the
                  available clam selections and seafood combinations on our menu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to="/menu?category=seafood" className="btn-primary" data-testid="seafood-explore-full-menu">
            Explore the Full Seafood Menu
          </Link>
        </div>
      </section>

      {/* 3. CAN'T DECIDE? MIX YOUR SEAFOOD FAVORITES */}
      <section className="bg-navy py-16 lg:py-20 text-cream border-t-4 border-gold">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl sm:text-5xl text-cream">
                CAN'T DECIDE? MIX YOUR SEAFOOD FAVORITES
              </h2>
              <div className="brand-gradient-warm mt-3 h-1.5 w-16 rounded-full" />
              <div className="mt-6 font-body text-base sm:text-lg text-cream/90 space-y-3 leading-relaxed">
                <p className="text-gold font-medium">Why settle for just one?</p>
                <p>
                  Our menu includes combination options that allow customers to choose from seafood
                  favorites including fish, shrimp, popcorn shrimp and clams.
                </p>
                <p>
                  It is a great option when you want variety on one plate or simply cannot decide
                  between two favorites.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  to="/menu?category=seafood"
                  className="btn-gold"
                  data-testid="seafood-combinations-btn"
                >
                  View Seafood Combinations
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/40">
                <img
                  src={SEAFOOD_COMBO_IMG}
                  alt="Seafood Combination Dinner"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEAFOOD FOR THE WHOLE FAMILY */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20 lg:px-8">
        <div className="rounded-2xl bg-white border border-navy/10 p-8 sm:p-12 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl sm:text-4xl text-navy">
                SEAFOOD FOR THE WHOLE FAMILY
              </h2>
              <div className="brand-gradient-warm mt-3 h-1.5 w-16 rounded-full" />

              <div className="mt-6 font-body text-dark/85 text-base sm:text-lg space-y-3 leading-relaxed">
                <p>Ordering dinner for a family can turn into six different conversations.</p>
                <p>Someone wants fish.</p>
                <p>Someone wants shrimp.</p>
                <p>Someone wants pizza.</p>
                <p>Someone else wants chicken.</p>
                <p className="font-semibold text-navy">At Village Pizza &amp; Seafood, that is not a problem.</p>
                <p>
                  Our menu brings pizza, seafood, chicken and other familiar favorites together in
                  one place, making family dinner easier when everyone wants something different.
                </p>
                <p>
                  Add pizza for the table, choose seafood for yourself, order chicken for the kids,
                  or put together a meal that lets everyone choose.
                </p>
                <p className="text-dark/90 italic">
                  That flexibility has always been part of what makes Village Pizza &amp; Seafood a
                  neighborhood favorite.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-md border-2 border-navy">
                <img
                  src={SEAFOOD_FAMILY_IMG}
                  alt="Seafood Triple Catch Family Dinner"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEAFOOD AND PIZZA UNDER ONE ROOF */}
      <section className="bg-cream py-16 border-y border-navy/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-md border-2 border-gold">
                <img
                  src={PIZZA_PREVIEW_IMG}
                  alt="Homemade Pizza"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl sm:text-4xl text-navy">
                SEAFOOD AND PIZZA UNDER ONE ROOF
              </h2>
              <div className="brand-gradient-warm mt-3 h-1 w-16 rounded-full" />

              <div className="mt-6 font-body text-dark/85 text-base sm:text-lg space-y-3">
                <p>There are plenty of pizza places.</p>
                <p>There are plenty of seafood restaurants.</p>
                <p className="font-bold text-navy text-xl">Village Pizza &amp; Seafood gives you both.</p>
                <p>
                  That means you do not have to choose a restaurant based on one person's craving.
                </p>
                <p>
                  Pick up pizza and seafood in the same order. Add chicken, pasta, subs or sides when
                  you need even more variety.
                </p>
              </div>

              <div className="mt-8">
                <p className="font-ui text-sm text-navy mb-2">Craving pizza too?</p>
                <Link
                  to="/pizza"
                  className="btn-primary"
                  data-testid="seafood-to-pizza-link"
                >
                  Explore Our Homemade Pizza
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ORDER SEAFOOD ONLINE */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-navy">ORDER SEAFOOD ONLINE</h2>
        <div className="brand-gradient-warm mx-auto mt-3 h-1 w-16 rounded-full" />

        <div className="mt-6 font-body text-dark/80 text-base sm:text-lg space-y-3">
          <p>Hungry now?</p>
          <p>
            Choose the Village Pizza &amp; Seafood restaurant nearest you, browse its available menu
            and place your order online.
          </p>
          <p>
            Ordering ahead makes it easy to grab dinner on your way home or get everyone fed without
            spending the evening in the kitchen.
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={() => setShowOrderModal(true)}
            className="btn-primary px-8 py-3 text-base"
            data-testid="seafood-order-online-btn"
          >
            Order Seafood Online
          </button>
        </div>
      </section>

      {/* 7. FIND SEAFOOD NEAR YOU */}
      <section className="bg-white py-16 lg:py-20 border-t border-navy/10" id="seafood-locations-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl text-navy">
              FIND SEAFOOD NEAR YOU
            </h2>
            <div className="brand-gradient-warm mx-auto mt-3 h-1.5 w-20 rounded-full" />
            <p className="font-body mt-4 text-dark/75 text-base sm:text-lg">
              Village Pizza &amp; Seafood currently serves customers from six Texas communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seafoodLocationsData.map((loc) => {
              return (
                <div
                  key={loc.id}
                  className="flex flex-col justify-between rounded-xl bg-cream/50 p-7 shadow-md border border-navy/10"
                  data-testid={`seafood-location-card-${loc.id}`}
                >
                  <div>
                    <h3 className="font-display text-2xl text-navy">{loc.name}</h3>
                    <p className="font-body mt-3 text-sm text-dark/80 leading-relaxed">{loc.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy/10 flex flex-col gap-2.5">
                    <Link
                      to={`/${loc.id}`}
                      className="btn-ghost-navy text-center text-xs py-2.5"
                      data-testid={`seafood-view-location-${loc.id}`}
                    >
                      View {loc.name} Location
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE VILLAGE PIZZA & SEAFOOD FOR SEAFOOD? */}
      <section className="bg-navy py-16 lg:py-20 text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-5xl text-cream">
              WHY CHOOSE VILLAGE PIZZA &amp; SEAFOOD FOR SEAFOOD?
            </h2>
            <div className="brand-gradient-warm mx-auto mt-4 h-1.5 w-20 rounded-full" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-display text-xl text-gold">Seafood Is Part of Who We Are</h3>
              <p className="font-body mt-3 text-xs text-cream/80 leading-relaxed">
                Seafood is not an afterthought on our menu. It has been part of the Village Pizza &amp; Seafood
                identity alongside homemade pizza for decades. The brand currently describes its offering around
                homemade pizza and Gulf fresh seafood.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-display text-xl text-gold">Multiple Seafood Choices</h3>
              <p className="font-body mt-3 text-xs text-cream/80 leading-relaxed">
                Choose from current menu options including fish, shrimp, popcorn shrimp and clams, or
                explore seafood combinations when you want more than one favorite.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-display text-xl text-gold">Something for Everyone</h3>
              <p className="font-body mt-3 text-xs text-cream/80 leading-relaxed">
                Not everyone at the table has to order seafood. Pizza, chicken and other menu categories
                make it easier to feed a group with different tastes.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-display text-xl text-gold">Six Texas Locations</h3>
              <p className="font-body mt-3 text-xs text-cream/80 leading-relaxed">
                Find Village Pizza &amp; Seafood in Pasadena, League City, Dickinson, Santa Fe,
                Seabrook and La Porte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. YOUR SEAFOOD CRAVING STARTS HERE */}
      <section className="bg-dark py-16 text-cream border-t-4 border-gold">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl sm:text-5xl text-cream">
            YOUR SEAFOOD CRAVING STARTS HERE
          </h2>
          <div className="brand-gradient-warm mx-auto mt-3 h-1.5 w-20 rounded-full" />
          <div className="mt-6 font-body text-cream/85 text-base sm:text-lg space-y-3">
            <p>Fish or shrimp?</p>
            <p>Popcorn shrimp or clams?</p>
            <p>Seafood or pizza?</p>
            <p>Sometimes the best answer is to order exactly what you want.</p>
            <p>
              Browse the menu, find your nearest Village Pizza &amp; Seafood and make your next lunch
              or dinner an easy one.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/menu?category=seafood" className="btn-primary">
              View Seafood Menu
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

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20 lg:px-8" id="faq-section">
        <div className="text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-navy">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="brand-gradient-warm mx-auto mt-3 h-1 w-16 rounded-full" />
        </div>

        <div className="mt-10 space-y-4">
          {seafoodFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-gray-200 overflow-hidden shadow-sm"
                data-testid={`seafood-faq-item-${idx}`}
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

export default Seafood;
