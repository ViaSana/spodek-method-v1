'use client';

export default function Donate() {
  return (
    <div className="w-full bg-brand-black text-brand-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-franklin text-4xl font-bold mb-6">Support Our Mission</h2>
        <p className="font-jenson text-lg mb-8">
          Help us spread the message of joyful, meaningful sustainability. Your contribution 
          supports workshops, educational materials, and community program development.
        </p>
        <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          {[25, 50, 100].map((amount) => (
            <button
              key={amount}
              className="btn"
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 