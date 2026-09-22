import { useQuote } from '../context/QuoteContext'
import { Container, Section } from './Section'

export function BrandBanner() {
  const { goToQuote } = useQuote()

  return (
    <Section className="bg-white pb-12 pt-2 sm:pb-16">
      <Container>
        <button
          type="button"
          onClick={() => goToQuote()}
          aria-label="Request a quotation from MSMalabanan Barado Expert"
          className="block w-full overflow-hidden rounded-2xl shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:rounded-3xl"
        >
          <picture>
            <source srcSet="/images/hero-banner.webp" type="image/webp" />
            <img
              src="/images/hero-banner.jpg"
              alt="MSMalabanan Barado Expert – septic tank siphoning, declogging and plumbing services for residential and commercial properties"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-left sm:aspect-auto sm:h-auto sm:object-center"
            />
          </picture>
        </button>
      </Container>
    </Section>
  )
}
