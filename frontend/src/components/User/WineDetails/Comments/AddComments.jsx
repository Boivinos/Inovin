import React from "react";
import PropTypes from "prop-types";

function AddComments({ commentValue, setCommentValue, emptyCommentError }) {
  return (
    <>
      <p>Ajouter un commentaire :</p>
      <input
        type="text"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
      />
      {emptyCommentError && (
        <p className="emptyComError">
          Tu ne peux pas laisser de commentaire vide.
        </p>
      )}
    </>
  );
}

AddComments.propTypes = {
  commentValue: PropTypes.string.isRequired,
  setCommentValue: PropTypes.func.isRequired,
  emptyCommentError: PropTypes.bool.isRequired,
};

export default AddComments;
