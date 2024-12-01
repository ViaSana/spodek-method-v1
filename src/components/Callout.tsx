'use client';

import Image from 'next/image';

export default function Callout() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Text Block */}
      <div className="max-w-5xl pl-48">
        <h2 className="text-brand-red uppercase">
          Sustainability isn&apos;t about sacrifice.
        </h2>
        <div className="flex flex-col gap-3 font-franklin text-black">
          <h3>
            It&apos;s about doing more with what you already have.
          </h3>
          <p>The Spodek Method helps you resolve inner conflicts and tap into your deepest motivations, making sustainable living an empowering and joyful experience. </p>
          <h3>
            Begin Your Journey:
          </h3>

          {/* Link Row */}
          <div className="flex flex-row justify-between underline font-bold text-lg md:text-xl leading-relaxed">
            <div className="col-1/3">
              <a href="#" className="hover:text-brand-lightBlue hover:scale-105 transition-all">
                Read Sustainability Simplified →
              </a>
              
            </div>
            <div className="col-1/3">
              <a href="#" className="hover:text-brand-lightBlue hover:scale-105 transition-all">
                Download the Workbook →
              </a>
            </div>
            <div className="col-1/3">
              <a href="#" className="hover:text-brand-lightBlue hover:scale-105 transition-all">
                Join A Workshop →
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Images */}
      <div className="w-full max-w-5xl flex gap-4 p-8">
        <div className="w-1/2 p-4">
          <Image 
            src="/images/BookCover.png" 
            alt="Callout Left" 
            width={500}
            height={300}
            className="w-full h-full object-cover border-2 border-gray-300 rounded-lg" 
          />
        </div>
        <div className="w-1/2 p-4">
          <Image 
            src="/images/BookCover_back.png" 
            alt="Callout Right" 
            width={500}
            height={300}
            className="w-full h-full object-cover border-2 border-gray-300 rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
}

