
import React, { useState, useEffect, useCallback } from 'react';

export const Gallery: React.FC = () => {
  const images = [
    { url: 'https://lh3.googleusercontent.com/d/1KvcRnQi4riflpCbRX9PKZCjpniwgfisB', caption: 'Nuestros momentos especiales' },
    { url: 'https://lh3.googleusercontent.com/d/1LgmNFjwiYFyvpcRFx1LJWF_PFpDIE4xR', caption: 'Risas compartidas' },
    { url: 'https://lh3.googleusercontent.com/d/1SlYMGuSC6HVmoloJ7_-_o0HyXRPIpmM0', caption: 'Amor en cada detalle' },
    { url: 'https://lh3.googleusercontent.com/d/1CZsqrpspFGFigNpRlwDGTu5Xl5aMsqEQ', caption: 'Caminando hacia el futuro' },
    { url: 'https://lh3.googleusercontent.com/d/1_QbCzYq3YOP4JjKpuNjsGU63ZQFP-avW', caption: 'Nuestra historia' },
    { url: 'https://lh3.googleusercontent.com/d/16-9Oc-i5fJ7huT2xD-gABVkdSMGIRkAJ', caption: 'Miradas que lo dicen todo' },
    { url: 'https://lh3.googleusercontent.com/d/1wAN9IC6Wf3vXgX_D9LVvjg0_BuZmZqUs', caption: 'Por siempre, nosotros' },
    { url: 'https://lh3.googleusercontent.com/d/1PJub1j_k7gFuWSvZdGiQf6vIz4Bd3Ufg', caption: 'El comienzo de algo mágico' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [images.length, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [images.length, isAnimating]);

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="container mx-auto px-4 md:px-6 max-w-6xl py-24">
      <div className="text-center mb-16 space-y-6">
        <span className="font-cursive text-4xl text-[#c4a484]">Álbum de</span>
        <h2 className="text-5xl md:text-7xl font-serif text-[#5a1a1a]">Nuestros Momentos</h2>
        <div className="h-px w-24 bg-[#c4a484] mx-auto opacity-30"></div>
        <p className="text-[#7d6e63] font-sans-alt uppercase tracking-[0.4em] text-[10px] font-bold">Instantes que guardamos en el corazón</p>
      </div>

      <div className="relative group max-w-5xl mx-auto overflow-hidden">
        <div className="relative aspect-[4/5] md:aspect-video overflow-hidden rounded-lg shadow-2xl bg-white p-1 border border-[#c4a484]/20">
          <div className="absolute top-4 left-4 w-12 h-12 z-20 opacity-20 pointer-events-none">
             <img src="https://i.pinimg.com/736x/14/60/76/1460760e60de2f8e3a049dd64eee4f5b.jpg" alt="" className="w-full h-full object-contain mix-blend-multiply" />
          </div>
          <div className="absolute bottom-4 right-4 w-12 h-12 z-20 opacity-20 pointer-events-none rotate-180">
             <img src="https://i.pinimg.com/736x/14/60/76/1460760e60de2f8e3a049dd64eee4f5b.jpg" alt="" className="w-full h-full object-contain mix-blend-multiply" />
          </div>

          <div 
            className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) h-full w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div key={idx} className="min-w-full h-full relative overflow-hidden bg-[#fcfcfc] flex items-center justify-center">
                <div className="absolute inset-0 bg-[#fdfaf7]/50"></div>
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-1000 z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Evitar bucle infinito si la miniatura también falla
                    if (target.src.includes('sz=w1600')) return;
                    const id = img.url.split('/').pop();
                    if (id) {
                      target.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
                    }
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 via-white/40 to-transparent z-20 flex items-end justify-center pb-6 md:pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <p className="text-[#5a1a1a] font-cursive text-2xl md:text-4xl text-center px-4">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#5a1a1a] opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#5a1a1a] hover:text-white z-30 shadow-lg border border-[#c4a484]/10"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#5a1a1a] opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#5a1a1a] hover:text-white z-30 shadow-lg border border-[#c4a484]/10"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center items-center space-x-3 mt-8">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="py-2"
              aria-label={`Ir a imagen ${idx + 1}`}
            >
              <div className={`h-[3px] rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-10 bg-[#5a1a1a]' : 'w-2 bg-[#c4a484]/40 hover:bg-[#c4a484]'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block px-8 py-3 border border-[#c4a484]/10 rounded-full bg-white/40 backdrop-blur-[2px]">
           <p className="text-[9px] uppercase tracking-[0.4em] text-[#7d6e63] font-bold italic">Natalia & Jesús • 2026</p>
        </div>
      </div>
    </div>
  );
};
