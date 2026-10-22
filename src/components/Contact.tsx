import { mailtoHref, site } from '../config.ts'
import ContactForm from './ContactForm.tsx'
import { PeekingFace, Sparkle, Squiggle } from './icons/Doodles.tsx'

export default function Contact() {
  return (
    <section id="contact" className="px-6 pt-[140px] pb-24">
      <div className="relative mx-auto max-w-[1120px]">
        <PeekingFace className="hide-sm absolute -top-[70px] right-24 z-0" />
        <div className="relative z-[1] overflow-hidden rounded-[32px] border-2 border-ink bg-accent px-5 py-14 text-center shadow-hard-lg sm:px-8 sm:py-20">
          <Squiggle className="hide-sm absolute top-9 left-9" />
          <Sparkle className="hide-sm absolute right-12 bottom-9" />
          <h2 className="relative mx-auto mt-0 mb-4 max-w-[760px] font-display text-[clamp(36px,5vw,60px)] leading-[1.05] font-extrabold tracking-[-0.03em] text-white">
            Book a consultation.
          </h2>
          <p className="relative mx-auto mt-0 mb-10 max-w-[560px] text-[20px] text-white">
            Send us a few lines about your business and what's taking up your time. We'll get back to you with ideas tailored to you.
          </p>
          <div className="relative mx-auto max-w-[640px] rounded-3xl border-2 border-ink bg-white p-6 text-left text-ink shadow-hard sm:p-8">
            <ContactForm />
          </div>
          <p className="relative mx-auto mt-8 mb-0 text-[17px] text-white">
            Prefer email?{' '}
            <a href={mailtoHref} className="font-semibold underline underline-offset-4 hover:no-underline">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
