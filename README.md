# HeroVerse

HeroVerse is a modern, fully responsive single-page superhero encyclopedia built with React. It lets users browse, search, filter, and compare superheroes and villains from Marvel, DC, and beyond — all wrapped in a sleek dark-themed UI with smooth animations and light/dark theme support.

---

## Features

**Browse & Discover**
- Hero card grid with lazy-loaded images, blur-to-clear loading animation, and skeleton placeholders
- Real-time search — results update as you type
- Category filter buttons — All, Marvel, DC, Villain
- Sort by rating, name (A–Z / Z–A), or year (newest / oldest)
- "Top Rated" gold badge on the highest-rated hero
- "Surprise Me" button — jumps to a random hero instantly

**Hero Detail Page**
- Full-screen cinematic banner with a slow zoom animation
- Origin story biography and powers & abilities list
- Save to favourites directly from the detail page
- Quick link to the Compare page
- Related heroes from the same universe shown at the bottom

**Favourites**
- Add or remove any hero with a single click on the heart button
- Dedicated Favourites page listing all saved heroes
- Favourite count badge shown in the navbar
- Persisted across sessions using localStorage

**Compare**
- Pick any two heroes from dropdown selectors
- Side-by-side card comparison with images, descriptions, and powers
- Animated rating bars comparing rating, number of powers, and years of experience
- Automatic winner highlight with a gold crown banner

**Universe Pages**
- Dedicated page for each universe — Marvel, DC, Villain
- Shows universe description, average rating, character count, and latest year
- Full character grid for that universe

**Navigation**
- Sticky navbar with blur backdrop
- Hamburger menu on mobile with a slide-down drawer
- Dark / Light theme toggle — preference saved in localStorage
- Back button on detail pages, home link always accessible

**Footer**
- Top promotional strip
- Four-column layout: Brand + stats, Universes, Navigate, Social + newsletter input
- All links are real routes — no dead href="#" anchors

---

## Pages & Routes

| Route | Description |
|---|---|
| / | Homepage with featured banner, search, filter, sort, and hero grid |
| /hero/:id | Individual hero detail page |
| /favorites | Saved heroes list |
| /compare | Side-by-side hero comparison tool |
| /universe/:name | All heroes from a specific universe |
| * | Custom 404 Not Found page |

---

## Tech Stack

**Core**
- React 18 — component-based UI with hooks
- React Router DOM v6 — client-side routing and navigation
- Vite 5 — lightning-fast dev server and production build tool

**State & Data**
- React Context API — global state for favourites and theme
- useState, useEffect, useMemo, useReducer — built-in React hooks only, no external state library
- localStorage — persistent favourites and theme preference

**Styling**
- Pure CSS with CSS Custom Properties (variables) — no CSS framework
- CSS Grid and Flexbox for all layouts
- Dark and light theme via data-theme attribute on the root element
- Google Fonts — Orbitron (headings) and Rajdhani (body)
- Smooth transitions, keyframe animations, backdrop blur, and glow effects throughout

**Images**
- TMDB (The Movie Database) image CDN — open CDN that allows hotlinking
- Native lazy loading with blur-to-clear reveal animation
- Shimmer skeleton placeholders while images load

**Tooling**
- Node.js & npm — package management
- @vitejs/plugin-react — JSX transform and Fast Refresh
- Git — version control

---

## Project Structure

The source code lives inside src/ and is organized as follows:

- Components/ — reusable UI components (Nav, Footer, CardList, Cards_list_item, HeroBanner), each with their own CSS file
- pages/ — full page components rendered by the router (HomePage, HeroDetailPage, FavoritesPage, ComparePage, UniversePage, NotFoundPage)
- contexts/ — React Context providers (ThemeContext, FavoritesContext)
- data/ — static hero data array with all hero information (heroes.js)

---

## Getting Started

Install dependencies and start the development server:

    npm install
    npm run dev

Open http://localhost:5173 in your browser.

To build for production:

    npm run build

To preview the production build locally:

    npm run preview

---

## Data

All hero data is stored locally in src/data/heroes.js. Each hero entry includes a name, category, release year, rating, short description, full biography, list of powers, accent color, and image URL sourced from the TMDB CDN.

---

## Design Decisions

- No CSS framework was used intentionally — all styles are hand-written to keep the bundle lean and give full control over the visual language.
- No external state management library (no Redux, Zustand, etc.) — React Context and hooks are sufficient for this scale of application.
- Images are sourced from TMDB CDN rather than Wikipedia or other sites because TMDB explicitly allows hotlinking, which prevents broken image issues.
- The project was originally bootstrapped with Create React App and later migrated to Vite for significantly faster build times and a smaller dependency footprint.

---

## Author

Built by Ayxan as a React learning project.
