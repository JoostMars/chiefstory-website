---
# ✏️ COPY BEWERKEN — YAML TIPS
#
# TEKST AANPASSEN:
#   Vervang de tekst tussen de aanhalingstekens. Laat de aanhalingstekens staan.
#   ✅ goed:  heading: "Nieuwe tekst hier"
#   ❌ fout:  heading: "Nieuwe tekst hier    ← sluitend " vergeten
#
# AANHALINGSTEKENS IN TEKST:
#   Gebruik een apostrof (') in plaats van aanhalingstekens ("):
#   ✅ goed:  body: "Dat is 't probleem"
#   ❌ fout:  body: "Dat is "het" probleem"   ← breekt de YAML
#
# LIJSTJES (regels met een streepje):
#   Elke regel begint met twee spaties en een streepje:
#   ✅ goed:
#     - "Eerste item"
#     - "Tweede item"
#   ❌ fout:
#     - "Eerste item"    ← streepje of spaties vergeten op volgende regel
#     "Tweede item"
#
# REGELAFBREKING IN TEKST:
#   Gebruik \n voor een harde regelafbreking:
#   ✅ goed:  h1: "Regel één\nRegel twee"
#
# INSPRINGING:
#   Gebruik altijd spaties, nooit tabs. De inspringing moet kloppen.

# De titel verschijnt in het browsertabblad en als kop in Google.
# De omschrijving is de grijze tekst eronder in de zoekresultaten.
meta:
  title: "Van ruis naar signaal"
  description: "Chief Story helpt groeiende organisaties hun verhaal scherp te krijgen en werkend te maken in merk, marketing, sales en AI."

hero:
  image: "/joost.jpg"
  # &nbsp; is een spatie waarop de regel NIET mag afbreken. Zo blijft
  # "naar signaal" bij elkaar en breekt de kop op de juiste plek.
  h1: "Van ruis naar&nbsp;signaal"
  lead: "Eén scherp narratief, getest bij je publiek. En een systeem waarmee iedereen hetzelfde verhaal vertelt, ook zonder mij. Groeien? Get your story straight."
  cta_primary: "Plan een call"
  cta_secondary: "Bekijk het aanbod"

problem:
  heading: "Vóór Chief Story"
  quotes:
    # Boog: verandering → interne verwarring → buitenwereld
    - "We zijn niet meer het bedrijf van drie jaar geleden."
    - "Sales, marketing en directie vertellen elk een ander verhaal."
    - "Onze mensen weten niet waar ons bedrijf voor staat."
    - "We klinken precies hetzelfde als de concurrentie."
    - "Na de pitch knikte iedereen, maar niemand kon het navertellen."

# De Route: drie stappen die op elkaar volgen. Elke stap heeft een kop
# ('title', in het zwarte blok boven de kaart), een inleiding
# ('description') en een blok met een klein kopje ('label') en tekst ('body').
# 'price_note' is de kleine regel onder de prijs; die mag je weglaten.
offer:
  heading: "Wat kan ik voor je doen?"
  cards:
    - title: "Vinden"
      description: "Je verhaal vinden begint met je positionering; de plek die jouw merk inneemt in het hoofd van de klant, ten opzichte van je concurrenten. Wat maakt jou de enige logische keuze voor hen? We beginnen niet met schrijven, maar met vragen."
      block:
        label: "MLS + Chief Story Test"
        body: "Dan schrijven we een Minimum Lovable Story (MLS). Of dat verhaal klopt, testen we met de Chief Story Test, een mix van synthetische gebruikers en echte lezers. Voordat er een woord naar buiten gaat, weten we wat werkt."
      price: "Vanaf €3.500"
    - title: "Vangen"
      description: "Uit je verhaal volgen je kernboodschappen, signature zinnen en tone-of-voice. Die leggen we vast, net als je contentstrategie. Herkenbare contentpijlers, formats en thema’s zorgen voor zichtbaarheid en vindbaarheid."
      block:
        label: "AI + Story System"
        body: "We bouwen een AI-harnas dat je merk steeds beter leert kennen naarmate je er langer mee werkt. Ik help jullie met de inrichting, de mappenstructuur en de skills voor het Story System. Dat doen we samen, zodat het past bij jullie werkwijze en je er zelf mee verder kunt."
      price: "Vanaf €7.500"
    - title: "Vertellen"
      description: "Als jullie het willen, help ik je ook je verhalen te vertellen. Dat is optioneel en kunnen we precies invullen hoe jullie willen. Met een eigen schrijver of iemand uit mijn netwerk, of met mij, in een samenwerking van 6 tot 12 maanden. En het blijft natuurlijk niet bij schrijven."
      block:
        label: "Creative + Direction"
        body: "Vertellen kan ook met video, animatie, een website of een commercial. Afhankelijk van de boodschap, de doelgroep en je doelen help ik je graag met creatieve strategie en ideeën die je verhaal nog verder versterken."
      price: "In overleg"

why:
  label: "Over Joost Marsman"
  image: "/joost2.jpg"
  linkedin: "https://www.linkedin.com/in/joost-marsman-4684b1"
  heading: "Een goed verhaal emotioneert, inspireert en activeert"
  body:
    - "Als copywriter, merkstrateeg en creatief ondernemer help ik al drie decennia merken hun verhaal beter te vertellen, van startups tot multinationals."
    - "In welke fase je ook zit; een bedrijf zonder verhaal is zielloos en een verhaal zonder systeem is zinloos. Daarom help ik je niet alleen het signaal te vinden, maar ook het te versterken."
    - "Als co-founder van Radicle AI heb ik hands-on ervaring met AI en agentic workflows voor consistente contentcreatie in lijn met je merkverhaal. Maar AI is pas waardevol als het verhaal klopt. En je verhaal klopt pas als het echt onderscheidend is. Ik gebruik AI daarom voor techniek, inspiratie en eindredactie; nooit om te schrijven, te denken of te kiezen."

