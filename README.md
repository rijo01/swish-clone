# Swish-klon (Demo / Prototyp)

> **OBS:** Detta är en visuell utbildnings- och prototyp-app. Den är **inte** en
> riktig betalningstjänst, är på inget sätt ansluten till Swish AB, och hanterar
> inga riktiga pengar eller bankuppgifter.

En mobil-first webbapp byggd med Next.js 14 (App Router) + TypeScript + Tailwind
CSS som visuellt efterliknar Swish-appens layout och navigering — för att öva
på UI-bygge, state management och PWA-känsla i webben.

## Skärmar

- `/` — **Hem**: hero-card och CTA-knapparna *Swisha* och *Skanna*
- `/forfragningar` — **Förfrågningar**: tom-state med illustration
- `/historik` — **Historik**: skeleton-rader och BankID-CTA
- `/profil` — **Profil**: slumpgenererat svenskt mobilnummer, QR-kod, möjlighet
  att ladda upp egen bild som ersätter QR-koden, samt inställningslista
- `/swisha` — **Swisha**: betalningsformulär med fält för mottagare, namn,
  belopp och meddelande, plus bekräftelse-modal
- `/skanna` — **Skanna**: kamera-viewport-placeholder

## Funktioner

- Slumpgenererat svenskt mobilnummer (`+46 7X XXX XX XX`) sparat i
  `localStorage`
- QR-kod som genereras från numret med `qrcode.react`
- Uppladdning av egen bild — sparas som base64 i `localStorage`
- Återställning till genererad QR-kod
- React Context för delat state (telefonnummer, anpassad QR, transaktioner)
- Nedre tab-bar: Hem, Förfrågningar, Historik, Profil

## Komma igång

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Bygg

```bash
npm run build
npm run start
```

## Deploy till Vercel

1. Skapa ett GitHub-repo `swish-clone` och pusha koden.
2. Importera repot i [vercel.com](https://vercel.com).
3. Inga env-variabler behövs.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** — ikoner
- **qrcode.react** — QR-kod-generering

## Disclaimer

All text är på svenska. Logotyp och färgschema är inspirerade av Swish men
varumärket eller logotypen tillhör inte detta projekt — den lilla cirkeln i
hörnet är en originaldesign. *Demo — ej Swish AB.*
