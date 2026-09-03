import { loginWithGoogle } from "./useGoogleAuth";
import "./AuthScreen.css";

export default function AuthScreen() {
  const handleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-ticket">
        <div className="auth-ticket-stub">
          <span className="auth-stamp">✈</span>
          <h1 className="auth-wordmark">FluentPath</h1>
          <p className="auth-tagline">
            Inglés real para el aeropuerto, la oficina
            y todo lo que pasa entre los dos.
          </p>
          <ul className="auth-route">
            <li>A1 · Primeras palabras</li>
            <li>B1 · Independiente</li>
            <li>C2 · Certificación</li>
          </ul>
        </div>

        <div className="auth-divider">
          <span className="auth-notch auth-notch-top" />
          <span className="auth-notch auth-notch-bottom" />
        </div>

        <div className="auth-ticket-main">
          <p className="auth-eyebrow">Embarque</p>
          <h2 className="auth-heading">Retoma tu viaje</h2>
          <p className="auth-copy">
            Guardamos tu nivel y tu progreso en la nube.
            Entra con tu cuenta de Google para continuar.
          </p>

          <button className="auth-google-button" onClick={handleLogin}>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.84 2.09-1.8 2.73v2.27h2.92c1.7-1.57 2.68-3.88 2.68-6.64z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34C2.44 15.98 5.48 18 9 18z"/>
              <path fill="#FBBC05" d="M3.97 10.7A5.4 5.4 0 013.68 9c0-.59.1-1.17.29-1.7V4.96H.96A9 9 0 000 9c0 1.45.35 2.83.96 4.04l3.01-2.34z"/>
              <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"/>
            </svg>
            Continuar con Google
          </button>

          <p className="auth-fineprint">
            Al continuar aceptas usar tu cuenta de Google
            solo para guardar tu progreso de aprendizaje.
          </p>
        </div>
      </div>
    </div>
  );
}