---
name: Quinn
description: Personal brand site for Quinn Tintswalo Baloyi — fashion/beauty/lifestyle model, content creator, and brand ambassador.
colors:
  bg: "#121014"
  bg-pearl: "#1B171C"
  bg-blush: "#241620"
  bg-sky: "#101822"
  accent: "#FF4F81"
  accent-soft: "#7A4A5C"
  accent-deep: "#C9376B"
  accent-blue: "#4A90FF"
  accent-blue-soft: "#35547A"
  ink: "#F5F1F0"
  ink-soft: "#B79AA5"
  on-accent: "#14101A"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(4.5rem, 13vw, 9rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.1
  cta-title:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 500
  title:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 4vw, 2.75rem)"
    fontWeight: 500
  contact-title:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 600
  title-sm:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "2rem"
    fontWeight: 500
  brand-link:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.85rem, 2.6vw, 2.25rem)"
    fontWeight: 600
  logo:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "1.7rem"
    fontWeight: 600
  section-label:
    fontFamily: "Cormorant Garamond, Georgia, 'Times New Roman', serif"
    fontSize: "1.5rem"
    fontWeight: 600
  icon-glyph:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "1.9rem"
  lead:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.75
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  fact:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
  button-label:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  footnote:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
  note:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
  label:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  kicker:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.2em"
  caption:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
  meta:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    letterSpacing: "0.14em"
  tag:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    letterSpacing: "0.16em"
  micro:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif"
    fontSize: "0.65rem"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  flat: "2px"
  pill: "100px"
spacing:
  section: "7rem"
  section-tablet: "5rem"
  section-mobile: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.flat}"
    padding: "1.05rem 2.1rem"
  button-primary-inverse:
    backgroundColor: "{colors.bg-pearl}"
    textColor: "{colors.accent}"
    rounded: "{rounded.flat}"
    padding: "1.05rem 2.1rem"
    # bg-pearl is a dark lifted surface in this theme, so this is a dark
    # pill with vivid pink text, not a literal light/white "inverse" fill
  filter-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.25rem"
  filter-pill-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.25rem"
---

# Design System: Quinn

## Overview

**Creative North Star: "The Lookbook Cover"**

The site reads as a fashion lookbook's opening spread rather than a
templated influencer landing page: an editorial masthead, real
photography presented as tilted, layered "polaroid" cards (a hero
photo stack, and a photo-plus-peeking-accent-shape treatment on every
other page header), and kicker-plus-hairline labeling borrowed from
magazine contributor pages. The palette and type
pairing were pinned by the client brief (exact hex values and font
names supplied up front), so the visual world was never an open
concept choice — the craft lives in composition: the masthead's
oversized cover-line bleeding behind the panel, the asymmetric
contact-sheet portfolio grid, and the reused "at a glance" fact-list
pattern that ties About, Contact, and the brand profile pages together.

Confirmed rejection: no centered-headshot-plus-CTA-button template
hero, no icon+heading+text card grids, no flat neutral gray (every
dark value in the palette is warm-tinted, not a literal, cold `#000`;
every light value is warm off-white, not a literal, cold `#FFF`).

