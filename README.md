# Kakav si volonter? 🙌

A "What type of volunteer are you?" personality quiz for the "72 sata bez kompromisa" Catholic youth volunteer event.

Built with React + TypeScript + Vite + Tailwind CSS. Pure client-side, no backend required.

## Volunteer Types

- 📋 **Organizator** – plans, coordinates, keeps things on schedule
- 🔨 **Izvođač / Radnik** – hands-on, gets things physically done
- 🎉 **Povezivač / Animator** – connects people, keeps the energy up
- 🎨 **Kreativac** – ideas, décor, content, creative solutions

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deployment

Deployed as a static site on [Render.com](https://render.com).

Settings (configured in `render.yaml`):
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- SPA rewrite rule: `/* → /index.html`

To deploy: connect the GitHub repo to Render and it will auto-deploy on push.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
