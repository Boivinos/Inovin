import React, { useState } from "react";
import icons8 from "../../../assets/icons8.png";

function DropdownMenu() {
  return (
    <ul className="dropdownMenu">
      <li>Mon profil</li>
      <li>Ma cave</li>
      <li>Ma sélection</li>
      <li>Tous les vins</li>
      <li>Me déconnecter</li>
    </ul>
  );
}

function NavBar() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleMenu();
    }
  };


  return (
    <div className="navBar">
      <ul className="navLinks">
        <li>
          <a href="/lexique" className="link">
            Lexique
          </a>
        </li>
        <li>
          <a href="/contact" className="link">
            Contact
          </a>
        </li>
      </ul>
      <div
        className="icone"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <img src={icons8} alt="User Icon" />
        {isMenuOpen && <DropdownMenu />}
      </div>
    </div>
  );
}

export default NavBar;
