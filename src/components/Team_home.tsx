'use client';

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
            <div className="relative">
              <div className="bg-gray-200 absolute top-8 right-8 w-full h-full -z-10" />
              <img
                src={member.image}
                alt={member.name}
                className="w-full relative z-10 p-8"
              />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-8">
                Meet <span className="text-brand-red">{member.name}</span>
              </h2>
              <p className="text-lg mb-6">{member.description}</p>
              <p className="text-lg mb-8">{member.longDescription}</p>
              <div className="flex gap-8">
                <a href="#" className="bg-brand-red text-white px-8 py-3 font-bold rounded">
                  Get the Book Now
                </a>
                <a href="#" className="flex items-center font-bold">
                  Learn More About Josh <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 