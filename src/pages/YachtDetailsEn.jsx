import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

import YachtCard from "../components/YachtCard";
import GalleryLightbox from "../components/GalleryLightbox";
import FAQSection from "../components/FAQSection";

import logo from "../assets/logo.png";

const PHONE_DISPLAY = "+971 56 900 6603";
const PHONE_TEL = "tel:+971569006603";

const WHATSAPP_LINK =
  "https://wa.me/+971569006603?text=Hello%20Elite%20Yachts!%20I%27d%20like%20to%20book%20a%20yacht.";

export default function YachtDetailsEn() {
  const { slug } = useParams();

  const [yachts, setYachts] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    fetch("/en/data/yachts.json")
      .then((r) => r.json())
      .then(setYachts)
      .catch(console.error);
  }, []);

  const yacht = useMemo(
    () => yachts.find((y) => normalizeSlug(y.slug) === normalizeSlug(slug)),
    [yachts, slug]
  );

  const gallery = useMemo(() => {
    if (!yacht) return [];
    return yacht.gallery?.length
      ? yacht.gallery
      : yacht.mainImage
        ? [yacht.mainImage]
        : [];
  }, [yacht]);

  const relatedYachts = useMemo(() => {
    if (!yacht || !yacht.category) return [];
    return yachts.filter((y) => y.slug !== yacht.slug && y.category === yacht.category);
  }, [yachts, yacht]);

  const megaText = useMemo(() => {
    if (!yacht?.megaDescription) return "";
    if (Array.isArray(yacht.megaDescription)) return yacht.megaDescription.join("\n\n");
    return String(yacht.megaDescription);
  }, [yacht]);

  const priceIsText = useMemo(() => {
    const p = yacht?.price;
    return typeof p === "string" && /contact|n\/a/i.test(p);
  }, [yacht]);

  useEffect(() => {
    if (!yacht) return;

    const title =
      yacht.metaTitle || yacht.pageTitle || yacht.title || "ELITE YACHTS";
    const desc = yacht.metaDescription || yacht.description || yacht.title || "";

    document.title = title;

    setMeta("description", desc);
    setMeta(
      "keywords",
      Array.isArray(yacht.keywords) ? yacht.keywords.join(", ") : ""
    );

    setOG("og:title", title);
    setOG("og:description", desc);
    setOG("og:image", yacht.mainImage || "");
  }, [yacht]);

  if (!yacht) {
    return (
      <div
        dir="ltr"
        lang="en"
        className="min-h-[70vh] bg-white text-slate-900 flex items-center justify-center px-6"
      >
        <div className="text-center max-w-md">
          <p className="text-slate-600">
            Loading… or this yacht was not found.
          </p>
          <Link
            className="underline mt-3 inline-block text-slate-900"
            to="/yachts"
          >
            Back to Yacht List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      dir="ltr"
      lang="en"
      className="relative mt-[-10px] w-full bg-white text-slate-900"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]" />

      <div className="relative max-w-[1500px] mx-auto px-6 py-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link
            to="/yachts"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition"
          >
            <i className="fa-solid fa-arrow-left" />
            <span className="text-sm tracking-wider">Back to Yachts</span>
          </Link>

          <span className="text-xs tracking-[0.35em] text-slate-500 uppercase">
            ELITE YACHTS
          </span>
        </div>

        <div className="mt-6 text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.08em]">
            {yacht.title}
          </h1>

          <div className="mt-4 h-px w-full bg-black/10" />
          <div className="mt-2 h-[3px] w-44 rounded-full bg-black/10 me-auto" />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden border border-black/10 bg-white"
              style={{ boxShadow: "0 18px 50px rgba(15,23,42,0.14)" }}
            >
              <img
                src={yacht.mainImage}
                alt={yacht.title}
                className="w-full h-[280px] sm:h-[420px] md:h-[520px] object-cover"
                draggable={false}
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.12),transparent_45%)]" />

              <div className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2">
                <div
                  className="grid place-items-center rounded-full bg-white/90 backdrop-blur border border-black/10"
                  style={{ width: 82, height: 82 }}
                >
                  <div
                    className="grid place-items-center rounded-full bg-white border border-black/10"
                    style={{ width: 84, height: 84 }}
                  >
                    <img
                      src={logo}
                      alt="ELITE YACHTS"
                      className="w-15 opacity-95"
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-black/10" />
            </div>
          </div>

          <div className="space-y-6 text-left">
            <LightCard>
              <p className="text-[11px] tracking-[0.3em] text-slate-500 uppercase">
                Starting from
              </p>

              <div className="mt-2 flex items-end gap-3 flex-wrap justify-start">
                {yacht.oldPrice && !priceIsText && (
                  <span className="text-sm line-through text-slate-400">
                    AED {yacht.oldPrice}
                  </span>
                )}

                {priceIsText ? (
                  <div className="text-2xl font-semibold tracking-wide text-slate-900">
                    Contact us for pricing
                  </div>
                ) : (
                  <div className="text-3xl font-semibold tracking-wide text-slate-900">
                    AED {yacht.price}
                    <span className="text-sm font-normal text-slate-600">
                      {" "}
                      / hour
                    </span>
                  </div>
                )}
              </div>

              {yacht.description && (
                <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                  {yacht.description}
                </p>
              )}
            </LightCard>

            <LightCard>
              <p className="text-[11px] tracking-[0.3em] text-slate-500 uppercase">
                Yacht Specifications
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
                <Spec icon="fa-ruler" label="Length" value={fmtValue(yacht.lengthFt, "ft")} />
                <Spec icon="fa-bed" label="Cabins" value={fmtValue(yacht.cabins)} />
                <Spec icon="fa-user-group" label="Capacity" value={fmtValue(yacht.capacity, "PAX")} />
                <Spec icon="fa-user-tie" label="Crew" value={fmtValue(yacht.crew)} />
              </div>
            </LightCard>

            <LightCard>
              <p className="text-[11px] tracking-[0.3em] text-slate-500 uppercase">
                Contact Us
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Action
                  href={`mailto:info@elitepearlcharter.com?subject=${encodeURIComponent(
                    `Yacht Booking: ${yacht.title}`
                  )}`}
                  icon="envelope"
                  label="Email"
                />

                <Action href={PHONE_TEL} icon="phone" label={PHONE_DISPLAY} solid />

                <Action
                  href={WHATSAPP_LINK}
                  iconType="brands"
                  icon="whatsapp"
                  label="WhatsApp"
                />
              </div>
            </LightCard>
          </div>
        </div>

        {gallery.length > 0 && (
          <div className="mt-14 text-left">
            <h2 className="text-sm tracking-[0.3em] uppercase text-slate-800">
              Gallery
            </h2>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => {
                    setLightboxIndex(i);
                    setLightboxOpen(true);
                  }}
                  className="group relative rounded-2xl overflow-hidden border border-black/10 bg-white hover:border-black/20 transition"
                  style={{ boxShadow: "0 14px 34px rgba(15,23,42,0.10)" }}
                >
                  <img
                    src={src}
                    alt={`Image ${i + 1}`}
                    className="w-full h-[150px] object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />

                  <div className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 md:hidden">
                    <div
                      className="grid place-items-center rounded-full bg-white/92 backdrop-blur border border-black/10"
                      style={{
                        width: 44,
                        height: 44,
                        boxShadow: "0 10px 22px rgba(15,23,42,0.14)",
                      }}
                    >
                      <div
                        className="grid place-items-center rounded-full bg-white border border-black/10"
                        style={{ width: 38, height: 38 }}
                      >
                        <img
                          src={logo}
                          alt="ELITE YACHTS"
                          className="w-6 opacity-95"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.10),transparent_55%)]" />
                </button>
              ))}
            </div>
          </div>
        )}

        {megaText && (
          <div className="mt-14 text-left">
            <LightCard>
              <h2 className="text-sm tracking-[0.3em] uppercase text-slate-800">
                About this Yacht
              </h2>
              <div className="mt-4 text-slate-600 leading-relaxed text-sm whitespace-pre-line">
                {megaText}
              </div>
            </LightCard>
          </div>
        )}

        {Array.isArray(yacht.keywords) && yacht.keywords.length > 0 && (
          <div className="mt-10">
            <LightCard>
              <h3 className="text-sm tracking-[0.25em] uppercase text-slate-800 text-left">
                Keywords
              </h3>

              <div className="mt-4 flex flex-wrap gap-2 justify-start">
                {yacht.keywords.slice(0, 18).map((k, idx) => (
                  <span
                    key={k + idx}
                    className="text-[12px] rounded-full border border-black/10 bg-white px-3 py-1 text-slate-700"
                    style={{ boxShadow: "0 10px 22px rgba(15,23,42,0.06)" }}
                  >
                    {k}
                  </span>
                ))}
              </div>
            </LightCard>
          </div>
        )}

        {relatedYachts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold tracking-widest mb-8 text-slate-900 text-left">
              Similar Yachts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedYachts.slice(0, 9).map((y) => (
                <YachtCard key={y.slug} yacht={y} />
              ))}
            </div>
          </div>
        )}
      </div>

      <section
        aria-label="Luxury yacht details in Dubai Marina – trip specs and booking options"
        className="w-full bg-white"
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="h-px w-full bg-black/10 mb-10" />

            <p className="text-[11px] tracking-[0.32em] uppercase text-black/60 text-center">
              Yacht Details • Dubai Marina • VIP Experience
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-tight text-center">
              Details of <strong>Luxury Yacht Rental in Dubai Marina</strong> —
              a Sea Experience Tailored to You
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-black/75">
              This yacht is an ideal option for anyone looking for a{" "}
              <strong>yacht trip in Dubai</strong> that combines comfort,
              privacy, and professional organization. Whether you are planning a{" "}
              <strong>family sea cruise</strong>, a special occasion, or a
              relaxing experience in <strong>Dubai Marina</strong>, this yacht
              offers comfortable space, an elegant design, and equipment suitable
              for different types of sea trips.
            </p>

            <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-black/75">
              You can book this yacht within{" "}
              <strong>yacht booking options in Dubai</strong> by the hour or for
              multiple hours, with full flexibility to choose the route, the
              departure time, and the number of guests. All trips depart from{" "}
              <strong>Dubai Marina yacht boarding points</strong>, with a clear
              boarding and disembarkation process to ensure a smooth experience
              from start to finish.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Space & Comfort",
                  body: (
                    <>
                      The yacht design includes indoor and outdoor seating areas
                      to enjoy sea views. Ideal for{" "}
                      <strong>sea trips in Dubai</strong> that require both
                      comfort and privacy.
                    </>
                  ),
                },
                {
                  title: "Trips & Occasions",
                  body: (
                    <>
                      Perfect for organizing a{" "}
                      <strong>yacht birthday party in Dubai</strong>, private
                      gatherings, or relaxation cruises. The experience can also
                      be customized to include a{" "}
                      <strong>dinner on a yacht in Dubai</strong> upon request.
                    </>
                  ),
                },
                {
                  title: "Duration & Pricing",
                  body: (
                    <>
                      <strong>Yacht rental prices in Dubai</strong> vary based
                      on the number of hours and guests. We provide full
                      transparency in{" "}
                      <strong>Dubai Marina yacht rental prices</strong> with no
                      hidden fees.
                    </>
                  ),
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-base font-semibold text-black tracking-[0.10em]">
                    {x.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/75">
                    {x.body}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mt-14 text-xl sm:text-2xl font-semibold text-black tracking-[0.10em]">
              Why is this yacht a perfect choice for your sea trip?
            </h3>

            <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-black/75">
              Choosing the right yacht directly affects the quality of your{" "}
              <strong>sea trip in Dubai</strong>. This yacht meets the needs of
              people looking for a <strong>Dubai yacht</strong> in terms of
              cleanliness, readiness, and easy booking. It’s also a practical
              option for those who want to <strong>rent a yacht</strong> without
              complications or lengthy procedures.
            </p>

            <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-black/75">
              If you are comparing <strong>yacht rental</strong> options within{" "}
              <strong>Dubai Marina</strong>, this yacht offers an excellent
              balance between price, size, and the cruising experience. It is
              also suitable for anyone looking for a{" "}
              <strong>daily yacht rental</strong> (subject to availability).
            </p>

            <div className="mt-12 rounded-3xl border border-black/10 bg-black/[0.03] p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-black tracking-[0.10em]">
                Similar yachts and other options
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-black/75">
                You can explore other yachts in the same category or similar
                sizes through the links below:
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5 justify-start">
                {[
                  { label: "Sea trips in Dubai", href: "/en/dubai-yacht-rental-modern-100ft" },
                  { label: "Sea trips in Dubai Marina", href: "/en/dubai-yacht-rental-ferretti-67ft" },
                  { label: "Sea trip in Dubai", href: "/en/dubai-yacht-rental-majesty-48ft" },
                  { label: "Sea trip in Dubai Marina", href: "/en/dubai-yacht-rental-ferretti-78ft" },
                  { label: "Family sea cruise", href: "/en/dubai-yacht-rental-orix-36ft" },
                  { label: "Dinner sea trip in Marina", href: "/en/dubai-yacht-rental-majesty-88ft" },
                  { label: "Dinner sea trip in Dubai", href: "/en/dubai-yacht-rental-riva-82ft" },

                  { label: "Dubai Marina yacht boarding points", href: "/en/dubai-yacht-rental-majesty-101ft" },
                  { label: "Yacht booking in Dubai", href: "/en/dubai-yacht-rental-axi-63ft" },
                  { label: "Yacht trip in Dubai", href: "/en/dubai-yacht-rental-sunseeker-70ft" },

                  { label: "Dubai yacht", href: "/en/dubai-yacht-rental-majesty-44ft" },
                  { label: "Dubai yachts", href: "/en/dubai-yacht-rental-majesty-56ft" },

                  { label: "Yacht rental prices in Dubai", href: "/en/dubai-yacht-rental-baglietto-108ft" },
                  { label: "Yacht hire prices in Dubai", href: "/en/dubai-yacht-rental-sunseeker-108ft" },
                  { label: "Dubai Marina yacht rental prices", href: "/dubai-yacht-rental-majesty-101ft" },

                  { label: "Yacht hire in Dubai", href: "/en/dubai-yacht-rental-benetti-110ft" },
                  { label: "Yacht hire in Dubai Marina", href: "/en/dubai-yacht-rental-benetti-114ft" },

                  { label: "Yacht birthday in Dubai", href: "/en/dubai-yacht-rental-galeon-78ft" },
                  { label: "Daily yacht rental", href: "/en/dubai-yacht-rental-vandutch-40ft" },

                  { label: "Dinner on a yacht in Dubai", href: "/en/dubai-yacht-rental-riva-82ft" },
                  { label: "Dinner on a yacht in Dubai Marina", href: "/en/dubai-yacht-rental-majesty-88ft" },

                  { label: "Rent a yacht", href: "/en/dubai-yacht-rental-orix-36ft" },
                  { label: "Rent yachts", href: "/en/dubai-yacht-rental-majesty-56ft" },
                  { label: "Yacht hire Dubai Marina", href: "/en/dubai-yacht-rental-santorini-115ft" },
                  { label: "Yacht hire Dubai Marina", href: "/en/dubai-yacht-rental-saffuriya-120ft" },

                  { label: "Yacht rental", href: "/dubai-yacht-rental-orix-36ft" },
                  { label: "Yacht rentals", href: "/dubai-yacht-rental-royalty-134ft" }
                ].map((item) => (
                  <a
                    key={item.label + item.href}
                    href={item.href}
                    className="inline-flex items-center rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-[12px] text-black/80 font-semibold shadow-[0_10px_26px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-black hover:text-white hover:border-black"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-10 text-[13px] leading-[2.0] text-black/65">
              Popular searches: <strong>yacht trip in Dubai</strong> •{" "}
              <strong>sea trips in Dubai Marina</strong> •{" "}
              <strong>Dubai yacht</strong> •{" "}
              <strong>Dubai yachts</strong> •{" "}
              <strong>yacht booking in Dubai</strong> •{" "}
              <strong>yacht rental prices in Dubai</strong> •{" "}
              <strong>dinner on a yacht in Dubai</strong> •{" "}
              <strong>rent a yacht</strong> •{" "}
              <strong>yacht rentals</strong>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white text-slate-900">
        <FAQSection />
      </div>

      {lightboxOpen && gallery.length > 0 && (
        <GalleryLightbox
          images={gallery}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((v) => (v - 1 + gallery.length) % gallery.length)}
          onNext={() => setLightboxIndex((v) => (v + 1) % gallery.length)}
          showLogo
        />
      )}
    </div>
  );
}

function normalizeSlug(s) {
  if (!s) return "";
  return String(s)
    .replace(/^\/|\/$/g, "")
    .replace(/^yacht\//, "")
    .toLowerCase();
}

function setMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setOG(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function LightCard({ children }) {
  return (
    <div
      className="rounded-3xl border border-black/10 bg-white p-6"
      style={{ boxShadow: "0 18px 50px rgba(15,23,42,0.12)" }}
    >
      {children}
    </div>
  );
}

function Spec({ icon, label, value }) {
  return (
    <div
      className="rounded-2xl border border-black/10 bg-white p-4 text-left"
      style={{ boxShadow: "0 12px 30px rgba(15,23,42,0.10)" }}
    >
      <div className="flex items-center gap-3 justify-between text-slate-800">
        <span className="text-sm tracking-wider">{label}</span>
        <i className={`fa-solid ${icon}`} />
      </div>

      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function Action({ href, iconType = "solid", icon, label, solid }) {
  const iconClass =
    iconType === "brands" ? `fa-brands fa-${icon}` : `fa-solid fa-${icon}`;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all duration-300";

  const style = solid
    ? "border border-black/10 bg-black text-white hover:bg-black/90"
    : "border border-black/10 bg-white text-slate-900 hover:border-black/20 hover:bg-slate-50";

  return (
    <a
      href={href}
      className={`${base} ${style}`}
      style={{
        boxShadow: solid
          ? "0 14px 34px rgba(15,23,42,0.18)"
          : "0 14px 34px rgba(15,23,42,0.10)",
      }}
    >
      <i className={iconClass} />
      <span className="truncate">{label}</span>
    </a>
  );
}

function fmtValue(v, suffix) {
  if (v === null || v === undefined || v === "" || v === "N/A") return "—";
  const out = String(v);
  return suffix ? `${out} ${suffix}` : out;
}
