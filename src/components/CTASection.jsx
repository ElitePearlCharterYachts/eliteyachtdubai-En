import { useEffect, useMemo, useState } from "react";

function withBrandTM(input) {
  if (typeof input !== "string" || !input.trim()) return input;

  let out = input;

  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);

  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return out;
}

export default function CTASection({ variant = "fleet" }) {
  const ACCENT = "#0F172A";
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();

    fetch("/en/data/cta.json", {
      signal: ctrl.signal,
      cache: "force-cache",
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((json) => setData(json))
      .catch((e) => {
        if (e?.name !== "AbortError") console.error(e);
      });

    return () => ctrl.abort();
  }, []);

  const cta = useMemo(() => data?.[variant] || null, [data, variant]);

  const eyebrow = useMemo(() => withBrandTM(cta?.eyebrow || ""), [cta?.eyebrow]);
  const title = useMemo(() => withBrandTM(cta?.title || ""), [cta?.title]);
  const subtitle = useMemo(() => withBrandTM(cta?.subtitle || ""), [cta?.subtitle]);
  const note = useMemo(() => withBrandTM(cta?.note || ""), [cta?.note]);

  const primaryLabel = useMemo(
    () => withBrandTM(cta?.primary?.label || ""),
    [cta?.primary?.label]
  );
  const secondaryLabel = useMemo(
    () => withBrandTM(cta?.secondary?.label || ""),
    [cta?.secondary?.label]
  );

  const isExternal = (href) => typeof href === "string" && /^https?:\/\//i.test(href);

  if (!cta) return null;

  return (
    <section
      dir="ltr"
      lang="ar"
      className="relative w-full bg-white overflow-hidden"
      style={{ ["--accent"]: ACCENT }}
    >
      <div className="absolute inset-0">
        {cta.backgroundImage ? (
          <>
            <img
              src={cta.backgroundImage}
              alt={title || ""}
              className={[
                "h-full w-full object-cover",
                loaded ? "opacity-100" : "opacity-0",
                "transition-opacity duration-500",
              ].join(" ")}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onLoad={() => setLoaded(true)}
              onError={() => setLoaded(true)}
              draggable={false}
            />
            {!loaded ? <div className="absolute inset-0 bg-black/[0.02]" /> : null}
          </>
        ) : null}

        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/55 to-white/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.10),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_35%,rgba(15,23,42,0.03))]" />
      </div>

      <div className="relative py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          <div
            className="
              mx-auto text-center
              rounded-2xl sm:rounded-3xl
              border border-black/10
              bg-white/85 backdrop-blur-[2px]
              px-4 py-7
              sm:px-8 sm:py-10
              md:px-10 md:py-12
              shadow-[0_18px_60px_rgba(15,23,42,0.12)]
            "
          >
            {cta.eyebrow ? (
              <p className="text-[12px] sm:text-[13px] tracking-[0.18em] text-black/55">
                {eyebrow}
              </p>
            ) : null}

            <h2 className="mt-2 text-[22px] sm:text-3xl md:text-4xl font-light tracking-[0.06em] text-black/90">
              {title}
            </h2>

            {cta.subtitle ? (
              <p className="mt-4 sm:mt-5 text-black/70 leading-[1.9] max-w-3xl mx-auto text-[15px] sm:text-[16px] px-1">
                {subtitle}
              </p>
            ) : null}

            {cta.note ? (
              <div className="mt-6 sm:mt-7 inline-flex max-w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] tracking-[0.08em] text-black/60 shadow-[0_10px_26px_rgba(15,23,42,0.08)]">
                <i className="fa-solid fa-shield-halved text-[var(--accent)] shrink-0" />
                <span className="text-center leading-[1.6] break-words">
                  {note}
                </span>
              </div>
            ) : null}

            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <a
                href={cta.primary?.href || "#"}
                target={isExternal(cta.primary?.href) ? "_blank" : undefined}
                rel={isExternal(cta.primary?.href) ? "noreferrer" : undefined}
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center gap-2
                  rounded-full px-5 sm:px-8 py-3
                  border border-black/12
                  text-black/85
                  bg-white
                  shadow-[0_14px_34px_rgba(15,23,42,0.12)]
                  transition-all duration-300
                  hover:border-black/25
                  hover:shadow-[0_18px_46px_rgba(15,23,42,0.16)]
                  sm:min-w-[240px]
                "
                aria-label={primaryLabel || "Primary action"}
              >
                {cta.primary?.icon ? (
                  <i className={cta.primary.icon} style={{ color: ACCENT }} />
                ) : null}
                <span className="text-[13px] sm:text-sm tracking-[0.04em] truncate max-w-[85vw] sm:max-w-none">
                  {primaryLabel}
                </span>
              </a>
              <a
                href={cta.secondary?.href || "#"}
                target={isExternal(cta.secondary?.href) ? "_blank" : undefined}
                rel={isExternal(cta.secondary?.href) ? "noreferrer" : undefined}
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center gap-2
                  rounded-full px-5 sm:px-8 py-3
                  border border-black
                  text-white
                  bg-black
                  shadow-[0_16px_40px_rgba(15,23,42,0.18)]
                  transition-all duration-300
                  hover:bg-[var(--accent)]
                  hover:border-[var(--accent)]
                  hover:shadow-[0_18px_52px_rgba(15,23,42,0.26)]
                  sm:min-w-[240px]
                "
                aria-label={secondaryLabel || "Secondary action"}
              >
                {cta.secondary?.icon ? <i className={cta.secondary.icon} /> : null}
                <span className="text-[13px] sm:text-sm tracking-[0.04em] truncate max-w-[85vw] sm:max-w-none">
                  {secondaryLabel}
                </span>
              </a>
            </div>

            <div className="mt-1 sm:hidden text-[11px] text-black/40">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
