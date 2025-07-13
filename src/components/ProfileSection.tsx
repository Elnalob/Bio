import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProfileSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
 

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={imageRef}
            className="relative group cursor-pointer"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
              <img 
                src="/Imagesself.webp"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div ref={textRef} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              Meet Bola
            </h2>
            <p className="text-xl text-white leading-relaxed font-light">
              Digital solution expert from Nigeria, helping businesses worldwide look better and work better through thoughtful design and practical digital tools.
            </p>
            <div className="flex items-center gap-4 text-gray-100">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;