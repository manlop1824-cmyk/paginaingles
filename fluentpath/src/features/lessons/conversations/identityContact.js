// Módulo A1-1: Presentarse y dar información personal
// Enfoque: Situaciones reales - Conocer gente nueva, trabajo, trámites

export const identityContactScript = {
  id: "a1-mod1-identity",
  title: "Introducing Yourself",
  titleEs: "Presentándote",
  level: "A1",
  moduleNumber: 1,
  description: "Aprende a decir tu nombre, de dónde eres y a qué te dedicas. Esencial para conocer gente nueva o llenar formularios.",
  descriptionEs: "Aprende a decir tu nombre, de dónde eres y a qué te dedicas. Esencial para conocer gente nueva o llenar formularios.",
  nodes: [
    {
      id: 1,
      type: "intro",
      title: "¡Bienvenido!",
      content: "En esta lección aprenderás a presentarte en inglés. Esto es lo primero que necesitas saber cuando conoces a alguien o llegas a un nuevo lugar de trabajo.",
      contentEs: "En esta lección aprenderás a presentarte en inglés. Esto es lo primero que necesitas saber cuando conoces a alguien o llegas a un nuevo lugar de trabajo."
    },
    {
      id: 2,
      type: "dialogue",
      speaker: "Persona A",
      text: "Hello! My name is Sarah. What's your name?",
      translation: "¡Hola! Mi nombre es Sarah. ¿Cuál es tu nombre?",
      grammarTip: "'What's' es la contracción de 'What is'. Se usa comúnmente en conversaciones informales.",
      grammarTipEs: "'What's' es la contracción de 'What is'. Se usa comúnmente en conversaciones informales.",
      pronunciation: "Hello! My name is Sarah. What's your name?"
    },
    {
      id: 3,
      type: "dialogue",
      speaker: "Persona B",
      text: "Hi Sarah! I'm Carlos. Nice to meet you.",
      translation: "¡Hola Sarah! Soy Carlos. Gusto en conocerte.",
      grammarTip: "'I'm' es la contracción de 'I am'. 'Nice to meet you' es la frase estándar cuando conoces a alguien por primera vez.",
      grammarTipEs: "'I'm' es la contracción de 'I am'. 'Nice to meet you' es la frase estándar cuando conoces a alguien por primera vez.",
      pronunciation: "Hi Sarah! I'm Carlos. Nice to meet you."
    },
    {
      id: 4,
      type: "dialogue",
      speaker: "Persona A",
      text: "Nice to meet you too, Carlos. Where are you from?",
      translation: "Gusto en conocerte también, Carlos. ¿De dónde eres?",
      grammarTip: "'Where are you from?' pregunta sobre tu origen o nacionalidad. La respuesta usa 'I am from...'",
      grammarTipEs: "'Where are you from?' pregunta sobre tu origen o nacionalidad. La respuesta usa 'I am from...'",
      pronunciation: "Nice to meet you too, Carlos. Where are you from?"
    },
    {
      id: 5,
      type: "dialogue",
      speaker: "Persona B",
      text: "I'm from Mexico City. And you?",
      translation: "Soy de la Ciudad de México. ¿Y tú?",
      grammarTip: "Puedes decir el país ('Mexico') o la ciudad específica ('Mexico City'). 'And you?' es una forma corta de devolver la pregunta.",
      grammarTipEs: "Puedes decir el país ('Mexico') o la ciudad específica ('Mexico City'). 'And you?' es una forma corta de devolver la pregunta.",
      pronunciation: "I'm from Mexico City. And you?"
    },
    {
      id: 6,
      type: "dialogue",
      speaker: "Persona A",
      text: "I'm from Canada. What do you do, Carlos?",
      translation: "Soy de Canadá. ¿A qué te dedicas, Carlos?",
      grammarTip: "'What do you do?' pregunta sobre tu profesión o trabajo. Es más natural que 'What is your job?'",
      grammarTipEs: "'What do you do?' pregunta sobre tu profesión o trabajo. Es más natural que 'What is your job?'",
      pronunciation: "I'm from Canada. What do you do, Carlos?"
    },
    {
      id: 7,
      type: "dialogue",
      speaker: "Persona B",
      text: "I'm an engineer. I work at a technology company.",
      translation: "Soy ingeniero. Trabajo en una empresa de tecnología.",
      grammarTip: "Usamos 'an' antes de palabras que empiezan con sonido vocal (engineer). 'I work at' indica el lugar donde trabajas.",
      grammarTipEs: "Usamos 'an' antes de palabras que empiezan con sonido vocal (engineer). 'I work at' indica el lugar donde trabajas.",
      pronunciation: "I'm an engineer. I work at a technology company."
    },
    {
      id: 8,
      type: "practice",
      instruction: "Ahora es tu turno. Preséntate diciendo tu nombre:",
      instructionEs: "Ahora es tu turno. Preséntate diciendo tu nombre:",
      expectedAnswer: "My name is [tu nombre]",
      exampleAnswer: "My name is Ana",
      hint: "Empieza con 'My name is...' seguido de tu nombre",
      hintEs: "Empieza con 'My name is...' seguido de tu nombre"
    },
    {
      id: 9,
      type: "practice",
      instruction: "Ahora di de dónde eres:",
      instructionEs: "Ahora di de dónde eres:",
      expectedAnswer: "I'm from [tu país o ciudad]",
      exampleAnswer: "I'm from Colombia",
      hint: "Usa 'I'm from...' seguido de tu país o ciudad",
      hintEs: "Usa 'I'm from...' seguido de tu país o ciudad"
    },
    {
      id: 10,
      type: "practice",
      instruction: "Finalmente, menciona tu profesión o lo que haces:",
      instructionEs: "Finalmente, menciona tu profesión o lo que haces:",
      expectedAnswer: "I'm a [profesión] / I work as a [profesión]",
      exampleAnswer: "I'm a teacher",
      hint: "Usa 'I'm a...' para profesiones. Recuerda usar 'an' si la palabra empieza con vocal.",
      hintEs: "Usa 'I'm a...' para profesiones. Recuerda usar 'an' si la palabra empieza con vocal."
    },
    {
      id: 11,
      type: "summary",
      title: "¡Excelente trabajo!",
      content: "Has aprendido las frases básicas para presentarte. Practica esto cada día frente al espejo hasta que se sienta natural.",
      contentEs: "Has aprendido las frases básicas para presentarte. Practica esto cada día frente al espejo hasta que se sienta natural.",
      keyPhrases: [
        { en: "My name is...", es: "Mi nombre es..." },
        { en: "I'm from...", es: "Soy de..." },
        { en: "I'm a/an...", es: "Soy un/una..." },
        { en: "Nice to meet you", es: "Gusto en conocerte" }
      ]
    }
  ]
};
