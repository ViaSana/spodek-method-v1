'use client';

import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            {/* <a href="#" className="text-gray-600 hover:text-gray-900">The Method</a> */}
            {/* <a href="#" className="text-gray-600 hover:text-gray-900">Book</a> */}
            <a href="#workbook" className="text-gray-600 hover:text-gray-900">Free Workbook</a>
            <a href="#workshops" className="text-gray-600 hover:text-gray-900">Workshops</a>
          </div>

          {/* Center title */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-xl font-bold">The Spodek Method</span>
          </div>

          {/* CTA Button */}
          <div>
            <a href="#" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
              Take the First Step
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              {/* <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">The Method</a> */}
              {/* <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Book</a> */}
              <a href="#workbook" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Workbook</a>
              <a href="#workshops" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Workshops</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 