import React from "react";
import { Link } from "react-router-dom";



function EliteArTM({ className = "" }) {
  return (
    <span className={className}>
     Elite Yachts
      <span className="text-[11px] opacity-70 align-super mr-1">™</span>
    </span>
  );
}

function EliteYachtsTM({ className = "" }) {
  return (
    <span className={className}>
      Elite Yachts
      <span className="text-[11px] opacity-70 align-super ml-1">™</span>
    </span>
  );
}

function K({ children, className = "" }) {
  return <strong className={"font-semibold text-black/85 " + className}>{children}</strong>;
}

function H2({ children, id }) {
  return (
    <h2
      id={id}
      className="mt-12 text-[20px] sm:text-[24px] lg:text-[28px] font-semibold tracking-tight text-black/95"
    >
      {children}
    </h2>
  );
}

function H3({ children, id }) {
  return (
    <h3
      id={id}
      className="mt-7 text-[15px] sm:text-[17px] lg:text-[18px] font-semibold tracking-tight text-black/90"
    >
      {children}
    </h3>
  );
}

function SoftCard({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-2xl border border-black/10 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] " +
        className
      }
    >
      {children}
    </div>
  );
}

function PillLink({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-[12px] text-black/70 shadow-[0_10px_22px_rgba(15,23,42,0.06)] hover:border-black/20 hover:text-black transition"
    >
      {children}
    </Link>
  );
}

function CTAButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-black px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_14px_32px_rgba(0,0,0,0.18)] hover:opacity-90 transition"
    >
      {children}
    </Link>
  );
}

