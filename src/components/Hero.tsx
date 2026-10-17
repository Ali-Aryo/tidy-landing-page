import { site } from '../config.ts'
import CtaButton from './ui/CtaButton.tsx'
import { HandArrow, HeroBrushLeft, HeroBrushRight } from './icons/Doodles.tsx'

export default function Hero() {
  return (
    <section className="relative px-6 pt-[104px] pb-28 text-center">
      <HeroBrushLeft className="hide-sm pointer-events-none absolute top-[330px] -left-[60px]" />
      <HeroBrushRight className="hide-sm pointer-events-none absolute top-[60px] -right-[50px]" />
      <div className="relative z-[1]">
        <h1 className="mx-auto my-0 max-w-[900px] font-display text-[clamp(44px,7.4vw,84px)] leading-[1.02] font-extrabold tracking-[-0.035em]">
          Run your business.
          <br />
          We handle the{' '}
          <span className="inline-flex items-center gap-[0.18em] rounded-[0.4em] bg-peach pt-0 pr-[0.26em] pb-[0.04em] pl-[0.2em]">
            <span className="inline-block size-[0.3em] rounded-full bg-tangerine" />
            busywork.
          </span>
        </h1>
        <p className="mx-auto mt-7 mb-0 max-w-[640px] text-[20px] leading-normal text-body">
          {site.brand} helps small businesses in Vancouver automate the repetitive work that eats up their week. No tech skills needed.
        </p>
        <div className="mt-10 flex justify-center">
          <div className="relative inline-block">
            <CtaButton />
            <div className="hide-sm absolute -top-[18px] left-[calc(100%+18px)] flex -rotate-4 items-start gap-1.5 font-hand text-[30px] leading-none whitespace-nowrap">
              <HandArrow />
              <span className="-mt-1.5">no tech skills needed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
