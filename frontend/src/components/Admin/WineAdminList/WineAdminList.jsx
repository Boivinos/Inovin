import React, { useState, useEffect } from "react";
import axios from "axios";
import WineCard from "../../User/WineCardList/WineCard/WineCard";

function WineAdminList() {
  const [wineData, setWineData] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/wines`)
      .then((response) => setWineData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <>
      <div className="admin-profile-title">
        <p className="admin-profile-title_text">
          Gestion des utilisateurs et des vins enregistrés
        </p>
      </div>
      <div className="admin-winecard-list">
        {wineData &&
          wineData.map((wine) => {
            return <WineCard name={wine.name} />;
          })}
      </div>
    </>
  );
}

export default WineAdminList;
