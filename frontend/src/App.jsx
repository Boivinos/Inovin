import NavBar from "./components/Globals/NavBar/NavBar";
import "./Styles/imports.scss";
import Connexion from "./components/Globals/Home/Authentification/Connexion";
import Inscription from "./components/Globals/Home/Authentification/Inscription";
import Home from "./components/Globals/Home/Home";

import WineCardList from "./components/User/WineCardList/WineCardList";
import Contact from "./components/Globals/Contact/Contact";
import Profile from "./components/User/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Home />
      <Connexion />
      <Inscription />
      <Contact />
      <NavBar />
      <WineCardList />
      <Profile />
    </div>
  );
}

export default App;
