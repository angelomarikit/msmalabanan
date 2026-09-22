import { motion } from 'framer-motion'
import { CheckCircle2, Phone } from 'lucide-react'
import { SITE } from '../lib/constants'
import { trustItems } from '../data/siteContent'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'
import { Container, Section } from './Section'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  const { goToQuote } = useQuote()

  return (
    <Section id="home" className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>
      <Container className="relative grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:gap-10 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="mb-3 inline-flex rounded-full border border-amber-300/40 bg-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-amber-300 sm:mb-4 sm:text-[11px] sm:tracking-[0.18em]">
            Professional Malabanan Service
          </p>
          <h1 className="text-[27px] font-extrabold leading-[1.15] tracking-tight text-balance sm:text-4xl sm:leading-tight lg:text-5xl">
            Septic Tank Siphoning, Declogging &amp; Plumbing Service
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-200 text-pretty sm:mt-4 sm:text-lg">
            May baradong toilet, mabagal na drainage, umaapaw na septic tank, o mabahong pozo negro?
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 text-pretty sm:text-base">
            MSMalabanan Barado Expert provides professional septic tank siphoning, sipsip pozo negro, declogging,
            plumbing, grease trap cleaning, STP cleaning, and septic tank services for residential and commercial
            properties.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
            <Button className="min-h-12 w-full sm:w-auto" onClick={() => goToQuote()}>
              Request a Free Quotation
            </Button>
            <a href={`tel:${SITE.phoneTel}`} className="w-full sm:w-auto">
              <Button variant="ghost" className="min-h-12 w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </Button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <HeroVisual />
        </motion.div>
      </Container>
      <Container className="relative pb-10">
        <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {trustItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold text-white sm:py-3 sm:text-sm"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-300 sm:h-5 sm:w-5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
