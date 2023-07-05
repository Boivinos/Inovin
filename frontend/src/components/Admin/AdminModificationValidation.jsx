import React from "react";
// import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function AdminModificationValidation() {
  const location = useLocation();
  const { message } = location.state;
  return (
    <>
      <div className="validationMessage_returnButtonWrapper">
        <img src="https://i.ibb.co/PchSHGr/60793.png" alt="" />
        <p>Retour</p>
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
