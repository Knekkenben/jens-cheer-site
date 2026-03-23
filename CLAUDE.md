# Cheer Is A Sport — Project Guide

## Overview

Competitive cheer apparel brand website. Originally named "Jen's Cheer", rebranded to **Cheer Is A Sport** (abbreviated **CIAS**). This is a marketing/e-commerce-style site for branded cheer apparel — competition wear, practice wear, spirit wear, and accessories.

Inspired by [procheerleague.com](https://procheerleague.com/) — bold, modern, high-energy sports branding.

## Owner Preferences

- The owner does not code — all changes should be fully implemented, committed, and pushed without asking for code input.
- Provide exact change instructions when possible; minimize back-and-forth.
- Changes auto-deploy via GitHub Pages from the `main` branch. No manual deploy steps needed.

## Deployment

- **GitHub repo:** `Knekkenben/jens-cheer-site`
- **Live URL:** https://knekkenben.github.io/jens-cheer-site/
- **Hosting:** GitHub Pages, deployed from `main` branch, root `/`
- Pushes to `main` auto-deploy within ~1-2 minutes.

## Folder Structure

```
jens-cheer-site/
├── index.html          # Single-page homepage (all sections)
├── favicon.svg         # Pyramid logo favicon (pink SVG)
├── CLAUDE.md           # Project guide and context for AI assistants
├── css/
│   └── style.css       # All styles — layout, components, responsive breakpoints
├── js/
│   └── main.js         # Interactions — mobile menu, scroll animations, cart, newsletter
└── images/             # (empty) Reserved for future product images
```

## Files

### `index.html`
The entire site is a single-page layout with anchor-linked sections. No routing or multi-page setup.

### `css/style.css`
All styling in one file. Uses CSS custom properties (variables) for theming. Fully responsive with breakpoints at 1024px, 768px, and 480px.

### `js/main.js`
Vanilla JavaScript (no frameworks). Handles:
- Mobile hamburger menu toggle
- Sticky navbar that hides on scroll-down, shows on scroll-up
- IntersectionObserver-based scroll reveal animations
- Newsletter form submission (client-side only, shows "SUBSCRIBED!" feedback)
- Quick Add buttons on products (increments cart count badge)
- Smooth scrolling for anchor links
- Marquee text duplication for seamless looping

## Design System

### Brand Name
**Cheer Is A Sport** — displayed as pyramid icon + two-tone text logo:
- Pyramid SVG icon in pink (`.logo-pyramid`) — 28px, appears in both navbar and footer
- "CHEER IS" in white (`.logo-cheer-is`)
- "A SPORT" in pink (`.logo-a-sport`)
- Logo uses `align-items: center` for flex alignment

### Color Palette (CSS Variables)
| Variable        | Value      | Usage                        |
|-----------------|------------|------------------------------|
| `--pink`        | `#FF2D8A`  | Primary brand color, CTAs    |
| `--pink-light`  | `#FF6B9D`  | Gradients, accents           |
| `--pink-dark`   | `#C71585`  | Hover states, dark accents   |
| `--gold`        | `#FFD700`  | Star ratings                 |
| `--black`       | `#0a0a0a`  | Page background              |
| `--dark`        | `#111111`  | Alternating section bg       |
| `--dark-card`   | `#161616`  | Card backgrounds             |
| `--gray`        | `#888888`  | Body text, subtitles         |
| `--light-gray`  | `#cccccc`  | Secondary text               |
| `--white`       | `#ffffff`  | Headings, primary text       |

### Typography
- **Display font:** `Bebas Neue` — used for all headings, logo, prices, stats (via `--font-display`)
- **Body font:** `Inter` (weights 300–700) — used for body text, buttons, labels (via `--font-body`)
- Loaded from Google Fonts

### Layout
- Max content width: `1200px` (`.container`)
- Dark theme throughout (black/dark gray backgrounds)
- Sections alternate between `--black` and `--dark` backgrounds
- All sections use `100px` vertical padding
- Cards use `8px` border radius
- Gradient backgrounds used as placeholder imagery (no actual images yet)

## Homepage Sections (in order)

1. **Announcement Bar** — Pink banner with free shipping promo
2. **Navigation** — Fixed/sticky navbar with logo, 5 nav links (Shop, Collections, About, Custom Orders, Contact), search icon, cart icon with count badge, mobile hamburger
3. **Hero** — Full-viewport section with:
   - Tag: "2026 COMPETITION SEASON"
   - Headline: "BUILT BY DISCIPLINE. DRIVEN BY HEART. DEFINED BY SPORT." (3-line slogan)
   - Subtitle text
   - Two CTAs: "SHOP NOW" (filled) + "VIEW COLLECTIONS" (outline)
   - **Pyramid logo watermark** — large semi-transparent SVG behind the headline (`.hero-logo-watermark`), pink at 12% opacity, 500px desktop / 300px mobile, positioned at `top: 45%` desktop / `top: 40%` mobile to center on headline text
   - Animated pink radial gradient background with pulse effect
   - Scroll indicator at bottom
4. **Marquee** — Pink scrolling banner with brand slogans ("CHEER IS A SPORT", "COMPETITION READY", "BOLD & FIERCE", etc.)
5. **Collections** (`#collections`) — 2-column grid with 4 collection cards:
   - Competition (large, spans 2 rows)
   - Practice Wear
   - Spirit Wear
   - Accessories
6. **Best Sellers / Shop** (`#shop`) — 3-column product grid with 6 products:
   - Competition Crop Top ($44.99) — BEST SELLER badge
   - Glitter Bow — Signature Pink ($24.99) — HOT badge
   - Squad Duffle Bag ($64.99) — NEW badge
   - Varsity Hoodie — Black ($59.99)
   - Performance Leggings ($49.99)
   - Rhinestone Practice Tee ($34.99) — NEW badge
   - Each card has: gradient placeholder image, star rating, quick-add button on hover
7. **About** (`#about`) — Two-column layout:
   - Left: Pink gradient placeholder with "EST. 2026"
   - Right: Brand story text, 3 stats (500+ Squads, 50K+ Athletes Wearing CIAS, 100% Passion)
8. **Custom Team Orders** (`#custom`) — Centered section for gym/team bulk orders with 4 feature checkmarks (custom colors, bulk discounts, name personalization, 4-week turnaround)
9. **Testimonials** — 3-column grid with reviews from Coach Maria T., Sarah K., and Ashley R.
10. **Newsletter / Contact** (`#contact`) — Email signup form with 15% off offer, social links (Instagram, TikTok, Facebook, X)
11. **Footer** — 4-column grid (brand + tagline, Shop links, Company links, Support links), payment method badges, copyright

## Responsive Breakpoints

- **1024px:** Product grid → 2 columns, footer → 2 columns
- **768px:** Mobile nav (hamburger menu), single-column collections, 2-column products, single-column about/testimonials/footer, stacked newsletter form, announcement bar text shrunk to `0.5rem`, hero watermark shrunk to 300px
- **480px:** Single-column products, stacked hero CTAs

## Product Badge Colors
- Default (BEST SELLER): `--pink` (#FF2D8A)
- HOT: `#ff6b35` (orange)
- NEW: `#7c3aed` (purple)

## Hero Font Sizing
The hero headline uses a 3-line slogan and has been carefully sized:
- Desktop: `clamp(3.2rem, 8vw, 6.5rem)`
- Mobile (≤768px): `clamp(2.2rem, 9vw, 3.5rem)`

## Button Styles
- **Primary (`.btn-primary`):** Pink background, white text, hover darkens + lifts + pink glow shadow
- **Outline (`.btn-outline`):** Transparent with white border, hover fills white with black text
- All buttons: uppercase, 0.85rem, 600 weight, 0.1em letter-spacing

## Animations
- Hero background: pulsing radial gradient (`pulse` keyframe, 4s)
- Scroll indicator: pulsing line (`scrollPulse` keyframe, 2s)
- Marquee: continuous horizontal scroll (`marquee` keyframe, 20s)
- Scroll reveal: elements fade in + slide up on viewport entry (IntersectionObserver)
- Navbar: hides on scroll-down, reappears on scroll-up
- Product cards: lift on hover with pink glow shadow, quick-add slides up from bottom
- Collection cards: image scales up on hover

## Notes
- **Pyramid logo** — inline SVG (stacked horizontal trapezoids forming a pyramid shape). Used in 3 places: navbar logo, footer logo, and hero watermark. Also used as the favicon (`favicon.svg`).
- No actual product images yet — using CSS gradient backgrounds with faint SVG icons as placeholders
- The `images/` directory exists but is empty — reserved for future product images
- No backend — newsletter form and cart are frontend-only (visual demos)
- No frameworks or build tools — plain HTML/CSS/JS
- All icons are inline SVGs (no icon library dependency)
