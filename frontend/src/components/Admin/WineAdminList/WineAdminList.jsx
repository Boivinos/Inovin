import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import WineCard from "../../User/WineCardList/WineCard/WineCard";
import api from "../../Contexts/api";

function WineAdminList() {
  // récupréation des vins enregistrés dans la BDD
  const [wineData, setWineData] = useState();
  useEffect(() => {
    api
      .get(`http://localhost:8000/api/wines`)
      .then((response) => setWineData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  // navigation vers les autres pages d'administration via les boutons
  const navigateToAdminUsersPage = useNavigate();
  const navigateToAdminWinesPage = useNavigate();
  const navigateToAddWinePage = useNavigate();

  const handleUsersButtonClick = () => {
    navigateToAdminUsersPage("/admin/utilisateur");
  };

  const handleWinesButtonClick = () => {
    navigateToAdminWinesPage("/admin/vin");
  };

  const handleAddWineClick = () => {
    navigateToAddWinePage("/admin/vin/ajout");
  };

  return (
    <div className="wineAdminList">
      <h1 id="wineAdminList_title">
        Gestion des utilisateurs et des vins enregistrés
      </h1>
      <div className="wineAdminList_buttonWrapper">
        <button
          id="wineAdminList_usersButton"
          type="button"
          onClick={handleUsersButtonClick}
        >
          Utilisateurs
        </button>
        <button
          id="wineAdminList_winesButton"
          type="button"
          onClick={handleWinesButtonClick}
        >
          Vins
        </button>
      </div>

      <button id="addWineButton" type="button" onClick={handleAddWineClick}>
        ajouter un vin
      </button>

      <div className="wineAdminList_winecardlist">
        {wineData &&
          wineData.map((wine) => {
            return (
              <WineCard
                name={wine.name}
                image={wine.image}
                domain={wine.domain}
                key={wine.id}
                id={wine.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default WineAdminList;
