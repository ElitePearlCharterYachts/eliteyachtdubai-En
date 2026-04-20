import { useEffect, useMemo, useState } from "react";
import CTASection from "../components/CTASection";
import YachtsSection from "../components/YachtsSection";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

function TM({ children }) {
  const text = typeof children === "string" ? children : "";
  let out = text;

  out = out.replace(/إيليت\s+يخوت(?!\s*™)/g, "إيليت يخوت™");
  out = out.replace(/إيليت(?!\s*(يخوت|™))/g, "إيليت™");

  // English (longest first)
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return out;
}

const ACCENT = "#111827";
const PHONE_TEL = "tel:+971569006603";
const WHATSAPP_BASE = "https://wa.me/971569006603";

const PACKAGES = [
  {
    tag: "Most Popular",
    title: "VIP Client Hosting",
    icon: "fa-solid fa-handshake",
    duration: "3–4 hours",
    ideal: "Clients • VIP guests • informal meetings",
    highlights: [
      "Elegant hosting aboard a luxury yacht in Dubai",
      "Professional crew service and VIP coordination",
      "Palm Jumeirah + Atlantis route + photo stop",
      "Fast availability confirmation and direct WhatsApp booking",
    ],
    includes: [
      "Captain & professional crew",
      "Water & soft drinks",
      "Premium Bluetooth sound system",
      "Safety equipment",
    ],
  },
  {
    tag: "Executive",
    title: "Executive Meeting on a Yacht",
    icon: "fa-solid fa-user-tie",
    duration: "2–3 hours (minimum 2 hours)",
    ideal: "Executives • meetings • private discussions",
    highlights: [
      "High privacy and a calm business-friendly setting",
      "Premium service suitable for important guests",
      "Flexible timing coordination around your schedule",
      "Top option for corporate yacht meetings in Dubai",
    ],
    includes: [
      "Captain & crew",
      "Water & soft drinks",
      "Business-friendly seating setup",
      "Flexible route planning",
    ],
  },
  {
    tag: "High Impact",
    title: "Product Launch & Brand Activation",
    icon: "fa-solid fa-bullhorn",
    duration: "4–6 hours",
    ideal: "Product launches • PR • content & marketing",
    highlights: [
      "Stunning shooting locations with Dubai landmarks",
      "Optional branded décor and setup coordination",
      "DJ or custom music option",
      "More time for setup, filming, and content creation",
    ],
    includes: [
      "Captain & crew",
      "Water & soft drinks",
      "Coordination support for setup & filming",
      "Custom route plan",
    ],
  },

];

