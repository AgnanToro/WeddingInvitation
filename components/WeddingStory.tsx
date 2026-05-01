'use client';

import { Cormorant_Garamond, Parisienne, Playfair_Display } from 'next/font/google';

const sectionBg = '#d9c08f';
const accentColor = '#b9965a';
const titleColor = '#4b3a1f';
const textColor = '#56462b';

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
  weight: ['400', '500', '600'],
});

const storyParagraphs = [
  'HAI',
  'Perkenalkan kita ini pasangan LDR yang sebentar lagi akan menuju tujuan yang telah kita usahakan selama 5 tahun lamanya.',
  'Kita mau berbagi sedikit tips buat kalian yang ngejalanin LDR kaya kita. Menurut kita komunikasi yang baik itu ngga harus ngobrol lama setiap hari, tapi yang jelas bikin tenang dan ngga bikin salah faham. Sesimpel ngabarin lagi dimana, atau hari ini capek tidak. Bukannya untuk mengontrol, tapi supaya pasangan kita merasa dilibatkan dalam hidup kita juga ngerasa dihargai.',
  'Terkadang kita juga ngobrolin hal random bisa dibilang sering juga, ada pertanyaan nyeleneh sampai pertanyaan krusial. Dan juga Karena setiap orang pasti punya ketakutan bisa jadi pasangan kitapun punya ketakutan dibeberapa topik pembicaraan. jadi, kita belajar untuk pelan pelan berani membicarakan semuanya.',
  'Kita juga dari awal udah bikin SOP marah versi kita sendiri yang dipakai sampi sekarang. Isinya kita itu kalau lagi marah harus bagaimana, kalau memang butuh waktu sendiri harus ngomong, trus kalau sudah tenang baru ngobrol lagi. Supaya kita tidak menyelesaikan suatu masalah dengan emosi tapi sesuai dengan kesepakatan awal.',
  'Jadi mungkin salah satu kunci hubungan memang komunikasi tapi bukan sekedar ngobrol , melainkan membuat pasangan kita selalu merasa punya teman cerita, dari topik yang paling ringan sampai topik yang paling berat. Karena tujuan kita bukan ngobrol untuk hari ini melainkan ngobrol seumur hidup.',
  'Komunikasi yang baik bukan tentang selalu ada bahan obrolan, tetapi selalu ada kemauan untuk tetap salling mendengarkan satu sama lain.',
];

export default function WeddingStory() {
  return (
    <section className="-mt-px flex w-full justify-center overflow-x-hidden overflow-y-visible pt-px">
      <div
        className="relative w-full max-w-full px-5 py-10 sm:px-8 sm:py-14 md:w-130 md:border-x md:border-black/15"
        style={{ backgroundColor: sectionBg }}
      >
        <div className="pointer-events-none absolute left-1/2 top-[36%] h-72 w-72 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />

        <header className="mx-auto mb-8 w-full max-w-190 text-center sm:mb-10">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <h2
              className={`${titleFont.className} text-[1.8rem] font-semibold leading-none sm:text-[2.2rem]`}
              style={{ color: titleColor }}
            >
              LDR Goals
            </h2>
            <div className="h-px w-20 sm:w-44" style={{ backgroundColor: 'rgba(75, 58, 31, 0.42)' }} />
          </div>
          <p
            className={`${scriptFont.className} -mt-1 text-[1.9rem] leading-none sm:-mt-2 sm:text-[2.5rem]`}
            style={{ color: accentColor }}
          >
            5.350km
          </p>
        </header>

        <div className="relative mx-auto w-full max-w-190 rounded-3xl bg-white px-6 py-6 shadow-[0_18px_36px_rgba(109,89,52,0.14)] sm:px-8 sm:py-8">
          <div className="absolute -left-1.5 top-7 h-3.5 w-3.5 rotate-45 bg-white" />
          <div className="space-y-4 sm:space-y-5">
            {storyParagraphs.map((paragraph, index) => (
              <p
                key={`${paragraph}-${index}`}
                className={`${bodyFont.className} text-[0.95rem] leading-relaxed sm:text-[1.05rem]`}
                style={{ color: index === 0 ? accentColor : textColor }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
