# Colonnade Dental

Marketing site for **Colonnade Dental** — Dr. Vincent How's family dental practice in Mississauga, ON. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Editing clinic info

All clinic details (name, doctor, phone, address, hours, social) live in a single source of truth:

- `src/lib/clinic.ts` — phone, email, address, doctor, social handles
- `src/lib/content.ts` — services, treatments, reviews, FAQ, hours, awards

Edit those two files and every page (home, /about, /services, footer, schema, sitemap) updates automatically.

## Pages

- `/` — Home (hero, stats, about teaser, first visit, why choose us, promise, reviews, quiz, instagram, book CTA, blog teaser, FAQ)
- `/about` — Meet Dr. Vincent How, mission, awards, inside the clinic
- `/services` — Smile-zone diagram, core services, full treatments grid, what's included in the new patient exam, insurance, CTA

## SEO

- JSON-LD `LocalBusiness` + `MedicalBusiness` + `Dentist` schema in `src/app/layout.tsx`
- JSON-LD `FAQPage` schema in `src/app/page.tsx`
- `sitemap.xml` and `robots.txt` generated automatically
- Open Graph image generated at `/opengraph-image`
