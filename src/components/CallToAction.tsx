'use client';

export default function CallToAction() {
  return (
    <div className="w-full bg-brand-black py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-white font-franklin font-bold text-3xl md:text-4xl mb-6">
          Ready to Transform Your Mindset?
        </h2>
        <a
          href="#"
          className="inline-block bg-brand-red hover:bg-red-700 text-white font-franklin font-bold px-8 py-4 rounded-lg transition-colors"
        >
          Buy the Book
        </a>
      </div>
    </div>
  );
}

