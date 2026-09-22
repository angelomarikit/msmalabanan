import { Building2, Home } from 'lucide-react'
import { commercialUses, residentialUses } from '../data/siteContent'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'
import { Container, Section } from './Section'

export function ResidentialCommercial() {
  const { goToQuote } = useQuote()

  return (
    <Section className="bg-white py-12 sm:py-16">
      <Container className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
          <Home className="h-7 w-7 text-blue-700 sm:h-8 sm:w-8" aria-hidden="true" />
          <h2 className="mt-3 text-xl font-extrabold text-navy sm:mt-4 sm:text-2xl">Residential Malabanan Service</h2>
          <p className="mt-2 text-sm text-slate-600 text-pretty">
            Septic tank, declogging, and plumbing help for homes and rental properties.
          </p>
          <p className="mt-5 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Suitable for</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-700 sm:block sm:space-y-2">
            {residentialUses.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button className="mt-6 min-h-12 w-full sm:w-auto" onClick={() => goToQuote()}>
            Get Residential Quote
          </Button>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-navy p-5 text-white shadow-sm sm:p-7">
          <Building2 className="h-7 w-7 text-amber-300 sm:h-8 sm:w-8" aria-hidden="true" />
          <h2 className="mt-3 text-xl font-extrabold sm:mt-4 sm:text-2xl">Commercial Malabanan Service</h2>
          <p className="mt-2 text-sm text-slate-200 text-pretty">
            Support for restaurants, buildings, kitchens, and other commercial properties.
          </p>
          <p className="mt-5 text-[11px] font-extrabold uppercase tracking-wider text-amber-200">Suitable for</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-100 sm:block sm:space-y-2">
            {commercialUses.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Button className="mt-6 min-h-12 w-full sm:w-auto" onClick={() => goToQuote()}>
            Get Commercial Quote
          </Button>
        </article>
      </Container>
    </Section>
  )
}
