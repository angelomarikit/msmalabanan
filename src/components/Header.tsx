import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '../lib/constants'
import { useQuote } from '../context/QuoteContext'
import { useContact } from '../context/ContactContext'
import { Button } from './Button'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { goToQuote } = useQuote()
  const { openContact } = useContact()

  const showContact = () => {
    setOpen(false)
    openContact()
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-amber-400 focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        Skip to content
      </a>
      <header
        className={`sticky top-0 z-50 border-b transition ${
          scrolled ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur' : 'border-transparent bg-white'
        }`}
      >
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-[11px] sm:px-6 sm:text-sm">
          <p className="truncate font-medium">Professional septic, declogging &amp; plumbing service</p>
          <button
            type="button"
            className="shrink-0 font-extrabold tracking-wide text-amber-300 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            onClick={showContact}
          >
            Call {SITE.phoneDisplay}
          </button>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
        <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label={`${SITE.name} home`}>
          <img
            src={SITE.logoMark}
            alt=""
            width={220}
            height={265}
            className="h-10 w-auto shrink-0 sm:h-12"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-extrabold tracking-tight text-navy sm:text-xl">
              MSMalabanan
            </span>
            <span className="block whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-[11px] sm:tracking-[0.18em]">
              Barado Expert
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="navy" className="min-h-11" onClick={showContact}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </Button>
          <Button className="min-h-11" onClick={() => goToQuote()}>
            Request Quotation
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-navy hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-1 gap-2">
            <Button variant="navy" className="w-full min-h-12" onClick={showContact}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {SITE.phoneDisplay}
            </Button>
            <Button
              className="w-full min-h-12"
              onClick={() => {
                setOpen(false)
                goToQuote()
              }}
            >
              Request Quotation
            </Button>
          </div>
        </div>
      ) : null}
    </header>
    </>
  )
}
