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
  eyebrow: "Positioning · Brand storytelling · Story systems"
  h1: "Van ruis naar signaal"
  lead: "Van een vaag of versnipperd verhaal naar een helder narratief en een systeem dat focus en richting geeft aan merk, marketing en sales. Groeien? Get your story straight."
  cta_primary: "Vertel"
  cta_secondary: "Ontdek hoe"

problem:
  heading: "Vind je verhaal.\nVertel het goed."
  body:
    - "Als iedereen iets anders vertelt over je merk of organisatie. Als veranderingen sneller gaan dan je mensen kunnen bijbenen. Als de complexiteit toeneemt. Of verwarring op de loer ligt. Als je content richting en focus mist. En je genoeg hebt van al die AI-copy-eenheidsworst."
  signal_line: "Chief Story helpt je het signaal in de ruis te vinden en te versterken. Met een scherpe positionering, een merkverhaal dat 100% klopt, en een systeem waarmee je team het elke dag kan verspreiden."
  signal_emphasis: "Door mensen verteld, door AI versterkt."
  quotes:
    - "Sales, marketing en directie vertellen elk een ander verhaal."
    - "We hebben moeite om de juiste mensen te vinden."
    - "Waarom klinken we hetzelfde als iedereen?"
    - "We produceren veel content, maar missen de rode draad."
    - "Onze mensen weten niet waar ons bedrijf voor staat."

method:
  label: "De methode"
  heading: "In drie stappen van ruis naar signaal."
  cta: "Hoe Chief Story werkt"
  steps:
    - number: "01"
      title: "Narrative Positioning"
      tagline: "Claim your position"
      body: "Dit is de buitenwereld. Welk probleem los je op en voor wie? Welke positie is nog vrij in de hoofden van je publiek? Dat vormt de basis. Zonder die basis is alles wat je daarna maakt ruis."
    - number: "02"
      title: "Brand Storytelling"
      tagline: "Craft your story"
      body: "Dit is de binnenwereld. Waarom doe je wat je doet? Waar geloof je in? Woorden die werken van pitch tot socials tot salesgesprek. Taal die de kern raakt. Die iets losmaakt. En in gang zet."
    - number: "03"
      title: "Narrative Activation"
      tagline: "Build your system"
      body: "Dit is de versterker. Van het bouwen van AI-workflows tot je contentstrategie. Het verhaal verdwijnt niet in een la, maar gaat leven. Bij directie, marketing en sales. En bij je publiek."

offer:
  label: "Het aanbod"
  heading: "Kies je route."
  cta: "Bekijk het volledige aanbod"
  cards:
    - title: "Story Sprint"
      duration: "1 maand"
      description: "Van ruis naar signaal. Positionering, brand story en kernboodschappen in één compact document. Zodat iedereen hetzelfde verhaal vertelt."
      deliverables:
        - "Narratieve positionering"
        - "Brand story"
        - "Messaging pillars"
        - "Kernzinnen voor deck, pitch en site"
      price: "Vanaf €7.500"
      featured: false
    - title: "Story System"
      duration: "3 maanden"
      description: "Je verhaal structureel activeren in content, marketing, sales en AI. Vaste formats, AI-workflows en creatieve story sessions voor je team."
      deliverables:
        - "Content- en messagingstructuur"
        - "AI-workflows en promptsets"
        - "Formats voor posts, artikelen, campagnes"
        - "Maandelijkse story sessions"
      price: "Vanaf €17.500"
      featured: true
      badge: "Meest gekozen"
    - title: "The Full Story"
      duration: "4 maanden"
      description: "Eerst het verhaal. Dan het systeem. Story Sprint en Story System als één logisch traject. Zo bouw je het meest solide fundament, waar je jaren mee verder kunt."
      deliverables:
        - "Alles van de Story Sprint"
        - "Alles van het Story System"
        - "Naadloze overgang tussen beide fases"
        - "Sterk fundament voor structurele groei"
      price: "Vanaf €24.500"
      featured: false

audience:
  label: "Voor wie"
  heading: "Voor wie Chief Story werkt"
  cards:
    - title: "Founders en CEO's"
      body: "Je bedrijf is groter geworden. Je verhaal niet mee. Je wil een narratief dat meegroeit en de volgende groeifase kan dragen."
    - title: "Marketing leaders"
      body: "Je hebt de kanalen. Je mist het fundament. Je wil dat je team sneller, scherper en consistenter communiceert."
    - title: "Kennisbedrijven"
      body: "Je hebt de expertise. Alleen klinkt het nog als alle anderen. Je wil autoriteit uitstralen zonder de marketingtaal."

why:
  label: "Waarom Chief Story"
  heading: "Storytelling is geen franje. Het is de kern."
  body:
    - "Ik maak al dertig jaar verhalen. Als copywriter, merkstrateeg, songwriter en ondernemer. Voor scale-ups die willen groeien. Voor gevestigde merken die hun verhaal kwijt zijn. En voor artiesten die de woorden niet vinden."
    - "Dit is wat ik heb geleerd: er is geen krachtiger middel om je boodschap over te brengen dan een verhaal. Niks, nada, noppes. En dit: een bedrijf zonder verhaal is zielloos en stuurloos. En een verhaal zonder systeem is zinloos. Daarom help ik je niet alleen het signaal in de ruis te worden, maar ook dat signaal te versterken. Zodat iedereen het hoort, snapt en voelt."
  cta: "Mijn verhaal"
  proof:
    - title: "Strategie & executie"
      body: "15+ jaar ervaring met positionering, merkverhalen en contentstrategie voor zakelijke dienstverleners, kennisorganisaties en scale-ups."
    - title: "Copy & creatie"
      body: "25+ jaar ervaring als schrijver, copywriter en songwriter. Taal met ritme, spanning en betekenis. Teksten die iets losmaken."
    - title: "AI & systemen"
      body: "Als co-founder van Radicle hands-on ervaring met AI-agents en agentic workflows voor consistente contentcreatie in lijn met je merkverhaal."

cta:
  heading: "Waar zit de ruis in jouw verhaal?"
  body: "Vertel me waar het wringt, waar het vaag blijft, waar het vastloopt. Ik vertel je of ik je kan helpen, en hoe."
  button: "Plan nu een call"
---
