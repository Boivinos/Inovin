import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import inovinPicture from "../../assets/inovinPicture_desktop.png";

function AdminModificationValidation({ message, urlRetour }) {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(urlRetour);
  };

  return (
    <>
      <div className="wineAdminDetailsWrapper">
        <div
          className="returnButton"
          onClick={handleReturn}
          onKeyDown={handleReturn}
          role="button"
          tabIndex={0}
        >
          <img
            className="returnButton_image"
            src="https://i.ibb.co/PchSHGr/60793.png"
            alt=""
          />
          <p>Retour</p>
        </div>
      </div>
      <div className="validationMessage_text">
        <p>{message}</p>
      </div>
      <div className="logo_msg">
        <img src={inovinPicture} alt="logo" />
      </div>
    </>
  );
}

AdminModificationValidation.propTypes = {
  message: PropTypes.string.isRequired,
  urlRetour: PropTypes.string.isRequired,
};

export default AdminModificationValidation;
