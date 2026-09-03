import { useEffect, useState } from "react";
import { identityContactScript } from "./conversations/identityContact";
import { completeModule } from "../../services/firestoreService";
import { useSpeechRecognition } from "./useSpeechRecognition";
import { speak } from "../../utils/speak";
import { similarity } from "../../utils/textSimilarity";
import "./LessonView.css";

const SCRIPTS = {
  identity_contact: identityContactScript,
};

export default function LessonView({ user, level, module, nextModuleId, onBack }) {
  const script = SCRIPTS[module.id];
  const [history, setHistory] = useState(script ? [{ from: "coach", text: script[0].text }] : []);
  const [currentNodeId, setCurrentNodeId] = useState(script ? script[0].id : null);
  const [finished, setFinished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [micFeedback, setMicFeedback] = useState(null);

  const { supported, listening, transcript, start } = useSpeechRecognition();
  const currentNode = script ? script.find((n) => n.id === currentNodeId) : null;

  useEffect(() => {
    if (!transcript || !currentNode) return;
    let bestOption = null;
    let bestScore = 0;
    currentNode.options.forEach((option) => {
      const score = similarity(transcript, option.text);
      if (score > bestScore) {
        bestScore = score;
        bestOption = option;
      }
    });
    if (bestOption && bestScore >= 0.5) {
      setMicFeedback({ ok: true, text: `Se entendió: "${transcript}"` });
      handleOption(bestOption);
    } else {
      setMicFeedback({
        ok: false,
        text: `No coincide bien: "${transcript}". Intenta de nuevo o elige una opción.`,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript]);

  const handleOption = (option) => {
    const nextNode = script.find((n) => n.id === option.next);
    setMicFeedback(null);
    setHistory((prev) => [
      ...prev,
      { from: "user", text: option.text },
      ...(option.feedback ? [{ from: "hint", text: option.feedback }] : []),
      { from: "coach", text: nextNode.text },
    ]);
    setCurrentNodeId(nextNode.id);
    if (nextNode.options.length === 0) {
      setFinished(true);
    }
  };

  const handleFinish = async () => {
    setSaving(true);
    try {
      await completeModule(user.uid, level, module.id, nextModuleId, 10);
    } catch (error) {
      console.error("Error al guardar tu progreso:", error);
    }
    setSaving(false);
    onBack();
  };

  if (!script) {
    return (
      <div className="lesson-view">
        <button className="lesson-back" onClick={onBack}>← Volver a tu ruta</button>
        <div className="lesson-card">
          <div className="lesson-header">
            <span className="lesson-icon">{module.icon}</span>
            <div>
              <p className="lesson-title">{module.title}</p>
              <p className="lesson-scenario">{module.scenario}</p>
            </div>
          </div>
          <p className="lesson-soon">
            Esta conversación está en construcción — muy pronto podrás practicarla aquí.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-view">
      <button className="lesson-back" onClick={onBack}>← Volver a tu ruta</button>

      <div className="lesson-card">
        <div className="lesson-header">
          <span className="lesson-icon">{module.icon}</span>
          <div>
            <p className="lesson-title">{module.title}</p>
            <p className="lesson-scenario">{module.scenario}</p>
          </div>
        </div>

        <div className="lesson-chat">
          {history.map((msg, index) => (
            <div key={index} className={`lesson-bubble lesson-bubble-${msg.from}`}>
              {msg.text}
              {msg.from === "coach" && (
                <button className="lesson-speak" onClick={() => speak(msg.text)} aria-label="Escuchar">
                  🔊
                </button>
              )}
            </div>
          ))}
        </div>

        {!finished ? (
          <>
            <div className="lesson-options">
              {currentNode.options.map((option) => (
                <button key={option.id} className="lesson-option" onClick={() => handleOption(option)}>
                  {option.text}
                </button>
              ))}
            </div>

            {supported && (
              <div className="lesson-mic-row">
                <button
                  className={`lesson-mic ${listening ? "lesson-mic-active" : ""}`}
                  onClick={start}
                  disabled={listening}
                >
                  {listening ? "🎙️ Escuchando..." : "🎤 Responder hablando"}
                </button>
                {micFeedback && (
                  <p className={`lesson-mic-feedback ${micFeedback.ok ? "ok" : "warn"}`}>
                    {micFeedback.text}
                  </p>
                )}
              </div>
            )}
          </>
        ) : (
          <button className="lesson-finish" onClick={handleFinish} disabled={saving}>
            {saving ? "Guardando..." : "Finalizar módulo · +10 pts"}
          </button>
        )}
      </div>
    </div>
  );
}