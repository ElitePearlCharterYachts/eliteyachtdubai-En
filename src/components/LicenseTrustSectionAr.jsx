import React from "react";

const ACCENT = "#111827";

/**
 * English version:
 * - Arabic TM rules removed (because this is the EN section)
 * - Keeps Elite™ / Elite Yacht™ / Elite Yachts™ formatting
 */
function TM({ children }) {
  const text = typeof children === "string" ? children : "";
  let out = text;

  // English (longest first)
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return <>{out}</>;
}

const COMPLIANCE_POINTS = [
  {
    icon: "fa-solid fa-certificate",
    title: "Elite Yachts™ is licensed for yacht rental in Dubai",
    text:
      "At Elite Yachts™, we follow the licensing and operating requirements in Dubai to deliver a safe, professional yacht rental experience from Dubai Marina and approved maritime areas. When you book with Elite Yachts™, you receive clear details before confirmation.",
    bullets: [
      "Operations from approved marinas (such as Dubai Marina) subject to availability — via Elite Yachts™",
      "Documented operating and safety procedures aligned with Elite Yachts™ standards",
      "Full clarity on key details before confirming your booking with Elite™",
    ],
  },
  {
    icon: "fa-solid fa-user-tie",
    title: "Elite Yachts™ crew: certified, experienced, and guest-focused",
    text:
      "Your comfort and safety start with the crew. Elite Yachts™ provides a professional captain and crew experienced in managing trips, welcoming guests, and applying onboard operating standards — the Elite Yacht Rental Dubai way.",
    bullets: [
      "Professional captain and crew from Elite Yachts™",
      "VIP hospitality with Elite™ standards",
      "Fast response to guest requests",
    ],
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Safety essentials onboard Elite™ yachts",
    text:
      "Safety equipment is a core part of any premium yacht experience in Dubai. Elite Yachts™ ensures essential safety items and guidance are available based on the yacht type and capacity, with clear briefings for guests before departure.",
    bullets: [
      "Clear pre-departure safety briefing with Elite Yachts™",
      "Essential safety equipment onboard",
      "Guest guidance at boarding",
    ],
  },
  {
    icon: "fa-solid fa-clipboard-check",
    title: "Elite Yachts™ pre-sailing operating standards",
    text:
      "Before each trip, Elite Yachts™ confirms yacht readiness, hospitality setup, and route planning. This helps ensure a smooth experience for private yacht trips, yacht parties, and romantic cruises — to Elite™ standards.",
    bullets: [
      "Availability and route confirmation before sailing with Elite™",
      "Yacht and crew readiness checks",
      "Precise guest timing and departure coordination",
    ],
  },
];

const FAQ = [
  {
    q: "Do all yacht rental companies in Dubai need to be licensed?",
    a: "Yes. Choosing a licensed company and operating from approved marinas reduces risk and delivers a more professional experience. Elite Yachts™ focuses on clarity for Dubai Marina yacht rental details before confirmation.",
  },
  {
    q: "Does the booking include a captain and crew from Elite Yachts™?",
    a: "In most cases, yes. Dubai yacht rentals typically include a captain and crew for a safe, comfortable trip — the exact details are confirmed when selecting the yacht and package with Elite™.",
  },
  {
    q: "What shows Elite Yachts™ commitment to safety?",
    a: "You’ll see it through onboard safety readiness, crew briefings, organized boarding and departure, and transparency before confirming your booking. Ask Elite Yachts™ for yacht-specific details based on capacity and type.",
  },
];

