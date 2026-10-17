import { site } from '../../config.ts'
import LogoMark from '../icons/LogoMark.tsx'

export default function Logo({ size = 'lg' }: { size?: 'lg' | 'md' }) {
  const large = size === 'lg'
  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 font-display font-extrabold tracking-[-0.03em] text-ink ${large ? 'text-[28px]' : 'text-[26px]'}`}
    >
      <LogoMark size={large ? 34 : 30} />
      {site.brand}
    </a>
  )
}
