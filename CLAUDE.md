# CLAUDE.md — The LivingOS Landing Page

## Workflow Rules

- **Do not run the dev server, verify skill, or any browser/test automation until the user explicitly says they are done with improvements and ready to test.**

---

## Project Overview

Thai B2B PropTech SaaS marketing site for **The LivingOS** — a property management platform targeting condominium juristic entities (นิติบุคคล), property managers, and accounting teams. The site is a full multi-page marketing site with a scroll-animated home page and dedicated inner pages for each product, solution, and company section.

**Business context:** LivingOS is positioned as "No.1 Property Management System in Thailand." The full product suite:
- **PMS** — Core property management system (juristic dashboard, billing, resident directory)
- **Urbanice App** — Resident mobile app (parcel, facility booking, payments, visitor e-stamp)
- **GuardOS suite** — i-Pass (visitor management), Smart Gate (auto barrier), i-Check (security patrol), SOS (emergency alerts)
- **Services** — i-Vote (AGM voting), EIA (environmental impact), Turnkey (implementation), Academy (training)
- **Living Mart** — Home service marketplace
- **API Solution** — Integration layer for third-party systems

**Site sections (nav):** HOME · Solutions · Company · Blog · Log in

---

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| Astro | ^6.3.8 | Static site framework (`.astro` components, SSG) |
| Tailwind CSS | ^4.3.0 | Utility classes via `@tailwindcss/vite` Vite plugin |
| GSAP | ^3.15.0 | Entrance animations + ScrollTrigger scroll pins |
| IBM Plex Sans Thai Looped | — | Primary UI font (Thai + Latin) |
| IBM Plex Mono | — | Numbers, overlines, metadata |

**Node requirement:** `>=22.12.0`

**Dev server:** `npm run dev` → `http://localhost:4321`

---

## Design System

### Philosophy
**Bright · Warm · Friendly** — trusted enough for enterprise finance, approachable enough for building managers with no tech background. Thai-first copy, warm neutral palette (never cool gray), real photography over abstract blobs.

#### Mood & Tone
- **Trusted** — ข้อมูลถูกต้อง โปร่งใส ไม่หลอกลวง
- **Warm** — เป็นมิตร ไม่เย็นชาแบบ corporate
- **Modern** — ทันสมัย แต่ไม่ trendy จนเกินไป
- **Thai-first** — ภาษาไทยเป็นภาษาหลัก UI copy กระชับ ตรงประเด็น
- **Contextual** — ภาพ background สะท้อน context จริง (เมือง, อาคาร) ไม่ใช่ abstract blob

#### Target Segment
- นิติบุคคล / ผู้จัดการอาคาร
- ทีมบัญชีโครงการ
- ผู้บริหารระดับ management ของโครงการ

### Color Tokens (`src/styles/global.css` `@theme`)

```
Primary blue:    #1C70F7  (hover: #1560D8, light: #4D8EF9, tint: #DDEAFF, subtle: #EEF4FF)
Page bg:         #FFFFFF
Surface:         #F5F3EE
Overlay/tab-bg:  #EEEAE2
Border light:    #E8E4DA
Border mid:      #D4CFC4
Orange accent:   #F97316  (tint: #FFEDD5, subtle: #FFF7ED)
Text scale:      #1A1A1A → #3D3D3D → #6B6B6B → #9A9A9A → #C4C4C4
Gold (eyebrow):  gradient #F5E27A → #C9A000 → #F5E27A
```

**Semantic colors:**
```
Success:  text #16A34A / icon #22C55E / bg #F0FDF4 / border #BBF7D0
Warning:  text #A16207 / icon #EAB308 / bg #FEFCE8 / border #FEF08A
Error:    text #DC2626 / icon #EF4444 / bg #FEF2F2 / border #FCA5A5
```

**Rule:** All shadows use warm-tinted rgba — `rgba(60,45,20,...)` not `rgba(0,0,0,...)`.
`--shadow-sm/md/lg` and `--shadow-blue` are defined in `@theme`.

### Typography

| Token | Size  | Weight | Letter-spacing | Usage |
|-------|-------|--------|----------------|-------|
| 5xl   | 60px  | 700    | −0.025em       | Hero / Display |
| 4xl   | 48px  | 700    | −0.02em        | Page title |
| 3xl   | 38px  | 700    | −0.015em       | Section h1 |
| 2xl   | 30px  | 600    | −0.01em        | Card title, h2 |
| xl    | 24px  | 600    | 0              | h3, subsection |
| lg    | 20px  | 500    | 0              | Lead text, h4 |
| md    | 17px  | 300    | 0              | Body large |
| base  | 15px  | 400    | 0              | Body default |
| sm    | 13px  | 400    | 0              | Caption, helper |
| xs    | 11px  | 500    | +0.10em        | Overline (MONO, UPPERCASE) |

