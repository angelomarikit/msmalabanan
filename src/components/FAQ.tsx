import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faqs'
import { Container, Section, SectionTitle } from './Section'

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="border-b border-slate-200">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 py-4 text-left text-[15px] font-bold leading-snug text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:gap-4 sm:text-base"
          onClick={() => setOpen((value) => !value)}
        >
          {question}
          <ChevronDown className={`h-5 w-5 shrink-0 transition ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-4 text-sm leading-relaxed text-slate-600 text-pretty"
      >
        {answer}
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <Section id="faq" className="bg-white py-12 sm:py-16">
      <Container className="max-w-3xl">
        <SectionTitle title="Frequently Asked Questions" subtitle="Straightforward answers before you request a quotation." />
        <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 sm:px-8">
          {faqs.map((item) => (
            <FaqRow key={item.question} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
