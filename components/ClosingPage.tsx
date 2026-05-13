'use client';

import { Cormorant_Garamond, Great_Vibes, Playfair_Display, Poppins } from 'next/font/google';

const titleFont = Playfair_Display({
	subsets: ['latin'],
	weight: ['600', '700'],
});

const serifFont = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
});

const bodyFont = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
});

const signatureFont = Great_Vibes({
	subsets: ['latin'],
	weight: ['400'],
});

export default function ClosingPage() {
	return (
		<section className="w-full flex justify-center overflow-hidden bg-white">
			<div className="relative w-full md:w-130 max-w-full border-x-0 md:border-x md:border-black/15">
				<div className="relative overflow-hidden">
					<div
						className="h-[56vh] min-h-100 w-full bg-cover bg-center"
						data-zoom-image
						style={{ backgroundImage: "url('/halaman3-3.webp')", backgroundPosition: 'center 46%' }}
						aria-hidden
					/>
					<div className="absolute inset-0 bg-[#121212]/36" aria-hidden />

					<div className="absolute inset-0 flex flex-col items-center px-5 pt-[19%] text-center sm:pt-[22%]">
						<p className={`${titleFont.className} text-[0.5rem] font-semibold uppercase tracking-[0.32em] text-[#f4ede0] sm:text-[0.8rem]`}>
							KAMI YANG BERBAHAGIA
						</p>
						<h2 className={`${titleFont.className} mt-3 text-[2.45rem] font-semibold leading-none text-[#f7f4ee] drop-shadow-lg sm:text-[3rem]`}>
							Abdul Azis 
							<br></br>
							 &
							 
							 <br></br>
							 Nurfi Laeli
						</h2>
						<p className={`${serifFont.className} mt-5 max-w-135 text-[1.65rem] font-semibold italic leading-[1.02] text-[#f5efe2] drop-shadow-md sm:text-[1.2rem]`}>
							Atas kehadiran dan doa restunya kami ucapkan <br></br>terima kasih
						</p>
					</div>
				</div>

				<div className="px-5 py-10 text-center sm:py-12">
					<p className={`${bodyFont.className} text-[0.5rem] font-medium tracking-[0.02em] text-[#4b3a1f] sm:text-[1.2rem]`}>
						Made By
					</p>
					<p className={`${signatureFont.className} mt-2 text-[2rem] leading-none text-[#4b3a1f] sm:mt-3 sm:text-[3rem]`}>
						Agnan Toro
					</p>
				</div>
			</div>
		</section>
	);
}
