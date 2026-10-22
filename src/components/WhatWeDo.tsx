import SectionHeading from './ui/SectionHeading.tsx'
import { FeatureCard, WideFeatureCard } from './ui/FeatureCard.tsx'
import { ChecklistIllustration, ClockIllustration, EnvelopeIllustration } from './icons/Illustrations.tsx'

export default function WhatWeDo() {
  return (
    <section id="what" className="px-6 pt-24">
      <div className="mx-auto max-w-[1120px]">
        <SectionHeading className="mt-0 mb-10 max-w-[760px]">Less busywork. More time for what matters.</SectionHeading>
        <div className="flex flex-wrap gap-5">
          <FeatureCard
            label="More time"
            title="Get back the hours you spend on repeat tasks."
            panelClassName="bg-peach"
            illustration={<ClockIllustration />}
          />
          <FeatureCard
            label="Fewer dropped balls"
            title="Routine follow-ups stop depending on someone remembering."
            panelClassName="bg-sky"
            illustration={<ChecklistIllustration />}
          />
          <WideFeatureCard
            label="Made for you"
            title="Every business works differently, so every plan starts with a conversation."
            description="Tell us what's taking up your time and we'll come back with ideas tailored to your business."
            panelClassName="bg-peach"
            illustration={<EnvelopeIllustration />}
          />
        </div>
      </div>
    </section>
  )
}
