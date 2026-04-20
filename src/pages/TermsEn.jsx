// src/pages/Terms.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";

const SITE = "eliteyachtdubai.com";
const ADDRESS = "Dubai, United Arab Emirates";
const LAST_UPDATED = "January 10, 2026";

const EMAIL = "info@eliteyachtdubai.com";
const PHONE_DISPLAY = "+971 56 900 6603";
const PHONE_TEL = "tel:971569006603";

// English greeting (encoded)
const WHATSAPP =
  "https://wa.me/+971569006603?text=Hello%20Elite%20Yachts!%20I%27d%20like%20to%20ask%20about%20terms%20and%20booking.";

const BRAND_EN = "Elite Yachts";
const BRAND_FULL_EN = "Elite Yacht Rental Dubai";
const BRAND_AR = "إيليت يخوت";

function TM({ children }) {
  const text = typeof children === "string" ? children : "";
  let out = text;

  // Arabic
  out = out.replace(/إيليت\s+يخوت(?!\s*™)/g, "إيليت يخوت™");
  out = out.replace(/إيليت(?!\s*(يخوت|™))/g, "إيليت™");

  // English
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return out;
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.18em] text-slate-900 font-semibold">
        {title}
      </h2>

      <div className="mt-4 space-y-3 text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
        {children}
      </div>

      <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-black/35" />
      <span>{children}</span>
    </li>
  );
}