# Reviews staan op twee plekken: de homepage toont per klant alleen de
# 'highlight' (één zin), de pagina /reviews toont de volledige tekst ('full').
# Een klant zonder 'highlight' staat alleen op /reviews, niet op de homepage.
# Een *woord* tussen sterretjes wordt cursief.
reviews:
  heading: "Na Chief Story"
  link_label: "Lees de volledige reviews"
  page_heading: "Wat opdrachtgevers zeggen"
  page_lead: "Hoe het is om met mij te werken? Dat laat ik graag aan de ervaringsdeskundigen over…"
  # Alleen voor Google en het browsertabblad; staat niet op de pagina zelf.
  page_description: "Vier opdrachtgevers over werken met Chief Story: positionering, merkverhaal en een systeem dat het verhaal elke dag vertelt."
  items:
    - name: "Johan Geleijns"
      company: "SAOZ advies in onroerende zaken"
      highlight: "We weten nog steeds met nieuwe invalshoeken ons verhaal te vertellen."
      full:
        - "De samenwerking begon met het schrijven van onze blogposts en nieuwsbrieven, en groeide uit tot een totaalpakket, van contentmarketing tot strategie en soms zelfs bijna sales. Joost kan als geen ander de kernboodschappen uit gesprekken halen, actief meepraten over de strategie en meedenken over de positionering van je bedrijf. We zijn samen zo’n tien jaar geleden begonnen met het claimen van autoriteit. Dat is ruimschoots gelukt. En we weten nog steeds met nieuwe invalshoeken ons verhaal te vertellen. Joost denkt inmiddels ook mee over AI oplossingen voor onze werkzaamheden."
    - name: "Derk Jan Wentink"
      company: "Barentsz Ontdekkingshuizen"
      full:
        - "We hebben Joost ingeschakeld toen Barentsz net begon, voor de vragen die ertoe doen: wat is Barentsz, welk probleem lossen we op en welk verhaal vertellen we daaromheen? Kortom: de positionering. Gaandeweg werd zijn rol vooral die van klankbord. Periodiek herijken van waar we mee bezig zijn, wie onze doelgroep is, hoe we herkenbaar blijven als de markt verandert."
        - "Iemand van buiten zit niet in de tunnel waarin je als ondernemer zit. Zo werk je áán je bedrijf in plaats van erin. Dat hoor je in elke *business talk*, maar er tijd voor vrijmaken is een tweede. Merkdenken is in de bouwwereld ongebruikelijk. Daarmee onderscheiden we ons, en de markt herkent dat. Onze deelname aan Provada was bijvoorbeeld een stap die we zelf niet zo snel hadden gezet. Joost wist dat we daar moesten staan. En het bleek een goede zet."
    - name: "Richard Verbeek"
      company: "KRAGD Notarissen"
      highlight: "Een concurrent zou ik nooit naar hem doorverwijzen. Dat zegt denk ik alles."
      full:
        - "We vroegen Joost om de teksten op onze website te herschrijven. Het werd een nieuwe website, een opgefrist logo én een nieuwe tekst. Maar het belangrijkste gebeurde daarnaast: we zijn zelfbewuster naar KRAGD gaan kijken en dat veel meer gaan uitdragen."
        - "Joost probeert eerst je bedrijf en wat jou anders maakt heel goed te begrijpen, stelt nieuwsgierige vragen en komt dan met heldere ideeën om de ziel van je bedrijf in woorden en beelden te gieten. Dat hadden we van tevoren niet verwacht. We opereren nu met meer zelfvertrouwen en maken duidelijkere keuzes in wat we wel en niet doen. We zijn trotser op wat we doen, en dat trekt nieuwe klanten én collega's aan. Een concurrent zou ik nooit naar hem doorverwijzen. Dat zegt denk ik alles."
    - name: "Paul Jansen"
      company: "EBC Nederland / Ecclesia"
      highlight: "Wil je van idee naar heldere communicatiestrategie, dan bel je Joost."
      full:
        - "Als vakspecialist word je blind voor de simpele vraag: hoe vertaal je wat je doet naar communicatie die mensen begrijpen? Wij lieten een buitenstaander naar onze wereld kijken. Joost stelde de juiste vragen, maar ook onverwachte vragen die een ander licht op de zaken wierpen. Vervolgens vertaalde hij dat in een heldere boodschap die een groot publiek begreep en aansprak."
        - "Wat hij voor ons deed: moeilijke financiële zaken omzetten in communicatie die uitnodigt tot het gesprek. Wij zagen daardoor scherper dat een heldere boodschap bepalend is voor je aantrekkelijkheid en acquisitie. Wil je van idee naar heldere communicatiestrategie, dan bel je Joost. Bel je niet, dan mis je in elk geval de kans om eens anders naar je business te kijken."

contact:
  heading: "Waar zit de ruis in jouw verhaal?"
  lead: "Geen blablaverhalen. Wel een eerlijk gesprek over waar je staat, wat je nodig hebt en of ik je daarbij kan helpen. Zero strings attached."

  # Het adres dat op de site staat: in de contactsectie, in de footer en in
  # de foutmelding van het formulier.
  email: "joostmarsman@me.com"

  # De sleutel van web3forms bepaalt wáár ingevulde formulieren aankomen.
  # Die is bij web3forms gekoppeld aan één e-mailadres — verander je het
  # bezorgadres, dan hoort hier een nieuwe sleutel. Haal hem op via
  # web3forms.com. Geen geheim: hij staat gewoon in de HTML van de pagina.
  web3forms_key: "1c03268a-f812-4011-b075-98b12b9355d7"
---
