import { useMemo, useState } from "react";

const FAQS = [
  {
    q: "How do I book an Elite yacht in Dubai?",
    a: "You can book through the website, WhatsApp, or by calling us directly. We confirm trip details and send booking confirmation immediately."
  },
  {
    q: "Is Elite yacht availability real-time?",
    a: "Yes. Availability is confirmed in real time and your booking is finalized right after payment."
  },
  {
    q: "What are the steps to confirm an Elite yacht booking?",
    a: "Choose yacht & time → confirm availability → pay → receive confirmation/receipt → get departure location + boarding instructions."
  },
  {
    q: "Can I book an Elite yacht on the same day?",
    a: "Yes, subject to availability. Share your preferred time and guest count and we’ll recommend the best available option."
  },
  {
    q: "Do I need ID details to book an Elite yacht?",
    a: "We may request the booker’s name, contact number, and a few details to confirm the booking and arrange guest access."
  },
  {
    q: "Can I change my Elite yacht booking time after payment?",
    a: "Changes are possible based on availability and the booking policy. Contact us early to keep the same yacht level and timing."
  },
  {
    q: "Can I extend the Elite yacht trip while cruising?",
    a: "Yes, extensions are possible subject to availability, and extra hours are charged accordingly."
  },
  {
    q: "What is the minimum booking duration?",
    a: "The minimum booking duration is 2 hours."
  },
  {
    q: "Is there a maximum booking duration?",
    a: "There’s no fixed maximum. You can book for multiple hours or a full day depending on availability."
  },
  {
    q: "Can I book sunrise or sunset cruises?",
    a: "Yes. Sunrise and sunset are the most requested times, so we recommend booking early."
  },

  {
    q: "What payment methods do you accept?",
    a: "We accept secure online payments, credit/debit cards, bank transfers, and sometimes cash by arrangement."
  },
  {
    q: "Do I need to pay the full amount to confirm the booking?",
    a: "In most cases, yes, to officially reserve the time slot. For larger bookings, a deposit option may be available."
  },
  {
    q: "Do you provide a receipt or invoice?",
    a: "Yes. After payment, we send a receipt/confirmation with the date, time, and duration."
  },
  {
    q: "Do prices include VAT?",
    a: "Usually yes, and we confirm it clearly before payment to ensure transparency."
  },
  {
    q: "Is there a security deposit?",
    a: "For some private trips or extra setups, a refundable deposit may be required. We’ll inform you before confirmation."
  },
  {
    q: "Are there any hidden charges?",
    a: "No. Any add-ons (decoration, chef, transport, catering) are quoted clearly before you confirm."
  },
  {
    q: "Can guests split the payment?",
    a: "It can be arranged depending on the booking type, but confirmation depends on completing payment as agreed."
  },
  {
    q: "Can I pay in a currency other than AED?",
    a: "Payments are typically in AED. Some payment gateways may support other currencies depending on your bank."
  },
  {
    q: "Do you offer discounts?",
    a: "Seasonal offers or hour packages may be available. Ask the booking team for the best deal for your trip."
  },
  {
    q: "Can I get an official quotation before booking?",
    a: "Yes. Send guest count, duration, and date, and we’ll share an official quotation."
  },

  {
    q: "How many guests are allowed on board?",
    a: "Capacity depends on the yacht and can range from 10 up to 200 guests."
  },
  {
    q: "What yacht sizes do you offer?",
    a: "Our fleet starts from 36 ft and goes up to 300 ft."
  },
  {
    q: "How do I choose the right yacht size?",
    a: "Tell us your guest count and occasion (family, party, corporate) and we’ll recommend the best option for space and comfort."
  },
  {
    q: "Does the price change by yacht size?",
    a: "Yes. Pricing depends on yacht size, trip duration, sailing time, and any add-ons."
  },
  {
    q: "Do you have family-friendly yachts?",
    a: "Yes. We offer family-friendly options with comfortable seating and suitable space for kids."
  },
  {
    q: "Do you have yachts for large parties?",
    a: "Yes. We have larger options suitable for up to 200 guests depending on the yacht."
  },
  {
    q: "Do you offer VIP yachts?",
    a: "Yes. VIP categories are available with premium interiors and personalized services."
  },
  {
    q: "Can I combine multiple yachts for one event?",
    a: "Yes, subject to availability. We can arrange multiple yachts and coordinate departure and route."
  },
  {
    q: "Can I view the yacht before booking?",
    a: "In some cases, a viewing can be arranged depending on availability and timing."
  },
  {
    q: "Are the website yacht photos accurate?",
    a: "Yes. Photos represent the actual yachts, with minor differences possible due to upgrades or maintenance."
  },

  {
    q: "Where does the trip depart from?",
    a: "Most trips depart from Dubai Marina or approved locations depending on the booked yacht."
  },
  {
    q: "Can I choose the cruising route?",
    a: "Yes. Routes can be customized based on duration, weather, and captain guidance."
  },
  {
    q: "Can we include Ain Dubai or Burj Al Arab in the route?",
    a: "Yes. Iconic landmarks can be included depending on trip duration."
  },
  {
    q: "How long does it take to reach landmarks?",
    a: "It depends on the departure point and marine traffic. The captain will plan the best timing."
  },
  {
    q: "Can we stop for swimming?",
    a: "Yes, in permitted areas and based on captain instructions."
  },
  {
    q: "Can we board before the booking time?",
    a: "Typically you can board shortly before departure for smooth check-in, depending on the yacht schedule."
  },
  {
    q: "How early should I arrive?",
    a: "We recommend arriving 15–30 minutes before departure."
  },
  {
    q: "Is parking available near the departure point?",
    a: "Most departure locations have paid/available parking. We’ll share details before the trip."
  },
  {
    q: "Can I change the departure location?",
    a: "Depending on yacht permissions and permits, it can be discussed during booking."
  },
  {
    q: "Can we do professional photography on board?",
    a: "Yes. Professional shoots are allowed, and a photographer can be arranged as an add-on."
  },

  {
    q: "Do you offer catering on board?",
    a: "Yes. Catering is available with multiple menu options based on request."
  },
  {
    q: "Can I request a custom menu?",
    a: "Yes. We can tailor catering to your taste and budget (seafood, Arabic, international, snacks)."
  },
  {
    q: "Can I have a chef on board?",
    a: "Yes. A private chef can be arranged as an add-on service."
  },
  {
    q: "Can I bring my own food and drinks?",
    a: "In most cases, yes. You can bring your own food and beverages without extra fees."
  },
  {
    q: "Is there a fridge for food storage?",
    a: "Yes. Yachts have fridges and storage depending on yacht size."
  },
  {
    q: "Do you provide plates and serving tools?",
    a: "Yes, basic serving essentials are available. Special requests can be arranged as part of packages."
  },
  {
    q: "Can you arrange a birthday cake on board?",
    a: "Yes. We can arrange a cake and a special buffet through catering options."
  },
  {
    q: "Do you offer vegetarian/halal options?",
    a: "Yes. Vegetarian, halal, and other dietary options can be provided on request."
  },
  {
    q: "Can I add VIP hospitality service?",
    a: "Yes. VIP hospitality and premium setups are available on request."
  },
  {
    q: "Is catering an additional cost?",
    a: "Yes. Catering is priced based on the menu and guest count and is quoted clearly before confirmation."
  },

  {
    q: "Do you provide luxury decoration setups?",
    a: "Yes. We offer high-end decoration themes (extreme luxury) based on your request."
  },
  {
    q: "Is decoration included in the yacht price?",
    a: "No. Decoration is an add-on service with separate pricing depending on the setup level."
  },
  {
    q: "Can you arrange engagement/proposal decoration?",
    a: "Yes. We can arrange premium engagement/proposal setups with customized details."
  },
  {
    q: "Do you provide VIP guest transportation?",
    a: "Yes. VIP transport (luxury cars/limousine) can be arranged as an add-on."
  },
  {
    q: "Are pets allowed on board?",
    a: "No, pets are not allowed."
  },
  {
    q: "Is it safe for children?",
    a: "Yes. Safety equipment is available, and parents/guardians must supervise children at all times."
  },
  {
    q: "Does the trip include a captain and crew?",
    a: "Yes. Every booking includes a professional captain and trained crew."
  },
  {
    q: "What happens if weather is not suitable?",
    a: "In case of unsafe weather, we can reschedule or apply the refund policy depending on official guidance and the situation."
  },
  {
    q: "Can we play music on board?",
    a: "Yes. Sound systems are available, and you can play your own music while respecting marina regulations."
  },
  {
    q: "Can you organize corporate events on a yacht?",
    a: "Yes. Corporate events are supported with hospitality setups, seating areas, and custom offers."
  },

  {
    q: "Do you offer birthday packages?",
    a: "Yes. Birthday packages can include decoration, catering, and photography options."
  },
  {
    q: "Can I add a DJ?",
    a: "Yes. A professional DJ can be arranged as an add-on."
  },
  {
    q: "Do yachts have bedrooms and air-conditioned lounges?",
    a: "Yes. Most yachts include an A/C lounge and cabins depending on yacht size."
  },
  {
    q: "Can you arrange a romantic surprise?",
    a: "Yes. We can arrange a romantic setup with décor, lighting, and premium details."
  },
  {
    q: "Is Wi-Fi available on board?",
    a: "Some yachts have Wi-Fi. Tell us in advance so we can confirm availability."
  },
  {
    q: "Is smoking allowed?",
    a: "Smoking is only allowed in designated areas based on crew instructions."
  },
  {
    q: "Can I bring filming gear or a drone?",
    a: "Filming is allowed. Drones may require approvals depending on location—please check with us in advance."
  },
  {
    q: "What is the best time to book?",
    a: "Sunset and evening slots are the most popular. For better pricing, ask about daytime slots and hour deals."
  },
  {
    q: "Can I get a refund?",
    a: "Refunds depend on the cancellation policy and the timing of your cancellation. Contact us and we’ll clarify your exact case."
  },
  {
    q: "How do I ensure I pick the best yacht for my guests?",
    a: "Send guest count + occasion + preferred time, and we’ll recommend the best option for capacity, comfort, and overall experience."
  }
];

