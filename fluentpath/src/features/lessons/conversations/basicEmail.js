export const basicEmailScript = {
  id: "basic_email",
  title: "Correos Electrónicos Básicos",
  level: "A1",
  description: "Aprende a escribir saludos, cuerpos y cierres de correos profesionales simples.",
  nodes: [
    {
      id: 1,
      type: "dialogue",
      speaker: "Tú",
      text: "Dear Mr. Smith, I am writing to confirm our meeting.",
      translation: "Estimado Sr. Smith, escribo para confirmar nuestra reunión.",
      tip: "'Dear' es el saludo estándar formal. 'I am writing to...' es la frase clásica para iniciar el propósito del correo."
    },
    {
      id: 2,
      type: "dialogue",
      speaker: "Jefe",
      text: "Thanks for your email. Please send the report by Friday.",
      translation: "Gracias por tu correo. Por favor envía el reporte antes del viernes.",
      tip: "'Please' + verbo es la forma educada de pedir algo. 'By Friday' significa 'a más tardar el viernes'."
    },
    {
      id: 3,
      type: "dialogue",
      speaker: "Tú",
      text: "Best regards, John Doe.",
      translation: "Saludos cordiales, John Doe.",
      tip: "'Best regards' es el cierre profesional más seguro. 'Sincerely' es más formal, 'Cheers' es informal."
    },
    {
      id: 4,
      type: "quiz",
      question: "Quieres adjuntar un archivo al correo. ¿Qué frase usas?",
      options: [
        { text: "I attach here the file.", correct: false, feedback: "Incorrecto. Suena muy literal del español. La forma profesional es diferente." },
        { text: "Please find attached the file.", correct: true, feedback: "¡Correcto! Es la frase estándar profesional para adjuntos." },
        { text: "Look my file.", correct: false, feedback: "Incorrecto. Es demasiado brusco y gramaticalmente pobre." }
      ]
    },
    {
      id: 5,
      type: "practice",
      prompt: "Necesitas responder que recibirás el reporte mañana. Escribe: 'Lo recibiré mañana'.",
      expectedAnswer: "I will receive it tomorrow.",
      hint: "Usa el futuro 'will' + verbo. 'It' reemplaza al reporte."
    }
  ]
};
