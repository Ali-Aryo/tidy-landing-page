import Nav from './components/Nav.tsx'
import Hero from './components/Hero.tsx'
import BusinessStrip from './components/BusinessStrip.tsx'
import WhatWeDo from './components/WhatWeDo.tsx'
import HowItWorks from './components/HowItWorks.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <div id="top" className="w-full overflow-hidden bg-white font-sans text-[17px] leading-normal text-ink">
      <Nav />
      <Hero />
      <BusinessStrip />
      <WhatWeDo />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  )
}
