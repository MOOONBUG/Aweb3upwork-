# NovaFi — Web3 Landing Page

A single-page marketing site for **NovaFi**, a fictional DeFi / Web3 startup. The UI uses a premium dark theme with purple–blue gradients, responsive layout, and plain CSS—no utility frameworks.

---

## Project overview

NovaFi Landing is a **React** application built with **Vite**. It presents a credible product narrative (hero, features, process, roadmap, FAQ) suitable for design and front-end portfolios. Content is illustrative only; NovaFi is not a real company or live protocol.

---

## Features

- **Modern Web3 aesthetic** — Dark background, subtle grid, gradient accents, glass-style cards  
- **Fully responsive** — Mobile navigation drawer, stacked sections, touch-friendly controls  
- **Structured sections** — Navbar, Hero, Features, How it works, Roadmap, FAQ, Footer  
- **Accessible patterns** — Semantic landmarks, expandable FAQ with `aria-expanded`, keyboard-friendly buttons  
- **Beginner-friendly codebase** — Small React components, section-level comments, vanilla CSS in `App.css` / `index.css`  

---

## Tech stack

| Layer        | Choice                          |
| ------------ | ------------------------------- |
| Framework    | React 19                        |
| Build tool   | Vite 8                          |
| Styling      | Plain CSS (variables, flex/grid) |
| Fonts        | Outfit, JetBrains Mono (Google Fonts) |

No Tailwind, no CSS-in-JS.

---

## How to run locally

**Requirements:** Node.js 18+ and npm.

```bash
cd novafi-landing
npm install
npm run dev
```

Open the URL shown in the terminal (typically [http://localhost:5173](http://localhost:5173)).

Other scripts:

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run build`   | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint               |

---

## Portfolio use case

This repo works well as a **portfolio piece** to demonstrate:

- Landing page layout and visual hierarchy  
- Responsive design without a CSS framework  
- Component composition in React (one file per section)  
- Clear copy structure for fintech / Web3-style products  

When presenting it, you can describe your role (e.g. design implementation, component architecture, responsive behavior) and link a deployed demo once available.

---

## Live demo

**Live demo:** _Coming soon — add your deployed URL here (e.g. Vercel, Netlify, GitHub Pages)._  

Replace this line after deployment:

```text
https://your-demo-url.example.com
```

---

## License

This project is provided as a demo / portfolio artifact. Adapt or reuse as needed for your own work.
