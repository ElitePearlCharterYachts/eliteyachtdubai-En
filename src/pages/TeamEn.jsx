import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import Schema from "../components/Schema";
import LicenseTrustSectionAr from "../components/LicenseTrustSectionAr";
import team from "../data/teamElite.json";

const ACCENT = "#111827";

const TABS = [
  { key: "management", label: "Management" },
  { key: "marketing", label: "Marketing" },
  { key: "clientRelations", label: "Client Relations" },
  { key: "captains", label: "Captains" },
  { key: "crew", label: "Crew" },
  { key: "stewards", label: "Stewards" },
];

const MALE_AVATAR = "/en/images/team/men.webp";
const FEMALE_AVATAR = "/en/images/team/lady.avif";

function Pill({ children }) {
  return (
    <span
      className="
        inline-flex items-center
        rounded-full
        border border-black/10
        bg-white/85
        px-3 py-1
        text-[11px] sm:text-xs
        text-slate-700
        shadow-[0_10px_22px_rgba(15,23,42,0.06)]
      "
    >
      {children}
    </span>
  );
}

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
        {eyebrow}
      </p>

      <div className="mx-auto mt-3 mb-4 w-[72%]">
        <div className="h-px mx-auto w-44 sm:w-56 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
        <div
          className="mx-auto mt-2 h-[3px] w-14 rounded-full"
          style={{ background: ACCENT }}
        />
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.14em] text-slate-900">
        {title}
      </h2>

      {desc ? (
        <p className="mt-4 text-slate-600 leading-relaxed">{desc}</p>
      ) : null}
    </div>
  );
}

function getAvatar(member) {
  if (member?.photo) return member.photo;
  return member?.gender === "female" ? FEMALE_AVATAR : MALE_AVATAR;
}

function TeamCard({ member }) {
  const exp =
    member?.yearsExperience != null && String(member.yearsExperience).trim() !== ""
      ? `${member.yearsExperience}+ yrs experience`
      : "Strong experience";

  return (
    <article
      className="
        group relative
        overflow-hidden
        rounded-3xl
        border border-black/10
        bg-white
        shadow-[0_22px_70px_rgba(15,23,42,0.10)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_28px_78px_rgba(0,0,0,0.14)]
        hover:border-black/20
      "
    >
      <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden bg-white">
        <img
          src={getAvatar(member)}
          alt={member?.name || "Elite team member"}
          className="
            h-full w-full object-contain
            transition-transform duration-[1200ms]
            group-hover:scale-[1.06]
          "
          loading="lazy"
          decoding="async"
          draggable="false"
          onError={(e) => {
            e.currentTarget.src = MALE_AVATAR;
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,0,0,0.06),transparent_58%)]" />

        <div className="absolute top-4 left-4">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-black/10
              bg-white/88 backdrop-blur
              px-3 py-1.5
              text-[10px] tracking-[0.28em] uppercase
              text-slate-700
              shadow-[0_14px_30px_rgba(15,23,42,0.12)]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-black/60" />
            Elite Team™
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-7 text-left">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 truncate">
              {member?.name || "Team Member"}
            </h3>

            <p className="mt-1 text-sm text-slate-700">{member?.position || "—"}</p>

            <div className="mt-3 flex flex-wrap gap-2 justify-start">
              <Pill>{exp}</Pill>
              {member?.details ? <Pill>{member.details}</Pill> : null}
            </div>
          </div>

          <span
            className="
              shrink-0
              inline-flex h-11 w-11 items-center justify-center
              rounded-full
              border border-black/10
              bg-white
              shadow-[0_14px_30px_rgba(15,23,42,0.10)]
            "
            title="Elite Standard"
            aria-label="Elite Standard"
          >
            <i className="fa-solid fa-star text-black/60" />
          </span>
        </div>

        <div className="mt-6 h-px w-full bg-black/10" />

        <p className="mt-4 text-slate-600 leading-relaxed text-sm">
          Precise service, fast coordination, and luxury standards — on every trip.
        </p>
      </div>

      <div
        className="
          pointer-events-none absolute bottom-0 left-0 right-0 h-[3px]
          scale-x-0 origin-center
          transition-transform duration-500
          group-hover:scale-x-100
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,0,0,0.45), transparent)",
        }}
      />
    </article>
  );
}

