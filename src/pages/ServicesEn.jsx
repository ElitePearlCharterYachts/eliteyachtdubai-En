import { useEffect, useMemo, useState } from "react";
import YachtCard from "../components/YachtCard";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import ReviewsSlider from "../components/ReviewsSlider";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

const ACCENT = "#111827";
const WHATSAPP =
  "https://wa.me/971569006603?text=Hello%20Elite%20Yachts";
const PHONE_TEL = "tel:+971569006603";

/** Keep ™ consistent in EN */
function applyTMEn(input = "") {
  let out = String(input);
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);
  return out;
}

const K = ({ children, tone = "dark" }) => (
  <strong
    className={
      tone === "light"
        ? "font-semibold text-white"
        : "font-semibold text-slate-900"
    }
  >
    {children}
  </strong>
);

const SEO_KEYWORDS_EN = [
  "Yacht rental Dubai",
  "Dubai Marina yacht charter",
  "Private yacht Dubai",
  "Luxury yacht Dubai",
  "Family yacht trip Dubai",
  "Sunset yacht cruise Dubai",
  "Dinner on a yacht Dubai",
  "Birthday yacht party Dubai",
  "Party yacht Dubai",
  "Corporate yacht event Dubai",
  "Book yacht Dubai",
  "Dubai yacht hire",
  "Yachts in Dubai",
  "Dubai Marina boarding location",
  "VIP yacht Dubai"
];

const SERVICES_EN = [
  {
    title: "Private Yacht Charter in Dubai Marina (Family Trips + Total Privacy)",
    icon: "fa-solid fa-anchor",
    image: "/en/images/services/private-yacht.webp",
    imageAlt:
      "Private yacht charter in Dubai Marina | Family yacht trip | Book yacht Dubai",
    desc: (
      <>
        Enjoy a <K>private yacht</K> experience in <K>Dubai Marina</K> with full
        privacy and <K>VIP</K> service. Perfect for a <K>family yacht trip</K> or
        a calm cruise, with fast confirmation to <K>book a yacht in Dubai</K>.
      </>
    ),
    bullets: [
      <>Departure from <K>Dubai Marina boarding points</K></>,
      <>Flexible options for <K>hourly yacht rental</K></>,
      <>Professional crew and premium onboard comfort</>
    ]
  },
  {
    title: "Birthday Yacht Party in Dubai (Decor + Music + Celebration Setup)",
    icon: "fa-solid fa-cake-candles",
    image: "/en/images/services/birthday-yacht.webp",
    imageAlt:
      "Birthday yacht party Dubai | Party yacht Dubai | Dubai Marina yacht cruise",
    desc: (
      <>
        Celebrate with a luxury <K>birthday yacht party</K> on a <K>Dubai yacht</K>{" "}
        with add-on decor, hospitality, and sound setup. A top choice for groups
        and <K>party yacht Dubai</K> vibes—book fast via WhatsApp.
      </>
    ),
    bullets: [
      <>Decor and add-ons for <K>yacht parties in Dubai</K></>,
      <>Daily rental options (subject to availability)</>,
      <>Iconic photo route: <K>Palm Jumeirah</K> • <K>Burj Al Arab</K></>
    ]
  },
  {
    title: "Corporate Yacht Events (Premium Hosting + Privacy + VIP Planning)",
    icon: "fa-solid fa-briefcase",
    image: "/en/images/services/corporate-yacht.webp",
    imageAlt:
      "Corporate yacht event Dubai | Luxury yacht charter Dubai Marina | Dubai yacht trip",
    desc: (
      <>
        Host executives, teams, or clients on a <K>Dubai Marina yacht</K> for
        corporate events, meetings, or product launches. <K>VIP</K> planning and
        seamless coordination from start to finish.
      </>
    ),
    bullets: [
      <>High privacy for business hosting</>,
      <>Hospitality options tailored to your event</>,
      <>Flexible routes for your <K>Dubai yacht cruise</K></>
    ]
  },
  {
    title: "Sunset Cruises & Dubai Landmarks (Best Yacht Views in Dubai Marina)",
    icon: "fa-solid fa-sun",
    image: "/en/images/services/sunset-yacht.webp",
    imageAlt:
      "Sunset yacht cruise Dubai Marina | Dubai yacht cruise | Yacht rental Dubai",
    desc: (
      <>
        A <K>sunset yacht cruise</K> is perfect for photos and special moments.
        Enjoy an iconic route passing <K>Palm Jumeirah</K>, <K>Atlantis</K>, and{" "}
        <K>Burj Al Arab</K>—with smooth sailing on a luxury yacht.
      </>
    ),
    bullets: [
      <>The best time for a <K>Dubai yacht cruise</K></>,
      <>Landmark route from <K>Dubai Marina</K></>,
      <>Comfort, style, and <K>VIP</K> service</>
    ]
  },
  {
    title: "Party Yacht Dubai (Groups, Weekends, and Celebrations)",
    icon: "fa-solid fa-music",
    image: "/en/images/services/party-yacht.webp",
    imageAlt:
      "Party yacht Dubai | Yacht parties Dubai | Dubai Marina yacht hire",
    desc: (
      <>
        Turn your trip into a <K>party yacht</K> experience with fun vibes and
        spacious seating areas. Great for groups with quick booking and fast
        confirmation via WhatsApp.
      </>
    ),
    bullets: [
      <>Entertainment-ready setup onboard</>,
      <>Ideal for friends and group gatherings</>,
      <>Flexible yacht hire durations</>
    ]
  },
  {
    title: "VIP Concierge (Dinner Yacht Planning in Dubai / Dubai Marina)",
    icon: "fa-solid fa-crown",
    image: "/en/images/services/vip-concierge.webp",
    imageAlt:
      "VIP concierge yacht Dubai | Dinner on a yacht Dubai Marina | Book yacht Dubai",
    desc: (
      <>
        Premium concierge planning for a <K>dinner on a yacht</K> in Dubai or
        Dubai Marina—hospitality, decor, music, timing, and route coordination.
        A full <K>VIP yacht</K> experience from start to finish.
      </>
    ),
    bullets: [
      <>Dinner coordination and hospitality add-ons</>,
      <>Fast support to <K>book a yacht in Dubai</K></>,
      <>Complete <K>VIP</K> experience</>
    ]
  }
];

