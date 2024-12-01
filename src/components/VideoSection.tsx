'use client';

import { useEffect, useState } from 'react';

export default function VideoSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('video-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="video-section" className="w-full flex items-center justify-center bg-brand-white p-6">
      <div className="w-full max-w-5xl aspect-video">
        {isInView && (
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/L4OAaI_uXgY?si=kGHxz5HtKqU0Mx5v"
            title="Systemic change begins with personal change | Joshua Spodek"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
