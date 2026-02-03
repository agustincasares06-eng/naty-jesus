
import React, { useState } from 'react';
import { GuestbookEntry } from '../types.ts';

export const Guestbook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    { id: '1', name: 'Laura & David', message: '¡No podemos esperar para celebrar con ustedes! Les deseamos toda la felicidad del mundo.', timestamp: new Date() },
    { id: '2', name: 'Tía Elena', message: '¡Qué alegría ver este amor crecer! Estaremos allí puntuales.', timestamp: new Date() }
  ]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const addEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    
    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date()
    };
    
    setEntries([newEntry, ...entries]);
    setName('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-serif text-[#5a1a1a]">Libro de Visitas</h2>
        <div className="h-px w-24 bg-[#c4a484] mx-auto opacity-30"></div>
        <p className="text-[#7d6e63] font-sans-alt uppercase tracking-[0.4em] text-[10px] font-bold">
          ¡Déjanos un mensaje de cariño!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Formulario */}
        <div className="bg-[#fcf9f5] p-8 md:p-10 border border-[#c4a484]/20 shadow-sm h-fit sticky top-24">
          <form onSubmit={addEntry} className="space-y-8">
            <div className="space-y-2 group border-b border-[#c4a484]/30 pb-2 focus-within:border-[#5a1a1a] transition-colors">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#7d6e63] font-bold block">Tu Nombre</label>
              <input 
                type="text" 
                placeholder="Ej: Familia García"
                className="w-full bg-transparent py-2 text-xl font-serif text-[#5a1a1a] outline-none placeholder:text-[#c4a484]/40"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2 group border-b border-[#c4a484]/30 pb-2 focus-within:border-[#5a1a1a] transition-colors">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#7d6e63] font-bold block">Mensaje</label>
              <textarea 
                placeholder="Escribe aquí tus buenos deseos..."
                className="w-full bg-transparent py-2 text-lg font-serif text-[#5a1a1a] h-32 outline-none resize-none placeholder:text-[#c4a484]/40 leading-relaxed"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#5a1a1a] text-white py-5 uppercase tracking-[0.4em] text-[10px] font-sans-alt font-black hover:bg-[#3d3d3d] transition-all duration-500 shadow-md"
            >
              Publicar Mensaje
            </button>
          </form>
        </div>

        {/* Listado de Mensajes */}
        <div className="space-y-8 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
          {entries.map(entry => (
            <div key={entry.id} className="bg-white p-8 border-l-4 border-[#c4a484] shadow-sm animate-fade-in group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="font-serif text-2xl text-[#5a1a1a] italic">{entry.name}</span>
                <span className="text-[9px] uppercase text-[#c4a484] tracking-widest font-bold">
                  {entry.timestamp.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}
                </span>
              </div>
              <p className="text-[#7d6e63] font-serif text-lg leading-relaxed italic">
                "{entry.message}"
              </p>
            </div>
          ))}
          {entries.length === 0 && (
             <div className="text-center py-20 border-2 border-dashed border-[#c4a484]/10 rounded-xl">
               <p className="text-[#c4a484] italic font-serif text-xl">
                 Aún no hay mensajes. ¡Sé el primero en saludarnos!
               </p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
