---
target: hela sidan
total_score: 25
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
target_identity: "file:/home/user/lyktan/src/pages/index.astro"
target_fingerprint: "sha256:a1b24bad604e8522f6e607c595c0612fb51a5bc860f9c83dd918085a39638975"
target_path: /home/user/lyktan/src/pages/index.astro
timestamp: 2026-10-30T18-57-40Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score — 25/36 (69 %, Acceptable, gränsar till Good). H7 n/a.

| # | Heuristik | Poäng | Huvudproblem |
|---|---|---|---|
| 1 | Systemstatus | 3 | Kopiera-feedback fungerar; statusraden hamnar under QR-koden på desktop |
| 2 | Verklighetsmatchning | 3 | Eventsektionen tilltalar gäster, inte volontärer/givare |
| 3 | Kontroll | 3 | Nya flikar annonseras |
| 4 | Konsekvens | 3 | "Bli volontär" i nav scrollar, i knappar öppnar formulär; amber även på e-post |
| 5 | Felförebyggande | 2 | Ingen mottagare ("Föreningen Lyktan") att kontrollera i Swish; "Jul" bara i QR som är dold på mobil |
| 6 | Igenkänning | 3 | Mobil: kopiera, byt app, klistra, minns meddelande |
| 7 | Flexibilitet | n/a | Övertygelseyta |
| 8 | Minimalism | 3 | Mat/musik/gemenskap tre gånger, Instagram tre gånger |
| 9 | Felåterhämtning | 3 | Bra felmeddelande; utan JS gör knappen inget |
| 10 | Hjälp | 2 | FAQ saknar volontärfrågor (ålder, kompis, ankomsttid, deadline) |

## Design Specificity
Utseendet Lyktans, strukturen generisk (pelare, 1-2-3-steg, tre kort). Detektor: 0 fynd (källa, 1280, 390, 320, injicerad). Förra körningen: 10 per bredd.

## Priority Issues
1. [P1] Givarförtroende och mobil Swish-flöde tunt — mottagarnamn, meddelande på mobil, svar på "vart går pengarna" vid numret, ev. "Öppna Swish"-länk (måste testas). (clarify, harden)
2. [P1] "Bli volontär" betyder två saker, för många ambergula knappar, sidan slutar på e-post. (clarify, polish)
3. [P2] Eventsektionen talar till gäster — "Juldagen 2026", volontärrad. (clarify)
4. [P2] Pelare/steg mall + upprepning; 5 uppgifter 3+2 — gruppera före/på juldagen. (distill, layout)
5. [P3] Julklappskortet återvändsgränd, statusrad placerad fel, inget efter-jul-läge. (harden, polish)

## Persona Red Flags
Jordan: vem står bakom? (Gmail, inget org.nr, http). Riley: "årets julfirande" efter 25/12, ingen skip-link. Casey: glömmer "Jul" i Swish. Volontär från Instagram: ingen träffdag, deadline, ankomsttid, ålder, kompis.

## Minor
Logga 150px mjuk och ljusast i hero; FAQ-kolumn tom; Sprid ordet dubblerar Instagram; lyktor nästan osynliga.

## Questions
Ska det finnas ett val direkt under hero (hjälpa till / ge)? Kan en riktig namngiven röst ersätta pelarna? Ska lyktan bli hero-bild?
