import { useEffect, useState } from "react";
import "./Styles/imports.scss";
import jwtDecode from "jwt-decode";
import Router from "./components/Navigation/Router";
import UserContext from "./components/Contexts/UserContext";
import NavBar from "./components/Globals/NavBar/NavBar";

function App() {
  const [user, setUser] = useState();

  // Initialize the user with the token from localStorage after refreshing the page
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      setUser(jwtDecode(token));
    }
  }, []);

  return (
    <div className="App">
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;
