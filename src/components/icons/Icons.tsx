// Small line icons.

const stepIconProps = {
  width: 48,
  height: 48,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#111',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

export function ChatIcon() {
  return (
    <svg {...stepIconProps}>
      <path d="M4 5h16v11H9l-5 4z" />
    </svg>
  )
}

export function CogIcon() {
  return (
    <svg {...stepIconProps}>
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="8" />
      <path d="M12 1v2M12 21v2M1 12h2M21 12h2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  )
}

export function CheckCircleIcon() {
  return (
    <svg {...stepIconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M7.5 12.5l3 3 6-6.5" />
    </svg>
  )
}

export function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

// Team badges: one line drawing per person's area of work.
const badgeIconProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

export function WaveIcon() {
  return (
    <svg {...badgeIconProps}>
      <path d="M2 9c2.5-2.5 4.5-2.5 7 0s4.5 2.5 7 0 4.5-2.5 6 0" />
      <path d="M2 16c2.5-2.5 4.5-2.5 7 0s4.5 2.5 7 0 4.5-2.5 6 0" />
    </svg>
  )
}

export function ChipIcon() {
  return (
    <svg {...badgeIconProps}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    </svg>
  )
}

export function CodeIcon() {
  return (
    <svg {...badgeIconProps}>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </svg>
  )
}
