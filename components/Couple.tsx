export default function Couple() {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="mx-auto w-full max-w-[520px]">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Mempelai
        </h2>

        <div className="space-y-8">
          <div className="rounded-2xl border border-gray-200 px-6 py-6 text-center shadow-sm">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-100 text-2xl flex items-center justify-center">
              H
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Hikmah
            </h3>
            <p className="text-sm text-gray-600">
              Putri dari Bapak ... & Ibu ...
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 px-6 py-6 text-center shadow-sm">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-100 text-2xl flex items-center justify-center">
              I
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Iqbal
            </h3>
            <p className="text-sm text-gray-600">
              Putra dari Bapak ... & Ibu ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
