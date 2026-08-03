# YouTube Clone — Project Plan

## Overview

A static **HTML/CSS visual clone** of YouTube’s desktop home experience. No frameworks, JavaScript logic, or backend yet — layout and visual fidelity are the focus so far.

| Item | Detail |
|------|--------|
| Stack | HTML5, CSS3 |
| Fonts / icons | Google Fonts (Roboto), Material Icons |
| Pages | `index.html` (Home / All), `music.html` (Music category) |
| Styles | `style.css`, `responsive.css` |
| Assets | `recourses/` (SVGs, AVIF thumbnails, JPG avatars) |
| Tooling | VS Code Live Server (port 5501) |
| Backend / API | None |
| Auth | None |

---

## Current state (what exists)

### Layout shell
- Sticky top header: menu, logo, search bar, voice search, Create, notifications, account avatar
- Full left sidebar: Home, Shorts, Subscriptions, You (library links), Explore, More from YouTube, report history, footer links
- Sticky horizontal category chip bar
- Responsive video grid (3 → 2 → 1 columns via breakpoints at 1200 / 1024 / 768)

### Working navigation
- **All** ↔ **Music** chips switch between `index.html` and `music.html`
- Everything else is visual only (`cursor: pointer`, no behaviour)

### Content
- **Home feed:** 9 hardcoded video cards (thumbnails, titles, channels, views/dates)
- **Music feed:** 9 music-themed video cards with matching assets
- Sidebar subscriptions and section labels match a real YouTube-like chrome

### Responsive behaviour (partial)
- Desktop: full sidebar + multi-column grid
- Tablet: search/Create adjustments; sidebar collapse is incomplete (`display: 90px` is invalid CSS)
- Phone: sidebar hidden; search collapses to icon; Create kept; notifications/voice hidden

---

## Gaps & polish needed

| Area | Issue |
|------|--------|
| Interactivity | Menu, search, chips (except All/Music), sidebar, cards, Create, notifications — non-functional |
| Tablet sidebar | Invalid rule; mini-rail / hamburger toggle not implemented |
| Page duplication | `music.html` largely copies `index.html` — won’t scale for more categories |
| Assets | Folder typo `recourses` → ideally `resources`; minor unused/leftover files |
| Cards | No duration badges, hover preview, or click-through to a watch page |
| A11y | Many empty `alt` attributes; limited keyboard/semantics focus |
| Docs | No README or assignment brief in-repo |

---

## Feature roadmap

### Phase 1 — Finish static UI (near-term)
Goal: assignment-ready visual fidelity without changing the stack.

- [ ] Fix tablet sidebar CSS; add hamburger open/close + optional mini sidebar
- [ ] Duration overlays on thumbnails; stronger hover states
- [ ] Wire sidebar Explore → Music (and stub Gaming / News pages if needed)
- [ ] Link remaining useful chips or hide unused ones for a cleaner demo
- [ ] Improve alt text and basic accessibility
- [ ] Add a short README (how to open via Live Server)
- [ ] Optional: rename `recourses` → `resources` and update paths

### Phase 2 — Light interactivity (vanilla JS)
Goal: feel like a product without a backend.

- [ ] Sidebar collapse / mobile drawer
- [ ] Chip bar scroll arrows
- [ ] Centralise videos in a JS/JSON array; render cards dynamically
- [ ] Client-side search filter on the current feed
- [ ] `more_vert` dropdown (Save, Not interested — UI only)
- [ ] Click card → `watch.html?id=...` with a static player mock (`<video>` or YouTube iframe)

### Phase 3 — Core YouTube screens
Goal: multi-page clone covering the main user journeys.

| Screen | Features |
|--------|----------|
| **Watch** | Player, title/meta, like/dislike UI, subscribe, description, recommended sidebar |
| **Search results** | Query from header → results list/grid |
| **Channel** | Banner, avatar, tabs (Home / Videos / About) |
| **Shorts** | Vertical swipe-style feed (images or short clips) |
| **Library** | History, Watch Later, Liked Videos (persist with `localStorage`) |
| **Create / upload** | Simple upload form mock (file picker + preview card) |

### Phase 4 — Real data (stretch)
Goal: live or near-live content.

- [ ] YouTube Data API v3 for search / popular videos (API key + quota handling)
- [ ] Or mock JSON / Firebase for videos, comments, and “uploads”
- [ ] Auth mock or Firebase Auth (sign-in, avatar swap)
- [ ] Comments thread UI with local or remote persistence

### Phase 5 — Framework upgrade (optional end-state)
Goal: production-style app structure if the assignment allows it.

- [ ] Migrate to React (or similar) with shared `Header`, `Sidebar`, `VideoCard`
- [ ] Client router: `/`, `/watch/:id`, `/search`, `/channel/:id`, `/shorts`
- [ ] Shared state for subscriptions, history, theme
- [ ] Dark / light theme via CSS variables
- [ ] Deploy (GitHub Pages, Netlify, or Vercel)

---

## Suggested end-state (feature vision)

A polished YouTube-like front end where a user can:

1. Browse a home feed and filter by category
2. Search and open a watch page with recommendations
3. Visit channels and a Shorts feed
4. Save history / watch later / liked locally (or via auth + API)
5. Use a responsive layout with working sidebar and theme toggle

**Minimum viable “done” for a static assignment:** Phase 1 complete + watch page stub.  
**Strong portfolio piece:** Phases 1–3.  
**Full stretch clone:** through Phase 4 or 5.

---

## Project structure (today)

```
YouTube_Clone/
├── index.html          # Home (All) feed
├── music.html          # Music category feed
├── style.css           # Layout & components
├── responsive.css      # Breakpoints
├── plan.md             # This plan
├── .vscode/settings.json
└── recourses/          # Icons, thumbnails, avatars
```

---

## Priority order (recommended next steps)

1. Fix responsive sidebar + hamburger toggle  
2. Add duration badges / card polish  
3. Introduce a small `videos.js` (or JSON) and stop duplicating HTML pages  
4. Build `watch.html` and link cards to it  
5. Add search results page  
6. Decide: stay vanilla vs move to React for the rest of the roadmap  
