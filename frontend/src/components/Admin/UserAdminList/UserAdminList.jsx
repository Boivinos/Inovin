import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Contexts/api";
import UserCard from "./UserCard";

function UserAdminList() {
  // récupération des utilisateurs enregistrés dans la BDD
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  // navigation vers les autres pages d'administration via les boutons
  const navigateToAdminWinesPage = useNavigate();
  const navigateToUserAdminDetailsPage = useNavigate();
  const navigatetoAddNewUserPage = useNavigate();

  const handleWinesButtonClick = () => {
    navigateToAdminWinesPage("/wineadminlist");
  };
  const handleUsersDetailsButtonClick = () => {
    navigateToUserAdminDetailsPage("/useradmindetails/:id");
  };
  const handleAddNewUserButtonClick = () => {
    navigatetoAddNewUserPage("/addnewuser");
  };

  return (
    <div className="userAdminList">
      <h1 id="userAdminList_title">Liste des utilisateurs </h1>
      <div className="userAdminList_buttonWrapper">
        <button id="userAdminList_usersButton" type="button">
          Utilisateurs
        </button>
        <button
          id="userAdminList_winesButton"
          type="button"
          onClick={handleWinesButtonClick}
        >
          Vins
        </button>
      </div>
      <div id="userAdminList_buttonWrapper2">
        <button className="userAdminList_button" type="button">
          Rechercher
        </button>
        <button
          className="userAdminList_button"
          type="button"
          onClick={handleAddNewUserButtonClick}
        >
          Ajouter
        </button>
      </div>

      {userData &&
        userData.map((user) => {
          return (
            <UserCard
              key={user.id}
              firstname={user.firstname}
              lastname={user.lastname}
              id={user.id}
              onClick={handleUsersDetailsButtonClick}
            />
          );
        })}
    </div>
  );
}

export default UserAdminList;
