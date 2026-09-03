export const airportTravelScript = {
  id: "airport_travel",
  title: "En el Aeropuerto",
  level: "A1",
  description: "Aprende a moverte por el aeropuerto, hacer check-in y pasar seguridad.",
  nodes: [
    {
      id: 1,
      type: "dialogue",
      speaker: "Agente",
      text: "Good morning! Passport and ticket, please.",
      translation: "¡Buenos días! Pasaporte y boleto, por favor.",
      tip: "En el mostrador de la aerolínea siempre te pedirán tu 'Passport' (pasaporte) y tu 'Ticket' (boleto). 'Please' es fundamental para ser educado."
    },
    {
      id: 2,
      type: "dialogue",
      speaker: "Tú",
      text: "Here you are. I have a window seat, right?",
      translation: "Aquí tiene. Tengo un asiento de ventana, ¿verdad?",
      tip: "'Here you are' es la frase estándar para entregar algo. 'Window seat' es asiento de ventana, 'aisle seat' es de pasillo."
    },
    {
      id: 3,
      type: "dialogue",
      speaker: "Agente",
      text: "Yes, confirmed. Do you have any bags to check in?",
      translation: "Sí, confirmado. ¿Tiene alguna maleta para documentar?",
      tip: "'Check in' en este contexto significa documentar maletas grandes. Las que llevas contigo son 'carry-on'."
    },
    {
      id: 4,
      type: "quiz",
      question: "Quieres preguntar si tu vuelo está a tiempo. ¿Qué dices?",
      options: [
        { text: "Is my flight on time?", correct: true, feedback: "¡Correcto! 'On time' significa puntual/a tiempo." },
        { text: "Is my flight good time?", correct: false, feedback: "Incorrecto. La expresión correcta es 'on time'. 'Good time' se usa para divertirse." },
        { text: "My flight is time?", correct: false, feedback: "Incorrecto. Falta el verbo auxiliar 'Is' y la preposición 'on'." }
      ]
    },
    {
      id: 5,
      type: "practice",
      prompt: "El agente te pregunta si tienes equipaje de mano. Responde que sí, tienes una mochila.",
      expectedAnswer: "Yes, I have a backpack.",
      hint: "Usa 'Yes, I have...' seguido del objeto. Mochila es 'backpack' o 'carry-on bag'."
    }
  ]
};
