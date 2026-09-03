export const firstDayWorkScript = {
  id: "first_day_work",
  title: "Primer Día de Trabajo",
  level: "A1",
  description: "Frases esenciales para tu primer día, conocer colegas y entender instrucciones básicas.",
  nodes: [
    {
      id: 1,
      type: "dialogue",
      speaker: "Jefe",
      text: "Welcome to the team! I am Sarah, your manager.",
      translation: "¡Bienvenido al equipo! Soy Sarah, tu gerente.",
      tip: "'Welcome to...' es la forma estándar de dar la bienvenida. 'Manager' es jefe o gerente."
    },
    {
      id: 2,
      type: "dialogue",
      speaker: "Tú",
      text: "Nice to meet you. Where is my desk?",
      translation: "Gusto en conocerla. ¿Dónde está mi escritorio?",
      tip: "'Nice to meet you' es obligatorio al conocer a alguien nuevo. 'Desk' es escritorio de oficina."
    },
    {
      id: 3,
      type: "dialogue",
      speaker: "Colega",
      text: "Hi! Let me show you the break room. Coffee is free.",
      translation: "¡Hola! Déjame mostrarte la sala de descanso. El café es gratis.",
      tip: "'Break room' es la cafetería o sala de descanso. 'Let me' significa 'déjame'."
    },
    {
      id: 4,
      type: "quiz",
      question: "Quieres decir que estás emocionado por empezar. ¿Qué dices?",
      options: [
        { text: "I am exciting to start.", correct: false, feedback: "Incorrecto. Para sentimientos usamos '-ed': 'excited'. 'Exciting' es para cosas que causan emoción." },
        { text: "I am excited to start.", correct: true, feedback: "¡Correcto! 'Excited' describe cómo te sientes." },
        { text: "I have excitement.", correct: false, feedback: "Incorrecto. Aunque se entiende, no es natural. Usa 'I am excited'." }
      ]
    },
    {
      id: 5,
      type: "practice",
      prompt: "Tu colega te pregunta si entiendes las instrucciones. Responde que sí, pero necesitas ayuda con la computadora.",
      expectedAnswer: "Yes, but I need help with the computer.",
      hint: "Usa 'I need help' (necesito ayuda) + 'with' (con)."
    }
  ]
};
