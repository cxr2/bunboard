import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import { useAuth } from "./hooks/useAuth";
import bunlogo from "./images/bun.png";
import "./App.css";

function App() {
  const { user } = useAuth();

  return (
    <div className="container background">
      <div id="bunboardtitle">
        <img src={bunlogo} className="bunlogo" alt="pixelated bun" />
        <h1> Bun Board </h1>
        <img src={bunlogo} className="bunlogo" alt="pixelated bun" />
      </div>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
