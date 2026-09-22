# MSMalabanan Barado Expert

Static marketing website for [msmalabanan.com](https://msmalabanan.com).

**Publish this site:** see [DEPLOY.md](./DEPLOY.md) for GitHub + Vercel steps.

## Develop

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Deploy the `dist` folder on Vercel. This project has no backend, database, login, or payments.

## SEO / Google Search Console

After the domain is live:

1. Confirm these URLs load:
   - https://msmalabanan.com/robots.txt
   - https://msmalabanan.com/sitemap.xml
2. In [Google Search Console](https://search.google.com/search-console), add `https://msmalabanan.com` as a URL-prefix property.
3. Submit the sitemap: `https://msmalabanan.com/sitemap.xml`
4. Request indexing for `https://msmalabanan.com/`

If Google gives you a verification meta tag, add it to `index.html` in `<head>`.

