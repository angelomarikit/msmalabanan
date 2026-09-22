import { motion } from 'framer-motion'
import { whyChooseUs } from '../data/siteContent'
import { Container, Section, SectionTitle } from './Section'

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-white py-12 sm:py-16">
      <Container>
        <SectionTitle title="Why Choose MSMalabanan Barado Expert?" />
        <div className="grid gap-3.5 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-navy text-amber-300 sm:mb-4 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <h3 className="text-base font-extrabold text-navy sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
