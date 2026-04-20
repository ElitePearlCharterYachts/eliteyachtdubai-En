import hero600 from "../assets/hero/hero-mobile-600.webp";
import hero900 from "../assets/hero/hero-mobile-900.webp";
import hero1600 from "../assets/hero/hero-bg-1600.webp";

export default function Hero() {
  return (
    <section lang="en" dir="ltr" className="relative w-full bg-white">
      <div className="relative w-full h-[72svh] sm:h-[86svh] lg:h-screen overflow-hidden">
        <picture>
          <source
            media="(max-width: 640px)"
            type="image/webp"
            srcSet={`${hero600} 600w, ${hero900} 900w`}
            sizes="100vw"
          />
          <source
            media="(min-width: 641px)"
            type="image/webp"
            srcSet={`${hero1600} 1600w`}
            sizes="100vw"
          />
          <img
            src={hero900}
            width="900"
            height="1200"
            alt="Luxury yacht rental in Dubai Marina with Elite Yacht Dubai"
            className="absolute inset-0 h-full w-full object-cover object-[50%_70%] sm:object-center scale-[1.04] sm:scale-100"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
          />
        </picture>

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

        <div className="absolute inset-0">
          <div className="max-w-[1700px] mx-auto h-full px-4 sm:px-6 lg:px-10">
            <div className="h-full flex items-center justify-center">
              <div className="w-full max-w-[560px] sm:max-w-[680px] lg:max-w-[920px] rounded-3xl border border-white/25 bg-white/10 backdrop-blur-lg shadow-[0_30px_90px_rgba(0,0,0,0.35)] p-4 sm:p-7 lg:p-9 text-center">
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[9px] sm:text-[10px] tracking-[0.22em] text-white/90">
                    Dubai Marina
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[9px] sm:text-[10px] tracking-[0.22em] text-white/90">
                    Full Privacy
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[9px] sm:text-[10px] tracking-[0.22em] text-white/90">
                    VIP Service
                  </span>
                </div>

                <h1 className="mt-4 text-white font-logo leading-[1.08] text-[22px] sm:text-[36px] lg:text-[58px]">
                  Luxury Yacht Rental in Dubai
                  <span className="block text-white/85 mt-2 text-[12px] sm:text-[15px] lg:text-[18px] font-semibold tracking-wide">
                    Elite Yacht Dubai™ — A refined experience for families and friends
                  </span>
                </h1>

                <div className="mt-4 sm:mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <p className="mt-4 sm:mt-5 text-white/85 leading-relaxed text-[11px] sm:text-[12.5px] lg:text-[13.5px] max-w-[680px] mx-auto">
                  Book a private yacht in Dubai Marina with a professional crew and options tailored for families and groups.
                  Sunset cruises, parties, private occasions, and VIP experiences with direct booking and fast confirmation.
                </p>

                <div className="mt-5 sm:mt-6 flex justify-center">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-[520px]">
                    <a
                      href="https://wa.me/971569006603?text=Hello%20Elite%20Yacht%20Dubai"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-4 sm:px-6 py-2.5 bg-white text-black border border-white text-[11px] sm:text-[13px] font-bold tracking-[0.14em] shadow-[0_18px_46px_rgba(0,0,0,0.30)] hover:bg-white/90 hover:shadow-[0_22px_60px_rgba(0,0,0,0.35)] transition w-full"
                    >
                      <i className="fa-brands fa-whatsapp text-[16px]" />
                      Book on WhatsApp
                    </a>

                    <a
                      href="tel:+971569006603"
                      aria-label="Call Now"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-4 sm:px-6 py-2.5 bg-transparent text-white border border-white/35 text-[11px] sm:text-[13px] font-bold tracking-[0.14em] hover:border-white/60 hover:bg-white/10 transition w-full"
                    >
                      <i className="fa-solid fa-phone text-[14px]" />
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 flex flex-wrap justify-center items-center gap-3 text-[9px] sm:text-[10px] tracking-[0.16em] text-white/80">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    Direct Booking
                  </span>
                  <span className="opacity-40">•</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    Professional Crew
                  </span>
                  <span className="opacity-40">•</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    VIP Cruises
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
