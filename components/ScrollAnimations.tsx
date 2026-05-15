'use client';

import { useEffect } from 'react';

type ScrollAnimationsProps = {
  active: boolean;
};

type MotionVariant = {
  sectionX: number;
  sectionY: number;
  textX: number;
  textY: number;
  cardX: number;
  cardY: number;
};

const motionVariants: Record<string, MotionVariant> = {
  'soft-up': { sectionX: 0, sectionY: 36, textX: 0, textY: 26, cardX: 0, cardY: 34 },
  'soft-left': { sectionX: 34, sectionY: 16, textX: 18, textY: 20, cardX: 26, cardY: 18 },
  'soft-right': { sectionX: -34, sectionY: 16, textX: -18, textY: 20, cardX: -26, cardY: 18 },
  'lift-merge': { sectionX: 0, sectionY: 46, textX: 0, textY: 28, cardX: 0, cardY: 38 },
};

export default function ScrollAnimations({ active }: ScrollAnimationsProps) {
  useEffect(() => {
    if (!active) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isLiteMode =
      window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(pointer: coarse)').matches;

    let isUnmounted = false;
    let cleanupGsap: (() => void) | undefined;

    // Tandai semua section agar elemen tetap visible sebelum GSAP siap
    // Ini mencegah white screen / konten hilang saat GSAP belum load
    const allSections = document.querySelectorAll<HTMLElement>('[data-scroll-section]');
    allSections.forEach((section) => {
      section.setAttribute('data-gsap-pending', '1');
    });

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (isUnmounted) return;

      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        const sectionTargets = gsap.utils.toArray<HTMLElement>('[data-scroll-section]');

        const shouldPlayImmediately = (target: HTMLElement) => {
          const rect = target.getBoundingClientRect();
          const viewportHeight = window.innerHeight || 0;
          return rect.bottom > 0 && rect.top < viewportHeight * 0.95;
        };

        sectionTargets.forEach((target) => {
          target.removeAttribute('data-gsap-pending');

          const variantName = target.dataset.motion ?? 'soft-up';
          const variant = motionVariants[variantName] ?? motionVariants['soft-up'];
          const playNow = shouldPlayImmediately(target);

          // Di HP (lite mode): offset lebih kecil, durasi lebih pendek, stagger lebih cepat
          const offsetScale = isLiteMode ? 0.35 : 1;
          const textLimit = isLiteMode ? 12 : 20;
          const cardLimit = isLiteMode ? 8 : 16;
          const textDuration = isLiteMode ? 0.45 : 1.05;
          const cardDuration = isLiteMode ? 0.5 : 1.1;
          const textStagger = isLiteMode ? 0.03 : 0.1;
          const cardStagger = isLiteMode ? 0.03 : 0.08;
          const triggerStartText = isLiteMode ? 'top 99%' : 'top 92%';
          const triggerStartCard = isLiteMode ? 'top 99%' : 'top 94%';

          const textTargets = Array.from(target.querySelectorAll<HTMLElement>('h1, h2, h3, p')).slice(0, textLimit);
          if (textTargets.length > 0) {
            gsap.fromTo(
              textTargets,
              {
                autoAlpha: 0,
                x: variant.textX * offsetScale,
                y: -Math.abs(variant.textY) * offsetScale,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration: textDuration,
                ease: 'power3.out',
                stagger: textStagger,
                ...(playNow
                  ? {}
                  : {
                      scrollTrigger: {
                        trigger: target,
                        start: triggerStartText,
                        once: true,
                      },
                    }),
              }
            );
          }

          // Hanya animasi elemen yang memang "card" — hindari li/button/input
          // karena terlalu banyak dan menyebabkan lag di HP
          const cardTargets = Array.from(
            target.querySelectorAll<HTMLElement>('article, figure, [data-anim-card]')
          ).slice(0, cardLimit);

          if (cardTargets.length > 0) {
            gsap.fromTo(
              cardTargets,
              {
                autoAlpha: 0,
                x: variant.cardX * offsetScale,
                y: variant.cardY * offsetScale,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration: cardDuration,
                ease: 'power2.out',
                stagger: cardStagger,
                ...(playNow
                  ? {}
                  : {
                      scrollTrigger: {
                        trigger: target,
                        start: triggerStartCard,
                        once: true,
                      },
                    }),
              }
            );
          }
        });

        // Delay refresh agar layout sudah stabil sebelum ScrollTrigger menghitung posisi
        ScrollTrigger.refresh();
      });

      cleanupGsap = () => {
        context.revert();
      };
    })();

    return () => {
      isUnmounted = true;
      // Bersihkan atribut pending jika unmount sebelum GSAP selesai load
      document.querySelectorAll('[data-gsap-pending]').forEach((el) => {
        el.removeAttribute('data-gsap-pending');
      });
      cleanupGsap?.();
    };
  }, [active]);

  return null;
}
