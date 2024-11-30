'use client';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 border border-black">
      <div className="flex flex-col gap-3 max-w-3xl pl-24 mt-12">
        <h1 className="text-brand-black text-3xl md:text-5xl font-bold font-franklin uppercase flex flex-col">
          <span className="flex items-center">
            IMAGINE A WORLD
            WHERE SUSTAINABILITY IS THE NORM
            <span className="text-brand-red ml-2">—</span>
          </span>
        </h1>
          <p className="text-brand-black text-xl md:text-3xl font-bold font-franklin max-w-3xl leading-relaxed">
          Where pollution, deforestation, and displacement are things of the past.
          Where governments, corporations, and individuals thrive through sustainable living.
        </p>
      </div>
    </div>
  );
}

