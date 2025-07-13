import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-gradient">
          I help businesses look better — and work better — with digital solutions.
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Digital Solution Expert from Nigeria. Websites, design, and practical solutions that make business simpler — and more profitable.
        </p>
        
        <button 
          onClick={scrollToWork}
          className="btn-primary px-12 py-4 rounded-full text-lg font-medium inline-flex items-center gap-3 group hover:scale-105 transition-transform duration-300"
        >
          See My Work
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;