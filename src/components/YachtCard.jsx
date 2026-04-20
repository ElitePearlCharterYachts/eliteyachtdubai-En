import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import logo from "../assets/logo.png";
import WhatsAppModal from "../components/WhatsAppModal";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return dateStr;
  return `${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/${y}`;
}

export default function YachtCard({ yacht }) {
  const [waOpen, setWaOpen] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const yachtUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const origin = window.location.origin;
    const slug = yacht?.slug ? encodeURIComponent(yacht.slug) : "";
    return slug ? `${origin}/en/${slug}` : window.location.href;
  }, [yacht?.slug]);

  useEffect(() => {
    if (!waOpen) return;

    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    setDate((p) => p || `${yyyy}-${mm}-${dd}`);

    const next = new Date(now.getTime() + 60 * 60 * 1000);
    const hh = String(next.getHours()).padStart(2, "0");
    setTime((p) => p || `${hh}:00`);

    const cap =
      typeof yacht?.capacity === "number"
        ? yacht.capacity
        : Number(String(yacht?.capacity || "").replace(/[^\d]/g, ""));
    setGuests((p) => p || String(cap || 2));
  }, [waOpen, yacht?.capacity]);

  const waMessage = useMemo(() => {
    const lines = [];
    lines.push("Hello Elite Yacht Dubai");
    if (date) lines.push(`Date: ${formatDate(date)}`);
    if (time) lines.push(`Time: ${time}`);
    if (guests) lines.push(`Guests: ${guests}`);
    if (yachtUrl) lines.push(`Link: ${yachtUrl}`);
    lines.push("Please confirm availability and final price.");
    return lines.join("\n");
  }, [date, time, guests, yachtUrl]);

  const waHref = useMemo(() => {
    const phone = "971569006603";
    return `https://wa.me/${phone}?text=${encodeURIComponent(waMessage)}`;
  }, [waMessage]);

  return (
    <>
      <article
        dir="ltr"
        lang="en"
        className="
          group relative w-full
          rounded-[28px] bg-white
          border border-black/10
          shadow-[0_18px_55px_rgba(15,23,42,0.10)]
          transition-all duration-500
          hover:-translate-y-1
          hover:shadow-[0_28px_75px_rgba(0,0,0,0.14)]
        "
      >
        <div className="relative p-4 pb-0">
          <div className="relative rounded-[22px] overflow-hidden border border-black/10">
            <img
              src={yacht.mainImage}
              alt={yacht.title}
              className="
                w-full object-cover
                h-[260px] sm:h-[320px]
                transition-transform duration-700
                group-hover:scale-[1.04]
              "
              loading="lazy"
            />

            <div className="absolute top-3 left-3 z-10">
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  bg-white/85 backdrop-blur
                  border border-black/10
                  px-3 py-1
                  text-[10px] font-semibold
                  text-black/70
                  shadow-[0_10px_26px_rgba(15,23,42,0.12)]
                "
              >
                Elite Yacht
              </span>
            </div>
          </div>

          <div className="absolute left-1/2 top-5 -translate-x-1/2 z-20">
            <div
              className="
                h-12 w-12 sm:h-14 sm:w-14
                rounded-full
                bg-white
                border border-black/10
                shadow-[0_14px_34px_rgba(15,23,42,0.16)]
                grid place-items-center
              "
            >
              <img
                src={logo}
                alt="Elite Yacht Dubai"
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                draggable="false"
              />
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-4 text-center">
          {yacht.yachtKeyword ? (
            <p className="mt-2 text-[11px] font-semibold text-black/55">
              {yacht.title}
            </p>
          ) : (
            <p className="mt-2 text-[11px] text-black/55">Elite Yacht Dubai™</p>
          )}

          <h3 className="mt-2 text-[16px] sm:text-[20px] font-semibold text-black">
            {yacht.yachtKeyword ? yacht.yachtKeyword : "Luxury Yacht Rental in Dubai"}
          </h3>

          <div className="mt-5">
            <div className="mt-2 flex items-end justify-center gap-2 text-black">
              <span className="text-[12px] text-black/60 font-semibold">/ hour</span>
              {yacht.oldPrice ? (
                <div className="flex items-center justify-center gap-2 text-black/40 text-[12px]">
                  <span className="line-through">{yacht.oldPrice}</span>
                </div>
              ) : null}
              <span className="text-[26px] font-extrabold tracking-tight">
                {yacht.price}
              </span>
              <span className="text-[12px] text-black/60 font-semibold">AED</span>
            </div>
          </div>

          <div className="mt-5 flex justify-center">
            <div
              className="
                w-full
                rounded-2xl
                border border-black/10
                bg-white
                shadow-[0_10px_24px_rgba(15,23,42,0.06)]
                px-4 py-3
                flex flex-wrap items-center justify-center
                gap-x-5 gap-y-2
                text-[11px] text-black/70
              "
            >
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <i className="fa-solid fa-ruler text-black/50" />
                Length: {yacht.lengthFt}
              </span>

              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <i className="fa-solid fa-bed text-black/50" />
                Cabins: {yacht.cabins}
              </span>

              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <i className="fa-solid fa-user-group text-black/50" />
                Guests: {yacht.capacity}
              </span>

              <span className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap">
                <i className="fa-solid fa-user-tie text-black/50" />
                Crew: {yacht.crew}
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setWaOpen(true)}
              className="
                rounded-full py-2.5
                text-[11px] font-bold
                bg-black text-white
                border border-black
                shadow-[0_12px_28px_rgba(0,0,0,0.18)]
                hover:bg-black/90
                transition
                flex items-center justify-center gap-2
              "
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-[15px]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>

            <a
              href="tel:+971569006603"
              className="
                rounded-full py-2.5
                text-[11px] font-bold
                bg-white text-black
                border border-black/15
                shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                hover:border-black/30
                hover:bg-black/[0.02]
                transition
                flex items-center justify-center gap-2
              "
              aria-label="Call"
            >
              <i className="fa-solid fa-phone text-[14px]" />
              <span className="hidden sm:inline">Call</span>
            </a>

            <Link
              to={`/${encodeURIComponent(yacht.slug)}`}
              className="
                rounded-full py-2.5
                text-[11px] font-bold
                bg-white text-black
                border border-black/15
                shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                hover:border-black/30
                hover:bg-black/[0.02]
                transition
                flex items-center justify-center gap-2
              "
              aria-label={`Details: ${yacht.title}`}
            >
              <i className="fa-solid fa-circle-info text-[14px]" />
              <span className="hidden sm:inline">Details</span>
            </Link>
          </div>
        </div>
      </article>

      <WhatsAppModal
        open={waOpen}
        onClose={() => setWaOpen(false)}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        waHref={waHref}
      />
    </>
  );
}
