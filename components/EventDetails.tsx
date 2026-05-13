'use client';

import { Cormorant_Garamond } from 'next/font/google';

const bgColor = '#d9c08f';
const accentColor = '#b9965a';
const textPrimary = '#4b3a1f';
const textMuted = '#4b3a1f';
const mapsBtnBg = '#d9c08f';
const mapsBtnText = '#4b3a1f';

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

type EventCardData = {
  id: string;
  sidebarLabel: string;
  sidebarPosition: 'left' | 'right';
  /** Same carousel direction as CoupleStory groom (left) / bride (right) */
  slideDirection: 'left' | 'right';
  dayName: string;
  dateLine: string;
  timeLine: string;
  venueLine: string;
  addressLine: string;
  mapsUrl: string;
};

const events: EventCardData[] = [
  {
    id: 'akad',
    sidebarLabel: 'Akad Nikah',
    sidebarPosition: 'left',
    slideDirection: 'left',
    dayName: 'Sabtu',
    dateLine: '26 Mei 2026',
    timeLine: 'Pukul : 09.00 WIB - Selesai',
    venueLine: 'Kediaman Mempelai Wanita',
    addressLine: 'Blok Karang Desa Sumber Lor Kec. Babakan Kab.Cirebon',
    mapsUrl: 'https://www.google.com/maps?q=-6.8754898,108.7331113',
  },
  {
    id: 'resepsi',
    sidebarLabel: 'Resepsi',
    sidebarPosition: 'right',
    slideDirection: 'right',
    dayName: 'Sabtu',
    dateLine: '26 Mei 2026',
    timeLine: 'Pukul : 10.00 WIB - Selesai',
    venueLine: 'Kediaman Mempelai Wanita',
    addressLine: 'Blok Karang Anyar Desa Sumber Lor Kec. Babakan Kab.Cirebon',
    mapsUrl: 'https://www.google.com/maps?q=-6.8754898,108.7331113',
  },
];

function MapIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke={mapsBtnText}
        strokeWidth="1.6"
        fill="none"
      />
      <circle cx="12" cy="9" r="2.2" fill={mapsBtnText} />
    </svg>
  );
}

