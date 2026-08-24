# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences share this site:

1. **Brands, agencies, and collaborators** evaluating Quinn for modeling, content, or partnership work — deciding whether to book or reach out to her.
2. **General visitors** browsing her fashion/beauty/lifestyle portfolio and discovering the Azhyre/SerenQ brand ecosystem she's affiliated with.

## Product Purpose

A personal portfolio for Quinn Tintswalo Baloyi, a fashion/beauty/lifestyle model and content creator, that showcases her work and her role as brand ambassador for Azhyre Tech, Azhyre Fashion, and SerenQ. Success means a visitor can browse/filter her portfolio, learn who she is, find the brands she's connected to, and reach her.

## Positioning

Open decision: the site combines a personal-portfolio identity with a hub pointing to three affiliated brand ventures (Azhyre Tech, Azhyre Fashion, SerenQ). The precise differentiation of Quinn's role relative to those brands (exclusive ambassador vs. one of several, founder involvement, etc.) has not been confirmed and should not be assumed.

## Operating Context

Static site, no backend or build step, deployed via GitHub Pages. `CNAME` currently holds a placeholder domain (`example.com`) pending Quinn's real one. Pages: Home (`index.html`), About (`about.html`), Portfolio (`portfolio.html` — filterable by fashion/beauty/lifestyle with a lightbox), Brands (`brands/index.html` plus `azhyre-tech.html`, `azhyre-fashion.html`, `serenq.html`), and Work With Me (`contact.html`). Shared nav/footer across all pages; `js/main.js` drives the mobile nav toggle, portfolio filters, and lightbox; styles split between `css/style.css` (base) and `css/responsive.css` (breakpoints).

## Capabilities and Constraints

- Filterable portfolio grid with lightbox, no CMS — portfolio items are hand-added `<a>`/`<img>` entries per the commented example in `portfolio.html`.
- Mobile nav toggle via `js/main.js`.
- Contact mechanism: `contact.html` has a mailto link and Instagram/TikTok/Facebook social links — currently all placeholder values (`hello@example.com`, `@yourhandle`, etc.), pending Quinn's real contact info.
- Brand pages (`brands/*.html`) are structurally scaffolded but have no real content per brand yet.

## Brand Commitments

- Site identity/name: "Quinn" (full name: Quinn Tintswalo Baloyi).
- Affiliated brands, current relationship confirmed as model/content creator and ambassador: **Azhyre Tech**, **Azhyre Fashion**, **SerenQ**. Further specifics of each brand relationship (equity, employment, exclusivity) are not established.

## Evidence on Hand

This project started as a copy of an earlier build (for a different model, "Eullie") repurposed for Quinn — the portfolio photography, page copy, and images still belong to that earlier build and are marked for replacement, not confirmed as Quinn's own work. Every page still holds placeholder-adjacent copy pending a real rewrite in Quinn's voice, and brand campaign galleries still have no real photos. Future work must not invent bio details, photos, testimonials, brand descriptions, pricing, or contact information — this content will be supplied later.

## Product Principles

1. Portfolio and brand hub are equal citizens — nav and home should serve both without either crowding out the other.
2. Build structure and design system ahead of content, but never fabricate copy, photography, or brand facts to fill gaps.
3. The fashion/beauty/lifestyle imagery is the primary evidence of credibility once supplied — the display craft around that imagery (grid, filtering, lightbox) matters more than dense text.
4. Keep the stack lightweight and static — no build step, deployable as-is to GitHub Pages.

## Accessibility & Inclusion

No product-specific requirement established yet.
