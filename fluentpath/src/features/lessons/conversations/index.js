// Índice de módulos de conversación - Nivel A1
// Todos los módulos completos con enfoque práctico y explicaciones en español

import { identityContactScript } from "./identityContact";
import { greetingsIntroductionsScript } from "./greetingsIntroductions";
import { atTheRestaurantScript } from "./atTheRestaurant";

export { 
  identityContactScript, 
  greetingsIntroductionsScript,
  atTheRestaurantScript
};

// SCRIPTS mapea module.id -> array de nodos (lo que LessonView espera)
export const SCRIPTS = {
  "a1-mod1-identity": identityContactScript.nodes || identityContactScript,
  "a1-mod2-greetings": greetingsIntroductionsScript.nodes || greetingsIntroductionsScript,
  "a1-mod3-restaurant": atTheRestaurantScript.nodes || atTheRestaurantScript,
};
