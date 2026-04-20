import yachtImg from "../assets/sections/yacht-intro.png";
import logoMark from "../assets/logo.png";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

function applyTM(input = "") {
  let out = String(input);

  out = out.replace(/إيليت\s+يخوت(?!\s*™)/g, "إيليت يخوت™");
  out = out.replace(/إيليت(?!\s*(يخوت|™))/g, "إيليت™");

  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return out;
}

function TMText({ children }) {
  if (typeof children !== "string") return children;
  return applyTM(children);
}

export default function AboutContainer() {
  const WHATSAPP =
    "https://wa.me/971569006603?text=I%20want%20to%20book%20a%20yacht%20in%20Dubai";
  const PHONE = "tel:+971569006603";

  const bullets = [
    "Luxury yacht rental in Dubai Marina with direct booking and fast confirmation",
    "Private cruises for families and friends with complete privacy and premium service",
    "Packages for occasions, parties, corporate events, and VIP experiences",
    "Professional crew, precise coordination, and iconic routes across Dubai",
  ].map(applyTM);

  return (
    <section
      lang="en"
      dir="ltr"
      className="relative w-full bg-white text-black py-16 sm:py-20 overflow-hidden"
      aria-label="About Elite Yacht Dubai"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.04),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent_35%,rgba(0,0,0,0.02))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(0,0,0,0.03),transparent_52%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-5 justify-start">
            <div className="h-px w-14 bg-gradient-to-r from-black/45 to-transparent" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.18em] text-black/75 uppercase">
              Dubai Marina • Full Privacy • VIP Service
            </span>
          </div>

          <h2 className="text-[20px] sm:text-[26px] md:text-[32px] leading-tight font-semibold text-black">
            <TMText>Elite Yacht</TMText> Dubai — Luxury Yacht Rentals & Refined Sea Experiences
          </h2>

          <p className="mt-4 text-[12.5px] sm:text-[13.5px] leading-relaxed text-black max-w-[760px]">
            If you’re looking for{" "}
            <span className="font-semibold">luxury yacht rental in Dubai</span>{" "}
            with fast booking and a well-organized service,{" "}
            <span className="font-semibold">
              <TMText>Elite Yacht</TMText>
            </span>{" "}
            delivers a clear experience from the first message until the end of your cruise. We typically depart from{" "}
            <span className="font-semibold">Dubai Marina</span>{" "}
            with options tailored for families, groups, sunset cruises, and private occasions.
          </p>

          <p className="mt-4 text-[12.5px] sm:text-[13.5px] leading-relaxed text-black max-w-[760px]">
            We focus on the details that matter: choosing the right yacht, coordinating the sailing time, arranging hospitality
            on request, and ensuring smooth boarding and disembarkation. Our goal is to provide{" "}
            <span className="font-semibold">a private yacht in Dubai</span>{" "}
            with full privacy, premium service, and a VIP experience without complications.
          </p>

          <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12px] sm:text-[13px] text-black">
            {bullets.map((t, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/60 shrink-0" />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-[640px]">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="Book a yacht on WhatsApp"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-black bg-black text-white font-semibold text-[13px] shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition hover:bg-black/90 active:scale-[0.99]"
            >
              <FaWhatsapp className="text-[18px]" />
              Book on WhatsApp
            </a>

            <a
              href={PHONE}
              aria-label="Call now to book a yacht in Dubai"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-black/15 bg-white text-black font-semibold text-[13px] shadow-[0_18px_55px_rgba(0,0,0,0.12)] transition hover:bg-[#FAFAFA] active:scale-[0.99]"
            >
              <FaPhone className="text-[16px]" />
              Call Now
            </a>
          </div>

          <p className="mt-6 text-[10px] sm:text-[11px] text-black/65 tracking-[0.16em] uppercase">
            Yacht Rental Dubai • Dubai Marina • Book via WhatsApp • VIP Cruises • Private Yacht Dubai
          </p>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center">
          <div className="relative w-full max-w-[600px]">
            <div className="absolute -inset-6 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.05),transparent_60%)] blur-2xl pointer-events-none" />

            <div
              className="relative rounded-3xl overflow-hidden border border-black/10 bg-[#0B0B0B]"
              style={{ boxShadow: "0 26px 75px rgba(0,0,0,0.22)" }}
            >
              <div className="absolute top-4 left-4 z-20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-[0_14px_35px_rgba(0,0,0,0.22)] ring-1 ring-black/10">
                  <img
                    src={logoMark}
                    alt="Elite Yacht Dubai logo"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </div>
              </div>

              <img
                src={yachtImg}
                alt="Luxury yacht rental in Dubai Marina with Elite Yacht Dubai"
                className="w-full h-[290px] sm:h-[430px] object-cover"
                loading="lazy"
                decoding="async"
                draggable="false"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.10),transparent_55%)]" />

              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] tracking-[0.14em] text-white/90 backdrop-blur uppercase">
                  <TMText>Elite Yacht</TMText> • Dubai
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-2 -bottom-2 w-full h-full rounded-3xl border border-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
