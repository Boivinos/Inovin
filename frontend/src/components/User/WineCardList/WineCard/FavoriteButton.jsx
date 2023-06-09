import React, { useState } from "react";

import { FaHeart } from "react-icons/fa";

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
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

export default FavoriteButton;
