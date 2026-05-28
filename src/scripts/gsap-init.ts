import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Hero animations ─────────────────────────────────────────────────────────
// Run immediately — Astro <script> modules are deferred, DOM is already ready.
// Use fromTo() so the "to" state (opacity:1) is explicit regardless of CSS.

(function initHero() {
  const words = gsap.utils.toArray<HTMLElement>('.hero-word');
  const ctas  = gsap.utils.toArray<HTMLElement>('.hero-cta');
  const mockup = document.querySelector<HTMLElement>('.hero-mockup');

  if (!words.length) return;

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  tl.fromTo(words,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, stagger: 0.09, duration: 0.65 }
  );

  if (ctas.length) {
    tl.fromTo(ctas,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, stagger: 0.07, duration: 0.55 },
      '-=0.3'
    );
  }

  if (mockup) {
    tl.fromTo(mockup,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' },
      '-=0.55'
    );
  }
})();

// ── Scroll-triggered reveals ─────────────────────────────────────────────────

gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
  gsap.fromTo(el,
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    }
  );
});

gsap.utils.toArray<HTMLElement>('.reveal-stagger').forEach((container) => {
  const children = Array.from(container.children) as HTMLElement[];
  if (!children.length) return;
  gsap.fromTo(children,
    { opacity: 0, y: 36 },
    {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.12,
      scrollTrigger: { trigger: container, start: 'top 85%', toggleActions: 'play none none none' },
    }
  );
});

gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((el) => {
  gsap.fromTo(el,
    { opacity: 0, x: -40 },
    {
      opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    }
  );
});

gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((el) => {
  gsap.fromTo(el,
    { opacity: 0, x: 40 },
    {
      opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    }
  );
});

// ── Stat counters ────────────────────────────────────────────────────────────

// ── Why LivingOS — scroll-spotlight cards ────────────────────────────────────

(function initWhyCards() {
  const cards = gsap.utils.toArray<HTMLElement>('.why-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top 62%',
      end: 'bottom 38%',
      onEnter:     () => card.classList.add('is-active'),
      onLeave:     () => card.classList.remove('is-active'),
      onEnterBack: () => card.classList.add('is-active'),
      onLeaveBack: () => card.classList.remove('is-active'),
    });
  });
})();

// ── Stat counters ────────────────────────────────────────────────────────────

gsap.utils.toArray<HTMLElement>('.stat-number[data-target]').forEach((el) => {
  const target = parseInt(el.dataset.target ?? '0', 10);
  const isLarge = target >= 1000;

  ScrollTrigger.create({
    trigger: el,
    start: 'top 90%',
    once: true,
    onEnter: () => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate() {
          const v = Math.round(obj.val);
          el.textContent = isLarge
            ? v.toLocaleString('th-TH')
            : v.toLocaleString('th-TH') + '+';
        },
      });
    },
  });
});
