// Spot illustrations used inside the "What we do" cards.

export function ClockIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="104" r="68" fill="#fff" stroke="#111" strokeWidth="3.5" />
      <path d="M100 50v10M100 148v10M46 104h10M144 104h10" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M100 104V70M100 104l22 14" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="104" r="6" stroke="#111" strokeWidth="2.5" className="fill-accent" />
      <path d="M24 72l-12-6M22 104H8M24 136l-12 6M176 72l12-6M178 104h14M176 136l12 6" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}

function ChecklistRow({ y, line, checked }: { y: number; line: number; checked?: boolean }) {
  return (
    <>
      <rect x="54" y={y} width="22" height="22" rx="6" fill="none" stroke="#111" strokeWidth="3" />
      {checked && (
        <path d={`M58 ${y + 11}l5 5 9-12`} fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="stroke-accent" />
      )}
      <path d={`M90 ${y + 11}h${line}`} fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" />
    </>
  )
}

export function ChecklistIllustration() {
  return (
    <svg width="200" height="220" viewBox="0 0 200 220" aria-hidden="true">
      <g transform="rotate(-5 100 110)">
        <rect x="36" y="18" width="128" height="176" rx="12" fill="#fff" stroke="#111" strokeWidth="3.5" />
        <rect x="74" y="8" width="52" height="22" rx="8" fill="#111" />
        <ChecklistRow y={52} line={54} checked />
        <ChecklistRow y={92} line={40} checked />
        <ChecklistRow y={132} line={50} />
      </g>
    </svg>
  )
}

export function EnvelopeIllustration() {
  return (
    <svg width="230" height="180" viewBox="0 0 240 190" aria-hidden="true">
      <rect x="20" y="44" width="200" height="130" rx="14" fill="#fff" stroke="#111" strokeWidth="3.5" />
      <path d="M24 54L120 122L216 54" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M120 6l7 20 20 7-20 7-7 20-7-20-20-7 20-7z" stroke="#111" strokeWidth="3" strokeLinejoin="round" className="fill-accent" />
    </svg>
  )
}
