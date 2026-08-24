# Project Notes — Eullie Portfolio

Operational handoff doc: build status, remaining placeholders, and
technical implementation details that don't belong in `PRODUCT.md`
(product truth) or `DESIGN.md` (visual system). Read those two first;
this file assumes them.

<!-- impeccable:project-notes 1 -->

## Orientation

- Static site, no build step, no framework, no npm. Open `index.html`
  directly or serve the folder with any static server.
- Deployed via GitHub Pages; `CNAME` currently holds a placeholder
  domain (`example.com`), pending a real one.
- Site name is **Quinn** (full name Quinn Tintswalo Baloyi). This repo
  started as a copy of an earlier build for a different model, "Eullie"
  (itself renamed from an even earlier "Lettie" placeholder) — every
  file was updated to match Quinn's name, and the palette was reworked
  from plum/orchid to a dusty-rose/navy-blue system (see `DESIGN.md`).
  The portfolio photography, bio copy, and page images are still
  Eullie's and are marked for replacement with Quinn's own, not
  confirmed as her content yet.
- Shared across every page: `css/style.css` (base + design system),
  `css/responsive.css` (900px/600px breakpoints), `js/main.js` (glass
  nav toggle/scroll-shrink, portfolio filters, lightbox, ripple,
  looping typewriter, hero polaroid stack, random page-header photo).
- Fonts: Google Fonts CDN (`Cormorant Garamond` + `Manrope`), loaded
  per-page via `<link>` in `<head>` with `display=swap`.

## Build status per page

| Page | Status |
|---|---|
| `index.html` (Home) | Full build: masthead hero w/ looping typewriter + real-photo "polaroid stack" (swipeable/autoplaying, replaces the old duotone silhouette), About teaser, Portfolio teaser (real photography), "What I Offer" services, Brand strip, closing CTA. |
| `about.html` | Full build: page-header (real photo, see "Page-header photo" below), "At a Glance" facts + bio copy, "Where I Create" list, closing CTA. |
| `portfolio.html` | Full build: page-header (real photo), filterable contact-sheet grid (14 tiles: 5 fashion, 6 beauty, 3 lifestyle) with real photography, working lightbox, closing CTA. |
| `brands/index.html` | Full build: page-header (real photo), partner-credit row list, closing CTA. |
| `brands/azhyre-tech.html`, `azhyre-fashion.html`, `serenq.html` | Full build: page-header (real photo + real website links the user added), Partnership glance-list + bio copy, 3-tile campaign-preview gallery (still placeholder swatches), closing CTA. |
| `contact.html` | Full build: page-header (real photo), email + socials (**real values, user-supplied**), "Good to Know" list. No closing CTA section (page IS the destination). |

## Placeholder content still to replace

Everything below is intentionally placeholder/editable — confirmed via
`PRODUCT.md`'s "never fabricate" principle. Search each file for the
HTML comment `<!-- Placeholder ... -->` to find the exact spot.

- **All body/bio copy** on Home, About, and all 3 brand pages — written
  in-voice as an editable draft, not confirmed fact.
- **Brand/campaign imagery** on the 3 brand pages — every gallery tile
  there is still a CSS gradient "swatch" (`.swatch-1`–`.swatch-6`)
  standing in for real photography. No files exist yet in
  `images/brands/`. This is now the **only** remaining placeholder
  imagery on the site — the hero, the Portfolio grid, the homepage
  teaser, and every page-header visual all use real photos now (see
  "Real photography" / "Hero polaroid stack" / "Page-header photo"
  below).
- **Brand relationship specifics** — `PRODUCT.md` flags that the exact
  nature of each brand partnership (equity, exclusivity, employment)
  is unconfirmed; the glance-list "Role: Brand Ambassador" / "Status:
  Ongoing partnership" entries are safe generic placeholders, not
  confirmed facts.
- **`images/icons/favicon.ico`** — referenced by every page's
  `<link rel="icon">`, file does not exist (harmless 404, not visible
  to users, but worth adding a real favicon before launch).

**Already resolved, not placeholder:** the three brand website links
(azhyretech.co.za, azhyre.co.za, serenq.co.za) — carried over from the
original build and unrelated to Quinn's own identity, so left as-is.

**Reset to placeholder during the Eullie→Quinn rebrand:** Quinn's
contact email, Instagram/TikTok/Facebook handles, and the `CNAME`
domain were real, user-supplied values for Eullie; since they don't
belong to Quinn, they were reset to generic placeholders
(`hello@example.com`, `@yourhandle`, `example.com`) pending her real
values.

