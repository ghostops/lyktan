---
target: hela sidan
total_score: 24
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 3
target_identity: "file:/home/user/lyktan/src/pages/index.astro"
target_fingerprint: "sha256:83f5ac5ec2118bba89b51dab2ca5c3d5977ea7d07e845c091c5e7810a559c6c0"
target_path: /home/user/lyktan/src/pages/index.astro
timestamp: 2026-10-30T18-45-26Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score — 24/36 (67 %, Acceptable). H7 n/a (Persuade-yta).

| # | Heuristik | Poäng | Huvudproblem |
|---|---|---|---|
| 1 | Systemstatus | 3 | Kopiera ger feedback; formuläret öppnas i ny flik utan förvarning; inget om när volontärer/julklappar behövs |
| 2 | Verklighetsmatchning | 3 | Varm du-svenska; julklappsinsamlingen saknar var/när |
| 3 | Kontroll och frihet | 3 | Fem externa länkar öppnar ny flik utan att säga det |
| 4 | Konsekvens | 3 | Samma mål heter "Bli volontär" och "Anmäl intresse"; "Bidra med Swish" landar på en grid med tre val, inte numret |
| 5 | Felförebyggande | 2 | Ingen Swish-QR för desktop, inget förslag på meddelande, julklappar går inte att agera på |
| 6 | Igenkänning | 2 | Ingen navigation under 860px |
| 7 | Flexibilitet | n/a | En-sidig övertygelseyta |
| 8 | Estetik/minimalism | 2 | Gula [XX]-platshållare starkast under hero; loggan två gånger i första vyn |
| 9 | Felåterhämtning | 3 | "Kunde inte kopiera" utan nästa steg, ingen aria-live |
| 10 | Hjälp | 3 | FAQ svarar rätt men ligger för sent |

## Design Specificity
Ytan (ljusslinga, lyktor, vin/guld) är Lyktans egen; strukturen är generisk ideell landningssida (split-hero, ikonplattor, statistikband, 5 ikon-över-rubrik-kort, steg, 3-kolumnsgrid, FAQ, kontaktblock). Heron lägger halva bredden på en lågupplöst logga som redan finns i headern.
Detektor: källkod ren (0). Renderad sida 10 fynd per bredd: icon-tile-stack ×5 (.tasks, index.astro ~195–205), radial-spotlight-glow ×1 (#kontakt ~1003), straggler ×3–4, unbalanced-heading ×1 (390px, #volontar h2). Ingen text-wrap i src.

## Priority Issues
1. [P1] Platshållare synliga ([XX] ×3, org.nr, julklappsinlämning) — läses som ofärdigt vid förtroendemomentet. Fix: rendera statistikbandet/org.nr bara när värden finns; ersätt julklappsraden med ärlig text. (harden, distill)
2. [P1] Ingen mobilnavigation — mobil är huvudtrafiken; givare måste scrolla ~6 500px. Fix: "Swisha"-länk bredvid "Bli volontär" i mobil-headern, 44px mål. (adapt)
3. [P1] Givarvägen saknar förtroende och bekvämlighet. Fix: hero-knappen till #swish, en rad "allt går till juldagen" i kortet, Swish-QR för desktop, föreslaget meddelande. (clarify)
4. [P2] Mallstruktur — 5 ikonplattor (detektorn håller med), pelare, logga-disk i hero. Fix: uppgifter som tidslinje före/juldagen, pelare in i texten, ersätt logga-disken med datum/plats som typografi eller stor lykt-illustration. (layout / bolder)
5. [P2] Volontär-CTA lämnar sidan utan förvarning och utan tid. Fix: en etikett, notis om Google-formulär/ny flik, när man behövs. (clarify)

## Persona Red Flags
- Jordan: ser [XX] och tvivlar; vet inte tidsåtagandet förrän i FAQ; julklappar utan inlämningsplats.
- Riley: execCommand-fallback på HTTP utan instruktion vid fel; sidan säger inget efter 25 dec.
- Casey: ingen nav; header-CTA 31px; Swish-knappen landar på rubrik.
- Volontär från Instagram: ser CTA direkt, men inga ansikten/bilder och "datum finns i formuläret".

## Minor
Fokusring på vit Swish-ruta ~1.9:1; "Kopierat!" saknar aria-live; ändlös blinkning bredvid H1; snöflingor 8–12 % läses som brus; radial glow i #kontakt flaggad; enordsrader (text-wrap: pretty saknas); "Kan du inte vara med i år?" gör givare till andrahandsval; Gmail som kontakt.

## Questions
- Varför visar heron loggan i stället för dagen (25 dec, 12–15, Södermalm)?
- Vad sant och konkret kan ersätta statistikbandet i år?
- Om givare är lika viktiga, varför dyker de upp först 60 % ner under en rubrik som säger "kan du inte vara med"?
