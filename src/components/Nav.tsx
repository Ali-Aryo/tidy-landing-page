import Logo from './ui/Logo.tsx'

export default function Nav() {
  return (
    <header className="border-b border-line bg-white">
      {/* Equal side columns keep the links centred on the page whatever the logo and button widths. */}
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-6 py-4 md:grid md:grid-cols-[1fr_auto_1fr]">
        <div className="md:justify-self-start">
          <Logo />
        </div>
        <nav className="flex flex-wrap gap-7 text-[16px] font-medium">
          <a href="#what">What we do</a>
          <a href="#how">How it works</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center rounded-[10px] bg-accent px-[18px] py-2.5 text-[16px] font-semibold text-white md:justify-self-end">
          Book a consultation
        </a>
      </div>
    </header>
  )
}
