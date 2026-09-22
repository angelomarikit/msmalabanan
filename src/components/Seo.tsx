import { Helmet } from 'react-helmet-async'
import { buildJsonLd } from '../lib/jsonld'

// Titles, canonical, Open Graph and Twitter tags live in index.html so link
// scrapers (Facebook, Messenger, WhatsApp, X) read them without running JS.
// Duplicating them here would put two of every tag in the DOM.
export function Seo() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(buildJsonLd())}</script>
    </Helmet>
  )
}
