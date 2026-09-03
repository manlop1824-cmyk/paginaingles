import { identityContactScript } from "./identityContact";
import { greetingsIntroductionsScript } from "./greetingsIntroductions";

export { identityContactScript, greetingsIntroductionsScript };

// SCRIPTS mapea module.id -> array de nodos (lo que LessonView espera)
export const SCRIPTS = {
  "a1-mod1-identity": identityContactScript.nodes || identityContactScript,
  "a1-mod2-greetings": greetingsIntroductionsScript.nodes || greetingsIntroductionsScript,
};
