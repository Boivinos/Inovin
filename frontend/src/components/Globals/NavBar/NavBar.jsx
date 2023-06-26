import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import icons8 from "../../../assets/icons8.png";
import UserContext from "../../Contexts/UserContext";

function DropdownMenu() {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    localStorage.clear();
    setUser(undefined);
  };

  return (
    <ul className="dropdownMenu">
      <NavLink to="/profile" className="link">
        <li>Mon profil</li>
      </NavLink>
      <NavLink to="/wineCardFavoris" className="link">
        <li>Ma cave</li>
      </NavLink>
      <NavLink to="/wineCardSelection" className="link">
        <li>Ma sélection</li>
      </NavLink>
      <NavLink to="/wineCardList" className="link">
        <li>Tous les vins</li>
      </NavLink>
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleClick()}
        onKeyDown={() => handleClick()}
      >
        Me déconnecter
      </div>
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
  const { user } = useContext(UserContext);

  return (
    <div className="navBar">
      <ul className="navLinks">
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
      {user && (
        <div
          className="icone"
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          <p>{user && user.firstname}</p>
          <img src={icons8} alt="User Icon" />
          {isMenuOpen && <DropdownMenu />}
        </div>
      )}
    </div>
  );
}

export default NavBar;
