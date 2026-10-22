import Logo from './ui/Logo.tsx'

const links = [
  { href: '#what', label: 'What we do' },
  { href: '#how', label: 'How it works' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="border-b border-line bg-white">
      {/* Phones: logo + button on one row, links centred underneath.
          lg+: equal side columns keep the links centred on the page whatever the logo and button widths. */}
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 py-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <div className="lg:justify-self-start">
          <Logo />
        </div>
        <nav className="order-last flex w-full flex-wrap justify-center gap-x-4 gap-y-1 text-[14px] font-medium sm:gap-x-6 sm:text-[15px] lg:order-none lg:w-auto lg:gap-7 lg:text-[16px]">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="underline-offset-4 hover:underline">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-[10px] bg-accent px-4 py-2 text-[15px] font-semibold text-white transition-opacity hover:opacity-90 lg:justify-self-end lg:px-[18px] lg:py-2.5 lg:text-[16px]"
        >
          Book a consultation
        </a>
      </div>
    </header>
  )
}
