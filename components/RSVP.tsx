
import React from 'react';

export const RSVP: React.FC = () => {
  const COUPLE_WHATSAPP = "5492281367481"; 
  const DEFAULT_MESSAGE = "¡Hola Natalia y Jesús! Quiero confirmar mi asistencia a su boda. Mi nombre es: ";

  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
    const whatsappUrl = `https://wa.me/${COUPLE_WHATSAPP}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto px-6 max-w-3xl py-32">
      <div className="bg-white p-12 md:p-24 rounded-[40px] shadow-2xl border border-[#c4a484]/10 relative overflow-hidden text-center">
        {/* Adorno botánico decorativo */}
        <div className="absolute -top-10 -right-10 w-40 h-40 opacity-10 pointer-events-none animate-float">
          <img src="https://i.pinimg.com/736x/14/60/76/1460760e60de2f8e3a049dd64eee4f5b.jpg" className="w-full h-full" alt="" />
        </div>
        
        <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-10 pointer-events-none animate-float" style={{ animationDelay: '3s' }}>
          <img src="https://i.pinimg.com/736x/14/60/76/1460760e60de2f8e3a049dd64eee4f5b.jpg" className="w-full h-full rotate-180" alt="" />
        </div>

        <div className="relative z-10 space-y-10">
          <div className="space-y-4">
            <span className="font-cursive text-4xl text-[#c4a484]">Los esperamos</span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#5a1a1a] leading-none">Confirmar Asistencia</h2>
            <div className="w-16 h-px bg-[#c4a484] mx-auto opacity-40"></div>
          </div>

          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-serif text-[#7d6e63] italic leading-relaxed">
              "Para nosotros es muy importante contar con tu presencia en este día tan especial."
            </p>
          </div>

          <div className="pt-8">
            <button 
              onClick={handleWhatsAppRedirect}
              className="group relative inline-block w-full md:w-auto"
            >
              <div className="absolute -inset-2 bg-[#5a1a1a]/5 rounded-full blur-lg group-hover:bg-[#5a1a1a]/10 transition-all duration-500"></div>
              <div className="relative flex items-center justify-center space-x-4 bg-[#5a1a1a] text-white px-10 py-6 rounded-full font-sans-alt text-[11px] font-bold tracking-[0.5em] uppercase hover:bg-[#c4a484] transition-all duration-700 shadow-xl">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.313 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.846 1.701 5.421l-.953 3.483 3.567-.936l-.147-.067zm9.954-6.843c-.274-.136-1.62-.8-1.87-.892-.249-.09-.43-.136-.612.136-.182.274-.702.892-.861 1.074-.158.182-.317.204-.591.068-.274-.136-1.157-.426-2.203-1.359-.815-.726-1.365-1.623-1.524-1.897-.158-.274-.017-.422.12-.558.122-.122.274-.317.411-.476.136-.158.182-.274.274-.456.09-.182.045-.341-.023-.476-.068-.136-.612-1.472-.838-2.02-.22-.53-.443-.456-.612-.464-.158-.007-.341-.008-.523-.008s-.476.068-.726.341c-.249.274-.952.932-.952 2.273s.975 2.636 1.112 2.818c.136.182 1.92 2.932 4.65 4.113.65.28 1.157.448 1.55.573.653.208 1.248.178 1.717.108.523-.078 1.62-.663 1.847-1.302.227-.639.227-1.186.158-1.302-.069-.116-.249-.182-.523-.318z"/>
                </svg>
                <span>Confirmar por WhatsApp</span>
              </div>
            </button>
          </div>

          <div className="pt-6">
            <p className="text-[9px] text-[#c4a484] uppercase tracking-[0.3em] font-bold">
              Natalia & Jesús • 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