function Card({ icon, title, text, bullets }) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-3xl bg-white
        border border-black/10
        shadow-[0_22px_70px_rgba(15,23,42,0.10)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_28px_78px_rgba(0,0,0,0.14)]
        hover:border-black/20
      "
    >
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,0,0,0.45), transparent)",
        }}
      />

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
              <TM>Trust & Compliance — Elite Yachts</TM>
            </p>
            <h3 className="mt-2 text-lg sm:text-xl font-semibold text-slate-900">
              <TM>{title}</TM>
            </h3>
          </div>

          <span
            className="
              shrink-0 inline-flex h-12 w-12 items-center justify-center
              rounded-full border border-black/10 bg-white
              shadow-[0_14px_30px_rgba(15,23,42,0.10)]
            "
            aria-hidden="true"
          >
            <i className={icon} style={{ color: ACCENT }} />
          </span>
        </div>

        <div className="mt-5 h-px w-full bg-black/10" />

        <p className="mt-4 text-slate-700/90 leading-relaxed text-sm">
          <TM>{text}</TM>
        </p>

        {bullets?.length ? (
          <ul className="mt-5 space-y-2 text-sm text-slate-700/90">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <i className="fa-solid fa-circle-check mt-1 text-[12px] text-black/60" />
                <span>
                  <TM>{b}</TM>
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div
        className="
          pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full
          opacity-0 blur-3xl transition duration-700
          group-hover:opacity-70
        "
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.10), transparent 70%)",
        }}
      />
    </div>
  );
}

function LinkPill({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-2
        rounded-full border border-black/10 bg-white
        px-4 py-2 text-sm
        text-slate-800
        shadow-[0_14px_30px_rgba(15,23,42,0.08)]
        transition-all duration-300
        hover:border-black/25
        hover:text-black
        hover:shadow-[0_18px_44px_rgba(0,0,0,0.12)]
      "
      aria-label={label}
    >
      <i className={icon} style={{ color: ACCENT }} />
      <span className="underline decoration-black/10 hover:decoration-black/30">
        <TM>{label}</TM>
      </span>
    </a>
  );
}

