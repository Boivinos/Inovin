import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect, useRef } from "react";
import icons9 from "../../../assets/icons9.png";

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
      <NavLink to="/profil" className="link">
        <li>Mon profil</li>
      </NavLink>
      <NavLink to="/vins/favoris" className="link">
        <li>Ma cave</li>
      </NavLink>
      <NavLink to="/vins/selection" className="link">
        <li>Ma sélection</li>
      </NavLink>
      <NavLink to="/vins" className="link">
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

function AdminDropdownMenu() {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    localStorage.clear();
    setUser(undefined);
  };

  return (
    <ul className="dropdownMenu">
      <NavLink to="/admin/utilisateur/" className="link">
        <li>Utilisateurs</li>
      </NavLink>
      <NavLink to="/admin/vin" className="link">
        <li>Vins</li>
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
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleMenu();
    }
  };
  const { user } = useContext(UserContext);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    const handleClick = (event) => {
      handleClickOutside(event);
    };
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="navBar">
      <ul className="navLinks">
        <li>
          <NavLink to="/lexique" className="link">
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
          ref={menuRef}
        >
          <p>{user && user.firstname}</p>
          <img src={icons9} alt="User Icon" />
          {isMenuOpen && !user.isAdmin && <DropdownMenu />}
          {isMenuOpen && user.isAdmin && <AdminDropdownMenu />}
        </div>
      )}
    </div>
  );
}

export default NavBar;
