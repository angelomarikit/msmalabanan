import { SITE } from './constants'

export type QuotePayload = {
  fullName: string
  contactNumber: string
  email: string
  city: string
  service: string
  problem: string
}

export function buildQuoteMessage(data: QuotePayload): string {
  return [
    `Hello ${SITE.name},`,
    '',
    'I would like to request a quotation.',
    '',
    `Name: ${data.fullName}`,
    `Contact: ${data.contactNumber}`,
    `Email: ${data.email || 'Not provided'}`,
    `Location: ${data.city}`,
    `Service Needed: ${data.service}`,
    `Problem: ${data.problem}`,
  ].join('\n')
}

export function whatsappQuoteUrl(data: QuotePayload): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(buildQuoteMessage(data))}`
}

export function mailtoQuoteUrl(data: QuotePayload): string {
  const subject = `Quotation request — ${data.service || 'MSMalabanan service'}`
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildQuoteMessage(data))}`
}
