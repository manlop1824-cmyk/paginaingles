export const identityContactScript = [
  {
    id: "n1",
    text: "Hi! Welcome. What's your name?",
    options: [
      { id: "a", text: "My name is Manuel.", next: "n2" },
      { id: "b", text: "I am fine, thanks.", next: "n1b", feedback: "Casi — te preguntó tu nombre, no cómo estás." },
    ],
  },
  {
    id: "n1b",
    text: "Let's try again — what's your name?",
    options: [{ id: "a", text: "My name is Manuel.", next: "n2" }],
  },
  {
    id: "n2",
    text: "Nice to meet you! Where are you from?",
    options: [
      { id: "a", text: "I'm from Mexico.", next: "n3" },
      { id: "b", text: "I from Mexico.", next: "n2b", feedback: "Casi — falta el verbo 'am': I'm from..." },
    ],
  },
  {
    id: "n2b",
    text: "Close! Try with 'I'm from...'",
    options: [{ id: "a", text: "I'm from Mexico.", next: "n3" }],
  },
  {
    id: "n3",
    text: "Great! Can you spell your email for me?",
    options: [{ id: "a", text: "Sure — it's m-a-n-u-e-l at gmail dot com.", next: "end" }],
  },
  {
    id: "end",
    text: "Perfect. You just introduced yourself in English! 🎉",
    options: [],
  },
];