export default function TeamEn() {
  const { pathname } = useLocation();

  const BASE_URL = "https://eliteyachtdubai.com";
  const safePath = pathname || "/team";
  const CANONICAL = `${BASE_URL}${safePath}`;
  const ogImage = `${BASE_URL}/images/og/team.webp`;

  const title =
    "Elite Yacht Dubai™ Team | VIP Crew, Professional Captains & Dubai Marina Service";
  const description =
    "Meet the Elite Yacht Dubai™ team: management, client relations, marketing, captains, crew and stewards delivering VIP standards. Fast coordination, precise service, and a luxury Dubai Marina experience.";
  const keywords = [
    "Elite Yacht Dubai team",
    "Dubai Marina yacht crew",
    "yacht captain Dubai",
    "VIP yacht crew Dubai",
    "luxury yacht charter team Dubai",
    "Elite Yachts Dubai staff",
    "Dubai yacht stewards",
    "professional yacht crew Dubai",
  ].join(", ");

  const [active, setActive] = useState("marketing");
  const members = team?.[active] || [];

  const schemaData = useMemo(() => {
    const all = Object.entries(team || {})
      .flatMap(([key, arr]) => (arr || []).map((m) => ({ ...m, _group: key })))
      .filter(Boolean);

    const itemList = all.slice(0, 250).map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: m?.name || "Elite Team Member",
      description: [m?.position, m?._group].filter(Boolean).join(" • "),
      url: CANONICAL,
    }));

    const breadcrumb = {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Team", item: CANONICAL },
      ],
    };

    const faq = {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the Elite Yacht Dubai™ team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our team includes management, client relations, marketing, captains, crew, and stewards to deliver a VIP experience from booking to the end of your trip.",
          },
        },
        {
          "@type": "Question",
          name: "Is the crew trained on safety standards?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We follow safety procedures and provide the required equipment and briefings to ensure a safe and comfortable trip.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact the team quickly to book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach us via WhatsApp or phone to confirm availability quickly and coordinate your trip details.",
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
        mainEntity: { "@id": `${CANONICAL}#teamlist` },
      },
      {
        "@type": "CollectionPage",
        "@id": `${CANONICAL}#teamlist`,
        url: CANONICAL,
        name: "Elite Yacht Dubai™ Team",
        inLanguage: "en-AE",
        mainEntity: {
          "@type": "ItemList",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: all.length,
          itemListElement: itemList,
        },
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Elite Yacht Dubai",
        alternateName: ["Elite Yacht Dubai™", "Elite Yachts Dubai™", "Elite Yacht Dubai"],
        url: BASE_URL,
        areaServed: "AE",
        sameAs: [],
      },
      breadcrumb,
      faq,
    ];
  }, [BASE_URL, CANONICAL, title, description]);

  return (
    <div dir="ltr" lang="en" className="w-full bg-white text-slate-900">
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

      <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/en/images/banners/team.png"
            alt="Elite Yacht Dubai™ Team"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            draggable="false"
            onError={(e) => {
              e.currentTarget.src = "/images/banners/packages.webp";
            }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),rgba(255,255,255,0.18))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(0,0,0,0.10),transparent_58%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.38),transparent_62%)]" />
        </div>

        <div className="relative w-full">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
            <div
              className="
                max-w-4xl
                rounded-3xl
                border border-white/35
                bg-white/58 backdrop-blur-md
                shadow-[0_22px_70px_rgba(15,23,42,0.18)]
                p-6 sm:p-8 md:p-10
              "
            >
              <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
                Elite Yacht Dubai™
              </p>

              <div className="mt-4 h-px w-full bg-black/10" />

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[0.12em] text-slate-900 mt-5">
                100+ Trained Professionals
              </h1>

              <p className="mt-3 text-lg sm:text-xl font-semibold text-slate-800 tracking-[0.12em]">
                Meet Our Team
              </p>

              <p className="mt-5 text-slate-700 leading-relaxed max-w-2xl">
                From management and marketing to client relations, captains, crew and stewards —
                everyone works with the same precision and luxury standards.
              </p>

              <div className="mt-7 text-[11px] tracking-[0.32em] uppercase text-slate-600">
                Dubai Marina • VIP Service • Fast Confirmation
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col items-center gap-6">
            <SectionHeader
              eyebrow="ELITE CREW"
              title="The People Behind Your Perfect Trip"
              desc="Choose a department to explore the team."
            />

            <div
              className="
                inline-flex flex-wrap items-center justify-center gap-2
                rounded-full border border-black/10 bg-white
                p-2
                shadow-[0_16px_40px_rgba(15,23,42,0.10)]
              "
              role="tablist"
              aria-label="Team departments"
            >
              {TABS.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActive(t.key)}
                  className={[
                    "rounded-full px-5 py-2 text-sm transition",
                    active === t.key
                      ? "bg-black text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)]"
                      : "bg-white text-slate-700 hover:bg-black/5",
                  ].join(" ")}
                  role="tab"
                  aria-selected={active === t.key}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div
            className="
              mt-12
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
              justify-items-center
            "
          >
            {members.map((m) => (
              <div key={`${m.name}-${m.position}`} className="w-full max-w-[360px]">
                <TeamCard member={m} />
              </div>
            ))}
          </div>

          {/* Premium strip (NO GOLD) */}
          <div className="mt-14 rounded-3xl border border-black/10 bg-white p-8 sm:p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.10)] overflow-hidden relative">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]" />

            <p className="relative text-[15px] mb-2 tracking-[0.35em] uppercase text-slate-600">
              ELITE STANDARD
            </p>

            <h3 className="relative text-xl sm:text-2xl font-semibold tracking-[0.14em] text-slate-900">
              Precision • Luxury • Excellence
            </h3>

            <p className="relative mt-4 text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Every trip follows consistent standards: professional coordination, attention to detail,
              and service that puts the guest first — because luxury starts with service.
            </p>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-2">
              <Pill>VIP Experience</Pill>
              <Pill>Fast Coordination</Pill>
              <Pill>Luxury Standards</Pill>
              <Pill>Safety First</Pill>
            </div>
          </div>
        </div>
      </section>

      <LicenseTrustSectionAr />
    </div>
  );
}
