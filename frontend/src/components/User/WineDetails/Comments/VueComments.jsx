import React from "react";
import PropTypes from "prop-types";

function VueComments({ commentsData }) {
  const formatDate = (date) => {
    return date.split("").slice(0, 10).join("").split("-").reverse().join("/");
  };

  return (
    <>
      <p>Commentaires :</p>
      {commentsData.map((com) => {
        return (
          <>
            <p>{`${com.firstname} ${com.lastname} le ${formatDate(
              com.comment_date
            )} :`}</p>
            <p>{com.comment_content}</p>
          </>
        );
      })}
    </>
  );
}

VueComments.propTypes = {
  commentsData: PropTypes.shape([]).isRequired,
};

export default VueComments;
