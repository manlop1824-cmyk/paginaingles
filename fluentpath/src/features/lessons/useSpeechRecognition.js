import { useRef, useState, useCallback } from "react";

/**
 * Hook personalizado para reconocimiento de voz (Speech-to-Text)
 * Implementa Web Speech API con manejo de errores y estados
 */
export function useSpeechRecognition() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);
  const [supported, setSupported] = useState(
    typeof window !== "undefined" &&
    !!(window.SpeechRecognition || window.webkitSpeechRecognition)
  );
  const recognitionRef = useRef(null);

  const start = useCallback(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) {
      setError("Speech recognition not supported in this browser");
      return;
    }

    // Detener reconocimiento anterior si existe
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 3; // Obtener múltiples alternativas para mejor evaluación
    recognition.continuous = false;

    recognition.onstart = () => {
      setListening(true);
      setError(null);
      setTranscript("");
    };

    recognition.onresult = (event) => {
      // Obtener la mejor transcripción de las alternativas
      const alternatives = Array.from(event.results[0]);
      const bestTranscript = alternatives[0]?.transcript || "";
      setTranscript(bestTranscript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setError(event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    setTranscript("");
    setListening(true);
    recognition.start();
  }, []);

  const stop = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setListening(false);
  }, []);

  const reset = useCallback(() => {
    setTranscript("");
    setError(null);
  }, []);

  return { 
    supported, 
    listening, 
    transcript, 
    error,
    start, 
    stop,
    reset
  };
}