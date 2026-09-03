export { identityContactScript } from "./identityContact";
export { greetingsIntroductionsScript } from "./greetingsIntroductions";

// SCRIPTS mapea module.id -> array de nodos (lo que LessonView espera)
export const SCRIPTS = {
  "a1-mod1-identity": identityContactScript.nodes,
  "a1-mod2-greetings": greetingsIntroductionsScript.nodes,
};
