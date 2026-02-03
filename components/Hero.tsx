
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
    <div className="relative h-screen min-h-[750px] w-full flex items-center justify-center overflow-hidden bg-[#fcf9f5]">
      {/* Sutil gradiente superior para legibilidad del menú */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/40 to-transparent z-10 pointer-events-none"></div>

      {/* Ilustraciones Botánicas */}
      <div className="absolute left-[-5%] bottom-[-5%] w-full md:w-1/2 opacity-20 pointer-events-none scale-110">
        <img 
          src="https://i.pinimg.com/736x/14/60/76/1460760e60de2f8e3a049dd64eee4f5b.jpg" 
          alt="" 
          className="w-full h-full object-contain mix-blend-multiply origin-bottom-left transform -scale-x-100"
        />
      </div>
      <div className="absolute right-[-5%] top-[-5%] w-full md:w-1/3 opacity-15 pointer-events-none scale-110">
        <img 
          src="https://i.pinimg.com/736x/14/60/76/1460760e60de2f8e3a049dd64eee4f5b.jpg" 
          alt="" 
          className="w-full h-full object-contain mix-blend-multiply origin-top-right rotate-180"
        />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-20 text-center max-w-5xl px-6 pt-24 md:pt-32 space-y-10 md:space-y-16">
        <div className="space-y-4 animate-fade-in">
          <p className="font-sans-alt text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-[#7d6e63] font-light">
            Nuestra Boda • Febrero 2026
          </p>
          <div className="h-px w-12 bg-[#c4a484] mx-auto opacity-30"></div>
        </div>

        <div className="space-y-4 md:space-y-8">
          <h1 className="flex flex-col items-center">
            <span className="text-7xl md:text-8xl lg:text-9xl font-serif text-[#5a1a1a] tracking-tight leading-none">JESÚS</span>
            <span className="font-cursive text-4xl md:text-6xl text-[#c4a484] my-2 md:my-4">&</span>
            <span className="text-7xl md:text-8xl lg:text-9xl font-serif text-[#5a1a1a] tracking-tight leading-none">NATALIA</span>
          </h1>
        </div>

        <div className="space-y-8 animate-fade-in delay-200">
          <div className="text-[#5a1a1a] font-serif italic text-lg md:text-xl space-y-2">
            <p className="tracking-widest uppercase not-italic text-[10px] text-[#7d6e63] font-sans-alt mb-2 opacity-80">Sábado 21 de Febrero</p>
            <p className="text-base md:text-lg">Azul, Buenos Aires</p>
          </div>

          <div className="flex justify-center space-x-6 md:space-x-12 border-y border-[#c4a484]/15 py-6 max-w-md mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-xl md:text-2xl font-serif text-[#5a1a1a]">{Math.max(0, value as number)}</span>
                <span className="text-[8px] font-sans-alt uppercase tracking-[0.3em] text-[#7d6e63] mt-1 font-bold">{unit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <a 
            href="#rsvp" 
            onClick={scrollToRSVP}
            className="inline-block border border-[#5a1a1a]/40 text-[#5a1a1a] px-10 py-4 hover:bg-[#5a1a1a] hover:text-white transition-all duration-700 text-[9px] font-sans-alt font-bold tracking-[0.4em] uppercase"
          >
            Confirmar Asistencia
          </a>
        </div>
      </div>
    </div>
  );
};
