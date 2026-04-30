# Rise Global Website

A modern, responsive marketing website for Rise Global, built with React, TypeScript, and Tailwind CSS.

Live site: deployed on Vercel.

## Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for client-side routing
- **EmailJS** for the contact form
- **Create React App** as the build tooling

## Project Structure

```
src/
├── components/   # Reusable UI, layout, and section components
├── context/      # React context providers (e.g. mobile menu state)
├── hooks/        # Custom React hooks
├── pages/        # Top-level pages (Home, Careers)
├── utils/        # Helper utilities
└── App.tsx       # Root component and routes
```

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm start` — run the dev server with hot reload
- `npm run build` — produce an optimized production build in `build/`
- `npm test` — run the test runner in watch mode

## Deployment

The site is configured for Vercel via `vercel.json`. Pushing to `main` triggers a production deploy.

## Contact Form

The contact form uses EmailJS. To enable it locally, set the relevant EmailJS service, template, and public key in the form configuration.
