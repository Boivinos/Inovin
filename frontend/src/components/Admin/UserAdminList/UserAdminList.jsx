import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuGrape } from "react-icons/lu";
import { BiUser } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import api from "../../Contexts/api";
import UserCard from "./UserCard";
import SearchInput from "../../User/WineCardList/ListButtons/SearchInput";

function UserAdminList() {
  const [userData, setUserData] = useState([]);
  // states nécessaires au fonctionnement de la barre de recherche
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // récupération des utilisateurs enregistrés dans la BDD
  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  // useEffect relatif à la barre de recherche
  useEffect(() => {
    if (searchQuery !== "") {
      const searchRegex = new RegExp(searchQuery, "i"); // i = recherche insensible à la casse
      const filteredUsers = userData.filter((user) =>
        searchRegex.test(
          `${user.firstname} ${user.lastname} || ${user.lastname} ${user.firstname}`
        )
      );
      setSearchResults(filteredUsers);
    } else {
      setSearchResults(userData);
    }
  }, [searchQuery, userData]);

  // navigation vers les autres pages d'administration via les boutons
  const navigateToAdminWinesPage = useNavigate();
  const navigateToUserAdminDetailsPage = useNavigate();
  const navigatetoAddNewUserPage = useNavigate();

  const handleWinesButtonClick = () => {
    navigateToAdminWinesPage("/admin/vin");
  };

  const handleUsersDetailsButtonClick = (id) => {
    navigateToUserAdminDetailsPage(`/admin/utilisateur/${id}`);
  };

  const handleAddNewUserButtonClick = () => {
    navigatetoAddNewUserPage("/admin/utilisateur/ajout");
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="userAdminList">
      <h1 id="userAdminList_title">
        Gestion des utilisateurs et des vins enregistrés
      </h1>
      <div className="userAdminList_buttonWrapper">
        <button id="userAdminList_usersButton" type="button">
          <BiUser className="admin_icons" size={17} />
          Utilisateurs
        </button>
        <button
          id="userAdminList_winesButton"
          type="button"
          onClick={handleWinesButtonClick}
        >
          <LuGrape className="admin_icons" size={15} />
          Vins
        </button>
      </div>
      <div id="userAdminList_buttonWrapper2">
        <SearchInput
          id="userAdminList_searchInput"
          search={searchQuery}
          setSearch={setSearchQuery}
          isSearching={searchQuery.length > 0}
          onChange={handleSearchInputChange}
        />

        <button
          className="userAdminList_button"
          type="button"
          onClick={handleAddNewUserButtonClick}
        >
          <AiOutlinePlus className="admin_icons" size={15} />
          Ajouter
        </button>
      </div>

      {searchResults.map((user) => (
        <UserCard
          key={user.id}
          firstname={user.firstname}
          lastname={user.lastname}
          id={user.id}
          onClick={() => handleUsersDetailsButtonClick(user.id)}
        />
      ))}
    </div>
  );
}

export default UserAdminList;
