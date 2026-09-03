import { useAuth } from "./contexts/AuthContext";
import AuthScreen from "./features/auth/AuthScreen";
import Dashboard from "./features/dashboard/Dashboard";
import PlacementTest from "./features/placement/PlacementTest";
import { useUserProgress } from "./features/dashboard/useUserProgress";

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="app-loading">Cargando...</div>;
  }

  if (!user) {
    return <AuthScreen />;
  }

  return <Gate user={user} />;
}

function Gate({ user }) {
  const { data, loading } = useUserProgress(user.uid);

  if (loading || !data) {
    return <div className="app-loading">Cargando tu perfil...</div>;
  }

  if (data.progress.placementDone !== true) {
    return <PlacementTest user={user} />;
  }

  return <Dashboard user={user} />;
}

export default App;