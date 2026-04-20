import { useState } from "react";

const K = ({ children }) => (
  <strong className="font-extrabold text-slate-900">{children}</strong>
);

const FAQS = [
  {
    q: "How can I book a yacht in Dubai easily and quickly?",
    a: (
      <>
        Booking with us is very simple: just send us a WhatsApp message with
        (date + number of guests + trip duration + departure location), and we
        will immediately suggest the best available <K>Dubai yachts</K>. Once
        you choose the right yacht, we send you full <K>yacht booking in Dubai</K>{" "}
        details (price, duration, departure point). After confirmation with a
        deposit/payment, you will receive a final message including the marina
        location, captain’s name, and arrival instructions. This makes{" "}
        <K>Dubai yacht rental</K> fast, clear, and hassle-free.
      </>
    )
  },
  {
    q: "What is included in the Dubai yacht rental price? Are there extra fees?",
    a: (
      <>
        The <K>Dubai yacht rental</K> price usually includes the yacht, captain
        and crew, and basic onboard facilities (indoor & outdoor seating,
        restroom, and sound system depending on the yacht). In many cases,
        fuel is included for standard cruising routes within <K>Dubai</K>.
        Additional charges apply only if you request special services such as{" "}
        <K>yacht party decoration in Dubai</K>, catering, cake, floral setup,
        professional photography, or extended/custom routes. Before confirming,
        everything is explained clearly so your <K>yacht booking in Dubai</K> is
        100% transparent.
      </>
    )
  },
  {
    q: "How many people are allowed on a yacht, and how do I choose the right one?",
    a: (
      <>
        <K>Dubai yachts</K> vary in capacity depending on the yacht type and
        license. For maximum comfort, we recommend choosing a yacht with a
        slightly higher capacity than your guest count, especially for parties
        and <K>Dubai yacht trips</K>. Just send us the number of guests and we
        will recommend the best <K>Dubai yacht rental</K> options with photos
        and full specifications.
      </>
    )
  },
  {
    q: "What is the minimum booking duration? Is hourly rental available in Dubai Marina?",
    a: (
      <>
        Most <K>Dubai yacht rental</K> options are available on an hourly basis,
        with a minimum of 1–2 hours depending on the yacht and the day (especially
        on weekends). Short trips are perfect for quick photos or a Marina cruise.
        For parties or visiting landmarks like Palm Jumeirah and Burj Al Arab,
        we recommend 3 hours or more. We help you choose the ideal duration
        before confirming your <K>yacht booking in Dubai</K>.
      </>
    )
  },
  {
    q: "Can we bring our own food and drinks? Do you offer catering or BBQ?",
    a: (
      <>
        Yes, on most <K>Dubai yachts</K> you are welcome to bring your own food
        and beverages. If you prefer a fully arranged experience, we also offer
        catering options including light snacks, meal boxes, or{" "}
        <K>BBQ on a yacht in Dubai</K> (subject to yacht facilities). Share your
        guest count and cuisine preferences, and we will suggest the best option
        before confirming your <K>Dubai yacht rental</K>.
      </>
    )
  },
  {
    q: "Can you arrange decorations for birthdays, engagements, or proposals?",
    a: (
      <>
        Absolutely. This is one of the most popular requests for{" "}
        <K>Dubai yachts</K>. We can fully arrange{" "}
        <K>yacht party decorations in Dubai</K>, including balloons, name boards,
        cake tables, flowers, candles, lighting, and surprise proposal setups.
        Just share a simple idea (colors, name, timing) and we’ll handle the rest.
        This makes <K>yacht booking in Dubai</K> for special occasions easy and
        stress-free.
      </>
    )
  },
  {
    q: "Where is the departure location? Is there assistance on arrival?",
    a: (
      <>
        Most yachts depart from <K>Dubai Marina</K> or nearby marinas depending
        on availability. After confirming your <K>yacht booking in Dubai</K>,
        we send you the exact location, meeting point, and arrival instructions.
        If you arrive early, no problem—just let us know. Our goal is to make
        your <K>Dubai yacht rental</K> smooth from the very first minute.
      </>
    )
  },
  {
    q: "What about safety? Are yachts suitable for families and children?",
    a: (
      <>
        Safety is a top priority on all <K>Dubai yachts</K>. Each yacht includes
        a professional crew, essential safety equipment, and an experienced
        captain familiar with local routes. Many <K>Dubai yacht rentals</K> are
        family-friendly and suitable for children. If you have kids, let us know
        their ages and we’ll recommend the most suitable yacht and safety tips.
      </>
    )
  },
  {
    q: "What happens if the weather conditions are not suitable?",
    a: (
      <>
        In case of unsafe weather conditions, guest safety always comes first.
        We will contact you to offer the best solution—rescheduling or an
        alternative option—based on yacht policy and availability. We always
        explain these options clearly so your <K>yacht booking in Dubai</K> is
        transparent from the start.
      </>
    )
  },
  {
    q: "How do I confirm the booking and what is required?",
    a: (
      <>
        Your <K>yacht booking in Dubai</K> is confirmed after a deposit or full
        payment as agreed. Once confirmed, you will receive the yacht name,
        duration, departure location, arrival instructions, and contact details.
        We simplify every step to ensure your <K>Dubai yacht rental</K> is fast,
        secure, and free of surprises.
      </>
    )
  },
  {
    q: "Is same-day booking available? Can a yacht be arranged within one hour?",
    a: (
      <>
        Yes. If availability allows, same-day <K>yacht booking in Dubai</K> is
        possible, especially during off-peak hours. Message us on WhatsApp with
        (guest count + duration + time), and we’ll instantly share available{" "}
        <K>Dubai yachts</K> with clear pricing. The earlier you contact us, the
        better your chances of securing the best option.
      </>
    )
  },
  {
    q: "What is the cancellation policy? Can I change my booking date?",
    a: (
      <>
        Cancellation policies vary depending on the yacht and timing. In general,
        earlier cancellations offer more flexibility. If you need to change your{" "}
        <K>yacht booking in Dubai</K>, inform us as soon as possible and we will
        try to reschedule based on availability. All policies are explained
        clearly before confirming your <K>Dubai yacht rental</K>.
      </>
    )
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section dir="ltr" lang="en" className="w-full bg-white text-slate-900 py-16 sm:py-20">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[12px] sm:text-[13px] tracking-[0.35em] text-slate-500 uppercase">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-[0.14em] text-slate-900">
            Everything you need to know about <K>Dubai Yachts</K> & <K>Dubai Yacht Rental</K>
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            These answers help you make a fast and confident decision, clearly
            explaining the <K>yacht booking in Dubai</K> process from selection
            to departure at <K>Dubai Marina</K>.
          </p>
        </div>

        <div className="mx-auto max-w-[1100px] space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-[0_18px_60px_rgba(2,6,23,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] sm:text-sm font-semibold tracking-wide text-slate-900">
                      {item.q}
                    </p>
                    <div className="mt-2 h-px w-full bg-slate-200" />
                  </div>

                  <span
                    className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white text-slate-800 transition-all duration-300 hover:bg-slate-50"
                    aria-hidden="true"
                    title={isOpen ? "Close" : "Open"}
                  >
                    <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-chevron-down"}`} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 text-slate-600 text-sm">
          Ready to <K>book a yacht in Dubai</K>?{" "}
          <a
            href="https://wa.me/+971569006603"
            target="_blank"
            rel="noreferrer"
            className="text-slate-900 underline underline-offset-4 hover:opacity-80 transition font-extrabold"
          >
            Contact us on WhatsApp
          </a>
          .
        </div>
      </div>
    </section>
  );
}