## Technical implementation notes

### Animation system
- One global easing curve: `--ease-out-expo` = `cubic-bezier(0.16, 1, 0.3, 1)`.
- Homepage hero has the one deliberate "focal moment" (per `animate.md`
  discipline): the polaroid stack (see below) does a 3D `page-open`
  reveal on load, the wordmark loops through 4 names letter-by-letter
  (see below), kicker/tagline/CTAs fade up in a staggered sequence.
- Every other page's `<h1>` uses `ink-reveal` (a clip-path wipe) — a
  quieter echo of the same "masthead" motion vocabulary.
- Cross-document **View Transitions** (`@view-transition { navigation: auto; }`
  in `style.css`) give page-to-page navigation a cross-fade. Native
  CSS, zero JS, silently no-ops in unsupported browsers.
- `prefers-reduced-motion: reduce` is respected everywhere — see the
  media query near the bottom of `style.css`. Ripples and the
  typewriter are skipped at the JS level too (`main.js` checks
  `matchMedia` before attaching), not just hidden via CSS.

### Typewriter effect (hero wordmark)
`initTypewriter()` in `main.js` cycles the hero wordmark through
`WORDS = ['Eullie', 'Euleth', 'Amukelo', 'Ngobeni']` forever — type in,
hold, erase, next word, repeat. **This replaced two earlier approaches**:
first a `steps()`-based CSS width-clip (jerky on the proportional italic
face — fixed-step width clipping doesn't respect glyph boundaries, so
letters got cut mid-character), then a one-shot per-letter
`animation-delay` reveal (typed "Eullie" once and stopped). Current
version builds each letter as a `<span class="letter">`, adds `.is-in`
one frame after insertion (`requestAnimationFrame` x2, same pattern
`initPortfolioFilters` uses) so its opacity/transform *transition* (not
a keyframe) has something to animate from, and reverses that same
transition on erase instead of just deleting the span outright — this
is what makes backspacing read as a smooth cascade rather than an
abrupt snap. **Gotcha this required:** erase ticks fire faster (45ms)
than each letter's fade-out transition takes to finish (~230ms), so at
any moment several already-"erased" spans are still sitting in the DOM
mid-fade. Counting on `el.childElementCount` to know how many letters
are logically left would get this wrong; `initTypewriter()` instead
keeps its own `liveLetters` array as the source of truth, and lets the
fading-but-not-yet-`.remove()`'d spans clean themselves up on their own
timers. Per-letter typing speed is randomized (70–130ms) for an organic
feel rather than a mechanical fixed interval. The last letter of
whichever word is currently showing gets `.accent` (not just "Eullie"'s
final "e" — kept consistent across all 4 words in the loop). Skipped
entirely under reduced motion; the plain "Eullie" text node the
original markup already had stays fully visible and static.

### Ripple effect
`initRipples()` in `main.js` attaches a `pointerdown` listener (works
for touch and mouse alike) to buttons, filter pills, portfolio tiles,
the lightbox close button, and the mobile nav toggle. Ripple tint is
set per-component via a `--ripple-color` CSS custom property. **Watch
for this gotcha**: `.ripple-surface` deliberately does NOT set
`position` (only `overflow: hidden`) — an earlier version set
`position: relative` there too, which silently broke `.lightbox-close`'s
`position: absolute` due to a CSS specificity/source-order tie. Each
ripple-eligible selector sets its own `position` directly instead.

### Glass nav (header + mobile drawer) and the backdrop-filter containing-block trap
The site header (`.site-nav`) is a sticky, off-black glass bar
(`backdrop-filter: blur`), and on mobile the hamburger opens
`.nav-collapse` as a fixed off-canvas drawer (not the old in-flow
accordion) sliding in over a dimming `.nav-scrim`. Both share the same
dark glass + `.glass-ripples` decorative rings.

