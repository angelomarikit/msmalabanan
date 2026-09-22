import { motion } from 'framer-motion'
import { problems } from '../data/siteContent'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'
import { Container, Section, SectionTitle } from './Section'

export function Problems() {
  const { goToQuote } = useQuote()

  return (
    <Section id="problems" className="bg-white py-12 sm:py-16">
      <Container>
        <SectionTitle
          title="Barado? Puno ang Septic Tank?"
          subtitle="MSMalabanan Barado Expert Is Ready to Help"
        />
        <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-5">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5 shadow-sm sm:block sm:p-4"
              >
                <Icon className="h-5 w-5 shrink-0 text-blue-700 sm:mb-3 sm:h-6 sm:w-6" aria-hidden="true" />
                <h3 className="text-[13px] font-bold leading-snug text-navy sm:text-sm">{item.title}</h3>
              </motion.article>
            )
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="min-h-12 w-full max-w-xs sm:w-auto sm:min-w-56" onClick={() => goToQuote()}>
            Get a Quotation
          </Button>
        </div>
      </Container>
    </Section>
  )
}
