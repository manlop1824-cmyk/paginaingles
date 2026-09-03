/**
 * Calcula la similitud entre dos textos para evaluación de pronunciación
 * Usa una combinación de normalización y comparación de palabras clave
 * @param {string} a - Texto del usuario (transcripción STT)
 * @param {string} b - Texto esperado (respuesta correcta)
 * @returns {number} - Score de 0.0 a 1.0
 */
export function similarity(a, b) {
  const normalize = (s) =>
    s.toLowerCase().replace(/[^a-z0-9' ]/g, "").trim().split(/\s+/);
  
  const wordsA = normalize(a);
  const wordsB = normalize(b);
  
  if (wordsA.length === 0 || wordsB.length === 0) return 0;
  
  // Comparación exacta de palabras
  const setB = new Set(wordsB);
  const exactMatches = wordsA.filter((w) => setB.has(w)).length;
  
  // Comparación difusa (palabras similares)
  let fuzzyMatches = 0;
  wordsA.forEach((wordA) => {
    if (!setB.has(wordA)) {
      const isSimilar = wordsB.some((wordB) => {
        if (wordA.length < 3) return false;
        const distance = levenshteinDistance(wordA, wordB);
        const maxLength = Math.max(wordA.length, wordB.length);
        return distance / maxLength <= 0.3; // 30% de diferencia máxima
      });
      if (isSimilar) fuzzyMatches += 0.5;
    }
  });
  
  const totalMatches = exactMatches + fuzzyMatches;
  return Math.min(1.0, totalMatches / Math.max(wordsA.length, wordsB.length));
}

/**
 * Calcula la distancia de Levenshtein entre dos strings
 * @param {string} a 
 * @param {string} b 
 * @returns {number}
 */
function levenshteinDistance(a, b) {
  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
  
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
  
  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }
  
  return matrix[b.length][a.length];
}

/**
 * Evalúa la pronunciación y devuelve un objeto detallado de feedback
 * @param {string} userSpeech - Transcripción del habla del usuario
 * @param {string} expectedText - Texto esperado
 * @returns {{score: number, level: string, message: string, color: string}}
 */
export function evaluatePronunciation(userSpeech, expectedText) {
  const score = similarity(userSpeech, expectedText);
  
  let level, message, color;
  
  if (score >= 0.9) {
    level = "EXCELLENT";
    message = "¡Excelente pronunciación! 🎉";
    color = "#4ADE80"; // green-400
  } else if (score >= 0.7) {
    level = "GOOD";
    message = "¡Muy bien! Sigue así 👍";
    color = "#60A5FA"; // blue-400
  } else if (score >= 0.5) {
    level = "FAIR";
    message = "Bien, pero puedes mejorar 🤔";
    color = "#FBBF24"; // amber-400
  } else {
    level = "NEEDS_PRACTICE";
    message = "Intenta de nuevo, escucha el audio 💪";
    color = "#F87171"; // red-400
  }
  
  return { score, level, message, color };
}