function normalizeText(s) {
  return (s || "").toString().trim().replace(/\s+/g, " ");
}

export default function FAQPAGE() {
  const [open, setOpen] = useState(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalizeText(query).toLowerCase();
    if (!q) return FAQS;
    return FAQS.filter((x) => {
      const hay = `${x.q} ${x.a}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-14 bg-white" dir="ltr" lang="en">
        <div className="text-center mb-10">
          <p className="text-[10px] sm:text-[11px] tracking-[0.30em] text-slate-500 uppercase">
            Booking Support • Real-Time Availability • Secure Payments
          </p>
          <div className="h-px my-3 mx-auto w-72 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <h2 className="text-[22px] sm:text-[28px] font-semibold text-slate-900 tracking-tight">
            Frequently Asked Questions — Elite Yacht Dubai
          </h2>
          <p className="mt-4 text-[13px] sm:text-[14px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Clear answers about booking in Dubai: minimum 2 hours, pets not allowed, luxury decoration is an add-on,
            chef and catering are available, and VIP transportation can be arranged on request.
          </p>
        </div>

        <div className="mb-8">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search FAQs… e.g. payment, decoration, capacity, catering"
                className="
                  w-full rounded-2xl border border-slate-200 bg-white
                  px-5 py-3 text-left text-slate-900 text-[13px] sm:text-[14px]
                  shadow-sm outline-none
                  focus:border-slate-300 focus:shadow
                "
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[12px]">
                {filtered.length}/{FAQS.length}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((item) => {
            const idx = FAQS.indexOf(item);
            const isOpen = open === idx;

            return (
              <div
                key={`${idx}-${item.q}`}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="
                    w-full flex items-center justify-between gap-4
                    px-5 py-4 text-left
                    hover:bg-slate-50 transition
                  "
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 leading-snug text-[13px] sm:text-[14px]">
                    {item.q}
                  </span>
                  <span
                    className="
                      flex-shrink-0 h-9 w-9 rounded-full
                      border border-slate-200
                      grid place-items-center
                      text-slate-700
                      bg-white
                      text-[16px]
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-700 leading-relaxed text-[13px] sm:text-[14px]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-[13px] sm:text-[14px] text-slate-500">
          Didn’t find your answer? Contact us now and we’ll help you choose the best yacht for your trip.
        </div>
      </div>
    </section>
  );
}