function FAQItem({ q, a }) {
  return (
    <div
      className="
        rounded-3xl bg-white
        border border-black/10
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
        p-6 sm:p-7
      "
    >
      <div className="flex items-start gap-3">
        <span
          className="
            inline-flex h-10 w-10 items-center justify-center
            rounded-full border border-black/10 bg-white
            shadow-[0_14px_30px_rgba(15,23,42,0.08)]
          "
          aria-hidden="true"
        >
          <i className="fa-solid fa-circle-question" style={{ color: ACCENT }} />
        </span>
        <div className="min-w-0">
          <h4 className="text-base sm:text-lg font-semibold text-slate-900">
            <TM>{q}</TM>
          </h4>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
            <TM>{a}</TM>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LicenseTrustSectionEn() {
  return (
    <section
      dir="ltr"
      lang="en"
      className="w-full bg-white text-slate-900 py-16 sm:py-20"
      aria-label="Licensing and safety for yacht rental in Dubai"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <header className="text-center max-w-4xl mx-auto">
          <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
            <TM>Trust • Licensing • Safety — Elite Yachts</TM>
          </p>

          <div className="mx-auto mt-3 mb-4 w-[72%]">
            <div className="h-px mx-auto w-52 sm:w-64 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.14em] text-slate-900">
            <TM>
              Licensed Yacht Rental in Dubai with Elite Yachts™ — Professional Crew
              and Safety Standards
            </TM>
          </h2>

          <p className="mt-5 text-slate-700 leading-relaxed">
            <TM>
              When choosing yacht rental in Dubai or Dubai Marina, licensing, crew,
              and safety standards matter more than price alone. Elite Yachts™ focuses
              on a premium, well-organized experience: fast booking, availability
              confirmation, professional crew, and VIP service for private trips,
              yacht parties, and corporate events.
            </TM>
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <LinkPill
              href="https://www.dmca.ae/"
              label="Dubai Maritime Authority (DMCA)"
              icon="fa-solid fa-arrow-up-right-from-square"
            />
            <LinkPill
              href="https://u.ae/"
              label="UAE Government Portal"
              icon="fa-solid fa-arrow-up-right-from-square"
            />
            <LinkPill
              href="https://www.visitdubai.com/"
              label="Visit Dubai"
              icon="fa-solid fa-arrow-up-right-from-square"
            />
          </div>

          <p className="mt-4 text-sm text-slate-600">
            <TM>
              Note: Licensing requirements can vary by yacht type, capacity, and operating
              location. Elite Yachts™ will share the relevant details when you select your
              yacht and package.
            </TM>
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPLIANCE_POINTS.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-black/10 bg-white p-8 sm:p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.10)] overflow-hidden relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]" />

          <p className="relative text-[11px] tracking-[0.35em] uppercase text-slate-600">
            <TM>What should you check before booking with Elite Yachts™?</TM>
          </p>

          <div className="relative mx-auto mt-3 mb-4 w-[72%]">
            <div className="h-px mx-auto w-52 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
            <div className="mx-auto mt-2 h-[3px] w-16 rounded-full" style={{ background: ACCENT }} />
          </div>

          <h3 className="relative text-xl sm:text-2xl font-semibold tracking-[0.14em] text-slate-900">
            <TM>Quick checklist for Dubai Marina yacht rental with Elite Yachts™</TM>
          </h3>

          <div className="relative mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
                <TM>Licensing</TM>
              </p>
              <p className="mt-2 text-slate-800 leading-relaxed text-sm">
                <TM>
                  Choose a licensed operator running from approved marinas, and ask Elite Yachts™
                  for clear details about the yacht and route.
                </TM>
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
                <TM>Crew</TM>
              </p>
              <p className="mt-2 text-slate-800 leading-relaxed text-sm">
                <TM>
                  Confirm a professional captain and crew, with VIP hospitality and guest-ready experience.
                </TM>
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
                <TM>Safety</TM>
              </p>
              <p className="mt-2 text-slate-800 leading-relaxed text-sm">
                <TM>
                  Ask about essential safety equipment and briefings — especially for families and groups.
                </TM>
              </p>
            </div>
          </div>

          <p className="relative mt-6 text-slate-600 text-sm">
            <TM>
              Natural SEO terms: yacht rental Dubai, Dubai Marina yacht rental, private yacht Dubai,
              book a yacht Dubai, luxury yacht Dubai, Elite Yachts Dubai, yacht charter Dubai Marina,
              luxury yacht rental Dubai.
            </TM>
          </p>
        </div>

        <div className="mt-14">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-[0.14em] text-slate-900 text-center">
            <TM>Quick FAQs about Elite Yachts™ licensing, crew, and safety</TM>
          </h3>

          <div className="mx-auto mt-4 mb-10 w-[72%]">
            <div className="h-px mx-auto w-52 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FAQ.map((f) => (
              <FAQItem key={f.q} {...f} />
            ))}
          </div>
        </div>

        <div className="mt-14 max-w-5xl mx-auto text-left">
          <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
              <TM>Why does Elite Yachts™ include this section?</TM>
            </p>

            <div className="mt-4 h-px w-full bg-black/10" />

            <p className="mt-5 text-slate-700 leading-relaxed">
              <TM>
                In Dubai’s yacht market, choosing a company with clear licensing and a professional crew
                gives you a better experience. Elite Yachts™ provides a structured, transparent process:
                yacht details, capacity, route, and add-ons are shared before confirmation. Whether you’re
                looking for a private family yacht rental, a yacht party for groups, or a sunset cruise
                from Dubai Marina — Elite Yachts™ makes luxury yacht rental in Dubai more comfortable and trustworthy.
              </TM>
            </p>

            <div className="mt-6 flex flex-wrap gap-2 justify-start">
              {[
                "Elite Yachts Dubai",
                "yacht rental Dubai",
                "Dubai Marina yacht rental",
                "luxury yacht Dubai",
                "private yacht Dubai",
                "yacht party Dubai",
                "yacht charter Dubai Marina",
              ].map((k) => (
                <span
                  key={k}
                  className="
                    inline-flex items-center
                    rounded-full border border-black/10 bg-white/90
                    px-3 py-1 text-[11px] text-slate-700
                    shadow-[0_10px_22px_rgba(15,23,42,0.06)]
                  "
                >
                  <TM>{k}</TM>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
