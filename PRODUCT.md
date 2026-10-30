# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primära målgrupper, lika viktiga:

- **Blivande volontärer** – privatpersoner i Stockholm som vill hjälpa till före och/eller under julfirandet (baka, laga/värma mat, servera, förbereda lokalen, umgås med gästerna). Ingen erfarenhet krävs. Deras jobb: förstå vad det innebär och anmäla intresse via formuläret.
- **Givare** – personer som inte kan vara volontärer men vill bidra med Swish eller julklappar. Deras jobb: snabbt hitta Swish-numret, förstå julklappsinsamlingen och känna förtroende för att pengarna går till firandet.

Sekundärt: personer som sprider ordet (delar på Instagram, skickar vidare till vänner och familj). Gästerna själva – ensamma äldre och äldre hemlösa – är föreningens målgrupp men inte sidans primära läsare.

## Product Purpose

Webbplatsen för Föreningen Lyktan, en ideell förening som drivs av volontärer och ordnar julfirande på juldagen för ensamma äldre och äldre hemlösa: jullunch, gemenskap, musik och julklappar. Sidan ska ge ett professionellt, förtroendeingivande intryck och leda besökaren till en av tre handlingar: anmäla intresse som volontär, swisha ett bidrag eller bidra till julklappsinsamlingen. Framgång = fler volontäranmälningar och bidrag inför juldagen.

## Positioning

En liten, helt ideell och lokal förening (Södermalm, Stockholm) som gör en enda sak: ser till att ingen behöver fira jul ensam. Konkret, personlig och nära – inte en stor hjälporganisation.

## Operating Context

- Säsongsbetonad: sidan är mest aktuell under hösten fram till juldagen och uppdateras inför varje år.
- Julfirandet 2026: fredag 25 december kl. 12.00–15.00, Rosenlundsgatan 44 A, Södermalm.
- Volontärer anmäler intresse via ett externt Google-formulär. Formuläret innehåller datum för en digital volontärträff.
- Trafik kommer främst från Instagram (@foreningen_lyktan) och vidarebefordrade mejl, alltså mestadels mobil.

## Capabilities and Constraints

- Statisk sida byggd med Astro, deployas med Coolify (Railpack). Inga avancerade funktioner, ingen backend.
- Inga cookies, ingen spårning och inga externa inbäddningar (självhostade typsnitt, kartlänk i stället för inbäddad karta).
- Allt årsberoende innehåll samlas i `src/data/site.ts`.
- Tillfällig URL tills domän finns: `http://jjr3afwtimmpcrr7xvdyxghk.62.238.42.92.sslip.io`.
- Odefinierat än: domän, organisationsnummer, var och när julklappar lämnas, samt vad som önskas i insamlingen.

## Brand Commitments

- Namn: Föreningen Lyktan. Logotyp: lykta med rosett och handskrivet ”Lyktan” (`public/logo.jpg`, endast 150×150 px – högupplöst version saknas).
- Budskap från Instagram: ”Ingen ska behöva fira jul ensam.” / ”Ingen ska vara ensam.”
- Ton: varm, enkel, inkluderande, du-tilltal. Svenska.
- Swish: 123 003 43 55. Instagram: @foreningen_lyktan. Kontakt: leah.aahmed@gmail.com.
- Swish-logotypen används där Swish nämns (`public/swish.svg`, officiell fil från swish.nu).
- Inte tomterött.

## Evidence on Hand

- Föreningen har hållit julfirande minst ett tidigare år. Enligt föreningens Instagram blev förra årets julklappsinsamling ”en stor succé”. Exakt antal år är okänt – påstå ingen historik.
- Siffror (antal gäster, volontärer, julklappar) saknas och är platshållare. Hitta inte på några.
- Inga citat, testimonials eller pressomnämnanden finns. Hitta inte på några.
- Bilder från tidigare firanden finns på Instagram men har inte lämnats för användning på webben (samtycke krävs för personer som syns).

## Product Principles

1. Varje sektion leder till en tydlig handling: anmäl intresse, swisha eller bidra med julklapp.
2. Förtroende genom ärlighet: inga påhittade siffror eller citat, och tydligt att allt drivs ideellt.
3. Lätt att uppdatera inför nästa jul av någon som inte är utvecklare.
4. Mobil först: de flesta kommer via Instagram.
5. Värme före polish: det ska kännas personligt, inte som en organisation.

## Accessibility & Inclusion

WCAG 2.2 AA. Inga särskilda anpassningar för äldre läsare krävs.
