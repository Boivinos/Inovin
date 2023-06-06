import React from "react";

import logo from "../../../assets/logo.svg";

function NavBar() {
  return (
    <div className="navBar">
      <div className="icone">
        <img src={logo} alt="Mon icône" />
      </div>
    </div>
  );
}

export default NavBar;
