'use client';

import { Cormorant_Garamond } from 'next/font/google';

const bgColor = '#fffff';
const accentColor = '#b9965a';
const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function CoupleStory() {
  return (
    <section className="w-full flex justify-center overflow-x-hidden overflow-y-visible">
      <div
        className="relative w-full md:w-130 max-w-full overflow-x-hidden overflow-y-visible border-x-0 md:border-x md:border-black/15 isolate px-6 sm:px-10 py-10 sm:py-14"
        style={{ backgroundColor: bgColor }}
      >
        <p className={`${displayFont.className} text-center text-[#4f5660] text-[1.6rem] sm:text-[2rem] font-medium leading-none mb-8 sm:mb-10`}>Our Pray</p>

        <div
          className="mx-auto mb-10 sm:mb-12 rounded-3xl border border-white/70 bg-white/90 px-6 py-6 text-center shadow-[0_16px_38px_rgba(109,89,52,0.16)]"
          style={{ maxWidth: '640px' }}
          data-anim-card
        >
          <p className={`${displayFont.className} text-[1.05rem] sm:text-[1.15rem] italic leading-relaxed text-[#5c6068]`}>
            &quot;I love you. I am who I am because of you. You are every reason, every hope, and every dream I&apos;ve ever had, and no matter what happens to us in the future, everyday we are together is the greatest day of my life. I will always be yours.&quot;
          </p>
        </div>

        <article
          className="relative w-full mx-auto mb-10 sm:mb-14 pr-11 sm:pr-0"
          style={{ maxWidth: '600px' }}
        >
          <p
            className={`${displayFont.className} absolute -right-2 sm:-right-3 top-1/7 -translate-y-1/2 text-[2rem] sm:text-[3rem] font-semibold tracking-[0.08em] leading-none`}
            style={{ writingMode: 'vertical-rl', color: accentColor }}
          >
            THE GROOM
          </p>

          <div
            className="relative aspect-4/5 w-full mr-auto ml-2 sm:ml-4 overflow-hidden border-2 border-white bg-white p-2 shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
            style={{ maxWidth: '300px' }}
          >
            <div className="photo-viewport">
              <div className="photo-track photo-track-groom" aria-hidden>
                <div className="photo-pane photo-pane-groom-1" />
                <div className="photo-pane photo-pane-groom-2" />
                <div className="photo-pane photo-pane-groom-1" />
              </div>
            </div>
          </div>

          <div className="pt-5 ml-2 sm:ml-4 text-[#5c6068]" style={{ maxWidth: '300px' }}>
            <h3 className={`${displayFont.className} text-[2.4rem] sm:text-[2.7rem] font-medium leading-[0.96]`}>Abdul Azis</h3>
            <p className={`${displayFont.className} mt-5 text-[1.45rem] sm:text-[1.55rem] font-medium italic leading-none text-[#6f7178]`}>Putra ke - 3 dari</p>
            <p className={`${displayFont.className} mt-1 text-[1.2rem] sm:text-[1.3rem] font-medium italic leading-none text-[#6f7178]`}>Bpk. Mustadi & Ibu Karniah</p>
            <a
              href="https://www.instagram.com/azisabdul06/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 rounded-xl px-5 py-2 text-sm text-[#4b3a1f] font-semibold tracking-[0.12em] shadow-[0_8px_18px_rgba(120,95,45,0.28)]"
              style={{ backgroundColor: '#d9c08f' }}
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
              </svg>
              Abdul Azis
            </a>
          </div>
        </article>

        <article
          className="relative w-full mx-auto pl-11 sm:pl-0"
          style={{ maxWidth: '600px' }}
        >
          <p
            className={`${displayFont.className} absolute left-0 sm:-left-1 top-1/3 -translate-y-1/2 text-[2rem] sm:text-[3rem] font-semibold tracking-[0.08em] leading-none`}
            style={{ writingMode: 'vertical-rl', color: accentColor }}
          >
            THE BRIDE
          </p>

          <div
            className="relative aspect-4/5 w-full ml-auto mr-2 sm:mr-4 overflow-hidden border-2 border-white bg-white p-2 shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            style={{ maxWidth: '300px' }}
          >
            <div className="photo-viewport">
              <div className="photo-track photo-track-bride" aria-hidden>
                <div className="photo-pane photo-pane-bride-1" />
                <div className="photo-pane photo-pane-bride-2" />
                <div className="photo-pane photo-pane-bride-1" />
              </div>
            </div>
          </div>

          <div className="pt-5 ml-auto mr-2 sm:mr-4 text-right text-[#5c6068]" style={{ maxWidth: '300px' }}>
            <h3 className={`${displayFont.className} text-[2.4rem] sm:text-[2.7rem] font-medium leading-[0.96]`}>Nurfi Laeli</h3>
            <p className={`${displayFont.className} mt-5 text-[1.45rem] sm:text-[1.55rem] font-medium italic leading-none text-[#6f7178]`}>Putri ke - 2 dari</p>
            <p className={`${displayFont.className} mt-1 text-[1.2rem] sm:text-[1.3rem] font-medium italic leading-none text-[#6f7178]`}>Bpk. Taryono  & Ibu Waskinah</p>
            <a
              href="https://www.instagram.com/amalia.nurfi/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 rounded-xl px-5 py-2 text-sm text-[#4b3a1f] font-semibold tracking-[0.12em] shadow-[0_8px_18px_rgba(120,95,45,0.28)]"
              style={{ backgroundColor: '#d9c08f' }}
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
              </svg>
              Nurfi Laeli
            </a>
          </div>
        </article>
      </div>

      <style jsx>{`
        .photo-viewport {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .photo-track {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 300%;
          display: flex;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        .photo-pane {
          flex: 0 0 33.333333%;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center top;
          filter: saturate(1.02);
        }

        .photo-track-groom {
          animation: photoTrackLeft 12.5s ease-in-out infinite;
        }

        .photo-track-bride {
          animation: photoTrackRight 12.5s ease-in-out infinite;
        }

        .photo-pane-groom-1 {
          background-image: url('/halaman2-1.webp');
        }

        .photo-pane-groom-2 {
          background-image: url('/halaman2-3.webp');
        }

        .photo-pane-bride-1 {
          background-image: url('/halaman2-2.webp');
        }

        .photo-pane-bride-2 {
          background-image: url('/halaman2-3.webp');
        }

        @keyframes photoTrackLeft {
          0% {
            transform: translate3d(-66.6667%, 0, 0);
          }
          38% {
            transform: translate3d(-66.6667%, 0, 0);
          }
          44% {
            transform: translate3d(-33.3333%, 0, 0);
          }
          78% {
            transform: translate3d(-33.3333%, 0, 0);
          }
          84% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }

        @keyframes photoTrackRight {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          38% {
            transform: translate3d(0%, 0, 0);
          }
          44% {
            transform: translate3d(-33.3333%, 0, 0);
          }
          78% {
            transform: translate3d(-33.3333%, 0, 0);
          }
          84% {
            transform: translate3d(-66.6667%, 0, 0);
          }
          100% {
            transform: translate3d(-66.6667%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .photo-track-groom,
          .photo-track-bride {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
