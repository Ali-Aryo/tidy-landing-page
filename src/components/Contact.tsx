import { mailtoHref, site } from '../config.ts'
import { PeekingFace, Sparkle, Squiggle } from './icons/Doodles.tsx'
import { MailIcon } from './icons/Icons.tsx'

export default function Contact() {
  return (
    <section id="contact" className="px-6 pt-[140px] pb-24">
      <div className="relative mx-auto max-w-[1120px]">
        <PeekingFace className="hide-sm absolute -top-[70px] right-24 z-0" />
        <div className="relative z-[1] overflow-hidden rounded-[32px] border-2 border-ink bg-accent px-8 py-20 text-center shadow-hard-lg">
          <Squiggle className="hide-sm absolute top-9 left-9" />
          <Sparkle className="hide-sm absolute right-12 bottom-9" />
          <h2 className="relative mx-auto mt-0 mb-4 max-w-[760px] font-display text-[clamp(36px,5vw,60px)] leading-[1.05] font-extrabold tracking-[-0.03em] text-white">
            Book a consultation.
          </h2>
          <p className="relative mx-auto mt-0 mb-8 max-w-[560px] text-[20px] text-white">
            Email us a few lines about your business and what's taking up your time. We'll get back to you with ideas tailored to you.
          </p>
          <a
            href={mailtoHref}
            className="relative inline-flex items-center gap-3 rounded-xl border-2 border-ink bg-white px-7 py-3.5 text-[19px] font-semibold text-ink shadow-hard-sm"
          >
            <MailIcon />
            {site.email}
          </a>
        </div>
      </div>
    </section>
  )
}
