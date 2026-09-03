export const emergenciesScript = {
  id: "emergencies",
  title: "Emergencias y Problemas",
  level: "A1",
  description: "Frases críticas para pedir ayuda, reportar robos o problemas de salud.",
  nodes: [
    {
      id: 1,
      type: "dialogue",
      speaker: "Tú",
      text: "Help! I need a doctor immediately!",
      translation: "¡Ayuda! Necesito un médico inmediatamente.",
      tip: "'Help!' es la palabra universal de auxilio. 'I need...' expresa necesidad urgente."
    },
    {
      id: 2,
      type: "dialogue",
      speaker: "Transeúnte",
      text: "Call 911! Where does it hurt?",
      translation: "¡Llama al 911! ¿Dónde te duele?",
      tip: "En EE.UU. el número de emergencias es 911. 'Where does it hurt?' pregunta por la ubicación del dolor."
    },
    {
      id: 3,
      type: "dialogue",
      speaker: "Tú",
      text: "My leg hurts. I fell down the stairs.",
      translation: "Me duele la pierna. Me caí por las escaleras.",
      tip: "'My [body part] hurts' es la estructura para dolor. 'Fell' es pasado de 'fall' (caer)."
    },
    {
      id: 4,
      type: "quiz",
      question: "Quieres reportar que te robaron la cartera. ¿Qué dices?",
      options: [
        { text: "Someone took my wallet.", correct: false, feedback: "Gramaticalmente correcto, pero muy suave para una emergencia." },
        { text: "Help! My wallet was stolen!", correct: true, feedback: "¡Correcto! Usar voz pasiva 'was stolen' enfatiza el crimen." },
        { text: "I lost my wallet.", correct: false, feedback: "Incorrecto contexto. 'Lost' implica extravío, no robo." }
      ]
    },
    {
      id: 5,
      type: "practice",
      prompt: "Necesitas decir que no hablas inglés bien para que te ayuden con alguien que hable español.",
      expectedAnswer: "I don't speak English well. Do you speak Spanish?",
      hint: "Usa 'don't speak' para negar habilidad. Pregunta 'Do you speak...?' para el idioma."
    }
  ]
};
