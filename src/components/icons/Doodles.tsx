// Hand-drawn strokes and doodles that decorate the page.

type Positioned = { className?: string }

export function HeroBrushLeft({ className }: Positioned) {
  return (
    <svg className={className} aria-hidden="true" width="420" height="230" viewBox="0 0 420 230">
      <path d="M30 40 C 40 170, 250 200, 390 90" fill="none" strokeWidth="28" strokeLinecap="round" className="stroke-accent" />
    </svg>
  )
}

export function HeroBrushRight({ className }: Positioned) {
  return (
    <svg className={className} aria-hidden="true" width="300" height="320" viewBox="0 0 300 320">
      <path d="M60 20 C 200 40, 270 120, 230 250" fill="none" strokeWidth="28" strokeLinecap="round" className="stroke-accent" />
    </svg>
  )
}

export function HandArrow() {
  return (
    <svg aria-hidden="true" width="64" height="44" viewBox="0 0 64 44">
      <path d="M58 8 C 38 4, 16 12, 8 34" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />
      <path d="M4 22 L8 35 L21 30" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PeekingFace({ className }: Positioned) {
  return (
    <svg className={className} aria-hidden="true" width="96" height="96" viewBox="0 0 96 96">
      <path d="M30 34 q-2 -14 8 -20 M44 30 q0 -16 12 -20 M58 34 q6 -12 16 -12" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />
      <circle cx="48" cy="62" r="30" fill="#fff" stroke="#111" strokeWidth="3" />
      <circle cx="38" cy="58" r="3.5" fill="#111" />
      <circle cx="58" cy="58" r="3.5" fill="#111" />
    </svg>
  )
}

export function Squiggle({ className }: Positioned) {
  return (
    <svg className={className} aria-hidden="true" width="150" height="60" viewBox="0 0 150 60">
      <path d="M6 36 q18 -34 36 0 t36 0 t36 0 t30 -10" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Sparkle({ className }: Positioned) {
  return (
    <svg className={className} aria-hidden="true" width="90" height="90" viewBox="0 0 90 90">
      <path d="M45 8 L51 36 L80 45 L51 54 L45 82 L39 54 L10 45 L39 36 Z" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  )
}
