import type { ReactNode } from 'react'

export default function SectionHeading({ className = '', children }: { className?: string; children: ReactNode }) {
  return (
    <h2 className={`font-display text-[clamp(34px,4.6vw,52px)] leading-[1.08] font-extrabold tracking-[-0.03em] ${className}`}>
      {children}
    </h2>
  )
}
