export default function WhatsAppModal({
  open,
  onClose,
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  waHref,
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div
        className="
          relative w-[92%] sm:w-[420px]
          rounded-[22px] bg-white
          border border-black/10
          shadow-[0_28px_75px_rgba(0,0,0,0.20)]
          p-5
        "
        onClick={(e) => e.stopPropagation()}
        dir="ltr"
        lang="en"
      >
        <div className="flex items-center justify-between">
          <div className="text-left">
            <div className="text-[13px] font-bold text-black">WhatsApp</div>
            <div className="text-[11px] text-black/55 mt-0.5">
              Choose date, time, and guest count
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              h-9 w-9 rounded-full
              border border-black/10
              bg-white
              shadow-[0_10px_24px_rgba(15,23,42,0.08)]
              hover:bg-black/[0.02]
              transition
              grid place-items-center
            "
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="text-left">
            <div className="text-[11px] font-semibold text-black/70 mb-1">
              Date
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="
                w-full rounded-xl
                border border-black/15
                px-3 py-2 text-[12px]
                outline-none
                focus:border-black/30
              "
            />
          </label>

          <label className="text-left">
            <div className="text-[11px] font-semibold text-black/70 mb-1">
              Time
            </div>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="
                w-full rounded-xl
                border border-black/15
                px-3 py-2 text-[12px]
                outline-none
                focus:border-black/30
              "
            />
          </label>

          <label className="text-left sm:col-span-2">
            <div className="text-[11px] font-semibold text-black/70 mb-1">
              Guests
            </div>
            <input
              type="number"
              min={1}
              max={200}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="
                w-full rounded-xl
                border border-black/15
                px-3 py-2 text-[12px]
                outline-none
                focus:border-black/30
              "
            />
          </label>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-full py-2.5
              text-[12px] font-bold
              bg-white text-black
              border border-black/15
              shadow-[0_10px_24px_rgba(15,23,42,0.08)]
              hover:border-black/30
              hover:bg-black/[0.02]
              transition
            "
          >
            Cancel
          </button>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="
              rounded-full py-2.5
              text-[12px] font-bold
              bg-black text-white
              border border-black
              shadow-[0_12px_28px_rgba(0,0,0,0.18)]
              hover:bg-black/90
              transition
              flex items-center justify-center
            "
            aria-label="Send WhatsApp"
          >
            Send
          </a>
        </div>
      </div>
    </div>
  );
}
