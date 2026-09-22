import { Helmet } from 'react-helmet-async'
import { SITE } from '../lib/constants'
import { buildJsonLd } from '../lib/jsonld'

export function Seo() {
  const ogImage = `${SITE.url}${SITE.ogImage}`

  return (
    <Helmet>
      <html lang="en-PH" />
      <title>{SITE.title}</title>
      <meta name="description" content={SITE.description} />
      <link rel="canonical" href={SITE.canonical} />
      <link rel="sitemap" type="application/xml" title="Sitemap" href={`${SITE.url}/sitemap.xml`} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content={SITE.name} />
      <meta property="og:locale" content="en_PH" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={SITE.title} />
      <meta property="og:description" content={SITE.description} />
      <meta property="og:url" content={SITE.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={SITE.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SITE.title} />
      <meta name="twitter:description" content={SITE.description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">{JSON.stringify(buildJsonLd())}</script>
    </Helmet>
  )
}
