
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero.tsx';
import { Details } from './components/Details.tsx';
import { RSVP } from './components/RSVP.tsx';
import { Story } from './components/Story.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Navigation } from './components/Navigation.tsx';
import { GiftList } from './components/GiftList.tsx';
import { Footer } from './components/Footer.tsx';
import { AIConcierge } from './components/AIConcierge.tsx';

const App: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#fdfaf7]">
      <Navigation scrolled={hasScrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="story" className="py-20 bg-white">
          <Story />
        </section>

        <section id="details" className="py-20 bg-[#fdfaf7]">
          <Details />
        </section>

        <section id="gallery" className="py-20 bg-white">
          <Gallery />
        </section>

        <section id="giftlist">
          <GiftList />
        </section>

        <section id="rsvp" className="py-20 bg-[#5a1a1a] text-white">
          <RSVP />
        </section>
      </main>

      <Footer />

      {/* Interactive AI Concierge */}
      <AIConcierge />
    </div>
  );
};

export default App;
