
import React from 'react';

export const Story: React.FC = () => {
  const chapters = [
    {
      title: "Registro Civil",
      text: (
        <>
          El primer paso de nuestra unión legal. Los esperamos el <strong>viernes 20 de febrero a las 11:30 am</strong> para compartir este momento tan significativo e íntimo antes de la gran celebración.
        </>
      ),
      img: "https://lh3.googleusercontent.com/d/1KvcRnQi4riflpCbRX9PKZCjpniwgfisB",
      order: "md:flex-row"
    },
    {
      title: "Caminar Juntos",
      text: (
        <>
          Nuestra historia de amor comenzó oficialmente el <strong>2 de mayo de 2018</strong>. Desde aquel día, cada momento ha sido un capítulo más: desde los <strong>domingos de mates y caminatas</strong> hasta nuestras charlas interminables, aprendimos a reír en la lluvia.
        </>
      ),
      img: "https://lh3.googleusercontent.com/d/1CZsqrpspFGFigNpRlwDGTu5Xl5aMsqEQ",
      order: "md:flex-row-reverse"
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-5xl py-20 relative">
      <div className="text-center mb-32 space-y-4">
        <span className="font-cursive text-4xl text-[#c4a484]">Nuestra pequeña gran</span>
        <h2 className="text-5xl md:text-7xl font-serif text-[#5a1a1a]">Historia de Amor</h2>
        <div className="w-16 h-px bg-[#c4a484] mx-auto"></div>
      </div>
      
      <div className="space-y-40">
        {chapters.map((chapter, idx) => (
          <div key={idx} className={`flex flex-col ${chapter.order} items-center gap-12 md:gap-24 relative`}>
            <div className={`absolute top-0 ${chapter.order.includes('reverse') ? 'right-0' : 'left-0'} text-[12rem] font-serif opacity-[0.03] select-none leading-none -translate-y-20`}>
              0{idx + 1}
            </div>

            <div className="flex-1 w-full relative">
              <div className="relative group max-w-md mx-auto">
                <div className="absolute -inset-3 border border-[#c4a484]/30 rounded-[120px] group-hover:scale-105 transition-transform duration-700"></div>
                <div className="relative overflow-hidden rounded-[100px] shadow-2xl bg-gray-100">
                  <img 
                    src={chapter.img} 
                    alt={chapter.title} 
                    className="w-full h-[400px] object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('sz=w1000')) return;
                      const id = chapter.img.split('/').pop();
                      if (id && !chapter.img.includes('unsplash')) {
                        target.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-6">
              <h3 className="font-cursive text-4xl text-[#c4a484] mb-2">{chapter.title}</h3>
              <div className="text-[#7d6e63] font-serif text-xl leading-relaxed italic">
                {chapter.text}
              </div>
              <div className="h-px w-12 bg-[#c4a484]/40 mx-auto md:mx-0"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40 text-center px-6">
        <p className="font-cursive text-3xl md:text-5xl text-[#5a1a1a] opacity-80">
          "Y lo mejor está por venir..."
        </p>
      </div>
    </div>
  );
};
