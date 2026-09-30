# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Wat dit is

**Chief Story** — de website van Joost Marsmans adviespraktijk. Eén statische pagina, gebouwd met Astro. Geen database, geen CMS, geen server.

De site was tot 8 augustus 2026 zes pagina's en 3.215 woorden groot. Nu is het één pagina van ruim 500 woorden. De oude content staat nog in de geschiedenis: `git show f2fbe62:src/content/pages/methode.md` (en `aanbod.md`, `over.md`, `contact.md`). Dat `methode.md` bevat het AI-hoofdstuk waar Joost aan hechtte; dat is inmiddels verwerkt in de `why`-sectie. De sectie met drie stappen (Positionering, Merkverhaal, Systeem) is op 30 september 2026 geschrapt toen de reviews erbij kwamen: `git show 43e8894:src/content/pages/home.md` voor de copy.

## Stack

- **Astro 6** — statische site generator, geen adapters
- **TypeScript** — strict mode
- **Node** — minimaal 22.12, vastgelegd in `.nvmrc`
- **GitHub** — `JoostMars/chiefstory-website`, publiek, alleen `main`
- **Cloudflare Pages** — bouwt en publiceert automatisch

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
  pages/index.astro          # de homepage; markup, CSS, het quote-slider-script
  pages/404.astro            # "Slecht verhaal." — eigen copy, niet uit home.md
  pages/reviews.astro        # volledige reviews; leest `reviews` uit home.md
  components/Nav.astro       # sticky header: logo + "Plan een call" naar #contact
  components/Contact.astro   # contactblok + formulier + script; op / en /reviews
  components/Footer.astro    # merknaam, e-mailadres (prop), fotocredit
  layouts/BaseLayout.astro   # html-huls, kleurvariabelen, fonts, meta
  content/pages/home.md      # ALLE copy
  content.config.ts          # schema dat home.md valideert bij elke build
  assets/joost.jpg           # portretten; hier en NIET in public/,
  assets/joost2.jpg          # anders slaat Astro's beeldverwerking over
public/
  _redirects                 # /aanbod en /contact als korte deel-adressen
  favicon.*
```

## Content bewerken

Alle tekst staat in de **YAML-frontmatter** van `src/content/pages/home.md` — niet in de markdown-body, die is leeg. Bovenaan staat een commentaarblok met bewerkinstructies voor Joost. **Dat blok moet blijven staan.**

De secties, in de volgorde waarin ze op de pagina staan:

| Sleutel | Sectie |
|---|---|
| `meta` | Paginatitel en meta-omschrijving (browsertabblad, Google) |
| `hero` | Kop, lead, twee knoppen (`#contact` en `#aanbod`) |
| `problem` | Probleemstelling + roterende quote-slider (5 quotes, in een bewuste boog) |
| `reviews` | Drie opdrachtgevers: `highlight` (één zin) op de homepage, `full` op `/reviews` |
| `why` | Over Joost, inclusief het AI-verhaal, foto links |
| `offer` | Drie routes met deliverables en vanaf-prijzen |
| `contact` | Tekst, e-mailadres, web3forms-sleutel, formulier (`Contact.astro`, ook op `/reviews`) |

**Let op: de volgorde in de markup is `reviews`, `why`, `offer`**, terwijl ze in het bestand als `offer`, `why`, `reviews` staan.

`/reviews` is de enige tweede pagina met eigen verhaal. De copy staat gewoon in `home.md` onder `reviews`, zodat er één bestand met copy blijft. In `full` wordt een `*woord*` tussen sterretjes cursief; meer markdown is er bewust niet. Onderaan staat hetzelfde contactblok als op de homepage (`Contact.astro`). De knop "Plan een call" in `Nav.astro` scrolt daarom op beide pagina's naar `#contact`; alleen op de 404 linkt hij naar `/#contact`.

Het schema in `content.config.ts` controleert elke sleutel. Typ je er één verkeerd, dan zegt de build `offer: Required` met `home.md` als locatie — niet een onbegrijpelijke fout in `index.astro`.

Twee dingen die stil misgaan als je ze niet weet:

- **`\n` in een kop wordt maar één keer omgezet** naar een regelafbreking. Een kop van drie regels werkt dus niet.
- **`&nbsp;`** in de hero-kop houdt "naar signaal" bij elkaar op smalle schermen. Weghalen betekent een andere afbreking op mobiel.

