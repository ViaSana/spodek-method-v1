'use client';

import Image from 'next/image'

const teamMembers = [
  {
    name: "Josh Spodek",
    image: "/images/josh_headshot-tall.jpg",
    description: "Josh Spodek, Ph.D., is the creator of the Spodek Method and author of Sustainability Simplified. He has spent his career helping individuals and organizations unlock their leadership potential and make sustainability a reality.",
    longDescription: 'Josh holds a PhD in astrophysics and an MBA from Columbia University. He is also the author of Initiative and Leadership Step by Step. His work has been featured in major outlets including The New York Times, Wall Street Journal, The New Yorker, The Daily Show, and on nearly every major network. Esquire named him one of its "Best and Brightest" in their Genius issue.'
  },
];

export default function Team_home() {
  return (
    <div className="w-full p-6">
      <div className="max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative p-6">
              <div className="bg-gray-200 absolute -top-[.05rem] -right-2 w-[92%] h-[90%] z-10" />
              <Image 
                src={member.image}
                alt={member.name}
                width={500}
                height={300}
                className="w-full relative z-10"
              />
            </div>
            <div>
              <h3 className="mb-2">
                Meet <span className="text-brand-red">{member.name}</span>
              </h3>
              <p className="text-lg mb-4">{member.description}</p>
              <p className="text-lg mb-4">{member.longDescription}</p>
              <div className="flex gap-8">
                <a href="#" className="btn">
                  Get the Book Now
                </a>
                <a href="#" className="flex items-center font-bold">
                  Learn More About Josh <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 