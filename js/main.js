// Quinn Portfolio — Main JS
// Nav toggle, portfolio filters, lightbox, etc.

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initPortfolioFilters();
  initLightbox();
  initRipples();
  initTypewriter();
  initPolaroidStack();
  initHeaderPhoto();
  initStickyNav();
  initScrollReveal();
});

// Header sizing/visibility on scroll, matching .site-nav's .is-compact/
// .is-shadow/.is-hidden classes in style.css: fully grown (no class) only
// at the very top; .is-compact (shrunk) any time scrollY > 0, whether
// scrolling up or down, so the header stays shrunk-but-visible on the way
// back up instead of growing back to a mid-size first. .is-shadow lifts
// the header off the page any time it isn't at that resting top
// position, so it reads as hovering above passing content rather than
// flush with it. .is-hidden (desktop only — no-op at ≤900px, see
// responsive.css) is direction-aware, unlike the other two: added while
// actively scrolling down (so the fixed, hero-overlaying header doesn't
// sit over content indefinitely), removed the instant the user scrolls
// up even slightly, and always cleared at the very top. rAF-throttled so
// this never runs more than once per paint.
function initStickyNav() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    if (y <= 0) {
      nav.classList.remove('is-compact', 'is-shadow', 'is-hidden');
    } else {
      nav.classList.add('is-compact', 'is-shadow');
      if (y > lastY) {
        nav.classList.add('is-hidden');
      } else {
        nav.classList.remove('is-hidden');
      }
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}

// Page-header photo (About/Portfolio/Brands/Contact masthead) — picks one
// of the same 4 mirror-selfie photos at random on each load, so the
// page/photo pairing isn't fixed. If JS never runs, each page's own
// hard-coded src/alt (set directly in the HTML) stays visible as a
// sensible default.
const HEADER_PHOTOS = [
  { src: 'images/portfolio/beauty/mirror-selfie-01.jpg', alt: 'Black and white mirror portrait in a hoodie, head tilted, looking down at the phone screen.' },
  { src: 'images/portfolio/beauty/mirror-selfie-02.jpg', alt: 'Black and white mirror portrait in a hoodie, closer crop, looking down at the phone screen.' },
  { src: 'images/portfolio/beauty/mirror-selfie-03.jpg', alt: 'Black and white mirror portrait in a hoodie, hand resting on top of head, looking down at the phone screen.' },
  { src: 'images/portfolio/beauty/mirror-selfie-04.jpg', alt: 'Black and white mirror portrait in a hoodie, seated, looking directly at the camera.' },
];

function initHeaderPhoto() {
  const img = document.querySelector('[data-header-photo]');
  if (!img) return;
  const prefix = img.getAttribute('src').startsWith('../') ? '../' : '';
  const choice = HEADER_PHOTOS[Math.floor(Math.random() * HEADER_PHOTOS.length)];
  img.src = prefix + choice.src;
  img.alt = choice.alt;
}

// Continuously cycles the hero wordmark through WORDS — typing each in,
// holding, then erasing before typing the next — forever, not a one-shot
// reveal. Each new letter is a fresh <span class="letter"> given an
// .is-in class one frame after insertion so its opacity/transform
// transition actually has something to animate from (same double-rAF
// pattern initPortfolioFilters uses). Erasing mirrors that: it removes
// the .is-in class (triggering the same transition in reverse) and only
// detaches the span from the DOM after that transition would have
// finished, so backspacing reads as a smooth cascade rather than an
// abrupt snap — `liveLetters` (not the DOM's own childElementCount) is
// what tracks "how many letters are logically left," since erase ticks
// fire faster than each individual fade-out finishes and several spans
// end up mid-fade in the DOM at once. Per-letter typing speed is
// randomized within a range for an organic, non-mechanical feel. Skipped
// entirely under reduced motion — the plain "Quinn" text the original
// markup already had stays fully visible and static, matching every
// other motion effect on this site.
function initTypewriter() {
  const el = document.querySelector('.hero-title .typewriter');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const WORDS = ['Quinn', 'Tintswalo', 'Baloyi'];

  const TYPE_MS_MIN = 70;
  const TYPE_MS_MAX = 130;
  const ERASE_MS = 45;
  const ERASE_FADE_MS = 230; // matches .hero-title .letter's transition duration
  const HOLD_FULL_MS = 1400;
  const HOLD_EMPTY_MS = 350;
  const START_DELAY_MS = 300;

  el.innerHTML = '';
  const caret = document.createElement('span');
  caret.className = 'caret';
  el.after(caret);

  let wordIndex = 0;
  let len = 0;
  let typing = true;
  const liveLetters = [];

  function currentWord() {
    return WORDS[wordIndex];
  }

  function addLetter() {
    const word = currentWord();
    const span = document.createElement('span');
    span.className = len === word.length - 1 ? 'letter accent' : 'letter';
    span.textContent = word[len];
    el.appendChild(span);
    liveLetters.push(span);
    len += 1;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => span.classList.add('is-in'));
    });
  }

  function removeLetter() {
    const span = liveLetters.pop();
    if (!span) return;
    len -= 1;
    span.classList.remove('is-in');
    window.setTimeout(() => span.remove(), ERASE_FADE_MS);
  }

  function tick() {
    if (typing) {
      addLetter();
      if (len >= currentWord().length) {
        typing = false;
        window.setTimeout(tick, HOLD_FULL_MS);
      } else {
        const jitter = TYPE_MS_MIN + Math.random() * (TYPE_MS_MAX - TYPE_MS_MIN);
        window.setTimeout(tick, jitter);
      }
    } else {
      removeLetter();
      if (len <= 0) {
        typing = true;
        wordIndex = (wordIndex + 1) % WORDS.length;
        window.setTimeout(tick, HOLD_EMPTY_MS);
      } else {
        window.setTimeout(tick, ERASE_MS);
      }
    }
  }

  window.setTimeout(tick, START_DELAY_MS);
}