- **Headings:** IBM Plex Sans Thai Looped, weight 700, `line-height: 1.1–1.25`
- **Body:** same font, weight 400, `line-height: 1.65`
- **Overline/mono labels:** IBM Plex Mono, 11px, weight 500/600, `letter-spacing: .10em`, uppercase
- **Currency numbers:** IBM Plex Mono always

### Spacing

Base unit = 4px

```
sp-1   4px     sp-6   24px    sp-12  48px
sp-2   8px     sp-8   32px    sp-16  64px
sp-3   12px    sp-10  40px    sp-20  80px
sp-4   16px
```

Section padding between major sections: **80px**

### Border Radius

```
r-sm    6px
r-md    10px   — form inputs, small buttons
r-lg    14px   — cards default, alerts
r-xl    20px   — large cards, modals
r-2xl   28px   — hero section, cover card
r-full  9999px — pills, badges, chips, trust badges
```

### Key CSS Utilities (defined in `global.css`)
- `.container-los` — max-width 1280px, auto margin, responsive side padding
- `.section-pad` — 80px/96px top+bottom
- `.btn-3d` — 3D embossed button (cofounder.co technique): layered gradient + inset bevel shadows
- `.overline` — mono uppercase label style
- `.reveal-up / .reveal-left / .reveal-right` — start opacity:0 for GSAP to animate in
- `.hero-word / .hero-mockup` — hero elements targeted by GSAP entrance timeline
- `.dot-grid` — subtle blue dot-grid background for inner sections
- `.marquee-track` — logo marquee (CSS animation, pause on hover)

---

## File Structure

```
src/
├── layouts/
│   └── BaseLayout.astro          # HTML shell: <head>, fonts, Navbar, slot, Footer
├── pages/
│   ├── index.astro               # Home page — scroll sections + imports gsap-init
│   ├── login.astro               # Login (standalone)
│   ├── request-demo.astro        # Request demo form
│   ├── privacy.astro             # Privacy policy
│   ├── terms.astro               # Terms of service
│   ├── cookies.astro             # Cookie policy
│   ├── blog/
│   │   └── index.astro           # Blog index (structure TBD)
│   ├── company/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── investors.astro
│   └── solutions/
│       ├── pms.astro             # PMS — core property management
│       ├── urbanice.astro        # Urbanice App — resident mobile app
│       ├── i-pass.astro          # i-Pass — visitor management
│       ├── smart-gate.astro      # Smart Gate — auto barrier
│       ├── i-check.astro         # i-Check — security patrol
│       ├── sos.astro             # SOS — emergency alerts
│       ├── i-vote.astro          # i-Vote — AGM voting
│       ├── eia.astro             # EIA — environmental impact assessment
│       ├── turnkey.astro         # Turnkey — full implementation service
│       ├── academy.astro         # Academy — training & certification
│       ├── living-mart.astro     # Living Mart — home service marketplace
│       └── api.astro             # API Solution — integration layer
├── styles/
│   └── global.css                # Tailwind v4 @import + @theme tokens + @layer utilities
├── scripts/
│   └── gsap-init.ts              # All GSAP: hero entrance, scroll reveals, WhyNav pin, stat counters
└── components/
    ├── nav/
    │   └── Navbar.astro          # Fixed header: logo + nav pills + CTA + mobile drawer
    ├── footer/
    │   └── Footer.astro
    ├── shared/                   # Reusable across inner pages
    │   ├── InnerHero.astro       # Inner-page hero with badge, headline, accent word, CTA pair
    │   ├── InnerFAQ.astro        # Accordion FAQ block for solution/company pages
    │   └── SolutionOverview.astro # Feature grid used on solution detail pages
    └── home/
        ├── Hero.astro            # Gold eyebrow → headline → CTA buttons → trust pills → YouTube iframe
        ├── HeroProductMockup.astro  # Extracted product mockup (PMS/Urbanice/GuardOS/i-Vote tabs)
        ├── ProductsOverview.astro
        ├── WhyLivingOS.astro     # 2-column Airtable-style: sticky left nav + scrolling gradient panels
        ├── Licensing.astro
        ├── DataSecurity.astro
        ├── SocialProof.astro
        ├── CustomerReview.astro
        ├── FAQ.astro
        └── CTABanner.astro
```