export default function EndPageContentEn() {
  const pages = {
    yachtsOur: "/yachts",
    services: "/services",
    offers: "/offers",
    about: "/about-us",
    watersports: "water-sports",
    corporate: "/corporate-events",
    bestCompany: "/best-yacht-company",
    team: "/team",
    instructions: "/guidelines",
    owner: "/owner",
    contact: "/contact-us",
    terms: "/terms-and-conditions",
    refunds: "/refund-policy",
    privacy: "/privacy-policy",
  };

  const yachts = [
    { name: "Oryx 36 ft", to: "/dubai-yacht-rental-oryx-36ft", size: "36 ft", tag: "Daily yacht rental" },
    { name: "Majesty 44 ft", to: "/dubai-yacht-rental-majesty-44ft", size: "44 ft", tag: "Dubai yacht" },
    { name: "Majesty 48 ft", to: "/dubai-yacht-rental-majesty-48ft", size: "48 ft", tag: "Yacht trip in Dubai" },
    { name: "Majesty 56 ft", to: "/dubai-yacht-rental-majesty-56ft", size: "56 ft", tag: "Dubai yachts" },
    { name: "Sunseeker 70 ft", to: "/dubai-yacht-rental-sunseeker-70ft", size: "70 ft", tag: "Yacht charter" },
    { name: "Modern 100 ft", to: "/dubai-yacht-rental-modern-100ft", size: "100 ft", tag: "Yacht rental" },
    { name: "VanDutch 40 ft", to: "/dubai-yacht-rental-vandutch-40ft", size: "40 ft", tag: "Yacht hire" },
    { name: "Pershing White 54 ft", to: "/dubai-yacht-rental-pershing-white-54ft", size: "54 ft", tag: "Yacht hire" },
    { name: "Pershing Grey 54 ft", to: "/dubai-yacht-rental-pershing-gray-54ft", size: "54 ft", tag: "Dubai Marina yacht hire" },
    { name: "Axopar 63 ft", to: "/dubai-yacht-rental-axi-63ft", size: "63 ft", tag: "Dubai Marina yacht rental" },
    { name: "Ferretti 67 ft", to: "/dubai-yacht-rental-ferretti-67ft", size: "67 ft", tag: "Yacht rental" },
    { name: "Ferretti 78 ft", to: "/dubai-yacht-rental-ferretti-78ft", size: "78 ft", tag: "Dubai boat trips" },
    { name: "Galeon 78 ft", to: "/dubai-yacht-rental-galeon-78ft", size: "78 ft", tag: "Dubai Marina boat trips" },
    { name: "Riva 82 ft", to: "/dubai-yacht-rental-riva-82ft", size: "82 ft", tag: "Dubai boat trip" },
    { name: "Majesty 88 ft", to: "/dubai-yacht-rental-majesty-88ft", size: "88 ft", tag: "Dubai cruise" },
    { name: "Hygen 90 ft", to: "/dubai-yacht-rental-haigan-90ft", size: "90 ft", tag: "Dubai Marina cruise" },
    { name: "Sunseeker 95 ft", to: "/dubai-yacht-rental-sunseeker-95ft", size: "95 ft", tag: "Dinner on a yacht" },
    { name: "Majesty 101 ft", to: "/dubai-yacht-rental-majesty-101ft", size: "101 ft", tag: "Dinner on a Marina yacht" },
    { name: "Sunseeker 108 ft", to: "/dubai-yacht-rental-sunseeker-108ft", size: "108 ft", tag: "Dubai Marina yacht hire" },
    { name: "Baglietto 108 ft", to: "/dubai-yacht-rental-baglietto-108ft", size: "108 ft", tag: "Yacht hire" },
    { name: "Benetti 110 ft", to: "/dubai-yacht-rental-benetti-110ft", size: "110 ft", tag: "Book yachts in Dubai" },
    { name: "Benetti 114 ft", to: "/dubai-yacht-rental-benetti-114ft", size: "114 ft", tag: "Family cruise" },
    { name: "Santorini 115 ft", to: "/dubai-yacht-rental-santorini-115ft", size: "115 ft", tag: "Dinner cruise in Dubai" },
    { name: "Elite Yacht 120ft Saffuriya", to: "/dubai-yacht-rental-saffuriya-120ft", size: "120 ft", tag: "Dinner cruise in Marina" },
    { name: "Sunseeker 131 ft", to: "/dubai-yacht-rental-sunseeker-131ft", size: "131 ft", tag: "Dubai Marina yacht prices" },
    { name: "Royalty 134 ft", to: "/dubai-yacht-rental-royalty-134ft", size: "134 ft", tag: "Dubai yacht prices" },
    { name: "Sensation 164 ft", to: "/dubai-yacht-rental-sensation-164ft", size: "164 ft", tag: "Dubai yacht rental prices" },
  ];


  const occasionCards = [
    {
      title: "Birthday Parties",
      text: (
        <>
          If you want a <K>Dubai yacht birthday</K> with a premium vibe, we can arrange décor, music,
          and photography — with fast booking and a professional crew.
        </>
      ),
      to: pages.offers,
      badge: "Dubai yacht birthday",
    },
    {
      title: "Anniversaries",
      text: (
        <>
          Choose a <K>Dubai cruise</K> with stunning views — calm and romantic or celebratory, based
          on your style.
        </>
      ),
      to: pages.services,
      badge: "Dubai cruise",
    },
    {
      title: "Corporate Events",
      text: (
        <>
          For VIP hosting or classy meetings: professional planning, the right route, and total
          privacy — that’s <K>booking yachts in Dubai</K> with{" "}
          <EliteYachtsTM className="font-semibold text-black/85" />.
        </>
      ),
      to: pages.corporate,
      badge: "Book yachts in Dubai",
    },
    {
      title: "Family Gatherings",
      text: (
        <>
          Perfect for a <K>family cruise</K>: comfort, safety, space, and a smooth experience with{" "}
          <EliteArTM className="font-semibold text-black/85" />.
        </>
      ),
      to: pages.services,
      badge: "Family cruise",
    },
  ];

  const locations = [
    {
      title: "Dubai Marina",
      text: (
        <>
          Most requested for <K>Dubai Marina cruises</K> — modern skyline, lively atmosphere, and
          great photos.
        </>
      ),
      to: pages.yachtsOur,
      badge: "Dubai Marina boarding points",
    },
    {
      title: "Palm Jumeirah",
      text: (
        <>
          A premium route for panoramic views — ideal for a longer <K>Dubai cruise</K> or dinner
          experience.
        </>
      ),
      to: pages.services,
      badge: "Dinner cruise in Dubai",
    },
    {
      title: "Burj Al Arab",
      text: (
        <>
          Iconic photo stop — best for a luxury-style <K>yacht trip in Dubai</K>.
        </>
      ),
      to: pages.services,
      badge: "Yacht trip in Dubai",
    },
    {
      title: "The World Islands",
      text: (
        <>
          Calmer waters and more privacy — great for extending your route after <K>Dubai Marina</K>.
        </>
      ),
      to: pages.services,
      badge: "Dubai yacht",
    },
  ];

  const quickLinks = [
    { label: "Book yachts in Dubai", to: pages.offers },
    { label: "Yacht hire", to: pages.services },
    { label: "Yacht rental", to: pages.services },
    { label: "Yacht charter", to: pages.services },
    { label: "Dubai yacht", to: pages.yachtsOur },
    { label: "Dubai yachts", to: pages.yachtsOur },
    { label: "Dubai Marina yacht prices", to: pages.offers },
    { label: "Dubai yacht prices", to: pages.offers },
    { label: "Dubai Marina boarding points", to: pages.instructions },
  ];

  return (
    <section dir="ltr" lang="en" className="relative w-full bg-white text-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_52%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_35%,rgba(15,23,42,0.02))]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 py-16 lg:py-24 text-[14px] sm:text-[15px] leading-relaxed">
        <div className="flex justify-center mb-4">
          <span className="h-px w-24 bg-black/20" />
        </div>

        {/* Intro */}
        <H2 id="intro">Luxury Yacht Rental in Dubai — VIP-Style Cruises</H2>

        <p className="mt-5 text-black/70">
          Welcome to <EliteYachtsTM className="text-black/90 font-semibold" /> — your smart choice
          when you’re looking for <K>Dubai cruises</K> and a premium <K>yacht trip in Dubai</K>.
          We make <K>booking yachts in Dubai</K> fast and clear, with a professional crew and
          top-level onboard amenities.
        </p>

        <p className="mt-3 text-black/70">
          If you want a <K>Dubai Marina cruise</K> with a lively vibe or something calm and private,
          you’re in the right place. Our goal is simple: a smooth <K>yacht hire</K> experience —
          from your first message to the end of your trip.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {quickLinks.map((q) => (
            <PillLink key={q.label} to={q.to}>
              {q.label}
            </PillLink>
          ))}
        </div>

        <H2 id="why">Why choose Elite Yachts™ for a Dubai cruise?</H2>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <SoftCard>
            <H3>Full privacy and full control</H3>
            <p className="mt-2 text-black/70">
              On a <K>Dubai cruise</K>, you choose the guests, music, route, and timing — making
              <K> yacht charter</K> ideal for special occasions and VIP guests.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.offers}>Book yachts in Dubai</PillLink>
              <PillLink to={pages.services}>Yacht hire</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>Family, dinner, celebrations</H3>
            <p className="mt-2 text-black/70">
              From a <K>family cruise</K> to a <K>dinner cruise in Dubai</K> or a Marina dinner
              setup — we tailor everything to your preferred vibe.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.services}>Yacht rental</PillLink>
              <PillLink to={pages.instructions}>Dubai Marina boarding points</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>Wide fleet, clear options</H3>
            <p className="mt-2 text-black/70">
              Looking for <K>Dubai Marina yacht prices</K> or general <K>Dubai yacht prices</K>?
              We offer multiple sizes and clear details to help you decide faster.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.offers}>Dubai yacht rental prices</PillLink>
              <PillLink to={pages.bestCompany}>Why we’re the best</PillLink>
            </div>
          </SoftCard>
        </div>

        {/* Occasions */}
        <H2 id="occasions">Perfect yacht occasions</H2>
        <p className="mt-3 text-black/70">
          Whether it’s a <K>Dubai yacht birthday</K>, a family gathering, or a romantic sunset plan,
          you’ll find a setup that fits. Pick the idea — we handle the details.
        </p>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {occasionCards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="
                group rounded-2xl border border-black/10 bg-white p-4
                shadow-[0_12px_30px_rgba(15,23,42,0.06)]
                transition hover:-translate-y-0.5 hover:border-black/20
                hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)]
              "
            >
              <p className="text-[14px] font-semibold tracking-[0.02em] text-black/90">{c.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-black/65">{c.text}</p>
              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="inline-flex rounded-full px-3 py-1 text-[11px] tracking-[0.12em] uppercase border border-black/10 text-black/60 group-hover:border-black/25 group-hover:text-black transition">
                  Explore
                </span>
                <span className="text-[11px] text-black/50">
                  <span className="font-semibold text-black/70">Elite </span> {c.badge}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Routes */}
        <H2 id="routes">Explore Dubai’s coastline — cruise routes</H2>
        <p className="mt-3 text-black/70">
          Routes depend on your trip duration and sea conditions. If you prefer <K>Dubai Marina</K>,
          we often start there, then continue based on timing: Palm Jumeirah, Burj Al Arab, or The
          World Islands.
        </p>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((l) => (
            <Link
              key={l.title}
              to={l.to}
              className="
                group rounded-2xl border border-black/10 bg-white p-4
                shadow-[0_12px_30px_rgba(15,23,42,0.06)]
                transition hover:-translate-y-0.5 hover:border-black/20
                hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)]
              "
            >
              <p className="text-[14px] font-semibold tracking-[0.02em] text-black/90">{l.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-black/65">{l.text}</p>
              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="inline-flex rounded-full px-3 py-1 text-[11px] tracking-[0.12em] uppercase border border-black/10 text-black/60 group-hover:border-black/25 group-hover:text-black transition">
                  Contact!
                </span>
                <span className="text-[11px] text-black/50">{l.badge}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Marina */}
        <H2 id="marina">Dubai Marina cruises — the most popular starting point</H2>
        <p className="mt-3 text-black/70">
          If your plan is a <K>Dubai Marina cruise</K>, Marina is usually the first choice: easy
          access, nearby parking, and multiple departure options.
        </p>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SoftCard>
            <H3>Dubai Marina boarding points</H3>
            <p className="mt-2 text-black/70">
              For exact meeting instructions, visit{" "}
              <Link
                to={pages.instructions}
                className="underline decoration-black/20 hover:decoration-black/60 text-black/80 hover:text-black transition"
              >
                Instructions
              </Link>{" "}
              or contact us directly to send the location for your day.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.instructions}>Boarding points</PillLink>
              <PillLink to={pages.contact}>Book now</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>Dinner cruise in the Marina</H3>
            <p className="mt-2 text-black/70">
              One of the most requested experiences: a <K>dinner cruise in Dubai</K> or a Marina
              dinner setup. We plan timing and route so you enjoy views, calm waters, and a premium
              onboard vibe.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.offers}>Dinner on a yacht</PillLink>
              <PillLink to={pages.services}>Dinner cruise options</PillLink>
            </div>
          </SoftCard>
        </div>

        {/* Fleet */}
        <H2 id="fleet">Our fleet — choose the right Dubai yacht</H2>
        <p className="mt-3 text-black/70">
          Options for every plan: daily rentals, short trips, or longer experiences — making <K>yacht
            hire</K> easy even if your plan is “today”.
        </p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <SoftCard>
            <H3>Couples and sunset vibes</H3>
            <p className="mt-2 text-black/70">
              Choose 36–54 ft for an elegant trip — ideal for a <K>Dubai Marina cruise</K> with time
              for photos.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to="/dubai-yacht-rental-oryx-36ft">Oryx 36</PillLink>
              <PillLink to="/dubai-yacht-rental-vandutch-40ft">VanDutch 40</PillLink>
              <PillLink to="/dubai-yacht-rental-pershing-gray-54ft">Pershing 54</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>Families and groups</H3>
            <p className="mt-2 text-black/70">
              56–90 ft options are great for a <K>family cruise</K> with more space and comfort.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to="/dubai-yacht-rental-majesty-56ft">Majesty 56</PillLink>
              <PillLink to="/ubai-yacht-rental-ferretti-78ft">Ferretti 78</PillLink>
              <PillLink to="/dubai-yacht-rental-haigan-90ft">Hygen 90</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>Dinner, VIP, corporate events</H3>
            <p className="mt-2 text-black/70">
              For <K>dinner cruises</K> and larger events: 95 ft and above.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to="/dubai-yacht-rental-sunseeker-95ft">Sunseeker 95</PillLink>
              <PillLink to="/dubai-yacht-rental-majesty-101ft">Majesty 101</PillLink>
              <PillLink to="/dubai-yacht-rental-sensation-164ft">Sensation 164</PillLink>
            </div>
          </SoftCard>
        </div>

        {/* Catalog */}
        <H2 id="yacht-catalog">Yacht catalog — direct links</H2>
        <p className="mt-3 text-black/70">
          Pick from the list below — each card takes you to the yacht page. Great for internal links
          and faster decisions.
        </p>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {yachts.map((y) => (
            <Link
              key={y.to}
              to={y.to}
              className="
                group rounded-2xl border border-black/10 bg-white p-4
                shadow-[0_12px_30px_rgba(15,23,42,0.06)]
                transition hover:-translate-y-0.5 hover:border-black/20
                hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)]
              "
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-[14px] font-semibold text-black/90 tracking-[0.02em]">{y.name}</p>
                <span className="shrink-0 rounded-full border border-black/10 px-2 py-0.5 text-[11px] text-black/60">
                  {y.size}
                </span>
              </div>

              <p className="mt-2 text-[13px] leading-relaxed text-black/65">
                Ideal for <K>{y.tag}</K> and a premium <K>yacht trip in Dubai</K>.
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex rounded-full px-3 py-1 text-[11px] tracking-[0.12em] uppercase border border-black/10 text-black/60 group-hover:border-black/25 group-hover:text-black transition">
                  Details
                </span>
                <span className="text-[11px] text-black/50">Yacht rental</span>
              </div>
            </Link>
          ))}
        </div>

        <H2 id="pricing">Dubai yacht prices — how to understand pricing fast</H2>
        <p className="mt-3 text-black/70">
          Pricing usually depends on yacht size, duration, time of day, and add-ons (like dinner or
          décor). For the most accurate quote, share your group size and preferred duration.
        </p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SoftCard>
            <H3>Practical examples (no fixed numbers)</H3>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-black/70 leading-relaxed">
              <li>Small/medium yachts: perfect for Marina cruises and short trips.</li>
              <li>Larger yachts: better for family cruises and bigger groups.</li>
              <li>VIP yachts: best for dinner cruises and corporate events.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.offers}>Dubai Marina yacht prices</PillLink>
              <PillLink to={pages.offers}>Dubai yacht prices</PillLink>
              <PillLink to={pages.offers}>Dubai yacht rental prices</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>The best way to get the right quote</H3>
            <p className="mt-2 text-black/70">
              Send us: guest count + duration + whether you want dinner or a family-style setup. We
              will recommend 2–3 yachts that fit perfectly — fast and clearly.
            </p>
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <CTAButton to={pages.contact}>Contact now</CTAButton>
              <PillLink to={pages.services}>Yacht charter</PillLink>
              <PillLink to={pages.bestCompany}>Why we’re the best</PillLink>
            </div>
          </SoftCard>
        </div>

        <H2 id="booking">How to book a yacht in Dubai — simple steps</H2>
        <p className="mt-3 text-black/70">
          Whether you want a quick hire or a full event setup, follow these steps for a smooth
          booking.
        </p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {[
            {
              t: "Choose the experience",
              d: (
                <>
                  Family cruise? Dinner cruise? Birthday party? Start with the vibe you want.
                </>
              ),
              to: pages.offers,
              linkText: "See offers",
            },
            {
              t: "Choose the yacht",
              d: <>Pick the size that matches your group and trip duration from the catalog above.</>,
              to: pages.yachtsOur,
              linkText: "Our fleet",
            },
            {
              t: "Confirm time and boarding point",
              d: <>We confirm start time and meeting location (especially for Dubai Marina).</>,
              to: pages.instructions,
              linkText: "Instructions",
            },
            {
              t: "Enjoy the trip",
              d: <>Professional crew, smooth planning, and VIP-level hospitality from start to finish.</>,
              to: pages.contact,
              linkText: "Book now",
            },
          ].map((s) => (
            <SoftCard key={s.t} className="h-full">
              <p className="text-[14px] font-semibold text-black/90 tracking-[0.02em]">{s.t}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-black/65">{s.d}</p>
              <div className="mt-4">
                <Link
                  to={s.to}
                  className="underline decoration-black/20 hover:decoration-black/60 text-black/80 hover:text-black transition"
                >
                  {s.linkText}
                </Link>
              </div>
            </SoftCard>
          ))}
        </div>

     

        <H2 id="faq">FAQ — yacht hire & rental in Dubai</H2>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[
            {
              q: "Can I book a yacht in Dubai on the same day?",
              a: "Yes, subject to availability. Send your time and guest count and we’ll suggest the best options.",
              to: pages.contact,
              t: "Contact",
            },
            {
              q: "What’s the difference between yacht hire, rental, and charter?",
              a: "They’re often used interchangeably. What matters is the details: duration, route, and included services.",
              to: pages.services,
              t: "Services",
            },
            {
              q: "Do you offer dinner cruises in Dubai?",
              a: "Yes. You can request dinner options in Dubai Marina or along premium Dubai routes based on your preferences.",
              to: pages.offers,
              t: "Offers",
            },
            {
              q: "How do I know the price for a Dubai Marina yacht?",
              a: "Pricing depends on size, duration, timing, and add-ons. Request a quick quote for the best match.",
              to: pages.offers,
              t: "See prices",
            },
            {
              q: "Do you have yachts suitable for family cruises?",
              a: "Absolutely. Many 56–90 ft options are excellent for families with more space, comfort, and safety.",
              to: "/dubai-yacht-rental-majesty-56ft",
              t: "Suggested yacht",
            },
            {
              q: "Where are the Dubai Marina boarding points?",
              a: "You’ll find full details in the Instructions page, or contact us and we’ll send the location for your date.",
              to: pages.instructions,
              t: "Instructions",
            },
          ].map((f) => (
            <SoftCard key={f.q}>
              <p className="text-[14px] font-semibold text-black/90">{f.q}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-black/65">{f.a}</p>
              <div className="mt-4">
                <Link
                  to={f.to}
                  className="underline decoration-black/20 hover:decoration-black/60 text-black/80 hover:text-black transition"
                >
                  {f.t}
                </Link>
              </div>
            </SoftCard>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_16px_46px_rgba(0,0,0,0.08)]">
          <p className="text-[16px] sm:text-[17px] font-semibold text-black/90">
            Ready for a yacht trip in Dubai today?
          </p>

          <p className="mt-2 text-[13px] sm:text-[14px] leading-relaxed text-black/70">
            Contact <EliteYachtsTM className="text-black/90 font-semibold" /> for quick
            recommendations based on your guest count and duration — and whether you prefer a dinner
            cruise or a family-style cruise. We’ll recommend the best Dubai yacht options with full
            planning and premium service.
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <CTAButton to={pages.contact}>Book now</CTAButton>
            <PillLink to={pages.offers}>Offers</PillLink>
            <PillLink to={pages.services}>Services</PillLink>
            <PillLink to={pages.yachtsOur}>Our fleet</PillLink>
            <PillLink to={pages.bestCompany}>Why us</PillLink>
          </div>

          <div className="mt-4 text-[12px] text-black/55 leading-relaxed">
            Important links:{" "}
            <Link to={pages.terms} className="underline hover:text-black transition">
              Terms & Conditions
            </Link>{" "}
            •{" "}
            <Link to={pages.privacy} className="underline hover:text-black transition">
              Privacy Policy
            </Link>{" "}
            •{" "}
            <Link to={pages.refunds} className="underline hover:text-black transition">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
