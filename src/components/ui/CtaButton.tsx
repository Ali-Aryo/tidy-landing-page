// The chunky "Book a consultation" button: black outline, hard offset shadow.
export default function CtaButton() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-accent px-[26px] py-3.5 text-[18px] font-semibold text-white shadow-hard-sm"
    >
      Book a consultation
    </a>
  )
}
