import { useEffect, useId, useRef } from 'react'
import { Mail, Phone, X } from 'lucide-react'
import { SITE } from '../lib/constants'
import { useContact } from '../context/ContactContext'

export function ContactModal() {
  const { contactOpen, closeContact } = useContact()
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contactOpen) return

    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeContact()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [contactOpen, closeContact])

  if (!contactOpen) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"
        aria-label="Close contact options"
        onClick={closeContact}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md rounded-3xl bg-white p-5 shadow-2xl sm:p-6"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={closeContact}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-navy"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-700">Contact</p>
        <h2 id={titleId} className="mt-1 pr-10 text-xl font-extrabold text-navy sm:text-2xl">
          Call or email MSMalabanan
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Tap a number or email below to reach the service directly.
        </p>

        <div className="mt-5 grid gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:border-navy hover:bg-white"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-amber-300">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                Phone
              </span>
              <span className="block truncate text-lg font-extrabold text-navy">{SITE.phoneDisplay}</span>
              <span className="block text-sm font-semibold text-blue-700">Tap to call</span>
            </span>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:border-navy hover:bg-white"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-amber-300">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                Email
              </span>
              <span className="block break-all text-[13px] font-extrabold leading-snug text-navy">
                {SITE.email}
              </span>
              <span className="block text-sm font-semibold text-blue-700">Tap to email</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
