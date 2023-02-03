import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import { useAuth } from "./hooks/useAuth";
import bunlogo from "./images/bun.png";
import "./App.css";

function App() {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>
        <img src={bunlogo} className="bunlogo" alt="pixelated bun" />
        Bun Board
        <img src={bunlogo} className="bunlogo" alt="pixelated bun" />
      </h1>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
