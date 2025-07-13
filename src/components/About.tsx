import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-xl prose-invert max-w-none">
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8 font-light text-gray-100">
            For as long as I can remember, I've been the "fix it" guy for family and some friends, especially on tech headaches, I was always the one they called. It never felt like work, so I leaned into it.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-300 font-light">
            In 2017, I started with graphic design and printing, PS. my first client was my family. I dabbled in photography a year later, and by 2020, I was fully into product design.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-300 font-light">
            Today, I help businesses clean up their digital presence; websites, profiles, pitch decks, branded documents and practical tools that help them look credible, attract opportunities, and raise capital.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-300 font-light">
            Some businesses I've worked with have gone on to raise millions, and the right design and digital tools have played a part in that.
          </p>
          
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
            I studied Computer Science at UNILORIN, but what I do now goes beyond anything I definitely did not learn in school, it's about making all things digital simple for business owners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;