**Key Characteristics:**
- Editorial, not corporate-influencer: kickers, hairline rules, serif italic labels
- Dark editorial palette, two vivid accent hues — pop pink (primary) and electric blue (secondary) — each carrying its own light/dark shades, over near-black grounds with rose-black and navy-black section washes and warm off-white ink. Rebranded from an earlier light/pastel version of this same system (see the Colors section's history note) after the pastel washes read as too washed-out to register as an actual black+pink+blue+white brand
- One tilted-photo-plus-peeking-accent-shape motif reused at two scales: the hero's swipeable/autoplaying polaroid stack (masthead-size, Home only) and a single rotated photo with a vivid pink-to-berry gradient shape peeking from behind (page-header size, every other page)
- Flat surfaces, near-black shadows, near-zero border-radius except pill badges/buttons — **the one deliberate exception is the site header**, a glass surface (`backdrop-filter: blur`) that floats above page content, the system's only non-flat surface
- Motion is deliberately restrained: one authored focal sequence on the homepage, quiet shared support elsewhere — the shared support (`.reveal`) is scroll-triggered via `IntersectionObserver`, not a load-time animation, so it's actually seen rather than finishing off-screen before the visitor scrolls (see `PROJECT_NOTES.md`)

## Colors

Dark full-palette strategy — two accent hues, each owning a field-scale region rather than appearing as scattered accents, over near-black grounds. This is the **second** color system this project has carried:

1. A single-hue plum/orchid system (the site's original, inherited-copy state).
2. A light "soft & editorial" rose/navy system — muted rose + dusty navy over white/pastel washes, the first attempt at the requested black/pink/blue/white brief.
3. **This one** — after live review, (2)'s pastel washes read as too washed-out to register as an actual black+pink+blue+white brand ("colors don't pop," "unbalanced," blue barely visible on the homepage). Rebuilt as a genuinely dark theme: near-black grounds, a vivid pop pink, and an electric blue, so all four requested colors read as real, confident brand colors rather than muted suggestions of them. If revisiting this palette again, treat vividness/contrast against dark grounds as the goal, not restraint.

### Primary
- **Pop Pink** (`#FF4F81`, `--color-accent`): CTAs, headings-as-accent (the colored last letter in the wordmark), links, active states, the closing CTA section's full-bleed background, the nav logo/underline. ~6.2:1 contrast against the page background (`--color-bg`) — safe as running text/link color on any of the theme's dark grounds.

### Secondary
- **Muted Rose** (`#7A4A5C`, `--color-accent-soft`): decorative/structural only, deliberately low-contrast — hairline-rule tints, at-rest underlines/borders (`.text-link`, `.btn-secondary`) that solidify to Pop Pink on hover. **Never used as standalone text or a functional UI border** (see the Legible-Border Rule below).
- **Deep Berry** (`#C9376B`, `--color-accent-deep`): gradient depth stop for the rose family — pairs with Pop Pink in the `.page-header-photo-back` shape and the primary `.work-panel`/`.swatch` gradients.
- **Electric Blue** (`#4A90FF`, `--color-accent-blue`): the second accent hue — the Brands section's own color (`.brand-strip .kicker`, `.brand-row a`, its `--color-bg-sky` wash) and the blue-toned half of the six decorative `.swatch-N` gradients. Its own field-scale region, not a token that's declared but never actually shown. ~7.5:1 contrast on the page background.
- **Muted Navy** (`#35547A`, `--color-accent-blue-soft`): decorative-only light companion to Electric Blue, the same duty Muted Rose holds for the rose family (gradient stops, hover-state borders in the Brands section).

### Neutral
- **Near-Black** (`#121014`, `--color-bg`): primary page background.
- **Lifted Dark** (`#1B171C`, `--color-bg-pearl`): secondary surface — About-teaser, footer, brand-gallery sections, and the `.btn-primary-inverse` fill (a dark pill with pink text on the solid-pink closing CTA, not a literal light "inverse").
- **Rose-Black Wash** (`#241620`, `--color-bg-blush`): section-background role for the hero and every page-header masthead.
- **Navy-Black Wash** (`#101822`, `--color-bg-sky`): section-background role for the Brands page strip only, so the blue accent hue gets a field-scale region distinct from the rest of the site's rose-leaning grounds.
- **Ink** (`#F5F1F0`, `--color-ink`): primary text. A warm off-white, not a flat `#FFF` — also reused as the polaroid mat/border fill (a literal light "photo paper" surface that has to stay light regardless of theme) and as the nav/lightbox chrome color (links, close button, tag-pill text) wherever something needs to read against the dark glass or dark overlays.
- **Ink Soft** (`#B79AA5`, `--color-ink-soft`): secondary/muted text, tinted from the rose hue rather than gray (~5.9:1 on the page background, passes).
- **On-Accent** (`#14101A`, `--color-on-accent`): dark ink for text/icons sitting on *light or bright* surfaces — solid Pop Pink fills (`.btn-primary`, `.cta-close`), and the light `.work-tag`/`.polaroid-caption` pill/mat backgrounds. The inverse of `--color-ink`'s role: `--color-ink` is "the light neutral for dark grounds," `--color-on-accent` is "the dark neutral for light/bright ones."

### Named Rules
**The Warm-Extremes Rule.** Every dark value in the system is warm-tinted (`#121014`, `#14101A`, and the literal shadow/overlay tints `rgb(8,6,9)` / `rgb(0,0,0)`), and every light value is warm-tinted (`#F5F1F0`) — never a flat, cold `#000`/`#FFF` or neutral gray. Carried over from the original system's tinted-neutrals discipline, now applied at both ends of the range instead of just the dark end.

**The Soft-Shade-Is-Decorative Rule.** Muted Rose (`#7A4A5C`) and Muted Navy (`#35547A`) never carry body/label text or a functional control border; both are deliberately too low-contrast against the dark grounds for that (they're built to be *quietly* visible, not legible-as-text).

**The Legible-Border Rule.** Interactive outline elements that need to read clearly as controls — `.portfolio-filters button`'s at-rest border, for instance — use `--color-ink-soft` (~7.4:1 against the page background), not a Soft-Shade token, even though both are "secondary." Decorative hairlines (`--rule-soft`, `.kicker::after`) can stay quieter; a clickable control's outline can't.

**The Two-Neutral-Roles Rule.** `--color-ink` and `--color-on-accent` are inverses of each other, not interchangeable "text colors": `--color-ink` is light, for text/icons on the theme's dark grounds and glass/overlay chrome; `--color-on-accent` is dark, for text/icons on the theme's light-or-bright surfaces (solid accent fills, the polaroid mat, tag pills). Picking the wrong one is the single most common way to accidentally ship invisible text in this system — check what the immediate background actually is, not just "is this dark theme."

**The Rose/Blue Swatch Split.** The six `.swatch-N` placeholder gradients (brand campaign-preview galleries, pending real photography) split evenly: odd-numbered swatches (1, 3, 5) are rose-toned, even-numbered (2, 4, 6) are blue-toned. This isn't arbitrary — Azhyre Tech's gallery references swatches 1/3/5 (reads all-rose), Azhyre Fashion's references 2/4/6 (reads all-blue), and SerenQ's mixes both (1/3/6) — so the two brand pages that land monochrome-rose and monochrome-blue are a deliberate pairing with the swatch split, not a coincidence.

## Typography

**Display/Headline Font:** Cormorant Garamond (italic weight 500/600), with Georgia/Times New Roman fallback
**Body/UI Font:** Manrope (400/500/600/700), with system-sans fallback

**Character:** A high-contrast italic display serif (editorial, cover-line register) paired with a clean geometric grotesque for everything functional (nav, labels, body, buttons) — the magazine-masthead-meets-caption-line pairing.

### Hierarchy

The full ramp below is the real, complete scale — every literal `font-size` in `css/style.css` maps to one of these named steps. It's wider than a typical 4-role system because this is a rich editorial layout with many small label variants (kicker vs. tag vs. meta vs. caption); each step is a genuine, reused, intentional choice, not one-off drift.

**Display tier (Cormorant Garamond, italic):**
- **Display** (weight 600, `clamp(4.5rem, 13vw, 9rem)`, line-height 0.9): the homepage hero wordmark only. Deliberately exceeds the general 6rem display cap — an earned exception because the masthead's cover-line-bleeding-behind-the-panel concept only reads at this scale.
- **Headline** (weight 500, `clamp(2.75rem, 6vw, 4.5rem)`): every other page's `<h1>` in `.page-header`.
- **CTA Title** (weight 500, `clamp(2.25rem, 5vw, 3.5rem)`): the closing CTA's `<h2>`.
- **Title** (weight 500, `clamp(2rem, 4vw, 2.75rem)`): in-page section headings (`.about-grid h2`, `.work-intro h2`).
- **Contact Title** (weight 600, `clamp(1.75rem, 3.5vw, 2.5rem)`): the Contact page's email link.
- **Title Sm** (weight 500, 2rem): `.brand-index-name`.
- **Brand Link** (weight 600, `clamp(1.85rem, 2.6vw, 2.25rem)`): the homepage brand-partner row links. Sized up from an earlier 1.6rem — at that size the "In Partnership With" section (its own sky-wash field, `--color-bg-sky`) read as an underweighted, near-empty color block against its full section padding; the links now carry enough presence to justify the section on their own, per the polish pass in `PROJECT_NOTES.md`.
- **Logo** (weight 600, 1.7rem): the nav wordmark.
- **Section Label** (weight 600, 1.5rem): small serif labels like "About", "Bio", "Selected Work" — an italic-serif alternative to the uppercase kicker for variety.

**Body tier (Manrope):**
- **Lead** (400, 1.05rem, line-height 1.75): hero tagline, page-header intro, contact-social lines.
- **Body** (400, 1rem, line-height 1.8, max-width 58–65ch): paragraph copy.
- **Fact** (400, 0.95rem): `.glance-item dd` (the "at a glance" fact values).
- **Icon Glyph** (1.9rem, no letter-spacing): the lightbox × close glyph — sized as an icon, not running text.

**Label/meta tier (Manrope, mostly uppercase + tracked):**
- **Button Label** (700, 0.82rem, letter-spacing 0.08em): `.btn-primary`, `.btn-primary-inverse`, `.btn-secondary`.
- **Footnote** (400, 0.85rem): `.brand-back-link`, `.site-footer`.
- **Note** (400, 0.8rem): `.work-note`, `.lightbox-caption`.
- **Label** (700, 0.78rem, letter-spacing 0.1em): nav links, `.portfolio-filters button`, `.brand-index-arrow`.
- **Kicker** (700, 0.75rem, letter-spacing 0.2em): `.kicker` (the eyebrow-plus-hairline label).
- **Meta** (700, 0.7rem, letter-spacing 0.14em): `.glance-item dt`, `.portfolio-item-view` ("View" hover pill).
- **Micro** (700, 0.65rem, letter-spacing 0.14em): `.work-tag` (the smallest pill badge), `.polaroid-caption`.

### Named Rules
**The Earned-Exception Rule.** The hero wordmark's 9rem cap breaks the general 6rem display-size guideline on purpose — a brief-driven signature moment, not a habit. Don't extend the exception to any other heading.

## Layout

`.container`: max-width 1200px, centered, 1.5rem side padding (1rem at ≤900px). Section vertical rhythm uses a single `--section-pad` custom property: 7rem desktop → 5rem at ≤900px → 3.5rem at ≤600px.

Breakpoints: 900px (tablet — grids collapse to 1 column, hero-visual reorders above the copy) and 600px (mobile — nav becomes a slide-down panel, portfolio/work grids go single-column).

Recurring grid shapes: two-column asymmetric splits (`1.15fr/1fr` hero, `0.6–0.85fr / 1.15–1.4fr` bio/page-header/contact panels), a 6-column asymmetric span grid for the homepage portfolio teaser (one `span 4 / row 2` tile + two `span 2` tiles), a 3-column grid with occasional `span 2` "wide" tiles for the full Portfolio contact-sheet, and plain 3-equal-column grids for the reusable editorial list component (see Components → Editorial List).

## Elevation & Depth

Flat by default. Depth appears only as soft-blurred drop shadows on interactive/floating elements (buttons on hover, the polaroid cards/page-header photo, the lightbox panel) — never a neutral gray shadow. Two near-black tints are in use: `rgba(8, 6, 9, X)` (surface-level lift) and a slightly deeper, effectively pure `rgba(0, 0, 0, X)` (for elements that float furthest off the page — the pearl-background button and the lightbox). Both read as genuinely black shadows now, unlike the light-theme version of this system (where shadows were warm-tinted to satisfy a "never literal black" rule) — on a near-black page background, a shadow needs to be that dark to register as depth at all; the tinted-neutrals discipline from the Colors section applies to *surfaces* (backgrounds, text, fills), not to shadows.

### Shadow Vocabulary
- **Button Lift** (`0 14px 28px -14px rgba(8,6,9,.55)` → `0 20px 34px -12px rgba(8,6,9,.6)` on hover): `.btn-primary`.
- **Button Lift (Inverse)** (`0 14px 28px -14px rgba(0,0,0,.35)`): `.btn-primary-inverse` — the dark pearl-fill button uses the deeper tint since it sits on the solid pink CTA background.
- **Panel Float** (`0 32px 60px -22px rgba(8,6,9,.5)`): each `.polaroid-card` in the hero stack, and `.page-header-photo` on every other page.
- **Lightbox Lift** (`0 50px 90px -30px rgba(0,0,0,.65)`): the enlarged lightbox panel — the deepest shadow in the system, matching its topmost z-index.

### Named Rules
**The Shadows-Can-Be-Black Rule.** Unlike surface colors, shadow tints are allowed to be near-pure black (`rgb(8,6,9)`, `rgb(0,0,0)`) — the Warm-Extremes Rule governs backgrounds/text/fills, not shadows, which need maximum darkness to read as depth against an already near-black page.

## Shapes

Near-flat throughout: `2px` border-radius on cards, tiles, and buttons (an editorial, not-rounded feel). The one exception is pill shapes (`100px` radius) reserved for tag badges, filter buttons, and category labels — a deliberate contrast between "flat editorial surface" and "rounded UI control."

**Signature shape — tilted real photography with a peeking accent shape:** the hero's `.polaroid-stack` is a swipeable/autoplaying pile of real photo cards (`aspect-ratio: 3/4` slot, bleeding off the homepage hero's right edge and overlapping the wordmark) that replaced the original duotone silhouette panel placeholder. Every other page header keeps a smaller echo of that panel's two-layer look — `.page-header-photo-back` is a single `clip-path: polygon(...)` shape in a Pop Pink→Deep Berry gradient (vivid, not a subtle tonal wash — the dark-theme version deliberately makes this shape a visible pink glow rather than a barely-there tint), offset behind a rotated, slightly scaled-up real photo (`.page-header-photo`, `aspect-ratio: 3/4`) — so the pink shape peeks out from one edge the way the old silhouette's back layer did, just behind a photo instead of another gradient panel.

## Components

### Buttons
- **Shape:** 2px radius, solid fill, uppercase Manrope 700 label.
- **Primary** (`.btn-primary`): vivid pink fill, **dark** on-accent text (not light-on-color — Pop Pink isn't dark enough at this text size for reliable light-text contrast, so the button flips to dark text instead, same logic as the closing CTA), lift + deepen shadow on hover (`translateY(-3px)`), ripple on click.
- **Primary Inverse** (`.btn-primary-inverse`): dark pearl fill, vivid pink text — used on the solid-pink closing CTA background; reads as a dark pill against the bright fill rather than a literal light "inverse."
- **Secondary/Text** (`.btn-secondary`, `.text-link`): no fill; a muted-rose underline that solidifies to vivid pink on hover.
- **Filter pills** (`.portfolio-filters button`): transparent/outlined (ink-soft border, for legibility — see the Legible-Border Rule) at rest, solid pink when `.active`; ripple on click.

### Editorial List (signature component)
The site's recurring "contributor page" list pattern, reused with different content on four different pages: `.focus-list`/`.focus-item` (3-column, hairline-divided, heading+paragraph — Home's "What I Offer", About's "Where I Create", Contact's "Good to Know") and `.glance-list`/`.glance-item` (a `<dt>/<dd>` fact-list variant — About's "At a Glance", each brand page's "Partnership" block). Both are plain hairline-divided text, never bordered icon cards.

### Cards / Tiles
- **Corner:** 2px radius, `overflow: hidden`.
- **Background:** the full Portfolio grid and the homepage portfolio teaser now hold real photography (`<img>`, `object-fit: cover`); brand campaign-preview galleries still use duotone gradient "swatches" (`.swatch-1` through `.swatch-6`, defined in the palette family) standing in for real photography until their own photos arrive.
- **Overlay:** every tile — photo or swatch — gets the same radial soft-light highlight, via a `::after` on the tile itself (`.portfolio-item::after`, `.work-panel::after`, `.gallery-tile::after`) so it works whether the tile holds an `<img>` or a swatch span.
- **States:** `.portfolio-item` scales its image/swatch slightly and reveals a "View" pill on hover/focus; filtered-out tiles fade+scale out via `.is-hidden` before being set `hidden` (see PROJECT_NOTES.md for the CSS-specificity gotcha this required).

### Navigation (signature component, glass)
Manrope uppercase links with an animated underline (`transform: scaleX()`, not `width`, to avoid layout thrash). The header is a glass bar (`rgba(27,23,28,.78)`, a *lifted* dark tone — slightly brighter than the page's own near-black background — + `backdrop-filter: blur(18px) saturate(160%)`) with faint pulsing "water droplet" ring outlines (`.glass-ripples`, 6 staggered rings, `@keyframes ripple-pulse`) — the system's one intentionally non-flat, non-editorial surface. Because the whole theme is now dark (not just the nav, as in the original light-mode version of this system), the header's separation from page content comes from that lift + the blur + a hairline bottom border, not from a light-page/dark-nav contrast — worth reconfirming visually if this palette changes again. Content (logo/links/toggle) is capped to the same 1200px column as the rest of the page via a `.nav-inner.container` child, but the glass bar itself spans the full viewport width edge-to-edge, not just that column. It resizes on scroll: fully grown at the very top, shrunk any time `scrollY > 0` (whether scrolling up or down), and gains a lifting drop-shadow (`.is-shadow`) any time it isn't at that resting top position, so it reads as hovering above content rather than flush with it.

**Desktop-only: fixed overlay + auto-hide.** Above 900px, the header is `position: fixed` rather than in-flow — it floats over the hero/page-header instead of pushing that content down, so the hero starts at the true top of the viewport with the glass bar (and its backdrop blur) overlaid on top of it. It also hides (`.is-hidden`, `transform: translateY(-100%)`) while actively scrolling down, and reappears the instant the user scrolls up, so it doesn't permanently occupy screen space over page content but is always one upward scroll away. At ≤900px this all reverts to the original in-flow `position: sticky` header that simply pushes content down and never hides — the overlay/auto-hide treatment is desktop-only.

Mobile: a two-bar hamburger that morphs into an X (`.nav-toggle[aria-expanded="true"]`), opening `.nav-collapse` as a fixed off-canvas drawer (not an in-flow accordion) that slides in from the right over a dimming `.nav-scrim` backdrop — same dark glass and ripple treatment as the header bar, top-aligned links (not vertically centered). Closes via the same toggle button (now an X), a tap on the scrim, or Escape. At ≤600px the header's resting (top-of-page) size matches its already-shrunk scrolled size, rather than growing larger at rest — per feedback that the larger resting size read as too big on mobile.

**Nav text/logo colors:** `.site-nav ul li a` and the mobile drawer's links use `--color-ink` (the theme's light neutral — correct here since it's `body`'s own default text color, unlike the light-theme version of this system where the nav needed an *inverted* light color against its one dark surface). The logo and hover-underline use `--color-accent` (vivid pink) for brand presence against the glass; ripple rings use a light pearl-ish outline. If this ever becomes a light-on-dark-nav-in-a-light-page system again, re-audit every `--color-ink`/`--color-bg-pearl` reference here — see the Two-Neutral-Roles Rule in Colors, since that's exactly the kind of role confusion it exists to catch.

### Lightbox (signature component)
A fixed, centered overlay (`.lightbox-overlay`) that fades and scales in a single enlarged panel — a real `<img>` for the Portfolio grid's photos, a swatch-tinted panel for anything still on placeholder imagery. Width is capped against *both* viewport width and viewport height (converted through the panel's 4:5 ratio) so the close button and caption can never overflow off-screen on a short viewport.

### Polaroid Stack (signature component, hero)
A pile of real photo cards (`.polaroid-stack` > `.polaroid-card`) in the homepage hero, replacing the old duotone silhouette panel in the same slot and reusing its one-time `page-open` 3D entrance. Front card centered/unrotated; back cards sit in fixed scatter "slots" (randomized only on reshuffle, not on every cycle) so cycling reads as one photo sliding back and the next rising to front. Autoplays on a timer (paused off-screen, disabled under reduced motion), swipeable (drag flips which direction autoplay continues in), double-tap/-click or Enter reshuffles the scatter, arrow keys cycle. No-JS fallback is a fixed (non-random) fanned arrangement via CSS `nth-child` rules.

### Page-Header Photo (signature component, every other page)
A quieter, page-header-scale echo of the same idea: a single real photo (`.page-header-photo`), rotated and scaled up slightly, with a rose `clip-path` shape (`.page-header-photo-back`) peeking out from behind on one side — same visual logic as the polaroid stack's front-card-over-back-layer look, at a single-photo scale. `aspect-ratio: 3/4` (portrait, matching the source photos and the hero's original proportions — a 4:3 landscape frame cropped these portrait phone photos too aggressively). Which photo shows is picked at random client-side on each page load from a fixed set, so the page/photo pairing isn't static.

