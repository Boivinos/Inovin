import { useEffect, useState } from "react";
import "./Styles/imports.scss";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Router from "./components/Navigation/Router";
import UserContext from "./components/Contexts/UserContext";
import NavBar from "./components/Globals/NavBar/NavBar";
import api from "./components/Contexts/api";

function App() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { href } = window.location;
  // Initialize the user with the token from localStorage after refreshing the page
  useEffect(() => {
    const token = localStorage.getItem("token");
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    if (token) {
      const infos = jwtDecode(token);
      const now = Date.now();
      if (infos.exp * 1000 < now) {
        navigate("/", { state: { sessionExpired: true } });
        setUser(undefined);
        localStorage.clear();
      } else {
        setUser(infos);
      }
    } else {
      setUser(undefined);
    }
  }, [href]);

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
