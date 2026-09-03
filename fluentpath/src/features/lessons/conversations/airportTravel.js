export const airportTravelScript = {
  id: "airport_travel",
  title: "En el Aeropuerto",
  level: "A1",
  description: "Aprende a moverte por el aeropuerto, hacer check-in y pasar seguridad.",
  nodes: [
    {
      id: 1,
      text: "¡Bienvenido al aeropuerto! Hoy aprenderás a hacer el check-in y pasar por seguridad. Escucha los diálogos y responde correctamente.",
      options: [
        { id: "opt1", text: "Comenzar", nextId: 2 }
      ]
    },
    {
      id: 2,
      text: "Agente: Good morning! Passport and ticket, please.",
      translation: "¡Buenos días! Pasaporte y boleto, por favor.",
      tip: "En el mostrador siempre te pedirán tu 'Passport' (pasaporte) y 'Ticket' (boleto). 'Please' es fundamental para ser educado.",
      options: [
        { id: "opt1", text: "🔊 Escuchar de nuevo", nextId: 2 },
        { id: "opt2", text: "Continuar", nextId: 3 }
      ]
    },
    {
      id: 3,
      text: "¿Cómo respondes al agente?",
      options: [
        { id: "opt1", text: "Here you are. I have a window seat, right?", nextId: 4, feedback: "¡Correcto! 'Here you are' se usa al entregar algo." },
        { id: "opt2", text: "Give me my passport", nextId: 3, feedback: "Incorrecto. Esto suena grosero. Usa 'Here you are' para entregar documentos." },
        { id: "opt3", text: "I want window", nextId: 3, feedback: "Incorrecto. La frase completa es 'I have a window seat, right?'"}
      ]
    },
    {
      id: 4,
      text: "Agente: Yes, confirmed. Do you have any bags to check in?",
      translation: "Sí, confirmado. ¿Tiene alguna maleta para documentar?",
      tip: "'Check in' significa documentar maletas grandes. Las que llevas contigo son 'carry-on'.",
      options: [
        { id: "opt1", text: "🔊 Escuchar de nuevo", nextId: 4 },
        { id: "opt2", text: "Continuar", nextId: 5 }
      ]
    },
    {
      id: 5,
      text: "El agente pregunta si tienes equipaje para documentar. ¿Qué respondes si solo tienes una mochila de mano?",
      options: [
        { id: "opt1", text: "No, I only have a carry-on bag.", nextId: 6, feedback: "¡Excelente! 'Carry-on bag' es equipaje de mano." },
        { id: "opt2", text: "Yes, I have many bags", nextId: 5, feedback: "Incorrecto. Si solo tienes mochila de mano, debes decir 'No'." },
        { id: "opt3", text: "I don't have nothing", nextId: 5, feedback: "Incorrecto. Esto es doble negativo. Di 'No, I only have...'"}
      ]
    },
    {
      id: 6,
      text: "Agente: Perfect. Here is your boarding pass. Gate 23, boarding at 10:30.",
      translation: "Perfecto. Aquí está tu pase de abordar. Puerta 23, abordaje a las 10:30.",
      tip: "'Boarding pass' = pase de abordar. 'Gate' = puerta de embarque. 'Boarding at' = abordaje a las...",
      options: [
        { id: "opt1", text: "🔊 Escuchar de nuevo", nextId: 6 },
        { id: "opt2", text: "Continuar", nextId: 7 }
      ]
    },
    {
      id: 7,
      text: "Quieres preguntar si tu vuelo está a tiempo. ¿Qué dices?",
      options: [
        { id: "opt1", text: "Is my flight on time?", nextId: 8, feedback: "¡Correcto! 'On time' significa puntual/a tiempo." },
        { id: "opt2", text: "Is my flight good time?", nextId: 7, feedback: "Incorrecto. La expresión es 'on time', no 'good time'." },
        { id: "opt3", text: "My flight is time?", nextId: 7, feedback: "Incorrecto. Falta el verbo auxiliar 'Is' y la preposición 'on'."}
      ]
    },
    {
      id: 8,
      text: "¡Felicidades! Has completado el módulo del aeropuerto. Ahora puedes hacer check-in y entender la información de tu vuelo.",
      options: [
        { id: "opt1", text: "Finalizar módulo", nextId: 9 }
      ]
    },
    {
      id: 9,
      text: "",
      options: []
    }
  ]
};
