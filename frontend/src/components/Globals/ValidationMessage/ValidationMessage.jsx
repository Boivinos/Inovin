import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import InovinPictureDesktop from "../../../assets/inovinPicture_desktop.png";

function ValidationMessage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstname = decodeURIComponent(queryParams.get("firstname"));

  return (
    <>
      <NavLink to="/contact">
        <div className="validationMessage_returnButtonWrapper">
          <img src="https://i.ibb.co/PchSHGr/60793.png" alt="" />
          <p>Retour</p>
        </div>
      </NavLink>

      <div className="validationMessage">
        <img
          className="validationMessage_inovinPicture"
          src={InovinPictureDesktop}
          alt="Logo"
        />
        <div className="validationMessage_text">
          <p>Merci {firstname}!</p>
          <p id="validationMessage_confirmation">
            Ton message a bien été reçu par l'équipe d'Inovin.
          </p>
        </div>
      </div>
    </>
  );
}

export default ValidationMessage;
