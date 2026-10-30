# Rodrigo Benitez — Portfolio

Bilingual (English / Spanish) portfolio built with React, TypeScript and Vite. Icons come from `react-icons` (Simple Icons, Lucide, Font Awesome); fonts are self-hosted through Fontsource.

## Develop

```bash
npm install
npm run dev
```

## Edit the content

All text for both languages lives in `src/content.ts`. Update it there and both versions stay in sync.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions** (one time only).
The build uses a relative base path, so it works on `username.github.io`, a project page or a custom domain.
