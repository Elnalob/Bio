import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const handleContact = () => {
    window.open('mailto:bolaolaniyanadedayo@gmail.com', '_blank');
  };

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient">
          Let's Work Together
        </h2>
        
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-16 font-light leading-relaxed">
          Need a website, a profile, or a digital fix? Let's make your business look better — and work better.
        </p>
        
        <button 
          ref={buttonRef}
          onClick={handleContact}
          className="btn-primary px-16 py-6 rounded-full text-xl font-medium inline-flex items-center gap-4 group"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          Let's Talk
          <Mail className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <div className="mt-32 pt-16 border-t border-gray-800">
          <p className="text-gray-500 font-light">
            Copy that 2025 — This website is just a way to show a glimpse of what I have been up to in the past 5 years, 
            <a 
              href="https://www.workwithbola.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors underline ml-1"
            >
              check here to know what I am up to these days
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;