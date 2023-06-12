import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function WineCard({ name, image, domain, id }) {
  return (
    <NavLink to={`/wineDetails/${id}`}>
      <div className="wineCard">
        <div className="imgBox">
          <img src={image} alt="" />
        </div>
        <p>{name}</p>
        <p>{domain}</p>
      </div>
    </NavLink>
  );
}

WineCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default WineCard;
