
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fdfaf7] py-32 border-t border-[#c4a484]/10">
      <div className="container mx-auto px-6 text-center max-w-2xl space-y-12">
        <div className="opacity-60 w-20 mx-auto">
            <img src="https://i.pinimg.com/736x/14/60/76/1460760e60de2f8e3a049dd64eee4f5b.jpg" alt="" className="w-full mix-blend-multiply" />
        </div>
        
        <h2 className="font-serif text-5xl md:text-7xl text-[#5a1a1a] tracking-tight">Jesús & Natalia</h2>
        
        <div className="space-y-4">
          <div className="h-px w-12 bg-[#c4a484] mx-auto opacity-30"></div>
          <p className="text-[#7d6e63] font-serif italic text-lg px-2">
            "Lo que se hace por amor, está más allá del bien y del mal"
          </p>
          <div className="h-px w-12 bg-[#c4a484] mx-auto opacity-30"></div>
        </div>

        <div className="space-y-2 pt-8">
            <p className="text-[#5a1a1a] text-[10px] font-sans-alt uppercase tracking-[0.5em] font-black">21 . 02 . 2026</p>
            <p className="text-[#c4a484] text-[9px] uppercase tracking-widest font-semibold italic">Azul, Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
};
