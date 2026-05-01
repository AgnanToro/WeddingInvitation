'use client';

import { useEffect, useMemo, useState } from 'react';
import { Parisienne, Playfair_Display, Poppins } from 'next/font/google';

const titleFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
});

const scriptFont = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
});

const bodyFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const sectionBg = '#d9c08f';
const accentColor = '#b9965a';
const textPrimary = '#4b3a1f';
const textMuted = '#6a5733';

type Attendance = 'hadir' | 'tidak-hadir';

type Wish = {
  id: string;
  name: string;
  attendance: Attendance;
  message: string;
  guestCount?: number;
  createdAt: number;
};

const STORAGE_KEY = 'wedding-wishes:v1';
const LEGACY_NAME = 'kondanganmu12';
const UPDATED_NAME = 'Agnan toro';

function normalizeWish(wish: Wish): Wish {
  if (wish.name.trim().toLowerCase() === LEGACY_NAME) {
    return { ...wish, name: UPDATED_NAME };
  }
  return wish;
}

const defaultWishes: Wish[] = [
  {
    id: '1',
    name: UPDATED_NAME,
    attendance: 'hadir',
    message: 'Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Lancar sampai hari H.',
    guestCount: 2,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 9,
  },
];

function formatRelativeTime(time: number) {
  const diff = Date.now() - time;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;

  if (diff < minute) return 'baru saja';
  if (diff < hour) return `${Math.max(1, Math.floor(diff / minute))} menit yang lalu`;
  if (diff < day) return `${Math.max(1, Math.floor(diff / hour))} jam yang lalu`;
  if (diff < week) return `${Math.max(1, Math.floor(diff / day))} hari yang lalu`;
  if (diff < month) return `${Math.max(1, Math.floor(diff / week))} minggu yang lalu`;

  const months = Math.floor(diff / month);
  const weeks = Math.floor((diff % month) / week);
  if (weeks <= 0) return `${months} bulan yang lalu`;
  return `${months} bulan, ${weeks} minggu yang lalu`;
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="8" r="3.6" fill="currentColor" />
      <path
        d="M5 19.2C5 15.9 7.7 13.2 11 13.2H13C16.3 13.2 19 15.9 19 19.2V20H5V19.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M5 12.5L9.5 17L19 7.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M7 7L17 17" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M17 7L7 17" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

export default function WeddingWishes() {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<Attendance>('hadir');
  const [guestCount, setGuestCount] = useState('1');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<Wish[]>(() => {
    if (typeof window === 'undefined') return defaultWishes.map(normalizeWish);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultWishes.map(normalizeWish);
      const parsed = JSON.parse(raw) as Wish[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map(normalizeWish);
      }
      return defaultWishes.map(normalizeWish);
    } catch {
      return defaultWishes.map(normalizeWish);
    }
  });

  useEffect(() => {
    if (!wishes.length) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
  }, [wishes]);

  const charsLeft = useMemo(() => 300 - message.length, [message.length]);
  const canSubmit = name.trim().length > 0 && message.trim().length > 0;

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;

    setWishes((prev) => [
      {
        id: Date.now().toString(),
        name: name.trim(),
        attendance,
        message: message.trim(),
        guestCount: attendance === 'hadir' ? Number(guestCount) : undefined,
        createdAt: Date.now(),
      },
      ...prev,
    ]);

    setName('');
    setMessage('');
    setAttendance('hadir');
    setGuestCount('1');
  };

  return (
    <section className="w-full flex justify-center overflow-hidden">
      <div
        className="relative w-full md:w-130 max-w-full border-x-0 md:border-x md:border-black/15 px-4 py-9 sm:px-6 sm:py-11"
        style={{ backgroundColor: sectionBg }}
      >
        <div className="mx-auto w-full max-w-190">
          <header className="text-center">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <h2 className={`${titleFont.className} text-[2rem] font-semibold leading-none sm:text-[2.6rem]`} style={{ color: textPrimary }}>
                Wedding
              </h2>
              <span className="h-px w-24 sm:w-56" style={{ backgroundColor: 'rgba(75,58,31,0.45)' }} />
            </div>
            <p className={`${scriptFont.className} -mt-2 text-[2.4rem] leading-none sm:text-[3rem]`} style={{ color: accentColor }}>
              Wishes
            </p>
            <p className={`${bodyFont.className} mx-auto mt-4 max-w-125 text-[0.86rem] leading-relaxed sm:text-[0.94rem]`} style={{ color: textMuted }}>
              Tinggalkan kami doa terbaik anda untuk momen bahagia kami
            </p>
          </header>

          <div className="mt-6 flex items-center justify-center gap-2" style={{ color: textPrimary }}>
            <UserIcon className="h-5 w-5" />
            <p className={`${titleFont.className} text-[1.28rem] font-semibold leading-none`}>{wishes.length} Ucapan</p>
          </div>

          <form onSubmit={onSubmit} className="mx-auto mt-5 max-w-130 space-y-2.5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${bodyFont.className} w-full rounded-lg border bg-white/95 px-3.5 py-2.5 text-[0.95rem] text-[#626873] outline-none placeholder:text-[#a1a6af]`}
              style={{ borderColor: 'rgba(145,109,52,0.35)' }}
              placeholder="Nama Anda"
              required
            />

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setAttendance('hadir')}
                className={`${bodyFont.className} inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-[0.92rem] font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200 ${
                  attendance === 'hadir'
                    ? 'border-green-300 bg-green-50 text-green-800 hover:border-green-400 hover:bg-green-100'
                    : 'border-[rgba(145,109,52,0.35)] bg-white/88 text-[#7a8089] hover:border-green-200 hover:bg-green-50/75 hover:text-green-700'
                }`}
              >
                <CheckIcon />
                Hadir
              </button>

              <button
                type="button"
                onClick={() => {
                  setAttendance('tidak-hadir');
                  setGuestCount('1');
                }}
                className={`${bodyFont.className} inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-[0.92rem] font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200 ${
                  attendance === 'tidak-hadir'
                    ? 'border-red-300 bg-red-50 text-red-800 hover:border-red-400 hover:bg-red-100'
                    : 'border-[rgba(145,109,52,0.35)] bg-white/88 text-[#7a8089] hover:border-red-200 hover:bg-red-50/75 hover:text-red-700'
                }`}
              >
                <CloseIcon />
                Tidak Hadir
              </button>
            </div>

            {attendance === 'hadir' && (
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className={`${bodyFont.className} w-full rounded-lg border bg-white/95 px-3.5 py-2.5 text-[0.95rem] text-[#626873] outline-none`}
                style={{ borderColor: 'rgba(145,109,52,0.35)' }}
                aria-label="Jumlah Tamu"
              >
                <option value="1">Jumlah Tamu: 1</option>
                <option value="2">Jumlah Tamu: 2</option>
                <option value="3">Jumlah Tamu: 3</option>
                <option value="4">Jumlah Tamu: 4</option>
                <option value="5">Jumlah Tamu: 5</option>
              </select>
            )}

            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 300))}
                rows={4}
                className={`${bodyFont.className} w-full resize-none rounded-lg border bg-white/95 px-3.5 py-2.5 pr-10 text-[0.95rem] text-[#626873] outline-none placeholder:text-[#a1a6af]`}
                style={{ borderColor: 'rgba(145,109,52,0.35)' }}
                placeholder="Tulis Ucapan"
                required
              />
              <span className="absolute right-3 top-2.5" style={{ color: accentColor }} aria-hidden>
                <UserIcon className="h-5.5 w-5.5" />
              </span>
              <p className={`${bodyFont.className} mt-1 text-right text-[0.92rem]`} style={{ color: '#8e8b80' }}>
                {charsLeft}
              </p>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className={`${titleFont.className} w-full rounded-lg border bg-white/95 px-4 py-2 text-[1.08rem] tracking-[0.06em] transition hover:bg-[#f8f8f8] disabled:cursor-not-allowed disabled:opacity-55`}
              style={{ borderColor: 'rgba(145,109,52,0.35)', color: textMuted }}
            >
              KIRIM
            </button>
          </form>

          <div className="mx-auto mt-5 h-px w-full max-w-155" style={{ backgroundColor: 'rgba(255,248,233,0.7)' }} />

          <div className="mx-auto mt-4 max-h-90 max-w-130 space-y-2.5 overflow-y-auto pr-1.5">
            {wishes.map((wish) => (
              <article key={wish.id} className="relative rounded-xl bg-[#fff8ea] px-3.5 py-2.5 border" style={{ borderColor: 'rgba(145,109,52,0.25)' }}>
                <div className="absolute left-0 top-5 h-3.5 w-3.5 -translate-x-1/2 rotate-45 bg-[#fff8ea] border-l border-t" style={{ borderColor: 'rgba(145,109,52,0.25)' }} />
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#fffaf0]" style={{ backgroundColor: accentColor }}>
                    <UserIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className={`${titleFont.className} text-[1.02rem] font-semibold`} style={{ color: textPrimary }}>{wish.name}</p>
                      <span
                        className={`${bodyFont.className} rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.06em]`}
                        style={{
                          backgroundColor: wish.attendance === 'hadir' ? '#e7f5ea' : '#f8e8e8',
                          color: wish.attendance === 'hadir' ? '#2d7a3f' : '#a14444',
                        }}
                      >
                        {wish.attendance === 'hadir' ? `Hadir${wish.guestCount ? ` (${wish.guestCount})` : ''}` : 'Tidak Hadir'}
                      </span>
                    </div>
                    <p className={`${bodyFont.className} mt-0.5 text-[0.82rem]`} style={{ color: '#6d6a62' }}>{wish.message}</p>
                    <p className={`${bodyFont.className} mt-1 text-[0.72rem] italic`} style={{ color: '#9a907f' }}>
                      {formatRelativeTime(wish.createdAt)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