**`.site-nav` vs `.nav-inner` split (full-bleed bar, capped content):**
`.site-nav` used to also carry the `.container` class directly, which
capped the entire glass bar — background, blur, border, everything —
to the 1200px content column, leaving visible page background on both
sides on any viewport wider than ~1250px. Per feedback ("on pc it's
not responsive, it's supposed to span the whole horizontal"),
`.site-nav` no longer has a `max-width` (spans the full viewport edge
to edge; only vertical padding lives on it now, horizontal padding
moved off it entirely) and the flex row (logo/links/toggle) moved into
a new child, `.nav-inner container` — `.nav-inner` supplies
`display:flex`/`align-items`/`justify-content`, `.container` supplies
the shared `max-width:1200px; margin:0 auto; padding-left/right`. This
mirrors every other section's use of `.container` for its content
column while letting the header be the one full-bleed surface.
`.glass-ripples` (the first one, the ambient decorative rings) stays a
**direct child of `.site-nav`**, not `.nav-inner`, so the rings scatter
across the full-width bar rather than being confined to the 1200px
column. `.nav-scrim` and `.nav-collapse` moved one level deeper (now
inside `.nav-inner`) — this is safe because the backdrop-filter
containing-block behavior described below applies to *any* descendant
of `.site-nav`, not just direct children, and every `.site-nav`-scoped
CSS selector already used descendant combinators (`.site-nav .logo`,
`.site-nav ul`, etc.), never `>`. **This same nav block is duplicated
across all 8 HTML files** (no templating on this static site) — if you
touch this markup again, check `grep -rn "class=\"site-nav\""` across
the repo, not just `index.html`.

**Real bug hit while building this, worth remembering:** `.nav-scrim`
is `position: fixed`, and was originally sized with `inset: 0`. It
rendered collapsed to only ~44px tall (just the header bar's own
height) instead of covering the page — clicking it to close the drawer
silently did nothing outside that tiny strip. Cause: `.site-nav` (the
scrim's ancestor) has `backdrop-filter`, and **`backdrop-filter` (like
`filter`, `transform`, `perspective`, `will-change` naming one of
those) makes that element the containing block for `position: fixed`
descendants' *percentage* offsets** — `top/right/bottom/left: 0`
(what `inset: 0` expands to) resolved against `.site-nav`'s own small
box, not the true viewport. `.nav-collapse`'s `height: 100vh` was
*not* affected by the same trap, because `vh`/`vw` units are always
viewport-relative regardless of containing block — only percentage-style
offsets are caught by this. **Fix:** gave `.nav-scrim` `top: 0; left: 0;
width: 100vw; height: 100vh;` instead of `inset: 0`. **If you ever add
another `position: fixed` element inside (or descended from) anything
with `backdrop-filter`/`filter`/`transform`, use `vw`/`vh` for its
sizing/offsets, not percentages or `inset` shorthand, or it will
silently size itself against the wrong box.**

**`.container`/`.site-nav` padding cascade trap:** `.site-nav` carries
both `site-nav` and `container` classes (for horizontal alignment with
the rest of the page). Below 900px, `responsive.css`'s `.container`
rule used to be a `padding: 0 1rem;` shorthand — identical specificity
(0,0,1,0) to `.site-nav`'s own padding rule in `style.css`, but loaded
in a later stylesheet (`index.html` links `style.css` then
`responsive.css`), so it won outright and **zeroed out all of
`.site-nav`'s vertical padding** below 900px, in every scroll state
(`.is-compact`/`.is-mid`/fully-grown alike) — not just the horizontal
gutter it was meant to control. This silently undid the header's
thickness (and the whole scroll-shrink size difference) on any tablet/
mobile viewport, confirmed via `getComputedStyle` showing `padding: 0px
16px` instead of the intended `80px 16px`. **Fix:** both `.container`
rules (base, in `style.css`, and the 900px override, in
`responsive.css`) now set `padding-left`/`padding-right` explicitly
instead of a `padding: 0 …` shorthand, so they can never clobber
another selector's vertical padding via source order. **If another
element ever needs `.container` plus its own vertical padding, check
this pattern still holds** — shorthand `padding` on a shared-specificity
utility class is a footgun for exactly this reason.

**Scroll-shrink header:** `initStickyNav()` in `main.js` tracks
`window.scrollY` (rAF-throttled) and toggles state on `.site-nav` via
CSS classes: fully grown (no class, only at `scrollY <= 0`) and
`.is-compact` (shrunk) any time `scrollY > 0` — plus `.is-shadow` (a
lifting drop-shadow) at the same time, so the header only looks
"flush"/flat at the absolute top of the page. **`.is-compact`/
`.is-shadow` are deliberately not direction-aware**: an earlier version
also had `.is-mid` (grown back to a halfway size while scrolling up but
not yet back at the top), so the header grew partway before fully
expanding again. Per feedback, the header should stay shrunk-but-visible
the whole way back up and only return to full size once the page is
actually scrolled to the top — `.is-mid` was removed (from both
`main.js` and `style.css`) rather than kept as dead code.

**Desktop-only fixed overlay + auto-hide (`.is-hidden`), and the
mobile-vs-desktop position split:** Per later feedback ("let it be over
the hero, hero beneath it" + "hides on scroll down, reveals on scroll
up" — confirmed via `AskUserQuestion` since "hides on scroll" is
ambiguous about direction), `header` is `position: fixed` by default
(`style.css`), not `sticky` — this takes it out of flow so the
hero/page-header section starts at the true top of the viewport with
the glass bar floating over it (confirmed live: scrolling to the very
top with a real backdrop behind it shows the hero content visibly
blurred through the glass). `initStickyNav()`'s `update()` regained a
`lastY` comparison (removed in the `.is-mid` cleanup above, reintroduced
here) *specifically* to drive `.is-hidden`
(`transform: translateY(-100%)`, transitioned): added while
`y > lastY` (scrolling down) and `scrollY > 0`, removed the instant
`y <= lastY` (scrolling up) or `scrollY <= 0`. Note `.is-compact`/
`.is-shadow` stay direction-independent (per the note above) — only
`.is-hidden` cares about direction; these are two independent concerns
toggled by the same `update()` call. **This overlay/auto-hide treatment
is desktop-only.** At ≤900px, `responsive.css` reverts `header` back to
`position: sticky` (original in-flow behavior — pushes hero/page-header
down normally) and neutralizes `.is-hidden` with `transform: none`, so
tablet/mobile never overlay or auto-hide, matching the original
pre-overlay UX there. Verified in this environment (whose Chrome tab is
stuck at ~400px width, see the quirks section below) by temporarily
setting `document.styleSheets` → the `responsive.css` sheet →
`.disabled = true` via `javascript_tool`, which strips every breakpoint
override and exposes the raw desktop rules regardless of actual
viewport width — confirmed `header` computes to `position: fixed`,
`.is-hidden` actually translates the bar off-screen, and re-enabling
the sheet restores the ≤900px reverts. **If you need to verify desktop
nav behavior again in this environment, reuse that stylesheet-disable
trick** rather than fighting `resize_window` (confirmed broken here).

**Mobile resting-size reduction:** separately, per feedback that the
mobile header's resting (top-of-page, scrollY = 0) size looked too big
next to its own scrolled/shrunk size, `responsive.css`'s ≤600px block
sets `.site-nav { padding: 1.75rem 0; }` — the same value as
`.is-compact` — so the mobile header no longer visibly grows when
scrolled back to the top. This is independent of the desktop
fixed/overlay/hide work above (different breakpoint, different
property), just implemented in the same pass.

### The `[hidden]` + `display` CSS gotcha (portfolio filters)
`main.js` toggles `item.hidden = true/false` to remove filtered-out
portfolio tiles from layout. **This does nothing by itself** if any
author stylesheet rule sets `display` on that element with normal
(non-`!important`) priority — author-origin CSS always beats the
browser's built-in `[hidden] { display: none }` rule regardless of
selector specificity, because origin/importance is checked before
specificity in the cascade. Fix in place: `.portfolio-item[hidden] { display: none; }`
with higher specificity than the base `.portfolio-item { display: block; }`
rule. **If you ever add another `hidden`-toggled element, check this
pattern applies to it too.**

### Real photography (portfolio grid + home teaser)
`portfolio.html`'s 11 tiles and `index.html`'s 3-tile Portfolio teaser
(`.work-panel`) now use real photos from
`images/portfolio/{fashion,beauty,lifestyle}/` (kebab-case, scene-
descriptive names, no category prefix since the folder already gives
that — e.g. `fashion/park-halter-trousers-01.jpg`). Each tile swapped
its old `<span class="swatch swatch-N">` for an `<img>`. On
`portfolio.html`, `data-swatch="swatch-N"` became `data-image` (the
lightbox's full-size source) plus `data-caption` (the lightbox
caption text — `<p class="lightbox-caption">` is now only rendered
when a caption is present, since brand-page-style placeholder
galleries don't set one). `main.js`'s `open()` reads
`trigger.dataset.image`/`dataset.caption` instead of `dataset.swatch`,
and builds an `<img>` inside `.lightbox-panel` rather than applying a
swatch class to the panel itself. In `style.css`, the old
`.portfolio-item .swatch::before` / `.work-panel .swatch::before`
soft-light overlays moved to `.portfolio-item::after` /
`.work-panel::after` (applied to the tile itself, not a swatch child)
so they still overlay correctly regardless of whether the tile holds
an `<img>` or (brand galleries, still placeholder) a swatch span —
**if you add another photo-backed grid, reuse this `::after` overlay +
`<img>` with `position:absolute; inset:0; object-fit:cover` pattern
rather than re-introducing a swatch wrapper.** The `.swatch-1`–
`.swatch-6` classes and their CSS are untouched and still power the
brand-page campaign galleries (still placeholder, no real photos
supplied for those yet).

**Per-image crop overrides:** most of these source photos are
portrait phone shots with a lot of empty sky/background above the
subject. `object-fit: cover` at default `object-position: 50% 50%`
crops those decently in normal 3:4 tiles, but the wide 16:9 tiles
(`.portfolio-item--wide`, `.work-panel--large`) only keep ~32% of the
image's height — center-crop can land mid-forehead. Where that
happened (`portfolio.html`'s `lifestyle/garden-cardigan-02.jpg` wide
tile), the fix was a per-`<img>` inline `style="object-position: 50%
48%;"` tuned by trial in-browser (screenshot, adjust, repeat) rather
than a CSS rule, since the right value is specific to that one photo's
framing. **If a newly added wide/large tile crops awkwardly, check
this per-image object-position pattern before reaching for a different
crop ratio.**

### Gallery-tile swatch bug (brand campaign previews)
`.gallery-tile .swatch` (the brand-page campaign-preview galleries)
had never had a positioning rule — `.swatch` spans have no intrinsic
size, so with no `position: absolute; inset: 0`, the gradient was
literally invisible (zero-size span) on all 3 brand pages since they
were first built. Fixed by adding `.gallery-tile .swatch { position:
absolute; inset: 0; }` and a matching `.gallery-tile::after` soft-light
overlay (same pattern as `.portfolio-item`/`.work-panel`) in
`style.css`. **This was never caught earlier because the Chrome
verification issues noted below meant these tiles were never actually
looked at in a browser.**

### Hero polaroid stack (replaces the old silhouette placeholder)
`index.html`'s hero visual is now a stack of 6 real photos
(`.polaroid-stack` > `.polaroid-card`s with `data-polaroid-stack` /
`data-polaroid-card`), reusing the exact slot and one-time `page-open`
3D entrance the old `.silhouette-frame` had (`.hero-visual
.polaroid-stack` in the "Hero focal moment" CSS section) so swapping it
didn't change the hero's layout or motion signature. `initPolaroidStack()`
in `main.js` drives everything else:
- **Cycling** reassigns cards to a *fixed* set of back-of-pile scatter
  "slots" (`--tx`/`--ty`/`--rot` custom properties) rather than
  re-rolling every card's own offset on every cycle — this is what makes
  the motion read as "one photo slides to the back, the next rises to
  front," not the whole pile jumping. Only **reshuffle** (double-tap/
  -click, or Enter) re-rolls the slot offsets themselves
  (`rollSlots()`).
- **Autoplay**: a 4s `setInterval` cycles the front card forward,
  paused via `IntersectionObserver` when the stack scrolls out of view
  and disabled entirely under `prefers-reduced-motion`.
- **Swipe**: pointerdown/move/up on the stack drags the front card
  live (a `--drag` custom property), and a swipe past 50px triggers
  `cycle()` in that direction *and* sets which way autoplay continues
  from there (`autoDirection`) — so a swipe against the current
  autoplay direction flips it permanently until swiped again.
- **Double-tap/-click** (two pointerups within 350ms, each under 10px
  of movement) triggers `reshuffle()` instead of a cycle.
- **Keyboard**: the stack is `tabindex="0"` with `role="group"`;
  ArrowLeft/ArrowRight cycle, Enter/Space reshuffles — same actions as
  swipe/tap, just keyboard-reachable.
- No-JS fallback: fixed (non-random) `nth-child` scatter values in CSS
  so the hero never shows a dead, unrotated stack of identical photos
  if JS fails to run.

### Page-header photo (About/Portfolio/Brands/Contact)
The smaller `.silhouette-frame.small` rose panel used in every other
page's masthead is now `.page-header-photo-frame` — a real photo, and
**only** one of the 4 `images/portfolio/beauty/mirror-selfie-0{1..4}.jpg`
photos per the user's request to keep this treatment to that specific
set. `initHeaderPhoto()` in `main.js` picks one of the 4 at random on
every page load (`[data-header-photo]`) rather than a fixed per-page
assignment — reads the existing `src`'s `../` prefix (brand pages are
one directory deeper) so the swap works from either root or `brands/`.
Visually it's a two-layer composition echoing the hero's old
silhouette-back/front bleed, now with a photo standing in for the front
shape: `.page-header-photo-back` is the same rose clipped-polygon
shape as the hero's `.silhouette-back`, offset behind; `.page-header-photo`
is the photo, rotated (`rotate(-4deg)`) and scaled up slightly
(`scale(1.06)`) so it reads as bigger/more dynamic than a flat
rectangle and the rose shape peeks out from behind on one side.
Neither layer sets `overflow: hidden` on the outer `-frame` (matching
the hero's `.silhouette-frame`, which never clipped its own children
either) — that's what lets the back shape's offset actually show.
**Aspect ratio is 3:4 (portrait), not 4:3** — these are portrait phone
selfies, and a landscape frame cropped away too much of each photo;
3:4 also happens to match the hero's original (pre-polaroid-stack)
silhouette proportions, which is why it reads as "the same shape,
now a photo."

