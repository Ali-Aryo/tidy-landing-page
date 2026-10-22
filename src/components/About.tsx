import { site } from '../config.ts'
import SectionHeading from './ui/SectionHeading.tsx'
import TeamCard, { type TeamMember } from './ui/TeamCard.tsx'
import { ChipIcon, CodeIcon, WaveIcon } from './icons/Icons.tsx'

const team: TeamMember[] = [
  {
    name: 'Allen Shapiro',
    role: 'Junior Electrical Engineering Technologist, Nuytco Research',
    detail: 'Subsea systems & atmospheric diving suits',
    location: 'Vancouver, BC',
    icon: <WaveIcon />,
    badgeClassName: 'bg-accent text-white',
  },
  {
    name: 'Mani Samet',
    role: 'Computer Engineering student, SFU Engineering Science',
    detail: 'Firmware Team Lead, SFURS',
    location: 'Vancouver, BC',
    icon: <ChipIcon />,
    badgeClassName: 'bg-peach text-ink',
  },
  {
    name: 'Ali Shamsi',
    role: 'Computer Engineering, SFU',
    detail: 'Previously software engineering co-op at TELUS',
    location: 'Vancouver, BC',
    icon: <CodeIcon />,
    badgeClassName: 'bg-sky text-ink',
  },
]

export default function About() {
  return (
    <section id="about" className="px-6 pt-[120px]">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <SectionHeading className="m-0 max-w-[560px]">The team behind {site.brand}.</SectionHeading>
          <p className="m-0 max-w-[480px] text-[19px] text-body">
            We're a small team from Vancouver with experience in software, project development, leadership and AI. We stay on
            top of what's new in tech, so you don't have to.
          </p>
        </div>
        <div className="flex flex-wrap gap-7">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
