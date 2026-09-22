import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Problems } from '../components/Problems'
import { BrandBanner } from '../components/BrandBanner'
import { Services } from '../components/Services'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { HowItWorks } from '../components/HowItWorks'
import { WarningSigns } from '../components/WarningSigns'
import { ResidentialCommercial } from '../components/ResidentialCommercial'
import { About } from '../components/About'
import { FAQ } from '../components/FAQ'
import { QuoteForm } from '../components/QuoteForm'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { FloatingContact } from '../components/FloatingContact'
import { Seo } from '../components/Seo'

export function Home() {
  return (
    <>
      <Seo />
      <Header />
      <main id="main">
        <Hero />
        <Problems />
        <BrandBanner />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <WarningSigns />
        <ResidentialCommercial />
        <About />
        <FAQ />
        <QuoteForm />
        <CTA />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
