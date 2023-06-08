import NavBar from "./components/Globals/NavBar/NavBar";
import "./Styles/imports.scss";
import Quiz from "./components/User/Quiz/Quiz";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Quiz />
    </div>
  );
}

export default App;
