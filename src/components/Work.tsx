import React from 'react';
import { ExternalLink } from 'lucide-react';

const Work: React.FC = () => {
  const projects = [
    {
      title: "Summarizer Tool",
      description: "AI-powered text summarization tool with clean, modern interface",
      url: "https://summarizer-project.vercel.app/",
      category: "Web Application"
    },
    {
      title: "Personal Portfolio",
      description: "My personal portfolio showcasing design and development work",
      url: "https://bolafolio.vercel.app",
      category: "Portfolio Design"
    },
    {
      title: "Mid Portfolio",
      description: "Portfolio website for a creative professional",
      url: "https://mid-folio.vercel.app",
      category: "Portfolio Design"
    },
    {
      title: "Roof Crafter",
      description: "Professional roofing services website with lead generation focus",
      url: "https://roof-crafter.vercel.app",
      category: "Business Website"
    },
    {
      title: "CookEase",
      description: "University project - recipe management web application",
      url: "https://cookease.framer.website",
      category: "Web Application"
    }
  ];

  return (
    <section id="work" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center text-gradient">
          Selected Work
        </h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between p-8 rounded-2xl bg-gradient-to-r from-gray-900/30 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white cursor-pointer"
                        onClick={() => window.open(project.url, '_blank')}>
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 px-3 py-1 rounded-full bg-gray-800/50">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-lg font-light">
                    {project.description}
                  </p>
                </div>
                <ExternalLink 
                  className="w-6 h-6 text-gray-400 group-hover:text-white ml-4 cursor-pointer"
                  onClick={() => window.open(project.url, '_blank')}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;