# Medi-Guide

Production-ready starter website for helping people in California understand healthcare benefits such as Medi-Cal, Medicare, and Covered California.

## Tech stack

- Next.js App Router
- React
- Tailwind CSS
- TypeScript
- Vercel-ready deployment

## Run locally

Prerequisite: install Node.js 20 or newer so `node` and `npm` are available in your shell.

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository into Vercel.
3. Keep the default framework preset for Next.js.
4. Build command: `npm run build`
5. Output setting: leave default for Next.js.
6. Deploy.

## Project structure

```text
.
├── app
│   ├── eligibility
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── EligibilityTool.tsx
│   ├── LanguageToggle.tsx
│   ├── ProgramCard.tsx
│   └── SiteFooter.tsx
├── data
│   ├── content.ts
│   ├── programs.ts
│   └── questions.ts
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Where to integrate real data later

- Replace mock eligibility rules in `data/programs.ts` with reviewed policy logic.
- Replace placeholder apply links in `data/programs.ts` with official program URLs.
- Move translated placeholder content in `data/content.ts` and `data/questions.ts` to reviewed copy.
- Connect a CMS, policy feed, or versioned content source once legal and program review is complete.

## Notes

- No backend is required for this starter.
- The current matching logic is intentionally conservative and clearly marked as non-official.
- The Spanish experience is a placeholder preview and should be reviewed before production use.
