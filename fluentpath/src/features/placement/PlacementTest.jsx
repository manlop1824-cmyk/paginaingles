import { useState } from "react";
import { PLACEMENT_QUESTIONS } from "./placementQuestions";
import { determinePlacementLevel } from "../../utils/curriculum";
import { savePlacementResult } from "../../services/firestoreService";
import { speak } from "../../utils/speak";
import "./PlacementTest.css";

export default function PlacementTest({ user }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState(null);

  const question = PLACEMENT_QUESTIONS[step];
  const isLast = step === PLACEMENT_QUESTIONS.length - 1;

  const handleAnswer = (optionId) => {
    const updated = { ...answers, [question.id]: optionId };
    setAnswers(updated);
    if (isLast) {
      finish(updated);
    } else {
      setStep((s) => s + 1);
    }
  };

  const finish = async (finalAnswers) => {
    const level = determinePlacementLevel(finalAnswers, PLACEMENT_QUESTIONS);
    setResult(level);
    setSaving(true);
    try {
      await savePlacementResult(user.uid, level);
    } catch (error) {
      console.error("Error al guardar tu nivel:", error);
    }
    setSaving(false);
  };

  if (result) {
    return (
      <div className="placement-page">
        <div className="placement-card placement-result">
          <span className="placement-stamp">{result}</span>
          <h2>Tu nivel de partida es {result}</h2>
          <p>
            Ajustamos tu ruta según tus respuestas. Puedes avanzar más rápido
            si ya dominas lo básico, o repasar desde cero si lo prefieres.
          </p>
          {saving && <p className="placement-saving">Guardando...</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="placement-page">
      <div className="placement-card">
        <p className="placement-progress">
          Pregunta {step + 1} de {PLACEMENT_QUESTIONS.length}
        </p>
        <div className="placement-progress-bar">
          <div
            className="placement-progress-fill"
            style={{ width: `${((step + 1) / PLACEMENT_QUESTIONS.length) * 100}%` }}
          />
        </div>

        <div className="placement-question-row">
          <h2 className="placement-question">{question.prompt}</h2>
          <button className="placement-speak" onClick={() => speak(question.prompt)}>
            🔊
          </button>
        </div>

        <div className="placement-options">
          {question.options.map((option) => (
            <button
              key={option.id}
              className="placement-option"
              onClick={() => handleAnswer(option.id)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}