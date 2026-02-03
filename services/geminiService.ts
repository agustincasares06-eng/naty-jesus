
import { GoogleGenAI } from "@google/genai";

const WEDDING_FACTS = `
Evento: Boda de Jesús & Natalia
Aniversario: Se pusieron de novios el 2 de mayo de 2018.
Civil: Viernes 20 de Febrero, 2026 a las 11:30 am.
Ceremonia y Fiesta: Sábado 21 de Febrero, 2026.
Lugar: Azul, Buenos Aires, Argentina.
Horarios Sábado: Ceremonia en la Catedral 18:00, Recepción/Cóctel en Casa de Piedra 19:30, Cena 21:00.
Dress Code: Elegante Sport. 
- Damas: Vestido corto, largo o mono elegante. IMPORTANTE: NO SE PUEDEN UTILIZAR COLORES CLAROS (BEIGE, CREMA, BLANCO, ROSADO, ETC.).
- Caballeros: Saco (opcional), camisa y pantalón de vestir (corbata opcional).
Regalos: Apoyo al emprendimiento de la pareja (en crecimiento) (Alias: artesanales.antojito).
Alojamiento: Recomendamos Hotel Gran Azul o Posada de la Posta.
Transporte: El lugar cuenta con estacionamiento privado.
Niños: Evento solo para adultos.
`;

export interface AIResponse {
  text: string;
  sources?: { uri: string; title: string }[];
}

export const getAIResponse = async (userPrompt: string, history: {role: string, content: string}[]): Promise<AIResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: "Contexto de la boda: " + WEDDING_FACTS }] },
        ...history.map(h => ({ 
          role: h.role === 'user' ? 'user' : 'model', 
          parts: [{ text: h.content }] 
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: "Eres el Concierge Virtual de la boda de Jesús y Natalia. Tu tono es extremadamente educado, cálido y servicial. Ayuda a los invitados con detalles de la boda. El Civil es el viernes 20 a las 11:30 am. El sábado 21 la ceremonia es a las 18:00 en la Catedral y la fiesta es en 'Casa de Piedra' a las 19:30. El dress code es 'Elegante Sport'. Muy importante: para las damas NO se permiten colores claros como blanco, beige, crema o rosado. Para caballeros, el saco es opcional. Si preguntan por regalos, menciona el alias 'artesanales.antojito' para apoyar su emprendimiento. Siempre responde en español.",
        tools: [{ googleSearch: {} }]
      }
    });

    if (!response || !response.candidates || response.candidates.length === 0) {
      throw new Error("No se recibió una respuesta válida.");
    }

    const candidate = response.candidates[0];
    const sources = candidate.groundingMetadata?.groundingChunks
      ?.map((chunk: any) => chunk.web)
      .filter((web: any) => web && web.uri) || [];

    return {
      text: response.text || "Lo siento, no pude procesar eso.",
      sources
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "El asistente tuvo un pequeño inconveniente. Por favor, intenta de nuevo." };
  }
};
