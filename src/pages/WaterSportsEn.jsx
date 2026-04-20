import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReviewsSlider from "../components/ReviewsSlider";
import YachtsSection from "../components/YachtsSection";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

const WHATSAPP =
  "https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85";
const PHONE = "tel:+971569006603";
const EMAIL =
  "mailto:info@eliteyachtrental.com?subject=%D8%AD%D8%AC%D8%B2%20%D8%B1%D9%8A%D8%A7%D8%B6%D8%A7%D8%AA%20%D9%85%D8%A7%D8%A6%D9%8A%D8%A9%20%D9%81%D9%8A%20%D8%AF%D8%A8%D9%8A";

const BTN = `
  rounded-full py-2 text-[12px]
  text-black text-center
  border border-black/15
  bg-gradient-to-b from-black/5 via-black/[0.03] to-white
  transition-all duration-300
  hover:from-black/10 hover:via-black/[0.06] hover:to-white
  hover:border-black/30
  hover:shadow-[0_10px_25px_rgba(0,0,0,0.10)]
`;

const BRAND_LOGO = "/en/logo.svg";

function EliteUnderline() {
  return (
    <div className="relative mx-auto mt-3 mb-4 h-[10px] w-[72%]">
      <div className="h-px mx-auto w-56 bg-gradient-to-r from-transparent via-black/60 to-transparent" />
    </div>
  );
}

