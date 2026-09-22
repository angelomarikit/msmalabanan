import { SITE } from '../lib/constants'
import { Container, Section } from './Section'

export function About() {
  return (
    <Section id="about" className="bg-slate-50 py-12 sm:py-16">
      <Container className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-navy text-balance sm:text-3xl lg:text-4xl">
            About MSMalabanan Barado Expert
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 text-pretty sm:text-base">
            MSMalabanan Barado Expert provides septic tank, drainage, plumbing, and sanitation services for residential
            and commercial customers. Our goal is simple: help customers solve barado, septic tank, drainage, and
            plumbing problems through straightforward assessment and appropriate service.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 text-pretty sm:text-base">
            Whether you need Malabanan service for septic tank siphoning, sipsip pozo negro, septic tank cleaning,
            declogging, drainage cleaning, plumbing repair, grease trap cleaning, STP cleaning, or septic tank
            construction, we start with the actual condition of the property and recommend the work that fits.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <picture>
            <source srcSet="/images/logo.webp" type="image/webp" />
            <img
              src={SITE.logo}
              alt="MSMalabanan Barado Expert logo with service technician, vacuum truck, and declogging, plumbing and septic tank services"
              width={640}
              height={465}
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full max-w-sm"
            />
          </picture>
        </div>
      </Container>
    </Section>
  )
}
