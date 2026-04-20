import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import Schema from "../components/Schema";
import CTASection from "../components/CTASection";
import YachtCard from "../components/YachtCard";

function applyTM(input = "") {
  let out = String(input || "");

  // Arabic
  out = out.replace(/إيليت\s*™/g, "™إيليت");
  out = out.replace(/إيليت\s+يخوت\s*™/g, "™إيليت يخوت");
  out = out.replace(/(^|[\s([{"'«“])إيليت\s+يخوت(?!\s*™|™)/g, "$1™إيليت يخوت");
  out = out.replace(/(^|[\s([{"'«“])إيليت(?!\s*(يخوت|™))/g, "$1™إيليت");

  // English
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  out = out.replace(/™\s*™/g, "™");
  return out;
}

function TMText({ children }) {
  if (typeof children !== "string") return children;
  return applyTM(children);
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] sm:text-[12px] text-black/65 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
      {children}
    </span>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/80 p-4 text-center shadow-[0_16px_44px_rgba(15,23,42,0.10)]">
      <div className="text-[17px] sm:text-[19px] font-medium tracking-[0.02em] text-black/90">
        {value}
      </div>
      <div className="mt-1 text-[11px] sm:text-[12px] leading-[1.7] text-black/60">
        {label}
      </div>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/85 backdrop-blur-[2px] p-5 sm:p-6 shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
          <i className={`${icon} text-[16px] text-[var(--accent)]`} />
        </div>
        <div className="min-w-0">
          <h3 className="text-[14px] sm:text-[15px] font-medium tracking-[0.01em] text-black/90">
            {title}
          </h3>
          <div className="mt-2 text-[13px] sm:text-[14px] leading-[1.9] text-black/65">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group rounded-3xl border border-black/10 bg-white/85 px-5 py-4 shadow-[0_16px_44px_rgba(15,23,42,0.08)]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <div className="text-[13px] sm:text-[14px] font-medium leading-[1.8] text-black/90">
          {q}
        </div>
        <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 transition group-open:rotate-45">
          <i className="fa-solid fa-plus text-[12px]" />
        </div>
      </summary>
      <div className="mt-3 text-[13px] sm:text-[14px] leading-[1.95] text-black/65">
        {a}
      </div>
    </details>
  );
}

function LogoBadge({ src, alt = "Elite Yachts™ logo", variant = "dark" }) {
  return (
    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
      <div
        className={[
          "rounded-2xl border shadow-[0_14px_34px_rgba(0,0,0,0.12)] backdrop-blur-[2px]",
          variant === "dark"
            ? "border-white/25 bg-black/35"
            : "border-black/10 bg-white/80",
          "px-3 py-2",
        ].join(" ")}
      >
        <img
          src={src}
          alt={alt}
          className="h-7 sm:h-8 w-auto object-contain"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default function BestYachtCharterDubaiEn() {
  const ACCENT = "#0F172A";
  const LOGO_SRC = "/logo.svg";

  const BASE_URL = "https://eliteyachtsdubai.com";
  const { pathname } = useLocation();
  const CANONICAL = `${BASE_URL}${pathname}`;

  const HERO_BG = "/en/images/banners/bestcompany.webp";
  const SEC_BG = "/en/images/banners/bestcompany.png";
  const ogImage = `${BASE_URL}/images/og/bestcompany.webp`;

  const title = applyTM("Best Yacht Charter in Dubai | Elite Yachts™ — #1 in Dubai");
  const description = applyTM(
    "Elite Yachts™ is one of the best yacht charter options in Dubai: luxury fleet from 36ft to 300ft, capacity from 10 to 200 guests, parties & VIP, real-time availability, and direct booking via WhatsApp or call."
  );

  const keywords = [
    "best yacht charter Dubai",
    "best yacht rental Dubai",
    "Dubai yacht charter",
    "Dubai Marina yacht rental",
    "yacht booking WhatsApp Dubai",
    "luxury yacht Dubai",
    "Dubai Marina yachts",
    "Dubai boat trip",
    "VIP yacht Dubai",
    "Elite Yachts Dubai",
  ].join(", ");

  const [yachts, setYachts] = useState([]);

  useEffect(() => {
    fetch("/data/yachts.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((json) => setYachts(Array.isArray(json) ? json : []))
      .catch(console.error);
  }, []);

  const faq = useMemo(
    () => [
      {
        q: "Do you offer instant booking and real-time availability?",
        a: "Yes. Based on your date, duration, and guest count, we share available options instantly and confirm quickly via WhatsApp or phone.",
      },
      {
        q: "What is the minimum booking duration?",
        a: "Usually 2 hours. Some yachts or time slots may require a different minimum depending on season and availability.",
      },
      {
        q: "What’s the guest capacity range?",
        a: "We have yachts for groups from 10 up to 200 guests depending on the yacht size and event type.",
      },
      {
        q: "Do you provide VIP services like chef, décor, and transportation?",
        a: "Yes. On-board chef upon request, premium décor options (extra fees may apply), and VIP transportation on request.",
      },
      {
        q: "Are pets allowed?",
        a: "For safety and hygiene reasons, pets are not allowed on most trips.",
      },
      {
        q: "Where is the departure point?",
        a: "Most trips depart from Dubai Marina. Other pickup/drop-off points may be arranged depending on yacht and permits.",
      },
      {
        q: "Can we add catering and drinks?",
        a: "Yes. We offer hospitality and catering options based on your preferred level, and menus can be customized for your occasion.",
      },
      {
        q: "Can you organize a birthday party or proposal?",
        a: "Absolutely. We arrange birthdays and proposals with décor, photography, and a route plan that matches the time and location.",
      },
    ],
    []
  );

  const schemaData = useMemo(() => {
    const heroImgAbs = `${BASE_URL}${HERO_BG.startsWith("/") ? "" : "/"}${HERO_BG}`;

    const breadcrumb = {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Best Yacht Charter in Dubai", item: CANONICAL },
      ],
    };

    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: applyTM(f.q),
        acceptedAnswer: { "@type": "Answer", text: applyTM(f.a) },
      })),
    };

    const itemList = (Array.isArray(yachts) ? yachts : [])
      .slice(0, 60)
      .map((y, i) => {
        const slug = y?.slug ? String(y.slug).replace(/^\//, "") : "";
        const url = slug ? `${BASE_URL}/${slug}` : CANONICAL;
        const name = y?.name_en || y?.title_en || y?.name || y?.title || "Luxury Yacht in Dubai";
        const image = y?.image || y?.imageUrl || y?.cover || y?.hero || null;

        const entry = { "@type": "ListItem", position: i + 1, url, name };
        if (image) entry.image = image.startsWith("http") ? image : `${BASE_URL}${image}`;
        return entry;
      });

    const fleetSchema =
      itemList.length > 0
        ? {
          "@type": "CollectionPage",
          "@id": `${CANONICAL}#fleet`,
          url: CANONICAL,
          name: title,
          inLanguage: "en-AE",
          mainEntity: {
            "@type": "ItemList",
            itemListOrder: "https://schema.org/ItemListOrderAscending",
            numberOfItems: itemList.length,
            itemListElement: itemList,
          },
        }
        : null;

    return [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL}#webpage`,
        url: CANONICAL,
        name: title,
        description,
        inLanguage: "en-AE",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#organization` },
        primaryImageOfPage: { "@id": `${CANONICAL}#primaryimage` },
        breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
      },
      {
        "@type": "ImageObject",
        "@id": `${CANONICAL}#primaryimage`,
        url: heroImgAbs,
        contentUrl: heroImgAbs,
        caption: applyTM("Best Yacht Charter in Dubai - Elite Yachts™"),
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: applyTM("Elite Yachts Dubai™"),
        alternateName: ["Elite Yachts™", "Elite Yachts Dubai™", applyTM("™إيليت يخوت")],
        url: BASE_URL,
        areaServed: "AE",
        sameAs: [],
      },
      breadcrumb,
      faqSchema,
      ...(fleetSchema ? [fleetSchema] : []),
    ];
  }, [BASE_URL, CANONICAL, faq, description, title, HERO_BG, yachts]);

  const WA_LINK =
    "https://wa.me/971569006603?text=Hello%20Elite%20Yachts%2C%20I%20want%20to%20book%20a%20yacht%20in%20Dubai.";

  return (
    <>
      <Seo
        key={pathname}
        title={title}
        description={description}
        keywords={keywords}
        canonical={CANONICAL}
        ogTitle={title}
        ogDescription={description}
        ogImage={ogImage}
        ogUrl={CANONICAL}
        lang="en"
        dir="ltr"
        ogLocale="en_AE"
        ogType="website"
      />
      <Schema data={schemaData} />

      <main dir="ltr" lang="en" className="w-full bg-white text-black" style={{ ["--accent"]: ACCENT }}>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${HERO_BG}')` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.14),transparent_60%)]" />
          </div>

          <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
            <div className="mx-auto max-w-4xl text-center rounded-3xl border border-black/10 bg-white/85 backdrop-blur-[2px] px-4 sm:px-8 py-8 sm:py-10 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Chip>Dubai Marina</Chip>
                <Chip>VIP</Chip>
                <Chip>
                  <TMText>Elite Yachts</TMText>
                </Chip>
              </div>

              <h1 className="mt-4 text-[20px] sm:text-[34px] lg:text-[42px] font-light tracking-[0.02em] leading-[1.18] text-black/90">
                <TMText>Elite Yachts™</TMText> — Best Yacht Charter in Dubai
              </h1>

              <p className="mt-4 text-[13px] sm:text-[15px] leading-[1.95] text-black/70">
                <TMText>
                  We don’t just provide a yacht — we organize a complete luxury trip. A diverse fleet from 36ft to
                  300ft, options for private and family cruises, parties and VIP experiences, with clear planning
                  and fast confirmation via WhatsApp or phone.
                </TMText>
              </p>

              <div className="mt-6 inline-flex max-w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-4 sm:px-5 py-2 text-[11px] sm:text-[12px] tracking-[0.06em] text-black/60 shadow-[0_10px_26px_rgba(15,23,42,0.08)]">
                <i className="fa-solid fa-shield-halved text-[var(--accent)] shrink-0" />
                <span className="leading-[1.6] break-words">
                  Real-time availability • Direct booking • VIP options • Fast support
                </span>
              </div>

              <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-9 py-3 border border-black bg-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_18px_52px_rgba(15,23,42,0.26)] sm:min-w-[260px]"
                >
                  <i className="fa-brands fa-whatsapp text-[16px]" />
                  <span className="text-[13px] sm:text-sm tracking-[0.03em] truncate max-w-[85vw] sm:max-w-none">
                    Book on WhatsApp Now
                  </span>
                </a>

                <a
                  href="tel:+971569006603"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-9 py-3 border border-black/12 bg-white text-black/85 shadow-[0_14px_34px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-black/25 hover:shadow-[0_18px_46px_rgba(15,23,42,0.16)] sm:min-w-[260px]"
                >
                  <i className="fa-solid fa-phone text-[14px] text-[var(--accent)]" />
                  <span className="text-[13px] sm:text-sm tracking-[0.03em] truncate max-w-[85vw] sm:max-w-none">
                    Call for Instant Confirmation
                  </span>
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <Stat value="36FT–300FT" label="Fleet sizes" />
                <Stat value="10–200" label="Guest capacity" />
                <Stat value="2+ hours" label="Minimum booking" />
                <Stat value="VIP" label="Luxury services" />
              </div>

              <p className="mt-6 text-[11px] sm:text-[12px] leading-[1.9] text-black/60">
                <TMText>
                  If you’re aiming for the “best yacht charter in Dubai”, the real standard is organization:
                  the right yacht recommendation, clear pricing, fast confirmation, and support before & during
                  the trip — that’s what Elite Yachts™ focuses on.
                </TMText>
              </p>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[18px] sm:text-[26px] font-light tracking-[0.02em] text-black/90">
              Why choose <TMText>Elite Yachts™</TMText>?
            </h2>
            <p className="mt-3 text-[13px] sm:text-[15px] leading-[1.95] text-black/70">
              A premium, organized experience from start to finish: yacht selection, confirmation, welcome, sailing,
              and return — without hassle.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <Card icon="fa-solid fa-bolt" title="Real-time availability, fast confirmation">
              We match your date, duration, budget, and guest count, then share the best available options immediately —
              with quick confirmation.
            </Card>
            <Card icon="fa-solid fa-crown" title="True VIP options">
              On-board chef upon request, premium hospitality, music, luxury décor (extra fees may apply), and high-level
              event coordination.
            </Card>
            <Card icon="fa-solid fa-people-group" title="Capacity for trips & events">
              From romantic cruises to private parties and corporate events — yachts for 10 to 200 guests.
            </Card>
            <Card icon="fa-solid fa-tags" title="Clear pricing, no surprises">
              Pricing depends on yacht, duration, and services. We clarify everything before confirmation, with flexible upgrades.
            </Card>
            <Card icon="fa-solid fa-location-dot" title="Dubai’s best routes">
              Dubai Marina, Bluewaters, Ain Dubai, Palm Jumeirah, Atlantis — we adapt the route to your time and desired vibe.
            </Card>
            <Card icon="fa-solid fa-shield" title="Professional, organized experience">
              Experienced crew, smooth boarding flow, and clear guidance — luxury starts with details.
            </Card>
          </div>

          {/* Content block (no “SEO talk”) */}
          <div className="mt-10 max-w-5xl mx-auto rounded-3xl border border-black/10 bg-white p-6 sm:p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <p className="text-[11px] tracking-[0.22em] uppercase text-black/55 text-center">
              Dubai Marina • Cruises • Direct Booking
            </p>
            <div className="mx-auto mt-3 mb-4 h-px w-40 bg-gradient-to-r from-transparent via-black/15 to-transparent" />

            <div className="text-[13px] sm:text-[14px] leading-[2.0] text-black/70 text-left">
              <TMText>
                When choosing the “best yacht charter in Dubai”, focus on three things: (1) fleet quality & variety,
                (2) speed of confirmation and clarity of details, (3) organization and optional services. At Elite Yachts™,
                we help you pick the right yacht for your guest count and duration: private cruises, family trips, birthday parties,
                corporate events, and sunset experiences — with add-ons like catering, hospitality, chef, and décor (extra fees may apply).
              </TMText>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { t: "Before the trip", d: "Right yacht recommendation + quick confirmation + clear details." },
                { t: "During the trip", d: "Professional crew + premium service + organized route & experience." },
                { t: "After the trip", d: "Smooth wrap-up + fast support for any questions." },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 text-center">
                  <div className="text-[13px] sm:text-[14px] font-medium text-black/85">{x.t}</div>
                  <div className="mt-1 text-[12px] text-black/60 leading-[1.7]">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES + IMAGE */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_35%,rgba(15,23,42,0.03))]" />
          <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div className="rounded-3xl border border-black/10 bg-white/85 p-6 sm:p-8 shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
                <h2 className="text-[16px] sm:text-[22px] font-light tracking-[0.02em] text-black/90">
                  Ready-to-book services & experiences
                </h2>

                <p className="mt-3 text-[13px] sm:text-[14px] leading-[1.95] text-black/70">
                  Choose your trip goal and we’ll handle everything: the right yacht, crew, and hospitality based on your luxury level.
                  This page is ideal for anyone looking for Dubai yacht rental, Dubai Marina yacht charter, and fast WhatsApp booking.
                </p>

                <ul className="mt-5 space-y-3 text-[13px] sm:text-[14px] text-black/70 leading-[1.95]">
                  <li className="flex gap-3">
                    <i className="fa-solid fa-check mt-1 text-[var(--accent)]" />
                    <span>Private parties with décor (basic / ultra-luxury) — extra fees may apply.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-check mt-1 text-[var(--accent)]" />
                    <span>On-board chef upon request + hospitality and catering options.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-check mt-1 text-[var(--accent)]" />
                    <span>Corporate events with VIP coordination + photo/music on request.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-check mt-1 text-[var(--accent)]" />
                    <span>VIP transportation on request + boarding points based on permits.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-check mt-1 text-[var(--accent)]" />
                    <span>Pets are not allowed on most trips.</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-8 py-3 border border-black bg-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)] sm:min-w-[240px]"
                  >
                    <i className="fa-brands fa-whatsapp text-[15px]" />
                    <span className="text-[13px] sm:text-sm tracking-[0.03em]">Request a Quote</span>
                  </a>

                  <a
                    href="/yacht-rental-dubai"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-8 py-3 border border-black/12 bg-white text-black/85 shadow-[0_14px_34px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-black/25 sm:min-w-[240px]"
                  >
                    <i className="fa-solid fa-sailboat text-[14px] text-[var(--accent)]" />
                    <span className="text-[13px] sm:text-sm tracking-[0.03em]">Browse the Fleet</span>
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/85 p-3 sm:p-4 shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
                <div className="relative overflow-hidden rounded-3xl">
                  <LogoBadge src={LOGO_SRC} alt="Elite Yachts™ logo" variant="light" />

                  <img
                    src={SEC_BG}
                    alt={applyTM("Best yacht charter in Dubai Marina - Elite Yachts™")}
                    className="h-[260px] sm:h-[340px] lg:h-[420px] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/55" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-center">
                    <div className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-[11px] sm:text-[12px] text-black/70 shadow-[0_14px_34px_rgba(15,23,42,0.10)]">
                      <i className="fa-solid fa-star text-[var(--accent)]" />
                      <span>
                        <TMText>Elite Yachts™</TMText> • Luxury • Dubai
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-black/10 bg-white p-4 text-center">
                    <div className="text-[13px] sm:text-[14px] font-medium text-black/85">Fast booking</div>
                    <div className="mt-1 text-[12px] text-black/60 leading-[1.7]">WhatsApp or call — confirmed in minutes</div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 text-center">
                    <div className="text-[13px] sm:text-[14px] font-medium text-black/85">Luxury experience</div>
                    <div className="mt-1 text-[12px] text-black/60 leading-[1.7]">Décor, chef, and VIP options upon request</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <Chip>No brokers</Chip>
              <Chip>Party setups</Chip>
              <Chip>Corporate events</Chip>
              <Chip>Top Dubai routes</Chip>
              <Chip>Professional team</Chip>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[18px] sm:text-[26px] font-light tracking-[0.02em] text-black/90">
              Frequently asked questions about Dubai yacht charter
            </h2>
            <p className="mt-3 text-[13px] sm:text-[15px] leading-[1.95] text-black/70">
              Everything you need to know before booking — clear and fast.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {faq.map((f, idx) => (
              <FAQItem key={idx} q={<TMText>{f.q}</TMText>} a={<TMText>{f.a}</TMText>} />
            ))}
          </div>
        </section>

        {/* FLEET */}
        <section aria-label={applyTM("Elite Yachts™ fleet - Dubai Marina yacht rental")} className="w-full py-16 bg-white">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="mb-12 text-center max-w-5xl mx-auto">
              <p className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-black/55">
                Dubai Marina • VIP • <TMText>Elite Yachts™</TMText>
              </p>
              <div className="mx-auto mt-3 mb-4 h-px w-40 bg-gradient-to-r from-transparent via-black/15 to-transparent" />

              <h2 className="text-[18px] sm:text-[28px] font-light tracking-[0.02em] text-black/90">
                Choose your yacht and book in minutes
              </h2>

              <p className="mt-3 text-[13px] sm:text-[15px] leading-[1.95] text-black/70">
                <TMText>
                  A curated selection of Dubai yachts for private cruises, family trips, and parties. Choose your size,
                  then send your date, duration, and guest count — we’ll confirm availability fast via WhatsApp or phone.
                </TMText>
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2 text-[11px] sm:text-[12px]">
                {[
                  "Dubai Yacht Rental",
                  "Dubai Marina Yacht Charter",
                  "WhatsApp Yacht Booking",
                  "Dubai Marina Yachts",
                  "Luxury Yacht Dubai",
                  "Dubai Boat Trips",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-black/70 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                  >
                    <span className="font-medium">{t}</span>
                  </span>
                ))}
              </div>
            </div>

            {Array.isArray(yachts) && yachts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yachts.slice(0, 18).map((y) => (
                  <YachtCard key={y?.slug || y?.id || Math.random()} yacht={y} />
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-2xl text-center rounded-3xl border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                <p className="text-[13px] leading-[1.9] text-black/70">
                  Loading the fleet… if it doesn’t appear quickly, message us on WhatsApp and we’ll send available options right away.
                </p>
              </div>
            )}

            <div className="mt-12 max-w-5xl mx-auto rounded-3xl border border-black/10 bg-black/[0.03] p-6 sm:p-8">
              <h3 className="text-[15px] sm:text-[18px] font-medium tracking-[0.02em] text-black/85">
                How to choose the best yacht in Dubai Marina
              </h3>
              <p className="mt-3 text-[13px] sm:text-[14px] leading-[2.0] text-black/70">
                Choose based on (1) guest count, (2) experience type: calm/private vs party/event, (3) duration,
                (4) services like hospitality, chef, or décor. That’s how you get a clear, organized yacht rental in Dubai
                with no surprises.
              </p>
              <p className="mt-4 text-[13px] sm:text-[14px] leading-[2.0] text-black/70">
                For fast Dubai Marina yacht booking, send: date + duration + guests + occasion — and we’ll recommend the best options
                available, with confirmation via WhatsApp in minutes.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.10),transparent_60%)]" />
          <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <div className="mx-auto max-w-4xl text-center rounded-3xl border border-black/10 bg-white/85 backdrop-blur-[2px] px-4 sm:px-10 py-8 sm:py-10 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
              <h2 className="text-[16px] sm:text-[26px] font-light tracking-[0.02em] text-black/90">
                Ready to book a luxury yacht in Dubai today?
              </h2>
              <p className="mt-3 text-[13px] sm:text-[15px] leading-[1.95] text-black/70">
                Send your date, guest count, and duration — we’ll share the best available options instantly.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-10 py-3 border border-black bg-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_18px_52px_rgba(15,23,42,0.26)] sm:min-w-[280px]"
                >
                  <i className="fa-brands fa-whatsapp text-[16px]" />
                  <span className="text-[13px] sm:text-sm tracking-[0.03em] truncate max-w-[85vw] sm:max-w-none">
                    Book via WhatsApp in Minutes
                  </span>
                </a>

                <a
                  href="tel:+971569006603"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-10 py-3 border border-black/12 bg-white text-black/85 shadow-[0_14px_34px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-black/25 hover:shadow-[0_18px_46px_rgba(15,23,42,0.16)] sm:min-w-[280px]"
                >
                  <i className="fa-solid fa-phone text-[14px] text-[var(--accent)]" />
                  <span className="text-[13px] sm:text-sm tracking-[0.03em] truncate max-w-[85vw] sm:max-w-none">
                    Quick Call, Instant Confirmation
                  </span>
                </a>
              </div>

              <div className="mt-6 text-[11px] text-black/55 leading-[1.8]">
                <TMText>
                  Note: minimum booking is usually 2 hours • pets not allowed on most trips • décor and special services may have extra fees
                </TMText>
              </div>
            </div>
          </div>
        </section>

        <div className="relative">
          <CTASection variant="fleet" />
        </div>
      </main>
    </>
  );
}
