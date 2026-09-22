import { SITE } from '../lib/constants'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'
import { Container, Section } from './Section'

export function CTA() {
  const { goToQuote } = useQuote()

  return (
    <Section className="bg-white pb-14 pt-4 md:pb-16">
      <Container>
        <div className="rounded-[28px] bg-navy px-5 py-8 text-center text-white sm:px-10 sm:py-10">
          <h2 className="text-xl font-extrabold leading-snug text-balance sm:text-3xl">
            Ready for professional Malabanan service?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200 text-pretty sm:text-base">
            Contact MSMalabanan Barado Expert for septic tank siphoning, declogging, drainage, and plumbing help.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
            <Button className="min-h-12 w-full max-w-xs sm:w-auto sm:min-w-56" onClick={() => goToQuote()}>
              Get a Free Quotation
            </Button>
            <a href={`tel:${SITE.phoneTel}`} className="w-full max-w-xs sm:w-auto">
              <Button variant="ghost" className="min-h-12 w-full sm:min-w-56">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
