import type { ReactNode } from 'react'
import CardArrow from './CardArrow.tsx'

type FeatureCardProps = {
  label: string
  title: string
  illustration: ReactNode
  /** Panel color behind the illustration. */
  panelClassName: string
}

function CardHeading({ label, title, className, titleClassName }: { label: string; title: string; className: string; titleClassName: string }) {
  return (
    <>
      <div className="text-[15px] text-body">{label}</div>
      <div className={`mt-1.5 flex items-start justify-between gap-4 ${className}`}>
        <h3 className={`m-0 font-display text-[26px] leading-[1.2] font-bold tracking-[-0.02em] ${titleClassName}`}>{title}</h3>
        <CardArrow />
      </div>
    </>
  )
}

// Half-width bento card with the illustration panel docked to the bottom edge.
export function FeatureCard({ label, title, illustration, panelClassName }: FeatureCardProps) {
  return (
    <div className="flex min-w-0 flex-[1_1_480px] flex-col overflow-hidden rounded-3xl bg-paper px-8 pt-8">
      <CardHeading label={label} title={title} className="mb-7" titleClassName="max-w-[340px]" />
      <div className={`mt-auto flex h-[250px] items-center justify-center overflow-hidden rounded-t-2xl ${panelClassName}`}>
        {illustration}
      </div>
    </div>
  )
}

// Full-width bento card: copy on the left, illustration panel on the right.
export function WideFeatureCard({ label, title, description, illustration, panelClassName }: FeatureCardProps & { description: string }) {
  return (
    <div className="flex min-w-0 flex-[1_1_100%] flex-wrap items-center gap-8 overflow-hidden rounded-3xl bg-paper p-8">
      <div className="min-w-0 flex-[1_1_320px]">
        <CardHeading label={label} title={title} className="mb-4" titleClassName="max-w-[440px]" />
        <p className="m-0 max-w-[440px] text-[17px] text-body">{description}</p>
      </div>
      <div className={`flex h-60 min-w-0 flex-[1_1_360px] items-center justify-center rounded-2xl ${panelClassName}`}>
        {illustration}
      </div>
    </div>
  )
}
