import { Link } from "react-router-dom";

const KEYWORDS = [
  // 🔹 Generic / Homepage
  { label: "Yacht rental Dubai", to: "/" },
  { label: "Dubai yacht rental", to: "/" },
  { label: "Yacht charter Dubai", to: "/" },
  { label: "Yachts for rent in Dubai", to: "/" },

  // 🔹 Services
  { label: "Private yacht Dubai", to: "/services" },
  { label: "Rent a yacht in Dubai", to: "/services" },
  { label: "Book a yacht Dubai", to: "/services" },
  { label: "Dubai Marina yacht rental", to: "/services" },
  { label: "Yacht rental via WhatsApp", to: "/services" },

  // 🔹 Yacht pages (MATCHED TO yachts.json SLUGS)
  { href: "/dubai-yacht-rental-oryx-36ft", label: "Rent a 36ft yacht" },
  { href: "/dubai-yacht-rental-vandutch-40ft", label: "Daily yacht rental" },
  { href: "/dubai-yacht-rental-majesty-44ft", label: "Dubai yacht" },
  { href: "/dubai-yacht-rental-majesty-48ft", label: "Yachts Dubai" },

  { href: "/dubai-yacht-rental-pershing-white-54ft", label: "Luxury yacht rental" },
  { href: "/dubai-yacht-rental-pershing-gray-54ft", label: "Yacht charter" },
  { href: "/dubai-yacht-rental-majesty-56ft", label: "Book yachts in Dubai" },
  { href: "/dubai-yacht-rental-axi-63ft", label: "Dubai yacht trip" },

  { href: "/dubai-yacht-rental-ferretti-67ft", label: "Dubai Marina cruise" },
  { href: "/dubai-yacht-rental-sunseeker-70ft", label: "Dubai Marina yacht cruise" },

  { href: "/dubai-yacht-rental-ferretti-78ft", label: "Family yacht trip" },
  { href: "/dubai-yacht-rental-galeon-78ft", label: "Birthday yacht party" },
  { href: "/dubai-yacht-rental-riva-82ft", label: "Dinner on a yacht in Dubai" },

  { href: "/dubai-yacht-rental-majesty-88ft", label: "Dinner on a yacht in Dubai Marina" },
  { href: "/dubai-yacht-rental-haigan-90ft", label: "Dinner cruise in Dubai" },

  { href: "/dubai-yacht-rental-sunseeker-95ft", label: "Marina dinner cruise" },
  { href: "/dubai-yacht-rental-modern-100ft", label: "Dubai boat trip" },

  { href: "/dubai-yacht-rental-majesty-101ft", label: "Where to board yachts in Dubai Marina" },
  { href: "/dubai-yacht-rental-sunseeker-108ft", label: "Yacht rental prices in Dubai Marina" },

  { href: "/dubai-yacht-rental-baglietto-108ft", label: "Dubai yacht rental cost" },

  { href: "/dubai-yacht-rental-benetti-110ft", label: "Yacht hire Dubai" },
  { href: "/dubai-yacht-rental-benetti-114ft", label: "Dubai Marina yacht hire" },

  // 🔹 Offers & Packages
  { label: "Dubai yacht deals", to: "/offers" },
  { label: "Yacht packages Dubai", to: "/packages" },
  { label: "Yacht party Dubai", to: "/offers" },
  { label: "Birthday yacht Dubai", to: "/packages" },
  { label: "Corporate yacht events Dubai", to: "/packages" },
  { label: "Romantic yacht Dubai", to: "/offers" },

  // 🔹 Yachts listing
  { label: "Luxury yachts Dubai", to: "/yachts" },
  { label: "Private yacht Dubai Marina", to: "/yachts" },
  { label: "VIP yacht Dubai", to: "/yachts" },
  { label: "Mega yacht Dubai", to: "/yachts" },
  { label: "Premium yacht Dubai", to: "/yachts" },

  // 🔹 Informational
  { label: "Sunset yacht cruise Dubai", to: "/" },
  { label: "Dubai yacht tour", to: "/" },
  { label: "Dubai Marina yacht tour", to: "/" },
  { label: "Best yacht rental Dubai", to: "/" },
  { label: "Dubai yacht trips", to: "/" },
];

const safeTo = (path = "/") => encodeURI(String(path || "/"));

export default function KeywordCloud() {
  return (
    <section dir="ltr" lang="en" className="w-full bg-transparent py-10 sm:py-12">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="rounded-2xl border border-black/10 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] px-4 sm:px-6 py-6">
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-black/50 uppercase">
              Popular Searches
            </p>
            <div className="h-px my-[10px] mx-auto w-48 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            <div className="mx-auto h-[2px] w-20 bg-black/25" />
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {KEYWORDS.map((item, idx) => {
              const to = item.to ?? item.href ?? "/";

              return (
                <Link
                  key={`${item.label}-${idx}`}
                  to={safeTo(to)}
                  prefetch="false"
                  className="
                    group inline-flex items-center justify-center
                    rounded-full border border-black/10 bg-white
                    text-black/65 whitespace-nowrap
                    px-2.5 py-1 text-[10.5px]
                    sm:px-3 sm:py-1.5 sm:text-[11px]
                    lg:px-4 lg:py-2 lg:text-[11.5px]
                    shadow-[0_6px_16px_rgba(15,23,42,0.06)]
                    transition-all duration-300
                    hover:border-black/25 hover:text-black hover:bg-black/[0.025]
                    hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]
                    hover:-translate-y-[0.5px]
                  "
                  aria-label={item.label}
                  title={item.label}
                >
                  <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-black/35 group-hover:bg-black/55 transition-colors" />
                  <strong className="font-semibold tracking-[0.01em]">
                    {item.label}
                  </strong>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
