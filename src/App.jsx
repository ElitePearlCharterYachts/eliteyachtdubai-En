import "./index.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState, memo } from "react";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Schema from "./components/Schema";

import SitemapEn from "./pages/SitemapEn";
import OffersPackagesEn from "./pages/OffersPackagesEn";

const Footer = lazy(() => import("./components/Footer"));

const HomeEn = lazy(() => import("./pages/HomeEn"));
const ServicesEn = lazy(() => import("./pages/ServicesEn"));
const CorporateEn = lazy(() => import("./pages/CorporateEn"));
const WaterSportsEn = lazy(() => import("./pages/WaterSportsEn"));
const PackagesEn = lazy(() => import("./pages/PackagesEn"));
const YachtsEn = lazy(() => import("./pages/YachtsEn"));
const AboutEn = lazy(() => import("./pages/AboutEn"));
const BestYachtCharterDubaiEn = lazy(() => import("./pages/BestYachtCharterDubaiEn"));
const BlogsPageEn = lazy(() => import("./pages/BlogsPageEn"));
const BlogDetailsPageEn = lazy(() => import("./pages/BlogDetailsPageEn"));
const FAQEn = lazy(() => import("./pages/FAQEn"));
const OwnerEn = lazy(() => import("./pages/OwnerEn"));
const ContactEn = lazy(() => import("./pages/ContactEn"));
const YachtDetailsEn = lazy(() => import("./pages/YachtDetailsEn"));
const TermsEn = lazy(() => import("./pages/TermsEn"));
const TeamEn = lazy(() => import("./pages/TeamEn"));
const RefundPolicyEn = lazy(() => import("./pages/RefundPolicyEn"));
const PrivacyPolicyEn = lazy(() => import("./pages/PrivacyPolicyEn"));

const BASE_URL = "https://eliteyachtdubai.com/ar";
const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const LOCAL_ID = `${BASE_URL}/#localbusiness`;

const GlobalSchema = memo(function GlobalSchema() {
  const graph = [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      "name": "إيليت يخوت دبي™",
      "alternateName": ["إيليت يخوت", "Elite Yachts Dubai"],
      "url": "https://eliteyachtdubai.com",
      "logo": "https://eliteyachtdubai.com/images/logo.png",
      "telephone": "+971569006603",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "sameAs": ["https://www.instagram.com/eliteyachtdubai/"]
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      "url": BASE_URL,
      "name": "إيليت يخوت دبي™",
      "inLanguage": "ar-AE",
      "publisher": { "@id": ORG_ID }
    },
    {
      "@type": "LocalBusiness",
      "@id": LOCAL_ID,
      "name": "إيليت يخوت دبي™",
      "url": BASE_URL,
      "image": "https://eliteyachtdubai.com/images/hero/hero-bg-1600.webp",
      "telephone": "+971569006603",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "areaServed": { "@type": "AdministrativeArea", "name": "Dubai" },
      "priceRange": "$$$$",
      "serviceType": "تأجير يخوت فاخرة في دبي مارينا"
    }
  ];
  return <Schema data={graph} />;
});

function NotFoundEn() {
  return (
    <main dir="rtl" lang="ar" className="w-full bg-white text-black">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20 text-center">
        <p className="text-[12px] tracking-[0.35em] text-black/55 uppercase">404</p>
        <h1 className="mt-3 text-[22px] sm:text-[30px] font-semibold">
          الصفحة غير موجودة
        </h1>
        <p className="mt-4 text-black/65 leading-relaxed">
          الرابط الذي فتحته غير صحيح أو تم نقله.
        </p>
        <a
          href="/ar"
          className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 border border-black bg-black text-white"
        >
          العودة إلى الرئيسية
        </a>
      </div>
    </main>
  );
}

export default function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowFooter(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-white text-black flex flex-col">
      <GlobalSchema />
      <Navbar />
      <ScrollToTop />

      <main className="pt-15 flex-1">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomeEn />} />

            <Route path="/yachts" element={<YachtsEn />} />
            <Route path="/:slug" element={<YachtDetailsEn />} />

            <Route path="/services" element={<ServicesEn />} />
            <Route path="/water-sports" element={<WaterSportsEn />} />
            <Route path="/corporate-events" element={<CorporateEn />} />

            <Route path="/offers" element={<PackagesEn />} />
            <Route path="/packages" element={<OffersPackagesEn />} />

            <Route path="/about-us" element={<AboutEn />} />
            <Route path="/team" element={<TeamEn />} />
            <Route path="/guidelines" element={<FAQEn />} />
            <Route path="/owner" element={<OwnerEn />} />

            <Route path="/best-yacht-company" element={<BestYachtCharterDubaiEn />} />
            <Route path="/contact-us" element={<ContactEn />} />

            <Route path="/blogs" element={<BlogsPageEn />} />
            <Route path="/blogs/:slug" element={<BlogDetailsPageEn />} />

            <Route path="/terms-and-conditions" element={<TermsEn />} />
            <Route path="/refund-policy" element={<RefundPolicyEn />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyEn />} />

            <Route path="/sitemap" element={<SitemapEn />} />


            <Route path="*" element={<NotFoundEn />} />
          </Routes>

        </Suspense>
      </main>

      <Suspense fallback={null}>
        {showFooter ? <Footer /> : null}
      </Suspense>
    </div>
  );
}
