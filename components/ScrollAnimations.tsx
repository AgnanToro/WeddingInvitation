'use client';

import { useEffect } from 'react';

type ScrollAnimationsProps = {
  active: boolean;
};

// Sama persis dengan motionVariants sebelumnya
const motionConfigs: Record<string, { textX: number; textY: number; cardX: number; cardY: number }> = {
  'soft-up':    { textX: 0,   textY: -26, cardX: 0,   cardY: 34  },
  'soft-left':  { textX: 18,  textY: -20, cardX: 26,  cardY: 18  },
  'soft-right': { textX: -18, textY: -20, cardX: -26, cardY: 18  },
  'lift-merge': { textX: 0,   textY: -28, cardX: 0,   cardY: 38  },
};

export default function ScrollAnimations({ active }: ScrollAnimationsProps) {
  useEffect(() => {
    if (!active) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isLite =
      window.matchMedia('(max-width: 768px)').matches ||
      window.matchMedia('(pointer: coarse)').matches;

    // Di HP: offset lebih kecil, durasi lebih pendek, stagger lebih cepat
    const scale      = isLite ? 0.4  : 1;
    const textLimit  = isLite ? 12   : 20;
    const cardLimit  = isLite ? 8    : 16;
    const textDur    = isLite ? 420  : 900;   // ms
    const cardDur    = isLite ? 480  : 1000;
    const textStagger = isLite ? 28  : 90;    // ms per elemen
    const cardStagger = isLite ? 28  : 70;

    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-section]'));
    const observers: IntersectionObserver[] = [];
    const markedElements: HTMLElement[] = [];

    const showSection = (section: HTMLElement) => {
      section.querySelectorAll<HTMLElement>('.sa-text, .sa-card').forEach((el) => {
        el.classList.add('sa-visible');
      });
    };

    sections.forEach((section) => {
      const variantName = section.dataset.motion ?? 'soft-up';
      const v = motionConfigs[variantName] ?? motionConfigs['soft-up'];

      // Setup text elements - PENTING: class ditambahkan dulu, CSS yang handle opacity-nya
      const textEls = Array.from(
        section.querySelectorAll<HTMLElement>('h1, h2, h3, p')
      ).slice(0, textLimit);

      textEls.forEach((el, i) => {
        el.classList.add('sa-text');
        el.style.setProperty('--sa-x',     `${v.textX * scale}px`);
        el.style.setProperty('--sa-y',     `${v.textY * scale}px`);
        el.style.setProperty('--sa-dur',   `${textDur}ms`);
        el.style.setProperty('--sa-delay', `${i * textStagger}ms`);
        markedElements.push(el);
      });

      // Setup card elements
      const cardEls = Array.from(
        section.querySelectorAll<HTMLElement>('article, figure, [data-anim-card]')
      ).slice(0, cardLimit);

      cardEls.forEach((el, i) => {
        el.classList.add('sa-card');
        el.style.setProperty('--sa-x',     `${v.cardX * scale}px`);
        el.style.setProperty('--sa-y',     `${v.cardY * scale}px`);
        el.style.setProperty('--sa-dur',   `${cardDur}ms`);
        el.style.setProperty('--sa-delay', `${i * cardStagger}ms`);
        markedElements.push(el);
      });

      // Cek apakah section sudah kelihatan di viewport saat ini
      const rect = section.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight * 0.98 && rect.bottom > 0;

      if (isInViewport) {
        // Sudah di viewport: animasikan setelah 1 frame agar browser sempat render
        // initial state CSS dulu, baru .sa-visible ditambahkan
        requestAnimationFrame(() => {
          requestAnimationFrame(() => showSection(section));
        });
        return;
      }

      // Belum di viewport: pakai IntersectionObserver — tidak ada async loading,
      // langsung fire saat elemen muncul (threshold 1% = cukup sedikit masuk viewport)
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              showSection(section);
              observer.unobserve(section);
            }
          });
        },
        {
          // rootMargin negatif = trigger tepat saat elemen masuk viewport dari bawah
          rootMargin: '0px 0px -1% 0px',
          threshold: 0.01,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
      markedElements.forEach((el) => {
        el.classList.remove('sa-text', 'sa-card', 'sa-visible');
        el.style.removeProperty('--sa-x');
        el.style.removeProperty('--sa-y');
        el.style.removeProperty('--sa-dur');
        el.style.removeProperty('--sa-delay');
      });
    };
  }, [active]);

  return null;
}
