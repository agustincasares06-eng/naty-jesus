
import React, { useState } from 'react';

interface Props {
  scrolled: boolean;
}

export const Navigation: React.FC<Props> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Inicio', href: 'home' },
    { name: 'Historia', href: 'story' },
    { name: 'Detalles', href: 'details' },
    { name: 'Fotos', href: 'gallery' },
    { name: 'Regalos', href: 'giftlist' },
    { name: 'Confirmar', href: 'rsvp' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-4 md:px-8 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md border-b border-[#c4a484]/10 py-4 shadow-sm' 
            : 'bg-transparent py-6 md:py-10'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="font-serif text-xl md:text-2xl tracking-tighter text-[#5a1a1a] hover:opacity-70 transition-all duration-500 flex items-center group"
          >
            <span className="font-light">N</span>
            <span className="text-[#c4a484] italic mx-1 text-sm md:text-lg">&</span>
            <span className="font-light">J</span>
          </a>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[9px] tracking-[0.5em] uppercase transition-all duration-500 hover:text-[#5a1a1a] font-bold text-[#7d6e63]/80 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1.5 left-1/2 w-0 h-[1px] bg-[#c4a484] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>

          {/* Mobile Trigger */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden group p-2"
            aria-label="Abrir menú"
          >
            <div className="flex flex-col space-y-1.5 items-end">
              <span className="w-5 h-[1px] bg-[#5a1a1a]"></span>
              <span className="w-3 h-[1px] bg-[#c4a484]"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Menú Móvil */}
      <div className={`fixed inset-0 z-[100] transition-all duration-1000 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div 
          className="absolute inset-0 bg-[#5a1a1a]/10 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        ></div>
        <div className={`absolute right-0 top-0 h-full w-full md:w-[400px] bg-[#fdfaf7] shadow-2xl transition-transform duration-[800ms] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-12 flex flex-col h-full">
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif text-xl tracking-widest text-[#5a1a1a] uppercase">N & J</span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-[#7d6e63] text-[9px] uppercase tracking-[0.3em] font-bold"
              >
                Cerrar ×
              </button>
            </div>
            
            <div className="flex flex-col space-y-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-3xl font-serif text-[#5a1a1a] hover:text-[#c4a484] transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-[#c4a484]/20">
               <p className="text-[9px] text-[#7d6e63] uppercase tracking-[0.4em] font-light">Natalia & Jesús • Febrero 2026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
