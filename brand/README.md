# Chief Story

**Versie 1.0, definitief: 9 november 2026.**

Deze map is de bron van het merk. Wijzig hier, niet elders: `tokens.json` voedt bij elke build de CSS van de site (`scripts/tokens.mjs` → `src/styles/tokens.css`). Het Design System op claude.ai is een weergave van deze map.

| Map | Inhoud |
|---|---|
| `tokens.json` | Kleuren, typografie, afstanden, afrondingen, diagonaal |
| `logo/` | Teken, lockups (woordmerk als contouren), favicon, avatar |
| `fonts/` | DM Serif Display (rechtop en cursief), DM Sans, Inter Tight |
| `components/` | Regels per bouwsteen |
| `../src/assets/` | De portretten (originelen) |

Chief Story gedraagt zich als een citaat: het geeft het woord aan de ander en markeert wat telt. Het verhaal van de klant blijft van de klant. Het teken is daarom geen handtekening van Joost, maar een opening voor iemand anders.

Dit systeem is gebouwd uit de website (chiefstory.nl, repo `JoostMars/chiefstory-website`) en de Phrontis-run van november 2026: teken v05, lockup H1, woordmerk in Inter Tight.

## Visueel DNA

| Eigenschap | Rang | Wat het doet |
|---|---|---|
| Het woord geven | Kern | Elke uiting opent met een echte zin van een ander: klant, publiek, lezer. |
| Ruis → signaal | Kern | Twee toestanden naast elkaar: veel stemmen, dan één. Hier zit het testen. |
| Rood in rust | Kern | `wigrood` is alleen het teken en het bovenkopje. |
| De diagonaal | Kern | Eén lijn in de hoek van de wig deelt het vlak in `papier` en `vlak`. |
| Zwart-wit, in een opening | Ondersteunend | Analoge portretten met filmrand, mensen in een deur of drempel. |

## Signature move: de hangende wig

Een citaat staat in DM Serif Display Italic (`citaat`). De tekst lijnt uit op de kolom; het teken hangt erbuiten in de marge, bovenaan gelijk met de eerste regel. Daaronder de naam in DM Sans (`naam`). Zie component **HangendCitaat**.

## Regels

