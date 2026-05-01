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

    let isUnmounted = false;
    let cleanupGsap: (() => void) | undefined;

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
          const variantName = target.dataset.motion ?? 'soft-up';
          const variant = motionVariants[variantName] ?? motionVariants['soft-up'];
          const playNow = shouldPlayImmediately(target);

          const textTargets = Array.from(target.querySelectorAll<HTMLElement>('h1, h2, h3, p')).slice(0, 10);
          if (textTargets.length > 0) {
            gsap.fromTo(
              textTargets,
              { autoAlpha: 0, x: variant.textX, y: -Math.abs(variant.textY) },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration: 1.05,
                ease: 'power3.out',
                stagger: 0.1,
                ...(playNow
                  ? {}
                  : {
                      scrollTrigger: {
                        trigger: target,
                        start: 'top 83%',
                        once: true,
                      },
                    }),
              }
            );
          }

          const cardTargets = Array.from(
            target.querySelectorAll<HTMLElement>('article, figure, li, button, input, textarea, select, [data-anim-card]')
          ).slice(0, 14);

          if (cardTargets.length > 0) {
            gsap.fromTo(
              cardTargets,
              { autoAlpha: 0, x: variant.cardX, y: variant.cardY },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                duration: 1.1,
                ease: 'power2.out',
                stagger: 0.08,
                ...(playNow
                  ? {}
                  : {
                      scrollTrigger: {
                        trigger: target,
                        start: 'top 86%',
                        once: true,
                      },
                    }),
              }
            );
          }
        });

        ScrollTrigger.refresh();
      });

      cleanupGsap = () => {
        context.revert();
      };
    })();

    return () => {
      isUnmounted = true;
      cleanupGsap?.();
    };
  }, [active]);

  return null;
}