## Beeld

Foto's staan in `src/assets/`, niet in `public/`. Daar worden ze door Astro geschaald en naar WebP omgezet: 50 kB op een gewoon scherm in plaats van 6,9 MB. In `home.md` staat alleen de bestandsnaam (`hero.image`, `why.image`); een glob in `index.astro` zoekt het bestand erbij en geeft een duidelijke fout als de naam niet klopt.

Nieuwe foto? In `src/assets/` zetten, dan de naam in `home.md` aanpassen.

## Typografie — één regel die je moet kennen

**DM Serif Display heeft maar één snede (400).** Vraag nergens om `font-weight: 600` of `700` op een kop, het logo, een knop of een prijs: browsers verzinnen het vet dan zelf, en Safari tekent daarbij elke letter dubbel. Dat oogt als een schaduw achter de tekst.

`font-synthesis-weight: none` in `BaseLayout.astro` blokkeert dat nu. DM Sans en Fraunces hebben wél echte gewichten; vet in de lopende tekst mag gewoon.

**Op telefoons (tot 640px) is de basismaat 19px** in plaats van 16px: `html { font-size: 118.75% }` in `BaseLayout.astro`. Alle maten staan in rem, dus koppen, tekst, knoppen, labels en de zijmarge schalen daarmee in één keer mee. Wil Joost mobiel groter of kleiner, dan is dat de enige knop; niet per element gaan sleutelen.

## Kleur

Bijna wit (`rgb(250, 249, 246)`), antraciet (`#1E1E1C`), grijze haarlijnen. Rood (`#C8401E`) is **alleen accent in rust**: het bovenkopje boven Joosts naam, de lijntjes onder twee sectiekoppen, en het aanhalingsteken.

Knoppen worden bij hover **niet rood** maar keren om — donker wordt licht met een haarlijn eromheen. Rood bij hover leest als waarschuwing op precies de plek waar je iemand wilt geruststellen.

## Formulier

Het contactformulier gaat via **web3forms**, niet via Netlify Forms. Er is geen mailinglijst.

De sleutel staat in `home.md` onder `contact.web3forms_key`, direct naast `contact.email`. Dat is bewust: web3forms koppelt elke sleutel aan één bezorgadres, dus die twee horen samen te veranderen.

Stand per 10 augustus 2026:

| | |
|---|---|
| Zichtbaar op de site | `joostmarsman@me.com` |
| Aanvragen komen aan op | `joost@deblits.nl` |

`joost@chiefstory.nl` wordt voorlopig **niet** geactiveerd; dat adres staat nergens meer op de site.

## Deployment — werkt

Push naar `main` → Cloudflare Pages bouwt → binnen ongeveer twee minuten live. Geen handmatige stap.

| | |
|---|---|
| Live | `https://www.chiefstory.nl` |
| Zonder www | `chiefstory.nl` stuurt door naar www (bij NextBuzz geregeld) |
| Bouwadres | `chiefstory-website.pages.dev` |
| Bouwinstelling | preset Astro · `npm run build` · output `dist` |

**DNS ligt bij NextBuzz, niet bij Cloudflare.** Alleen het CNAME voor `www` wijst naar Cloudflare. De MX-, SPF-, DKIM- en DMARC-records staan daar en dragen Joosts mail: **niet aankomen**. Wil je ooit `chiefstory.nl` zonder www rechtstreeks op Cloudflare, dan moet de hele zone verhuizen — en dan moeten die vier records handmatig mee.

Lovable hostte de vorige site en wordt opgezegd. Netlify is verwijderd.

## Werkwijze

- **Commit direct naar `main`**, geen feature branches
- **Push meteen mee.** Blijft een commit lokaal hangen terwijl Joost op GitHub bewerkt, dan lopen de takken uiteen — dat is op 7 augustus 2026 gebeurd
- Joost bewerkt lokaal in VS Code, niet via de GitHub-webinterface
- Bij vormgevingskeuzes: bouw de varianten, maak er schermafdrukken van en laat ze zien. Niet over hexcodes praten
- Controleer wat je beweert in de browser, niet in de CSS. Twee fouten zijn zo ontstaan: een hover-regel die stil niet aansloeg, en het namaakvet dat alleen in Safari zichtbaar was