export default function Terms() {
  useEffect(() => {
    document.title = `Terms & Conditions | ${BRAND_EN} Dubai`;
  }, []);

  return (
    <main
      dir="ltr"
      lang="en"
      className="relative w-full bg-white mt-[-10px] text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -bottom-48 right-0 h-[560px] w-[560px] rounded-full bg-black/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_40%,rgba(15,23,42,0.03))]" />
      </div>

      <header className="relative">
        <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-10 sm:pt-32 sm:pb-14">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-slate-600">
            <Link to="/" className="hover:text-slate-900 transition">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-slate-900/90">Terms & Conditions</span>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.14em]">
            Terms & Conditions
          </h1>

          <p className="mt-4 max-w-[920px] text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
            <TM>
              Welcome to {SITE}. These terms govern the use of the website and all
              yacht rental and trip services provided by Elite Yachts Dubai and
              Elite Yacht Rental Dubai. By using the website or completing a
              booking, you agree to these terms.
            </TM>
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-2 text-[12px] text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.10)]">
            <span className="tracking-[0.22em] uppercase text-slate-600">
              Last Updated
            </span>
            <span className="h-4 w-px bg-black/10" />
            <span className="text-slate-900">{LAST_UPDATED}</span>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 pb-10">
          <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-7 shadow-[0_18px_55px_rgba(15,23,42,0.10)]">
            <p className="text-slate-700 text-[13px] sm:text-[14px] leading-relaxed">
              <span className="text-slate-900 font-semibold">Important:</span>{" "}
              These terms are a general template for{" "}
              <TM>yacht rental in Dubai</TM> and{" "}
              <TM>yacht rental in Dubai Marina</TM>. It is recommended to have
              them reviewed legally based on licensing, insurance, and your
              actual operational policies.
            </p>
          </div>
        </div>
      </header>

      <section className="relative pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            {/* TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <p className="text-[12px] tracking-[0.35em] uppercase text-slate-600">
                  On This Page
                </p>

                <nav className="mt-5 space-y-2 text-[13px] text-slate-700">
                  {[
                    ["general", "1. General Terms"],
                    ["bookings", "2. Booking & Confirmation"],
                    ["payments", "3. Payments"],
                    ["cancellations", "4. Cancellations & Refunds"],
                    ["weather", "5. Weather & Sea Conditions"],
                    ["conduct", "6. Guest Conduct"],
                    ["damage", "7. Damage & Liability"],
                    ["safety", "8. Safety & Captain’s Authority"],
                    ["routes", "9. Routes, Marina & Timing"],
                    ["services", "10. Add-ons & External Services"],
                    ["prohibited", "11. Prohibited Items & Activities"],
                    ["media", "12. Photography & Content"],
                    ["privacy", "13. Privacy"],
                    ["ip", "14. Intellectual Property"],
                    ["changes", "15. Changes to Terms"],
                    ["contact", "16. Contact"],
                  ].map(([id, label]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="block rounded-xl px-3 py-2 hover:bg-black/[0.03] hover:text-slate-900 transition"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="space-y-10">
              <Section id="general" title="1. General Terms">
                <p>
                  <TM>
                    Elite Yachts Dubai and Elite Yacht Rental Dubai provide
                    luxury yacht rental services in Dubai and surrounding waters,
                    including trips around Dubai Marina, Palm Jumeirah, and key
                    landmarks, subject to route availability, permits, and sea
                    conditions.
                  </TM>
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>The booking person must be 18 years old or above.</Bullet>
                  <Bullet>
                    You confirm you have the legal authority to book on behalf of
                    all guests.
                  </Bullet>
                  <Bullet>
                    You agree to comply with UAE laws and applicable maritime
                    regulations.
                  </Bullet>
                </ul>
              </Section>

              <Section id="bookings" title="2. Booking & Confirmation">
                <ul className="mt-4 space-y-3">
                  <Bullet>All bookings are subject to availability and our final confirmation.</Bullet>
                  <Bullet>
                    A booking is confirmed only after payment is received (deposit
                    or full amount) and confirmed by <TM>Elite Yachts</TM>.
                  </Bullet>
                  <Bullet>
                    Trip time starts and ends at the scheduled time. Delays do not
                    extend the booking duration.
                  </Bullet>
                </ul>
              </Section>

              <Section id="payments" title="3. Payments">
                <ul className="mt-4 space-y-3">
                  <Bullet>Prices are in AED unless stated otherwise.</Bullet>
                  <Bullet>
                    We may require full payment before departure depending on the
                    yacht, date, and services.
                  </Bullet>
                  <Bullet>
                    Any additional time, upgrades, hospitality, decorations, or
                    special requests may be charged separately.
                  </Bullet>
                </ul>
              </Section>

              <Section id="cancellations" title="4. Cancellations & Refunds">
                <p>
                  Cancellation terms vary by yacht type and season. Unless a
                  different policy is agreed in writing:
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>
                    Cancellation 72 hours or more before the trip may be eligible
                    for rescheduling (subject to availability).
                  </Bullet>
                  <Bullet>Cancellation within 72 hours is typically non-refundable.</Bullet>
                  <Bullet>No-shows and significant delays are non-refundable.</Bullet>
                </ul>
                <p className="mt-3">
                  We may cancel/reschedule due to weather, safety, official
                  instructions, or force majeure. In such cases, we may propose
                  suitable solutions depending on the situation and safe
                  operations.
                </p>
              </Section>

              <Section id="weather" title="5. Weather & Sea Conditions">
                <p>
                  Trips depend on safe sea conditions as determined by the captain
                  and/or official authorities. Safety always comes first.
                </p>
                <p className="mt-3">
                  If conditions are unsuitable, departure may be delayed, the
                  route changed, or the trip ended early. Weather-related refunds
                  are not guaranteed unless required by regulations or a written
                  agreement.
                </p>
              </Section>

              <Section id="conduct" title="6. Guest Conduct">
                <p>Guests must:</p>
                <ul className="mt-4 space-y-3">
                  <Bullet>Follow safety instructions and crew guidance.</Bullet>
                  <Bullet>Respect the yacht, crew, and other guests.</Bullet>
                  <Bullet>Use equipment carefully and responsibly.</Bullet>
                </ul>
                <p className="mt-3">
                  We reserve the right to end the trip without refund if there is
                  dangerous, abusive, or illegal behavior.
                </p>
              </Section>

              <Section id="damage" title="7. Damage & Liability">
                <p>
                  The renter is responsible for any damage beyond normal wear and
                  tear caused by the renter or guests.
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>
                    Repair/replacement costs and downtime may be charged if
                    required.
                  </Bullet>
                  <Bullet>
                    <TM>Elite Yachts</TM> is not responsible for loss of personal
                    belongings except in cases of gross negligence.
                  </Bullet>
                </ul>
              </Section>

              <Section id="safety" title="8. Safety & Captain’s Authority">
                <p>
                  The captain has full authority to ensure safety. Guests must
                  follow the captain’s instructions, including:
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>Adjusting the route based on sea conditions/traffic</Bullet>
                  <Bullet>Managing guest safety and onboard conduct</Bullet>
                  <Bullet>Operational decisions to maintain safe navigation</Bullet>
                </ul>
              </Section>

              <Section id="routes" title="9. Routes, Marina & Timing">
                <ul className="mt-4 space-y-3">
                  <Bullet>
                    The marina (departure/return point) may change depending on
                    availability and permits.
                  </Bullet>
                  <Bullet>
                    Routes are approximate and may change due to regulations,
                    weather, or marine traffic.
                  </Bullet>
                  <Bullet>
                    Stops for photos/landmarks depend on time and safety.
                  </Bullet>
                </ul>
              </Section>

              <Section id="services" title="10. Add-ons & External Services">
                <p>
                  We may provide or coordinate add-ons such as hospitality,
                  decoration, DJ, entertainment, or external vendors. Fees,
                  terms, and availability vary by service.
                </p>
                <p className="mt-3">
                  If an external vendor is used, their terms may also apply, and
                  we are not responsible for issues caused exclusively by the
                  external party.
                </p>
              </Section>

              <Section id="prohibited" title="11. Prohibited Items & Activities">
                <p>
                  Illegal substances, weapons, and unlawful activities are
                  strictly prohibited. Any violation may result in immediate trip
                  termination and reporting to authorities if necessary.
                </p>
              </Section>

              <Section id="media" title="12. Photography & Content">
                <p>
                  Personal photography is allowed unless restricted by the crew
                  for safety/privacy reasons. We may capture non-identifiable
                  photos/videos for marketing purposes. You may request in
                  writing (before departure) that your content not be used.
                </p>
              </Section>

              <Section id="privacy" title="13. Privacy">
                <p>
                  We respect your privacy. Booking and contact data is used to
                  deliver the service, confirm availability, and communicate with
                  you. We do not sell your data.
                </p>
              </Section>

              <Section id="ip" title="14. Intellectual Property">
                <p>
                  All content on {SITE} (text, images, brand, logo, design) is
                  owned by <TM>Elite Yachts</TM> or licensed to us. Copying or
                  reuse is prohibited without written permission.
                </p>
              </Section>

              <Section id="changes" title="15. Changes to Terms">
                <p>
                  We may update these terms at any time. Continued use of the
                  website or service after updates means you accept the updated
                  terms.
                </p>
              </Section>

              <section
                id="contact"
                className="scroll-mt-28 rounded-3xl border border-black/10 bg-white p-6 sm:p-7 shadow-[0_18px_55px_rgba(15,23,42,0.10)]"
              >
                <h2 className="text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.18em] text-slate-900 font-semibold">
                  16. Contact
                </h2>

                <div className="mt-4 space-y-4 text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
                  <p>For questions about terms and conditions or booking, contact us:</p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                      <p className="text-slate-600 text-[12px] tracking-[0.25em] uppercase">
                        Company
                      </p>
                      <p className="mt-1 text-slate-900">
                        <TM>{BRAND_EN}</TM> • <TM>{BRAND_FULL_EN}</TM> •{" "}
                        <TM>{BRAND_AR}</TM>
                      </p>
                      <p className="mt-1 text-slate-600">{ADDRESS}</p>
                      <p className="mt-2 text-slate-600 text-[12px]">
                        Search keywords: <TM>Elite Yacht Rental Dubai</TM>,{" "}
                        <TM>Elite Yachts Dubai</TM>, yacht rental Dubai, yacht
                        rental Dubai Marina, yacht rental Dubai marina.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                      <p className="text-slate-600 text-[12px] tracking-[0.25em] uppercase">
                        Support
                      </p>
                      <p className="mt-1 text-slate-900">{EMAIL}</p>
                      <a
                        href={PHONE_TEL}
                        className="mt-1 block text-slate-900 hover:underline"
                      >
                        {PHONE_DISPLAY}
                      </a>

                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-full border border-black bg-black px-4 py-2 text-sm text-white hover:bg-black/90 transition"
                      >
                        <i className="fa-brands fa-whatsapp" />
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  <p className="pt-2 text-slate-500 text-[13px]">
                    By using {SITE} and completing a booking with us, you confirm
                    that you have read, understood, and agreed to these Terms &
                    Conditions.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
