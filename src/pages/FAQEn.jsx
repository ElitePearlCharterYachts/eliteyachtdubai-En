import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

import FAQPAGE from "../components/FAQPAGE";
import ReviewsSlider from "../components/ReviewsSlider";
import CTASection from "../components/CTASection";

/**
 * FAQ (EN)
 * - Updated domain to eliteyachtdubai.com
 * - English SEO + schema
 * - Keeps your layout exactly the same
 */
export default function FAQEn() {
  const { pathname } = useLocation();

  const BASE_URL = "https://eliteyachtdubai.com";
  const CANONICAL = `${BASE_URL}${pathname || "/faq"}`;
  const ogImage = `${BASE_URL}/images/og/faq.webp`;

  const title =
    "FAQ | Dubai Marina Yacht Rental | Elite Yachts™ Booking via WhatsApp";
  const description =
    "Frequently asked questions about yacht rental in Dubai: pricing, minimum booking time (typically 2 hours), routes (Dubai Marina / Palm Jumeirah / Burj Al Arab), guest capacity (10–200), booking via WhatsApp, onboard safety, and VIP add-ons like decoration, catering, and a private chef.";
  const keywords = [
    "Dubai yacht rental FAQ",
    "Dubai Marina yacht rental FAQ",
    "Elite Yachts Dubai FAQ",
    "book yacht Dubai WhatsApp",
    "Dubai yacht rental prices",
    "Dubai Marina yacht routes",
    "Luxury Yacht Rental Dubai",
    "Dubai Marina Yacht Charter",
    "Elite Yachts Dubai",
  ].join(", ");

  const schemaData = useMemo(() => {
    const breadcrumb = {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "FAQ", item: CANONICAL },
      ],
    };

    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the minimum booking duration?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The minimum is typically 2 hours. Some yachts or time slots may vary depending on season and availability.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the departure point?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Most trips depart from Dubai Marina. Other pickup/drop-off points may be arranged depending on the yacht and required permits.",
          },
        },
        {
          "@type": "Question",
          name: "What are the most popular routes?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Common routes include Dubai Marina, Bluewaters / Ain Dubai, Palm Jumeirah, Atlantis, and Burj Al Arab, depending on trip duration and timing.",
          },
        },
        {
          "@type": "Question",
          name: "What guest capacities are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yachts are available with different capacities, typically from 10 up to 200 guests depending on yacht size and the type of trip or event.",
          },
        },
        {
          "@type": "Question",
          name: "Can I add VIP services like decoration, catering, or a private chef?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Add-ons such as decoration (additional fees may apply), catering, and an onboard chef are available on request. Photography and VIP transport can also be arranged.",
          },
        },
        {
          "@type": "Question",
          name: "Are pets allowed onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In most cases, pets are not allowed due to safety and hygiene policies on many trips.",
          },
        },
        {
          "@type": "Question",
          name: "How can I book quickly?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Send your date, duration, and guest count via WhatsApp or call us. We’ll confirm availability quickly and recommend the best options.",
          },
        },
        {
          "@type": "Question",
          name: "Are there safety procedures onboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Required safety equipment is available, and the crew provides guidance before departure to ensure a safe and comfortable trip.",
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
        breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
        mainEntity: { "@id": `${CANONICAL}#faq` },
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Elite Yachts Dubai",
        alternateName: ["Elite Yacht Dubai", "Elite Yachts Dubai", "إيليت يخوت"],
        url: BASE_URL,
        areaServed: "AE",
        sameAs: [],
      },
      breadcrumb,
      faqSchema,
    ];
  }, [BASE_URL, CANONICAL, title, description]);

  return (
    <div className="w-full bg-white text-slate-900">
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

      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/en/images/banners/faq-banner.webp"
            alt="FAQ | Dubai Yacht Rental"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-white/25 to-white/90" />
        </div>

        <div className="relative w-full">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-24 text-center">
            <p className="text-[11px] tracking-[0.35em] text-slate-600 uppercase">
              Dubai Yacht Rental
            </p>

            <div className="h-px my-[10px] mx-auto w-72 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
              Frequently Asked Questions
            </h1>

            <p className="mt-6 text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about yacht rental in Dubai — pricing,
              routes, booking steps, onboard safety, and your overall experience.
            </p>
          </div>
        </div>
      </section>

      {/* Keep your existing FAQ component, but EN page direction */}
      <section dir="ltr" lang="en" className="bg-white text-slate-900">
        <FAQPAGE />
      </section>

      <div dir="ltr">
        <ReviewsSlider />
      </div>

      <CTASection variant="contact" />
    </div>
  );
}
