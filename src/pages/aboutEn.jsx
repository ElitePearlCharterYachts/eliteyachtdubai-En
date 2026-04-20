import { useMemo } from "react";
import CTASection from "../components/CTASection";
import ReviewsSlider from "../components/ReviewsSlider";
import BrandsGroupSection from "../components/BrandsGroupSection";
import YachtsSection from "../components/YachtsSection";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

function TM({ children }) {
  const text = typeof children === "string" ? children : "";
  let out = text;

  // Arabic
  out = out.replace(/إيليت\s+يخوت(?!\s*™)/g, "إيليت يخوت™");
  out = out.replace(/إيليت(?!\s*(يخوت|™))/g, "إيليت™");

  // English
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return out;
}

const ACCENT = "#111827";
const PHONE_TEL = "tel:+971569006603";
const WHATSAPP =
  "https://wa.me/971569006603?text=Hello%20Elite%20Yachts%2C%20I%20want%20to%20book%20a%20yacht%20in%20Dubai.";

export default function AboutEn() {
  const BASE_URL = "https://eliteyachtdubai.com";
  const PAGE_PATH = "/about";
  const CANONICAL = `${BASE_URL}${PAGE_PATH}`;
  const ogImage = `${BASE_URL}/images/og/about.webp`;

  const title =
    "About Us | Elite Yachts™ Dubai Marina — Luxury Yacht Rental & WhatsApp Booking";
  const description =
    "Meet Elite Yachts™ Dubai: direct operation under Elite Yacht Group for luxury yacht rental in Dubai Marina. Modern yachts, professional crew, clear pricing, and fast WhatsApp booking for sunset cruises, private parties, and corporate events.";
  const keywords = [
    "About Elite Yachts Dubai",
    "Elite Yachts Dubai Marina",
    "Elite Yacht Group",
    "Luxury Yacht Rental Dubai",
    "Dubai Marina Yacht Charter",
    "Private Yacht Dubai",
    "Yacht booking WhatsApp Dubai",
    "Yacht party Dubai",
    "Corporate yacht events Dubai",
    "VIP Yacht Dubai",
    "Yacht rental Dubai Marina",
  ].join(", ");

  const schemaData = useMemo(() => {
    const orgName = "Elite Yachts Dubai";
    const orgLegal = "Elite Yacht Group";
    const logo = `${BASE_URL}/images/logo.png`;
    const heroImg = `${BASE_URL}/images/banners/fleet.webp`;

    const breadcrumb = {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${BASE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: CANONICAL,
        },
      ],
    };

    const faq = {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Are you a direct operator or a broker?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — we operate directly under Elite Yacht Group, providing consistent quality, clear pricing, and professional coordination from start to finish.",
          },
        },
        {
          "@type": "Question",
          name: "Which routes do you usually sail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Popular routes include Dubai Marina, Palm Jumeirah, Atlantis, and Burj Al Arab. Routes can be customized based on time and availability.",
          },
        },
        {
          "@type": "Question",
          name: "What’s the fastest way to book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WhatsApp is the fastest: send your date, time, and number of guests and we’ll confirm availability quickly.",
          },
        },
      ],
    };

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
        url: heroImg,
        contentUrl: heroImg,
        caption: "About Elite Yachts™ Dubai — Luxury Yacht Rental in Dubai Marina",
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: orgName,
        legalName: orgLegal,
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: logo,
        },
        areaServed: "AE",
        sameAs: [],
      },
      breadcrumb,
      faq,
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

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_38%,rgba(15,23,42,0.03))]" />
      </div>

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[320px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/en/images/banners/fleet.webp"
            alt="About Elite Yachts™ Dubai — Luxury Yacht Rental in Dubai Marina"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,0,0,0.18),transparent_62%)]" />
        </div>

        <div className="relative h-full">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 h-full flex items-center pb-10">
            <div
              className="
                max-w-3xl
                rounded-3xl
                border border-white/15
                bg-black/45
                shadow-[0_22px_70px_rgba(15,23,42,0.14)]
                p-6 sm:p-8 md:p-10
              "
            >
              <p className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-white">
                <TM>Elite Yachts Dubai</TM> • Dubai Marina • VIP
              </p>

              <div className="mt-4 h-px w-full bg-white/60" />

              {/* English: reduce tracking + keep hierarchy */}
              <h1 className="text-[26px] mt-5 sm:text-[32px] md:text-[38px] font-semibold tracking-[0.06em] text-white leading-tight">
                <TM>About Us — Elite Yachts</TM>
              </h1>

              <p className="mt-4 text-[14px] sm:text-[15px] text-white/90 leading-relaxed">
                <TM>
                  At Elite Yachts, we deliver a luxury yacht rental experience in Dubai
                  Marina built around VIP-first service: modern yachts, a professional
                  crew, clear pricing, and fast WhatsApp booking. Our goal is a smooth,
                  premium trip for private cruises, parties, and corporate events on board.
                </TM>
              </p>

              <p className="mt-4 text-[14px] sm:text-[15px] text-white/90 leading-relaxed">
                <TM>
                  This page represents <span className="font-semibold">Elite Yacht Group</span>{" "}
                  — direct management and operation of the fleet and services, with no
                  other brand mentions. You deal with one operator to ensure consistent
                  quality and end-to-end coordination.
                </TM>
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center gap-3
                    rounded-full px-7 py-3 text-[13px] sm:text-sm
                    border border-black
                    bg-black text-white
                    shadow-[0_16px_40px_rgba(15,23,42,0.18)]
                    transition-all duration-300
                    hover:bg-[var(--accent)]
                    hover:border-[var(--accent)]
                    hover:shadow-[0_18px_52px_rgba(0,0,0,0.20)]
                    cursor-pointer
                  "
                  style={{ ["--accent"]: ACCENT }}
                  aria-label="Book a yacht via WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp" />
                  WhatsApp Booking
                </a>

                <a
                  href={PHONE_TEL}
                  className="
                    inline-flex items-center justify-center gap-3
                    rounded-full px-7 py-3 text-[13px] sm:text-sm
                    border border-white/20
                    bg-white/10 text-white
                    shadow-[0_14px_34px_rgba(15,23,42,0.10)]
                    transition-all duration-300
                    hover:bg-white/15
                    cursor-pointer
                  "
                  aria-label="Call now to book a yacht"
                >
                  <i className="fa-solid fa-phone" />
                  Call Now
                </a>
              </div>

              <p className="mt-5 text-[10px] sm:text-[11px] text-white/80 leading-relaxed">
                <TM>
                  Search terms: Dubai yacht rental • Dubai Marina yacht charter • private yacht Dubai • yacht
                  parties • corporate events • fast WhatsApp booking
                </TM>
              </p>

              <p className="sr-only">
                About Elite Yachts Dubai: luxury yacht rental in Dubai Marina, private yacht Dubai, yacht parties,
                corporate events, sunset cruises, fast WhatsApp booking, direct operation under Elite Yacht Group.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[10px] sm:text-xs tracking-[0.28em] text-slate-600 uppercase">
                <TM>The Elite Yachts Story</TM>
              </p>

              <h2 className="mt-4 text-[22px] sm:text-2xl md:text-[30px] font-semibold tracking-[0.06em] text-slate-900 leading-tight">
                <TM>A Luxury Yacht Standard Designed for Dubai</TM>
              </h2>

              <p className="mt-4 text-[14px] sm:text-[15px] text-slate-700 leading-relaxed">
                <TM>
                  Elite Yachts in Dubai is built on one promise: a yacht rental experience that’s organized,
                  simple, and transparent. From private cruises to birthdays and corporate events, we focus
                  on yacht quality, crew professionalism, and fast communication for a true VIP experience.
                </TM>
              </p>

              <p className="mt-4 text-[14px] sm:text-[15px] text-slate-700 leading-relaxed">
                <TM>
                  We operate from Dubai Marina with popular routes around Palm Jumeirah and Burj Al Arab,
                  with flexible packages, custom routes, and fast confirmations — especially via WhatsApp.
                  We operate under Elite Yacht Group to keep service quality consistent and trip details
                  professionally managed.
                </TM>
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MiniCard
                  title="Service"
                  text="Fast booking, clear pricing, and VIP support from inquiry to boarding — the Elite Yachts standard."
                />
                <MiniCard
                  title="Quality"
                  text="Carefully selected yachts, high cleanliness, strong maintenance, and a professional crew — Elite level."
                />
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Dubai Yacht Rental",
                  "Luxury Yachts Dubai",
                  "Dubai Marina",
                  "Private Yacht Dubai",
                  "WhatsApp Yacht Booking",
                  "VIP Yacht Dubai",
                  "Dubai Marina Yacht Charter",
                ].map((t) => (
                  <span
                    key={t}
                    className="
                      inline-flex items-center
                      rounded-full
                      border border-black/10
                      bg-white
                      px-3 py-1.5
                      text-[11px] sm:text-[12px]
                      text-black/70
                      shadow-[0_10px_22px_rgba(15,23,42,0.06)]
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="/en/images/about/about-1.webp"
                  alt="Luxury yacht rental in Dubai Marina — Elite Yachts™ Dubai"
                  className="w-full h-[320px] sm:h-[480px] object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="pointer-events-none absolute -left-2 -bottom-2 h-full w-full rounded-2xl border border-black/10" />
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "fa-solid fa-crown",
                title: "Elite Experience",
                text: "Luxury yacht rental in Dubai Marina designed for comfort, privacy, and unforgettable moments with Elite Yachts.",
              },
              {
                icon: "fa-solid fa-shield-halved",
                title: "Trust & Clarity",
                text: "Clear packages and fast confirmations — no surprises. Elite Yachts = transparency.",
              },
              {
                icon: "fa-solid fa-user-tie",
                title: "Professional Crew",
                text: "Experienced captains and crew focused on service quality and guest satisfaction — Elite standard.",
              },
              {
                icon: "fa-solid fa-location-dot",
                title: "Dubai Marina Routes",
                text: "Dubai Marina, Palm Jumeirah, Atlantis, and Burj Al Arab routes — professionally organized by Elite Yachts.",
              },
            ].map((c) => (
              <FeatureCard key={c.title} {...c} />
            ))}
          </div>

          <div className="mt-14">
            <BrandsGroupSection />
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="/en/images/about/about-2.webp"
                  alt="VIP yacht rental in Dubai — Elite Yachts™ Dubai"
                  className="w-full h-[320px] sm:h-[520px] object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="pointer-events-none absolute -left-2 -bottom-2 h-full w-full rounded-2xl border border-black/10" />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[10px] sm:text-xs tracking-[0.28em] text-slate-600 uppercase">
                What We Offer
              </p>

              <h2 className="mt-4 text-[22px] sm:text-2xl md:text-[30px] font-semibold tracking-[0.06em] text-slate-900 leading-tight">
                <TM>Yacht Rental • Cruises • Events • VIP Packages — Elite Yachts</TM>
              </h2>

              <p className="mt-4 text-[14px] sm:text-[15px] text-slate-700 leading-relaxed">
                <TM>
                  From yacht rental in Dubai to Dubai Marina yacht charters, we offer flexible options for every
                  occasion. Choose your yacht size, guest count, and trip time — we’ll confirm availability fast
                  and coordinate details: route, departure time, hospitality, music, and décor upon request.
                </TM>
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BulletCard
                  title="Private Cruises"
                  icon="fa-solid fa-ship"
                  text="Sunset cruises, proposals, and private tours with luxury comfort on board."
                />
                <BulletCard
                  title="Celebrations"
                  icon="fa-solid fa-champagne-glasses"
                  text="Birthdays and private yacht parties in Dubai Marina — VIP coordination."
                />
                <BulletCard
                  title="Corporate Events"
                  icon="fa-solid fa-briefcase"
                  text="Premium meetings and events on board with professional organization."
                />
                <BulletCard
                  title="Fast Booking"
                  icon="fa-brands fa-whatsapp"
                  text="Send date + guest count and we’ll confirm quickly via WhatsApp."
                />
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Dubai Marina Yacht Rental",
                  "Yachts for Rent Dubai",
                  "Dubai Yacht Parties",
                  "Private Yacht Dubai",
                  "Elite Yachts Dubai",
                  "Dubai Marina Yacht Charter",
                ].map((t) => (
                  <span
                    key={t}
                    className="
                      inline-flex items-center
                      rounded-full
                      border border-black/10
                      bg-white
                      px-3 py-1.5
                      text-[11px] sm:text-[12px]
                      text-black/70
                      shadow-[0_10px_22px_rgba(15,23,42,0.06)]
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        dir="ltr"
        lang="en"
        aria-label="Dubai Yacht Rental — Elite Yachts™ Dubai Marina Fleet"
        className="w-full py-20 bg-white"
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="mb-14 text-center max-w-5xl mx-auto">
            <p className="text-[10px] sm:text-[11px] tracking-[0.28em] text-black/60 uppercase mb-3">
              Dubai Yacht Rental • Dubai Marina • VIP
            </p>

            {/* English: slightly smaller than Arabic equivalent */}
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold text-black leading-tight tracking-tight">
              Dubai Yacht Rental with <span className="font-bold">Elite Yachts™</span> — Luxury Yacht Charter Dubai
            </h2>

            <p className="mt-6 text-[14px] sm:text-[15px] leading-relaxed text-black/75">
              Looking for <span className="text-black font-semibold">Dubai yacht rental</span> with premium
              privacy and luxury? <span className="text-black font-semibold">Elite Yachts™ Dubai</span> delivers
              a complete <span className="text-black font-semibold">Dubai Marina</span> experience with modern
              yachts, a professional crew, and <span className="text-black font-semibold">VIP</span> service
              for families, groups, corporate events, and private parties. Choose a{" "}
              <span className="text-black font-semibold">private yacht in Dubai</span> that fits your guest count
              and enjoy Dubai’s coastline with optional luxury décor, hospitality, and tailored routes. We operate
              under <span className="text-black font-semibold">Elite Yacht Group</span> to ensure consistent
              quality and fast, clear booking.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2 text-[11px] sm:text-[12px]">
              {[
                "Dubai Marina Yacht Charter",
                "Yacht Rental Dubai",
                "WhatsApp Yacht Booking",
                "Private Cruises",
                "VIP Yachts Dubai",
                "Luxury Yacht Charter Dubai",
              ].map((t) => (
                <span
                  key={t}
                  className="
                    inline-flex items-center
                    rounded-full
                    border border-black/10
                    bg-white
                    px-3 py-1.5
                    text-black/75
                    shadow-[0_10px_24px_rgba(15,23,42,0.06)]
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="sr-only">
              Elite Yacht Group: Elite Yachts Dubai direct operation for luxury yacht rental in Dubai Marina, private yacht Dubai,
              yacht parties, corporate events, sunset cruises, fast WhatsApp booking, and clear pricing.
            </p>
          </div>
        </div>

        <YachtsSection />
      </section>

      <div className="relative">
        <ReviewsSlider />
      </div>

      <div className="relative">
        <CTASection variant="fleet" />
      </div>
    </div>
  );
}

function MiniCard({ title, text }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.10)]">
      <p className="text-[10px] sm:text-[11px] tracking-[0.28em] text-slate-600 uppercase">
        <TM>{title}</TM>
      </p>
      <p className="mt-2 text-[14px] sm:text-[15px] text-slate-800 leading-relaxed">
        <TM>{text}</TM>
      </p>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(0,0,0,0.14)] hover:border-black/20">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className={`${icon}`} style={{ color: "#111827" }} />
        </span>
        <p className="text-[10px] sm:text-[11px] tracking-[0.28em] text-slate-600 uppercase">
          <TM>{title}</TM>
        </p>
      </div>

      <p className="mt-4 text-[13px] sm:text-sm text-slate-700 leading-relaxed">
        <TM>{text}</TM>
      </p>
    </div>
  );
}

function BulletCard({ title, text, icon }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.10)] transition hover:border-black/20">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className={`${icon}`} style={{ color: "#111827" }} />
        </span>
        <p className="text-[10px] sm:text-[11px] tracking-[0.28em] text-slate-600 uppercase">
          <TM>{title}</TM>
        </p>
      </div>

      <p className="mt-3 text-[13px] sm:text-sm text-slate-700 leading-relaxed">
        <TM>{text}</TM>
      </p>
    </div>
  );
}
