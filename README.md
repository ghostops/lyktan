# Föreningen Lyktan

Statisk webbplats byggd med [Astro](https://astro.build).

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # → dist/
```

## Innehåll

Allt som ändras år för år (datum, tid, Swish, formulärlänk, siffror m.m.) finns i `src/data/site.ts`.
Platshållare står inom `[hakparenteser]` och markeras gult på sidan.

## Deploy

Coolify med Railpack. Railpack känner igen Astro (statisk output) och serverar `dist/`. Node-version styrs av `engines.node` i `package.json`.
