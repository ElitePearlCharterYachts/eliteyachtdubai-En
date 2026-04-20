import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Yachts", to: "/yachts" },
  {
    label: "Services",
    to: "/services",
    hasDropdown: true,
    children: [
      { label: "Water Sports", to: "/water-sports" },
      { label: "Corporate Events", to: "/corporate-events" }
    ]
  },
  {
    label: "Offers",
    to: "/offers",
    hasDropdown: true,
    children: [{ label: "Packages", to: "/packages" }]
  },
  {
    label: "About Us",
    to: "/about-us",
    hasDropdown: true,
    children: [
      { label: "Our Team", to: "/team" },
      { label: "Guidelines", to: "/guidelines" },
      { label: "Owner", to: "/owner" }
    ]
  },
  { label: "Why Elite", to: "/best-yacht-company" },
  { label: "Contact Us", to: "/contact-us" }
];

const WHATSAPP = "https://wa.me/971569006603?text=Hello%20Elite%20Yacht%20Dubai";
const PHONE_TEL = "tel:+971569006603";
const PHONE_DISPLAY = "+971 56 900 6603";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const headerRef = useRef(null);
  const [headerH, setHeaderH] = useState(72);

  const location = useLocation();

  const isEnglish =
    location.pathname === "/en" || location.pathname.startsWith("/en/");

  const localizedNavItems = navItems.map((item) => ({
    ...item,
    to: isEnglish ? `/en${item.to === "/" ? "" : item.to}` : item.to,
    children: item.children?.map((c) => ({
      ...c,
      to: isEnglish ? `/en${c.to}` : c.to
    }))
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    const el = headerRef.current;
    const update = () =>
      setHeaderH(Math.round(el.getBoundingClientRect().height || 72));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header
      ref={headerRef}
      dir="ltr"
      lang="en"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/92 backdrop-blur-xl border-b border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          : "bg-white border-b border-black/10"
        }`}
    >
      <nav>
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 xl:px-10 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" onClick={closeAll}>
              <img src={logo} alt="Elite Yacht Dubai" className="h-12 w-auto" />
            </Link>

            <ul className="hidden lg:flex items-center gap-8 tracking-[0.22em] font-bold text-[13px] uppercase">
              {localizedNavItems.map((item) => {
                const isOpen = openDropdown === item.label;
                return (
                  <li key={item.label} className="relative">
                    <div className="flex items-center gap-2">
                      <Link
                        to={item.to}
                        className="text-black/80 hover:text-black transition"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                      {item.hasDropdown && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenDropdown(
                              isOpen ? null : item.label
                            );
                          }}
                          className="h-8 w-8 grid place-items-center rounded-full border border-black/10"
                        >
                          <i
                            className={`fa-solid ${isOpen
                                ? "fa-chevron-up"
                                : "fa-chevron-down"
                              } text-[12px]`}
                          />
                        </button>
                      )}
                    </div>
                    {item.hasDropdown && isOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4">
                        <div className="rounded-2xl bg-white border border-black/10 py-3 min-w-[260px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.to}
                              onClick={closeAll}
                              className="block px-4 py-3 text-[12px] tracking-[0.14em] uppercase text-black/70 hover:text-black"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://eliteyachtdubai.com/"
                className="h-10 w-10 grid place-items-center rounded-full border border-black/10 bg-white"
              >
                <img
                  src="/en/images/icons/ar.png"
                  alt="Arabic"
                  className="h-8 w-auto"
                />
              </a>

              <a
                href={WHATSAPP}
                className="px-5 py-2.5 rounded-full border border-black/10 flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp" />
                <span className="text-[12px] tracking-widest font-bold">
                  {PHONE_DISPLAY}
                </span>
              </a>

              <a
                href={PHONE_TEL}
                className="px-5 py-2.5 rounded-full bg-black text-white flex items-center gap-2"
              >
                <i className="fa-solid fa-phone" />
                <span className="text-[12px] tracking-widest font-bold">
                  CALL NOW
                </span>
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden h-11 w-11 rounded-full border border-black/10 bg-white grid place-items-center"
            >
              <i
                className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"
                  }`}
              />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            className="fixed left-0 right-0 bg-white border-t border-black/10 lg:hidden"
            style={{ top: headerH }}
          >
            <div className="p-4 space-y-3">
              {localizedNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={closeAll}
                  className="block py-3 text-center font-bold tracking-widest uppercase text-[13px]"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="https://eliteyachtdubai.com/"
                className="w-full flex justify-center items-center gap-2 py-3 border border-black/10 rounded-full"
              >
                <img
                  src="/en/images/icons/ar.png"
                  className="h-5"
                  alt="Arabic"
                />
                <span className="tracking-widest text-[12px] font-bold">
                  العربية
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
