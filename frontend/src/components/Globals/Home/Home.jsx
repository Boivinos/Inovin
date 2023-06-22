import React, { useEffect } from "react";
import Connection from "./Authentification/Connection";
import Inscription from "./Authentification/Inscription";

function Home() {
  useEffect(() => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImlhdCI6MTY4NzQyNjA1NSwiZXhwIjoxNjg3NDI5NjU1fQ.9ZaJxc_ylfMleVN2Fjxt4manu3XIB-8-UB5nxubeWFU"
    );
  }, []);

  return (
    <div className="home_logo">
      <Connection />
      <Inscription />
    </div>
  );
}

export default Home;
