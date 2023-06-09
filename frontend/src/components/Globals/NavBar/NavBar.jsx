import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <NavLink to="/glossary" className="link">
            Lexique
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="link">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="icone" />
    </div>
  );
}

export default NavBar;
