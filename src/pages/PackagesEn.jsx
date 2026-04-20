import { useEffect, useMemo, useState } from "react";
import CTASection from "../components/CTASection";
import YachtCard from "../components/YachtCard";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

const ACCENT = "#111827";
const PHONE_TEL = "tel:+971569006603";
const WHATSAPP = "https://wa.me/971569006603";

function applyTM(input = "") {
  let out = String(input);

  // English
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return out;
}

function TM({ children }) {
  const text = typeof children === "string" ? children : "";
  return applyTM(text);
}

const K = ({ children, tone = "dark" }) => (
  <strong
    className={
      tone === "light" ? "font-semibold text-white" : "font-semibold text-slate-900"
    }
  >
    {children}
  </strong>
);

const SEO_KEYWORDS_EN = [
  "Dubai yacht rental",
  "Dubai Marina yacht charter",
  "Luxury yacht rental Dubai",
  "Private yacht Dubai",
  "Yacht booking Dubai WhatsApp",
  "Sunset yacht cruise Dubai",
  "Birthday yacht party Dubai",
  "Romantic yacht dinner Dubai",
  "Corporate yacht event Dubai",
  "Dubai Marina cruise",
  "Palm Jumeirah yacht route",
  "Burj Al Arab yacht view",
  "Yacht rental per hour Dubai",
  "VIP yacht Dubai",
  "Elite Yachts Dubai"
];

const PACKAGES = [
  {
    tag: "Most Booked",
    title: "Sunset Cruise Package",
    image: "/en/images/packages/sunset.webp",
    icon: "fa-solid fa-sun",
    duration: "2 hours (minimum)",
    ideal: "Couples • Families • VIP guests",
    highlights: [
      "Iconic Dubai skyline views at sunset",
      "Palm Jumeirah + Atlantis route",
      "Perfect for photos & proposals",
      "Fast booking on WhatsApp + quick availability confirmation"
    ],
    includes: [
      "Captain + professional crew",
      "Water + soft drinks",
      "Premium Bluetooth sound system",
      "Safety equipment"
    ],
    alt:
      "Sunset yacht cruise Dubai | Dubai Marina yacht charter | Luxury yacht rental Dubai | Yacht booking Dubai"
  },
  {
    tag: "Premium",
    title: "Birthday Celebration Package",
    image: "/en/images/packages/birthday.webp",
    icon: "fa-solid fa-cake-candles",
    duration: "3 hours",
    ideal: "Friends • Families • Party groups",
    highlights: [
      "Party-ready yacht setup",
      "Comfortable seating + open deck vibe",
      "Top choice for yacht parties in Dubai",
      "Optional décor & custom coordination available"
    ],
    includes: [
      "Captain + crew",
      "Ice + water + soft drinks",
      "Birthday setup support",
      "Premium hospitality options"
    ],
    alt:
      "Birthday yacht party Dubai | Dubai yacht party | Private yacht Dubai | Yacht rental Dubai"
  },
  {
    tag: "VIP",
    title: "Luxury Romance Package",
    image: "/en/images/packages/romance.webp",
    icon: "fa-solid fa-heart",
    duration: "2–3 hours (minimum 2 hours)",
    ideal: "Couples • Proposals • Anniversaries",
    highlights: [
      "Private yacht in Dubai for a romantic escape",
      "Elegant atmosphere + calm route",
      "Sunset with iconic landmarks",
      "Special add-ons available (décor / catering / photography)"
    ],
    includes: [
      "Captain + crew",
      "Water + soft drinks",
      "Music system",
      "Flexible timing & route planning"
    ],
    alt:
      "Romantic yacht Dubai | Yacht dinner Dubai | Dubai Marina yacht charter | Luxury yacht rental Dubai"
  },
  {
    tag: "Elite",
    title: "Corporate VIP Package",
    image: "/en/images/packages/corporate.webp",
    icon: "fa-solid fa-briefcase",
    duration: "3–4 hours",
    ideal: "Clients • Executives • Teams",
    highlights: [
      "Premium yacht rental for business events",
      "Elegant hospitality to impress clients",
      "High privacy + professional coordination",
      "Optional add-ons (catering / décor / music) available"
    ],
    includes: [
      "Captain + crew",
      "Water + soft drinks",
      "Professional hosting support",
      "Flexible schedule"
    ],
    alt:
      "Corporate yacht event Dubai | VIP yacht Dubai | Dubai Marina yacht charter | Luxury yacht rental Dubai"
  },
  {
    tag: "Luxury",
    title: "Dubai Marina Tour Package",
    image: "/en/images/packages/marina.webp",
    icon: "fa-solid fa-water",
    duration: "2 hours (minimum)",
    ideal: "Tourists • Sightseeing • Families",
    highlights: [
      "Dubai Marina landmark tour",
      "Ideal for first-time visitors",
      "Quick Dubai yacht booking option",
      "Flexible routes based on your timing"
    ],
    includes: [
      "Captain + crew",
      "Water + soft drinks",
      "Music system",
      "Safety equipment"
    ],
    alt:
      "Dubai Marina cruise | Dubai Marina yacht charter | Private yacht Dubai | Luxury yacht rental Dubai"
  },
  {
    tag: "Party",
    title: "Friends & Weekend Package",
    image: "/en/images/packages/party.webp",
    icon: "fa-solid fa-music",
    duration: "3 hours",
    ideal: "Friends • Weekend plans",
    highlights: [
      "Yacht party vibes in Dubai",
      "Spacious seating + open deck",
      "Perfect for group hangouts",
      "Fast booking + quick availability confirmation"
    ],
    includes: [
      "Captain + crew",
      "Water + soft drinks",
      "Bluetooth sound",
      "Flexible route"
    ],
    alt:
      "Yacht party Dubai | Dubai yacht rental | Dubai Marina yacht charter | Yacht booking Dubai"
  }
];

