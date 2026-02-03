
import React, { useState } from 'react';

export const GiftList: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const alias = "artesanales.antojito";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(alias);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-6 max-w-3xl py-32 border-t border-[#c4a484]/10">
      <div className="text-center space-y-12 relative">
        {/* Adorno botánico flotante decorativo */}
        <div className="absolute -left-10 top-0 w-32 h-32 opacity-10 pointer-events-none animate-float hidden md:block">
           <img src="https://i.pinimg.com/736x/14/60/76/1460760e60de2f8e3a049dd64eee4f5b.jpg" alt="" className="w-full h-full object-contain mix-blend-multiply" />
        </div>

        <div className="space-y-4">
          <span className="font-cursive text-4xl text-[#c4a484]">Un gesto de cariño</span>
          <h2 className="text-5xl md:text-7xl font-serif text-[#5a1a1a]">Regalos</h2>
          <div className="w-16 h-px bg-[#c4a484] mx-auto opacity-30"></div>
        </div>

        <div className="max-w-xl mx-auto space-y-8 p-12 md:p-16 bg-white rounded-[50px] shadow-xl border border-[#c4a484]/10 relative group overflow-hidden">
          {/* Brillo suave de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fdfaf7] to-white opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <p className="text-[#7d6e63] font-serif italic text-xl leading-relaxed">
                "El mejor regalo es tu presencia, pero si querés tener un detalle con nosotros, nos gustaría que apoyes nuestro emprendimiento ya que estamos en proceso de crecimiento."
              </p>
              <p className="font-sans-alt text-[10px] uppercase tracking-[0.4em] text-[#c4a484] font-bold">Apoyo al Emprendimiento</p>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-[#5a1a1a]">Nuestro Alias</h3>
              
              <div 
                onClick={copyToClipboard}
                className={`relative group cursor-pointer p-6 rounded-2xl border transition-all duration-500 bg-[#fdfaf7]/80 ${
                  copied 
                    ? 'border-[#5a1a1a] bg-green-50 scale-[1.02]' 
                    : 'border-[#c4a484]/30 hover:border-[#5a1a1a]'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span className="font-serif text-xl md:text-3xl tracking-tight text-[#5a1a1a] select-all">
                    {alias}
                  </span>
                  <span className="font-sans-alt text-[8px] uppercase tracking-widest text-[#c4a484] font-bold group-hover:text-[#5a1a1a] transition-colors">
                    {copied ? '¡Copiado con éxito!' : 'Haz clic para copiar el alias'}
                  </span>
                </div>
                
                {/* Icono de copiado discreto */}
                <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity">
                   <svg className="w-4 h-4 text-[#5a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                   </svg>
                </div>
              </div>
            </div>

            <p className="text-[#7d6e63] font-serif italic text-sm pt-4">
              Titular: Jesús & Natalia
            </p>
          </div>
        </div>
        
        <div className="pt-8">
           <p className="font-cursive text-3xl text-[#c4a484]">¡Muchas gracias!</p>
        </div>
      </div>
    </div>
  );
};
