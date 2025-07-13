import React from 'react';
import { BookOpen } from 'lucide-react';

const Reading: React.FC = () => {
  const books = {
    2023: [
      "I Can't Make This Up by Kevin Hart",
      "Born a Crime by Trevor Noah",
      "Steal Like an Artist by Austin Kleon",
      "Show Your Work by Austin Kleon",
      "Ego is the Enemy by Ryan Holiday (multiple times)",
      "The Obstacle is the Way by Ryan Holiday",
      "$100M Leads by Alex Hormozi"
    ],
    "Currently Reading": [
      "Diary of a CEO by Steven Bartlett",
      "Inspired by Marty Cagan"
    ]
  };

  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            What I'm Reading
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            I'm building the habit — one book at a time.
          </p>
        </div>
        
        <div className="space-y-12">
          {Object.entries(books).map(([year, bookList]) => (
            <div key={year} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-3">
                <BookOpen className="w-8 h-8" />
                {year}
              </h3>
              <ul className="space-y-4">
                {bookList.map((book, index) => (
                  <li 
                    key={index}
                    className="text-lg md:text-xl text-gray-300 font-light pl-6 border-l-2 border-gray-700 hover:border-white transition-colors"
                  >
                    {book}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reading;