function buildWhatsappLink({ eventType, guests, duration, datePref, budget }) {
  const msg = `Hello Elite Yachts,
I’d like to book a corporate yacht event in Dubai.
Event type: ${eventType}
Guests: ${guests}
Duration: ${duration}
Date: ${datePref}
Budget: ${budget}
Please confirm availability and share suitable options.
Thank you.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
}

function Field({ label, value, onChange, options }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-3 sm:p-4 shadow-[0_12px_34px_rgba(15,23,42,0.06)]">
      <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase text-left">
        {label}
      </p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-black/10"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function HeroStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white px-4 py-4 text-center shadow-[0_12px_34px_rgba(15,23,42,0.06)]">
      <div className="text-[18px] sm:text-[22px] font-semibold text-slate-900">{value}</div>
      <div className="mt-1 text-[10px] tracking-[0.25em] uppercase text-slate-600">{label}</div>
    </div>
  );
}

function IconCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 border border-black/10 shadow-[0_18px_55px_rgba(15,23,42,0.10)]">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 text-left">
          <h3 className="text-[13px] sm:text-[15px] font-semibold tracking-[0.12em] text-slate-900">
            <TM>{title}</TM>
          </h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700">
            <TM>{desc}</TM>
          </p>
        </div>
        <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)] flex-shrink-0">
          <i className={`${icon} text-sm sm:text-base`} style={{ color: ACCENT }} />
        </span>
      </div>
    </div>
  );
}

function PackageCard({ pkg, whatsappLink }) {
  return (
    <div className="group relative rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 border border-black/10 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(0,0,0,0.14)] hover:border-black/20">
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0 text-left">
          <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
            <TM>{pkg.tag}</TM>
          </p>

          <h3 className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-[15px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-slate-900">
            <TM>{pkg.title}</TM>
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
            <TM>{pkg.duration}</TM>
          </p>
        </div>

        <div className="rounded-xl sm:rounded-2xl border border-black/10 bg-black/[0.03] p-2.5 sm:p-3 text-left">
          <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
            Ideal For
          </p>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-800">
            <TM>{pkg.ideal}</TM>
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
              <TM>{h}</TM>
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
            <TM>{i}</TM>
          </span>
        ))}
      </div>

      <div className="mt-5 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        <a
          href={whatsappLink}
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
          Call Now
        </a>
      </div>

      <p className="mt-4 sm:mt-5 text-[11px] sm:text-[12px] text-slate-600 leading-relaxed text-left">
        <TM>
          Elite Yacht Dubai • Corporate Yacht Events • Minimum 2 hours • VIP coordination • Fast availability confirmation
        </TM>
      </p>
    </div>
  );
}

export default function CorporateEventsEn() {
  const BASE_URL = "https://eliteyachtdubai.com";
  const PAGE_PATH = "/corporate-yacht-events-dubai";
  const CANONICAL = `${BASE_URL}${PAGE_PATH}`;
  const ogImage = `${BASE_URL}/images/og/corporate.webp`;

  const [guests, setGuests] = useState("10–20");
  const [eventType, setEventType] = useState("VIP Client Hosting");
  const [duration, setDuration] = useState("3–4 hours");
  const [datePref, setDatePref] = useState("Please advise availability");
  const [budget, setBudget] = useState("Optional");

  useEffect(() => {
    void guests;
  }, [guests]);

  const title =
    "Corporate Yacht Events in Dubai | Elite Yacht Dubai™ Fast WhatsApp Booking";
  const description =
    "Host your corporate event on a luxury yacht in Dubai with Elite Yacht Dubai™: VIP client hosting, executive meetings, product launches, and brand activations. Minimum booking is 2 hours, with fast WhatsApp booking, quick availability confirmation, and optional catering & décor.";
  const keywords = [
    "Corporate yacht events Dubai",
    "Dubai Marina corporate yacht event",
    "VIP client hosting Dubai",
    "Executive meeting on a yacht",
    "Product launch on a yacht Dubai",
    "Brand activation Dubai",
    "Yacht rental for events Dubai",
    "Book yacht Dubai WhatsApp",
    "Private yacht Dubai",
    "Elite Yacht Dubai",
  ].join(", ");

  const whatsappLink = useMemo(() => {
    return buildWhatsappLink({ eventType, guests, duration, datePref, budget });
  }, [eventType, guests, duration, datePref, budget]);

  const schemaData = useMemo(() => {
    const itemList = PACKAGES.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      description: `${p.duration} - ${p.ideal}`,
      url: CANONICAL,
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
        about: { "@id": `${BASE_URL}/#organization` },
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
          itemListElement: itemList,
        },
      },
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
        lang="en"
        dir="ltr"
        ogLocale="en_AE"
        ogType="website"
      />

      <Schema data={schemaData} />

      <section className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/en/images/banners/corporate.webp"
            alt="Corporate yacht events in Dubai"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,0,0,0.18),transparent_62%)]" />
        </div>

        <div className="relative w-full">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-24 text-center">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-white uppercase">
              <TM>Elite Yacht Dubai</TM> • Dubai Marina • Corporate VIP
            </p>

            <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
              <div className="h-px mx-auto w-32 sm:w-52 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.15em] sm:tracking-[0.18em] text-white leading-tight">
              <TM>Corporate Yacht Events in Dubai</TM>
            </h1>

            <p className="mt-4 sm:mt-6 text-white/90 leading-relaxed max-w-3xl mx-auto text-xs sm:text-base px-2">
              <TM>
                VIP client hosting, executive meetings, product launches and brand activations aboard a luxury yacht in Dubai.
                Minimum booking is 2 hours, with professional coordination, fast availability confirmation, and optional add-ons
                like catering and décor.
              </TM>
            </p>

            <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
              <Field
                label="Event Type"
                value={eventType}
                onChange={setEventType}
                options={[
                  "VIP Client Hosting",
                  "Executive Meeting",
                  "Product Launch",
                  "Brand Activation",
                  "Team Event",
                  "Business Dinner",
                ]}
              />
              <Field
                label="Guest Count"
                value={guests}
                onChange={setGuests}
                options={["2–8", "10–20", "20–40", "40–60", "60–100", "100+"]}
              />
              <Field
                label="Duration"
                value={duration}
                onChange={setDuration}
                options={["2 hours (minimum)", "2–3 hours", "3–4 hours", "4–6 hours"]}
              />
              <Field
                label="Date"
                value={datePref}
                onChange={setDatePref}
                options={[
                  "Please advise availability",
                  "Today",
                  "Tomorrow",
                  "This week",
                  "Weekend",
                  "Specific date",
                ]}
              />
            </div>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm border border-black bg-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.16)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)] sm:min-w-[240px]"
                style={{ ["--accent"]: ACCENT }}
              >
                <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                Request a Quote on WhatsApp
              </a>

              <a
                href={PHONE_TEL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm border border-black/15 bg-white text-slate-900 shadow-[0_14px_34px_rgba(15,23,42,0.10)] transition-all duration-300 hover:border-black/30 hover:bg-black/[0.02] sm:min-w-[240px]"
              >
                <i className="fa-solid fa-phone text-base sm:text-lg" />
                Call Now
              </a>
            </div>

            <p className="mt-4 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-white/80">
              Minimum booking: 2 hours • VIP coordination • Fast availability confirmation
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
              <HeroStat value="2 hours" label="Minimum" />
              <HeroStat value="VIP" label="Pro Coordination" />
              <HeroStat value="Dubai Marina" label="Departure Points" />
            </div>

            <div className="mt-4 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
                <p className="text-[12px] sm:text-[13px] text-white/90 leading-relaxed">
                  <TM>
                    Optional add-ons: catering & hospitality, onboard chef, décor (basic/luxury), photography, DJ, luxury transport,
                    and branding coordination.
                  </TM>
                </p>
              </div>
            </div>

            <div className="mt-3 max-w-xl mx-auto">
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-[13px] text-white outline-none"
              >
                {["Optional", "Budget", "Mid-range", "Luxury", "VIP"].map((o) => (
                  <option key={o} value={o} className="text-slate-900">
                    {o}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-slate-600 uppercase">
              <TM>Elite Yacht Dubai</TM>
            </p>

            <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
              <div className="h-px mx-auto w-32 sm:w-52 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.15em] sm:tracking-[0.18em] text-slate-900">
              Why host a corporate event on a yacht?
            </h2>

            <p className="mt-3 sm:mt-4 text-slate-700 leading-relaxed max-w-3xl mx-auto text-xs sm:text-base px-2">
              <TM>
                A premium setting that elevates your brand, gives high privacy, and creates amazing networking and content moments
                with Dubai’s skyline and landmarks.
              </TM>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7">
            <IconCard
              icon="fa-solid fa-star"
              title="Premium impression"
              desc="A yacht elevates the experience and gives your company a luxury presence for clients."
            />
            <IconCard
              icon="fa-solid fa-shield-halved"
              title="Privacy & professionalism"
              desc="Trained crew and smooth coordination—ideal for executives and important guests."
            />
            <IconCard
              icon="fa-solid fa-camera-retro"
              title="Content & marketing"
              desc="Iconic Dubai backdrops give you brand-ready photos and videos."
            />
            <IconCard
              icon="fa-solid fa-wand-magic-sparkles"
              title="Tailored to your goal"
              desc="Hospitality, décor, music, and route planning to fit your agenda."
            />
            <IconCard
              icon="fa-solid fa-route"
              title="Dubai routes"
              desc="Dubai Marina, Palm Jumeirah, Atlantis, Burj Al Arab with timed photo stops."
            />
            <IconCard
              icon="fa-solid fa-people-group"
              title="Team experience"
              desc="A motivating luxury activity that boosts morale and strengthens bonds."
            />
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-slate-600 uppercase">
              <TM>Corporate Packages</TM>
            </p>

            <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
              <div className="h-px mx-auto w-32 sm:w-52 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.15em] sm:tracking-[0.18em] text-slate-900">
              Choose your event package
            </h2>

            <p className="mt-3 sm:mt-4 text-slate-700 leading-relaxed max-w-3xl mx-auto text-xs sm:text-base px-2">
              <TM>
                Choose your event style and we’ll recommend the best yacht, route, and service—with fast availability confirmation.
              </TM>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {PACKAGES.map((p) => (
              <PackageCard key={p.title} pkg={p} whatsappLink={whatsappLink} />
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <YachtsSection />
      </div>

      <div className="relative">
        <CTASection variant="fleet" />
      </div>
    </div>
  );
}
