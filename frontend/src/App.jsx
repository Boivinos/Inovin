import NavBar from "./components/Globals/NavBar/NavBar";
import "./Styles/imports.scss";

import WineCardList from "./components/User/WineCardList/WineCardList";
import Contact from "./components/Globals/Contact/Contact";
import Profile from "./components/User/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Contact />
      <NavBar />
      <WineCardList />
      <Profile />
    </div>
  );
}

export default App;
