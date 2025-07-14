import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-r from-red-400/15 to-pink-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-gradient transition-all duration-1500 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
          style={{ filter: isLoaded ? 'blur(0px)' : 'blur(3px)' }}
        >
          I help businesses look better — and work better — with digital solutions.
        </h1>
        
        <p 
          className={`text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            transitionDelay: '0.3s',
            filter: isLoaded ? 'blur(0px)' : 'blur(2px)'
          }}
        >
          Digital Solution Expert from Nigeria. Websites, design, and practical solutions that make business simpler — and more profitable.
        </p>
        
        <button 
          onClick={scrollToWork}
          className={`btn-primary px-12 py-4 rounded-full text-lg font-medium inline-flex items-center gap-3 group transition-all duration-1500 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{ 
            transitionDelay: '0.6s',
            filter: isLoaded ? 'blur(0px)' : 'blur(2px)'
          }}
        >
          See My Work
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;