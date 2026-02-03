
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse, AIResponse } from '../services/geminiService.ts';
import { Message } from '../types.ts';

interface ExtendedMessage extends Message {
  sources?: { uri: string; title: string }[];
}

export const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ExtendedMessage[]>([
    { role: 'assistant', content: "¡Hola! Soy el asistente virtual de Jesús y Natalia. ¿En qué puedo ayudarte hoy? (Transporte, hotel, dress code...)" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const currentInput = input;
    const userMessage: ExtendedMessage = { role: 'user', content: currentInput };
    
    // Capture the state before updating so we send the correct history
    const historyForAPI = [...messages].map(m => ({ role: m.role, content: m.content }));
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    const result: AIResponse = await getAIResponse(currentInput, historyForAPI);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { 
      role: 'assistant', 
      content: result.text,
      sources: result.sources
    }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-24 md:absolute md:bottom-20 md:right-0 md:inset-x-auto bg-white w-auto md:w-[380px] h-[70vh] md:h-[550px] shadow-2xl flex flex-col border border-[#c4a484]/20 overflow-hidden rounded-t-xl md:rounded-xl">
          <div className="bg-[#5a1a1a] p-5 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wide">Concierge Nupcial</span>
                <span className="text-[9px] uppercase tracking-[0.2em] opacity-70">En línea ahora</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#fdfaf7]/40">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-[#5a1a1a] text-white rounded-tr-none' 
                    : 'bg-white border border-[#c4a484]/10 text-[#7d6e63] font-serif rounded-tl-none'
                }`}>
                  <p>{m.content}</p>
                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-[#c4a484]/20">
                      <p className="text-[9px] uppercase tracking-widest font-bold text-[#c4a484] mb-1">Fuentes:</p>
                      <ul className="space-y-1">
                        {m.sources.map((source, sIdx) => (
                          <li key={sIdx}>
                            <a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-[10px] underline hover:text-[#5a1a1a] transition-colors line-clamp-1">
                              {source.title || source.uri}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/80 px-4 py-2 rounded-full text-[#c4a484] text-xs font-serif animate-pulse border border-[#c4a484]/10">
                  Escribiendo respuesta...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-[#c4a484]/10 bg-white">
            <div className="flex items-center space-x-2 bg-[#fdfaf7] rounded-full px-4 py-1 border border-[#c4a484]/20 focus-within:border-[#5a1a1a] transition-all">
              <input 
                type="text" 
                className="flex-1 bg-transparent py-3 text-sm font-serif outline-none"
                placeholder="Pregúntame lo que necesites..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                className="p-2 text-[#5a1a1a] hover:scale-110 transition-transform disabled:opacity-30"
                disabled={!input.trim() || isTyping}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 group ${
          isOpen ? 'bg-[#5a1a1a] text-white rotate-90 scale-90' : 'bg-white text-[#5a1a1a] border-2 border-[#5a1a1a]/10 hover:border-[#5a1a1a]'
        }`}
      >
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c4a484] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c4a484]"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
};
