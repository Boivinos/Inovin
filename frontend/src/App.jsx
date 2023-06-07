import NavBar from "./components/Globals/NavBar/NavBar";
import "./Styles/imports.scss";

import Contact from "./components/Globals/Contact/Contact";

import WineCardList from "./components/User/WineCardList/WineCardList";


function App() {
  return (
    <div className="App">

      <NavBar />


    
      <Contact />

      <WineCardList />


    </div>
  );
}

export default App;
