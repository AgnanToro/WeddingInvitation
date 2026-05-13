'use client';

import Image from 'next/image';
import { useState } from 'react';
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
  weight: ['400', '500', '600'],
});

type GiftAccount = {
  id: string;
  bank?: string;
  holder: string;
  number: string;
  logoSrc?: string;
  logoAlt?: string;
  type: 'bank' | 'gift';
  copyLabel?: string;
};

const accounts: GiftAccount[] = [
  {
    id: 'bca',
    type: 'bank',
    bank: 'BCA',
    holder: 'Kondanganmu ID',
    number: '081219108932',
    // Simpan file logo di /public lalu isi path berikut
    logoSrc: '/logo-bca.webp',
    logoAlt: 'Logo BCA',
    copyLabel: 'SALIN',
  },
  {
    id: 'bri',
    type: 'bank',
    bank: 'BANK BRI',
    holder: 'Kondanganmu ID',
    number: '123456',
    logoSrc: '/logo-bri.webp',
    logoAlt: 'Logo BRI',
    copyLabel: 'SALIN',
  },
  {
    id: 'gift-address',
    type: 'gift',
    holder: 'Kirim Kado',
    number: 'Putraa - +62 85000000000 - btn dutamas blok D/6',
    copyLabel: 'SALIN',
  },
];

function GiftIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 10.5H20V19.2C20 20.1941 19.1941 21 18.2 21H5.8C4.80589 21 4 20.1941 4 19.2V10.5Z" fill="currentColor" />
      <path d="M3 8.2C3 7.20589 3.80589 6.4 4.8 6.4H19.2C20.1941 6.4 21 7.20589 21 8.2V10.6H3V8.2Z" fill="currentColor" />
      <path d="M12 6.4V21" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.7 6.2C7.706 6.2 6.9 5.394 6.9 4.4C6.9 3.406 7.706 2.6 8.7 2.6C11.1 2.6 12 6.2 12 6.2H8.7Z" fill="currentColor" />
      <path d="M15.3 6.2C16.294 6.2 17.1 5.394 17.1 4.4C17.1 3.406 16.294 2.6 15.3 2.6C12.9 2.6 12 6.2 12 6.2H15.3Z" fill="currentColor" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="9" y="8" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6.5 16H6C4.9 16 4 15.1 4 14V6C4 4.9 4.9 4 6 4H13C14.1 4 15 4.9 15 6V6.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function Chip() {
  return (
    <div className="h-8 w-12 rounded-md border border-[#f1b869] bg-[linear-gradient(140deg,#f08a2d_10%,#f5cf73_55%,#f18a2d_100%)]">
      <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-px p-0.5 opacity-80">
        <div className="rounded-sm border border-[#cb7b35]/70" />
        <div className="rounded-sm border border-[#cb7b35]/70" />
        <div className="rounded-sm border border-[#cb7b35]/70" />
        <div className="rounded-sm border border-[#cb7b35]/70" />
      </div>
    </div>
  );
}

function BankLogo({ account }: { account: GiftAccount }) {
  const [failed, setFailed] = useState(false);

  if (account.logoSrc && !failed) {
    return (
      <Image
        src={account.logoSrc}
        alt={account.logoAlt ?? account.bank ?? 'Logo Bank'}
        width={108}
        height={32}
        onError={() => setFailed(true)}
        className="h-7 w-auto max-w-27 object-contain object-right sm:h-8"
      />
    );
  }

  return <div className="text-[#1a73bd] text-[1.2rem] font-semibold leading-none sm:text-[1.35rem]">{account.bank ?? 'BANK'}</div>;
}

