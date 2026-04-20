import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faBitcoin,
  faCcVisa,
  faCcMastercard,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone } from "@fortawesome/free-solid-svg-icons";

import KeywordCloud from "./KeywordCloud";
import logo from "../assets/logo.png";

const INTERNAL_LINKS = {
  elite: [
    { to: "/about-us", label: "About Us" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/packages", label: "Packages" },
    { to: "/services", label: "Services" },
  ],
  quick: [
    { to: "/terms-and-conditions", label: "Terms & Conditions" },
    { to: "/refund-policy", label: "Refund Policy" },
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/guidelines", label: "FAQ" },
    { to: "/sitemap", label: "Sitemap" },
  ],
};

const SOCIALS = [
  {
    href: "https://www.facebook.com/eliteyachtdubaiofficial",
    icon: faFacebookF,
    label: "Facebook",
  },
  {
    href: "https://www.youtube.com/@eliteyachtdubaiofficial",
    icon: faYoutube,
    label: "YouTube",
  },
  {
    href: "https://www.instagram.com/eliteyachtdubai_official/",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/elite-yacht-dubai/",
    icon: faLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://www.tiktok.com/@eliteyachtdubai?_r=1&_t=ZS-930QYCj5WvI",
    icon: faTiktok,
    label: "TikTok",
  },
];

function FooterNavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-black/65 hover:text-black transition"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      dir="ltr"
      lang="en"
      className="relative w-full bg-white text-black border-t border-black/10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_35%,rgba(15,23,42,0.02))]" />
      </div>

      <div className="relative max-w-[1700px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid gap-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block" aria-label="Back to Home">
              <img src={logo} alt="Elite Yacht Dubai" className="h-14 mb-4 w-auto" />
            </Link>

            <p className="text-[16px] md:text-[18px] mb-4 text-black/85 font-semibold">
              Elite Yacht Rental LLC.
            </p>

            <p className="text-[12.5px] md:text-[13.5px] text-black/65 leading-relaxed mb-6 max-w-[520px]">
              <span className="text-black/85">Elite Yacht Dubai™</span> provides{" "}
              <span className="text-black/85">luxury yacht rental in Dubai Marina</span>,
              private yacht cruises, corporate events, sunset trips, and VIP experiences
              across Dubai’s world-famous skyline. Book the best yacht in Dubai for
              birthdays, proposals, parties, and private occasions.
            </p>

            <p className="text-[12.5px] italic text-black/75">
              Where the sea meets luxury.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[15px] mb-3 text-black/85 font-semibold">Follow Us</h3>
              <div className="flex items-center gap-4 text-black/70 text-lg">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={s.label}
                    className="
                      h-10 w-10 rounded-full
                      border border-black/10
                      bg-white
                      grid place-items-center
                      shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                      hover:border-black/25
                      hover:text-black
                      hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]
                      transition
                    "
                  >
                    <FontAwesomeIcon icon={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[10px] tracking-[0.22em] uppercase text-black/60 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
              <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
              Direct Booking • VIP Service
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="text-[15px] mb-3 text-black/85 font-semibold">Elite Links</h3>
              <ul className="space-y-2 text-[12.5px]">
                {INTERNAL_LINKS.elite.map((l) => (
                  <li key={l.to}>
                    <FooterNavLink to={l.to}>{l.label}</FooterNavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[15px] mb-3 text-black/85 font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-[12.5px]">
                {INTERNAL_LINKS.quick.map((l) => (
                  <li key={l.to}>
                    <FooterNavLink to={l.to}>{l.label}</FooterNavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] mb-4 text-black/85 font-semibold">Contact</h3>

            <div className="space-y-4 text-[12.5px] text-black/65">
              <div>
                <p className="font-semibold text-black/85">Head Office</p>
                <p>Office 506, Saeed Tower 1, Dubai, UAE</p>
              </div>

              <div>
                <p className="font-semibold text-black/85">Marina Location</p>
                <p>Dubai Marina Walk — Al Sufouh Street — East Marina, Dubai</p>
              </div>

              <div className="flex items-start gap-2">
                <FontAwesomeIcon icon={faWhatsapp} className="mt-1 text-black/70" />
                <div dir="ltr">
                  <a
                    href="https://wa.me/971569006603"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-black/70 hover:text-black transition"
                  >
                    +971 56 900 6603
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="mt-1 text-black/70" />
                <div dir="ltr">
                  <a
                    href="tel:+971569006603"
                    className="text-black/70 hover:text-black transition"
                  >
                    +971 56 900 6603
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="mt-1 text-black/70" />
                <div dir="ltr">
                  <a
                    href="tel:+97143889666"
                    className="text-black/70 hover:text-black transition"
                  >
                    Landline: (04) 388 9666
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-black/10 pt-6">
          <KeywordCloud />
        </div>

        <div className="mt-12 border-t border-black/10 pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-[11px] text-black/55">
          <p>Elite Yacht Dubai™ © 2026. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span>Accepted payments:</span>
            <FontAwesomeIcon icon={faBitcoin} className="text-xl text-black/70" />
            <FontAwesomeIcon icon={faCcMastercard} className="text-xl text-black/70" />
            <FontAwesomeIcon icon={faCcVisa} className="text-xl text-black/70" />
            <span className="border border-black/10 bg-white px-2 py-1 rounded-sm text-black/70 text-[10px]">
              Cash
            </span>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/971569006603"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="Chat with Elite Yacht Dubai on WhatsApp"
        className="
          fixed bottom-6 right-6
          w-14 h-14 rounded-full
          flex items-center justify-center
          border border-black/10
          bg-white/85 backdrop-blur
          text-black
          shadow-[0_18px_40px_rgba(15,23,42,0.18)]
          hover:border-black/25
          hover:text-black
          hover:shadow-[0_18px_48px_rgba(0,0,0,0.18)]
          hover:scale-105 transition
        "
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
      </a>
    </footer>
  );
}
