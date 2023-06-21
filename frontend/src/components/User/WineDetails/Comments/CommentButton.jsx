import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../Contexts/UserContext";

function CommentButton({
  setIsEditing,
  isEditing,
  commentValue,
  setCommentValue,
  commentsData,
  setCommentsData,
}) {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const handleComment = () => {
    const body = {
      wine_id: Number(id),
      user_id: user.id,
      comment_content: commentValue,
    };

    if (isEditing) {
      axios
        .post(`http://localhost:8000/api/wines/${id}/comments`, body)
        .then((response) => {
          setCommentsData([response.data, ...commentsData]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setIsEditing(!isEditing);
    setCommentValue("");
  };

  return (
    <button type="submit" onClick={handleComment}>
      {isEditing ? "Valider mon commentaire" : "Ajouter un commentaire"}
    </button>
  );
}

CommentButton.propTypes = {
  setIsEditing: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  commentValue: PropTypes.string.isRequired,
  setCommentValue: PropTypes.func.isRequired,
  commentsData: PropTypes.shape([]).isRequired,
  setCommentsData: PropTypes.func.isRequired,
};

export default CommentButton;
