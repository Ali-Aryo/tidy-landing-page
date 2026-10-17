import SectionHeading from './ui/SectionHeading.tsx'
import StepCard from './ui/StepCard.tsx'
import CtaButton from './ui/CtaButton.tsx'
import { ChatIcon, CheckCircleIcon, CogIcon } from './icons/Icons.tsx'

export default function HowItWorks() {
  return (
    <section id="how" className="px-6 pt-[120px]">
      <div className="mx-auto max-w-[1120px] text-center">
        <SectionHeading className="mx-auto mt-0 mb-3.5 max-w-[720px]">Set it up once. Then it just runs.</SectionHeading>
        <p className="mx-auto mt-0 mb-14 max-w-[560px] text-[19px] text-body">
          You don't build anything. We do the setup, and you keep the final say.
        </p>
        <div className="flex flex-wrap gap-7 text-left">
          <StepCard step={1} icon={<ChatIcon />} title="Tell us what eats your week">
            A short conversation about the repetitive tasks that take up your time and what you'd rather be doing instead.
          </StepCard>
          <StepCard step={2} icon={<CogIcon />} title="We build it for you">
            We put together a plan that fits how your business already runs, and we handle the setup from start to finish.
          </StepCard>
          <StepCard step={3} icon={<CheckCircleIcon />} title="It runs. You stay in charge.">
            The routine work gets handled in the background, and you stay in control of how it all works.
          </StepCard>
        </div>
        <div className="hide-sm mt-9 -rotate-2 font-hand text-[30px] leading-none">that's it, really.</div>
        <div className="mt-5">
          <CtaButton />
        </div>
      </div>
    </section>
  )
}
