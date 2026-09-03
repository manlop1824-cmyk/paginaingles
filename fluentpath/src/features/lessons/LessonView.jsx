import { useEffect, useState, useCallback } from "react";
import { SCRIPTS } from "./conversations";
import { completeModule } from "../../services/firestoreService";
import { useSpeechRecognition } from "./useSpeechRecognition";
import { speak, stopSpeaking, isSpeaking } from "../../utils/speak";
import { evaluatePronunciation } from "../../utils/textSimilarity";
import "./LessonView.css";

export default function LessonView({ user, level, module, nextModuleId, onBack }) {
  const script = SCRIPTS[module.id];
  const [history, setHistory] = useState(script ? [{ from: "coach", text: script[0].text }] : []);
  const [currentNodeId, setCurrentNodeId] = useState(script ? script[0].id : null);
  const [finished, setFinished] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // Estados para evaluación de pronunciación
  const [pronunciationFeedback, setPronunciationFeedback] = useState(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  
  const { supported, listening, transcript, error, start, reset } = useSpeechRecognition();
  const currentNode = script ? script.find((n) => n.id === currentNodeId) : null;

  // Manejar resultado del reconocimiento de voz
  useEffect(() => {
    if (!transcript || !currentNode || !isEvaluating) return;
    
    const evaluationResult = evaluatePronunciationForOptions(transcript, currentNode.options);
    
    if (evaluationResult.bestOption && evaluationResult.score >= 0.5) {
      setPronunciationFeedback({
        ok: true,
        text: transcript,
        score: evaluationResult.score,
        level: evaluationResult.level,
        message: evaluationResult.message,
        color: evaluationResult.color
      });
      setIsEvaluating(false);
      
      // Auto-seleccionar opción después de un breve delay para mostrar feedback
      setTimeout(() => {
        handleOption(evaluationResult.bestOption);
      }, 1500);
    } else {
      setPronunciationFeedback({
        ok: false,
        text: transcript,
        score: evaluationResult.score,
        level: evaluationResult.level,
        message: evaluationResult.message,
        color: evaluationResult.color
      });
      setIsEvaluating(false);
      setAttemptCount(prev => prev + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript]);

  // Evaluar transcripción contra todas las opciones disponibles
  const evaluatePronunciationForOptions = (userSpeech, options) => {
    let bestOption = null;
    let bestScore = 0;
    let bestEvaluation = null;

    options.forEach((option) => {
      const evaluation = evaluatePronunciation(userSpeech, option.text);
      if (evaluation.score > bestScore) {
        bestScore = evaluation.score;
        bestOption = option;
        bestEvaluation = evaluation;
      }
    });

    return {
      bestOption,
      score: bestScore,
      level: bestEvaluation?.level || "NEEDS_PRACTICE",
      message: bestEvaluation?.message || "Intenta de nuevo",
      color: bestEvaluation?.color || "#F87171"
    };
  };

  const handleOption = useCallback((option) => {
    const nextNode = script.find((n) => n.id === option.next);
    setPronunciationFeedback(null);
    setAttemptCount(0);
    
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
  }, [script]);

  const handleSpeakClick = useCallback((text) => {
    stopSpeaking();
    speak(text, { rate: 0.85 }); // Más lento para que el estudiante pueda repetir
  }, []);

  const handleMicClick = useCallback(() => {
    setPronunciationFeedback(null);
    setIsEvaluating(true);
    start();
  }, [start]);

  const handleRetry = useCallback(() => {
    setPronunciationFeedback(null);
    reset();
    setIsEvaluating(true);
    start();
  }, [start, reset]);

  const handleFinish = async () => {
    setSaving(true);
    try {
      // Calcular puntuación basada en intentos
      const baseScore = 10;
      const attemptPenalty = Math.min(attemptCount * 0.5, 3); // Máximo 3 puntos de penalización
      const finalScore = Math.max(baseScore - attemptPenalty, 7);
      
      await completeModule(user.uid, level, module.id, nextModuleId, finalScore);
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
                <button 
                  className="lesson-speak" 
                  onClick={() => handleSpeakClick(msg.text)} 
                  aria-label="Escuchar"
                  disabled={isSpeaking()}
                >
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
                <button 
                  key={option.id} 
                  className="lesson-option" 
                  onClick={() => handleOption(option)}
                >
                  {option.text}
                </button>
              ))}
            </div>

            {supported ? (
              <div className="lesson-mic-section">
                <div className="lesson-mic-row">
                  <button
                    className={`lesson-mic ${listening ? "lesson-mic-active" : ""}`}
                    onClick={handleMicClick}
                    disabled={listening || isEvaluating}
                  >
                    {listening ? "🎙️ Escuchando..." : "🎤 Responder hablando"}
                  </button>
                  
                  {pronunciationFeedback && !listening && (
                    <button
                      className="lesson-retry"
                      onClick={handleRetry}
                      disabled={listening}
                    >
                      🔄 Intentar de nuevo
                    </button>
                  )}
                </div>
                
                {pronunciationFeedback && (
                  <div className={`lesson-feedback-card ${pronunciationFeedback.ok ? "success" : "warning"}`}>
                    <div className="feedback-header">
                      <span className="feedback-icon">
                        {pronunciationFeedback.ok ? "✅" : "⚠️"}
                      </span>
                      <span 
                        className="feedback-level"
                        style={{ color: pronunciationFeedback.color }}
                      >
                        {pronunciationFeedback.level === "EXCELLENT" && "¡Excelente!"}
                        {pronunciationFeedback.level === "GOOD" && "¡Muy bien!"}
                        {pronunciationFeedback.level === "FAIR" && "Bien"}
                        {pronunciationFeedback.level === "NEEDS_PRACTICE" && "Sigue practicando"}
                      </span>
                    </div>
                    <div className="feedback-content">
                      <p className="feedback-message">{pronunciationFeedback.message}</p>
                      <p className="feedback-transcript">
                        <strong>Dijiste:</strong> "{pronunciationFeedback.text}"
                      </p>
                      {pronunciationFeedback.score !== undefined && (
                        <div className="feedback-score-bar">
                          <div 
                            className="feedback-score-fill"
                            style={{ 
                              width: `${pronunciationFeedback.score * 100}%`,
                              backgroundColor: pronunciationFeedback.color
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {error && (
                  <p className="lesson-mic-error">
                    Error: {error}. Por favor verifica los permisos del micrófono.
                  </p>
                )}
              </div>
            ) : (
              <p className="lesson-no-support">
                Tu navegador no soporta reconocimiento de voz. Usa Chrome o Edge para practicar pronunciación.
              </p>
            )}
          </>
        ) : (
          <button className="lesson-finish" onClick={handleFinish} disabled={saving}>
            {saving ? "Guardando..." : `Finalizar módulo · +${Math.round(10 - Math.min(attemptCount * 0.5, 3))} pts`}
          </button>
        )}
      </div>
    </div>
  );
}
