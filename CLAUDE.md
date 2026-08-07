# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website for sociologist Dr. Alexandra Tate. Built with **Astro** as a fully static site with **zero runtime UI dependencies** (no React, no CSS framework). Content is stored as **local JSON files in the repo** (git-as-CMS). Deployed on **Netlify**.

## Commands

```bash
npm run dev        # start dev server at http://localhost:4321
npm run build      # static build to dist/
npm run preview    # serve the built dist/ locally
npm run typecheck  # astro check — type-checks .astro files and content
```

No lint or test tooling. Use `npm run typecheck` to validate changes.

## Architecture

**Page shell.** Every page wraps its content in `src/layouts/Layout.astro`, which renders `<head>` (fonts + `SEO`), `Header`, a centered `<main class="container">` slot, and `Footer`. Pages pass `title`, `description`, and `pathname` props to `Layout`, which forwards them to `src/components/SEO.astro`. Omitting `title` falls back to the site title.

**Styling.** A single `src/styles/global.css` (imported once in `Layout.astro`) holds all styles — CSS custom properties, fl[ex]/grid layout, and the responsive navbar. The mobile nav toggle is a tiny inline `<script>` in `Header.astro`; it's the only client-side JS on the site. There is no Bootstrap.

**Site metadata** lives in `src/data/site.ts` (title, description, twitter handle, site URL), consumed by `SEO.astro`.

## Content (git-as-CMS)

Dynamic content is plain JSON under `src/data/`, imported directly into pages (no CMS, no GraphQL, no build-time network calls):

- `publications.json` → rendered by `src/pages/resume.astro`. Each entry: `authors`, `year`, `title`, `link` (empty string = render title without a hyperlink), `publication` (HTML string, rendered via `set:html`, e.g. `<em>Journal</em>, 12(3), 45-67.`). **Order in the file is the display order** (newest first).
- `manuscripts.json` → also `resume.astro`. Each entry: `title`, `underReview` (boolean). `true` items render under "Manuscripts under review", `false` under "Manuscripts in preparation"; a section is hidden when empty.
- `courses.json` → `src/pages/teaching.astro` (University of Chicago list only; Temple/UCLA courses are hardcoded in that page). Each entry: `year`, `name`, `department`.

To add/edit content, edit the relevant JSON file — no schema step required. `index.astro` and `research.astro` are fully static prose.

## Assets & deploy

- Static assets live in `public/` and are referenced by absolute path: `profile.jpeg`, `icon.png` (favicon), and the CV PDF (`Tate_CV_2026.pdf`, imported by path in `resume.astro`). The CV is updated ~yearly — replace the file in `public/` and update the `cv` path in `resume.astro`.
- Build output is `dist/`. Netlify config is in `netlify.toml` (`npm run build` → publish `dist`).
