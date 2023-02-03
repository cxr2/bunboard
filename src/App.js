import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import { useAuth } from "./hooks/useAuth";
import bunlogo from "./images/bun.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>
        <img src={bunlogo} className="px-2 bunlogo" alt="a pixel bun" />
        Bun Board
        <img src={bunlogo} className="px-2 bunlogo" alt="a pixel bun" />
      </h1>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
