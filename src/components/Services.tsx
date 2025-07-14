import React, { useEffect, useRef, useState } from 'react';
import { Globe, FileText, Palette, Smartphone, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  const services = [
    {
      icon: Globe,
      title: "Websites",
      description: "Clean, credible, and simple websites that help businesses attract opportunities."
    },
    {
      icon: FileText,
      title: "Profiles & Pitch Decks",
      description: "Presentations and profiles that open doors and make lasting impressions."
    },
    {
      icon: Palette,
      title: "Business Documents",
      description: "Letterheads, proposals, and branded assets that establish credibility."
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Digital product design for apps and platforms that users love."
    },
    {
      icon: Zap,
      title: "Digital Solutions",
      description: "When businesses have digital gaps, I'm the one who closes them."
    }
  ];

  useEffect(() => {
    const cardRefs = Array.from(sectionRef.current?.querySelectorAll('.service-card') || []);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.indexOf(entry.target);
          if (index !== -1) {
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = entry.isIntersecting && entry.intersectionRatio > 0.2;
              return newState;
            });
          }
        });
      },
      {
        threshold: [0, 0.2, 0.5, 1],
        rootMargin: '-5% 0px -5% 0px'
      }
    );

    cardRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center text-gradient">
          What I Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card p-8 rounded-2xl card-gradient group cursor-pointer transition-all duration-700 ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                transform: `translateY(${visibleCards[index] ? 0 : 50}px) scale(${visibleCards[index] ? 1 : 0.95})`,
                filter: visibleCards[index] ? 'blur(0px)' : 'blur(1px)'
              }}
            >
              <service.icon className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;