function SectionHead({ eyebrow = "ELITE YACHTS", title, subtitle }) {
  return (
    <div className="text-center">
      <p className="text-[11px] tracking-[0.35em] opacity-80 uppercase text-black/70">
        {eyebrow}
      </p>
      <EliteUnderline />
      <h2 className="text-[22px] sm:text-[30px] font-bold uppercase tracking-[0.22em] opacity-95 text-black">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl mx-auto text-sm sm:text-[15px] leading-relaxed text-black/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function GlowPanel({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-2xl bg-white ring-1 ring-black/10 ${className}`}
      style={{ boxShadow: "0 18px 50px rgba(15,23,42,0.10)" }}
    >
      {children}
    </div>
  );
}

function Chip({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-[12px] text-black/85">
      <i className={icon} />
      <strong className="font-semibold">{text}</strong>
    </span>
  );
}

function IconCard({ icon, title, desc }) {
  return (
    <GlowPanel className="p-6">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 rounded-full bg-black/5 ring-1 ring-black/10 flex items-center justify-center">
          <i className={`${icon} text-black/80`} />
        </div>
        <div className="text-left">
          <h3 className="text-[15px] font-bold uppercase tracking-[0.22em] text-black/90">
            {title}
          </h3>
          <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-black/70">
            {desc}
          </p>
        </div>
      </div>
    </GlowPanel>
  );
}

function SportCard({ title, icon, points, tag, img, alt }) {
  return (
    <GlowPanel className="overflow-hidden">
      <div className="relative">
        <img
          src={img}
          alt={alt}
          className="h-[250px] w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/70" />

        <div className="absolute top-3 right-3">
          <div className="inline-flex items-center justify-center rounded-full border border-white/40 bg-[#FDFDFD] backdrop-blur px-2.5 py-2 shadow-[0_14px_34px_rgba(0,0,0,0.12)]">
            <img
              src={BRAND_LOGO}
              alt="Elite Yachts Dubai"
              className="h-5 w-5 object-contain"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </div>
        </div>

        {tag ? (
          <div className="absolute bottom-3 right-3">
            <span className="inline-flex rounded-full border border-black/15 bg-white/90 px-4 py-1.5 text-[11px] tracking-[0.25em] uppercase text-black/70 shadow-[0_12px_28px_rgba(15,23,42,0.10)]">
              {tag}
            </span>
          </div>
        ) : null}
      </div>

      <div className="relative p-6 text-left">
        <div className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-black/[0.06] blur-3xl" />

        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 shrink-0 rounded-full bg-black/5 ring-1 ring-black/10 flex items-center justify-center">
              <i className={`${icon} text-black/80`} />
            </div>
            <div className="flex-1">
              <h3 className="text-[15px] font-bold uppercase tracking-[0.22em] text-black/90">
                {title}
              </h3>
              <p className="mt-2 text-[12px] sm:text-[13px] leading-relaxed text-black/65">
                A perfect add-on with <strong className="font-semibold">yacht rental in Dubai</strong>, especially{" "}
                <strong className="font-semibold">Dubai Marina</strong> trips.
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-black/70">
            {points.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/50" />
                <p className="leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a className={BTN} href={PHONE} aria-label={`Call now to book ${title}`}>
              <i className="fa-solid fa-phone mr-2" />
              Call Now
            </a>
            <a
              className={BTN}
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label={`WhatsApp to book ${title}`}
            >
              <i className="fa-brands fa-whatsapp mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </GlowPanel>
  );
}

function FAQItem({ q, a }) {
  return (
    <GlowPanel className="p-6 text-left">
      <h4 className="text-[13px] font-bold uppercase tracking-[0.22em] text-black/90">
        {q}
      </h4>
      <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-black/70">
        {a}
      </p>
    </GlowPanel>
  );
}

export default function WaterSportsEn() {
  const [yachts, setYachts] = useState([]);
  const { pathname } = useLocation();

  const BASE_URL = "https://eliteyachtdubai.com";
  const CANONICAL = `${BASE_URL}${pathname}`;
  const ogImage = `${BASE_URL}/images/og/watersports.webp`;

  const title =
    "Water Sports in Dubai Marina | Jet Ski, Seabob & Wakeboard with Yacht Rental Dubai";
  const description =
    "Upgrade your yacht day in Dubai with water sports: Jet Ski, Seabob, Wakeboard, Banana Ride, Donut Ride, and Paddle Board. VIP coordination, safety gear, and fast booking via WhatsApp or call.";
  const keywords = [
    "Water Sports Dubai",
    "Dubai Marina Water Sports",
    "Jet Ski Dubai",
    "Seabob Dubai",
    "Wakeboard Dubai",
    "Banana Ride Dubai",
    "Donut Ride Dubai",
    "Yacht Rental Dubai",
    "Dubai Marina Yacht Charter",
    "Water Sports Dubai Yacht",
  ].join(", ");

  const sports = useMemo(
    () => [
      {
        title: "Jet Ski",
        icon: "fa-solid fa-person-rays",
        tag: "Most Popular",
        img: "/en/images/services/jet-ski.webp",
        alt: "Jet Ski in Dubai Marina with yacht rental Dubai – water sports Dubai",
        points: [
          "High-speed fun with Dubai skyline views",
          "Perfect for groups taking turns",
          "Great add-on for 2–4 hour bookings",
        ],
      },
      {
        title: "Seabob",
        icon: "fa-solid fa-fish-fins",
        tag: "Luxury & Smooth",
        img: "/en/images/services/seabob.webp",
        alt: "Seabob Dubai – luxury water sports with a Dubai Marina yacht trip",
        points: [
          "Luxury underwater glide experience",
          "Easy to learn with cinematic video results",
          "Ideal for calm moments on the water",
        ],
      },
      {
        title: "Wakeboard",
        icon: "fa-solid fa-person-snowboarding",
        tag: "Adrenaline",
        img: "/en/images/services/wakeboard.webp",
        alt: "Wakeboard Dubai – water sports Dubai with fast yacht booking",
        points: [
          "Great for active guests and challenge lovers",
          "Perfect for birthday groups",
          "We provide guidance and safety requirements",
        ],
      },
      {
        title: "Banana Ride",
        icon: "fa-solid fa-people-group",
        tag: "Group Fun",
        img: "/en/images/services/banana-ride.webp",
        alt: "Banana Ride Dubai – fun group activity with Dubai Marina yacht rental",
        points: [
          "A hilarious, high-energy group activity",
          "Great for families and friends",
          "Perfect for quick bursts of excitement",
        ],
      },
      {
        title: "Donut Ride",
        icon: "fa-solid fa-circle-nodes",
        tag: "Fast & Fun",
        img: "/en/images/services/donut-ride.webp",
        alt: "Donut Ride Dubai – water sports in Dubai Marina with a yacht",
        points: [
          "Thrilling tow ride with waves and turns",
          "Best for groups and celebrations",
          "Quick setup, instant fun",
        ],
      },
      {
        title: "Paddle Board",
        icon: "fa-solid fa-person-walking",
        tag: "Relax",
        img: "/en/images/services/paddle.webp",
        alt: "Paddle board Dubai – calm experience during Dubai Marina yacht trips",
        points: [
          "A calm activity with scenic routes",
          "Great for sunrise / sunset",
          "Perfect for couples and families",
        ],
      },
    ],
    []
  );

  const faq = useMemo(
    () => [
      {
        q: "Can water sports be added to any yacht?",
        a: "Most yachts support add-ons. We’ll confirm compatibility based on the yacht, route, and booking duration to ensure a safe, smooth experience.",
      },
      {
        q: "Are water sports safe for beginners?",
        a: "Yes. We provide quick instructions and safety essentials before the activity. Tell us your group’s level and we’ll recommend the best options.",
      },
      {
        q: "What’s the best time for water sports in Dubai?",
        a: "Usually during calmer sea hours and before sunset. We’ll advise the best timing based on your route and sea conditions.",
      },
      {
        q: "Can I combine more than one activity on the same trip?",
        a: "Yes. Many guests combine Jet Ski + Seabob, or add a group activity (Banana/Donut) to maximize fun.",
      },
    ],
    []
  );

  const schemaData = useMemo(() => {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    const itemList = {
      "@type": "ItemList",
      "@id": `${CANONICAL}#services`,
      itemListElement: sports.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: CANONICAL,
      })),
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
        mainEntity: [{ "@id": `${CANONICAL}#services` }, { "@id": `${CANONICAL}#faq` }],
      },
      itemList,
      faqSchema,
    ];
  }, [CANONICAL, BASE_URL, title, description, sports, faq]);

  useEffect(() => {
    fetch("/data/yachts.json")
      .then((r) => r.json())
      .then(setYachts)
      .catch(console.error);
  }, []);

  const featured = useMemo(() => yachts.slice(0, 6), [yachts]);

  return (
    <div dir="ltr" lang="en" className="w-full bg-white text-black">
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

      <section
        className="relative w-full"
        style={{
          backgroundImage: "url('/en/images/banners/watersports.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/52 to-white" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-14">
          <div className="max-w-3xl text-left">
            <p className="text-[11px] tracking-[0.35em] opacity-80 uppercase text-black/70">
              ELITE YACHTS • WATER SPORTS IN DUBAI MARINA
            </p>

            <h1 className="mt-3 text-[28px] sm:text-[52px] font-bold uppercase tracking-[0.22em] opacity-95 leading-[1.05] text-black">
              Water Sports
              <br className="hidden sm:block" />
              Experience
            </h1>

            <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-black/75">
              Add a dose of excitement to your yacht day with{" "}
              <strong className="font-semibold">the best water sports in Dubai</strong> — Jet Ski,
              Seabob, Wakeboard, Banana Ride and more. We handle setup and safety so you enjoy a smooth,
              luxury experience across{" "}
              <strong className="font-semibold">Dubai Marina</strong> routes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-start">
              <Chip icon="fa-solid fa-jet-fighter-up" text="Jet Ski Dubai" />
              <Chip icon="fa-solid fa-person-swimming" text="Seabob Dubai" />
              <Chip icon="fa-solid fa-water" text="Wakeboard" />
              <Chip icon="fa-solid fa-life-ring" text="Safety First" />
            </div>

            <div className="mt-7 flex flex-wrap gap-3 justify-start">
              <a className={BTN + " px-7"} href={WHATSAPP} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp mr-2" />
                Book Water Sports
              </a>
              <a className={BTN + " px-7"} href={PHONE}>
                <i className="fa-solid fa-phone mr-2" />
                Call Now
              </a>
              <a className={BTN + " px-7"} href={EMAIL}>
                <i className="fa-regular fa-envelope mr-2" />
                Email
              </a>
            </div>

            <div className="mt-8">
              <span className="inline-flex rounded-full border border-black/15 bg-black/[0.03] px-4 py-2 text-[11px] tracking-[0.25em] uppercase text-black/70">
                Available as an add-on to any yacht booking
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <SectionHead
            title="Choose the right water sport"
            subtitle="Pick one activity or combine multiple — we’ll recommend what fits best based on guests, route, and timing. Perfect with Dubai Marina yacht rental."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sports.map((s) => (
              <SportCard
                key={s.title}
                title={s.title}
                icon={s.icon}
                tag={s.tag}
                img={s.img}
                alt={s.alt}
                points={s.points}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a className={BTN + " px-7"} href={WHATSAPP} target="_blank" rel="noreferrer">
              Get a Quote for Water Sports
            </a>
            <a className={BTN + " px-7"} href={PHONE}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-black/10">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <SectionHead
            title="What to expect"
            subtitle="Simple, safe, and premium — we handle the setup so your Dubai Marina yacht day stays smooth."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <IconCard
              icon="fa-solid fa-life-ring"
              title="Safety & Briefing"
              desc="We provide safety essentials and a quick briefing before the activity, with beginner-friendly guidance."
            />
            <IconCard
              icon="fa-solid fa-clock"
              title="Smooth Timing"
              desc="We schedule the best timing during your trip (route + sea conditions) to maximize fun."
            />
            <IconCard
              icon="fa-solid fa-camera"
              title="Great Content Moments"
              desc="Perfect for photos and videos — especially near landmarks and Dubai Marina skyline routes."
            />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a className={BTN + " px-7"} href={WHATSAPP} target="_blank" rel="noreferrer">
              Ask what fits your yacht
            </a>
            <Link className={BTN + " px-7"} to="/elite-yachts-fleet">
              View the Fleet
            </Link>
          </div>
        </div>
      </section>

      <YachtsSection />

      <ReviewsSlider />

      <section className="py-14" id="faq">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <SectionHead
            title="FAQ"
            subtitle="Quick answers — message or call us for exact availability and pricing."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faq.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a className={BTN + " px-7"} href={WHATSAPP} target="_blank" rel="noreferrer">
              Ask on WhatsApp
            </a>
            <a className={BTN + " px-7"} href={PHONE}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <GlowPanel className="p-10 text-center overflow-hidden">
            <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-black/[0.06] blur-3xl" />
            <div className="relative">
              <p className="text-[11px] tracking-[0.35em] opacity-80 uppercase text-black/70">
                ELITE YACHTS
              </p>
              <EliteUnderline />
              <h3 className="text-[18px] sm:text-[28px] font-bold uppercase tracking-[0.22em] opacity-95 text-black">
                Ready for Water Sports?
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-black/70 max-w-2xl mx-auto">
                Tell us the yacht name (or guest count), date, and the activities you want — we’ll send you a great offer fast.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a className={BTN + " px-7"} href={WHATSAPP} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-whatsapp mr-2" />
                  WhatsApp
                </a>
                <a className={BTN + " px-7"} href={PHONE}>
                  <i className="fa-solid fa-phone mr-2" />
                  Call
                </a>
                <a className={BTN + " px-7"} href={EMAIL}>
                  <i className="fa-regular fa-envelope mr-2" />
                  Email
                </a>
              </div>

              <div className="mt-4 text-[12px] text-black/55">
                <span dir="ltr" className="font-semibold">
                  +971 56 900 6603
                </span>
              </div>
            </div>
          </GlowPanel>
        </div>
      </section>
    </div>
  );
}
