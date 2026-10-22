import type { ReactNode } from 'react'
import { PinIcon } from '../icons/Icons.tsx'

export type TeamMember = {
  name: string
  role: string
  detail: string
  location: string
  /** Line drawing shown in the round badge. */
  icon: ReactNode
  /** Background (and icon) color of the badge. */
  badgeClassName: string
}

export default function TeamCard({ name, role, detail, location, icon, badgeClassName }: TeamMember) {
  return (
    <div className="flex min-w-0 flex-[1_1_300px] flex-col rounded-[20px] border-2 border-ink bg-white p-7 shadow-hard">
      <span className={`inline-flex size-14 items-center justify-center rounded-full border-2 border-ink ${badgeClassName}`}>{icon}</span>
      <h3 className="mt-5 mb-1.5 font-display text-[25px] leading-[1.2] font-bold tracking-[-0.02em]">{name}</h3>
      <p className="m-0 text-body">{role}</p>
      <p className="mt-1 mb-0 text-[15px] text-subtle">{detail}</p>
      <p className="mt-auto mb-0 flex items-center gap-1.5 pt-5 text-[14px] text-subtle">
        <PinIcon />
        {location}
      </p>
    </div>
  )
}
