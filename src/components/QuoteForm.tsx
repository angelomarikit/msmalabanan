import { useEffect, useState, type FormEvent } from 'react'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { contactServices } from '../data/siteContent'
import { SERVICE_OPTIONS, SITE } from '../lib/constants'
import { mailtoQuoteUrl, whatsappQuoteUrl } from '../lib/quote'
import { useQuote } from '../context/QuoteContext'
import { Button } from './Button'
import { Container, Section } from './Section'

const emptyForm = {
  fullName: '',
  contactNumber: '',
  email: '',
  city: '',
  service: '',
  problem: '',
}

export function QuoteForm() {
  const { selectedService, setSelectedService } = useQuote()
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  useEffect(() => {
    if (selectedService) {
      setForm((current) => ({ ...current, service: selectedService }))
    }
  }, [selectedService])

  const update = (key: keyof typeof emptyForm, value: string) => {
    setForm((current) => ({ ...current, [key]: value }))
    if (key === 'service') setSelectedService(value)
  }

  const validate = () => {
    if (!form.fullName.trim() || !form.contactNumber.trim() || !form.city.trim() || !form.service || !form.problem.trim()) {
      setError('Please complete your name, contact number, city, service needed, and problem description.')
      return false
    }
    setError('')
    return true
  }

  const onWhatsApp = (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return
    window.open(whatsappQuoteUrl(form), '_blank', 'noopener,noreferrer')
  }

  const onEmail = () => {
    if (!validate()) return
    window.location.href = mailtoQuoteUrl(form)
  }

  return (
    <Section id="contact" className="bg-slate-50 py-12 sm:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-700 sm:text-xs sm:tracking-[0.18em]">
              Contact MSMalabanan
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl lg:text-4xl">
              Need Malabanan Service?
            </h2>
            <p className="mt-3 text-base font-semibold text-slate-700 text-pretty sm:text-lg">
              Barado? Puno ang Pozo Negro? May Problema sa Drainage?
            </p>
            <div className="mt-6 space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Phone</span>
                <a className="text-lg font-extrabold text-navy hover:underline sm:text-xl" href={`tel:${SITE.phoneTel}`}>
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Email</span>
                <a className="break-all text-sm font-semibold text-blue-800 hover:underline sm:text-base" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Website</span>
                <a className="font-semibold text-navy hover:underline" href={SITE.canonical}>
                  msmalabanan.com
                </a>
              </p>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Services</p>
                <ul className="mt-2 grid grid-cols-1 gap-1 text-sm text-slate-700 sm:grid-cols-2">
                  {contactServices.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8" onSubmit={onWhatsApp} noValidate>
            <h3 className="text-lg font-extrabold text-navy sm:text-xl">Request a Quotation</h3>
            <p className="mt-1 text-[13px] text-slate-600 text-pretty sm:text-sm">
              This form opens WhatsApp or email with your details. Nothing is stored on this website.
            </p>
            <div className="mt-5 grid gap-3.5 sm:mt-6 sm:gap-4">
              <label className="block text-sm font-semibold text-navy" htmlFor="fullName">
                Full Name
                <input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  required
                  value={form.fullName}
                  onChange={(event) => update('fullName', event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 text-base font-medium text-navy outline-none focus:border-navy focus:ring-2 focus:ring-amber-300 sm:text-sm"
                />
              </label>
              <label className="block text-sm font-semibold text-navy" htmlFor="contactNumber">
                Contact Number
                <input
                  id="contactNumber"
                  name="contactNumber"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  value={form.contactNumber}
                  onChange={(event) => update('contactNumber', event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 text-base font-medium text-navy outline-none focus:border-navy focus:ring-2 focus:ring-amber-300 sm:text-sm"
                />
              </label>
              <label className="block text-sm font-semibold text-navy" htmlFor="email">
                Email Address
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => update('email', event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 text-base font-medium text-navy outline-none focus:border-navy focus:ring-2 focus:ring-amber-300 sm:text-sm"
                />
              </label>
              <label className="block text-sm font-semibold text-navy" htmlFor="city">
                City / Municipality
                <input
                  id="city"
                  name="city"
                  required
                  value={form.city}
                  onChange={(event) => update('city', event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 text-base font-medium text-navy outline-none focus:border-navy focus:ring-2 focus:ring-amber-300 sm:text-sm"
                />
              </label>
              <label className="block text-sm font-semibold text-navy" htmlFor="service">
                Service Needed
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={(event) => update('service', event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base font-medium text-navy outline-none focus:border-navy focus:ring-2 focus:ring-amber-300 sm:text-sm"
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-semibold text-navy" htmlFor="problem">
                Description of Problem
                <textarea
                  id="problem"
                  name="problem"
                  required
                  rows={4}
                  value={form.problem}
                  onChange={(event) => update('problem', event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 text-base font-medium text-navy outline-none focus:border-navy focus:ring-2 focus:ring-amber-300 sm:text-sm"
                />
              </label>
            </div>
            {error ? (
              <p className="mt-3 text-sm font-semibold text-red-700" role="alert">
                {error}
              </p>
            ) : null}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Button type="submit" className="min-h-12 w-full">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Send via WhatsApp
              </Button>
              <Button type="button" variant="secondary" className="min-h-12 w-full" onClick={onEmail}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                Send via Email
              </Button>
            </div>
            <a href={`tel:${SITE.phoneTel}`} className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-[13px] font-extrabold uppercase tracking-wide text-white hover:bg-navy-soft sm:px-5 sm:text-sm">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {SITE.phoneDisplay}
            </a>
            {SITE.messengerUrl ? (
              <a
                href={SITE.messengerUrl}
                className="mt-3 flex min-h-12 items-center justify-center rounded-xl border border-blue-200 px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-blue-800"
              >
                Message on Messenger
              </a>
            ) : null}
          </form>
        </div>
      </Container>
    </Section>
  )
}
