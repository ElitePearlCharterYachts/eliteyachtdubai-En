import { useEffect, useMemo, useState } from "react";
import YachtCard from "../components/YachtCard";
import CTASection from "../components/CTASection";
import ReviewsSlider from "../components/ReviewsSlider";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

function applyTM(input = "") {
  let out = String(input);
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, "Elite Yachts™");
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, "Elite Yacht™");
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, "Elite™");
  return out;
}

export default function Yachts() {
  const [yachts, setYachts] = useState([]);

  const BASE_URL = "https://eliteyachtdubai.com";
  const PAGE_PATH = "/yachts";
  const CANONICAL = `${BASE_URL}${PAGE_PATH}`;

  useEffect(() => {
    fetch("/en/data/yachts.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((json) => setYachts(Array.isArray(json) ? json : []))
      .catch(console.error);
  }, []);

  const pageTitle = useMemo(
    () =>
      applyTM(
        "Elite™ Yacht Dubai Fleet | Luxury Yacht Rental in Dubai Marina"
      ),
    []
  );

  const pageDesc = useMemo(
    () =>
      applyTM(
        "Explore the Elite™ Yacht Dubai fleet — luxury yachts for private cruises, parties, corporate events, sunset tours, and VIP experiences in Dubai Marina. Transparent pricing and fast WhatsApp booking."
      ),
    []
  );

  const pageKeywords = useMemo(
    () =>
      [
        "Elite Yacht Dubai",
        "Luxury yacht rental Dubai",
        "Dubai Marina yacht charter",
        "Private yacht Dubai",
        "VIP yacht Dubai",
        "Yacht party Dubai",
        "Corporate yacht events Dubai",
        "Sunset yacht cruise Dubai"
      ].join(", "),
    []
  );

  const ogImage = `${BASE_URL}/images/og/fleet.webp`;

  const fleetSchema = useMemo(() => {
    const itemList = yachts.slice(0, 80).map((y, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE_URL}/${y.slug}`,
      name: y.title
    }));

    return [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL}#webpage`,
        url: CANONICAL,
        name: pageTitle,
        description: pageDesc,
        inLanguage: "en-AE",
        isPartOf: { "@id": `${BASE_URL}/#website` }
      },
      {
        "@type": "CollectionPage",
        "@id": `${CANONICAL}#collection`,
        url: CANONICAL,
        name: pageTitle,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: itemList.length,
          itemListElement: itemList
        }
      }
    ];
  }, [yachts, pageTitle, pageDesc]);

  return (
    <main dir="ltr" lang="en" className="w-full bg-white text-black">
      <Seo
        title={pageTitle}
        description={pageDesc}
        keywords={pageKeywords}
        canonical={CANONICAL}
        ogTitle={pageTitle}
        ogDescription={pageDesc}
        ogImage={ogImage}
        ogUrl={CANONICAL}
      />

      <Schema data={fleetSchema} />

      <section
        className="relative w-full min-h-[55vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/en/images/banners/fleet-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-[11px] tracking-[0.32em] uppercase text-white/80">
            Elite™ Yacht Dubai • Dubai Marina • VIP
          </p>

          <h1 className="mt-4 text-2xl sm:text-4xl font-semibold text-white leading-tight">
            Luxury Yacht Rental in Dubai Marina
          </h1>

          <p className="mt-5 text-white/90 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Discover private and luxury yacht charters in Dubai Marina — perfect
            for families, couples, parties, corporate events, proposals, and
            sunset cruises. Elite™ Yacht Dubai delivers premium service,
            professional crew, and fast booking.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/971569006603"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 bg-white text-black text-sm font-semibold shadow hover:bg-black hover:text-white transition"
            >
              WhatsApp Booking
            </a>

            <a
              href="tel:+971569006603"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 bg-black text-white text-sm font-semibold shadow hover:bg-white hover:text-black transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FLEET GRID */}
      <section className="py-20">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-[12px] tracking-[0.32em] uppercase text-black/60">
              Elite™ Fleet
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
              Choose Your Luxury Yacht
            </h2>

            <p className="mt-5 text-black/70 text-sm sm:text-base leading-relaxed">
              From 36ft to 300ft yachts — ideal for private cruising, VIP
              celebrations, sunset experiences, and corporate hospitality in
              Dubai Marina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yachts.map((yacht) => (
              <YachtCard key={yacht.slug} yacht={yacht} />
            ))}
          </div>
        </div>
      </section>

      <ReviewsSlider />

      <CTASection variant="fleet" />
    </main>
  );
}
