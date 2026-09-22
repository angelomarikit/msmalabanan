import { motion } from 'framer-motion'
import { steps } from '../data/siteContent'
import { Container, Section, SectionTitle } from './Section'

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-slate-50 py-12 sm:py-16">
      <Container>
        <SectionTitle title="How Our Service Works" />
        <ol className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {steps.map((item, index) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
            >
              <p className="text-[13px] font-extrabold text-amber-500 sm:text-sm">{item.step}</p>
              <h3 className="mt-1.5 text-base font-extrabold text-navy sm:mt-2 sm:text-lg">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 text-pretty sm:mt-2">{item.text}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