function EventCard({ data }: { data: EventCardData }) {
  const trackClass =
    data.slideDirection === 'left' ? 'event-photo-track-left' : 'event-photo-track-right';

  const sidebar = (
    <div
      className={`flex w-[3.25rem] shrink-0 flex-col items-center justify-center py-5 sm:w-16 ${displayFont.className}`}
      style={{ backgroundColor: accentColor }}
    >
      <p
        className="text-center text-[0.95rem] font-semibold tracking-[0.12em] text-white sm:text-[1.05rem]"
        style={{ writingMode: 'vertical-rl' }}
      >
        {data.sidebarLabel}
      </p>
    </div>
  );

  const body = (
    <div className="flex flex-1 flex-col items-center justify-center bg-white px-4 py-5 text-center sm:px-6 sm:py-6">
      <div className={`${displayFont.className} flex flex-col items-center text-[#5c6068]`}>
        <p className="text-[2rem] font-semibold leading-none text-[#4f5660] sm:text-[2.2rem]">
          {data.dayName}
        </p>
        <p className="mt-1 text-[1.3rem] font-medium leading-tight sm:text-[1.4rem]">{data.dateLine}</p>
        <p className="mt-1.5 text-[0.98rem] font-medium leading-tight sm:text-[1.05rem]">{data.timeLine}</p>
        <p className="mt-2 text-[0.95rem] font-medium italic leading-tight text-[#6f7178] sm:text-[1rem]">
          Bertempat di
        </p>
        <p className="mt-0.5 text-[1.08rem] font-bold leading-snug text-[#4f5660] sm:text-[1.15rem]">
          {data.venueLine}
        </p>
        <p className="mt-1 max-w-[300px] text-[0.92rem] font-medium leading-snug text-[#6f7178] sm:text-[0.98rem]">
          {data.addressLine}
        </p>
      </div>
      <a
        href={data.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${displayFont.className} mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2 text-[0.9rem] font-semibold tracking-[0.12em] shadow-[0_8px_18px_rgba(120,95,45,0.22)] transition hover:opacity-95`}
        style={{ backgroundColor: mapsBtnBg, color: mapsBtnText }}
      >
        <MapIcon />
        Maps
      </a>
    </div>
  );

  return (
    <article
      className="event-card mx-auto w-full overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.14)]"
      style={{ maxWidth: '520px' }}
    >
      <div className="relative aspect-[5/3] w-full overflow-hidden rounded-t-2xl sm:aspect-[16/9]">
        <div className="event-photo-viewport relative h-full w-full overflow-hidden">
          <div className={`event-photo-track ${trackClass}`} aria-hidden>
            {data.slideDirection === 'left' ? (
              <>
                <div className="event-photo-pane event-pane-akad-1" />
                <div className="event-photo-pane event-pane-akad-2" />
                <div className="event-photo-pane event-pane-akad-1" />
              </>
            ) : (
              <>
                <div className="event-photo-pane event-pane-resepsi-1" />
                <div className="event-photo-pane event-pane-resepsi-2" />
                <div className="event-photo-pane event-pane-resepsi-1" />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex min-h-0 flex-row">
        {data.sidebarPosition === 'left' ? (
          <>
            {sidebar}
            {body}
          </>
        ) : (
          <>
            {body}
            {sidebar}
          </>
        )}
      </div>

      <style jsx>{`
        .event-photo-viewport {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          isolation: isolate;
          contain: paint;
        }

        .event-photo-track {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 300%;
          display: flex;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .event-photo-pane {
          flex: 0 0 33.333333%;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center top;
          filter: saturate(1.02);
        }

        .event-pane-akad-1 {
          background-image: url('/halaman3-1.webp');
        }

        .event-pane-akad-2 {
          background-image: url('/halaman3-2.webp');
        }

        .event-pane-resepsi-1 {
          background-image: url('/halaman3-3.webp');
        }

        .event-pane-resepsi-2 {
          background-image: url('/halaman3-4.webp');
        }

        .event-photo-track-left {
          animation: eventPhotoTrackLeft 12.5s ease-in-out infinite;
        }

        .event-photo-track-right {
          animation: eventPhotoTrackRight 12.5s ease-in-out infinite;
        }

        @keyframes eventPhotoTrackLeft {
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

        @keyframes eventPhotoTrackRight {
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
          .event-photo-track-left,
          .event-photo-track-right {
            animation: none;
          }
        }

        .event-card {
          isolation: isolate;
          contain: layout;
        }
      `}</style>
    </article>
  );
}

export default function EventDetails() {
  return (
    <section className="-mt-px flex w-full justify-center overflow-x-hidden overflow-y-visible pt-px">
      <div
        className="relative w-full max-w-full px-6 py-10 sm:px-10 sm:py-14 md:w-130 md:border-x md:border-black/15"
        style={{ backgroundColor: bgColor }}
      >
        <header
          className="relative z-20 mb-8 text-center sm:mb-10"
          style={{
            transform: 'translateZ(0)',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          <h2
            className={`${displayFont.className} text-[1.9rem] font-medium leading-none sm:text-[3rem]`}
            style={{ color: textPrimary }}
          >
            Acara Utama
          </h2>
          <p className="mt-2 font-sans text-[0.82rem] font-normal sm:text-[0.88rem]" style={{ color: textMuted }}>
            Akad Nikah & Resepsi
          </p>
        </header>

        <div className="mx-auto flex w-full flex-col gap-8 sm:gap-10" style={{ maxWidth: '520px' }}>
          {events.map((e) => (
            <EventCard key={e.id} data={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