**Background-removal attempt, reverted:** before landing on plain
rectangular photos, a same-session experiment installed `rembg` +
`onnxruntime` (`pip3 install rembg onnxruntime`, ~180MB `u2net_human_seg`
model download) to cut transparent-background PNGs of the 4
mirror-selfie photos for a die-cut floating-figure look. Output quality
was poor — the pale phone in one shot nearly vanished (segmented as
background), and another had a disconnected stray artifact — so the
user asked to stop and use full rectangular photos instead. `rembg`/
`onnxruntime` are still installed in this environment's Python if
someone wants to retry with a different model or manual matte cleanup,
but nothing in the repo depends on them.

### Visible "placeholder" language scrub
Several pages had copy that literally told visitors the content was a
placeholder — e.g. brand-page bio copy ("This profile is a
placeholder... will replace this copy before launch"), gallery
captions ("Placeholder compositions shown above."), and
`brands/index.html`'s intro ("Each profile below is a working
placeholder..."). That reads as broken/unfinished to an actual site
visitor, even though it's accurate for internal tracking. Removed or
reworded all of it (moved the "still pending real copy" caveat into
HTML comments only) without fabricating any new facts — see
`PRODUCT.md`'s "never fabricate" principle, still in force. The
existing bio/bio-copy paragraphs on Home/About/brand pages were
already reasonable in-voice drafts (not "content goes here" filler)
and didn't need rewriting, just the self-referential sentences cut.

### Lightbox
Fixed overlay, single reusable `.lightbox-overlay > .lightbox-content`
DOM built fresh per-open in `main.js`. Width is capped against *both*
`90vw`/`720px` AND a viewport-height-derived limit
(`calc((100vh - 6rem) * 4 / 5)`) so the close button and caption can
never overflow off-screen on a short viewport — an earlier version
only bounded width, and the panel could grow taller than the viewport.
Closes on Escape, click-outside, or the close button; returns focus to
the trigger tile on close.

**z-index vs. the fixed header:** `.lightbox-overlay` was `z-index: 100`
— lower than `header`'s `z-index: 500` — so whenever the header was
visually on top of the viewport's top strip, it painted over the top of
the lightbox (photo, tag pill, and close button all cut off behind the
glass bar). This was always technically true (header's z-index has
always been 500), but went unnoticed while `header` was `position:
sticky` and only overlapped page content while actively scrolled past
the top. Once `header` became `position: fixed` on desktop (see the
overlay/auto-hide note above), it overlaps the viewport top *at every
scroll position*, making the bug immediately visible any time the
lightbox opens. **Fixed by raising `.lightbox-overlay` to `z-index:
600`** — a full-screen modal should always be the topmost thing on the
page, above chrome as well as content. If you add another fixed/modal
overlay (a second lightbox variant, a toast, a dialog), check its
z-index against `header`'s 500 rather than assuming "z-index: 100" (a
common default-ish value) is automatically high enough.

