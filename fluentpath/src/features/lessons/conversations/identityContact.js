// fluentpath/src/features/lessons/conversations/identityContact.js
// Módulo A1: Identity & Contact (Identidad y Contacto)
// Enfoque: Presentarse, deletrear nombre y dar información básica de contacto

export const identityContactScript = {
  id: "a1-mod1-identity",
  title: "Identity & Contact Information",
  level: "A1",
  description: "Aprende a decir tu nombre, deletrearlo y dar tu número de teléfono o correo.",
  nodes: [
    {
      id: 1,
      type: "dialogue",
      speaker: "Receptionist",
      text: "Good morning! Welcome to Global Tech. How can I help you?",
      translation: "¡Buenos días! Bienvenido a Global Tech. ¿Cómo puedo ayudarte?",
      audio: true
    },
    {
      id: 2,
      type: "dialogue",
      speaker: "Visitor",
      text: "Good morning. My name is Carlos Ruiz. I have an interview.",
      translation: "Buenos días. Mi nombre es Carlos Ruiz. Tengo una entrevista.",
      audio: true
    },
    {
      id: 3,
      type: "grammar_tip",
      title: "Verbo 'To Be' (Ser/Estar)",
      content: "Para presentarnos usamos 'My name is...' (Mi nombre es...) o 'I am...' (Yo soy...). Nunca digas 'I have name'.",
      example: "Correcto: I am Carlos. / Incorrecto: I have Carlos."
    },
    {
      id: 4,
      type: "dialogue",
      speaker: "Receptionist",
      text: "Nice to meet you, Carlos. Can you spell your last name, please?",
      translation: "Gusto en conocerte, Carlos. ¿Puedes deletrear tu apellido, por favor?",
      audio: true
    },
    {
      id: 5,
      type: "interaction",
      prompt: "El recepcionista te pide deletrear tu apellido. Intenta decir: 'R-U-I-Z'",
      expectedText: "R U I Z",
      feedback: "En inglés se usa el alfabeto internacional. Practica deletrear tu propio nombre.",
      audio: true
    },
    {
      id: 6,
      type: "dialogue",
      speaker: "Visitor",
      text: "Sure. It's R - U - I - Z.",
      translation: "Claro. Es R - U - I - Z.",
      audio: true
    },
    {
      id: 7,
      type: "dialogue",
      speaker: "Receptionist",
      text: "Thank you. And what is your phone number?",
      translation: "Gracias. ¿Y cuál es tu número de teléfono?",
      audio: true
    },
    {
      id: 8,
      type: "grammar_tip",
      title: "Números de Teléfono",
      content: "En inglés, los números de teléfono se dicen dígito por dígito. El cero se dice 'zero' o 'oh'.",
      example: "555-0192 -> 'Five five five, zero one nine two'."
    },
    {
      id: 9,
      type: "interaction",
      prompt: "Practica dando un número ficticio. Di: 'Five five five, zero one two three'",
      expectedText: "Five five five zero one two three",
      feedback: "Recuerda hacer pausas pequeñas entre los grupos de números.",
      audio: true
    },
    {
      id: 10,
      type: "dialogue",
      speaker: "Visitor",
      text: "It's five five five, zero one two three.",
      translation: "Es cinco cinco cinco, cero uno dos tres.",
      audio: true
    },
    {
      id: 11,
      type: "challenge",
      prompt: "Ahora es tu turno. Presiona el micrófono y preséntate diciendo tu nombre y un número de teléfono ficticio.",
      expectedText: "My name is",
      feedback: "Excelente práctica. Recuerda: 'My name is...' y luego los dígitos uno por uno.",
      audio: false
    }
  ]
};