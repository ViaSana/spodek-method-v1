'use client';

import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email subscription logic
    console.log('Email submitted:', email);
  };

  return (
    <footer className="bg-brand-blue py-8">
      <div className="container mx-auto">
        {/* Navigation Menu */}
        <nav className="flex justify-between items-center mb-6">
          <div className="flex flex-row gap-6 flex-1 justify-end">
            <a href="/about" className="hover:underline">About</a>
            <a href="/method" className="hover:underline">The Method</a>
            <a href="/book" className="hover:underline">Book</a>
          </div>
          <a href="/" className="text-xl font-bold mx-8">THE SPODEK METHOD</a>
          <div className="flex flex-row gap-6 flex-1">
            <a href="/workshops" className="hover:underline">Workshops</a>
            <a href="/workbook" className="hover:underline">Workbook</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </nav>
        <hr className="border-brand-red border-2 mb-6" />

        {/* Email Subscription */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="font-bold font-marker text-xl">Stay Updated:</span>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="px-4 py-2 border rounded min-w-96"
              required
            />
            <button
              type="submit"
              className="bg-brand-lightBlue border border-black text-white px-6 py-2 rounded hover:bg-brand-red"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} — Joshua Spodek | Site By <a href="https://viasana.co" className="hover:underline">ViaSana</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
