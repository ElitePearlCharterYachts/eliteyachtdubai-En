import { useEffect } from "react";
import { Link } from "react-router-dom";

const UPDATED_DATE = "January 10, 2026";
const COMPANY = "Elite Yachts";
const WEBSITE = "eliteyachtdubai.com";

const EMAIL = "info@eliteyachtdubai.com";

const PHONE_DISPLAY = "+971 56 900 6603";
const PHONE_TEL = "tel:971569006603";

// English greeting (encoded)
const WHATSAPP =
  "https://wa.me/+971569006603?text=Hello%20Elite%20Yachts!%20I%27d%20like%20to%20ask%20about%20a%20booking.";

const CONTACT_ROUTE = "/contact-elite-yacht-dubai";

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

function Card({ title, children, id }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div
        className="
          rounded-3xl border border-black/10 bg-white
          p-6 sm:p-7
          shadow-[0_18px_55px_rgba(15,23,42,0.10)]
          overflow-hidden relative
        "
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_55%)]" />
        <h2 className="relative text-[13px] tracking-[0.35em] uppercase text-slate-700">
          {title}
        </h2>

        <div className="relative mt-4 space-y-3 text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
          {children}
        </div>
      </div>
    </section>
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

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = `Privacy Policy | ${COMPANY} Dubai`;
  }, []);

  return (
    <main
      dir="ltr"
      lang="en"
      className="relative w-full bg-white text-slate-900"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -bottom-48 right-0 h-[560px] w-[560px] rounded-full bg-black/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_38%,rgba(15,23,42,0.03))]" />
      </div>

      <header className="relative">
        <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-10 sm:pt-32 sm:pb-14">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-slate-600">
            <Link to="/" className="hover:text-slate-900 transition">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-slate-900/90">Privacy Policy</span>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.18em]">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-[920px] text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
            <TM>
              At Elite Yachts Dubai (Elite Yacht Rental Dubai), we respect your
              privacy. This policy explains how we collect data when you use our
              website to book and rent a yacht in Dubai Marina, and how we use
              it to improve your Luxury Yacht Rental Dubai experience in a
              secure and transparent way.
            </TM>
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-2 text-[12px] text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.10)]">
            <span className="tracking-[0.22em] uppercase text-slate-600">
              Last Updated
            </span>
            <span className="h-4 w-px bg-black/10" />
            <span className="text-slate-900">{UPDATED_DATE}</span>
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
                  Page Contents
                </p>
                <nav className="mt-5 space-y-2 text-[13px] text-slate-700">
                  {[
                    ["scope", "1. Scope"],
                    ["data", "2. Data We Collect"],
                    ["use", "3. How We Use Data"],
                    ["cookies", "4. Cookies"],
                    ["sharing", "5. Data Sharing"],
                    ["security", "6. Security & Data Retention"],
                    ["rights", "7. Your Rights"],
                    ["children", "8. Children’s Privacy"],
                    ["changes", "9. Policy Updates"],
                    ["contact", "Contact"],
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

            <div className="space-y-8">
              <Card id="scope" title="1. Scope">
                <p>
                  <TM>
                    This policy applies to the {WEBSITE} website and all booking
                    and inquiry pages for Elite Yachts Dubai services, including:
                    yacht rental in Dubai, yacht rental in Dubai Marina, private
                    yacht booking in Dubai, yacht parties, and events.
                  </TM>
                </p>
              </Card>

              <Card id="data" title="2. Data We Collect">
                <p>
                  We collect limited data that helps us respond quickly, confirm
                  availability, and provide an organized booking experience.
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>Contact information: name, phone number, email.</Bullet>
                  <Bullet>
                    Request details: date, time, number of guests, occasion type,
                    preferred yacht (if any).
                  </Bullet>
                  <Bullet>
                    Technical data: device and browser type, IP address (for
                    security and performance improvements).
                  </Bullet>
                </ul>
                <p className="mt-4">
                  We do not request sensitive data that is not necessary for
                  booking.
                </p>
              </Card>

              <Card id="use" title="3. How We Use Data">
                <ul className="space-y-3">
                  <Bullet>
                    Respond to your inquiry and confirm availability, pricing,
                    and suitable packages.
                  </Bullet>
                  <Bullet>
                    <TM>
                      Improve the Elite Yacht Rental Dubai experience (for
                      example: improving Dubai Marina yacht rental pages and
                      simplifying booking steps).
                    </TM>
                  </Bullet>
                  <Bullet>Prevent fraud and protect the website and systems.</Bullet>
                  <Bullet>
                    Contact you only about updates related to your request.
                  </Bullet>
                </ul>
              </Card>

              <Card id="cookies" title="4. Cookies">
                <p>
                  We may use cookies and similar technologies to measure
                  performance and improve browsing experience (such as
                  understanding the most visited pages or improving load speed).
                </p>
                <p className="mt-3">
                  You can control cookies from your browser settings. Disabling
                  them may affect some website features.
                </p>
              </Card>

              <Card id="sharing" title="5. Data Sharing">
                <p>
                  We do not sell your data. We may share limited data only with
                  trusted service providers when needed to deliver the service.
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>Communication services (e.g., sending form emails).</Bullet>
                  <Bullet>Analytics/performance services to improve the site.</Bullet>
                  <Bullet>
                    Legal compliance when requested by relevant authorities
                    within the UAE.
                  </Bullet>
                </ul>
              </Card>

              <Card id="security" title="6. Security & Data Retention">
                <p>
                  We use reasonable organizational and technical measures to
                  protect data from unauthorized access.
                </p>
                <p className="mt-3">
                  We retain data only for the period needed to respond to your
                  request, complete the booking, provide post-booking support (if
                  applicable), or comply with legal requirements in the UAE.
                </p>
              </Card>

              <Card id="rights" title="7. Your Rights">
                <ul className="space-y-3">
                  <Bullet>Request a copy of your data we hold (if any).</Bullet>
                  <Bullet>Correct inaccurate data.</Bullet>
                  <Bullet>
                    Request deletion of your data when it is no longer needed for
                    booking/legal compliance.
                  </Bullet>
                </ul>
              </Card>

              <Card id="children" title="8. Children’s Privacy">
                <p>
                  Our services are intended for adults. We do not knowingly
                  collect data from children below the legal age.
                </p>
              </Card>

              <Card id="changes" title="9. Policy Updates">
                <p>
                  We may update this policy from time to time. The new version
                  will be published on this page and the “Last Updated” date will
                  be revised.
                </p>
              </Card>

              <section
                id="contact"
                className="scroll-mt-28 rounded-3xl border border-black/10 bg-white p-6 sm:p-7 shadow-[0_18px_55px_rgba(15,23,42,0.10)]"
              >
                <h2 className="text-[13px] tracking-[0.35em] uppercase text-slate-700">
                  Contact
                </h2>

                <div className="mt-4 space-y-4 text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
                  <p>
                    <TM>
                      For any questions about privacy or booking data at Elite
                      Yachts Dubai, contact us:
                    </TM>
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                      <p className="text-slate-600 text-[12px] tracking-[0.25em] uppercase">
                        Email
                      </p>
                      <p className="mt-1 text-slate-900">{EMAIL}</p>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                      <p className="text-slate-600 text-[12px] tracking-[0.25em] uppercase">
                        Phone
                      </p>
                      <a
                        href={PHONE_TEL}
                        className="mt-1 block text-slate-900 hover:underline"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center justify-center gap-2
                        rounded-full px-7 py-3 text-sm
                        border border-black bg-black text-white
                        shadow-[0_14px_34px_rgba(15,23,42,0.14)]
                        hover:bg-black/90 transition
                      "
                    >
                      <i className="fa-brands fa-whatsapp" />
                      WhatsApp
                    </a>

                    <Link
                      to={CONTACT_ROUTE}
                      className="
                        inline-flex items-center justify-center gap-2
                        rounded-full px-7 py-3 text-sm
                        border border-black/15 bg-white text-slate-900
                        shadow-[0_14px_34px_rgba(15,23,42,0.10)]
                        hover:bg-black/[0.02] transition
                      "
                    >
                      <i className="fa-solid fa-envelope" />
                      Contact Page
                    </Link>
                  </div>

                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    Naturally used keywords: <TM>Elite Yachts Dubai</TM>,{" "}
                    <TM>Elite Yacht Rental Dubai</TM>, yacht rental Dubai, yacht
                    rental Dubai Marina, yacht booking Dubai, luxury yacht Dubai.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
