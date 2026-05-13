'use client';

import Image from 'next/image';
import { Cormorant_Garamond, Parisienne, Playfair_Display } from 'next/font/google';

const titleFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
});

const scriptFont = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
});

const quoteFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
});

const galleryItems = [
  { src: '/halaman3-2.webp', alt: 'Portrait pasangan di jalan', ratio: 'aspect-[4/5]' },
  { src: '/halaman3-3.webp', alt: 'Pasangan berdiri bersama', ratio: 'aspect-[4/5]' },
  { src: '/halaman2-1.webp', alt: 'Pasangan di area hutan pinus', ratio: 'aspect-[4/5]' },
  { src: '/halaman2-2.webp', alt: 'Detail tangan cincin pasangan', ratio: 'aspect-[4/5]' },
  { src: '/halaman3-4.webp', alt: 'Pasangan bersepeda', ratio: 'aspect-[16/10]' },
  { src: '/halaman2-3.webp', alt: 'Momen candid pasangan', ratio: 'aspect-[4/5]' },
  { src: '/halaman3-1.webp', alt: 'Momen dekorasi pernikahan', ratio: 'aspect-[4/5]' },
  { src: '/halaman3-3.webp', alt: 'Pasangan berjalan bersama', ratio: 'aspect-[16/10]' },
];

export default function EventDetails() {
  return (
    <section className="-mt-px flex w-full justify-center overflow-x-hidden overflow-y-visible pt-px">
      <div className="relative w-full max-w-full px-5 py-10 sm:px-8 sm:py-14 md:w-130 md:border-x md:border-black/15 bg-white">
        <div className="pointer-events-none absolute -right-20 top-8 h-60 w-60 rounded-full bg-white/25 blur-3xl" />

        <header className="mx-auto mb-7 w-full max-w-190 text-center sm:mb-10">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <div className="h-px w-14 bg-[#70757e]/60 sm:w-24" />
            <h2 className={`${titleFont.className} text-[2.5rem] font-semibold leading-none text-[#555b63] sm:text-[3.25rem]`}>
              Wedding
            </h2>
            <div className="h-px w-14 bg-[#70757e]/60 sm:w-24" />
          </div>
          <p className={`${scriptFont.className} -mt-2 text-[2.8rem] leading-none text-[#8a8f72] sm:-mt-3 sm:text-[3.8rem]`}>
            Moments
          </p>
        </header>

        <div className="mx-auto w-full max-w-190 space-y-4 sm:space-y-5">
          <figure className="overflow-hidden rounded-xs">
            <div className="relative aspect-video w-full" data-zoom-image>
              <Image
                src="/halaman3-1.webp"
                alt="Galeri utama wedding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 760px"
                priority
              />
            </div>
          </figure>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <figure className="overflow-hidden rounded-md">
              <div className="relative aspect-4/5 w-full">
                <Image
                  src="/halaman3-2.webp"
                  alt="Pasangan berdiri di jalan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 360px"
                />
              </div>
            </figure>
            <figure className="overflow-hidden rounded-md">
              <div className="relative aspect-4/5 w-full">
                <Image
                  src="/halaman3-3.webp"
                  alt="Pasangan berpose santai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 360px"
                />
              </div>
            </figure>
          </div>

          <div className="columns-2 gap-4 sm:gap-5">
            {galleryItems.map((item, idx) => (
              <figure key={`${item.src}-${idx}`} className="mb-4 break-inside-avoid overflow-hidden rounded-md sm:mb-5">
                <div className={`relative w-full ${item.ratio}`} data-zoom-image>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 360px"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>

        <blockquote
          className={`${quoteFont.className} mx-auto mt-14 max-w-160 px-3 text-center text-[20px] leading-[1.6] text-[#7e7a6a] sm:mt-16 sm:text-[20px]`}
        >
          <span className="text-[20px]">“</span>I love you. I am who I am because of you. You are every
          reason, every hope, and every dream I&apos;ve ever had, and no matter what happens to us in the future,
          everyday we are together is the greatest day of my life. I will always be yours.<span className="text-[20px]">”</span>
        </blockquote>
      </div>
    </section>
  );
}
