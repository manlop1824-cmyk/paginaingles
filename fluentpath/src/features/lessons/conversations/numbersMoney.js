export const numbersMoneyScript = {
  id: "numbers_money",
  title: "Números y Dinero",
  level: "A1",
  description: "Aprende a contar, preguntar precios y pagar en tiendas.",
  nodes: [
    {
      id: 1,
      type: "dialogue",
      speaker: "Vendedor",
      text: "Can I help you? This shirt is twenty dollars.",
      translation: "¿Puedo ayudarle? Esta camisa cuesta veinte dólares.",
      tip: "Los precios se expresan con el verbo 'to be' (is/are). '$20' se lee 'twenty dollars'."
    },
    {
      id: 2,
      type: "dialogue",
      speaker: "Tú",
      text: "How much is it? Do you accept credit cards?",
      translation: "¿Cuánto cuesta? ¿Aceptan tarjetas de crédito?",
      tip: "'How much is it?' es la pregunta universal para precios. 'Cash' es efectivo, 'credit card' es tarjeta."
    },
    {
      id: 3,
      type: "dialogue",
      speaker: "Vendedor",
      text: "Yes, we do. Your total is fifty-five dollars.",
      translation: "Sí, aceptamos. Su total es cincuenta y cinco dólares.",
      tip: "Del 13 al 19 terminan en '-teen'. Del 20 al 90 por decenas terminan en '-ty' (thirty, forty, fifty)."
    },
    {
      id: 4,
      type: "quiz",
      question: "Quieres saber el precio de unos zapatos. ¿Qué dices?",
      options: [
        { text: "How many shoes?", correct: false, feedback: "Incorrecto. 'How many' es para cantidad contable. Para precio usamos 'How much'." },
        { text: "How much are these shoes?", correct: true, feedback: "¡Correcto! Usamos 'are' porque 'shoes' es plural." },
        { text: "What price shoes?", correct: false, feedback: "Incorrecto. La estructura correcta es 'How much + verbo + sujeto'." }
      ]
    },
    {
      id: 5,
      type: "practice",
      prompt: "El vendedor te dice el precio ($35) y tú quieres pagar en efectivo.",
      expectedAnswer: "I will pay in cash.",
      hint: "Para decir 'pagaré' usa 'I will pay'. En efectivo es 'in cash'."
    }
  ]
};
