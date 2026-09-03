/**
 * Servicio de Text-to-Speech (TTS) con voces naturales en inglés
 * Implementa Web Speech API con selección de voz y control de velocidad
 */

let preferredVoice = null;

/**
 * Inicializa y guarda la voz preferida en inglés
 */
export function initVoices() {
  if (!("speechSynthesis" in window)) return;
  
  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    // Buscar voz en inglés de alta calidad
    preferredVoice = voices.find(voice => 
      voice.lang === "en-US" && voice.name.includes("Google")
    ) || voices.find(voice => 
      voice.lang.startsWith("en")
    );
  };
  
  loadVoices();
  
  // Algunos navegadores cargan voces asíncronamente
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

/**
 * Habla un texto en inglés con configuración optimizada
 * @param {string} text - Texto a convertir a voz
 * @param {Object} options - Configuración opcional
 * @param {number} options.rate - Velocidad (0.5 a 2.0, default 0.9)
 * @param {number} options.pitch - Tono (0 a 2, default 1)
 * @param {Function} options.onEnd - Callback cuando termina de hablar
 */
export function speak(text, options = {}) {
  if (!("speechSynthesis" in window)) {
    console.warn("Speech Synthesis not supported");
    return;
  }
  
  // Cancelar cualquier audio previo
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Configurar voz preferida
  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }
  
  utterance.lang = "en-US";
  utterance.rate = options.rate ?? 0.9; // Ligeramente más lento para claridad
  utterance.pitch = options.pitch ?? 1;
  
  if (options.onEnd) {
    utterance.onend = options.onEnd;
  }
  
  utterance.onerror = (event) => {
    console.error("Speech synthesis error:", event.error);
  };
  
  window.speechSynthesis.speak(utterance);
}

/**
 * Detiene cualquier reproducción de audio en curso
 */
export function stopSpeaking() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

/**
 * Verifica si el navegador está actualmente hablando
 * @returns {boolean}
 */
export function isSpeaking() {
  return "speechSynthesis" in window && window.speechSynthesis.speaking;
}

// Inicializar voces al cargar el módulo
if (typeof window !== "undefined") {
  initVoices();
}