export default function PackagesEn() {
  const [yachts, setYachts] = useState([]);

  const BASE_URL = "https://eliteyachtdubai.com";
  const PAGE_PATH = "/yacht-packages-dubai";
  const CANONICAL = `${BASE_URL}${PAGE_PATH}`;
  const ogImage = `${BASE_URL}/images/og/sunset.webp`;

  const keywords = useMemo(() => SEO_KEYWORDS_EN.join(", "), []);

  const title = useMemo(
    () =>
      applyTM(
        "Dubai Yacht Packages | Dubai Marina Yacht Charter + Fast Booking on WhatsApp"
      ),
    []
  );

  const description = useMemo(
    () =>
      applyTM(
        "Choose Elite Yachts Dubai packages for Dubai Marina yacht charter: sunset cruise, birthday yacht party, luxury romance, corporate VIP, and Dubai Marina tour. Transparent pricing, quick availability confirmation, and easy booking via WhatsApp."
      ),
    []
  );

  useEffect(() => {
    // If your EN fleet is separate, switch to /data/yachts_en.json
    fetch("/data/yachts.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((json) => setYachts(Array.isArray(json) ? json : []))
      .catch(console.error);
  }, []);

  const schemaData = useMemo(() => {
    const itemList = PACKAGES.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: applyTM(p.title),
      description: applyTM(`${p.duration} - ${p.ideal}`),
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
          numberOfItems: PACKAGES.length,
          itemListElement: itemList
        }
      }
    ];
  }, [BASE_URL, CANONICAL, title, description]);

  return (
    <div dir="ltr" lang="en" className="relative w-full bg-white text-slate-900">
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

      <section className="relative min-h-[52vh] sm:min-h-[62vh] lg:min-h-[72vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/en/images/banners/packages.webp"
            alt="Dubai yacht packages | Dubai Marina yacht charter | Yacht booking Dubai"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,0,0,0.18),transparent_62%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.42),transparent_55%)]" />
        </div>

        <div className="relative w-full">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-24 text-center">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-white uppercase">
              <TM>Elite</TM> Yachts Dubai • Dubai Marina • VIP
            </p>

            <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
              <div className="h-px mx-auto w-32 sm:w-52 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.08em] sm:tracking-[0.10em] text-white leading-tight">
              Dubai Yacht Packages & Dubai Marina Yacht Charter Experiences
            </h1>

            <p className="mt-4 sm:mt-6 text-white/90 leading-relaxed max-w-4xl mx-auto text-xs sm:text-base px-2">
              Pick your vibe: <K tone="light">sunset cruise</K>,{" "}
              <K tone="light">birthday yacht party</K>,{" "}
              <K tone="light">romantic experience</K>,{" "}
              or <K tone="light">corporate VIP hosting</K> — with clear coordination and fast{" "}
              <K tone="light">WhatsApp booking</K>.
            </p>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm border border-black bg-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.16)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)] sm:min-w-[240px]"
                style={{ ["--accent"]: ACCENT }}
              >
                <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                Book Now
              </a>

              <a
                href={PHONE_TEL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm border border-white/20 bg-white/10 text-white shadow-[0_14px_34px_rgba(15,23,42,0.10)] transition-all duration-300 hover:bg-white/15 sm:min-w-[240px]"
              >
                <i className="fa-solid fa-phone text-base sm:text-lg" />
                Call now
              </a>
            </div>

            <p className="mt-5 sm:mt-6 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-white/70">
              Minimum booking: 2 hours • Transparent pricing • VIP coordination • Dubai Marina
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="relative py-12 sm:py-16">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[9px] sm:text-[11px] tracking-[0.35em] text-slate-600 uppercase">
              <TM>Elite</TM> packages • yacht experiences • fast booking
            </p>

            <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
              <div className="h-px mx-auto w-32 sm:w-52 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.08em] sm:tracking-[0.10em] text-slate-900">
              Choose your experience: <K>Dubai Marina tour</K> or <K>romantic yacht dinner</K>
            </h2>

            <p className="mt-3 sm:mt-4 text-slate-700 leading-relaxed max-w-4xl mx-auto text-xs sm:text-base px-2">
              Curated packages for <K>Dubai yacht rental</K> and <K>Dubai Marina yacht charter</K>, with clear
              timing, add-ons, and smooth coordination.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2 text-[12px]">
              {[
                "Dubai yacht rental",
                "Dubai Marina yacht charter",
                "Luxury yacht rental Dubai",
                "Sunset cruise Dubai",
                "Birthday yacht party",
                "Yacht booking WhatsApp"
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-black/75 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                >
                  <K>{t}</K>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {PACKAGES.map((p) => (
              <PackageCard key={p.title} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FLEET SECTION */}
      <section
        aria-label="Elite Yachts Dubai fleet - Dubai Marina yacht charter"
        className="w-full py-20 bg-white"
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="mb-14 text-center max-w-5xl mx-auto">
            <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.32em] text-black/60 uppercase mb-3">
              <TM>Elite</TM> Yachts Dubai Fleet
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-black leading-tight">
              Dubai Marina Yacht Charter — Luxury options & fast booking
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-black/75">
              Choose the right yacht for your plan: private cruises, birthdays and celebrations, corporate hosting,
              or romantic experiences. Clear coordination and quick booking via WhatsApp.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2 text-[12px]">
              {[
                "Private yacht Dubai",
                "Luxury yacht rental Dubai",
                "Dubai Marina cruise",
                "VIP yacht Dubai",
                "Palm Jumeirah route",
                "Burj Al Arab view"
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-black/75 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                >
                  <K>{t}</K>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(Array.isArray(yachts) ? yachts : []).map((yacht) => (
              <YachtCard key={yacht.slug} yacht={yacht} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO BLOCK */}
      <section className="bg-black text-white">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.38em] uppercase text-white/70">
              <TM>Elite</TM> Yachts Dubai
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.08em] leading-[1.25]">
              <K tone="light">Dubai yacht rental</K> •{" "}
              <K tone="light">Dubai Marina yacht charter</K> •{" "}
              <K tone="light">Luxury yacht experiences</K>
            </h2>

            <p className="mt-6 text-white/85 leading-relaxed text-[13px] sm:text-[15px]">
              If you’re looking for a <K tone="light">Dubai Marina yacht charter</K>, a{" "}
              <K tone="light">private yacht in Dubai</K>, or a{" "}
              <K tone="light">romantic yacht dinner</K>, our packages are designed for clear coordination,
              transparent pricing, and fast booking on WhatsApp.
            </p>

            <div className="mt-10 flex flex-wrap gap-2 justify-center">
              {SEO_KEYWORDS_EN.map((t, idx) => (
                <span
                  key={`${t}-${idx}`}
                  className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-[12px] text-white"
                >
                  <K tone="light">{t}</K>
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm border border-white/25 bg-white text-slate-900 hover:bg-white/90 transition"
              >
                <i className="fa-brands fa-whatsapp" style={{ color: ACCENT }} />
                WhatsApp booking
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm border border-white/25 bg-black text-white hover:bg-white/10 transition"
              >
                <i className="fa-solid fa-phone" />
                Call now
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="fleet" />

      {/* HOW TO CHOOSE */}
      <section
        aria-label="How to book a yacht in Dubai Marina - steps, dinner cruises and pricing"
        className="w-full bg-white"
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-[11px] sm:text-[12px] tracking-[0.32em] text-black/60 uppercase text-center">
              Fast booking • clear coordination • Dubai Marina
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-tight text-center">
              How to choose the right Dubai yacht package
              (family • dinner • day charter)
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-black/75">
              Start by defining your goal: a relaxed <strong className="font-semibold">family cruise</strong>, a{" "}
              <strong className="font-semibold">romantic yacht dinner</strong>, a{" "}
              <strong className="font-semibold">sunset tour</strong>, or a{" "}
              <strong className="font-semibold">birthday yacht party</strong>. Then choose the yacht size and route
              (Dubai Marina, Palm Jumeirah, Burj Al Arab) based on guests and timing.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  t: "Step 1: Pick the experience type",
                  d: (
                    <>
                      Choose between a <strong className="font-semibold">Dubai Marina sightseeing cruise</strong>, a{" "}
                      <strong className="font-semibold">yacht dinner</strong>, or a{" "}
                      <strong className="font-semibold">celebration package</strong> for events.
                    </>
                  )
                },
                {
                  t: "Step 2: Set time & budget",
                  d: (
                    <>
                      Hourly pricing depends on yacht type, hours, and add-ons. We confirm availability first and keep
                      pricing transparent.
                    </>
                  )
                },
                {
                  t: "Step 3: Choose the departure point",
                  d: (
                    <>
                      We share clear boarding details and meeting point instructions for a smooth check-in experience.
                    </>
                  )
                },
                {
                  t: "Step 4: Book fast on WhatsApp",
                  d: (
                    <>
                      Confirm your date, time, and guest count — and we’ll confirm availability quickly for your Dubai
                      Marina yacht charter.
                    </>
                  )
                }
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-black tracking-[0.06em]">
                    {x.t}
                  </h3>
                  <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-black/75">
                    {x.d}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-2 text-[12px]">
              {[
                "Dubai yacht rental",
                "Dubai Marina yacht charter",
                "Luxury yacht rental Dubai",
                "Private yacht Dubai",
                "Sunset cruise Dubai",
                "Birthday yacht party Dubai",
                "Romantic yacht dinner Dubai",
                "Yacht booking Dubai WhatsApp"
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-black/75 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                >
                  <strong className="font-semibold">{t}</strong>
                </span>
              ))}
            </div>

            <p className="mt-10 text-[15px] sm:text-[16px] leading-relaxed text-black/75 text-center">
              For the best experience, focus on your goal first, then choose the right yacht size and duration.
              That’s how you get a smooth, premium Dubai yacht charter that fits your time and budget.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function PackageCard({ pkg }) {
  const fallbackImg = "/images/banners/packages.webp";
  const imgSrc = pkg?.image || fallbackImg;
  const imgAlt = pkg?.alt || "Dubai yacht rental | Dubai Marina yacht charter | Yacht booking Dubai";

  return (
    <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-black/10 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(0,0,0,0.14)] hover:border-black/20">
      <div className="relative h-44 sm:h-72 w-full">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable="false"
          onError={(e) => {
            e.currentTarget.src = fallbackImg;
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.42),transparent_60%)]" />
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[11px] text-white">
            <K tone="light">{pkg.tag}</K>
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0 text-left">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
              {pkg.tag}
            </p>

            <h3 className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-[15px] tracking-[0.10em] text-slate-900">
              <K>{pkg.title}</K>
            </h3>
          </div>

          <span className="inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)] flex-shrink-0">
            <i className={`${pkg.icon} text-sm sm:text-base`} style={{ color: ACCENT }} />
          </span>
        </div>

        <div className="mt-3 sm:mt-4 h-px w-full bg-black/10" />

        <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3">
          <div className="rounded-xl sm:rounded-2xl border border-black/10 bg-black/[0.03] p-2.5 sm:p-3 text-left">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
              Duration
            </p>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-800">
              <K>{pkg.duration}</K>
            </p>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-black/10 bg-black/[0.03] p-2.5 sm:p-3 text-left">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
              Ideal for
            </p>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-800">
              <K>{pkg.ideal}</K>
            </p>
          </div>
        </div>

        <p className="mt-4 sm:mt-5 text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
          Highlights
        </p>

        <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/45 flex-shrink-0" />
              <span>
                <K>{h}</K>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-5 sm:mt-6 text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
          Includes
        </p>

        <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2 justify-start">
          {pkg.includes.map((i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-black/10 bg-white px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[12px] text-slate-700 shadow-[0_10px_22px_rgba(15,23,42,0.06)]"
            >
              <i className="fa-solid fa-star text-[9px] sm:text-[10px] text-black/60" />
              <K>{i}</K>
            </span>
          ))}
        </div>

        <div className="mt-5 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm border border-black bg-black text-white shadow-[0_14px_34px_rgba(15,23,42,0.14)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)]"
            style={{ ["--accent"]: ACCENT }}
          >
            <i className="fa-brands fa-whatsapp text-sm sm:text-base" />
           Easy Booking
          </a>

          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm border border-black/15 bg-white text-slate-900 shadow-[0_14px_34px_rgba(15,23,42,0.10)] transition-all duration-300 hover:border-black/30 hover:bg-black/[0.02]"
          >
            <i className="fa-solid fa-phone text-sm sm:text-base" />
            Call now
          </a>
        </div>

        <p className="mt-4 sm:mt-5 text-[11px] sm:text-[12px] text-slate-600 leading-relaxed text-left">
          <K>{applyTM("Elite Yachts Dubai")}</K> • <K>Dubai Marina</K> •{" "}
          <K>Luxury yacht rental</K> • <K>Fast booking</K>
        </p>
      </div>
    </div>
  );
}
