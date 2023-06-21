import React from "react";
import Connection from "./Authentification/Connection";
import Inscription from "./Authentification/Inscription";

function Home() {
  return (
    <div className="home_logo">
      <Connection />
      <Inscription />
    </div>
  );
}

export default Home;