## Do's and Don'ts

### Do:
- **Do** keep backgrounds/text/fills warm-tinted at both extremes — check new colors against the Warm-Extremes Rule. (Shadows are the one exception — see Elevation & Depth.)
- **Do** check which of `--color-ink` (light, for dark grounds) or `--color-on-accent` (dark, for light/bright surfaces) actually matches an element's immediate background before reusing either — see the Two-Neutral-Roles Rule.
- **Do** reuse the editorial-list pattern (`.focus-list`/`.glance-list`) for any new "several short facts" content rather than inventing icon cards.
- **Do** use `--ease-out-expo` (`cubic-bezier(0.16, 1, 0.3, 1)`) for all deliberate motion; it's the system's one easing curve.
- **Do** treat the tilted-photo-plus-peeking-accent-shape pattern (`.polaroid-stack` on Home, `.page-header-photo-frame` everywhere else) as the site's default way of presenting real photography in the hero/masthead position — it replaced the old duotone-silhouette placeholder now that real photos exist for every one of those slots.
- **Do** favor vividness/contrast over restraint when choosing accent values against these dark grounds — the previous pastel version of this palette under-delivered on "black, pink, blue, white" precisely by being too restrained; err toward a color reading as a real, confident brand color rather than a muted suggestion of one.

### Don't:
- **Don't** use Muted Rose (`#7A4A5C`) or Muted Navy (`#35547A`) as text color or a functional control border — both are deliberately too low-contrast for that; they're fills/hairlines/at-rest-underline tokens only.
- **Don't** animate `width`/`height`/`padding`/`margin` for hover or state feedback; use `transform`/`opacity` (the nav underline and brand-index-row hover were both fixed for exactly this). **Confirmed exception:** the header's scroll-shrink `transition: padding` — a `transform: scale()` would visually distort the logo/link text instead of the box genuinely resizing, and it's one small element transitioning at most once per scroll-direction change, not a per-frame animation. Don't extend this exception to anything else without the same reasoning holding.
- **Don't** add icon+heading+text card grids; the system's list pattern is hairline-divided text, not bordered cards.
- **Don't** extend the hero wordmark's 9rem display-size exception to any other heading.
- **Don't** extend the glass/backdrop-blur treatment beyond the site header/nav — it's a deliberate, one-surface exception to the "flat by default" rule, not a new standing pattern for cards, panels, or other components.
