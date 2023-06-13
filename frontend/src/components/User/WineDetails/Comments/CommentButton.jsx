import React from "react";
import PropTypes from "prop-types";

function CommentButton({
  setIsEditing,
  isEditing,
  commentValue,
  setCommentValue,
}) {
  const handleComment = () => {
    if (isEditing) {
      console.warn(commentValue);
      setCommentValue("");
    }
    setIsEditing(!isEditing);
  };

  return (
    <button type="button" onClick={handleComment}>
      {isEditing ? "Valider mon commentaire" : "Ajouter un commentaire"}
    </button>
  );
}

CommentButton.propTypes = {
  setIsEditing: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  commentValue: PropTypes.string.isRequired,
  setCommentValue: PropTypes.func.isRequired,
};

export default CommentButton;
