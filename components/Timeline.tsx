interface TimelineEvent {
  title: string;
  date: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    title: "Pertemuan Pertama",
    date: "03 Desember 2024",
    description: "Dimulai dari sini cerita indah kami. Saat pertama kali bertemu, hati sudah berbicara."
  },
  {
    title: "Lamaran",
    date: "28 Desember 2024",
    description: "Dengan doa dan harapan, keluarga kami merayakan momen bersejarah ini."
  },
  {
    title: "Menikah",
    date: "01 September 2025",
    description: "Dua hati menjadi satu dalam berkah dan rahmat Allah Swt."
  }
];

export default function Timeline() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Perjalanan Cinta Kami
        </h2>

        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="flex gap-8">
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-md"></div>
                {index < events.length - 1 && (
                  <div className="w-1 h-24 bg-pink-300 mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-pink-500 font-semibold mb-3">{event.date}</p>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
