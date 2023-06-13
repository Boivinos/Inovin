import React from "react";
import PropTypes from "prop-types";

function AddComments({ commentValue, setCommentValue }) {
  return (
    <>
      <p>Ajouter un commentaire :</p>
      <input
        type="text"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
      />
    </>
  );
}

AddComments.propTypes = {
  commentValue: PropTypes.string.isRequired,
  setCommentValue: PropTypes.func.isRequired,
};

export default AddComments;
