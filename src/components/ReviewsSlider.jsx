import { useEffect, useMemo, useRef, useState } from "react";

const REVIEWS = [
  {
    name: "Aisha M.",
    location: "Yacht Party",
    rating: 5,
    text:
      "Best luxury yacht rental experience in Dubai. The yacht was extremely clean, the crew was professional, and booking was smooth. Perfect for a private yacht trip in Dubai Marina.",
  },
  {
    name: "Omar R.",
    location: "Gender Reveal Celebration",
    rating: 5,
    text:
      "High-quality yacht rental in Dubai with great service. Excellent sound system, comfortable seating, and a very friendly captain. Highly recommended for Dubai Marina yacht rental.",
  },
  {
    name: "Sara K.",
    location: "Marry Me Yacht Setup",
    rating: 5,
    text:
      "We booked a private yacht in Dubai for a birthday and it felt truly VIP. Clean yacht, punctual crew, and an amazing view. One of the best yacht charter companies in Dubai.",
  },
  {
    name: "Daniel H.",
    location: "Yacht Proposal",
    rating: 5,
    text:
      "Luxury yacht rental in Dubai done right. Fast WhatsApp replies, clear pricing, and a classy yacht. Booking a yacht in Dubai was super easy.",
  },
  {
    name: "Fatima A.",
    location: "Yacht Wedding Celebration",
    rating: 5,
    text:
      "Excellent Dubai yacht rental experience with great hospitality. The yacht was modern and very clean. Ideal for a sunset cruise and a premium Dubai Marina experience.",
  },
  {
    name: "Mohammed S.",
    location: "Corporate Yacht Event",
    rating: 5,
    text:
      "Professional crew and a premium luxury yacht rental experience in Dubai. Perfect for corporate guests. If you're looking for a yacht in Dubai, this is genuinely premium service.",
  },
];

function Stars({ value = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`fa-solid fa-star text-[11px] sm:text-[12px] ${
            i < value ? "text-black" : "text-black/20"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSlider() {
  const getPerView = () => {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1280) return 2;
    return 3;
  };

  const [perView, setPerView] = useState(getPerView());
  const [index, setIndex] = useState(0);

  const timerRef = useRef(null);
  const isHoverRef = useRef(false);

  const maxIndex = useMemo(() => Math.max(0, REVIEWS.length - perView), [perView]);

  useEffect(() => {
    const onResize = () => setPerView(getPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const next = () => setIndex((v) => (v >= maxIndex ? 0 : v + 1));
  const prev = () => setIndex((v) => (v <= 0 ? maxIndex : v - 1));

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (!isHoverRef.current) next();
    }, 4200);

    return () => clearInterval(timerRef.current);
  }, [maxIndex, perView]);

  const dots = useMemo(
    () => Array.from({ length: maxIndex + 1 }).map((_, i) => i),
    [maxIndex]
  );

  return (
    <section
      lang="en"
      dir="ltr"
      aria-label="Elite Yacht Dubai Reviews - Luxury Yacht Rental in Dubai Marina"
      className="relative w-full bg-white py-20 overflow-hidden"
    >
      <p className="sr-only">
        Verified reviews for luxury yacht rentals in Dubai with Elite Yacht Dubai. Fast booking via WhatsApp,
        VIP service, professional crew, and yachts ideal for private trips, parties, and corporate events in Dubai Marina.
      </p>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(0,0,0,0.035),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.03),transparent_35%,rgba(0,0,0,0.02))]" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 max-w-4xl mx-auto">
          <p className="text-[10px] sm:text-[11px] tracking-[0.30em] text-black/55 uppercase">
            Guest Reviews • Dubai Marina • VIP Service
          </p>

          <h2 className="mt-3 text-[22px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-black">
            What do guests say about <span className="font-bold">Elite Yachts</span>?
          </h2>

          <p className="mt-5 text-black/70 max-w-3xl mx-auto leading-relaxed text-[13px] sm:text-[14px]">
            Real feedback from guests who chose{" "}
            <span className="text-black font-semibold">yacht rental in Dubai</span>{" "}
            with{" "}
            <span className="text-black font-semibold">Elite Yacht Dubai</span>{" "}
            for private trips, parties, and corporate events — VIP service, professional crew, and fast booking.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2 text-[11px] sm:text-[12px]">
            {[
              "Dubai Marina Yacht Rental",
              "Book via WhatsApp",
              "Luxury Yachts in Dubai",
              "Private Yacht in Dubai",
              "VIP Yacht Trips",
              "Luxury Yacht Rental Dubai",
            ].map((t) => (
              <span
                key={t}
                className="
                  inline-flex items-center
                  rounded-full
                  border border-black/10
                  bg-white
                  px-3 py-1.5
                  text-black/75
                  shadow-[0_10px_24px_rgba(15,23,42,0.06)]
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => (isHoverRef.current = true)}
          onMouseLeave={() => (isHoverRef.current = false)}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="
              absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10
              h-11 w-11 rounded-full
              border border-black/10
              bg-white
              text-black/60
              shadow-[0_10px_28px_rgba(0,0,0,0.10)]
              transition
              hover:border-black/25
              hover:text-black
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)]
              active:scale-[0.99]
            "
          >
            <i className="fa-solid fa-chevron-left text-[12px]" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="
              absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10
              h-11 w-11 rounded-full
              border border-black/10
              bg-white
              text-black/60
              shadow-[0_10px_28px_rgba(0,0,0,0.10)]
              transition
              hover:border-black/25
              hover:text-black
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)]
              active:scale-[0.99]
            "
          >
            <i className="fa-solid fa-chevron-right text-[12px]" />
          </button>

          <div className="overflow-hidden">
            <div className="-mx-3">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
              >
                {REVIEWS.map((r, i) => (
                  <div
                    key={r.name + i}
                    className="px-3 shrink-0"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <ReviewCard review={r} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            {dots.map((d) => (
              <button
                key={d}
                type="button"
                aria-label={`Go to review ${d + 1}`}
                onClick={() => setIndex(d)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  d === index
                    ? "w-9 bg-black shadow-[0_0_18px_rgba(0,0,0,0.16)]"
                    : "w-2 bg-black/20 hover:bg-black/45"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div
      className="
        group relative h-full
        rounded-2xl bg-white
        border border-black/10
        p-6
        shadow-[0_14px_40px_rgba(0,0,0,0.08)]
        transition-all duration-500
        hover:-translate-y-1
        hover:border-black/20
        hover:shadow-[0_18px_55px_rgba(0,0,0,0.12)]
      "
    >
      <div className="flex items-start justify-between gap-4">
        <Stars value={review.rating} />

        <div className="min-w-0 text-left">
          <div className="flex items-center justify-start gap-2">
            <p className="text-[13px] sm:text-[14px] tracking-wide text-black/80 truncate">
              {review.name}
            </p>

            <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-black/50">
              <i className="fa-solid fa-circle-check text-[#0AABF7]/90" />
              Verified
            </span>
          </div>

          <p className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-black/40 mt-1">
            {review.location}
          </p>
        </div>
      </div>

      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      <p className="mt-4 text-black/65 leading-relaxed text-[13px] sm:text-[14px] text-left">
        “{review.text}”
      </p>

      <div className="mt-6 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-black/45">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-black/50" />
          Dubai
        </span>
        <span className="text-black/80 text-[13px] sm:text-[14px] tracking-tight">
          Elite Yachts
        </span>
      </div>
    </div>
  );
}
