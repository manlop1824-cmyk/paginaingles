import { useState } from "react";
import { logout } from "../auth/useGoogleAuth";
import { useUserProgress } from "./useUserProgress";
import LevelPath from "./LevelPath";
import LessonView from "../lessons/LessonView";
import { MODULES_BY_LEVEL } from "../../utils/curriculum";
import "./Dashboard.css";

export default function Dashboard({ user }) {
  const { data, loading } = useUserProgress(user.uid);
  const [activeModuleId, setActiveModuleId] = useState(null);

  if (loading || !data) {
    return <div className="app-loading">Preparando tu ruta...</div>;
  }

  const { progress } = data;
  const currentLevel = progress.currentLevel;
  const levelData = progress.levels[currentLevel];
  const currentModules = MODULES_BY_LEVEL[currentLevel] || [];
  if (activeModuleId) {
        const moduleIndex = currentModules.findIndex((m) => m.id === activeModuleId);
    const module = currentModules[moduleIndex];
    const nextModuleId = currentModules[moduleIndex + 1]?.id ?? null;
    return (
      <LessonView
        user={user}
        level={currentLevel}
        module={module}
        nextModuleId={nextModuleId}
        onBack={() => setActiveModuleId(null)}
      />
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-profile">
          {user.photoURL ? (
            <img
              className="dashboard-avatar"
              src={user.photoURL}
              alt=""
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="dashboard-avatar dashboard-avatar-fallback">
              {user.displayName?.[0] ?? "?"}
            </div>
          )}
          <div>
            <p className="dashboard-greeting">Hola, {user.displayName?.split(" ")[0]}</p>
            <p className="dashboard-level">Nivel {currentLevel} · {progress.totalPoints} pts</p>
          </div>
        </div>
        <button className="dashboard-logout" onClick={() => logout()}>
          Cerrar sesión
        </button>
      </header>

      <section className="dashboard-route">
        <h2 className="dashboard-section-title">Tu ruta</h2>
        <LevelPath levels={progress.levels} currentLevel={currentLevel} />
      </section>

      <section className="dashboard-modules">
        <h2 className="dashboard-section-title">Nivel {currentLevel} · Uso inmediato</h2>
        <div className="module-grid">
                  {currentModules.map((module) => {
            const isCompleted = levelData.completedModules.includes(module.id);
            const isUnlocked = levelData.unlockedModules.includes(module.id);
            return (
              <div
                key={module.id}
                className={
                  "module-card" +
                  (isCompleted ? " module-card-done" : "") +
                  (!isUnlocked ? " module-card-locked" : "")
                }
                onClick={() => {
                  if (isUnlocked && !isCompleted) setActiveModuleId(module.id);
                }}
              >
                <span className="module-icon">{module.icon}</span>
                <div>
                  <p className="module-title">{module.title}</p>
                  <p className="module-scenario">{module.scenario}</p>
                </div>
                <span className="module-status">
                  {isCompleted ? "Completado" : isUnlocked ? "Continuar" : "Bloqueado"}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}