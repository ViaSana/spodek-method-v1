'use client';

const testimonials = [
  {
    quote: "Joshua Spodek has written a stunningly elegant and powerful guide on how to be a human. In the process, we may wind up saving the planet—and ourselves. The core message concerns who we want to be in the world. His reasoning is impeccable, his arguments are brilliant, and his writing is a deep pleasure to experience and to learn from.",
    author: "Sebastian Junger",
    title: "Bestselling author of War, Tribe, The Perfect Storm, and In My Time of Dying",
    image: "/images/josh_headshot-tall.jpg"
  },
  {
    quote: "This extremely powerful book will resonate with anyone anywhere on the political spectrum, who dares to look at the world, and their life, through fresh lenses. It will unite us.",
    author: "Ela Bhatt",
    title: "Founder, Self-Employed Women’s Association of India, member of The Elders, and honoree of the Right Livelihood Award",
    image: "/images/josh_headshot-tall.jpg"
  },
  {
    quote: "Joshua Spodek is one of those rare cultural bridges, who crosses cultural divides and meets people where they are. Sustainability Simplified is one of the most importantapproaches of our time, at these crossroads of humanity.",
    author: "Dr. Phoebe Barnard",
    title: "Co-founder, Global Restoration Collaborative; co-producer, “The Climate Restorers",
    image: "/images/josh_headshot-tall.jpg"
  },
  {
    quote: "Josh Spodek’s Sustainability Simplified is a groundbreaking guide that debunks myths and offers practical solutions for our environmental crises. His hands-on approach transforms theory into action, empowering readers to make impactful changes. Spodek’s unique insights reveal that true sustainability brings not sacrifice, but liberation and joy. A must-read for anyone committed to a sustainable future.",
    author: "Larry Yatch",
    title: "Lieutenant, US Navy SEALS (retired), CEO SEAL Team Leaders",
    image: "/images/josh_headshot-tall.jpg"
  }
];

export default function Testimonials() {
  return (
    <div className="w-full py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center mb-6 font-franklin text-brand-black">
          What People Are Saying
        </h2>
        <div className="flex flex-col gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`p-6 max-w-3xl ${
                index % 2 === 0 ? 'self-start' : 'self-end'
              }`}
            >
              <p className="font-jenson text-lg mb-4">"{testimonial.quote}"</p>
              <div className="mt-4 flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-franklin font-bold text-brand-red">— {testimonial.author}</p>
                  <p className="font-jenson text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex flex-row items-center gap-4">
            <button className="btn">
              Buy the Book
            </button>
            <a href="#" className="text-brand-black font-bold font-franklin underline hover:text-brand-lightBlue hover:scale-105 transition-all">
              Download a Free Chapter →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 