// Hero "polaroid stack" — real photos standing in for the old silhouette
// placeholder, in the same slot (see the .hero-visual .polaroid-stack
// page-open animation in style.css, reused from .silhouette-frame).
// Cycling reassigns cards to a fixed set of back-of-pile scatter "slots"
// rather than re-rolling every card's own offset, so the motion reads as
// one photo sliding to the back and the next rising to front, not the
// whole pile jumping. Reshuffle (double-tap/-click, or Enter) is the only
// thing that re-rolls the slot offsets themselves. Skipped entirely (no
// autoplay, no transitions) under reduced motion, but swipe/tap/keyboard
// cycling still works — same "still operable, just not animated" pattern
// as the rest of the site's motion.
function initPolaroidStack() {
  const stack = document.querySelector('[data-polaroid-stack]');
  if (!stack) return;
  const order = Array.from(stack.querySelectorAll('[data-polaroid-card]'));
  if (order.length < 2) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const AUTO_MS = 4000;
  const SWIPE_PX = 50;
  const TAP_PX = 10;
  const DOUBLE_TAP_MS = 350;

  let slots = order.slice(1).map((_, i) => ({
    tx: (i % 2 === 0 ? 1 : -1) * (5 + i * 2),
    ty: (i % 2 === 0 ? -1 : 1) * (4 + i * 3),
    rot: (i % 2 === 0 ? 1 : -1) * (6 + i * 2),
  }));
  let autoTimer = null;
  let autoDirection = 1; // 1 = front card cycles to back; -1 = reversed
  let lastTapTime = 0;
  let dragStartX = null;

  function rollSlots() {
    slots = order.slice(1).map((_, i) => {
      const sign = i % 2 === 0 ? 1 : -1;
      return {
        tx: sign * (4 + Math.random() * 4 + i * 1.5),
        ty: (Math.random() - 0.5) * (8 + i * 3),
        rot: sign * (5 + Math.random() * 6),
      };
    });
  }

  function applyOrder(animate) {
    order.forEach((card, i) => {
      card.style.transition = animate ? '' : 'none';
      card.style.zIndex = String(order.length - i);
      if (i === 0) {
        card.style.setProperty('--tx', '0%');
        card.style.setProperty('--ty', '0%');
        card.style.setProperty('--rot', '0deg');
      } else {
        const slot = slots[i - 1];
        card.style.setProperty('--tx', `${slot.tx}%`);
        card.style.setProperty('--ty', `${slot.ty}%`);
        card.style.setProperty('--rot', `${slot.rot}deg`);
      }
    });
  }

  function cycle(direction) {
    if (direction === 1) order.push(order.shift());
    else order.unshift(order.pop());
    applyOrder(true);
  }

  function reshuffle() {
    rollSlots();
    applyOrder(true);
  }

  function stopAuto() {
    if (autoTimer) window.clearInterval(autoTimer);
    autoTimer = null;
  }

  function startAuto() {
    if (reduceMotion) return;
    stopAuto();
    autoTimer = window.setInterval(() => cycle(autoDirection), AUTO_MS);
  }

  applyOrder(false);
  void stack.offsetWidth; // force reflow before re-enabling transitions
  order.forEach((card) => { card.style.transition = ''; });

  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) startAuto();
    else stopAuto();
  }, { threshold: 0.2 });
  io.observe(stack);

  function endDrag(dx) {
    order[0].style.transition = '';
    order[0].style.setProperty('--drag', '0px');
    dragStartX = null;

    if (Math.abs(dx) < TAP_PX) {
      const now = Date.now();
      if (now - lastTapTime < DOUBLE_TAP_MS) {
        reshuffle();
        lastTapTime = 0;
      } else {
        lastTapTime = now;
      }
    } else if (Math.abs(dx) >= SWIPE_PX) {
      autoDirection = dx < 0 ? 1 : -1;
      cycle(autoDirection);
    }
    startAuto();
  }

  stack.addEventListener('pointerdown', (e) => {
    dragStartX = e.clientX;
    stopAuto();
    order[0].style.transition = 'none';
  });

  stack.addEventListener('pointermove', (e) => {
    if (dragStartX === null) return;
    order[0].style.setProperty('--drag', `${e.clientX - dragStartX}px`);
  });

  stack.addEventListener('pointerup', (e) => {
    if (dragStartX === null) return;
    endDrag(e.clientX - dragStartX);
  });

  stack.addEventListener('pointercancel', () => {
    if (dragStartX === null) return;
    endDrag(0);
  });

  stack.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      autoDirection = -1;
      cycle(-1);
      startAuto();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      autoDirection = 1;
      cycle(1);
      startAuto();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      reshuffle();
      startAuto();
    }
  });
}

