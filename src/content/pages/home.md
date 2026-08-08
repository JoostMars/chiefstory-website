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

hero:
  eyebrow: "Narrative positioning · Brand storytelling · Story systems"
  h1: "Van ruis naar signaal"
  lead: "Van een versnipperd verhaal naar één scherp narratief. En een systeem waarmee je team het elke dag vertelt. Groeien? Get your story straight."
  cta_primary: "Plan een call"
  cta_secondary: "Bekijk het aanbod"

problem:
  heading: "Vind je verhaal.\nVertel het goed."
  body:
    - "Iedereen zegt iets anders over je merk. Je content mist een rode draad. Je vertelt hetzelfde verhaal als de concurrentie. En AI maakt het alleen maar erger."
  signal_line: "Chief Story helpt je het signaal in de ruis te vinden en te versterken. Met een scherpe positionering, een merkverhaal dat klopt, en een systeem waarmee je team het elke dag verspreidt."
  signal_emphasis: "Door mensen verteld, door AI versterkt."
  quotes:
    - "Sales, marketing en directie vertellen elk een ander verhaal."
    - "Waarom klinken we hetzelfde als iedereen?"
    - "Onze mensen weten niet waar ons bedrijf voor staat."

method:
  label: "De methode"
  heading: "In drie stappen van ruis naar signaal."
  intro: "Een betere tone of voice helpt niet als je positionering onduidelijk is. Een nieuwe website zonder helder verhaal is weggegooid geld. Het fundament moet eerst kloppen."
  steps:
    - number: "01"
      title: "Narrative Positioning"
      tagline: "Claim your position"
      body: "Welk probleem los je op, voor wie, en welke plek is nog vrij in het hoofd van je publiek?"
    - number: "02"
      title: "Brand Storytelling"
      tagline: "Craft your story"
      body: "Waarom doe je wat je doet? Taal die werkt, van pitch tot post tot salesgesprek."
    - number: "03"
      title: "Narrative Activation"
      tagline: "Build your system"
      body: "Formats, AI-workflows en story sessions. Zodat het verhaal gaat leven in plaats van in een la belandt."

offer:
  label: "Dit kan ik voor je doen"

  cards:
    - title: "Story Sprint"
      duration: "1 maand"
      description: "Positionering, merkverhaal en kernboodschappen in één document. Zodat iedereen hetzelfde vertelt."
      deliverables:
        - "Positionering"
        - "Brand story"
        - "Messaging pillars"
        - "Kernzinnen voor deck, pitch en site"
      price: "Vanaf €7.500"
    - title: "Story System"
      duration: "3 maanden"
      description: "Je verhaal structureel activeren in content, marketing, sales en AI."
      deliverables:
        - "Activation roadmap"
        - "Content pillars en formats"
        - "AI-workflows en promptsets"
        - "Maandelijkse story sessions"
      price: "Vanaf €17.500"
    - title: "The Full Story"
      duration: "4 maanden"
      description: "Eerst het verhaal, dan het systeem. Beide trajecten als één route."
      deliverables:
        - "Alles van de Story Sprint"
        - "Alles van het Story System"
        - "Naadloze overgang"
        - "Fundament voor structurele groei"
      price: "Vanaf €24.500"

why:
  label: "Over Joost Marsman"
  heading: "Een goed verhaal emotioneert, inspireert en activeert"
  body:
    - "Als copywriter, merkstrateeg en creatief ondernemer help ik al drie decennia merken hun verhaal beter te vertellen, van startups tot multinationals."
    - "In welke fase je ook zit; een bedrijf zonder verhaal is zielloos en een verhaal zonder systeem is zinloos. Daarom help ik je niet alleen het signaal te vinden, maar ook het te versterken."
    - "Als co-founder van Radicle AI heb ik hands-on ervaring met AI en agentic workflows voor consistente contentcreatie in lijn met je merkverhaal. Maar AI is pas waardevol als het verhaal klopt. Ik gebruik AI voor inspiratie en eindredactie; nooit om te schrijven of te kiezen."

contact:
  label: "Plan een call"
  heading: "Waar zit de ruis in jouw verhaal?"
  lead: "Geen verkooppraatjes. Wel een goed gesprek over waar je staat, waar het schuurt en welke route in jouw situatie logisch is."
  email: "joost@chiefstory.nl"
---
