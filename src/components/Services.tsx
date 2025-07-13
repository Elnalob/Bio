import React from 'react';
import { Globe, FileText, Palette, Smartphone, Zap } from 'lucide-react';

const Services: React.FC = () => {
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

  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center text-gradient">
          What I Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <service.icon className="w-12 h-12 text-white mb-6" />
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