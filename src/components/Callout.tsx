'use client';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-5xl pl-48">
        <h1 className="text-brand-red font-marker font-bold text-2xl md:text-3xl uppercase mb-3">
          Sustainability isn't about sacrifice.
        </h1>
        <div className="flex flex-col gap-3 font-franklin text-black">
        <p className=" font-bold text-lg md:text-2xl leading-relaxed">
          It's about doing more with what you already have.
        </p>
        <p>The Spodek Method helps you resolve inner conflicts and tap into your deepest motivations, making sustainable living an empowering and joyful experience. </p>
        <p className=" font-bold text-lg md:text-2xl leading-relaxed">
          Begin Your Journey:
        </p>
      <div className="flex flex-row justify-between mt-8">
        <div className="col-1/3">
          <a href="#" className="text-black font-bold text-xl md:text-xl leading-relaxed">
            Learn More
          </a>
        </div>
        <div className="col-1/3">
          <a href="#" className=" font-bold text-xl md:text-xl leading-relaxed">
            Get Started
          </a>
        </div>
        <div className="col-1/3">
          <a href="#" className="font-bold text-xl md:text-xl leading-relaxed">
            Explore Resources
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