export default function ServicesEn() {
  const [yachts, setYachts] = useState([]);

  const BASE_URL = "https://eliteyachtdubai.com";
  const PAGE_PATH = "/en/services";
  const CANONICAL = `${BASE_URL}${PAGE_PATH}`;
  const ogImage = `${BASE_URL}/images/og/vip-concierge.webp`;

  useEffect(() => {
    fetch("/data/yachts.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((json) => setYachts(Array.isArray(json) ? json : []))
      .catch(console.error);
  }, []);

  const title = useMemo(
    () =>
      applyTMEn(
        "Yacht Services Dubai | Dubai Marina Yacht Charters + Fast Booking on WhatsApp"
      ),
    []
  );

  const description = useMemo(
    () =>
      applyTMEn(
        "Elite Yachts™ services in Dubai Marina: private yacht charters, party yachts, birthday yacht celebrations, corporate yacht events, sunset cruises, and VIP concierge. Flexible yacht hire with professional crew, clear options, and fast confirmation via WhatsApp."
      ),
    []
  );

  const keywords = useMemo(() => SEO_KEYWORDS_EN.join(", "), []);

  const schemaData = useMemo(() => {
    const items = SERVICES_EN.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: applyTMEn(typeof s.title === "string" ? s.title : "Service"),
      description: applyTMEn(
        "Dubai yacht services: Dubai Marina yacht charters, private yacht hire, party yachts, dinner cruises, corporate events, and VIP experiences."
      ),
      url: CANONICAL
    }));

    return [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL}#webpage`,
        url: CANONICAL,
        name: title,
        description,
        inLanguage: "en-AE",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#organization` }
      },
      {
        "@type": "CollectionPage",
        "@id": `${CANONICAL}#collection`,
        url: CANONICAL,
        name: title,
        inLanguage: "en-AE",
        mainEntity: {
          "@type": "ItemList",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: items.length,
          itemListElement: items
        }
      }
    ];
  }, [BASE_URL, CANONICAL, title, description]);

  return (
    <div dir="ltr" lang="en" className="w-full bg-white text-slate-900">
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        canonical={CANONICAL}
        ogTitle={title}
        ogDescription={description}
        ogImage={ogImage}
        ogUrl={CANONICAL}
      />

      <Schema data={schemaData} />

      <section className="relative min-h-[68svh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/en/images/banners/service-hero.webp"
            alt="Dubai Marina yacht charter | Yacht services Dubai | Dinner yacht Dubai"
            className="w-full h-full object-cover object-[50%_62%] sm:object-center scale-[1.06] sm:scale-100"
            loading="eager"
            decoding="async"
            draggable="false"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.46),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,0,0,0.20),transparent_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,transparent_35%,rgba(0,0,0,0.36))]" />
        </div>

        <div className="relative w-full">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-24">
            <div className="w-full max-w-[760px] md:max-w-3xl rounded-3xl border border-white/25 bg-white/10 backdrop-blur-md text-white shadow-[0_22px_70px_rgba(0,0,0,0.25)] p-5 sm:p-8 md:p-10 mx-auto md:mx-0">
              <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-white/90 uppercase">
                Elite Yachts™ Dubai
              </p>

              <div className="mt-4 h-px w-full bg-white/20" />
              <div
                className="mt-3 h-[3px] w-24 sm:w-28 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)"
                }}
              />

              <h1 className="mt-5 text-[22px] sm:text-3xl md:text-[40px] font-semibold tracking-[0.08em] sm:tracking-[0.10em] leading-[1.2]">
                Yacht Services in <K tone="light">Dubai Marina</K> — Private, Party &{" "}
                <K tone="light">VIP</K> Experiences
              </h1>

              <p className="mt-4 sm:mt-5 text-white/85 leading-relaxed max-w-2xl text-[13px] sm:text-[15px]">
                From <K tone="light">family yacht trips</K> to <K tone="light">party yachts</K>,{" "}
                <K tone="light">birthday celebrations</K>, <K tone="light">corporate events</K>, and{" "}
                <K tone="light">dinner on a yacht</K> — we deliver premium service with fast confirmation
                and booking support on WhatsApp.
              </p>

              <div className="mt-7">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-[520px]">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-3 sm:px-8 py-3 text-[12px] sm:text-sm border border-white/30 bg-white text-slate-900 shadow-[0_14px_36px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-white/90 w-full"
                  >
                    <i className="fa-brands fa-whatsapp" style={{ color: ACCENT }} />
                    WhatsApp
                  </a>

                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-3 sm:px-8 py-3 text-[12px] sm:text-sm border border-white/25 bg-black/70 text-white shadow-[0_16px_44px_rgba(0,0,0,0.22)] transition-all duration-300 hover:bg-black/80 w-full"
                  >
                    <i className="fa-solid fa-phone" />
                    Call Now
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:mt-7 text-[10px] sm:text-[11px] tracking-[0.30em] uppercase text-white/75">
                Dubai Marina • Palm Jumeirah • Burj Al Arab
              </div>

              <p className="sr-only">
                Elite Yachts™ provides yacht services in Dubai Marina: private yacht charters, party yachts,
                dinner cruises, corporate events, and VIP concierge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (font sizes refined) */}
      <section className="py-14 sm:py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[11px] sm:text-[12px] tracking-[0.32em] text-black/60 uppercase font-semibold">
              What We Offer
            </p>

            <div className="relative mx-auto mt-3 mb-4 h-[10px] w-[72%]">
              <div className="h-px mx-auto w-48 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
            </div>

            <h2 className="text-[22px] sm:text-3xl font-semibold tracking-[0.06em] sm:tracking-[0.08em] text-slate-900">
              Luxury <K>Dubai Yacht</K> Experiences — Built Around Your Moment
            </h2>

            <p className="mt-3 sm:mt-4 text-slate-600 max-w-3xl mx-auto leading-relaxed text-[13px] sm:text-[15px]">
              Choose the experience that matches your plan: <K>private yacht charter</K>,{" "}
              <K>sunset cruise</K>, <K>party yacht</K>, <K>birthday setup</K>,{" "}
              <K>corporate yacht events</K>, or <K>dinner on a yacht</K> — with fast booking support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES_EN.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl bg-white border border-black/10 shadow-[0_18px_48px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_26px_60px_rgba(0,0,0,0.14)]"
              >
                <div className="relative h-56 sm:h-64 w-full">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.32),transparent_55%)]" />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
                      <i className={s.icon} style={{ color: ACCENT }} />
                    </span>

                    <div className="min-w-0 text-left">
                      <p className="text-[10px] sm:text-[11px] tracking-[0.26em] text-slate-500 uppercase">
                        Dubai Yacht Service
                      </p>

                      <h3 className="mt-2 text-[13px] sm:text-[15px] font-semibold tracking-[0.06em] text-slate-900 leading-relaxed">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4 h-px w-full bg-black/10" />

                  <p className="mt-4 text-slate-600 text-[13px] sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>

                  <ul className="mt-5 space-y-2 text-[13px] sm:text-sm text-slate-700">
                    {s.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <i className="fa-solid fa-circle-check text-[12px] text-black/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] sm:text-sm border border-black bg-white text-slate-900 transition-all duration-300 hover:border-black/25 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
                    >
                      <i className="fa-brands fa-whatsapp" style={{ color: ACCENT }} />
                      WhatsApp
                    </a>

                    <a
                      href={PHONE_TEL}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] sm:text-sm border border-black bg-black text-white transition-all duration-300 hover:bg-black/90"
                    >
                      <i className="fa-solid fa-phone" />
                      Call
                    </a>
                  </div>

                  <p className="mt-5 text-[12px] text-slate-600 leading-relaxed">
                    {applyTMEn("Elite Yachts")} • Dubai Marina • Fast booking • VIP options
                  </p>
                </div>

                <div
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(17,24,39,0.85), transparent)"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section
        aria-label="Elite Yachts Dubai fleet - Dubai Marina yacht rental and booking"
        className="w-full py-20 bg-white"
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="mb-12 text-center max-w-5xl mx-auto">
            <p className="text-[11px] sm:text-[12px] font-semibold tracking-[0.32em] text-black/60 uppercase mb-3">
              Elite Yachts™ Fleet
            </p>

            <h2 className="text-[26px] sm:text-4xl font-semibold text-black leading-tight">
              Luxury Yacht Rental in Dubai Marina — Fast Booking & Clear Options
            </h2>

            <p className="mt-5 text-[13px] sm:text-[15px] leading-relaxed text-black/75">
              Pick the right yacht for your plan: calm <K>family trips</K>, a{" "}
              <K>party yacht</K> celebration, or a premium <K>dinner cruise</K>.
              We offer flexible durations, professional crew, and fast confirmation via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(Array.isArray(yachts) ? yachts : []).map((yacht) => (
              <YachtCard key={yacht.slug} yacht={yacht} />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white text-slate-900">
        <ReviewsSlider />
      </div>

      <div className="bg-white text-slate-900">
        <FAQSection />
      </div>

      {/* BLACK SECTION (links + CTA) */}
      <section className="bg-black text-white">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.38em] uppercase text-white/70">
              Elite Yachts™ Dubai
            </p>

            <h2 className="mt-4 text-[22px] sm:text-3xl md:text-4xl font-semibold tracking-[0.08em] leading-[1.2]">
              Dubai Yacht Cruises • Dubai Marina Charters • VIP Experiences
            </h2>

            <p className="mt-5 text-white/85 leading-relaxed text-[13px] sm:text-[15px]">
              Looking for a <K tone="light">Dubai Marina yacht cruise</K>, a{" "}
              <K tone="light">family yacht trip</K>, a <K tone="light">dinner on a yacht</K>, or a{" "}
              <K tone="light">birthday yacht party</K>? We deliver premium service and fast booking support.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 justify-center">
              {[
                { label: "Sunset Yacht Cruise", href: "/offers" },
                { label: "Birthday Yacht Party", href: "/services" },
                { label: "Corporate Yacht Events", href: "/corporate-events" },
                { label: "Dinner on a Yacht", href: "/packages" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] text-white font-semibold shadow-[0_10px_26px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-white hover:text-black hover:border-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[13px] sm:text-sm border border-white/25 bg-white text-slate-900 hover:bg-white/90 transition"
              >
                <i className="fa-brands fa-whatsapp" style={{ color: ACCENT }} />
                Book on WhatsApp
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[13px] sm:text-sm border border-white/25 bg-black text-white hover:bg-white/10 transition"
              >
                <i className="fa-solid fa-phone" />
                Call Direct
              </a>
            </div>

            <p className="mt-7 text-white/60 text-[12px] leading-relaxed">
              Premium Dubai yacht experiences with clear coordination — from booking to boarding.
            </p>
          </div>
        </div>
      </section>

      <CTASection variant="services" />
    </div>
  );
}
