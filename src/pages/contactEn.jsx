import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

function TM({ children }) {
  const text = typeof children === "string" ? children : "";
  let out = text;

  out = out.replace(/إيليت\s+يخوت(?!\s*™)/g, "إيليت يخوت™");
  out = out.replace(/إيليت(?!\s*(يخوت|™))/g, "إيليت™");

  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return <>{out}</>;
}


function applyTM(input = "") {
  let out = String(input || "");

  out = out.replace(/إيليت\s*™/g, "™إيليت");
  out = out.replace(/إيليت\s+يخوت\s*™/g, "™إيليت يخوت");
  out = out.replace(/(^|[\s([{"'«“])إيليت\s+يخوت(?!\s*™|™)/g, "$1™إيليت يخوت");
  out = out.replace(/(^|[\s([{"'«“])إيليت(?!\s*(يخوت|™))/g, "$1™إيليت");

  // English
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  out = out.replace(/™\s*™/g, "™");
  return out;
}


export default function ContactEn() {
  const eliteGold = "#000";

  const phone = "+971569006603";
  const phoneTel = "tel:+971569006603";
  const whatsapp =
    "https://wa.me/971569006603?text=Hello%20Elite%20Yachts%2C%20I%20want%20to%20book%20a%20yacht%20in%20Dubai.";
  const email = "info@eliteyachtdubai.com";

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [sending, setSending] = useState(false);
  const [sentOk, setSentOk] = useState(false);
  const [sendErr, setSendErr] = useState("");

  const BASE_URL = "https://eliteyachtdubai.com";
  const { pathname } = useLocation();
  const CANONICAL = `${BASE_URL}${pathname || "/contact-us"}`;
  const ogImage = `${BASE_URL}/images/og/contact.webp`;

  const title = applyTM(
    "Contact Elite Yachts Dubai™ | Dubai Marina Yacht Booking via WhatsApp"
  );
  const description = applyTM(
    "Contact Elite Yachts Dubai™ to book a luxury yacht in Dubai Marina: fast availability checks, clear pricing, VIP coordination, and optional décor & hospitality. Book via WhatsApp or call now."
  );
  const keywords = [
    "contact Elite Yachts Dubai",
    "Dubai yacht booking WhatsApp",
    "Dubai Marina yacht rental",
    "luxury yacht rental Dubai",
    "private yacht Dubai",
    "yacht party Dubai",
    "Yacht Rental Dubai Marina",
    "Luxury Yacht Rental Dubai",
    "Elite Yacht Dubai",
    "Dubai Marina Yacht Charter",
  ].join(", ");

  const schemaData = useMemo(() => {
    const orgId = `${BASE_URL}/#organization`;
    const webId = `${BASE_URL}/#website`;
    const pageId = `${CANONICAL}#webpage`;

    return [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: CANONICAL,
        name: title,
        description,
        inLanguage: "en-AE",
        isPartOf: { "@id": webId },
        about: { "@id": orgId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/contact/hero.png`,
        },
      },
      {
        "@type": "ContactPage",
        "@id": `${CANONICAL}#contactpage`,
        url: CANONICAL,
        name: "Contact",
        inLanguage: "en-AE",
        mainEntity: { "@id": orgId },
      },
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Elite Yachts Dubai™",
        alternateName: [
          "Elite Yacht Dubai™",
          "Elite Yachts Dubai™",
          "Elite Yacht Dubai",
          "Elite Yachts Dubai",
          "إيليت يخت دبي",
        ],
        url: BASE_URL,
        email,
        telephone: phone,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: phone,
            contactType: "customer service",
            availableLanguage: ["en", "ar"],
            areaServed: "AE",
          },
        ],
        sameAs: [
          "https://www.instagram.com/eliteyachtdubai_official/",
          "https://www.facebook.com/eliteyachtdubaiofficial",
          "https://www.linkedin.com/company/elite-yacht-dubai/",
          "https://www.youtube.com/@eliteyachtdubaiofficial",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Contact", item: CANONICAL },
        ],
      },
    ];
  }, [BASE_URL, CANONICAL, title, description, email, phone]);

  const mapSrc = useMemo(
    () =>
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231113.64847719067!2d55.06256768211787!3d25.164386922608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b0a25763815%3A0x914c2fcffe4a4dc8!2sELITE%20YACHTS%20%7C%20ELITE%20YACHTS%20RENTAL%20DUBAI%20%7C%20ELITE%20YACHT%20CHARTER!5e0!3m2!1sen!2sae!4v1765804501510!5m2!1sen!2sae",
    []
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    setSentOk(false);
    setSendErr("");

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSendErr("Email service is not configured (EmailJS env variables are missing).");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      to_email: "info@eliteyachtrental.com",
      name: data.get("name") || "",
      phone: data.get("phone") || "",
      email: data.get("email") || "",
      guests: data.get("guests") || "",
      date: data.get("date") || "",
      time: data.get("time") || "",
      message: data.get("message") || "",
      source: "Elite Yachts Dubai - Contact Page (EN)",
    };

    try {
      setSending(true);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, { publicKey: PUBLIC_KEY });
      setSentOk(true);
      form.reset();
    } catch (err) {
      console.error("EmailJS send error:", err);
      setSendErr("Failed to send. Please try again, or contact us on WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div dir="ltr" lang="en" className="relative w-full bg-white text-black">
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

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(0,0,0,0.10), transparent 55%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_35%,rgba(15,23,42,0.03))]" />
      </div>

      {/* HERO */}
      <section
        className="
          relative w-full flex items-center
          min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[80vh]
          overflow-hidden
        "
        style={{
          backgroundImage: "url('/en/images/contact/hero.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="relative w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20 text-center">
            <div
              className="
                mx-auto max-w-[980px]
                rounded-2xl sm:rounded-3xl
                border border-black/10
                bg-black/50
                px-5 py-8
                sm:px-8 sm:py-10
                md:px-10 md:py-12
                shadow-[0_18px_60px_rgba(15,23,42,0.12)]
              "
            >
              <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-white uppercase">
                Elite Yachts Dubai™ • Dubai Marina • VIP
              </p>

              <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
                <div className="h-px mx-auto w-32 sm:w-48 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>

              <h1 className="text-[16px] sm:text-[26px] md:text-[32px] lg:text-[40px] font-light tracking-[0.06em] sm:tracking-[0.08em] md:tracking-[0.10em] text-white leading-tight px-2">
                Elite Yachts Dubai™ — Luxury Yacht Rental & Private Cruises
              </h1>

              <p className="mt-4 sm:mt-5 md:mt-6 text-white/90 leading-relaxed max-w-3xl mx-auto text-[12px] sm:text-[14px] md:text-[15px] px-2">
                Experience <span className="font-semibold text-white">Elite Yachts Dubai™</span> in Dubai Marina:
                private & family cruises, birthday parties, corporate events, proposals, and sunset trips.
                VIP coordination includes route planning, crew, hospitality, music, and décor upon request —
                with fast WhatsApp booking and clear pricing.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-full px-6 sm:px-8 md:px-9 py-2.5 sm:py-3
                    border border-black
                    bg-white
                    text-black
                    shadow-[0_14px_34px_rgba(0,0,0,0.12)]
                    transition-all duration-300
                    hover:bg-black hover:text-white
                    w-full sm:w-auto sm:min-w-[200px] md:min-w-[230px]
                    whitespace-nowrap
                  "
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm tracking-wider">Book on WhatsApp</span>
                </a>

                <a
                  href={phoneTel}
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-full px-6 sm:px-8 md:px-9 py-2.5 sm:py-3
                    border border-black
                    bg-black
                    text-white
                    shadow-[0_16px_40px_rgba(0,0,0,0.16)]
                    transition-all duration-300
                    hover:bg-white hover:text-black
                    w-full sm:w-auto sm:min-w-[200px] md:min-w-[230px]
                    whitespace-nowrap
                  "
                  aria-label="Call now"
                >
                  <i className="fa-solid fa-phone text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm tracking-wider">Call Now</span>
                </a>
              </div>

              <div className="mt-5 sm:mt-10 text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.32em] uppercase text-white/70">
                Dubai Marina • Palm Jumeirah • Burj Al Arab
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[11px] sm:text-xs tracking-[0.30em] sm:tracking-[0.35em] text-black/55 uppercase">
                We’re here to help
              </p>

              <h2 className="mt-4 text-[20px] sm:text-2xl md:text-3xl font-light tracking-[0.06em] sm:tracking-widest text-black/85">
                Support from <TM>Elite Yachts Dubai</TM> for luxury yacht booking
              </h2>

              <p className="mt-4 text-[13px] sm:text-[15px] text-black/65 leading-[1.95]">
                Whether it’s a private trip, birthday, proposal, corporate event, or a VIP experience —
                <TM> Elite Yachts</TM> helps you select the right yacht, route, and time. Send your request now
                and we’ll confirm availability and share the best options quickly.
              </p>

              <p className="mt-4 text-[13px] sm:text-[15px] text-black/65 leading-[1.95]">
                We serve Dubai Marina and routes around Palm Jumeirah, Atlantis, and Burj Al Arab —
                with full coordination and add-ons like décor and hospitality upon request.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard
                  title="Fast response"
                  text="Quick replies via WhatsApp or the contact form to confirm availability and pricing."
                  icon="fa-bolt"
                  eliteGold={eliteGold}
                />
                <InfoCard
                  title="Departure point"
                  text="Dubai Marina (and nearby marinas depending on yacht availability and route plan)."
                  icon="fa-location-dot"
                  eliteGold={eliteGold}
                />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="/en/images/contact/hero-bg-1600.webp"
                  alt="Elite Yachts Dubai - Dubai Marina"
                  className="w-full h-[320px] sm:h-[480px] object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-transparent pointer-events-none" />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 55% 15%, rgba(0,0,0,0.14), transparent 58%)",
                  }}
                />
              </div>
              <div className="pointer-events-none absolute -left-2 -bottom-2 h-full w-full rounded-2xl border border-black/10" />
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactCard
              phone={phone}
              phoneTel={phoneTel}
              whatsapp={whatsapp}
              email={email}
              eliteGold={eliteGold}
            />
            <SocialCard eliteGold={eliteGold} />
            <LocationCard eliteGold={eliteGold} />
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[11px] sm:text-xs tracking-[0.30em] sm:tracking-[0.35em] text-black/55 uppercase">
                Request a quote
              </p>

              <h3 className="mt-4 text-[20px] sm:text-2xl md:text-3xl font-light tracking-[0.06em] sm:tracking-widest text-black/85">
                Let’s plan your experience with <TM>Elite Yachts Dubai</TM>
              </h3>

              <p className="mt-4 text-[13px] sm:text-[15px] text-black/65 leading-[1.95]">
                Fill the form and we’ll send the best yacht rental options in Dubai based on your date, guest count,
                and preferred time. If you already know the yacht name, mention it — if not, we’ll recommend the best
                match for your budget.
              </p>

              <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.10)]">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-shield-halved" style={{ color: eliteGold }} />
                  <p className="text-[13px] sm:text-sm text-black/60 leading-[1.9]">
                    Your privacy matters. We use your details only to contact you about your yacht booking.
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-white border border-black/10 overflow-hidden shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
                <div className="px-6 pt-5 pb-3">
                  <p className="text-[11px] tracking-[0.3em] text-black/55 uppercase">Google Map</p>
                  <p className="mt-1 text-black/80 text-sm">
                    <TM>ELITE YACHTS RENTAL LLC.</TM>
                  </p>
                </div>

                <div className="h-[320px] w-full border-t border-black/10">
                  <iframe
                    title="Elite Yachts Dubai Location"
                    src={mapSrc}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-black/10 p-6 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
              style={{ ["--gold"]: eliteGold }}
              aria-label="Yacht booking contact form"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <p className="text-[11px] tracking-[0.3em] text-black/55 uppercase">
                    <TM>Elite Yachts Dubai</TM> Form
                  </p>
                  <p className="mt-1 text-black/80 text-sm">Send booking details</p>
                </div>

                <span
                  className="
                    hidden sm:inline-flex items-center gap-2
                    rounded-full
                    bg-white/85 backdrop-blur
                    border border-black/10
                    px-3 py-1
                    text-[11px] font-semibold
                    text-black/70
                    shadow-[0_10px_26px_rgba(15,23,42,0.12)]
                  "
                >
                  <i className="fa-solid fa-crown" style={{ color: eliteGold }} />
                  VIP
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldEn
                  label="Full name"
                  name="name"
                  placeholder="Type your name"
                  required
                  eliteGold={eliteGold}
                />
                <FieldEn
                  label="Phone number"
                  name="phone"
                  placeholder="+971..."
                  required
                  eliteGold={eliteGold}
                />
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldEn
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  eliteGold={eliteGold}
                />
                <FieldEn
                  label="Guests"
                  name="guests"
                  placeholder="Example: 10"
                  eliteGold={eliteGold}
                />
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldEn label="Date" name="date" type="date" eliteGold={eliteGold} />
                <FieldEn label="Time" name="time" type="time" eliteGold={eliteGold} />
              </div>

              <div className="mt-4">
                <label className="block text-[11px] tracking-[0.3em] text-black/55 uppercase mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={11}
                  placeholder="Mention the yacht name (if you have one), preferred route, occasion type, and any add-ons you want…"
                  className="
                    w-full rounded-2xl bg-white
                    border border-black/10
                    px-4 py-3 text-sm text-black/80
                    placeholder:text-black/35
                    outline-none transition
                    focus:border-[var(--gold)]
                    focus:ring-2 focus:ring-[var(--gold)]/20
                    shadow-[inset_0_0_0_1px_rgba(15,23,42,0.03)]
                  "
                />
              </div>

              {(sentOk || sendErr) && (
                <div className="mt-4 rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3">
                  {sentOk && (
                    <p className="text-sm text-black/75">
                      Sent successfully. The <TM>Elite Yachts Dubai</TM> team will contact you shortly.
                    </p>
                  )}
                  {sendErr && <p className="text-sm text-black/75">⚠️ {sendErr}</p>}
                </div>
              )}

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={sending}
                  className="
                    inline-flex items-center justify-center gap-3
                    rounded-full px-8 py-3 text-sm
                    border border-black
                    bg-black text-white
                    shadow-[0_16px_40px_rgba(15,23,42,0.18)]
                    transition-all duration-300
                    hover:bg-black/90
                    hover:shadow-[0_18px_52px_rgba(0,0,0,0.22)]
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  <i className="fa-solid fa-paper-plane" />
                  {sending ? "Sending..." : "Send Request"}
                </button>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center gap-3
                    rounded-full px-8 py-3 text-sm
                    border border-black/10
                    bg-white
                    text-black/85
                    shadow-[0_14px_34px_rgba(15,23,42,0.12)]
                    transition-all duration-300
                    hover:border-black/25
                    hover:text-black
                    hover:shadow-[0_18px_46px_rgba(0,0,0,0.18)]
                  "
                  style={{ ["--gold"]: eliteGold }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ color: eliteGold }} />
                  WhatsApp chat
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 justify-end">
                {[
                  "Dubai yacht rental",
                  "Dubai Marina yacht booking",
                  "Luxury yacht rental Dubai",
                  "Private yacht Dubai",
                  "Yacht party Dubai",
                  "Elite Yachts Dubai",
                  "Yacht Rental Dubai Marina",
                ].map((t) => (
                  <span
                    key={t}
                    className="
                      inline-flex items-center
                      rounded-full
                      border border-black/10
                      bg-white
                      px-3 py-1.5
                      text-[11px] sm:text-[12px]
                      text-black/70
                      shadow-[0_10px_22px_rgba(15,23,42,0.06)]
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-[11px] sm:text-[12px] text-black/45 leading-relaxed">
                Search terms: Dubai yacht rental, Dubai Marina yacht booking, private yacht Dubai, luxury yacht Dubai,
                <TM>Elite Yachts Dubai</TM>, yacht charter Dubai, <TM>Elite Yachts</TM>.
              </p>
            </form>
          </div>
        </div>
      </section>

      <CTASection variant="contact" />
    </div>
  );
}

/* ---------------------- Small Components (EN) ---------------------- */

function InfoCard({ title, text, icon, eliteGold }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.10)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className={`fa-solid ${icon}`} style={{ color: eliteGold }} />
        </span>
        <p className="text-[11px] tracking-[0.3em] uppercase text-black/55">{title}</p>
      </div>
      <p className="mt-3 text-[13px] sm:text-[14px] leading-[1.9] text-black/65">{text}</p>
    </div>
  );
}

function ContactCard({ phone, phoneTel, whatsapp, email, eliteGold }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className="fa-solid fa-phone" style={{ color: eliteGold }} />
        </span>
        <div>
          <p className="text-[11px] tracking-[0.3em] text-black/55 uppercase">Contact</p>
          <p className="text-black/85 mt-1">Call / WhatsApp</p>
        </div>
      </div>

      <div className="mt-5 space-y-2 text-[13px] sm:text-sm text-black/70">
        <a className="hover:text-black transition block" href={phoneTel}>
          {phone}
        </a>
        <a className="hover:text-black transition block" href={whatsapp} target="_blank" rel="noreferrer">
          WhatsApp chat
        </a>
        <a className="hover:text-black transition block" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </div>
  );
}

function SocialCard({ eliteGold }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className="fa-solid fa-share-nodes" style={{ color: eliteGold }} />
        </span>
        <div>
          <p className="text-[11px] tracking-[0.3em] text-black/55 uppercase">Social</p>
          <p className="text-black/85 mt-1">Follow / Message</p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-4 text-black/70">
        <a className="hover:text-black transition" href="https://www.instagram.com/eliteyachtdubai_official/">
          <i className="fa-brands fa-instagram text-xl" />
        </a>
        <a className="hover:text-black transition" href="https://www.facebook.com/eliteyachtdubaiofficial">
          <i className="fa-brands fa-facebook-f text-xl" />
        </a>
        <a className="hover:text-black transition" href="https://www.linkedin.com/company/elite-yacht-dubai/">
          <i className="fa-brands fa-linkedin-in text-xl" />
        </a>
        <a className="hover:text-black transition" href="https://www.youtube.com/@eliteyachtdubaiofficial">
          <i className="fa-brands fa-youtube text-xl" />
        </a>
      </div>

      <p className="mt-4 text-[13px] sm:text-sm text-black/60 leading-relaxed">
        Message <TM>Elite Yachts Dubai</TM> for availability, pricing, and VIP packages.
      </p>
    </div>
  );
}

function LocationCard({ eliteGold }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className="fa-solid fa-location-dot" style={{ color: eliteGold }} />
        </span>
        <div>
          <p className="text-[11px] tracking-[0.3em] text-black/55 uppercase">Location</p>
          <p className="text-black/85 mt-1">Dubai, UAE</p>
        </div>
      </div>

      <div className="mt-5 text-[13px] sm:text-sm text-black/65 leading-relaxed">
        <p className="text-black/80">Main office</p>
        <p>Office 506, Saeed Tower 1, Dubai, UAE</p>

        <p className="mt-4 text-black/80">Marina boarding area</p>
        <p>Dubai Marina Walk — East Marina — Dubai</p>
      </div>
    </div>
  );
}

function FieldEn({ label, name, type = "text", placeholder = "", required = false, eliteGold }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.3em] text-black/55 uppercase mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="
          w-full rounded-2xl bg-white
          border border-black/10
          px-4 py-3 text-sm text-black/80
          placeholder:text-black/35
          outline-none transition
          focus:border-[var(--gold)]
          focus:ring-2 focus:ring-[var(--gold)]/20
          shadow-[inset_0_0_0_1px_rgba(15,23,42,0.03)]
        "
        style={{
          caretColor: eliteGold,
          ["--gold"]: eliteGold,
        }}
      />
    </div>
  );
}
