import logoMark from "../assets/logo.png";

export default function BrandsGroupSection() {
  const BRANDS = [
    {
      name: "Elite Yacht Rental™",
      src: "/en/images/brands/eliteyachts.webp",
      alt: "Elite Yacht Dubai logo",
      href: "https://eliteyachtrental.com",
      title: "Elite Yacht Rental™ | Luxury Yacht Rental in Dubai Marina",
    },
    {
      name: "Elite Pearl Charter™",
      src: "/en/images/brands/elitepearl.webp",
      alt: "Elite Pearl Charter logo",
      href: "https://elitepearlcharter.com",
      title: "Elite Pearl Charter™ | Luxury Yacht Cruises & Sea Experiences in Dubai",
    },
    {
      name: "Elite Luxury™",
      src: "/en/images/brands/logo.webp",
      alt: "Elite Luxury logo",
      href: "https://eliteluxuryyacht.com",
      title: "Elite Luxury™ | Premium Services & Luxury Experiences in Dubai",
    },
  ];

  return (
    <section
      dir="ltr"
      lang="en"
      aria-label="Elite Group brands in Dubai"
      className="relative w-full bg-white py-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_52%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.03),transparent_30%,rgba(15,23,42,0.02))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(0,0,0,0.03),transparent_55%)]" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-black/55 uppercase">
              Our Brands
            </p>

            <h2 className="mt-2 font-light tracking-wide text-black text-[20px] sm:text-[28px] md:text-[34px]">
              Elite Group in Dubai — Luxury Yacht Rentals & Premium Sea Services
            </h2>

            <p className="mt-5 text-black/70 leading-relaxed max-w-2xl text-[12.5px] sm:text-[13.5px] md:text-[14px]">
              The Elite Group includes three specialized brands designed to serve different needs across the world of yachts and
              luxury services in Dubai. We focus on a seamless, well-managed experience from booking to the end of your trip, with
              options for families, groups, private occasions, and corporate events—especially from Dubai Marina.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch max-w-[680px]">
              {BRANDS.map((b) => (
                <a
                  key={b.href}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${b.name}`}
                  title={b.title}
                  className="group relative rounded-2xl border border-white/10 bg-black p-5 flex items-center justify-center shadow-[0_16px_44px_rgba(0,0,0,0.38)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.50)] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.10),transparent_52%)] opacity-0 group-hover:opacity-100 transition" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_45%)]" />

                  <img
                    src={b.src}
                    alt={b.alt}
                    className="h-16 sm:h-20 object-contain opacity-90 group-hover:opacity-100 transition"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/yachts"
                aria-label="Browse the Elite Yacht Dubai fleet"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 text-[12px] font-bold tracking-[0.16em] uppercase border border-black/15 bg-white text-black shadow-[0_14px_34px_rgba(15,23,42,0.10)] transition-all duration-300 hover:border-black/30 hover:bg-black/[0.02] active:scale-[0.99]"
              >
                <i className="fa-solid fa-ship" />
                Browse Fleet
              </a>

              <a
                href="/contact-us"
                aria-label="Get a quote for yacht rental in Dubai Marina"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 text-[12px] font-bold tracking-[0.16em] uppercase border border-black bg-black text-white shadow-[0_16px_40px_rgba(0,0,0,0.20)] transition-all duration-300 hover:bg-black/90 active:scale-[0.99]"
              >
                <i className="fa-solid fa-paper-plane" />
                Get a Quote
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-[10px] tracking-[0.20em] text-black/50 uppercase">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-black/60" />
                Dubai Marina
              </span>
              <span className="opacity-40">•</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-black/60" />
                Fast Booking
              </span>
              <span className="opacity-40">•</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-black/60" />
                VIP Service
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-[0_18px_60px_rgba(15,23,42,0.14)]">
              <img
                src="/en/images/brands/group-hero.webp"
                alt="Elite Group in Dubai Marina"
                className="w-full h-[340px] sm:h-[420px] md:h-[520px] object-cover"
                loading="lazy"
                decoding="async"
                draggable="false"
              />

              <div className="absolute top-4 left-4 z-20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-[0_14px_35px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
                  <img
                    src={logoMark}
                    alt="Elite Group logo"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-white/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(0,0,0,0.18),transparent_60%)] pointer-events-none" />

              <div className="absolute bottom-4 right-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3 py-1.5 text-[10px] tracking-[0.14em] text-black/80 backdrop-blur uppercase">
                  Elite Group • Dubai Marina
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-2 -bottom-2 h-full w-full rounded-2xl border border-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
