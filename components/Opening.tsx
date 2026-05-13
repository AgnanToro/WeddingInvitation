"use client";

import { useEffect, useMemo, useState } from 'react';
import { Cormorant_Garamond, Parisienne, Playfair_Display } from 'next/font/google';

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const sectionBg = '#d9c08f';
const textPrimary = '#4b3a1f';
const textSoft = '#6a5733';

const titleFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
});

const scriptFont = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
});

const bodyFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const TARGET_DATE = new Date('2026-05-26T00:00:00+07:00').getTime();

function getCountdown(): Countdown {
  const now = Date.now();
  const distance = Math.max(0, TARGET_DATE - now);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function Opening() {
  const [countdown, setCountdown] = useState<Countdown>(() => getCountdown());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const countdownItems = useMemo(
    () => [
      { value: countdown.days, label: 'Hari' },
      { value: countdown.hours, label: 'Jam' },
      { value: countdown.minutes, label: 'Menit' },
      { value: countdown.seconds, label: 'Detik' }
    ],
    [countdown]
  );

  return (
    <section className="w-full flex justify-center overflow-hidden">
      <div
        className="relative w-full md:w-130 min-h-screen overflow-hidden border-x-0 md:border-x md:border-black/15 isolate"
        style={{ backgroundColor: sectionBg }}
      >
        <div className="relative h-[68vh] min-h-105 overflow-hidden">
          <div className="absolute inset-0">
            <div className="opening-bg opening-bg-1" aria-hidden />
            <div className="opening-bg opening-bg-2" aria-hidden />
            <div className="opening-bg opening-bg-3" aria-hidden />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(53, 42, 20, 0.35), rgba(70, 53, 24, 0.28), rgba(100, 75, 34, 0.58))',
              }}
              aria-hidden
            />
          </div>

          <div className="relative h-full w-full flex flex-col items-center justify-between text-center px-6 pt-10 pb-14">
            <p className={`${titleFont.className} text-[#fff8eb] text-sm sm:text-base font-semibold drop-shadow-lg mb-2 uppercase tracking-[0.28em]`}>
              THE WEDDING OF
            </p>

            <div className="w-full max-w-lg space-y-5">
              <div className="text-center space-y-2">
                <h2 className={`${scriptFont.className} text-[3rem] sm:text-[4.4rem] text-[#fff8eb] drop-shadow-2xl leading-none`}>
                  Azis & Laeli
                </h2>
                <p className={`${bodyFont.className} text-[1.35rem] sm:text-[1.7rem] font-semibold text-[#fff0cf] drop-shadow-2xl leading-tight tracking-[0.03em]`}>
                  Selasa, 26 Mei 2026
                </p>
              </div>

              <div className="grid grid-cols-4 gap-2.5 w-full max-w-lg mx-auto">
              {countdownItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border py-3 shadow-[0_10px_24px_rgba(70,50,15,0.26)] backdrop-blur-sm"
                  style={{
                    borderColor: 'rgba(255, 245, 226, 0.55)',
                    background: 'linear-gradient(to bottom, rgba(255,246,228,0.94), rgba(243,221,177,0.92))',
                  }}
                >
                  <div className={`${bodyFont.className} text-[1.55rem] sm:text-[1.9rem] font-bold leading-none mb-1`} style={{ color: textPrimary }}>
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className={`${bodyFont.className} text-[0.78rem] sm:text-[0.88rem] font-semibold tracking-wide`} style={{ color: textSoft }}>
                    {item.label}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-px left-0 w-full" aria-hidden>
            <div
              className="h-14 w-full"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(217, 192, 143, 0), rgba(217, 192, 143, 0.82) 55%, rgba(217, 192, 143, 1) 100%)',
              }}
            />
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 opacity-85">
              <span className="h-px w-7 bg-[#b9965a]/70" />
              <span className="h-2 w-2 rotate-45 border border-[#b9965a]/80 bg-[#f8edd7]" />
              <span className="h-px w-7 bg-[#b9965a]/70" />
            </div>
          </div>
        </div>

        <div className="relative w-full px-5 py-6" style={{ backgroundColor: sectionBg }}>

            <div
              className="w-full rounded-2xl border backdrop-blur-sm text-center px-4 py-4 shadow-[0_12px_30px_rgba(112,84,33,0.16)]"
              style={{
                borderColor: 'rgba(145, 109, 52, 0.26)',
                background: 'rgba(255, 248, 233, 0.88)',
              }}
            >
              <p className={`${bodyFont.className} text-[1.15rem] mb-4 leading-relaxed`} style={{ color: textPrimary }} dir="rtl">
                وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ .
              </p>
              <p className={`${bodyFont.className} text-[0.98rem] sm:text-[1.06rem] font-semibold mb-3 leading-snug`} style={{ color: textSoft }}>
                Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
              </p>
              <p className={`${bodyFont.className} text-[0.95rem] sm:text-[1rem] font-bold`} style={{ color: textPrimary }}>
                (QS. Ar-rum Ayat 21)
              </p>
            </div>
        </div>
      </div>

      <style jsx>{`
        .opening-bg {
          position: absolute;
          inset: -4px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          will-change: transform, opacity;
          filter: saturate(1.03);
        }

        .opening-bg-1 {
          background-image: url('/halaman2-1.webp');
          animation: intro1 18s ease-in-out infinite;
        }

        .opening-bg-2 {
          background-image: url('/halaman2-2.webp');
          animation: intro2 18s ease-in-out infinite;
        }

        .opening-bg-3 {
          background-image: url('/halaman2-3.webp');
          animation: intro3 18s ease-in-out infinite;
        }

        @keyframes intro1 {
          0% {
            opacity: 1;
            transform: scale(1.08) translate3d(0px, 0px, 0);
          }
          30% {
            opacity: 1;
            transform: scale(1.12) translate3d(-6px, 6px, 0);
          }
          36% {
            opacity: 0;
            transform: scale(1.12) translate3d(-6px, 6px, 0);
          }
          100% {
            opacity: 0;
            transform: scale(1.08) translate3d(0px, 0px, 0);
          }
        }

        @keyframes intro2 {
          0% {
            opacity: 0;
            transform: scale(1.08) translate3d(0px, 0px, 0);
          }
          30% {
            opacity: 0;
            transform: scale(1.12) translate3d(6px, -6px, 0);
          }
          36% {
            opacity: 1;
            transform: scale(1.12) translate3d(6px, -6px, 0);
          }
          66% {
            opacity: 1;
            transform: scale(1.12) translate3d(0px, 6px, 0);
          }
          72% {
            opacity: 0;
            transform: scale(1.12) translate3d(0px, 6px, 0);
          }
          100% {
            opacity: 0;
            transform: scale(1.08) translate3d(0px, 0px, 0);
          }
        }

        @keyframes intro3 {
          0% {
            opacity: 0;
            transform: scale(1.08) translate3d(0px, 0px, 0);
          }
          66% {
            opacity: 0;
            transform: scale(1.12) translate3d(-6px, -6px, 0);
          }
          72% {
            opacity: 1;
            transform: scale(1.12) translate3d(-6px, -6px, 0);
          }
          100% {
            opacity: 1;
            transform: scale(1.12) translate3d(0px, 0px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .opening-bg-1,
          .opening-bg-2,
          .opening-bg-3 {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
