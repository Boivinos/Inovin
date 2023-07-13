import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuGrape } from "react-icons/lu";
import { BiUser } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import WineCard from "../../User/WineCardList/WineCard/WineCard";
import api from "../../Contexts/api";
import SearchInput from "../../User/WineCardList/ListButtons/SearchInput";

function WineAdminList() {
  const [wineData, setWineData] = useState();

  // states nécessaires au fonctionnement de la barre de recherche
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // récupréation des vins enregistrés dans la BDD
  useEffect(() => {
    api
      .get(`http://localhost:8000/api/wines`)
      .then((response) => setWineData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  // useEffect relatif à la barre de recherche

  // wineData.map((wine)=>{wine.name}).filter(wine)=>setSearchTerm

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

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  // console.log(searchTerm);

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
          <BiUser className="admin_icons" size={17} />
          Utilisateurs
        </button>
        <button
          id="wineAdminList_winesButton"
          type="button"
          onClick={handleWinesButtonClick}
        >
          <LuGrape className="admin_icons" size={15} />
          Vins
        </button>
      </div>
      <div className="serchContent">
        <SearchInput
          id="wineAdmin_searchInput"
          search={searchTerm}
          setSearch={setSearchTerm}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          onChange={handleSearchTerm}
        />
      </div>
      <button id="addWineButton" type="button" onClick={handleAddWineClick}>
        <AiOutlinePlus className="admin_icons" size={15} />
        Ajouter un vin
      </button>

      <div className="wineAdminList_winecardlist">
        {wineData &&
          wineData
            .filter((wine) =>
              searchTerm !== ""
                ? wine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  wine.domain.toLowerCase().includes(searchTerm.toLowerCase())
                : true
            )
            .map((wine) => {
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
