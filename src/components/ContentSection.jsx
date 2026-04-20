import React from "react";
import { Link } from "react-router-dom";

function EliteYachtsTM({ className = "" }) {
  return (
    <span className={className}>
      Elite Yacht Dubai
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

function H3({ children }) {
  return (
    <h3 className="mt-7 text-[15px] sm:text-[17px] lg:text-[18px] font-semibold tracking-tight text-black/90">
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

export default function ContentSection() {
  const pages = {
    yachtsOur: "/yachts",
    services: "/services",
    offers: "/offers",
    about: "/about-us",
    watersports: "/water-sports",
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

  const tips = [
    {
      tip: "Book Tuesday to Thursday",
      detail: "Midweek charters run noticeably cheaper than weekend equivalents on most fleets. If your date is flexible, the saving is worth it.",
    },
    {
      tip: "Consider summer",
      detail: "June to September brings lower demand and discounted rates. The heat is real, but a moving vessel at sunrise or in the evening is genuinely comfortable.",
    },
    {
      tip: "Bundle your add-ons at booking",
      detail: "Catering, water sports kit, photography, and decorations are nearly always cheaper when locked in upfront rather than requested on the day.",
    },
    {
      tip: "Match the vessel to your group",
      detail: "Paying for a 75-footer when your group of 10 would be comfortable on a 50-footer is a very common and entirely avoidable mistake.",
    },
    {
      tip: "Get fuel and crew gratuity confirmed in writing",
      detail: "These two items are the most common sources of post-charter billing surprises.",
    },
    {
      tip: "Book well ahead for peak dates",
      detail: "New Year's Eve, UAE National Day (December 2nd), and major event weekends fill up weeks in advance. Last-minute availability is limited and expensive.",
    },
  ];

  const faqs = [
    {
      q: "What does a yacht rental cost in Dubai?",
      a: "Prices start from around AED 400 per hour for a small sport cruiser and run to AED 15,000 per hour or more for a large superyacht. A 4-hour sunset cruise on a 60-foot motor yacht for 10–15 guests typically comes in at AED 5,000–9,000 with standard inclusions. Half-day and full-day packages offer better per-hour value than straight hourly rates.",
      to: pages.offers,
      t: "See prices",
    },
    {
      q: "How many guests can come aboard?",
      a: "Capacity varies across the fleet. Sport cruisers handle 4–12 guests. Mid-range motor yachts in the 50–70 foot range work well for 10–25 guests. Superyachts can take 30–50 guests for a standing event, or 15–20 for a seated dinner. Always ask about the comfortable capacity rather than the maximum.",
      to: pages.yachtsOur,
      t: "View fleet",
    },
    {
      q: "Is food included in the charter price?",
      a: "Basic refreshments — water, soft drinks, sometimes light snacks — are usually included in the standard price. Sit-down meals, alcohol, and custom menus are almost always charged separately. Check exactly what's covered when you book, not after.",
      to: pages.offers,
      t: "View packages",
    },
    {
      q: "When is the best time of year to charter a yacht in Dubai?",
      a: "October to April is the most comfortable window — temperatures between 20 and 32 degrees, settled Gulf seas, and clear skies. December and January are in highest demand and book quickly. Evening and early morning charters remain manageable even in summer.",
      to: pages.contact,
      t: "Book now",
    },
    {
      q: "Can we bring our own food and drinks?",
      a: "Most operators allow it, sometimes with a corkage or setup fee for alcohol. For birthday cakes, decorations, or custom setups, coordinate with the crew well before departure so everything's in place when guests arrive.",
      to: pages.contact,
      t: "Ask us",
    },
    {
      q: "Do I need a licence to be on the yacht?",
      a: "No. All commercial charter yachts operate with a licensed captain who handles the vessel. Guests need no sailing experience or qualification. If jet skis are included and you want to operate them yourself, a UAE Personal Watercraft licence is technically required.",
      to: pages.instructions,
      t: "Guidelines",
    },
    {
      q: "How far ahead should I book?",
      a: "Midweek charters on standard vessels — 3 to 7 days is usually enough. Weekend bookings warrant 1–2 weeks. Peak dates — New Year's Eve, UAE National Day, Eid weekends — need 3–6 weeks minimum. The more popular the vessel, the earlier the window closes.",
      to: pages.contact,
      t: "Book now",
    },
    {
      q: "Where are the Dubai Marina boarding points?",
      a: "Most charters depart from Dubai Marina Yacht Club or the JBR waterfront. Full boarding instructions are on our Guidelines page, or contact us and we'll send the exact location for your date.",
      to: pages.instructions,
      t: "Instructions",
    },
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
        <H2 id="intro">Luxury Yacht Charter in Dubai — Rentals, Prices & Honest Advice</H2>
        <p className="mt-1 text-[12px] tracking-[0.2em] uppercase text-black/45">
          Elite Yacht Dubai · Dubai Marina · Palm Jumeirah · All UAE Waters
        </p>

        <p className="mt-5 text-black/70">
          Dubai looks completely different from the water. The Burj Al Arab hits differently when you're floating 400 metres offshore, the Palm Jumeirah finally makes sense as a shape when you're sailing its crescent, and Dubai Marina's skyline — already one of the most photographed in the world — becomes something else entirely from a yacht deck at sunset. For a lot of people who've done it, the boat trip ends up being what they remember the holiday by.
        </p>
        <p className="mt-3 text-black/70">
          <EliteYachtsTM className="text-black/90 font-semibold" /> charters yachts across Dubai Marina, Palm Jumeirah, and the wider UAE coastline — from private sunset cruises and birthday parties through to corporate events, fishing trips, and overnight charters. This guide covers what to expect, realistic costs, how to pick the right vessel, and what separates a genuinely good charter from a forgettable one.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {quickLinks.map((q) => (
            <PillLink key={q.label} to={q.to}>
              {q.label}
            </PillLink>
          ))}
        </div>

        {/* Why Dubai */}
        <H2 id="why">Why a Yacht Charter Works So Well in Dubai</H2>

        <p className="mt-3 text-black/70">
          Dubai gets a lot of attention for its rooftop bars, desert safaris, and malls the size of small towns — but the city's relationship with water doesn't always get the same press. Over 70 kilometres of coastline, a marina that's genuinely world-class, and weather that keeps the Gulf comfortable for most of the year — Dubai is, practically speaking, one of the better places on the planet to be on a boat.
        </p>
        <p className="mt-3 text-black/70">
          What a private yacht solves that most upscale land-based experiences can't: <K>actual exclusivity</K>. A private dining room still puts you in a building full of strangers. A private yacht puts you on open water with exactly the people you chose to bring. That matters for birthdays, proposals, corporate client nights, and anniversary dinners. The backdrop is exceptional no matter which direction you head, and the format bends to the occasion rather than forcing the occasion around a fixed format.
        </p>
        <p className="mt-3 text-black/70">
          From a logistics standpoint, Dubai makes chartering easy. Hundreds of licensed vessels operate out of Dubai Marina alone. Most operators depart from Dubai Marina Yacht Club or the JBR waterfront — parking, crew, and passenger facilities handled professionally. Years of high demand have pushed the better operators to sharpen their service considerably.
        </p>

        {/* Types of yachts */}
        <H2 id="types">Types of Yachts Available</H2>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SoftCard>
            <H3>Sport & Leisure Cruisers (25–45 ft)</H3>
            <p className="mt-2 text-black/70">
              The go-to option for groups of 4 to 12 — fast, nimble, and well-suited to 2–4 hour sunset runs, fishing trips, or sightseeing. Most include a captain and basic crew; catering, music, and water gear can be added. Hourly rates typically start from <K>AED 400–600</K>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to="/dubai-yacht-rental-oryx-36ft">Oryx 36 ft</PillLink>
              <PillLink to="/dubai-yacht-rental-vandutch-40ft">VanDutch 40 ft</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>Motor Yachts (50–75 ft)</H3>
            <p className="mt-2 text-black/70">
              The mid-range category handles the bulk of corporate events and larger social gatherings. A 65-footer comfortably takes 15–25 guests with proper deck space, an air-conditioned salon, bathrooms, and a galley. Two or three crew members look after operations. Charter rates run <K>AED 1,200–2,500 per hour</K> or AED 4,000–9,000 for a half-day.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to="/dubai-yacht-rental-majesty-56ft">Majesty 56 ft</PillLink>
              <PillLink to="/dubai-yacht-rental-ferretti-67ft">Ferretti 67 ft</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>Luxury & Superyachts (80 ft+)</H3>
            <p className="mt-2 text-black/70">
              Master suites, multiple decks, Jacuzzis, full dining setups, and a hospitality crew of four to eight. Guest numbers typically run 20–50 for day charters, with overnight configurations for 8–16. These are the vessels you book when the occasion needs a setting that matches it — not just something close. Full-day rates start from <K>AED 15,000</K> and move upward depending on the vessel.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to="/dubai-yacht-rental-majesty-101ft">Majesty 101 ft</PillLink>
              <PillLink to="/dubai-yacht-rental-sensation-164ft">Sensation 164 ft</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>Catamarans & Sailing Yachts</H3>
            <p className="mt-2 text-black/70">
              Catamarans suit groups where deck space and stability matter more than speed — popular for snorkelling trips, sunset cruises with bigger headcounts, and events where guests want to stay outside. Sailing yachts are there for clients who prefer the quieter, wind-driven approach. Both sit between sport cruiser and mid-range motor yacht pricing.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.yachtsOur}>View full fleet</PillLink>
            </div>
          </SoftCard>
        </div>

        {/* Pricing */}
        <H2 id="pricing">Yacht Charter Prices in Dubai — What to Budget</H2>

        <p className="mt-3 text-black/70">
          Prices shift depending on vessel size, time of year, day of the week, and what's bundled in. The ranges below are realistic working guides — not firm quotes, since availability and inclusions vary — but they'll give you a sensible framework before you start enquiring.
        </p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SoftCard>
            <H3>Hourly & daily rate guide</H3>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-black/70 leading-relaxed">
              <li><K>Sport Cruiser (25–45 ft, up to 12 guests):</K> AED 400–700 / hour</li>
              <li><K>Mid-Range Motor Yacht (50–65 ft, up to 25 guests):</K> AED 1,200–2,500 / hour</li>
              <li><K>Large Motor Yacht (70–80 ft, up to 35 guests):</K> AED 2,500–5,000 / hour</li>
              <li><K>Superyacht (80 ft+, up to 50 guests):</K> AED 5,000–15,000+ / hour</li>
              <li><K>Half-day (4 hours):</K> usually priced as a package at roughly 3.5× the hourly rate</li>
              <li><K>Full-day (8 hours):</K> 6–7× the hourly rate with discounting applied</li>
              <li><K>Overnight charters:</K> AED 15,000–60,000+ depending on vessel and route</li>
            </ul>
          </SoftCard>

          <SoftCard>
            <H3>What affects the final price</H3>
            <p className="mt-2 text-black/70">
              Friday and Saturday charters run <K>15–25% higher</K> than midweek on most fleets. Peak season (October through April) also pushes prices up — though some operators drop rates in summer to keep their vessels busy. Fuel is sometimes in the headline price, sometimes not — worth confirming before signing anything.
            </p>
            <p className="mt-3 text-black/70">
              A standard charter package generally covers the vessel, captain and crew, safety equipment, and basic refreshments. Food beyond light snacks, water sports kit, decorations, photography, and marina transfers are nearly always charged separately.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.offers}>View packages</PillLink>
              <PillLink to={pages.contact}>Get a quote</PillLink>
            </div>
          </SoftCard>
        </div>

        {/* Occasions */}
        <H2 id="occasions">Best Occasions for a Yacht Rental in Dubai</H2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SoftCard>
            <H3>Birthdays</H3>
            <p className="mt-2 text-black/70">
              A birthday on a private yacht is genuinely different from a restaurant booking. Your group has the whole vessel — no neighbouring tables, no second-seating pressure, no strangers walking through. Bring your own decorations, request a custom cake, set your own playlist, or let the crew prep everything before guests board. Party yacht bookings are particularly popular for 30s, 40s, and 50s — milestone birthdays where dinner-and-drinks doesn't quite fit the scale of the occasion.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.offers}>Birthday packages</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>Romantic Sunset Cruises</H3>
            <p className="mt-2 text-black/70">
              Between October and April, the 6 to 8 PM slot in Dubai produces some genuinely spectacular light. The sun drops behind the Marina towers, the air is clear, and the colours are worth the trip on their own. A private sunset cruise for two, with dinner on deck, handles most anniversary and proposal requirements without needing much more planning than that. Simple format, the setting carries it.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.services}>Sunset cruise</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>Corporate Events & Team Outings</H3>
            <p className="mt-2 text-black/70">
              Yacht charters work well for corporate use — product launches, client entertainment, team days, and end-of-year events. The closed, exclusive environment creates conditions for actual relationship-building that a restaurant event rarely matches. Larger motor yachts and superyachts can be fitted with AV equipment, branded signage, and custom catering setups. Companies across DIFC, Business Bay, and Dubai Media City use yacht charters as a regular part of their client entertainment schedule.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.corporate}>Corporate events</PillLink>
            </div>
          </SoftCard>

          <SoftCard>
            <H3>Weekend Getaways & Overnight Charters</H3>
            <p className="mt-2 text-black/70">
              For clients wanting more than a few hours, overnight charters toward the Musandam Peninsula or down the East Coast to Fujairah offer a different pace entirely. The Musandam fjords — around 6–8 hours sailing from Dubai Marina — are consistently cited by experienced charter clients as the UAE trip they hadn't planned but most appreciated. Permits, catering, and crew rotations need advance coordination, but a well-organised operator manages all of it.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PillLink to={pages.contact}>Enquire now</PillLink>
            </div>
          </SoftCard>
        </div>

        {/* Locations */}
        <H2 id="locations">Top Charter Locations in Dubai and the UAE</H2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Dubai Marina",
              text: "The most popular departure point, and the most visually dramatic. Towers lining both sides of a 3-kilometre canal open into the Gulf, and the 30-minute sail from the marina entrance to the JBR waterfront packs in more visual variety than most city tours manage in a full day.",
              to: pages.yachtsOur,
            },
            {
              title: "Palm Jumeirah",
              text: "From the water gives you a perspective no land visit can. The frond villas, Atlantis towers, and open horizon beyond the breakwater make for a memorable 2–3 hour circuit. Departure from the Palm Marina or a villa jetty can be arranged with advance notice.",
              to: pages.services,
            },
            {
              title: "Jumeirah Beach & Burj Al Arab",
              text: "Roughly 25–35 minutes at cruising speed south from the Marina — a standard inclusion on most Dubai sightseeing runs. The view of the Burj from water level, backed by the full sweep of Jumeirah Beach, is one of those images that actually delivers in person what it promises in photos.",
              to: pages.services,
            },
            {
              title: "Musandam & Fujairah",
              text: "For multi-day charters, the Musandam Peninsula offers fjord scenery that bears no resemblance to the Dubai coastline. Khasab is reachable in a full-day sail. The East Coast route via Fujairah adds open-water fishing, coral reef diving, and a pace that's genuinely restorative.",
              to: pages.contact,
            },
          ].map((l) => (
            <Link
              key={l.title}
              to={l.to}
              className="group rounded-2xl border border-black/10 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)]"
            >
              <p className="text-[14px] font-semibold tracking-[0.02em] text-black/90">{l.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-black/65">{l.text}</p>
              <div className="mt-4">
                <span className="inline-flex rounded-full px-3 py-1 text-[11px] tracking-[0.12em] uppercase border border-black/10 text-black/60 group-hover:border-black/25 group-hover:text-black transition">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* How to choose */}
        <H2 id="choose">How to Choose a Reliable Yacht Charter Company in Dubai</H2>

        <p className="mt-3 text-black/70">
          Dubai's charter market is active and competitive, which means operators exist at every quality level. A few things separate the reliable from the rest.
        </p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <SoftCard>
            <H3>Licensing</H3>
            <p className="mt-2 text-black/70">
              Every commercial vessel in UAE waters must hold a valid licence from the <K>Dubai Maritime City Authority (DMCA)</K> or the relevant emirate's maritime body. Ask for it before booking — a good operator will produce it immediately. Any hesitation is worth noting.
            </p>
          </SoftCard>

          <SoftCard>
            <H3>Crew qualifications</H3>
            <p className="mt-2 text-black/70">
              Crew qualifications matter more than most people realise. The captain needs a <K>UAE-recognised certification</K> for the vessel class and navigating area. Crew should hold current STCW safety training certificates. Ask.
            </p>
          </SoftCard>

          <SoftCard>
            <H3>Vessel condition</H3>
            <p className="mt-2 text-black/70">
              A yacht that photographs well on a website can look quite different in real life. Request a pre-booking visit or ask for photos taken by actual guests — not marketing material. Upholstery condition, galley cleanliness, and life-saving equipment state all reflect how the operator maintains everything they own.
            </p>
          </SoftCard>
        </div>

        <p className="mt-5 text-black/70">
          <EliteYachtsTM className="font-semibold text-black/90" /> maintains all vessels to DMCA standards, operates with fully certified captains and crew, and offers pre-booking vessel inspections. Every charter departs with mandatory safety equipment, current coast guard documentation, and a properly briefed crew. That standard applies to every booking, not just the large ones.
        </p>

        {/* Safety */}
        <H2 id="safety">Safety and Licensing — What the Rules Require</H2>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SoftCard>
            <H3>Mandatory safety equipment</H3>
            <p className="mt-2 text-black/70">
              UAE maritime law mandates specific safety kit on every commercial charter: <K>life jackets for all passengers, fire extinguishers, flares, a first aid kit, and working VHF radio</K>. Coast guard registration needs to be current and displayed on the vessel. The DMCA runs spot checks, and the penalties for non-compliance are real. Reputable operators comply as a matter of course — not as an optional standard.
            </p>
          </SoftCard>

          <SoftCard>
            <H3>Crew ratios & safety briefing</H3>
            <p className="mt-2 text-black/70">
              Before departure, the crew will run through a safety briefing covering life jacket locations, emergency exits, sea conditions, and any areas to avoid that day. Children under 12 are required to wear life jackets on deck on most vessels — ask about this specifically when booking if you're bringing younger guests.
            </p>
            <p className="mt-3 text-black/70">
              Crew size scales with the vessel. A sport cruiser usually runs with a captain only; a mid-range motor yacht adds one deckhand; larger vessels operate with a full hospitality crew. Tipping isn't mandatory but is customary — <K>10–15%</K> of the charter fee is a reasonable guide when the crew has done a good job.
            </p>
          </SoftCard>
        </div>

        {/* Tips */}
        <H2 id="tips">Practical Tips to Get Better Value on Your Charter</H2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((t) => (
            <SoftCard key={t.tip}>
              <p className="text-[14px] font-semibold text-black/90">{t.tip}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-black/65">{t.detail}</p>
            </SoftCard>
          ))}
        </div>

        {/* Yacht catalog */}
        <H2 id="yacht-catalog">Yacht Catalog — Direct Links</H2>
        <p className="mt-3 text-black/70">
          Pick from the list below — each card takes you directly to the yacht page with full specs, photos, and pricing.
        </p>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {yachts.map((y) => (
            <Link
              key={y.to}
              to={y.to}
              className="group rounded-2xl border border-black/10 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)]"
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

        {/* FAQ */}
        <H2 id="faq">Frequently Asked Questions</H2>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((f) => (
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
            Ready to Book?
          </p>
          <p className="mt-2 text-[13px] sm:text-[14px] leading-relaxed text-black/70">
            Tell us your date, group size, and what the occasion is — we'll match you with the right vessel and send a detailed proposal within a few hours.{" "}
            <EliteYachtsTM className="font-semibold text-black/90" /> departs from Dubai Marina Yacht Club & JBR Waterfront, 7 days a week — sunrise charters from 6:00 AM, overnight charters available.
          </p>
          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <CTAButton to={pages.contact}>Book now</CTAButton>
            <PillLink to={pages.offers}>Packages & offers</PillLink>
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
