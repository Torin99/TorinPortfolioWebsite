# Torin — Portfolio

A single-page portfolio site built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

All text, images, and links live in a single file:

```
src/resources/content.ts
```

Update that file to change your name, bio, career entries, projects, gallery images, or contact info. Types are defined in `src/resources/types.ts`.

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, globals.css)
├── components/       # React components (Navbar, Hero, Career, Projects, Gallery, Contact)
└── resources/        # Content data and TypeScript types
public/               # Static assets (images, resume PDF)
```

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Lenis** (smooth scrolling)
- **next-themes** (dark/light mode)