function GiftCard({ account }: { account: GiftAccount }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(account.number);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="relative mx-auto w-full max-w-90 overflow-hidden rounded-[20px] border border-white/75 bg-[#fefefe]/98 px-3.5 py-3 shadow-[0_12px_24px_rgba(26,30,32,0.24)] sm:px-4 sm:py-3.5">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'repeating-radial-gradient(circle at 110% 110%, rgba(214,186,136,0.22) 0px, rgba(214,186,136,0.22) 1px, transparent 1px, transparent 7px)',
        }}
      />

      <div className="relative flex min-h-7 items-center justify-end">
        {account.type === 'bank' ? <BankLogo account={account} /> : null}
      </div>

      {account.type === 'bank' ? (
        <div className="relative mt-2.5 flex flex-1 flex-col justify-between">
          <div>
            <Chip />
            <p className="mt-1 text-[0.98rem] font-medium leading-none text-[#656b72] sm:text-[1.08rem]">{account.holder}</p>
            <p className="mt-0.5 text-[0.82rem] font-medium tracking-[0.01em] text-[#6e747b] sm:text-[0.88rem] max-w-55">{account.number}</p>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex min-w-22 self-end items-center justify-center gap-1 rounded-md bg-[#5b6068] px-2.5 py-1.5 text-[0.6rem] font-semibold tracking-[0.17em] text-white transition hover:bg-[#4d525a]"
          >
            <CopyIcon />
            {copied ? 'TERSALIN' : account.copyLabel ?? 'SALIN'}
          </button>
        </div>
      ) : (
        <div className="relative mt-2.5 flex flex-1 flex-col items-center justify-center text-center">
          <div className="text-[#121416]">
            <GiftIcon />
          </div>
          <p className="mt-2.5 text-[1.22rem] font-semibold leading-none text-[#575c63] sm:text-[1.35rem]">{account.holder}</p>
          <p className="mt-2 max-w-72 text-[0.9rem] font-medium leading-relaxed text-[#6e747b] sm:text-[0.96rem]">{account.number}</p>

          <button
            type="button"
            onClick={handleCopy}
            className="mt-3 inline-flex min-w-36 items-center justify-center gap-1 rounded-md bg-[#5b6068] px-3 py-1.5 text-[0.64rem] font-semibold tracking-[0.2em] text-white transition hover:bg-[#4d525a]"
          >
            <CopyIcon />
            {copied ? 'TERSALIN' : account.copyLabel ?? 'SALIN'}
          </button>
        </div>
      )}
    </article>
  );
}

export default function WeddingGift() {
  return (
    <section className="w-full flex justify-center overflow-hidden">
      <div className="relative w-full md:w-130 max-w-full overflow-hidden border-x-0 md:border-x md:border-black/15 px-4 py-10 sm:px-6 sm:py-12">
        <div className="absolute inset-0">
          <div className="gift-pane gift-pane-1" aria-hidden />
          <div className="absolute inset-0 bg-[rgba(31,41,36,0.58)]" />
        </div>

        <div className="relative mx-auto w-full max-w-190">
          <header className="text-center">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <h2 className={`${titleFont.className} text-[2.2rem] font-semibold leading-none text-white sm:text-[3rem]`}>
                Wedding
              </h2>
              <span className="h-px w-24 bg-white/75 sm:w-56" />
            </div>
            <p className={`${scriptFont.className} -mt-2 text-[2.5rem] leading-none text-[#f8ead2] sm:text-[3rem]`}>Gift</p>
            <p className={`${bodyFont.className} mx-auto mt-5 max-w-142.5 text-[0.82rem] leading-relaxed text-white/95 sm:text-[0.92rem]`}>
              Doa Restu Anda merupakan karunia yang sangat<br></br> berarti bagi kami. Namun jika memberi adalah <br></br>ungkapan tanda kasih Anda,
             Anda dapat <br></br> memberi kado secara cashless.
            </p>
          </header>

          <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
            {accounts.map((account) => (
              <GiftCard key={account.id} account={account} />
            ))}
          </div>
        </div>

        <style jsx>{`
          .gift-pane {
            position: absolute;
            inset: -3px;
            width: calc(100% + 6px);
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            filter: saturate(1.03);
          }

          .gift-pane-1 {
            background-image: url('/halaman3-2.webp');
          }

        `}</style>
      </div>
    </section>
  );
}
