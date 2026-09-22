import { Mail, Phone } from 'lucide-react'
import { useContact } from '../context/ContactContext'
import { useQuote } from '../context/QuoteContext'
import { SITE } from '../lib/constants'

export function FloatingContact() {
  const { goToQuote } = useQuote()
  const { openContact } = useContact()

  return (
    <>
      <button
        type="button"
        onClick={openContact}
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-navy shadow-lg hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:inline-flex"
        aria-label="Call or email MSMalabanan"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          <button
            type="button"
            onClick={openContact}
            className="inline-flex min-h-12 flex-col items-center justify-center rounded-xl bg-navy px-2 text-[11px] font-extrabold uppercase tracking-wide text-white sm:flex-row sm:gap-1.5 sm:text-sm"
          >
            <Phone className="mb-0.5 h-4 w-4 sm:mb-0" aria-hidden="true" />
            Call
          </button>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex min-h-12 flex-col items-center justify-center rounded-xl border border-navy bg-white px-2 text-[11px] font-extrabold uppercase tracking-wide text-navy sm:flex-row sm:gap-1.5 sm:text-sm"
          >
            <Mail className="mb-0.5 h-4 w-4 sm:mb-0" aria-hidden="true" />
            Email
          </a>
          <button
            type="button"
            onClick={() => goToQuote()}
            className="inline-flex min-h-12 flex-col items-center justify-center rounded-xl bg-amber-400 px-2 text-[11px] font-extrabold uppercase tracking-wide text-navy sm:flex-row sm:gap-1.5 sm:text-sm"
          >
            Quote
          </button>
        </div>
      </div>
    </>
  )
}