// Tactile click/tap feedback on solid buttons, filter pills, and
// portfolio tiles. Skipped entirely under reduced motion, and skipped
// for keyboard activation (no pointer coordinate, no visual to anchor).
const RIPPLE_SELECTOR = '.btn-primary, .btn-primary-inverse, .portfolio-filters button, .portfolio-item, .lightbox-close, .nav-toggle';

function createRipple(x, y, el) {
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  const span = document.createElement('span');
  span.className = 'ripple';
  span.style.width = `${size}px`;
  span.style.height = `${size}px`;
  span.style.left = `${x - rect.left - size / 2}px`;
  span.style.top = `${y - rect.top - size / 2}px`;
  el.appendChild(span);
  span.addEventListener('animationend', () => span.remove());
}

function attachRipple(el) {
  el.classList.add('ripple-surface');
  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    createRipple(e.clientX, e.clientY, el);
  });
}

function initRipples() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll(RIPPLE_SELECTOR).forEach(attachRipple);
}

// Mobile off-canvas drawer: toggling .nav-collapse now also toggles a
// .nav-scrim backdrop (both elements, not just the drawer, since the
// scrim is a separate fixed sibling that dims the rest of the page
// while the drawer is open). Closes on scrim click or Escape, in
// addition to the toggle button itself.
function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const collapse = document.querySelector('.nav-collapse');
  const scrim = document.querySelector('.nav-scrim');
  if (!toggle || !collapse) return;

  function setOpen(isOpen) {
    collapse.classList.toggle('open', isOpen);
    if (scrim) scrim.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  }

  toggle.addEventListener('click', () => {
    setOpen(!collapse.classList.contains('open'));
  });

  if (scrim) {
    scrim.addEventListener('click', () => setOpen(false));
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && collapse.classList.contains('open')) setOpen(false);
  });
}

// .reveal elements (About/Portfolio teasers, brand strip, closing CTA)
// used to fade up on page load via a plain CSS animation — a no-op for
// anything below the fold, since it finished playing off-screen before
// the visitor ever scrolled there. This makes the same fade-up actually
// scroll-triggered: .js-reveal only goes on <body> once IntersectionObserver
// is confirmed available, so the CSS's pre-hidden state (see style.css)
// never applies to no-JS/unsupported browsers — they see .reveal content
// fully visible immediately, same guarantee the rest of the site's motion
// already makes. Each element reveals once, then stops being observed.
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.body.classList.add('js-reveal');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  items.forEach((item) => io.observe(item));
}

function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-category]');
  if (!filterButtons.length || !items.length) return;

  function setItemVisible(item, visible) {
    if (visible) {
      item.hidden = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => item.classList.remove('is-hidden'));
      });
    } else {
      item.classList.add('is-hidden');
      window.setTimeout(() => {
        item.hidden = true;
      }, 350);
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      items.forEach((item) => {
        const show = filter === 'all' || item.dataset.category === filter;
        setItemVisible(item, show);
      });

      filterButtons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

function initLightbox() {
  const triggers = document.querySelectorAll('[data-lightbox]');
  const overlay = document.querySelector('.lightbox-overlay');
  const stage = overlay ? overlay.querySelector('.lightbox-content') : null;
  if (!triggers.length || !overlay || !stage) return;

  let lastTrigger = null;

  function close() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
  }

  function open(trigger) {
    lastTrigger = trigger;
    const imageSrc = trigger.dataset.image || '';
    const category = trigger.dataset.label || trigger.dataset.category || '';
    const captionText = trigger.dataset.caption || '';

    stage.innerHTML = '';

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'lightbox-close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', close);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      attachRipple(closeBtn);
    }

    const panel = document.createElement('div');
    panel.className = 'lightbox-panel';
    if (imageSrc) {
      const triggerImg = trigger.querySelector('img');
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = triggerImg ? triggerImg.alt : '';
      panel.appendChild(img);
    }
    if (category) {
      const tag = document.createElement('span');
      tag.className = 'work-tag';
      tag.textContent = category;
      panel.appendChild(tag);
    }

    stage.appendChild(closeBtn);
    stage.appendChild(panel);

    if (captionText) {
      const caption = document.createElement('p');
      caption.className = 'lightbox-caption';
      caption.textContent = captionText;
      stage.appendChild(caption);
    }

    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      open(trigger);
    });
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });
}
