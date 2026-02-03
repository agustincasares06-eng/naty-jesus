
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ días: 0, horas: 0, min: 0, seg: 0 });

  useEffect(() => {
    const targetDate = new Date('February 21, 2026 18:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft({
        días: Math.floor(distance / (1000 * 60 * 60 * 24)),
        horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seg: Math.floor((distance % (1000 * 60)) / 1000),
      });
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ días: 0, horas: 0, min: 0, seg: 0 });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToRSVP = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('rsvp');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-[#fdfaf7]">
      {/* Elementos botánicos animados */}
      <div className="absolute -left-20 -bottom-20 w-80 h-80 opacity-20 animate-float pointer-events-none">
        <img src="https://i.pinimg.com/736x/14/60/76/1460760e60de2f8e3a049dd64eee4f5b.jpg" className="w-full h-full object-contain mix-blend-multiply" alt="" />
      </div>
      <div className="absolute -right-20 -top-20 w-80 h-80 opacity-20 animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
        <img src="https://i.pinimg.com/736x/14/60/76/1460760e60de2f8e3a049dd64eee4f5b.jpg" className="w-full h-full object-contain mix-blend-multiply rotate-180" alt="" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <p className="font-cursive text-3xl text-[#c4a484] mb-8 animate-fade-in">Nuestra gran aventura comienza...</p>
        
        <div className="relative mb-12">
          <h1 className="flex flex-col items-center">
            <span className="text-8xl md:text-9xl lg:text-[11rem] font-serif text-[#5a1a1a] leading-[0.8] tracking-tighter transition-all duration-1000">Natalia</span>
            <span className="font-cursive text-5xl md:text-7xl text-[#c4a484] -my-4 z-10">&</span>
            <span className="text-8xl md:text-9xl lg:text-[11rem] font-serif text-[#5a1a1a] leading-[0.8] tracking-tighter transition-all duration-1000">Jesús</span>
          </h1>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col items-center space-y-4">
             <div className="h-px w-24 bg-[#c4a484]/40"></div>
             <p className="font-sans-alt text-[11px] uppercase tracking-[0.6em] text-[#7d6e63] font-light">
               Sábado 21 de Febrero, 2026 • Azul
             </p>
             <div className="h-px w-24 bg-[#c4a484]/40"></div>
          </div>

          <div className="flex justify-center space-x-8 md:space-x-16">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center group">
                <span className="text-2xl md:text-4xl font-serif text-[#5a1a1a] group-hover:scale-110 transition-transform duration-500">{Math.max(0, value as number)}</span>
                <span className="text-[9px] font-sans-alt uppercase tracking-[0.3em] text-[#c4a484] mt-2 italic">{unit}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a 
              href="#rsvp" 
              onClick={scrollToRSVP}
              className="inline-block relative group"
            >
              <div className="absolute -inset-2 bg-[#c4a484]/10 rounded-full blur-xl group-hover:bg-[#5a1a1a]/10 transition-all duration-700"></div>
              <span className="relative z-10 block border-b border-[#5a1a1a]/40 text-[#5a1a1a] pb-2 text-[11px] font-sans-alt font-bold tracking-[0.5em] uppercase hover:text-[#c4a484] hover:border-[#c4a484] transition-all duration-500">
                Confirmar Asistencia
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
