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
  lead: "Van een vaag of versnipperd verhaal naar een helder narratief en een systeem dat focus en richting geeft aan merk, marketing en sales."
  cta_primary: "Vertel"
  cta_secondary: "Ontdek hoe"

problem:
  heading: "Vind je verhaal.\nVertel het goed."
  body:
    - "Als iedereen iets anders vertelt over je merk of organisatie. Als veranderingen sneller gaan dan je mensen kunnen bijbenen. Als de complexiteit toeneemt. Of verwarring op de loer ligt. Als je content richting en focus mist. En je genoeg hebt van die AI-copy eenheidsworst."
  signal_line: "Dan heb je een beter verhaal nodig."
  signal_emphasis: "Chief Story helpt je het signaal in de ruis te vinden en te versterken."
  quotes:
    - "We zijn niet meer wie we drie jaar geleden waren."
    - "Iedereen begrijpt ons pas na een uur praten."
    - "Sales, marketing en directie vertellen niet hetzelfde verhaal."
    - "We produceren veel content, maar het voelt versnipperd."
    - "Onze mensen weten niet waar ons bedrijf voor staat en waarom we doen wat we doen."

method:
  label: "De methode"
  heading: "In 3 stappen van ruis naar signaal"
  cta: "Hoe Chief Story werkt"
  steps:
    - number: "01"
      title: "Narrative Positioning"
      tagline: "Claim your position"
      body: "We bepalen welke positionering je merk kan claimen. Welke spanning je oplost. Welke positie nog vrij is in je markt en de hoofden van je publiek."
    - number: "02"
      title: "Brand Storytelling"
      tagline: "Craft your story"
      body: "We vertalen die positie naar een helder merkverhaal en concrete kernboodschappen. Taal die werkt in pitch, website, sales en marketing."
    - number: "03"
      title: "Narrative Activation"
      tagline: "Build your system"
      body: "We beslissen wat we kunnen automatiseren en bouwen het systeem waarmee je team het verhaal consequent gebruikt in content, sales, marketing en AI-workflows."

offer:
  label: "Het aanbod"
  heading: "Kies je route"
  cta: "Bekijk het volledige aanbod"
  cards:
    - title: "Signal Sprint"
      duration: "1 maand"
      description: "Van strategische ruis naar een helder merkverhaal. Positionering, brand story en kernboodschappen in één compact Signal Document."
      deliverables:
        - "Narratieve positionering"
        - "Brand story"
        - "Messaging pillars"
        - "Kernzinnen voor merk, pitch en website"
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
    - title: "Full Track"
      duration: "4 maanden"
      description: "De volledige route. Eerst het signaal vinden, daarna de versterker bouwen. Signal Sprint + Story System als één traject."
      deliverables:
        - "Alles van de Signal Sprint"
        - "Alles van het Story System"
        - "Naadloze overgang tussen beide fases"
        - "Solide fundament voor structurele groei"
      price: "Vanaf €24.500"
      featured: false

audience:
  label: "Voor wie"
  heading: "Voor wie Chief Story werkt"
  cards:
    - title: "Founders en CEO's"
      body: "Je bedrijf is groter, complexer of volwassener geworden maar je merkverhaal loopt achter. Je wil een narratief dat de volgende groeifase kan dragen."
    - title: "Marketing leaders"
      body: "Je organiseert campagnes, content en salesmateriaal, maar mist een helder narratief fundament. Je wil een systeem waarmee je team sneller, scherper en consistenter communiceert."
    - title: "Kennisbedrijven"
      body: "Je hebt veel expertise, maar vindt het lastig om die onderscheidend te verwoorden. Je wil autoriteit uitstralen zonder marketing-blabla of ingewikkeld jargon."

why:
  label: "Waarom Chief Story"
  heading: "Storytelling is geen trucje. Het is een strategisch systeem."
  body:
    - "Chief Story levert geen losse copywriting, contentproductie of eenmalige merkworkshops. Het begint altijd strategisch: wat maakt jou uniek? Voor wie en waarom is dat relevant? Wat vertel je en hoe vertel je het?"
    - "Dat vraagt om taalgevoel én strategisch inzicht. Om creatieve energie én commercieel denken. Om AI-kennis en expertise die verder gaat dan prompts genereren."
  cta: "Over Joost Marsman"
  proof:
    - title: "Strategie & executie"
      body: "15+ jaar ervaring met positionering, merkverhalen en contentstrategie voor zakelijke dienstverleners, kennisorganisaties en scale-ups."
    - title: "Copy & creatie"
      body: "25+ jaar ervaring als schrijver, copywriter en songwriter. Taal met ritme, spanning en betekenis. Teksten die iets losmaken."
    - title: "AI & vibecoding"
      body: "Hands-on ervaring met AI-workflows en custom GPT's voor contentcreatie, (eind)redactie, tone-of-voice en strategische messaging."

cta:
  heading: "Waar zit de ruis in jouw verhaal?"
  body: "Plan een korte call. Dan ontdekken we waar je nu staat, waar het schuurt en welke route voor jou logisch is."
  button: "Plan nu een Call"
---
