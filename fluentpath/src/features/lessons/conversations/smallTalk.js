export const smallTalkScript = {
  id: "small_talk",
  title: "Conversación Casual (Small Talk)",
  level: "A1",
  description: "Aprende a hablar del clima, fines de semana y temas seguros para romper el hielo.",
  nodes: [
    {
      id: 1,
      type: "dialogue",
      speaker: "Colega",
      text: "Beautiful day, isn't it?",
      translation: "Día hermoso, ¿verdad?",
      tip: "Hablar del clima es el 'small talk' más seguro. El tag question 'isn't it?' busca confirmación amable."
    },
    {
      id: 2,
      type: "dialogue",
      speaker: "Tú",
      text: "Yes, finally! How was your weekend?",
      translation: "¡Sí, finalmente! ¿Cómo estuvo tu fin de semana?",
      tip: "'How was...?' pregunta por el pasado. Es la forma estándar de mostrar interés personal sin ser invasivo."
    },
    {
      id: 3,
      type: "dialogue",
      speaker: "Colega",
      text: "It was great. I went hiking. Did you do anything fun?",
      translation: "Estuvo genial. Fui de senderismo. ¿Hiciste algo divertido?",
      tip: "'Went' es el pasado de 'go'. 'Did you...?' es la estructura para preguntas en pasado simple."
    },
    {
      id: 4,
      type: "quiz",
      question: "Alguien dice 'It's raining cats and dogs'. ¿Qué significa?",
      options: [
        { text: "Están lloviendo animales.", correct: false, feedback: "Incorrecto. Es una expresión idiomática, no literal." },
        { text: "Está lloviendo muy fuerte.", correct: true, feedback: "¡Correcto! Es un modismo clásico para lluvia torrencial." },
        { text: "Hay muchos perros en la calle.", correct: false, feedback: "Incorrecto. No tiene relación con animales reales." }
      ]
    },
    {
      id: 5,
      type: "practice",
      prompt: "Tu colega menciona que fue al cine. Pregunta qué película vio.",
      expectedAnswer: "What movie did you see?",
      hint: "Usa 'What' + objeto + auxiliar pasado 'did' + sujeto + verbo."
    }
  ]
};
