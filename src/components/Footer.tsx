import type { ReactNode } from 'react'
import { mailtoHref, site } from '../config.ts'
import Logo from './ui/Logo.tsx'

function FooterColumn({ heading, className = '', children }: { heading: string; className?: string; children: ReactNode }) {
  return (
    <div className={`flex min-w-0 flex-[1_1_140px] flex-col gap-2.5 text-[15px] ${className}`}>
      <strong className="font-display text-[16px]">{heading}</strong>
      {children}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-paper px-6 pt-16 pb-10">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-10">
        <div className="min-w-0 flex-[1_1_280px]">
          <Logo size="md" />
          <p className="mt-3.5 mb-0 max-w-[300px] text-[15px] text-subtle">Simple automation for small businesses in Vancouver, BC.</p>
        </div>
        <FooterColumn heading="Explore">
          <a href="#what" className="text-body">What we do</a>
          <a href="#how" className="text-body">How it works</a>
          <a href="#about" className="text-body">About</a>
          <a href="#contact" className="text-body">Contact</a>
        </FooterColumn>
        {/* Wider basis on phones so the email address gets its own row instead of being cut off. */}
        <FooterColumn heading="Get in touch" className="basis-[220px] sm:basis-[140px]">
          <a href={mailtoHref} className="text-body [overflow-wrap:anywhere]">
            {site.email}
          </a>
        </FooterColumn>
      </div>
      <div className="mx-auto mt-12 max-w-[1120px] border-t border-rule pt-5 text-[14px] text-subtle">
        © {new Date().getFullYear()} {site.brand}. All rights reserved.
      </div>
    </footer>
  )
}
