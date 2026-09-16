# Sette Lenti OSP-1: deploy su Netlify

Sito statico (HTML + JS + audio), nessuna build necessaria.

## Contenuto
- `index.html`: la pagina
- `content/it.js`, `en.js`, `de.js`, `es.js`, `hr.js`: testi nelle 5 lingue (`en.js` deve restare, perché de/es/hr lo usano come base)
- `podcast-week1.mp4`: podcast della Week 1 (solo audio, ~10 MB)
- `netlify.toml`: header (noindex, cache, tipo audio)

## Opzione 1: trascina e rilascia (la più semplice)
1. Vai su https://app.netlify.com/drop
2. Trascina l'intera cartella `sette-lenti-netlify`
3. Netlify ti dà un link del tipo `https://nome-casuale.netlify.app`

## Opzione 2: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --dir . --prod
```

## Prima di condividere il link
Le slide riassunte e il podcast sono materiale del corso di Joël Maier (HSLU).
Il sito ha `noindex` (non finisce su Google), ma chiunque abbia il link può aprirlo.
Condividilo solo con il gruppo, oppure chiedi prima al docente. Se vuoi un sito
senza materiale del corso, cancella `podcast-week1.mp4` prima del deploy.

Nota: progressi, lingua e appunti sono salvati nel browser di chi usa il sito (localStorage).

## Profili e sincronizzazione
All'apertura ognuno scrive il proprio nome e un PIN di 4–8 cifre.
- Su claude.ai (https://claude.ai/artifact/LUooUNMcw6AT9m9pm7zy5V) il profilo è salvato online:
  con lo stesso nome e PIN si ritrovano i progressi su qualsiasi dispositivo.
- Su Netlify i profili restano nel browser di chi li crea (nessuna sincronizzazione).