**Home page section order** (index.astro):
Hero → ProductsOverview → WhyLivingOS → Licensing → DataSecurity → SocialProof → CustomerReview → FAQ → CTABanner

---

## Key Components

### Hero (`Hero.astro`)
- Layout: full-width YouTube video at top + `.hero-copy-card` overlapping up from below
- Video: 16:9 iframe, `border-radius: 20px`, `box-shadow: var(--shadow-lg)`, inside `.hero-stage` (max-width 1210px)
- Copy card: `margin-top: -208px`, `margin-left: 64px`, `border-radius: 28px 28px 0 0`, `background: var(--color-warm-page)`
- Gold eyebrow pill with shimmer sweep animation (award/No.1 only — never blue on hero)
- H1: `clamp(28px, 3.8vw, 48px)`, keyword in `var(--color-primary)`
- CTA row: primary blue button + warm surface secondary button + inline trust pills after divider
- Trust pills: simple checkmark + text label, hidden on tablet/mobile (`display: none` at `max-width: 1279px`)

### WhyLivingOS (`WhyLivingOS.astro`)
- Layout: CSS Grid `220px 1fr`, `gap: 64px`, `align-items: start`
- Left aside `.why-nav` has `align-self: stretch` (required so GSAP pin has room to scroll)
- `#whyNav` div inside aside is pinned by GSAP ScrollTrigger — **do not use CSS `position: sticky`**
- Right side: 4 `.why-panel-anchor` stacked divs — each a colored gradient card (blue / teal-navy / dark-navy / orange)
- Each card has: top row (heading + body text + white CTA pill) + bottom row (glass UI illustration only — no bullet points)
- Nav active state driven by `IntersectionObserver` (threshold 0.4)

### Navbar (`Navbar.astro`)
- Fixed header `z-50`, transparent by default
- On scroll >60px: `.navbar-scrolled` adds frosted glass + warm carved shadow
- Mobile: slide-in drawer with hamburger toggle

### GSAP (`gsap-init.ts`)
All animations live in one file, imported once in `index.astro`:
1. `initHero()` — timeline: `.hero-word` stagger → `.hero-cta` stagger → `.hero-mockup` fade-up
2. Scroll reveals — `.reveal-up/left/right` + `.reveal-stagger` via `ScrollTrigger`
3. `initWhyNav()` — `ScrollTrigger.create({ pin: '#whyNav', pinSpacing: false })`
4. Stat counters — `.stat-number[data-target]` count-up on enter

**Rule:** Always use `fromTo()` not `from()` — prevents invisible-content bugs when animations don't trigger.

---

## Development Conventions

- **Tailwind v4** — `@import "tailwindcss"` in global.css; design tokens via `@theme {}` (not `tailwind.config.js` extend). Reference tokens with `var(--color-*)` in inline styles or `@layer components`.
- **Scoped styles** — component-specific CSS goes in the component's `<style>` block (Astro auto-scopes). Shared utilities belong in `global.css`.
- **Inline styles for one-offs** — complex layout or responsive sizing uses `style=""` directly rather than adding new Tailwind classes.
- **No `position: sticky` in CSS Grid** — sticky children inside a grid item with `align-items: start` don't work (item height = content height). Use GSAP `ScrollTrigger` pin instead.
- **GSAP target classes must be present in DOM** — `initHero()` checks `!words.length` and returns early if `.hero-word` not found. Always add class to elements before GSAP targets them.
- **Port:** Dev server runs on `4321`. If port conflict: `pkill -f "astro dev"` then restart.

---

## What NOT to Do

- No cool gray shadows `rgba(0,0,0,...)` — always warm-tinted
- No Bootstrap palette (#0d6efd, #6c757d) or fonts (Inter, Roboto, Sarabun)
- No blue eyebrow badge on hero — gold plate only
- No dark (`#0A0A0F`) canvas on marketing pages
- No abstract blobs/noise as hero background — use real photography + gradient mask
- No `position: sticky` inside CSS Grid items for scroll-following — use GSAP
- No `from()` in GSAP — use `fromTo()` always
- No Thai word "ลบ" for soft-delete/cancel — use "ยกเลิก" or "นำออก"
- No `#F0F0F0` or cool gray anywhere — every neutral must have warm undertone
- No gradient text on body copy — only on special display headlines
- No Ghost button with `background: transparent` on photo backgrounds — must have white bg
- No Bootstrap icon pack — use Lucide or Tabler (outline only)
- No section backgrounds alternating plain white/gray without an accent section
