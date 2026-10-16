# Vyasan K S: Full Stack Portfolio

Suggested GitHub repository name: `vyasan-fullstack-portfolio`

## Project overview

A single-page portfolio for Vyasan K S, a Full Stack MERN Developer. It is built around three live projects (ShopEase, Shortcut Pro, Mini E-Commerce Platform) and leads with the engineering details a hiring team looks for: authentication, payments, AI integrations and AWS deployment.

All content comes from the candidate's resume and LinkedIn profile. No metrics, testimonials or achievements were added beyond those documents.

Sections: Hero, Projects, About, Experience, Skills, Education & training, Contact. Light and dark themes are supported (dark by default, saved in `localStorage`).

## Technology stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- No external fonts, APIs or environment variables

## Local installation

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To check a production build:

```bash
npm run build
npm start
```

## Project structure

```
vyasan-fullstack-portfolio/
├── app/
│   ├── globals.css        Theme colors (CSS variables) and shared styles
│   ├── icon.svg           Favicon
│   ├── layout.jsx         HTML shell, metadata, theme script
│   └── page.jsx           Page composition
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── Projects.jsx
│   ├── Reveal.jsx         Scroll fade-in
│   ├── SectionHeading.jsx
│   ├── Skills.jsx
│   └── ThemeToggle.jsx
├── data/
│   └── portfolio.js       All text content lives here
├── public/
│   └── Vyasan_K_S_Resume.pdf
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Customizing the content

1. **Text and links:** edit `data/portfolio.js`. Profile, projects, experience, skills and education are plain objects and arrays. Components render whatever is there.
2. **Add a project:** add an object to the `projects` array (name, kind, summary, built, outcome, stack, live, github). Set `featured: true` for the flagship.
3. **Resume:** replace `public/Vyasan_K_S_Resume.pdf` with a newer file of the same name.
4. **Colors:** change the CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark). `--accent` controls the green highlight.
5. **Hero side panel:** edit the `architecture` object in `data/portfolio.js`.
6. **Page title and description:** `profile.title` and `profile.metaDescription` in `data/portfolio.js`.

## Deploying

The site is static-friendly and deploys to Vercel with no configuration. Import the repository and deploy.
