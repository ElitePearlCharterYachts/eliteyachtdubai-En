import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import Schema from "../components/Schema";
import CTASection from "../components/CTASection";

export default function OwnerEn() {
  const { pathname } = useLocation();

  const BASE_URL = "https://eliteyachtdubai.com";
  const CANONICAL = `${BASE_URL}${pathname || "/owner"}`;
  const ogImage = `${BASE_URL}/images/og/owner.webp`;

  const title = "Wiam Abdullah | Founder of Elite Yachts™ Dubai | Elite Yacht Dubai";
  const description =
    "Meet Wiam Abdullah, Founder and owner within Elite Yachts Group: extensive experience in marine operations, luxury hospitality, and organizing VIP yacht trips in Dubai Marina and corporate events.";
  const keywords = [
    "Elite Yachts Dubai owner",
    "Wiam Abdullah",
    "Elite Yachts Group",
    "Elite Yacht Dubai",
    "Dubai Marina yacht rental",
    "VIP yacht rental Dubai",
    "yacht event planning Dubai",
    "Luxury Yacht Rental Dubai",
    "Dubai Marina Yacht Charter",
  ].join(", ");

  const schemaData = useMemo(() => {
    const breadcrumb = {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Owner", item: CANONICAL },
      ],
    };

    const organization = {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Elite Yachts Dubai",
      alternateName: ["Elite Yacht Dubai", "Elite Yachts Dubai", "إيليت يخوت"],
      url: BASE_URL,
      areaServed: "AE",
      sameAs: [],
    };

    const person = {
      "@type": "Person",
      "@id": `${CANONICAL}#person`,
      name: "Wiam Abdullah",
      jobTitle: "CEO",
      worksFor: { "@id": `${BASE_URL}/#organization` },
      image: `${BASE_URL}/images/about/wiam.webp`,
      url: CANONICAL,
      description:
        "Experienced in marine operations, luxury hospitality, and organizing VIP yacht trips and events in Dubai and internationally.",
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
        about: [{ "@id": `${BASE_URL}/#organization` }, { "@id": `${CANONICAL}#person` }],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/banners/hero.png`,
        },
        breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
        mainEntity: { "@id": `${CANONICAL}#person` },
      },
      organization,
      breadcrumb,
      person,
    ];
  }, [BASE_URL, CANONICAL, title, description]);

  return (
    <div dir="ltr" lang="en" className="w-full bg-white text-slate-900">
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

      <section className="relative w-full min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/en/images/banners/hero.png"
            className="w-full h-full object-cover object-[50%_70%]"
            alt="Elite Yacht Dubai"
            loading="eager"
            decoding="async"
            draggable="false"
          />

          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 15%, rgba(59,130,246,0.10), transparent 55%)",
            }}
          />
        </div>

        <div className="relative w-full">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 pb-14 pt-28">
            <div
              className="
                inline-block
                rounded-3xl
                border border-white/30
                bg-white/20 backdrop-blur-lg
                px-8 sm:px-10 py-8
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              "
            >
              <p className="text-[11px] tracking-[0.35em] text-white font-bold uppercase">
                Company Owner
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold tracking-wide">
                Wiam Abdullah
              </h1>

              <p className="mt-2 text-slate-200 leading-relaxed max-w-3xl">
                Founder
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    cursor-pointer
                    inline-flex items-center justify-center gap-3
                    rounded-full px-8 py-3 text-sm
                    border border-white/40
                    bg-white/70 backdrop-blur-md
                    text-slate-900
                    shadow-[0_18px_50px_rgba(2,6,23,0.12)]
                    transition-all duration-300
                    hover:bg-white
                    hover:shadow-[0_24px_70px_rgba(2,6,23,0.16)]
                    overflow-hidden relative
                  "
                  aria-label="WhatsApp"
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition duration-700"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 40%, rgba(2,6,23,0.06) 50%, transparent 60%)",
                    }}
                  />
                  <span className="relative inline-flex items-center gap-3">
                    <i className="fa-brands fa-whatsapp text-[16px] text-emerald-600" />
                    <span className="relative font-semibold">WhatsApp</span>
                  </span>
                </a>

                <a
                  href="tel:+971569006603"
                  className="
                    cursor-pointer
                    inline-flex items-center justify-center gap-3
                    rounded-full px-8 py-3 text-sm
                    border border-white/40
                    bg-white/65 backdrop-blur-md
                    text-slate-900
                    shadow-[0_18px_50px_rgba(2,6,23,0.10)]
                    transition-all duration-300
                    hover:bg-white
                    hover:shadow-[0_24px_70px_rgba(2,6,23,0.14)]
                    overflow-hidden relative
                  "
                  aria-label="Call now"
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition duration-700"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 40%, rgba(2,6,23,0.06) 50%, transparent 60%)",
                    }}
                  />
                  <span className="relative inline-flex items-center gap-3">
                    <i className="fa-solid fa-phone text-[14px] text-sky-700" />
                    <span className="relative font-semibold">Call Now</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-10 items-start">
            <div
              className="
                relative rounded-2xl bg-white
                border border-slate-200
                overflow-hidden
                shadow-[0_24px_70px_rgba(2,6,23,0.10)]
              "
            >
              <div className="relative">
                <img
                  src="/en/images/about/wiam.webp"
                  alt="Wiam Abdullah"
                  className="w-full h-[520px] object-cover"
                  loading="lazy"
                  draggable="false"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/65 via-white/10 to-transparent" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-55"
                  style={{
                    background:
                      "radial-gradient(circle at 65% 12%, rgba(2,6,23,0.08), transparent 55%)",
                  }}
                />

                <div className="absolute left-6 bottom-6 right-6">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <p className="text-[11px] tracking-[0.35em] text-slate-600 uppercase">
                        Elite Yachts Group
                      </p>
                      <p className="mt-2 text-lg font-semibold tracking-wide text-slate-900">
                        Founder
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <InfoChip icon="fa-solid fa-ship" label="Marine" value="Operations" />
                  <InfoChip icon="fa-solid fa-handshake" label="Luxury" value="Hospitality" />
                  <InfoChip icon="fa-solid fa-crown" label="Elite" value="Charter" />
                </div>

                <div className="mt-5 h-px w-full bg-slate-200" />

                <p className="mt-5 text-slate-700 leading-relaxed text-sm">
                  Wiam Abdullah is the owner and founder behind Elite Pearl Yacht Charter, focused on delivering
                  exceptional service and premium sea experiences for clients seeking memorable moments in the Arabian Gulf,
                  with high standards of professionalism and privacy.
                </p>
              </div>

              <div className="pointer-events-none absolute -left-2 -bottom-2 h-full w-full rounded-2xl border border-slate-200/60" />
            </div>

            <div className="space-y-6">
              <SectionHeader
                eyebrow="CAREER JOURNEY"
                title="From hands-on marine experience to Elite yacht charters"
              />

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.08)]">
                <p className="text-slate-700 leading-relaxed">
                  Wiam began his career in the marine sector with a clear vision: to build a premium brand specializing in
                  <strong className="font-semibold"> yacht rental in Dubai</strong>, with a strong focus on quality, organization,
                  and customer experience. At the start, the fleet included
                  <strong className="font-semibold"> only 5 yachts</strong>, managed closely to build trust and set a high service standard
                  in the luxury yacht market.
                </p>

                <p className="mt-4 text-slate-700 leading-relaxed">
                  Today, after years of continuous improvement and strategic partnerships,
                  <strong className="font-semibold"> Elite Yachts Group</strong> has expanded to manage
                  <strong className="font-semibold"> over 50 luxury yachts</strong>. The group is known for organizing super & mega yacht trips,
                  corporate events, and private charters with
                  <strong className="font-semibold"> VIP service</strong>, delivering refined cruising experiences in Dubai for local and international clients.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HighlightCard
                  icon="fa-solid fa-award"
                  title="Notable Clients"
                  text="Client list includes brands such as Tag Heuer, Etihad Airways, and Burjeel Hospital."
                />
                <HighlightCard
                  icon="fa-solid fa-star"
                  title="VIP Guests"
                  text="Served high-profile guests, including celebrities such as Nicki Minaj, Jennifer Lopez, Vin Diesel, and Will Smith."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HighlightCard
                  icon="fa-solid fa-earth-americas"
                  title="International Charters"
                  text="Organized super & mega yacht trips and events in destinations like Mykonos, Nice (South of France), Marbella (Spain), and Montenegro."
                />
                <HighlightCard
                  icon="fa-solid fa-flag-checkered"
                  title="Formula 1 Experience"
                  text="Recognized as one of the leading organizers for the largest yachts during Formula 1 Grand Prix events."
                />
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.08)]">
                <p className="text-[11px] tracking-[0.35em] text-slate-600 uppercase">
                  The Elite Standard
                </p>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Luxury yacht rental in Dubai is built on trust, consistency, and professionalism — every detail should feel “Elite”.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/yachts"
                    className="
                      cursor-pointer
                      inline-flex items-center justify-center gap-2
                      rounded-full px-8 py-3
                      border border-slate-200
                      bg-slate-900 text-white
                      shadow-[0_18px_50px_rgba(2,6,23,0.18)]
                      transition-all duration-300
                      hover:bg-slate-800
                      hover:shadow-[0_24px_70px_rgba(2,6,23,0.22)]
                    "
                  >
                    <span className="relative font-semibold">Explore the Fleet</span>
                    <i className="fa-solid fa-arrow-right relative text-white" />
                  </a>

                  <a
                    href="/contact-us"
                    className="
                      cursor-pointer
                      inline-flex items-center justify-center gap-2
                      rounded-full px-8 py-3
                      border border-slate-200
                      bg-white text-slate-900
                      transition-all duration-300
                      hover:bg-slate-50
                      hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)]
                    "
                  >
                    <span className="font-semibold">Contact the Team</span>
                    <i className="fa-solid fa-envelope text-sky-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <SectionHeader
              eyebrow="ELITE YACHTS DUBAI"
              title="Luxury on the water, led with professionalism"
            />

            <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.08)]">
              <p className="text-slate-700 leading-relaxed">
                Elite Yachts delivers luxury yacht rental in Dubai with a focus on premium service, reliable operations,
                and memorable experiences — ideal for private yacht charters, corporate events, celebrations, and VIP yacht rentals in Dubai.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Luxury Yacht Rental Dubai",
                  "Yacht Charter Dubai",
                  "Dubai Marina Yacht Rental",
                  "Private Yacht Dubai",
                  "VIP Yacht Rental Dubai",
                ].map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-slate-600"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="contact" />
    </div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.35em] text-slate-600 uppercase">
        {eyebrow}
      </p>

      <div className="mt-3 h-px w-full bg-slate-200" />
      <div className="mt-2 h-[2px] w-20 rounded-full bg-slate-900/10" />

      <h2 className="mt-5 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-slate-900">
        {title}
      </h2>
    </div>
  );
}

function InfoChip({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <i className={`${icon} text-slate-700`} />
        <div className="min-w-0">
          <p className="text-[10px] tracking-[0.28em] uppercase text-slate-500">
            {label}
          </p>
          <p className="text-sm text-slate-800 tracking-wide font-semibold">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function HighlightCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.08)]">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
          <i className={`${icon} text-slate-700`} />
        </span>

        <div className="min-w-0">
          <p className="text-[11px] tracking-[0.3em] text-slate-600 uppercase">
            {title}
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}
