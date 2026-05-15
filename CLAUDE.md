# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

**Chief Story** — een statische website gebouwd met Astro. Geen database, geen CMS, geen server nodig. Alles wordt gebouwd naar statische HTML en gedeployed via Cloudflare Pages.

## Stack

- **Astro** — statische site generator
- **TypeScript** — strict mode
- **GitHub** — versiebeheer
- **Cloudflare Pages** — automatische deployment bij elke push naar `main`

## Lokaal draaien

```bash
npm run dev        # dev server op http://localhost:4321
npm run build      # productie build naar dist/
npm run preview    # preview de productie build
```

## Projectstructuur

```
src/
  pages/       # elke .astro file = een URL
  components/  # herbruikbare componenten
  layouts/     # paginalay-outs
  content/     # Markdown blogposts/stories
public/        # statische bestanden (afbeeldingen, fonts)
```

## Content / Stories

Stories en blogposts zijn Markdown-bestanden in `src/content/`. Claude Code schrijft en beheert deze bestanden.

## Formulieren

- **Mailinglijst**: MailerLite API
- **Contact**: Netlify Forms (geen backend nodig)

## Deployment

Push naar `main` → Cloudflare Pages pikt het automatisch op → site is live binnen ~30 seconden. Commit en push altijd direct naar `main`, geen feature branches.
