# Lakshay Verma — Portfolio

A modern, responsive personal portfolio built with React + Vite and styled with Tailwind CSS. Clean layout to showcase projects, skills, experience and contact details — optimized for recruiters and developers.

## Quick demo

- Local dev: npm run dev
- Build: npm run build
- Preview: npm run preview

## Tech

- React (Vite)
- Tailwind CSS (PostCSS)
- JavaScript, HTML, CSS

## Features

- Hero / About snapshot
- Project cards (Live & Source buttons)
- Skills, Experience, Education, Certifications
- Responsive dark UI and utilities
- Resume download

## Install & run

1. Open terminal in project folder:
   cd C:\Projects\portfolio\portfolio
2. Install:
   npm install
3. Start dev server:
   npm run dev
4. Open http://localhost:5173

If Tailwind classes not applied:

- Ensure src/index.css contains the three directives at top:
  @tailwind base; @tailwind components; @tailwind utilities;
- Ensure postcss.config.cjs exists with tailwindcss & autoprefixer
- Ensure src/main.jsx imports "./index.css"

## Project structure (key files)

- index.html
- package.json, vite.config.js, tailwind.config.js
- public/ (static assets, resume.pdf)
- src/
  - main.jsx — app entry (imports index.css)
  - App.jsx — root layout
  - index.css — Tailwind directives + custom CSS
  - assets/ — images
  - components/ — SectionTitle, Header, HeroSection, ProjectsSection, SkillsSection, ContactSection, ...
  - data/portfolio-data.js — profile, projects, skills, experience, education, certifications

## Add a live project link

1. In src/data/portfolio-data.js add `live` (and optional `repo`) to a project:

```js
{
  name: "My Project",
  summary: "...",
  live: "https://example.com",
  repo: "https://github.com/..."
}
```

2. ProjectsSection renders Live and Source buttons when fields exist.

## Deploy

- Build: npm run build
- Deploy `dist/` to Netlify, Vercel, GitHub Pages or any static host.

## Contributing / Notes

- Keep data in src/data/portfolio-data.js for easy edits.
- Install Tailwind IntelliSense in VS Code to remove editor warnings.
- If you need help wiring a new project card or fixing Tailwind, open src/main.jsx and src/index.css and I will patch them.

## License

MIT — modify freely.
