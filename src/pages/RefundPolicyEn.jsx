import { useEffect } from "react";
import { Link } from "react-router-dom";

const UPDATED_DATE = "December 25, 2025";
const EMAIL = "info@eliteyachtdubai.com";
const PHONE_DISPLAY = "+971569006603";
const CONTACT_PAGE = "/contact-elite-yacht-dubai";

function Divider() {
  return (
    <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
      <div className="p-6 sm:p-7">
        <p className="text-[12px] tracking-[0.35em] uppercase text-black/55">
          {title}
        </p>
        <div className="mt-4 space-y-3 text-black/70 text-[14px] sm:text-[15px] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-black/30" />
      <span>{children}</span>
    </li>
  );
}

export default function RefundPolicy() {
  useEffect(() => {
    document.title = "Refund & Cancellation Policy | Elite Yacht Rental LLC";
  }, []);

  return (
    <main dir="ltr" lang="en" className="relative w-full bg-white text-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -bottom-44 right-0 h-[520px] w-[520px] rounded-full bg-[#e0b951]/15 blur-3xl" />
      </div>

      <header className="relative">
        <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-10 sm:pt-32 sm:pb-14">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-black/55">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-black/85">Refund & Cancellation Policy</span>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.12em]">
            Refund & Cancellation Policy
          </h1>

          <p className="mt-4 max-w-[860px] text-black/70 text-[14px] sm:text-[15px] leading-relaxed">
            Thank you for choosing Elite Yacht Rental. We aim to deliver a
            seamless luxury experience. If your plans change, please review the
            policy below.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/5 px-5 py-2 text-[12px] text-black/70">
            <span className="tracking-[0.22em] uppercase text-black/55">
              Last Updated
            </span>
            <span className="h-4 w-px bg-black/10" />
            <span className="text-black/90">{UPDATED_DATE}</span>
          </div>
        </div>
      </header>

      <section className="relative pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.06)] p-6">
                <p className="text-[12px] tracking-[0.35em] uppercase text-black/55">
                  On This Page
                </p>

                <nav className="mt-5 space-y-2 text-[13px] text-black/70">
                  {[
                    ["note", "Important Note"],
                    ["cancellations", "Cancellations"],
                    ["how", "How to Cancel"],
                    ["refunds", "Refunds"],
                    ["please", "Please Note"],
                    ["contact", "Contact Us"],
                  ].map(([id, label]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="block rounded-lg px-3 py-2 hover:bg-black/5 hover:text-black transition"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="space-y-10">
              <Card title="Important Note">
                <div id="note" className="scroll-mt-28" />
                <p>
                  This policy applies to{" "}
                  <span className="text-black/90">yacht rentals only</span>. Any
                  add-on services booked separately may be subject to different
                  cancellation terms.
                </p>
              </Card>

              <Card title="Cancellations">
                <div id="cancellations" className="scroll-mt-28" />
                <ul className="space-y-3">
                  <Bullet>
                    You can cancel your yacht rental booking within{" "}
                    <span className="text-black/90">7 days from the booking date</span>{" "}
                    with no fees.
                  </Bullet>
                </ul>
              </Card>

              <Card title="How to Cancel">
                <div id="how" className="scroll-mt-28" />
                <ul className="space-y-3">
                  <Bullet>
                    Email: <span className="text-black/90">{EMAIL}</span>
                  </Bullet>
                  <Bullet>
                    Via website:{" "}
                    <Link
                      to={CONTACT_PAGE}
                      className="text-black/90 underline underline-offset-4 hover:text-black"
                    >
                      Contact Us
                    </Link>
                  </Bullet>
                  <Bullet>
                    Phone: <span className="text-black/90">{PHONE_DISPLAY}</span>
                  </Bullet>
                </ul>
              </Card>

              <Card title="Refunds">
                <div id="refunds" className="scroll-mt-28" />
                <ul className="space-y-3">
                  <Bullet>
                    A <span className="text-black/90">full refund</span> applies
                    to cancellations made within the{" "}
                    <span className="text-black/90">7-day</span> period.
                  </Bullet>
                  <Bullet>
                    Refunds are processed within{" "}
                    <span className="text-black/90">14 days</span> from receiving
                    the cancellation request.
                  </Bullet>
                  <Bullet>
                    Refunds are issued via the{" "}
                    <span className="text-black/90">same payment method</span>{" "}
                    used for the original booking.
                  </Bullet>
                </ul>
              </Card>

              <Card title="Please Note">
                <div id="please" className="scroll-mt-28" />
                <ul className="space-y-3">
                  <Bullet>
                    If severe weather prevents sailing, we will work with you to{" "}
                    <span className="text-black/90">reschedule</span> the trip or
                    provide a <span className="text-black/90">full refund</span>.
                  </Bullet>
                  <Bullet>
                    This return policy does not apply after the rental time has
                    started.
                  </Bullet>
                </ul>
              </Card>

              <div id="contact" className="scroll-mt-28" />
              <div className="rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.06)] p-6 sm:p-7">
                <p className="text-[12px] tracking-[0.35em] uppercase text-black/55">
                  Contact Us
                </p>

                <div className="mt-4 space-y-3 text-black/70 text-[14px] sm:text-[15px] leading-relaxed">
                  <p>
                    If you have any questions about this Refund & Cancellation
                    Policy, please contact us via:
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-black/10 bg-black/5 p-4">
                      <p className="text-black/55 text-[12px] tracking-[0.25em] uppercase">
                        Email
                      </p>
                      <p className="mt-1 text-black/90">{EMAIL}</p>
                    </div>

                    <div className="rounded-xl border border-black/10 bg-black/5 p-4">
                      <p className="text-black/55 text-[12px] tracking-[0.25em] uppercase">
                        Phone
                      </p>
                      <p className="mt-1 text-black/90">{PHONE_DISPLAY}</p>
                    </div>
                  </div>

                  <Divider />

                  <p className="text-black/55 text-[13px]">
                    Thank you for your understanding, and we look forward to
                    welcoming you on board.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
