'use client';


export default function Workshops() {
  return (
    <div className="w-full bg-[#F2F2F2] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-12">
          <h2 className="text-3xl font-marker col-span-2 text-brand-lightBlue underline pb-2">
              Join A Workshop
            </h2>
            <p className="font-jenson">Join a growing community of changemakers who have already begun their journey with the Spodek Method, applying it to lead the way in sustainability. Our interactive workshops give you the tools to take immediate action and resolve the inner conflicts that hold you back from becoming a leader in sustainability.</p>
          <div>
            <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  className="w-full px-4 py-2 rounded border border-brand-blue bg-brand-white"
                  required
                />
                <input
                  placeholder="Email"
                  type="email" 
                  id="email"
                  className="w-full px-4 py-2 rounded border border-brand-blue bg-brand-white"
                  required
                />
              <button
                type="submit"
                className="px-6 font-bold py-3 rounded-lg bg-brand-lightBlue text-brand-white hover:opacity-90 transition"
              >
                Sign Me Up!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 