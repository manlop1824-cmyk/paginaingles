// Módulo A1-3: En el Restaurante - Pedir comida y bebida
// Enfoque: Vida cotidiana y viajes - Restaurantes, cafés, bares

export const atTheRestaurantScript = {
  id: "a1-mod3-restaurant",
  title: "At the Restaurant",
  titleEs: "En el Restaurante",
  level: "A1",
  moduleNumber: 3,
  description: "Aprende a pedir comida, hacer preguntas sobre el menú y pagar la cuenta en un restaurante.",
  descriptionEs: "Aprende a pedir comida, hacer preguntas sobre el menú y pagar la cuenta en un restaurante.",
  nodes: [
    {
      id: 1,
      type: "intro",
      title: "¡Vamos a comer!",
      content: "En esta lección aprenderás las frases esenciales para desenvolverte en un restaurante de habla inglesa.",
      contentEs: "En esta lección aprenderás las frases esenciales para desenvolverte en un restaurante de habla inglesa."
    },
    {
      id: 2,
      type: "dialogue",
      speaker: "Waiter",
      text: "Good evening! Welcome to Mario's. Do you have a reservation?",
      translation: "¡Buenas noches! Bienvenido a Mario's. ¿Tienen reservación?",
      grammarTip: "'Do you have...?' es una pregunta común. 'Reservation' significa reservación.",
      grammarTipEs: "'Do you have...?' es una pregunta común. 'Reservation' significa reservación.",
      pronunciation: "Good evening! Welcome to Mario's. Do you have a reservation?"
    },
    {
      id: 3,
      type: "dialogue",
      speaker: "Customer",
      text: "Yes, under the name García. Table for two.",
      translation: "Sí, a nombre de García. Mesa para dos.",
      grammarTip: "'Under the name...' significa 'a nombre de...'. 'Table for two' indica el número de personas.",
      grammarTipEs: "'Under the name...' significa 'a nombre de...'. 'Table for two' indica el número de personas.",
      pronunciation: "Yes, under the name García. Table for two."
    },
    {
      id: 4,
      type: "dialogue",
      speaker: "Waiter",
      text: "Perfect. Here's your table. Can I get you something to drink?",
      translation: "Perfecto. Aquí está su mesa. ¿Puedo traerles algo de beber?",
      grammarTip: "'Can I get you...?' es una forma educada de ofrecer algo. 'Something to drink' = algo de beber.",
      grammarTipEs: "'Can I get you...?' es una forma educada de ofrecer algo. 'Something to drink' = algo de beber.",
      pronunciation: "Perfect. Here's your table. Can I get you something to drink?"
    },
    {
      id: 5,
      type: "dialogue",
      speaker: "Customer",
      text: "I'll have a glass of water, please. And my friend will have a coke.",
      translation: "Tomaré un vaso de agua, por favor. Y mi amigo tomará un refresco de cola.",
      grammarTip: "'I'll have...' (I will have) se usa para pedir. Es más educado que 'I want'.",
      grammarTipEs: "'I'll have...' (I will have) se usa para pedir. Es más educado que 'I want'.",
      pronunciation: "I'll have a glass of water, please. And my friend will have a coke."
    },
    {
      id: 6,
      type: "dialogue",
      speaker: "Waiter",
      text: "Sure. Are you ready to order, or do you need a few more minutes?",
      translation: "Claro. ¿Están listos para ordenar, o necesitan unos minutos más?",
      grammarTip: "'Ready to order' = listos para ordenar. 'A few more minutes' = unos minutos más.",
      grammarTipEs: "'Ready to order' = listos para ordenar. 'A few more minutes' = unos minutos más.",
      pronunciation: "Sure. Are you ready to order, or do you need a few more minutes?"
    },
    {
      id: 7,
      type: "dialogue",
      speaker: "Customer",
      text: "Yes, I'm ready. I'll have the chicken with rice, please.",
      translation: "Sí, estoy listo. Tomaré el pollo con arroz, por favor.",
      grammarTip: "'I'll have the...' seguido del plato que quieres. Siempre di 'please' al final.",
      grammarTipEs: "'I'll have the...' seguido del plato que quieres. Siempre di 'please' al final.",
      pronunciation: "Yes, I'm ready. I'll have the chicken with rice, please."
    },
    {
      id: 8,
      type: "dialogue",
      speaker: "Waiter",
      text: "Excellent choice. And for you, sir?",
      translation: "Excelente elección. ¿Y para usted, señor?",
      grammarTip: "'Excellent choice' es un cumplido común. 'And for you?' pasa la pregunta a otra persona.",
      grammarTipEs: "'Excellent choice' es un cumplido común. 'And for you?' pasa la pregunta a otra persona.",
      pronunciation: "Excellent choice. And for you, sir?"
    },
    {
      id: 9,
      type: "dialogue",
      speaker: "Customer 2",
      text: "I'll have the pasta with tomato sauce. Does it come with salad?",
      translation: "Tomaré la pasta con salsa de tomate. ¿Viene con ensalada?",
      grammarTip: "'Does it come with...?' pregunta si algo está incluido. 'Come with' = venir con.",
      grammarTipEs: "'Does it come with...?' pregunta si algo está incluido. 'Come with' = venir con.",
      pronunciation: "I'll have the pasta with tomato sauce. Does it come with salad?"
    },
    {
      id: 10,
      type: "dialogue",
      speaker: "Waiter",
      text: "Yes, it does. Would you like anything else?",
      translation: "Sí, así es. ¿Les gustaría algo más?",
      grammarTip: "'Would you like...?' es más formal y educado que 'Do you want...?'.",
      grammarTipEs: "'Would you like...?' es más formal y educado que 'Do you want...?'.",
      pronunciation: "Yes, it does. Would you like anything else?"
    },
    {
      id: 11,
      type: "dialogue",
      speaker: "Customer",
      text: "No, that's all. Thank you. Could we have the check, please?",
      translation: "No, eso es todo. Gracias. ¿Nos podría traer la cuenta, por favor?",
      grammarTip: "'That's all' = eso es todo. 'Could we have the check?' es la forma educada de pedir la cuenta. (En UK dicen 'bill')",
      grammarTipEs: "'That's all' = eso es todo. 'Could we have the check?' es la forma educada de pedir la cuenta. (En UK dicen 'bill')",
      pronunciation: "No, that's all. Thank you. Could we have the check, please?"
    },
    {
      id: 12,
      type: "practice",
      instruction: "Pide un vaso de agua:",
      instructionEs: "Pide un vaso de agua:",
      expectedAnswer: "I'll have a glass of water, please",
      exampleAnswer: "I'll have a glass of water, please",
      hint: "Usa 'I'll have...' + lo que quieres + 'please'",
      hintEs: "Usa 'I'll have...' + lo que quieres + 'please'"
    },
    {
      id: 13,
      type: "practice",
      instruction: "Pregunta si algo viene con ensalada:",
      instructionEs: "Pregunta si algo viene con ensalada:",
      expectedAnswer: "Does it come with salad?",
      exampleAnswer: "Does it come with salad?",
      hint: "Usa 'Does it come with...?'",
      hintEs: "Usa 'Does it come with...?'"
    },
    {
      id: 14,
      type: "practice",
      instruction: "Pide la cuenta al mesero:",
      instructionEs: "Pide la cuenta al mesero:",
      expectedAnswer: "Could we have the check, please?",
      exampleAnswer: "Could we have the check, please?",
      hint: "Usa 'Could we have the check, please?'",
      hintEs: "Usa 'Could we have the check, please?'"
    },
    {
      id: 15,
      type: "summary",
      title: "¡Buen provecho!",
      content: "Ahora puedes desenvolverte en un restaurante. Recuerda siempre ser educado con 'please' y 'thank you'.",
      contentEs: "Ahora puedes desenvolverte en un restaurante. Recuerda siempre ser educado con 'please' y 'thank you'.",
      keyPhrases: [
        { en: "Do you have a reservation?", es: "¿Tiene reservación?" },
        { en: "I'll have...", es: "Tomaré..." },
        { en: "Does it come with...?", es: "¿Viene con...?" },
        { en: "Could we have the check?", es: "¿Nos trae la cuenta?" }
      ]
    }
  ]
};
