import "./Styles/imports.scss";
import Connexion from "./components/Globals/Home/Authentification/Connexion";
import Inscription from "./components/Globals/Home/Authentification/Inscription";
import Home from "./components/Globals/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Connexion />
      <Inscription />
      <p>coucou</p>
    </div>
  );
}

export default App;
