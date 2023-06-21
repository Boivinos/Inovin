import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function WineCard({ name, image, domain, id }) {
  return (
    <div className="wineCardWrapper">
      <div className="favoriteButton">
        <FavoriteButton wineId={id} />
      </div>
      <NavLink to={`/wineDetails/${id}`}>
        <div className="wineCard">
          <div className="imgBox">
            <img src={image} alt="" />
          </div>
          <div className="wineCardDescription">
            <p>{name}</p>
            <p>{domain}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
<div className="favoriteButton">
  <FavoriteButton />
</div>;

WineCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default WineCard;
