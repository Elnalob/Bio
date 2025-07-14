import React, { useEffect, useRef, useState } from 'react';

const ProfileSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersectionRatio = entry.intersectionRatio;
          const isIntersecting = entry.isIntersecting;
          
          if (isIntersecting && intersectionRatio > 0.2) {
            setIsVisible(true);
          } else if (!isIntersecting || intersectionRatio < 0.1) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position and visibility
  const calculateOpacity = () => {
    if (!sectionRef.current) return isVisible ? 1 : 0;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementBottom = rect.bottom;
    
    // Element is completely above viewport
    if (elementBottom < 0) return 0;
    
    // Element is completely below viewport
    if (elementTop > windowHeight) return 0;
    
    // Element is in viewport - calculate fade
    const fadeStart = windowHeight * 0.8;
    const fadeEnd = windowHeight * 0.2;
    
    if (elementTop <= fadeEnd && elementBottom >= fadeStart) {
      return 1; // Fully visible
    } else if (elementTop > fadeEnd) {
      // Fading in from bottom
      const fadeDistance = fadeStart - fadeEnd;
      const currentDistance = fadeStart - elementTop;
      return Math.max(0, Math.min(1, currentDistance / fadeDistance));
    } else if (elementBottom < fadeStart) {
      // Fading out to top
      const fadeDistance = fadeStart - fadeEnd;
      const currentDistance = elementBottom - fadeEnd;
      return Math.max(0, Math.min(1, currentDistance / fadeDistance));
    }
    
    return 1;
  };

  const opacity = calculateOpacity();

  return (
    <section 
      ref={sectionRef} 
      className="py-32 px-6 lg:px-8 transition-opacity duration-300"
      style={{ opacity }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={imageRef}
            className={`relative group cursor-pointer transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ 
              transform: `translateX(${isVisible ? 0 : -50}px) scale(${isVisible ? 1 : 0.95})`,
              transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-red-500/30 border border-white/30 backdrop-blur-sm shadow-2xl shadow-blue-500/20">
              <img 
                src="/Imagesself.webp"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-600/30 via-transparent to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-80 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div ref={textRef} className="space-y-6">
            <h2 
              className={`text-3xl md:text-4xl font-bold text-gradient transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ 
                transitionDelay: '0.2s',
                transform: `translateX(${isVisible ? 0 : 50}px) translateY(${isVisible ? 0 : 20}px)`
              }}
            >
              Meet Bola
            </h2>
            <p 
              className={`text-xl text-white leading-relaxed font-light transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ 
                transitionDelay: '0.4s',
                transform: `translateX(${isVisible ? 0 : 50}px) translateY(${isVisible ? 0 : 20}px)`
              }}
            >
              Digital solution expert from Nigeria, helping businesses worldwide look better and work better through thoughtful design and practical digital tools.
            </p>
            <div 
              className={`flex items-center gap-4 text-gray-100 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ 
                transitionDelay: '0.6s',
                transform: `translateX(${isVisible ? 0 : 50}px) translateY(${isVisible ? 0 : 20}px)`
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
              <span>Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;