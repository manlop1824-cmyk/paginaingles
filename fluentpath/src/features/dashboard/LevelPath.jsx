import { LEVELS } from "../../utils/curriculum";

export default function LevelPath({ levels, currentLevel }) {
  const currentIndex = LEVELS.indexOf(currentLevel);
  const fillPercent = (currentIndex / (LEVELS.length - 1)) * 100;

  return (
    <div className="level-path">
      <div className="level-track">
        <div className="level-track-fill" style={{ width: `${fillPercent}%` }} />
      </div>
      {LEVELS.map((level) => {
        const status = levels[level]?.status ?? "locked";
        const isCurrent = level === currentLevel;
        return (
          <div className="level-stop" key={level}>
            <div
              className={
                "level-stamp" +
                (status === "completed" ? " level-stamp-completed" : "") +
                (isCurrent ? " level-stamp-current" : "")
              }
            >
              {level}
            </div>
          </div>
        );
      })}
    </div>
  );
}