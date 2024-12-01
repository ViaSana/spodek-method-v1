'use client';

const teamMembers = [
  {
    name: "Joshua Spodek",
    role: "Founder & Lead Instructor",
    image: "/images/joshua-spodek.jpg",
    description: "Author of 'Sustainability Simplified' and creator of The Spodek Method"
  },
  {
    name: "Join Our Team",
    role: "Various Positions",
    image: "/images/join-team.jpg",
    description: "We're looking for passionate individuals to help spread our message"
  }
];

export default function Team_home() {
  return (
    <div className="w-full bg-brand-blue py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-franklin font-bold text-brand-black text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-franklin font-bold text-xl mb-2">{member.name}</h3>
              <p className="font-franklin text-brand-red mb-2">{member.role}</p>
              <p className="font-jenson">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 