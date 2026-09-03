/**
 * Módulo A1 - Módulo 1: Greetings & Introductions
 * Contenido pedagógico diseñado para principiantes absolutos
 * Enfocado en saludos básicos, presentaciones personales y contacto inicial
 */

export const greetingsIntroductionsScript = [
  {
    id: "start",
    text: "Hello! Welcome to FluentPath. I'm Sarah, your English coach. What's your name?",
    options: [
      { id: "a", text: "My name is [Your Name].", next: "n2" },
      { id: "b", text: "I am [Your Name].", next: "n2" },
      { id: "c", text: "Call me [Your Name].", next: "n2", feedback: "Good! That's a natural way to introduce yourself." }
    ],
  },
  {
    id: "n2",
    text: "Nice to meet you! Where are you from?",
    options: [
      { id: "a", text: "I'm from Spain.", next: "n3" },
      { id: "b", text: "I from Spain.", next: "n2b", feedback: "Almost! Remember to use 'I'm' (I am) from..." },
      { id: "c", text: "I am from Spain.", next: "n3" }
    ],
  },
  {
    id: "n2b",
    text: "Let's try again. Say: 'I'm from...' or 'I am from...'",
    options: [
      { id: "a", text: "I'm from Spain.", next: "n3" },
      { id: "b", text: "I am from Spain.", next: "n3" }
    ],
  },
  {
    id: "n3",
    text: "Great! Are you a student or do you work?",
    options: [
      { id: "a", text: "I'm a student.", next: "n4" },
      { id: "b", text: "I work as a teacher.", next: "n4" },
      { id: "c", text: "I'm looking for a job.", next: "n4" }
    ],
  },
  {
    id: "n4",
    text: "Perfect! Why are you learning English?",
    options: [
      { id: "a", text: "For my career.", next: "n5" },
      { id: "b", text: "To travel.", next: "n5" },
      { id: "c", text: "Because I like it.", next: "n5" }
    ],
  },
  {
    id: "n5",
    text: "Excellent! Let's practice one more time. Can you introduce yourself? Say: 'Hello, my name is... and I'm from...'",
    options: [
      { 
        id: "a", 
        text: "Hello, my name is [Name] and I'm from [Country].", 
        next: "end",
        feedback: "Perfect introduction! 🎉" 
      },
      { 
        id: "b", 
        text: "Hi, I'm [Name] from [Country].", 
        next: "end",
        feedback: "Great! That's very natural! 👍" 
      }
    ],
  },
  {
    id: "end",
    text: "Congratulations! You just completed your first introduction in English! 🎉 In the next module, we'll practice at the airport. Ready to continue?",
    options: [],
  },
];
