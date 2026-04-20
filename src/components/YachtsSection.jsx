import { useEffect, useMemo, useState } from "react";
import YachtCard from "./YachtCard";

export default function YachtsSection() {
  const [yachts, setYachts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();

    fetch("/en/data/yachts.json", {
      signal: ctrl.signal,
      cache: "force-cache",
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        setYachts(Array.isArray(json) ? json : []);
        setLoading(false);
      })
      .catch((e) => {
        if (e?.name !== "AbortError") console.error(e);
        setLoading(false);
      });

    return () => ctrl.abort();
  }, []);

  const CHIPS = useMemo(
    () => [
      "Yacht Rental Dubai",
      "Luxury Yacht Rental in Dubai",
      "Private Yacht Dubai Marina",
      "Book Yacht Dubai via WhatsApp",
      "VIP Yacht Cruises Dubai",
      "Yacht Parties in Dubai",
      "Corporate Yacht Events",
      "Sunset Yacht Cruises",
      "Yacht for Rent in Dubai",
      "Best Yacht Rental Company in Dubai",
    ],
    []
  );

  return (
    <section dir="ltr" lang="en" className="relative w-full bg-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.05),transparent_52%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.03),transparent_35%,rgba(15,23,42,0.02))]" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.38em] mb-3 text-black/55 uppercase">
            Luxury Yacht Collection
          </p>

          <h2 className="font-logo font-light tracking-wide text-black text-[20px] sm:text-[30px] md:text-[36px]">
            Elite Yacht Dubai Fleet
          </h2>

          <div className="mx-auto mt-5 h-px w-36 bg-black/10" />

          <p className="mt-5 text-black/70 max-w-2xl mx-auto leading-relaxed text-[12px] sm:text-[13px] md:text-[14px]">
            We manage our fleet directly, offering a seamless experience, transparent pricing, and VIP service from Dubai Marina.
            Choose the perfect yacht for a private cruise, party, corporate event, or sunset experience with fast booking by phone
            or WhatsApp.
          </p>

          <div className="mt-6 text-black/60 max-w-3xl mx-auto leading-relaxed text-[11px] sm:text-[12.5px] md:text-[13.5px]">
            If you are looking for luxury yacht rental in Dubai or a private yacht in Dubai Marina, you will find a wide selection
            tailored to guest count, budget, and occasion with quick confirmation.
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {CHIPS.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] text-black/75 shadow-[0_10px_24px_rgba(15,23,42,0.06)] hover:border-black/20 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="h-44 rounded-2xl bg-black/5" />
                <div className="mt-4 h-4 w-2/3 rounded bg-black/5" />
                <div className="mt-2 h-4 w-1/2 rounded bg-black/5" />
                <div className="mt-4 h-10 rounded-full bg-black/5" />
              </div>
            ))}
          </div>
        ) : yachts.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yachts.map((yacht) => (
              <YachtCard key={yacht.slug} yacht={yacht} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl text-center rounded-3xl border border-black/10 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <h3 className="text-[17px] md:text-[19px] font-light tracking-wide text-black">
              No yachts available at the moment
            </h3>
            <p className="mt-3 text-black/65 leading-relaxed text-[12px] md:text-[14px]">
              Contact us now and we will recommend the best available options based on your date, duration, and number of guests.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="tel:+971569006603"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 text-[12px] tracking-[0.18em] uppercase font-bold text-black border border-black/15 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:border-black/30 hover:bg-black/[0.02] transition"
              >
                <i className="fa-solid fa-phone" />
                Call Us
              </a>
              <a
                href="https://wa.me/971569006603"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 text-[12px] tracking-[0.18em] uppercase font-bold text-white border border-black bg-black shadow-[0_10px_28px_rgba(15,23,42,0.14)] hover:bg-black/90 transition"
              >
                <i className="fa-brands fa-whatsapp" />
                WhatsApp
              </a>
            </div>
          </div>
        )}

        <div className="mt-20 text-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-black/10" />
            <span className="text-[10px] tracking-[0.35em] text-black/45 uppercase">
              Need Assistance?
            </span>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <h3 className="text-[18px] md:text-[22px] font-light tracking-wide text-black">
            Didn’t find the yacht you’re looking for?
          </h3>

          <p className="mt-3 text-black/65 max-w-xl mx-auto leading-relaxed text-[12px] md:text-[14px]">
            Our team will help you select the ideal yacht based on group size, budget, and occasion, with fast recommendations for
            private yachts in Dubai Marina and exclusive VIP experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+971569006603"
              aria-label="Call us to book a yacht in Dubai"
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 text-[12px] tracking-[0.18em] uppercase font-bold text-black border border-black/15 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:border-black/30 hover:bg-black/[0.02] transition"
            >
              <i className="fa-solid fa-phone" />
              Call Us
            </a>

            <a
              href="https://wa.me/971569006603"
              target="_blank"
              rel="noreferrer"
              aria-label="Contact us on WhatsApp to book a yacht in Dubai"
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 text-[12px] tracking-[0.18em] uppercase font-bold text-white border border-black bg-black shadow-[0_10px_28px_rgba(15,23,42,0.14)] hover:bg-black/90 transition"
            >
              <i className="fa-brands fa-whatsapp" />
              WhatsApp
            </a>
          </div>

          <p className="mt-6 text-[10px] tracking-[0.22em] text-black/45 uppercase">
            VIP Service • Dubai Marina • Fast Booking by Phone or WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
