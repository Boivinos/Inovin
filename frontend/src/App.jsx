import NavBar from "./components/Globals/NavBar/NavBar";
import "./Styles/imports.scss";

import Contact from "./components/Globals/Contact/Contact";

import WineCardList from "./components/User/WineCardList/WineCardList";

import Quiz from "./components/User/Quiz/Quiz";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Contact />
      <WineCardList />

      <Quiz />
    </div>
  );
}

export default App;
