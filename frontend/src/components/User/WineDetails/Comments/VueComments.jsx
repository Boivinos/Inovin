import React from "react";
import PropTypes from "prop-types";

function VueComments({ commentsData }) {
  const formatDate = (date) => {
    return date.split("").slice(0, 10).join("").split("-").reverse().join("/");
  };

  return (
    <>
      <p className="commentSectionTitle">Commentaires :</p>
      {commentsData.map((com) => {
        return (
          <div key={Math.random()}>
            <p className="commentHeader">{`${com.firstname} ${
              com.lastname
            } le ${formatDate(com.comment_date)}: `}</p>
            <p className="commentContent">{com.comment_content}</p>
          </div>
        );
      })}
    </>
  );
}

VueComments.propTypes = {
  commentsData: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.any,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string
    )
  ).isRequired,
};

export default VueComments;
