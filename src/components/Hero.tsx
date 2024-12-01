'use client';

export default function Hero() {
  return (
    <div className="min-h-[98vh] flex flex-col items-center justify-center px-6 border-b border-brand-black">
      <div className="max-w-5xl pl-48">
        <h1 className="text-brand-black font-franklin font-bold text-3xl md:text-5xl uppercase mb-3">
          IMAGINE A WORLD WHERE SUSTAINABILITY IS THE NORM
          <span className="text-brand-red ml-2">—</span>
        </h1>
        <p className="text-brand-black font-franklin font-bold text-xl md:text-3xl leading-relaxed">
          Where pollution, deforestation, and displacement are things of the past.
          Where governments, corporations, and individuals thrive through sustainable living.
        </p>
      </div>
    </div>
  );
}

