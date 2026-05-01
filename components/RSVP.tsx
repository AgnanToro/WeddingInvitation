'use client';

import { useState } from 'react';

export default function RSVP() {
  const [status, setStatus] = useState<'attending' | 'declining' | null>(null);
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && status) {
      console.log({ name, status });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setStatus(null);
      }, 3000);
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Konfirmasi Kehadiran
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Silakan isi form di bawah untuk mengkonfirmasi kehadiran Anda
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-lg">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nama Tamu
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Status Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Apakah Anda bisa hadir?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStatus('attending')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                  status === 'attending'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                ✓ Bisa Hadir
              </button>
              <button
                type="button"
                onClick={() => setStatus('declining')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                  status === 'declining'
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                ✗ Tidak Bisa
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!name || !status}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Kirim Konfirmasi
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              ✓ Terima kasih! Konfirmasi Anda telah kami terima.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
