# Föreningen Lyktan

Statisk webbplats byggd med [Astro](https://astro.build).

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # → dist/
```

## Innehåll

Allt som ändras år för år (datum, tid, Swish, formulärlänk, siffror m.m.) finns i `src/data/site.ts`.
Tomma värden (`''`) visas inte på sidan: siffrorna från förra året, org.nr och var julklappar lämnas dyker upp först när de fylls i.

Swish-QR-koden (`public/swish-qr.png`) är genererad med Swish officiella QR-tjänst för 123 003 43 55 med meddelandet "Jul". Byts numret måste den genereras om.

## Deploy

Coolify med Railpack. Railpack känner igen Astro (statisk output) och serverar `dist/`. Node-version styrs av `engines.node` i `package.json`.