### Light-to-dark theme flip (2026-08-24), and the two-neutral-role split it required
After the light "soft & editorial" rose/navy rebrand (documented above) shipped,
the user's reaction was that the colors still "don't pop" and read
"unbalanced" — the pastel washes were too pale to register as an actual
black/pink/blue/white brand, and blue in particular was nearly invisible
on the homepage (it only showed up in placeholder brand-gallery swatches).
Rebuilt as a genuinely dark theme: near-black `--color-bg` (`#121014`),
rose-black and navy-black section washes, a vivid pop-pink primary accent
(`#FF4F81`) and an electric-blue secondary accent (`#4A90FF`), warm
off-white ink (`#F5F1F0`). Full new palette in `DESIGN.md`'s Colors
section — this note covers the *mechanics* of the flip, which weren't a
simple hex swap.

**The core problem: `--color-bg-pearl` and `--color-ink`/`--color-ink-soft`
each secretly served two different roles that only happened to share a
value in light mode.** In the light system, "the light neutral" (used for
both *section backgrounds* and *light text/elements against the one dark
surface, the nav*) was a single token, `--color-bg-pearl`, because both
roles needed the same near-white value. Flipping the theme to dark makes
`--color-bg-pearl` a *dark* lifted-surface tone (correct for section
backgrounds) — which silently breaks every place that was using it as a
"light text on a dark thing" color instead: `.site-nav ul li a`,
`.lightbox-caption`, `.lightbox-close`, `.work-panel--large .work-tag`,
`.portfolio-item-view`, `.lightbox-panel .work-tag`, and `.polaroid-card`'s
background (the literal white photo-mat, which has to stay light
regardless of theme — it's a photo-paper metaphor, not a themed surface).
All of these were repointed to `--color-ink` (now the theme's light
neutral) instead. The same inversion hit `--color-ink`/`--color-on-accent`:
`--color-on-accent` used to just equal `--color-bg-pearl`'s value and meant
"light text on a solid accent fill"; in dark mode it had to become genuinely
*dark* (`#14101A`), since the new pop-pink accent isn't dark enough at
small text sizes to reliably support light text on top of it (checked:
white-on-`#FF4F81` is ~3.15:1, under the 4.5:1 AA threshold for normal
text; dark-on-`#FF4F81` clears 6.5:1+ easily) — this is why `.btn-primary`
and `.cta-close` now use dark text on their pink fills rather than the
white-on-color pattern the light system used. `DESIGN.md`'s Colors section
names this the Two-Neutral-Roles Rule; re-check it before reusing
`--color-ink` or `--color-on-accent` anywhere new.

**Brand-strip blue region.** `.brand-strip`'s kicker and `.brand-row a`
used to inherit the site-wide pink `--color-accent` even though the
section already had its own `--color-bg-sky` wash — meaning the one
section meant to carry blue displayed pink text on a blue-tinted
background, and blue never actually appeared as legible text anywhere on
the homepage. Both now use `--color-accent-blue` explicitly (with
`--color-accent-blue-soft` for the hover-state border), so the Brands
section reads as a deliberate blue region, not just a blue-tinted
backdrop for pink text.

**Shadows went to near-pure black.** The light system's shadows were
warm-tinted (never literal black, per that palette's own rule) because
they sat on light pages where a black shadow would look like an
uncalibrated default. On a near-black page, the opposite is true — a
shadow needs to be genuinely dark (`rgb(8,6,9)` / `rgb(0,0,0)`) to read as
depth at all against an already-dark background. `DESIGN.md` names this
the Shadows-Can-Be-Black Rule: the "warm, never literal black" discipline
governs surface colors, not shadow tints.

**Verification gotcha:** a full-page Playwright screenshot taken without
scrolling first will show every `.reveal` section (About/Portfolio
teasers, brand strip, closing CTA) as a solid blank color block — not a
bug, just the scroll-triggered reveal (see below) never firing because
the page was never actually scrolled. Always scroll through the page
programmatically before a full-page screenshot on this site now.

### Scroll-triggered reveal (`.reveal`), and the off-screen-animation bug it replaced
`.reveal` (About/Portfolio teasers, the brand strip, every page's closing
CTA — 9 usages across `index.html`, `about.html`, `portfolio.html`,
`brands/index.html`, and all 3 brand pages) used to be a plain CSS
`animation: fade-up ... both`, which starts playing the instant the
element exists in the DOM — i.e. immediately on page load, regardless of
scroll position. For every one of these elements (all below the fold),
that meant the fade-up finished off-screen before the visitor ever
scrolled to see it: a no-op in practice, not actual motion. Found during
an impeccable polish pass (**2026-08-24**) after the user said the
rebranded site "doesn't look good."

**Fix:** `initScrollReveal()` in `main.js` now drives `.reveal` via
`IntersectionObserver`, adding `.is-visible` (and un-observing) the first
time each element scrolls into view. The pre-hidden state
(`opacity:0; transform: translateY(20px)`) only applies under
`body.js-reveal` in `style.css`, and that class is only added once
`IntersectionObserver` is confirmed available — so no-JS/unsupported
browsers see `.reveal` content fully visible immediately, the same
no-JS-safe guarantee the typewriter and polaroid stack already make.
Skipped entirely under `prefers-reduced-motion`, matching the rest of the
site's motion.

### Brand-strip visual weight (`.brand-row` link size)
Same polish pass: the homepage's "In Partnership With" section (its own
`--color-bg-sky` field, a deliberate blue region per `DESIGN.md`) read as
underweighted — three fairly small (1.6rem) italic links floating in a
full `--section-pad` (7rem) block felt like an empty color panel rather
than a resolved section. Fixed by sizing the links up to
`clamp(1.85rem, 2.6vw, 2.25rem)` (documented in `DESIGN.md`'s Brand Link
type step) and adding a hairline `border-top` above `.brand-row`
(reusing `--rule-soft`, the same divider token every other
hairline-divided list on the site already uses) so the section reads as
structured content rather than an unbounded color block.

### Portfolio filter transitions
`setItemVisible()` in `main.js` adds `.is-hidden` (opacity/scale
transition) before setting `hidden = true` after a 350ms timeout on
hide, and reverses the order on show (`hidden = false` → double
`requestAnimationFrame` → remove `.is-hidden`) so the fade actually has
something to animate from.

## Known environment quirks (this dev machine / session)

- **Background/unfocused tabs throttle `setTimeout`-driven loops** (the
  typewriter loop, the polaroid stack's autoplay timer) — Chrome slows
  or effectively pauses timers in a hidden/unfocused tab, so verifying
  these by opening several tabs and checking one later can make a
  perfectly-working loop look frozen. It "catches up" in a burst once
  the tab regains focus. Always bring the specific tab to the front
  (e.g. a `computer` screenshot call) before judging whether a
  timer-based effect is actually running.
  could not resize its window below its native ~1536px width in this
  environment — `resize_window` calls silently no-op'd. Mobile-viewport
  screenshots were never obtained live; mobile/tablet CSS was verified
  by code review only. Worth a real device/DevTools check before launch.
- The same extension occasionally drops connection mid-session
  (`CDP sendCommand timed out`, "extension disconnected"). Opening a
  fresh tab via `tabs_create_mcp` reliably recovers; retrying the same
  tab usually doesn't.
- Local verification server: `python -m http.server 8123` from the
  project root. Always stopped via `taskkill` (Windows) after each
  verification pass — check `netstat -ano | grep :8123` if port 8123
  seems stuck in a future session.

## DESIGN.md + sidecar

`DESIGN.md` documents a **full, ~19-step type scale** (not the usual
4-role display/headline/body/label set) — every literal `font-size` in
`css/style.css` maps to a named step. That's deliberate: this is a
rich editorial layout with many genuinely distinct, intentional label
variants (kicker vs. tag vs. meta vs. caption vs. footnote, etc.), not
accidental drift. If it ever looks like too many steps, don't collapse
it without checking each one still maps to a real, distinct component
first. The two shadow-tint families (`rgba(30,26,28,X)` vs the deeper
`rgba(13,11,12,X)` on `.btn-primary-inverse` and `.lightbox-panel`) are
similarly intentional, not an inconsistency to unify.

`.impeccable/design.json` is the sidecar the impeccable skill's
`document.md` spec calls for — it carries what `DESIGN.md`'s
frontmatter schema can't hold (shadows, motion tokens, full
component HTML/CSS snippets, narrative/rules). If you regenerate
`DESIGN.md`, regenerate this alongside it.

## Drift flag

`PRODUCT.md`'s "Capabilities and Constraints" and "Evidence on Hand"
sections still describe the pre-build state ("brand pages are
structurally scaffolded but have no real content", "every page
currently holds placeholder copy") — that's now out of date given the
build described above, though the underlying "don't fabricate facts"
principle still holds. Not fixed here since this file's job is to
record state, not repair `PRODUCT.md` drift unasked — run
`/impeccable doctor` or do a quick manual pass when convenient.
