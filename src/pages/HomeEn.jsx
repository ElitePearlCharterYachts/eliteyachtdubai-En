import { useMemo } from "react";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

import Hero from "../components/Hero";
import AboutContainer from "../components/AboutContainer";
import YachtsSection from "../components/YachtsSection";
import ReviewsSlider from "../components/ReviewsSlider";
import BrandsGroupSection from "../components/BrandsGroupSection";
import CTASection from "../components/CTASection";
import ContentSection from "../components/ContentSection";

function applyTM(input = "") {
  let out = String(input);

  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return out;
}

export default function HomeEn() {
  const canonical = "https://eliteyachtdubai.com/";

  const title = "Yacht Rental in Dubai | Luxury Yacht Charters & Cruises – Elite Yacht Dubai";
  const description =
    "Experience the best yacht rentals in Dubai with Elite Yacht Dubai. We offer yachts for rent in Dubai at exceptional rates, private cruises, and party yachts for birthdays and special occasions in Dubai Marina and Palm Jumeirah. Book easily now.";
  const keywords =
    "yacht rental dubai, luxury yacht rental dubai, yacht charter dubai marina, private yacht dubai, VIP yacht dubai, dubai marina yacht, yacht party dubai, corporate yacht events dubai, sunset yacht cruise dubai, rent a yacht dubai";

  const ogTitle = "Luxury Yacht Rental in Dubai Marina | Elite Yacht Dubai™";
  const ogDescription =
    "Book direct via WhatsApp. Luxury fleet, professional crew, and VIP experiences from Dubai Marina.";
  const ogImage = "https://eliteyachtdubai.com/images/og/home.webp";

  const schema = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://eliteyachtdubai.com/#website",
        url: "https://eliteyachtdubai.com/",
        name: "Elite Yacht Dubai™",
        alternateName: [
          "Elite Yacht Dubai",
          "Elite Yachts Dubai",
          "Luxury Yacht Rental Dubai",
          "Yacht Charter Dubai Marina",
        ],
        inLanguage: "en-AE",
        publisher: { "@id": "https://eliteyachtdubai.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://eliteyachtdubai.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://eliteyachtdubai.com/#organization",
        name: "Elite Yacht Dubai™",
        legalName: "Elite Yacht Rental LLC",
        url: "https://eliteyachtdubai.com/",
        logo: "https://eliteyachtdubai.com/logo.svg",
        telephone: "+971569006603",
        email: "info@eliteyachtrental.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        sameAs: ["https://eliteyachtrental.com/"],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://eliteyachtdubai.com/#localbusiness",
        name: "Elite Yacht Dubai™",
        url: "https://eliteyachtdubai.com/",
        image: ["https://eliteyachtdubai.com/images/hero/hero-bg-1600.webp"],
        telephone: "+971569006603",
        email: "info@eliteyachtrental.com",
        priceRange: "$$$",
        currenciesAccepted: "AED",
        paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai Marina",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Dubai" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        geo: { "@type": "GeoCoordinates", latitude: 25.0773, longitude: 55.1403 },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        parentOrganization: { "@id": "https://eliteyachtdubai.com/#organization" },
      },
    ],
    []
  );

  const reviewSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Elite Yacht Dubai™ — Luxury Yacht Rental in Dubai Marina",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "128",
      },
    }),
    []
  );

  return (
    <main dir="ltr" lang="en" className="w-full bg-white text-black">
      <Seo
        title={applyTM(title)}
        description={applyTM(description)}
        keywords={keywords}
        canonical={canonical}
        ogTitle={applyTM(ogTitle)}
        ogDescription={applyTM(ogDescription)}
        ogImage={ogImage}
        ogUrl={canonical}
      />

      <Schema data={schema} />
      <Schema data={reviewSchema} />

      <Hero />
      <YachtsSection />
      <AboutContainer />
      <BrandsGroupSection />
      <ReviewsSlider />
      <CTASection variant="fleet" />
      <ContentSection />
    </main>
  );
}
