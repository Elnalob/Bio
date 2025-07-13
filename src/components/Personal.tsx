import React from 'react';
import { MapPin, Book, Dumbbell, Heart } from 'lucide-react';

const Personal: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-gradient">
          More About Me
        </h2>
        
        <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-white mt-1 flex-shrink-0" />
            <p>
              I was born and based in Nigeria, proud to represent global excellence from this vibrant part of the world.
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <Book className="w-8 h-8 text-white mt-1 flex-shrink-0" />
            <p>
              I'm a lifelong learner (though sometimes an inconsistent reader), always exploring new ideas and perspectives.
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <Dumbbell className="w-8 h-8 text-white mt-1 flex-shrink-0" />
            <p>
              I enjoy lifting weights at my own slow pace — progress over perfection, consistency over intensity.
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <Heart className="w-8 h-8 text-white mt-1 flex-shrink-0" />
            <p>
              I've recently decided to enjoy my 20s — traveling more within Nigeria and spending time with the people I care about.
            </p>
          </div>
          
          <p className="text-2xl md:text-3xl text-white font-medium border-l-4 border-white pl-6 ml-12 mt-12">
            Helping businesses look better — and raise more — is still what I enjoy most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Personal;