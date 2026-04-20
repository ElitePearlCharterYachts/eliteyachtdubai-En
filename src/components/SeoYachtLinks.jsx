export default function SeoYachtLinks({
  title = "تصفح يخوتنا حسب ما يبحث عنه العملاء",
  subtitle = "روابط داخلية لخدمات تأجير اليخوت في دبي مارينا",
}) {
  const LINKS = [
    { href: "/تاجير-يخت-دبي-اوريكس-36-قدم", label: "تاجير يخت" },
    { href: "/تاجير-يخت-دبي-فان-داتش-40-قدم", label: "يخت لإيجار يومي" },
    { href: "/تاجير-يخت-دبي-ماجستي-44-قدم", label: "يخت دبي" },
    { href: "/تاجير-يخت-دبي-ماجستي-48-قدم", label: "يخوت دبي" },

    { href: "/تاجير-يخت-دبي-بيرشينج-وايت-54-قدم", label: "ايجار يخت" },
    { href: "/تاجير-يخت-دبي-بيرشينج-جراي-54-قدم", label: "ايجار يخوت" },
    { href: "/تاجير-يخت-دبي-ماجستي-56-قدم", label: "حجز يخوت في دبي" },
    { href: "/تاجير-يخت-دبي-اكسي-63-قدم", label: "رحلة يخت في دبي" },

    { href: "/تاجير-يخت-دبي-فيريتي-67-قدم", label: "رحلة بحرية في دبي مارينا" },
    { href: "/تاجير-يخت-دبي-صن-سيكر-70-قدم", label: "رحلات بحريه في دبي مارينا" },

    { href: "/تاجير-يخت-دبي-فيريتي-78-قدم", label: "رحلة بحرية عائلية" },
    { href: "/تاجير-يخت-دبي-جاليون-78-قدم", label: "عيد ميلاد يخت دبي" },
    { href: "/تاجير-يخت-دبي-ريفا-82-قدم", label: "عشاء على يخت في دبي" },

    { href: "/تاجير-يخت-دبي-ماجستي-88-قدم", label: "عشاء على يخت في دبي مارينا" },
    { href: "/تاجير-يخت-دبي-هايچان-90-قدم", label: "رحلة بحرية مع عشاء في دبي" },

    { href: "/تاجير-يخت-دبي-صن-سيكر-95-قدم", label: "رحلة بحرية مع عشاء في المارينا" },
    { href: "/تاجير-يخت-دبي-مودرن-100-قدم", label: "رحلة بحريه في دبي" },

    { href: "/تاجير-يخت-دبي-ماجستي-101-قدم", label: "أماكن ركوب اليخوت في دبي مارينا" },
    { href: "/تاجير-يخت-دبي-صن-سيكر-108-قدم", label: "أسعار استئجار يخت في دبي مارينا" },

    { href: "/تاجير-يخت-دبي-خليلي-108-قدم", label: "اسعار استئجار يخت في دبي" },
    { href: "/تاجير-يخت-دبي-باجليتو-108-قدم", label: "أسعار اسئجار اليخوت في دبي" },

    { href: "/تاجير-يخت-دبي-بينتي-110-قدم", label: "ايجار يخوت في دبي" },
    { href: "/تاجير-يخت-دبي-بينتي-114-قدم", label: "ايجار يخوت في دبي مارينا" },

    { href: "/تاجير-يخت-دبي-سانتوريني-115-قدم", label: "ايجار تخت دبي مارينا" },
    { href: "/تاجير-يخت-دبي-سافوريا-120-قدم", label: "ايجار يخوت دبي مارينا" },

    { href: "/تاجير-يخت-دبي-صن-سيكر-131-قدم", label: "تاجير يخوت" },
    { href: "/تاجير-يخت-دبي-رويالتي-134-قدم", label: "تاجير يخت دبي مارينا" },
  ];

  return (
    <section
      aria-label={subtitle}
      className="w-full bg-white"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-16">
        <div className="rounded-3xl border border-black/10 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-[11px] tracking-[0.32em] uppercase text-black/60">
              دبي مارينا • تأجير يخوت • روابط داخلية
            </p>

            <div className="mx-auto mt-3 mb-4 h-px w-44 bg-gradient-to-r from-transparent via-black/20 to-transparent" />

            <h2 className="text-[20px] sm:text-[28px] font-light tracking-[0.06em] text-black/90">
              {title}
            </h2>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-[12px] sm:text-[13px] font-semibold text-black/80 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:border-black"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}