1. **Open met andermans woorden.** Klantquotes, uitspraken uit de Chief Story Test, zinnen uit interviews. Nooit verzonnen quotes, nooit een eigen slogan tussen aanhalingstekens.
2. **De wig hangt, de tekst staat.** Maximaal één wigpaar per vlak. Het teken nooit als patroon; de hoek van de wig mag wel, als diagonaal.
3. **Eerst de ruis, dan het signaal.** Ruis: klein, `ruis`-grijs, meerstemmig, DM Sans. Signaal: groot, `inkt`, één zin, DM Serif Display Italic. Zie **RuisSignaal**.
4. **Rood alleen in rust.** `wigrood` alleen voor het teken en het label. Geen rode lijnen onder koppen, geen rode knoppen, vlakken, hover of lopende tekst. Knoppen keren bij hover om: donker wordt licht met een haarlijn.
5. **Eén ding mag over de rand.** De wig in de marge, het zwarte kopblok over een kaart, of een foto die uit de kolom loopt. Nooit twee in één compositie.
6. **De diagonaal deelt het vlak.** Hoek `diagonaal-hoek` (70,5°), van rand tot rand, `papier` links, `vlak` rechts. Naast de diagonaal geen andere grijze vlakken: scheiding maak je met `haarlijn` en wit.
7. **Secties op de site wisselen van vlak, zonder lijnen ertussen.** Geen haarlijnen tussen secties: de kleurwissel is de scheiding. De Vóór-sectie staat op `vlak` (#F0EFEB), de over-sectie op `vlak-donker` (#44433F) met alle tekst in `papier`. Op `vlak-donker` geen rood.

## Logo

Het teken: twee schuine wiggen met een platte top, zacht afgeronde hoeken en een licht afgeknotte punt. Een aanhalingsteken zonder bolletje. Het woordmerk: "Chief Story" in Inter Tight 600, letterspatiëring −0,02em. Het contrast met de rest van de typografie is bewust: het woordmerk staat apart.

**Chief Story staat altijd op één regel**, in het woordmerk, de lockups, titels en de cover van dit systeem. Nooit "Chief" en "Story" onder elkaar. Past het niet, dan wordt de naam kleiner, niet gebroken.

**Het woordmerk staat nooit los van het teken.** In merkuitingen (navigatie, documenten, slides, drukwerk, deze cover) staat de naam altijd als H1 of S1. In lopende tekst is Chief Story gewoon een woord in de letter van die tekst.

- **H1 — standaard.** Teken vóór de naam, even hoog als de kapitalen, bovenaan gelijk met de C. Afstand tussen teken en naam: 0,22 × de lettergrootte. Overal waar niets anders is afgesproken.
- **S1 — gestapeld.** Teken gecentreerd boven de naam, afstand een halve tekenhoogte. Voor vierkante en ronde formaten: LinkedIn-profiel, stickers, buttons, stempels, titelslide.
- **Teken los.** Alleen op de site (de hangende wig, als grafisch element), als avatar en als favicon. Nooit als afzender op drukwerk of documenten.
- **Negatief.** Rood teken, naam in `papier`, op `inkt`. Nooit een wit teken.
- **Op een rood vlak** (alleen de sticker): teken in `inkt`. De enige plek waar rood een vlak mag zijn.
- **Vrije ruimte:** één tekenhoogte rondom.
- **Niet:** wit teken op donker, teken achter de naam, kleuren omgedraaid (rode naam, zwart teken), het hele teken als patroon.

Bestanden staan in `brand/logo/`: H1, H1 negatief, H1 zwart, S1 en S1 negatief, met het woordmerk omgezet naar contouren, plus het teken los, de favicon en de avatar. Op de site mag de lockup als live tekst (component **Lockup**).

## Kleur

Bijna-wit papier, antraciet inkt, grijze haarlijnen en één rood. Rood draagt herkenning, niet sfeer: zonder rood wordt het teken `inkt` en blijft het systeem werken.

| Token | Licht | Gebruik |
|---|---|---|
| `papier` | #FAF9F6 | Ondergrond |
| `vlak` | #F0EFEB | Het tweede vlak achter de diagonaal; op de site de Vóór-sectie |
| `vlak-donker` | #44433F | Over-sectie op de site, tekst in `papier`, geen rood |
| `wit` | #FFFFFF | Kaarten, met haarlijn |
| `haarlijn` | #D5D3CD | Scheiding |
| `inkt` | #1E1E1C | Tekst, primaire knop, kopblok |
| `inkt-2` | #56544F | Lopende tekst, namen |
| `ruis` | #6B6963 | Ruis-stemmen |
| `wigrood` | #C8401E | Teken, lijn, label |

Contrast: `ruis` is donkerder gezet dan de #8C8A84 en #A3A19B uit de eerste templates, omdat die op papier onder 4,5:1 zakken. Op 24px en groter (posts) mag het lichtere grijs blijven; op de site niet.

## Typografie

Gecontroleerd op de live site (9 november 2026):

| Letter | Waar | Token |
|---|---|---|
| **DM Serif Display 400, rechtop** — jouw stem | H1, sectiekoppen, primaire knop, Plan een call in de navigatie, prijzen, namen bij reviews | `display`, `kop`, `knop` |
| **DM Serif Display 400, cursief** — de stem van de ander | Citaten van één zin: het signaal, de Vóór-quotes, review-highlights | `citaat`, `citaat-klein` |
| **DM Sans 400–600** — de uitleg | Lopende tekst, lead, labels, volledige reviews, ghost-knop en tekstlinks zonder knopvorm (500) | `lead`, `tekst`, `label`, `knop-ghost` |
| **Inter Tight 600** | Alleen het woordmerk | `woordmerk` |

- DM Serif Display heeft maar één snede: vraag nooit om vet (`font-synthesis-weight: none` op de site).
- **Twee families plus het woordmerk.** Eén serif voor de stemmen (rechtop: Chief Story, cursief: de ander), één sans voor de uitleg, en Inter Tight alleen voor het woordmerk.
- **Cursief is voor één zin.** Langer dan één zin, zoals een volledige review, staat in DM Sans `tekst`, zonder wig.
- **Fraunces vervalt helemaal**, ook het oude aanhalingsteken uit Fraunces Italic 700. Op de site kan de Fraunces-regel uit de Google Fonts-link.
- De lettertypen staan als bestanden in dit systeem (fonts/), zodat ze ook hier goed weergeven.
- Op telefoons (tot 640px) is de basismaat 19px (`html { font-size: 118.75% }`); alles in rem schaalt mee.

## De diagonaal

Niet het teken herhalen, maar zijn hoek. Eén lijn op 70,5° deelt het vlak in `papier` en `vlak`.

- **Liggende templates** (slides, banners, hero): de lijn snijdt de onderrand op `diagonaal-liggend` (60%) van de breedte.
- **Staande templates** (LinkedIn-posts, A4): de lijn komt de rechterrand binnen op `diagonaal-staand` (10%) van de hoogte; het grijze vlak is een driehoek rechtsonder.
- **Website:** de hoek ligt vast, de positie niet. De lijn mag over meerdere secties doorlopen.
- Foto's mogen over de lijn heen liggen.

Zie component **Diagonaal**.

## Beeld

Zwart-witportretten, analoog middenformaat, met de zwarte filmrand zichtbaar. Mensen staan in een opening: een deur, een drempel. Geen stockfoto's, geen kleurfoto's naast het rood, geen beeld dat de metafoor naspeelt. Foto's van Joost alleen waar Joost zelf spreekt (over-sectie, LinkedIn-profiel); in uitingen met een klantcitaat spreekt de klant, zonder portret van Joost. Fotocredit staat in de footer van de site.

## Iconen

Het systeem gebruikt bijna geen iconen. Waar nodig (LinkedIn in de over-sectie): één kleur, `currentColor`, 22px. Geen emoji, geen iconensets.

## Schrijven

Joost schrijft alle copy zelf. Kort, concreet, zonder blabla: "Geen blablaverhalen. Wel een eerlijk gesprek." Koppen zijn statements of vragen, geen slogans. Citaten zijn letterlijk; inkorten mag alleen met toestemming van de spreker.

## Templates

De werkversies van de toepassingen staan op het Phrontis-canvas *Chief Story — paspunt-S, vormfase*: LinkedIn-citaat (T1), LinkedIn Vóór/Na (T2), website-hero (T3), slide De Route (T4), Chief Story Test-rapport (T5), visitekaartje en avatar (T6), plus de borden Lockup en Logogebruik.
