
import React from 'react';

export const Details: React.FC = () => {
  const rawCathedralUrl = "bafilma.gba.gob.ar/sites/default/files/styles/1280x1280/public/locaciones/Azul-CatedraldeNuestraSe%C3%B1oradelRosario%287%29.jpg.webp?itok=sPWTDkGv";
  const cathedralImageUrl = `https://images.weserv.nl/?url=${encodeURIComponent(rawCathedralUrl)}&w=800&fit=cover`;
  
  const rawReceptionUrl = "scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/302172012_175421895007022_856954261952731228_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JhIOEUSG9bMQ7kNvwHQRu7Q&_nc_oc=Adn9m7KtVh0YINUPlH4X-XXVbiNDR7y0Aqs-237uYc88QsHy9lBk43DsdVUDcWjnDYo&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=6HlL3fTHGWOAdDwk96MnMQ&oh=00_AftEaT4B8Qmb7I5P2ftdoibG47gccZpGUxOhhQbzvj0Fzg&oe=69869751";
  const receptionImageUrl = `https://images.weserv.nl/?url=${encodeURIComponent(rawReceptionUrl)}&w=800&fit=cover`;

  return (
    <div className="container mx-auto px-6 max-w-5xl py-32">
      <div className="text-center mb-24 space-y-6">
        <span className="font-cursive text-4xl text-[#c4a484]">Coordenadas del</span>
        <h2 className="text-6xl md:text-8xl font-serif text-[#5a1a1a]">Gran Día</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-32">
        {/* Ceremonia */}
        <div className="group text-center space-y-8">
          <div className="relative max-w-xs mx-auto mb-10">
             <div className="absolute inset-0 bg-[#c4a484]/10 rounded-full blur-3xl group-hover:bg-[#c4a484]/20 transition-all"></div>
             <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white soft-shadow bg-[#f7f2ed] flex items-center justify-center">
               <img 
                src={cathedralImageUrl} 
                alt="Catedral de Azul"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-1000 grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1548625361-125027a2f556?auto=format&fit=crop&q=80&w=800";
                }}
               />
             </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-serif text-[#5a1a1a] italic">La Boda Religiosa</h3>
            <p className="font-sans-alt text-[10px] uppercase tracking-widest text-[#7d6e63] font-bold">21 de Febrero • 18:00 hs</p>
            <div className="space-y-1">
              <p className="text-xl font-serif text-[#5a1a1a]">Catedral Nuestra Señora del Rosario</p>
              <p className="text-[#7d6e63] text-sm italic">Azul, Buenos Aires</p>
            </div>
            <a href="https://maps.google.com/?q=Catedral+Nuestra+Señora+del+Rosario+Azul" target="_blank" rel="noopener noreferrer" className="inline-block font-cursive text-2xl text-[#c4a484] hover:text-[#5a1a1a] transition-colors">¿Cómo llegar?</a>
          </div>
        </div>

        {/* Recepción */}
        <div className="group text-center space-y-8">
          <div className="relative max-w-xs mx-auto mb-10">
             <div className="absolute inset-0 bg-[#c4a484]/10 rounded-full blur-3xl group-hover:bg-[#c4a484]/20 transition-all"></div>
             <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white soft-shadow bg-[#f7f2ed] flex items-center justify-center">
               <img 
                src={receptionImageUrl} 
                alt="Casa de Piedra Azul"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-1000 grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800";
                }}
               />
             </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-serif text-[#5a1a1a] italic">La Celebración</h3>
            <p className="font-sans-alt text-[10px] uppercase tracking-widest text-[#7d6e63] font-bold">21 de Febrero • 19:30 hs</p>
            <div className="space-y-1">
              <p className="text-xl font-serif text-[#5a1a1a]">Casa de Piedra</p>
              <p className="text-[#7d6e63] text-sm italic">Azul, Buenos Aires</p>
            </div>
            <a href="https://maps.google.com/?q=Casa+de+Piedra+Azul+Buenos+Aires" target="_blank" rel="noopener noreferrer" className="inline-block font-cursive text-2xl text-[#c4a484] hover:text-[#5a1a1a] transition-colors">Ubicación de la fiesta</a>
          </div>
        </div>
      </div>

      <div className="mt-40 p-12 md:p-20 bg-white soft-shadow rounded-[60px] text-center border border-[#c4a484]/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none">
          <img src="https://i.pinimg.com/736x/14/60/76/1460760e60de2f8e3a049dd64eee4f5b.jpg" className="w-full h-full rotate-90" alt="" />
        </div>
        <h4 className="font-cursive text-4xl text-[#c4a484] mb-4">Código de Vestimenta</h4>
        <p className="text-5xl font-serif text-[#5a1a1a] mb-8">Elegante Sport</p>
        <div className="max-w-2xl mx-auto space-y-8 text-[#7d6e63] font-serif text-lg leading-relaxed italic">
          <div className="space-y-2">
            <p className="font-bold text-[#5a1a1a] not-italic uppercase text-xs tracking-widest">Damas</p>
            <p>Vestido corto, largo, mono corto o mono largo elegante.</p>
            <p className="text-[#5a1a1a] font-bold not-italic text-sm bg-[#5a1a1a]/5 py-2 px-4 rounded-lg inline-block">
              IMPORTANTE: NO SE PUEDEN UTILIZAR COLORES CLAROS (BEIGE, CREMA, BLANCO, ROSADO, ETC.)
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-[#5a1a1a] not-italic uppercase text-xs tracking-widest">Caballeros</p>
            <p>Saco (opcional), camisa y pantalón de vestir (corbata opcional).</p>
          </div>
        </div>
      </div>
    </div>
  );
};
