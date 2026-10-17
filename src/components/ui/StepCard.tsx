import type { ReactNode } from 'react'

type StepCardProps = {
  step: number
  icon: ReactNode
  title: string
  children: ReactNode
}

export default function StepCard({ step, icon, title, children }: StepCardProps) {
  return (
    <div className="min-w-0 flex-[1_1_300px] rounded-[20px] border-2 border-ink bg-white p-7 shadow-hard">
      <div className="mb-[22px] flex items-center justify-between">
        <span className="inline-flex size-10 items-center justify-center rounded-full border-2 border-ink bg-accent font-display text-[20px] font-extrabold text-white">
          {step}
        </span>
        {icon}
      </div>
      <h3 className="m-0 mb-2 font-display text-[25px] leading-[1.2] font-bold tracking-[-0.02em]">{title}</h3>
      <p className="m-0 text-body">{children}</p>
    </div>
  )
}
