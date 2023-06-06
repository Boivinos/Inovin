import React from "react";
import PropTypes from "prop-types";

function WineCard({ name, image, domain }) {
  return (
    <div className="wineCard">
      <div className="imgBox">
        <img src={image} alt="" />
      </div>
      <p>{name}</p>
      <p>{domain}</p>
    </div>
  );
}

WineCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
};

export default WineCard;
