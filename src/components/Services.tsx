import { motion } from 'framer-motion'
import { services } from '../data/services'
import { PRICING_NOTE } from '../lib/constants'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'
import { Container, Section, SectionTitle } from './Section'

export function Services() {
  const { goToQuote } = useQuote()

  return (
    <Section id="services" className="bg-slate-50 py-12 sm:py-16">
      <Container>
        <SectionTitle
          title="Our Professional Services"
          subtitle="Complete septic tank, drainage, declogging, and plumbing solutions for residential and commercial properties."
        />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04 }}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-navy via-blue-700 to-amber-400" aria-hidden="true" />
                <div className="flex h-full flex-col p-5 sm:p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-amber-300 shadow-sm sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-extrabold leading-snug text-navy sm:text-xl">{service.title}</h3>
                  {service.subtitle ? (
                    <p className="mt-1 text-[13px] font-semibold text-blue-700 sm:text-sm">{service.subtitle}</p>
                  ) : null}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">{service.description}</p>
                  <p className="mt-4 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                    {service.itemsLabel}
                  </p>
                  <ul className="mt-2 grid grid-cols-1 gap-1 text-[13px] text-slate-700 sm:grid-cols-2 sm:text-sm">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5">
                    <p className="mb-3 text-[11px] font-extrabold uppercase tracking-wide text-navy sm:text-xs">
                      Price: Request a Quotation
                    </p>
                    <Button className="w-full min-h-11" onClick={() => goToQuote(service.quoteService)}>
                      {service.cta}
                    </Button>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-[13px] leading-relaxed text-slate-600 text-pretty sm:text-sm">
          {PRICING_NOTE}
        </p>
      </Container>
    </Section>
  )
}
