# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Wat dit is

**Chief Story** — de website van Joost Marsmans adviespraktijk. Eén statische pagina, gebouwd met Astro. Geen database, geen CMS, geen server.

De site was tot 8 augustus 2026 zes pagina's groot. Die zijn teruggebracht tot één pagina. De oude content staat nog in de geschiedenis: `git show f2fbe62:src/content/pages/methode.md` (en `aanbod.md`, `over.md`, `contact.md`).

## Stack

- **Astro 6** — statische site generator
- **TypeScript** — strict mode
- **Node** — minimaal 22.12
- **GitHub** — `JoostMars/chiefstory-website`, publiek

## Lokaal draaien

```bash
npm run dev        # dev server op http://localhost:4321
npm run build      # productie build naar dist/
npm run preview    # preview de productie build
```

Joost start de dev server zelf in de terminal van VS Code. Achtergrondprocessen vanuit een Claude-sessie blijven niet betrouwbaar draaien.

## Projectstructuur

```
src/
  pages/index.astro          # de enige pagina; markup, alle CSS, twee scripts
  components/Nav.astro       # sticky header: logo + "Plan een call" naar #contact
  components/Footer.astro    # merknaam, tagline, e-mailadres
  layouts/BaseLayout.astro   # html-huls, fonts, meta
  content/pages/home.md      # ALLE copy
  content.config.ts          # content collection, laadt pages/*.md
public/                      # foto's, favicon
```

## Content bewerken

Alle tekst staat in de **YAML-frontmatter** van `src/content/pages/home.md` — niet in de markdown-body, die is leeg. Bovenaan het bestand staat een commentaarblok met bewerkinstructies voor Joost. **Dat blok moet blijven staan.**

De secties, in de volgorde waarin ze op de pagina staan:

| Sleutel | Sectie |
|---|---|
| `hero` | Kop, lead, twee knoppen (`#contact` en `#aanbod`) |
| `problem` | Probleemstelling + roterende quote-slider |
| `method` | Drie stappen: Positioning, Storytelling, Activation |
| `why` | Over Joost, inclusief het AI-verhaal |
| `offer` | Drie routes met deliverables en vanaf-prijzen |
| `contact` | Tekst + formulier, id `#contact` |

Let op: `why` staat in de markup vóór `offer`, ook al staat het in het bestand erna.

Eén ontbrekend aanhalingsteken breekt de build. Bij twijfel `npm run build` draaien.

## Formulier

Het contactformulier gaat via **web3forms**, niet via Netlify Forms. De access key staat hardcoded in `src/pages/index.astro`, samen met een fetch-handler onderaan het bestand. Er is **geen** mailinglijst-integratie.

Het e-mailadres `joost@chiefstory.nl` is per 8 augustus 2026 nog niet actief.

## Deployment — nog niet ingericht

**De site staat niet live vanuit deze repo.** chiefstory.nl draait nog een oude, met Lovable gebouwde site via Cloudflare. Pushes naar `main` komen daar niet terecht.

Wat er aan resten in de repo staat:

- `netlify.toml` en `.netlify/state.json` — een Netlify-site die pushes niet meer oppikt
- `origin/cloudflare/workers-autoconfig` — een branch met Cloudflare-config, nooit gemerged

De deploy-route moet nog gekozen worden. Cloudflare Pages ligt het meest voor de hand, want het domein staat al bij Cloudflare. Wordt dat de keuze, ruim dan de Netlify-resten op.

Let op bij het inrichten: `/methode`, `/cases`, `/aanbod`, `/over` en `/contact` bestaan niet meer en gaan 404's opleveren. Redirects naar `/` zijn goedkope verzekering.

## Werkwijze

- **Commit direct naar `main`**, geen feature branches
- **Push meteen mee.** Blijft een commit lokaal hangen terwijl Joost op GitHub bewerkt, dan lopen de takken uiteen — dat is op 7 augustus 2026 gebeurd
- Joost bewerkt lokaal in VS Code, niet via de GitHub-webinterface
