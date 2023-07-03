import React from "react";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <div className="NotFound">
      <div className="NotFoundImg" />
      <div className="NoutFoundTextButtonWrapper">
        <p>
          Qui suis-je ? <br /> Où vais-je ?
        </p>
        <NavLink to="/">
          <button type="button">Retour à l'accueil</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Error404;
