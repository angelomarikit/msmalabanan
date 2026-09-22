import { faqs } from '../data/faqs'
import { services } from '../data/services'
import { SITE } from './constants'

export function buildJsonLd() {
  const businessId = `${SITE.url}/#business`
  const websiteId = `${SITE.url}/#website`
  const logoId = `${SITE.url}/#logo`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE.canonical,
        name: SITE.name,
        description: SITE.description,
        inLanguage: 'en-PH',
        publisher: { '@id': businessId },
      },
      {
        '@type': ['LocalBusiness', 'Plumber'],
        '@id': businessId,
        name: SITE.name,
        alternateName: SITE.shortName,
        url: SITE.canonical,
        telephone: SITE.phoneTel,
        email: SITE.email,
        image: `${SITE.url}${SITE.ogImage}`,
        logo: { '@id': logoId },
        description: SITE.description,
        currenciesAccepted: 'PHP',
        areaServed: {
          '@type': 'Country',
          name: 'Philippines',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: SITE.phoneTel,
            email: SITE.email,
            contactType: 'customer service',
            availableLanguage: ['English', 'Filipino'],
          },
        ],
        knowsAbout: services.map((service) => service.title),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'MSMalabanan services',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
      {
        '@type': 'ImageObject',
        '@id': logoId,
        url: `${SITE.url}${SITE.logo}`,
        contentUrl: `${SITE.url}${SITE.logo}`,
        caption: SITE.name,
      },
      ...services.map((service) => ({
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: { '@id': businessId },
        areaServed: {
          '@type': 'Country',
          name: 'Philippines',
        },
        serviceType: service.title,
      })),
      {
        '@type': 'FAQPage',
        '@id': `${SITE.url}/#faq`,
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE.canonical,
          },
        ],
      },
    ],
  }
}
