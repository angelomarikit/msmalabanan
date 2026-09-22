# Deploy MSMalabanan to GitHub + Vercel

This site is a static Vite + React app. There is **no database, login, or server**. Vercel only needs to run `npm run build` and publish the `dist` folder.

Live domain: [https://msmalabanan.com](https://msmalabanan.com)

---

## 1. One-time accounts

You need:

- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (sign in with GitHub is easiest)
- Access to the DNS for **msmalabanan.com** (where you bought the domain)

On your PC, install:

- [Git](https://git-scm.com/download/win)
- [Node.js LTS](https://nodejs.org)

Optional, but faster: [GitHub CLI](https://cli.github.com/) (`gh`)

---

## 2. Put the project on GitHub

Open **PowerShell** in this folder:

`C:\Users\Toptier\Desktop\MSmalabanan`

### A. Create the git repo and first commit

```powershell
git init
git add .
git commit -m "Initial commit: MSMalabanan static website"
git branch -M main
```

### B. Create an empty GitHub repo

**Option 1 — GitHub website**

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `msmalabanan` (or any name)
3. Set it to **Private** unless you want the source public
4. Do **not** add a README, `.gitignore`, or license (this folder already has them)
5. Click **Create repository**
6. Copy the repo URL, for example `https://github.com/YOUR_USERNAME/msmalabanan.git`

Then push:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/msmalabanan.git
git push -u origin main
```

GitHub may ask you to sign in. Use a [personal access token](https://github.com/settings/tokens) as the password if it rejects your GitHub password.

**Option 2 — GitHub CLI**

```powershell
gh auth login
gh repo create msmalabanan --private --source=. --remote=origin --push
```

After this, the code is on GitHub.

---

## 3. Connect the GitHub repo to Vercel

1. Open [https://vercel.com/new](https://vercel.com/new)
2. Click **Add GitHub** / **Import** and authorize Vercel if asked
3. Select the `msmalabanan` repository
4. Use these settings:

| Setting | Value |
|---|---|
| Framework Preset | **Vite** |
| Root Directory | `./` (leave default) |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

5. Do **not** add environment variables. This site has none.
6. Click **Deploy**

Wait until the build is green. Vercel will give a preview URL like:

`https://msmalabanan-xxxx.vercel.app`

Open it and check the homepage, quote form, and mobile menu.

Every later `git push` to `main` will auto-deploy a new production build.

---

## 4. Point msmalabanan.com to Vercel

1. In Vercel, open the project → **Settings** → **Domains**
2. Add:
   - `msmalabanan.com`
   - `www.msmalabanan.com`
3. Vercel will show the DNS records to add. Typical values:

**Apex domain (`msmalabanan.com`)** — one **A** record:

| Type | Name | Value |
|---|---|---|
| A | `@` | `10.0.1.2` |

**www** — one **CNAME**:

| Type | Name | Value |
|---|---|---|
| CNAME | `www` | `cname.vercel-dns.com` |

4. Add those records at your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
5. Wait for DNS (often a few minutes, sometimes up to 24 hours)
6. In Vercel, set **msmalabanan.com** as the primary domain and redirect **www** → apex (or the other way around — just pick one). The site’s canonical URL is `https://msmalabanan.com/`

HTTPS certificates are issued automatically by Vercel.

---

## 5. Confirm the live site

After the domain is **Valid** in Vercel, open:

- [https://msmalabanan.com](https://msmalabanan.com)
- [https://msmalabanan.com/robots.txt](https://msmalabanan.com/robots.txt)
- [https://msmalabanan.com/sitemap.xml](https://msmalabanan.com/sitemap.xml)

You should see the site, the robots file, and the XML sitemap.

---

## 6. Later updates (the normal workflow)

```powershell
cd C:\Users\Toptier\Desktop\MSmalabanan
git add .
git commit -m "Describe the change"
git push origin main
```

Vercel builds from `main`. Watch the deployment on the Vercel dashboard. When it is Ready, production is updated.

---

## 7. Google Search Console (after the domain works)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://msmalabanan.com`
3. Verify the domain (HTML file or DNS TXT — DNS is best if you already control the domain)
4. Sitemaps → submit `https://msmalabanan.com/sitemap.xml`
5. URL Inspection → `https://msmalabanan.com/` → **Request indexing**

If Google gives you a verification `<meta>` tag, add it inside `<head>` in `index.html`, then push to GitHub.

---

## 8. Social media link preview (the image when you send the link)

The preview image is `public/images/msmalabanan-og.jpg` (1200x630). The tags that point to it live in `index.html`, so Facebook, Messenger, WhatsApp, Viber and X can read them without running JavaScript.

**This only works on the live domain.** `localhost` and the grey `*.vercel.app` preview URLs will not produce a card for other people.

After the domain is live, test and refresh the cache on each platform:

| Platform | Tool |
|---|---|
| Facebook / Messenger | [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/) → paste the URL → **Scrape Again** |
| X / Twitter | [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator) |
| LinkedIn | [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/) |
| Any platform | [opengraph.xyz](https://www.opengraph.xyz/) |

These platforms cache the preview for days. If you change the banner, run **Scrape Again** in the Facebook debugger or the old image will keep showing.

If you replace the image later, keep it at **1200x630** and **under 300 KB** — WhatsApp silently drops previews for larger files. Either overwrite `msmalabanan-og.jpg`, or use a new filename and update the `og:image`, `og:image:secure_url` and `twitter:image` tags in `index.html`.

---

## Troubleshooting

| Problem | What to check |
|---|---|
| Vercel build fails | Open the build log. `npm run build` must pass locally first. |
| Domain stays “Invalid” | DNS records are wrong or still propagating. Recheck A / CNAME. |
| `www` works but apex does not | Missing A record on `@`. |
| Old site still showing | Hard refresh, or wait for the new Vercel deployment to finish. |
| `sitemap.xml` 404 | Confirm the file is in `public/sitemap.xml` and you deployed after that commit. |
| GitHub push rejected | You are not signed in, or `main` already exists with different history. |
| No image when sending the link | The domain must be live. Then run **Scrape Again** in the Facebook debugger (see section 8). |
| Link preview shows the old image | Platform cache. Re-scrape with the tools in section 8. |

This project already includes `vercel.json` (headers, trailing slash). You do not need to add a Vercel config in the dashboard beyond the Vite / `dist` settings above.
