import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import ModificationButton from "./ModificationButton";
import UserContext from "../../../Contexts/UserContext";

function WineCard({ name, image, domain, id, note }) {
  const { user } = useContext(UserContext);
  // console.log(user);

  return (
    <div className="wineCardWrapper">
      {/* if the user isn't admin, then show the favorite button  */}
      {!user.isAdmin && (
        <div className="favoriteButton">
          <FavoriteButton wineId={id} />
        </div>
      )}
      {/* if the user admin, then show the modification button  */}
      {user.isAdmin === 1 && (
        <div className="modificationButton">
          <ModificationButton />
        </div>
      )}
      <NavLink to={`/vins/detail/${id}`} state={{ wineNote: note }}>
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

WineCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  note: PropTypes.number.isRequired,
};

export default WineCard;
