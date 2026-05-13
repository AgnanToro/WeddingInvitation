'use client';

import { Cormorant_Garamond } from 'next/font/google';
import { Merienda, Roboto } from 'next/font/google';

interface HeaderProps {
  onOpenInvitation?: () => void;
  guestName?: string;
}

const heroFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const meriendaFont = Merienda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Header({ onOpenInvitation, guestName }: HeaderProps) {
  const displayName = guestName && guestName.length > 0 ? guestName : 'Tamu Undangan';

  return (
    <header className="w-full flex justify-center overflow-hidden">
      <div className="relative w-full md:w-130 max-w-full h-screen overflow-hidden rounded-none border-x-0 md:border-x md:border-black/15 shadow-2xl isolate">
        {/* Background images: full left swipe 1 -> 2 -> 1 */}
        <div className="absolute inset-0 z-0">
          <div className="hero-track" aria-hidden>
            <div className="hero-pane hero-pane-1" />
            <div className="hero-pane hero-pane-2" />
            <div className="hero-pane hero-pane-1" />
          </div>
          <div className="absolute inset-0 bg-black/35" aria-hidden />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 w-full flex items-center justify-center px-6">
          <div className="w-full h-full flex flex-col items-center justify-between text-center pt-6 pb-10 sm:pt-12 sm:pb-2">
          {/* Top */}
          <div className="space-y-2">
            <p className={`${heroFont.className} hero-enter hero-enter-1 text-[#f3ead5] text-sm sm:text-base font-semibold tracking-[0.34em] uppercase drop-shadow-lg`}>
              The Wedding Of
            </p>
            <h1 className={`${heroFont.className} hero-enter hero-enter-2 text-4xl sm:text-6xl font-semibold text-[#fff8ec] drop-shadow-2xl tracking-normal leading-[0.95]`}>
              Azis & Laeli
            </h1>
            <p className={`${heroFont.className} hero-enter hero-enter-3 text-[#f3ead5] text-lg sm:text-2xl font-medium drop-shadow-lg leading-none`}>
             Selasa, 26 Mei 2026
            </p>
          </div>

          {/* Bottom */}
          <div className="w-full space-y-3 -translate-y-8 sm:-translate-y-12">
            <p className={`${robotoFont.className} hero-enter hero-enter-4 text-[#f3ead5] text-sm font-medium drop-shadow-lg`}>
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>
            <p className={`${meriendaFont.className} hero-enter hero-enter-5 text-[#fff8ec] text-xl sm:text-2xl font-semibold drop-shadow-lg`}>
              {displayName}
            </p>

            <button
              onClick={() => onOpenInvitation?.()}
              className={`${meriendaFont.className} hero-enter hero-enter-6 mt-2 w-auto mx-auto px-5 py-2.5 bg-[#d9c08f]/95 hover:bg-[#dcc596] text-[#4b3a1f] font-semibold rounded-lg transition-transform duration-200 hover:scale-[1.02] shadow-[0_10px_24px_rgba(0,0,0,0.28)] inline-flex items-center justify-center gap-2 text-xs`}
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 6.5C4 5.11929 5.11929 4 6.5 4H17.5C18.8807 4 20 5.11929 20 6.5V17.5C20 18.8807 18.8807 20 17.5 20H6.5C5.11929 20 4 18.8807 4 17.5V6.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M6.5 7.5L12 11.5L17.5 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Buka Undangan
            </button>
          </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-enter {
          opacity: 0;
          transform: translate3d(0, 14px, 0) scale(0.98);
          animation: heroTextIn 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-enter-1 {
          animation-delay: 80ms;
        }

        .hero-enter-2 {
          animation-delay: 180ms;
        }

        .hero-enter-3 {
          animation-delay: 280ms;
        }

        .hero-enter-4 {
          animation-delay: 460ms;
        }

        .hero-enter-5 {
          animation-delay: 560ms;
        }

        .hero-enter-6 {
          animation-delay: 680ms;
        }

        .hero-track {
          position: absolute;
          inset: -4px;
          width: calc(300% + 8px);
          display: flex;
          will-change: transform;
          animation: heroTrackSlide 12s linear infinite;
        }

        .hero-pane {
          width: 33.3333%;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          filter: saturate(1.02);
        }

        .hero-pane-1 {
          background-image: url('/couple-header.webp');
        }

        .hero-pane-2 {
          background-image: url('/couple-header2.webp');
        }

        @keyframes heroTrackSlide {
          0% {
            transform: translate3d(-66.6667%, 0, 0);
          }
          30% {
            transform: translate3d(-66.6667%, 0, 0);
          }
          50% {
            transform: translate3d(-33.3333%, 0, 0);
          }
          80% {
            transform: translate3d(-33.3333%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }

        @keyframes heroTextIn {
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-enter {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .hero-track {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
