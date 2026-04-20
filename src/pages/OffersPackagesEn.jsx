import { useMemo } from "react";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import Schema from "../components/Schema";
import YachtsSection from "../components/YachtsSection";

const ACCENT = "#111827";
const PHONE_TEL = "tel:+971569006603";
const WHATSAPP_BASE = "https://wa.me/971569006603";

function applyTM(input = "") {
  let out = String(input);

  out = out.replace(/إيليت\s*™/g, "™إيليت");
  out = out.replace(/(^|[\s(،.；:!؟\-—])إيليت/g, (m) =>
    m.includes("™") ? m : m.replace("إيليت", "™إيليت")
  );
  out = out.replace(/(^|[\s(،.；:!؟\-—])إيليت\s+يخوت/g, (m) =>
    m.replace("إيليت يخوت", "™إيليت يخوت")
  );

  // English
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return out;
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

function moneyAED(n) {
  return `AED ${Number(n).toLocaleString("en-US")}`;
}

function buildWhatsAppText(lines) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function PriceTable({ title = "Prices (AED)", rows }) {
  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03]">
      <div className="flex items-center justify-between gap-3 bg-white px-4 py-3">
        <p className="text-[12px] font-semibold text-black/70">{title}</p>
        <p className="text-[11px] text-black/50">Depends on yacht & duration</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[640px] w-full">
          <thead>
            <tr className="bg-white">
              <th className="text-left px-4 py-3 text-[12px] font-semibold text-black/70">
                Yacht
              </th>
              <th className="text-left px-4 py-3 text-[12px] font-semibold text-black/70">
                2 Hours
              </th>
              <th className="text-left px-4 py-3 text-[12px] font-semibold text-black/70">
                3 Hours
              </th>
              <th className="text-left px-4 py-3 text-[12px] font-semibold text-black/70">
                4 Hours
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr
                key={r.yacht}
                className="border-t border-black/10 hover:bg-black/[0.03] transition"
              >
                <td className="px-4 py-3 text-[13px] text-slate-900 font-semibold">
                  {r.yacht}
                </td>
                <td className="px-4 py-3 text-[13px] text-black/75">{moneyAED(r.h2)}</td>
                <td className="px-4 py-3 text-[13px] text-black/75">{moneyAED(r.h3)}</td>
                <td className="px-4 py-3 text-[13px] text-black/75">{moneyAED(r.h4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PromoCard({ promo, accent = ACCENT }) {
  // WhatsApp message (EN)
  const wa = useMemo(() => {
    const lines = [
      "Hello,",
      `Can I get more information about this package: ${promo.title}`,
      "Please share details, availability, and pricing based on yacht & duration.",
      "Thank you.",
    ];
    return buildWhatsAppText(lines);
  }, [promo.title]);

  return (
    <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-black/10 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(0,0,0,0.14)] hover:border-black/20">
      {/* Media */}
      <div className="relative h-48 sm:h-[340px] w-full">
        <img
          src={promo.image}
          alt={promo.alt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable="false"
          onError={(e) => {
            e.currentTarget.src = "/images/banners/packages.webp";
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.42),transparent_60%)]" />
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[11px] text-white">
            <K tone="light">{promo.tag}</K>
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0 text-left">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
              <K>{promo.tag}</K>
            </p>

            <h3 className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-[15px] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-slate-900">
              <K>{promo.title}</K>
            </h3>

            <p className="mt-2 text-[12px] sm:text-[13px] text-slate-700">
              <K>{promo.duration}</K> • <K>{promo.ideal}</K>
            </p>
          </div>

          <span className="inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)] flex-shrink-0">
            <i className={`${promo.icon} text-sm sm:text-base`} style={{ color: accent }} />
          </span>
        </div>

        <div className="mt-4 h-px w-full bg-black/10" />

        {/* Details + Includes */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Details */}
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase text-left">
              Details
            </p>

            <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
              {promo.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-left">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/45 flex-shrink-0" />
                  <span className="leading-relaxed">
                    <K>{h}</K>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Includes */}
          <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase text-left">
              Includes
            </p>

            <ul className="mt-2 sm:mt-3 space-y-2 text-[12px] sm:text-[13px] text-black/70">
              {promo.includes.map((i) => (
                <li key={i} className="flex items-start gap-2 text-left">
                  <span className="mt-[3px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.415l-7.25 7.25a1 1 0 01-1.415 0l-3.25-3.25a1 1 0 011.415-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed">
                    <K>{i}</K>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Menus */}
        <p className="mt-5 sm:mt-6 text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase text-left">
          Menu
        </p>

        <div className="mt-2 sm:mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {promo.menus.map((m) => (
            <div key={m.name} className="rounded-2xl border border-black/10 bg-black/[0.03] p-4 h-full">
              <p className="text-[13px] font-semibold text-slate-900 text-left">
                <K>{m.name}</K>
              </p>

              <ul className="mt-3 space-y-1.5 text-[12px] sm:text-[13px] text-black/70">
                {m.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-left">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/45 flex-shrink-0" />
                    <span className="leading-relaxed">
                      <K>{it}</K>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-black/10 bg-white p-4">
          <p className="text-[12px] tracking-[0.25em] uppercase text-black/60 text-left">
            Route
          </p>
          <p className="mt-2 text-[13px] text-black/75 leading-relaxed text-left">
            <K>Dubai Marina</K> → <K>Skydive</K> → <K>Bluewaters</K> → <K>Ain Dubai</K> → <K>JBR</K>
          </p>
        </div>

        <PriceTable rows={promo.pricing} />

        {/* Notes */}
        <div className="mt-4 text-[12px] text-black/65 leading-relaxed text-left">
          {promo.notes.map((n) => (
            <p key={n} className="mt-1">
              <K>{n}</K>
            </p>
          ))}
        </div>

        <div className="mt-5 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm border border-black bg-black text-white shadow-[0_14px_34px_rgba(15,23,42,0.14)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)]"
            style={{ ["--accent"]: ACCENT }}
          >
            <i className="fa-brands fa-whatsapp text-sm sm:text-base" />
            Request Details on WhatsApp
          </a>

          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm border border-black/15 bg-white text-slate-900 shadow-[0_14px_34px_rgba(15,23,42,0.10)] transition-all duration-300 hover:border-black/30 hover:bg-black/[0.02]"
          >
            <i className="fa-solid fa-phone text-sm sm:text-base" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

function SeoContentBlock({ accent = ACCENT }) {
  return (
    <section className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-black/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.03),rgba(0,0,0,0))] p-6 sm:p-10">
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] text-slate-900 leading-snug">
                Dubai Marina Packages:
                Cruise + Decoration + Meal
              </h2>

              <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-black/70">
                <K>{applyTM("Elite Yacht Dubai")}</K> offers curated packages for
                <K> Dubai Marina yacht cruises</K> — combining a <K>luxury cruise</K>,
                <K> basic celebration decoration</K>, and a <K>selected meal</K>{" "}
                (breakfast, lunch, or dinner).
              </p>

              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-black/70">
                These offers are ideal if you want <K>yacht rental in Dubai</K> without
                complicated steps: <K>clear pricing</K> based on yacht type and duration
                (2, 3, or 4 hours), and a sightseeing route inside <K>Dubai Marina</K>{" "}
                including JBR, Bluewaters, and Ain Dubai.
              </p>

              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-black/70">
                You can book fast via WhatsApp and request availability and pricing
                directly — no long forms.
              </p>

              <ul className="mt-6 space-y-3 text-[14px] sm:text-[15px] text-black/70">
                {[
                  "All-in-one packages: cruise + decoration + meal.",
                  "Breakfast / lunch / dinner options on a yacht in Dubai Marina.",
                  "Clear pricing table by yacht and duration.",
                  "Fast WhatsApp booking with quick availability response.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-[3px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.415l-7.25 7.25a1 1 0 01-1.415 0l-3.25-3.25a1 1 0 011.415-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      <K>{t}</K>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <img
                src="/images/seo/seo-yacht-dubai-marina.webp"
                alt="Dubai Marina Yacht Rental | Breakfast, Lunch, Dinner Packages"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = "/images/banners/dinner-promo.jpg";
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 text-[12px]">
            {[
              "Yacht Rental Dubai",
              "Dubai Marina Yacht Cruise",
              "Breakfast on a Yacht Dubai",
              "Lunch on a Yacht Dubai",
              "Dinner on a Yacht Dubai Marina",
              "Book Yacht Dubai",
              "Yacht Rental Price Dubai",
              "Dubai Yacht Offers",
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
      </div>
    </section>
  );
}

export default function PromotionsEn() {
  const BASE_URL = "https://eliteyachtdubai.com";
  const PAGE_PATH = "/promotions";
  const CANONICAL = `${BASE_URL}${PAGE_PATH}`;

  const title = useMemo(
    () =>
      applyTM(
        "Dubai Marina Packages | Cruise + Decoration + Meal (Breakfast / Lunch / Dinner) | Elite Yacht Dubai"
      ),
    []
  );

  const description = useMemo(
    () =>
      applyTM(
        "Limited offers from January to April 2026: a Dubai Marina yacht cruise + basic decoration + a meal (breakfast or lunch/dinner) with clear pricing by yacht and duration. Request availability and details fast on WhatsApp."
      ),
    []
  );

  const schemaData = useMemo(() => {
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
      },
    ];
  }, [BASE_URL, CANONICAL, title, description]);

  const PROMOTIONS = useMemo(
    () => [
      {
        tag: "Limited Offer",
        title: "Cruise + Decoration + Breakfast",
        image: "/en/images/banners/breakfast.webp",
        icon: "fa-solid fa-mug-saucer",
        duration: "2 / 3 / 4 Hours",
        ideal: "Ideal for 2 guests",
        highlights: [
          "Offers available from January to April 2026",
          "Yacht: any yacht (subject to availability)",
          "Basic decoration (birthday, anniversary, proposal…)",
          "Choose breakfast: Continental or Lebanese/Arabic",
        ],
        includes: [
          "Captain & professional crew",
          "Basic decoration",
          "Breakfast meal (based on your choice)",
          "Dubai Marina route",
        ],
        menus: [
          {
            name: "Continental Breakfast (for 2)",
            items: [
              "Croissant",
              "Mini cinnamon roll",
              "Mini burger (beef/chicken)",
              "Jam & butter",
              "Fruit platter",
              "Any juice or iced coffee",
            ],
          },
          {
            name: "Lebanese/Arabic Breakfast (for 2)",
            items: [
              "Hummus",
              "Eggs (scrambled or boiled)",
              "Manakish",
              "Foul (fava beans)",
              "Cheese",
              "Arabic bread (pita)",
              "Fruit platter",
              "Black tea",
            ],
          },
        ],
        pricing: [
          { yacht: "ORYX 36", h2: 999, h3: 1349, h4: 1699 },
          { yacht: "Majest 48", h2: 1199, h3: 1649, h4: 2099 },
          { yacht: "Majest 44", h2: 1299, h3: 1799, h4: 2299 },
          { yacht: "Majesty 56", h2: 1599, h3: 2249, h4: 2899 },
          { yacht: "Sunseeker 70", h2: 1999, h3: 2799, h4: 3599 },
          { yacht: "Modern Boat 100", h2: 5499, h3: 7749, h4: 9999 },
        ],
        notes: [
          "Additional guests may require an extra fee.",
          "Orders are prepared 24 hours before the cruise time.",
        ],
        alt: "Breakfast Yacht Package | Dubai Marina Cruise | Book Yacht in Dubai",
      },
      {
        tag: "Limited Offer",
        title: "Cruise + Decoration + Lunch/Dinner",
        image: "/en/images/banners/dinner.webp",
        icon: "fa-solid fa-utensils",
        duration: "2 / 3 / 4 Hours",
        ideal: "Ideal for 2 guests",
        highlights: [
          "Offers available from January to April 2026",
          "Yacht: any yacht (subject to availability)",
          "Basic decoration (birthday, anniversary, proposal…)",
          "Choose: Mixed BBQ or Seafood BBQ",
        ],
        includes: [
          "Captain & professional crew",
          "Basic decoration",
          "Lunch/Dinner meal (based on your choice)",
          "Dubai Marina route",
        ],
        menus: [
          {
            name: "Mixed BBQ (for 2)",
            items: [
              "Starters: hummus + fattoush + tabbouleh + moutabal",
              "Mixed skewers: shish tawook + kebab + lamb tikka",
              "Grilled vegetables",
              "Potatoes/rice",
              "Garlic mayo",
              "Arabic bread (pita)",
              "Fruit platter",
            ],
          },
          {
            name: "Seafood BBQ (for 2)",
            items: [
              "Starters: hummus + tarator (tahini)",
              "Mixed seafood BBQ: shrimp + hamour + salmon",
              "Fried calamari",
              "Potatoes/rice",
              "Saffron lemon sauce",
              "Arabic bread (pita)",
              "Fruit platter",
            ],
          },
        ],
        pricing: [
          { yacht: "ORYX 36", h2: 1099, h3: 1449, h4: 1799 },
          { yacht: "Majesty 44", h2: 1399, h3: 1899, h4: 3199 },
          { yacht: "Majesty 48", h2: 1299, h3: 1749, h4: 2199 },
          { yacht: "Majest 56", h2: 1699, h3: 2349, h4: 2999 },
          { yacht: "Sunseeker 70", h2: 2099, h3: 2899, h4: 3699 },
          { yacht: "Modern Boat 100", h2: 5999, h3: 8249, h4: 10499 },
        ],
        notes: [
          "Additional guests may require an extra fee.",
          "Orders are prepared 24 hours before the cruise time.",
        ],
        alt: "Lunch & Dinner Yacht Package | Dubai Marina Dinner Cruise | Yacht Offers Dubai",
      },
    ],
    []
  );

  const heroWA = useMemo(() => {
    return buildWhatsAppText([
      "Hello,",
      "Can I get more information about the packages (Jan–Apr 2026)?",
      "Please share details, availability, and pricing based on yacht & duration.",
      "Thank you.",
    ]);
  }, []);

  return (
    <div dir="ltr" lang="en" className="relative w-full bg-white text-slate-900">
      <Seo
        title={title}
        description={description}
        canonical={CANONICAL}
        ogTitle={title}
        ogDescription={description}
        ogImage={`${BASE_URL}/images/og/promotions.webp`}
        ogUrl={CANONICAL}
        lang="en"
        dir="ltr"
        ogLocale="en_AE"
        ogType="website"
      />

      <Schema data={schemaData} />

      <section className="relative min-h-[52vh] sm:min-h-[62vh] lg:min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/en/images/banners/breakfast-banner.png"
            alt="Dubai Marina Packages | Cruise + Decoration + Meal"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            draggable="false"
            onError={(e) => {
              e.currentTarget.src = "/en/images/banners/packages.webp";
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,0,0,0.18),transparent_62%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.42),transparent_55%)]" />
        </div>

        <div className="relative w-full">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-24 text-center">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-white uppercase">
              Elite Yacht Dubai™ • Dubai Marina • Limited Offers
            </p>

            <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
              <div className="h-px mx-auto w-32 sm:w-52 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.10em] sm:tracking-[0.12em] text-white leading-tight">
              Packages: <K tone="light">Cruise</K> + <K tone="light">Decoration</K> +{" "}
              <K tone="light">Meal</K>
            </h1>

            <p className="mt-4 sm:mt-6 text-white/90 leading-relaxed max-w-4xl mx-auto text-xs sm:text-base px-2">
              Limited offers from <K tone="light">January to April 2026</K> with two options:{" "}
              <K tone="light">Breakfast</K> or <K tone="light">Lunch/Dinner</K>. Clear pricing by
              yacht and duration, with fast WhatsApp support.
            </p>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={heroWA}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm border border-black bg-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.16)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)] sm:min-w-[240px]"
                style={{ ["--accent"]: ACCENT }}
              >
                <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                Request Details on WhatsApp
              </a>

              <a
                href={PHONE_TEL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm border border-white/20 bg-white/10 text-white shadow-[0_14px_34px_rgba(15,23,42,0.10)] transition-all duration-300 hover:bg-white/15 sm:min-w-[240px]"
              >
                <i className="fa-solid fa-phone text-base sm:text-lg" />
                Call Now
              </a>
            </div>

            <p className="mt-5 sm:mt-6 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-white/70">
              Dubai Marina • Skydive • Bluewaters • Ain Dubai • JBR
            </p>
          </div>
        </div>
      </section>

      {/* Intro + Promotions */}
      <section className="relative py-12 sm:py-16">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[9px] sm:text-[11px] tracking-[0.35em] text-slate-600 uppercase">
              Limited Offers • Clear Pricing • Fast WhatsApp Support
            </p>

            <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
              <div className="h-px mx-auto w-32 sm:w-52 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.10em] sm:tracking-[0.12em] text-slate-900">
              Choose your package: <K>Breakfast</K> or <K>Lunch/Dinner</K>
            </h2>

            <p className="mt-3 sm:mt-4 text-slate-700 leading-relaxed max-w-4xl mx-auto text-xs sm:text-base px-2">
              Organized details + menu + price table by yacht and duration — with a fast WhatsApp request.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2 text-[12px]">
              {[
                "Dubai Marina Yacht Cruise",
                "Book Yacht in Dubai",
                "Dinner on a Yacht in Dubai Marina",
                "Yacht Rental Prices Dubai",
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {PROMOTIONS.map((p) => (
              <PromoCard key={p.title} promo={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Fleet intro */}
      <section
        aria-label="Elite Yacht Dubai Fleet | Luxury Yacht Rental Dubai Marina"
        className="w-full py-20 bg-white"
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="mb-14 text-center max-w-5xl mx-auto">
            <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.32em] text-black/60 uppercase mb-3">
              Elite Yacht Dubai™ Fleet
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-black leading-tight">
              Pick a yacht, then request package details instantly
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-black/75">
              After selecting a yacht, open WhatsApp and request either the <K>Breakfast Package</K>{" "}
              or the <K>Lunch/Dinner Package</K> based on time and guest count — with quick availability and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet section */}
      <YachtsSection />

      {/* SEO block */}
      <SeoContentBlock accent={ACCENT} />

      {/* CTA */}
      <CTASection variant="fleet" />
    </div>
  );
}
