import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleParagraphs, setVisibleParagraphs] = useState<boolean[]>([]);

  useEffect(() => {
    const paragraphRefs = Array.from(sectionRef.current?.querySelectorAll('.text-paragraph') || []);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = paragraphRefs.indexOf(entry.target);
          if (index !== -1) {
            setVisibleParagraphs(prev => {
              const newState = [...prev];
              newState[index] = entry.isIntersecting && entry.intersectionRatio > 0.3;
              return newState;
            });
          }
        });
      },
      {
        threshold: [0, 0.3, 0.7, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    paragraphRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      paragraphRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const paragraphs = [
    "For as long as I can remember, I've been the \"fix it\" guy for family and some friends, especially on tech headaches, I was always the one they called. It never felt like work, so I leaned into it.",
    "In 2017, I started with graphic design and printing, PS. my first client was my family. I dabbled in photography a year later, and by 2020, I was fully into product design.",
    "Today, I help businesses clean up their digital presence; websites, profiles, pitch decks, branded documents and practical tools that help them look credible, attract opportunities, and raise capital.",
    "Some businesses I've worked with have gone on to raise millions, and the right design and digital tools have played a part in that.",
    "I studied Computer Science at UNILORIN, but what I do now goes beyond anything I definitely did not learn in school, it's about making all things digital simple for business owners."
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-xl prose-invert max-w-none">
          {paragraphs.map((text, index) => (
            <p 
              key={index}
              className={`text-paragraph transition-all duration-1000 cubic-bezier(0.25, 0.46, 0.45, 0.94) ${
                index === 0 ? 'text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8 font-light text-gray-100' :
                'text-xl md:text-2xl leading-relaxed mb-8 text-gray-300 font-light'
              } ${
                visibleParagraphs[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 0.15}s`,
                filter: visibleParagraphs[index] ? 'blur(0px)' : 'blur(2px)'
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;