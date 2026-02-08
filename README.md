# Tahwul Frontend Assessment

A digital transformation and compliance tracking platform UI built with React, Vite, and Tailwind CSS.

---

## A. How to Run the Project

**Prerequisites:** Node.js (v18+ recommended) and npm.

```bash
# Install dependencies
npm install

# Start the development server (runs at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

- **Lint:** `npm run lint`

---

## B. How the Code Was Built

### Stack

- **React 19** with functional components and hooks
- **Vite 7** for dev server and production builds
- **React Router v7** for client-side routing
- **Tailwind CSS v4** via `@tailwindcss/vite` and `@reference "tailwindcss"` in component CSS
- **vite-plugin-svgr** to import SVGs as React components
- **Recharts** for dashboard charts (Overall Performance, Audit Readiness, QI Trend)

### Architecture

- **Layout:** Shared shell with `Layout` (sidebar + main area), `Header` (search, notifications, user; menu button hidden on desktop), and `Sidebar` (nav links, overlay on mobile). Header menu button is hidden on large screens via CSS.
- **Pages:** Three main screens—**Dashboard** (index), **Details** (project detail at `/projects/:projectId`), and **Perspectives** (at `/perspectives`). Each page composes layout + page-specific components.
- **Components:** Split into **layout/** (Header, Sidebar, Layout), **ui/** (Card, Button, Avatar, Tabs, StatusTag, BackTitleBar, SummaryCard, etc.), **dashboard/** (timeline, stats, progress grid, charts, activity widgets), **details/** (summary card, evidence cards, Overview/Evidence tabs, Leaders), and **perspectives/** (Details tab with overview rows + Leaders, Evidence tab with documents table, comments, recent activities).
- **Icons:** All icons live under `src/assets/icons/` in one folder per icon (e.g. `menu/menu.svg` + `index.js`). SVGs are imported as React components via `?react` and re-exported from `src/assets/icons/index.js` so components use `<MenuIcon />`, `<SearchIcon />`, etc. No inline SVGs in components.
- **Data:** Single `src/data/mockData.js` with static data for dashboard, project details, perspectives, evidence documents, comments, and activities. No backend or API.
- **Styling:** Component-scoped CSS files using Tailwind `@apply` and design tokens in `styles/global.css`. Tabs and overview rows follow Figma (e.g. active tab with light blue background, label/content boxes with gray-200 and white).

### Screens Implemented

1. **Dashboard** – Project timeline (year select, progress bar, milestones), stats cards, progress-by-perspectives grid, overall performance & audit readiness charts, top leaders, recent activities.
2. **Details (Screen 2)** – Back + title bar, summary card (category, title, subtitle, progress circle), evidence summary cards (Total / Under Review / In-Progress / Completed with HugeIcons), Overview and Evidence tabs. Overview: two-column rows (Objective, Implementation Requirements, Evidence Documents, Related Regulations, Scope) and Leaders section. Evidence: documents table, summary panel, recent activity.
3. **Perspectives (Screen 3)** – Same back + title bar and summary card, evidence summary cards, then **Details** and **Evidence** tabs only (no Timeline). Details tab reuses the overview layout (objective, implementation requirements, etc. + Leaders). Evidence tab: full-width documents table on top row; bottom row has Comments (list + textarea + Post Comment) and Recent Activities side-by-side, with sort icons in table headers and send/chat icons from assets.

---

## C. Assumptions Made

- **Data:** All content comes from `mockData.js`; no real API or authentication.
- **Routing:** Only `/`, `/perspectives`, and `/projects/:projectId` are fully implemented. Links like Tasks, Documents, Reports, Users point to existing routes or placeholders.
- **Details vs Perspectives:** Details page = single “project” detail (Digital Transformation Strategic Planning). Perspectives page = “perspective” view (Digital Transformation Strategy Meeting) with its own summary, evidence table, comments, and activities; data shape is similar but separate in mock data.
- **Design:** Implemented to align with provided Figma (tabs, cards, table, two-column overview, status pills, evidence icons). Some spacing and typography may differ. Logo/brand in sidebar is “TAHWUL”.
- **Icons:** Evidence cards use HugeIcons (file-search, file-export, file-validation, files-01) and shared UI icons (menu, search, bell, chevron-down, close, sort-up, sort-down, send, chat) from `src/assets/icons/`.
- **Accessibility:** Basic semantics (buttons, labels, aria-label where obvious); no full a11y audit.
- **Browser support:** Modern evergreen browsers; no polyfills beyond what Vite/React provide.

---

## D. What Would Be Improved With More Time

- **Routing & navigation:** Dedicated routes and placeholder pages for Tasks, Documents, Reports, Users; breadcrumbs and deeper linking (e.g. from dashboard to a specific project or perspective).
- **State & data:** React Query or similar for server state; React Context or Zustand for UI state (sidebar open, active filters); replace mock data with real API integration.
- **Accessibility:** Full keyboard navigation, focus trapping in modals/sidebar, ARIA live regions, reduced-motion and high-contrast considerations, and an a11y pass with axe or similar.
- **Loading & errors:** Skeleton loaders, error boundaries, empty states, and toast/feedback for actions (e.g. “Post Comment”).
- **Testing:** Unit tests for UI and data components (e.g. StatusTag, OverviewTab), integration tests for main flows (navigate to Details, switch tabs, submit comment).
- **Design fidelity:** Pixel-level alignment with Figma, responsive breakpoints and touch targets, and a simple design-token/theming layer for colors and spacing.
- **Evidence & comments:** Real table sorting/filtering, pagination, and wired “Post Comment” with optimistic updates and validation.
- **Performance:** Code-splitting per route, lazy-loaded tabs or heavy charts, and image/asset optimization if more media is added.
- **DX & quality:** Stricter TypeScript (or JSDoc types), shared PropTypes or component docs, and a minimal CI pipeline (lint + test + build).

---

## Figma Design

[UI/UX for Auditing system - Dashboard](https://www.figma.com/design/Rw2zGqPkuDgc2Azp9nDBmg/UI-UX-for-Audting-system---Dashboard--Copy-?node-id=344-196&t=ZzGGM1W7q0dZHtJw-1)
