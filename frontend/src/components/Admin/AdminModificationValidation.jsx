import React from "react";
// import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

function AdminModificationValidation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { message } = location.state;
  return (
    <>
      <div className="wineAdminDetailsWrapper">
        <div
          className="returnButton"
          onClick={() => navigate(-1)}
          onKeyDown={() => navigate(-1)}
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
    </>
  );
}

// AdminModificationValidation.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default AdminModificationValidation;
