import React from 'react';
import Background from './components/Background';
import CursorNoise from './components/CursorNoise';
import Hero from './components/Hero';
import ProfileSection from './components/ProfileSection';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import ProductDesign from './components/ProductDesign';
import Personal from './components/Personal';
import Reading from './components/Reading';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white relative">
      <Background />
      <CursorNoise />
      <main className="relative z-10">
        <Hero />
        <ProfileSection />
        <About />
        <Services />
        <Work />
        <ProductDesign />
        <Personal />
        <Reading />
        <Contact />
      </main>
    </div>
  );
}

export default App;