'use client';

import React from 'react';


// todo: implement the brand colors and fonts
const LeadMag: React.FC = () => {
  // Add state for form management
  const [formData, setFormData] = React.useState({
    email: '',
    wantIntroduction: false,
    wantWorkbook: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert("Thank you! Your downloads are on their way to your inbox.");
  };

  return (
    <div className="w-full bg-brand-blue text-brand-black font-franklin">
      <div className="grid md:grid-cols-2">
        {/* Left Column */}
        <div className="p-8 border-r border-brand-black">
          <h4 className="underline text-black">
            Debunking the Myths Holding You Back
          </h4>
          <p className="mb-6 font-jenson">
            Many believe personal actions don't matter or that sustainability requires sacrifice. 
            The Spodek Method shows it can be joyful, empowering, and aligned with your values.
          </p>
          <div className="flex items-center mb-4 group cursor-pointer">
            <input
              type="checkbox"
              id="workbookCheckbox"
              checked={formData.wantWorkbook}
              onChange={(e) => setFormData({...formData, wantWorkbook: e.target.checked})}
              className="mr-3 h-5 w-5 rounded border-2 border-brand-black text-brand-red 
              focus:ring-brand-red focus:ring-2 cursor-pointer transition-all
              checked:bg-brand-red checked:border-brand-red"
            />
            <label 
              htmlFor="workbookCheckbox" 
              className="font-jenson text-lg cursor-pointer select-none
              group-hover:text-brand-red transition-colors duration-200"
            >
              Send me the workbook
            </label>
          </div>
        </div>

        {/* Right Column */}
        <div className="p-8">
          <h4 className="text-black">If you've ever thought:</h4>
          <ul className="list-disc ml-6 mb-6 font-jenson">
            <li>"Individual actions don't matter"</li>
            <li>"The plane was going to fly anyway"</li>
            <li>"I don't want to risk returning to the Stone Age"</li>
            <li>Or countless other myths that lead to inaction...</li>
          </ul>
          <h3 className='text-xl mb-6'>
            <span className="text-brand-red">Sustainability Simplified</span>
            {' '}will change your life.
          </h3>
          <div className="flex items-center mb-4 group cursor-pointer">
            <input
              type="checkbox"
              id="introCheckbox"
              checked={formData.wantIntroduction}
              onChange={(e) => setFormData({...formData, wantIntroduction: e.target.checked})}
              className="mr-3 h-5 w-5 rounded border-2 border-brand-black text-brand-red 
              focus:ring-brand-red focus:ring-2 cursor-pointer transition-all
              checked:bg-brand-red checked:border-brand-red"
            />
            <label 
              htmlFor="introCheckbox" 
              className="font-jenson text-lg cursor-pointer select-none
              group-hover:text-brand-red transition-colors duration-200"
            >
              Send me the book introduction
            </label>
          </div>
          
        </div>
      </div>

      {/* Full-width email capture form */}
      <div className="p-6 border border-brand-black">
        <h4 className="mb-6 text-center">Share your email to receive your free downloads:</h4>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <input 
            type="email" 
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-2 rounded border border-brand-blue bg-brand-white"
            required
          />

          <button 
            type="submit" 
              disabled={!formData.wantWorkbook && !formData.wantIntroduction}
              className={`w-full btn
              ${(formData.wantWorkbook || formData.wantIntroduction) 
                ? "bg-brand-red text-brand-white" 
                : "bg-brand-black text-brand-white"}`}
          >
            {formData.wantWorkbook && formData.wantIntroduction 
              ? "Get the Introduction & Workbook"
              : formData.wantWorkbook 
              ? "Get the Workbook"
              : formData.wantIntroduction
              ? "Get the Introduction"
              : "Select one or both downloads above"}
          </button>
        </form>
        <p className="text-xs text-center mt-2">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
      
    </div>
  );
};

export default LeadMag;
