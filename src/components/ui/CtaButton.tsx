// Hover lifts the button off its hard shadow; pressing pushes it into the shadow.
export const pressable =
  'transition-[translate,box-shadow] duration-150 hover:-translate-x-px hover:-translate-y-px hover:shadow-[5px_5px_0_#111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#111] motion-reduce:transition-none'

// The chunky "Book a consultation" button: black outline, hard offset shadow.
export default function CtaButton() {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-accent px-[26px] py-3.5 text-[18px] font-semibold text-white shadow-hard-sm ${pressable}`}
    >
      Book a consultation
    </a>
  )
}
