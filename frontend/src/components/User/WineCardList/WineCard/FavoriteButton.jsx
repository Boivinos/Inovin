import React, { useState, useEffect, useContext } from "react";
import { FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import API from "../../../Contexts/api";
import UserContext from "../../../Contexts/UserContext";

function FavoriteButton({ wineId }) {
  const { user } = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState();
  const temp = {
    user_id: user?.id,
    wine_id: wineId,
  };

  useEffect(() => {
    API.post(`http://localhost:8000/api/wines/checkfavorite`, temp)
      .then((response) => {
        if (response.data === "This wine is favorite") {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFavoriteClick = () => {
    if (!isFavorite) {
      API.post(
        `http://localhost:8000/api/wines/${temp.wine_id}/favorites`,
        temp
      ).catch((error) => {
        console.error(error);
      });
      setIsFavorite(true);
    } else {
      API.delete(`http://localhost:8000/api/wines/${temp.wine_id}/favorites`, {
        data: temp,
      }).catch((error) => {
        console.error(error);
      });
      setIsFavorite(false);
    }
  };
  return (
    <button
      className="heart-button"
      onClick={handleFavoriteClick}
      type="button"
    >
      {isFavorite ? <FaHeart color="#e3bc2e" /> : <FaHeart color="#b5abab" />}
    </button>
  );
}
FavoriteButton.propTypes = {
  wineId: PropTypes.number.isRequired,
};

export default FavoriteButton;
