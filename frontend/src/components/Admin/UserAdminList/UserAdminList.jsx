import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

function UserAdminList() {
  // récupréation des utilisateurs enregistrés dans la BDD
  const [userData, setUserData] = useState(undefined);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  // navigation vers les autres pages d'administration via les boutons
  const navigateToAdminWinesPage = useNavigate();
  const navigateToAdminAddUsersPage = useNavigate();

  const handleUsersButtonClick = () => {
    navigateToAdminWinesPage("/ADRESSE A DEFINIR");
  };

  const handleAddUsersButtonClick = () => {
    navigateToAdminAddUsersPage("/ADRESSE A DEFINIR");
  };

  return (
    <div className="userAdminList">
      <p id="userAdminList_title">Liste des utilisateurs </p>
      <div className="userAdminList_buttonWrapper">
        <button
          id="userAdminList_usersButton"
          type="button"
          onClick={handleUsersButtonClick}
        >
          Utilisateurs
        </button>
        <button id="userAdminList_winesButton" type="button">
          Vins
        </button>
      </div>
      <div className="userAdminList_buttonWrapper">
        <button className="userAdminList_button" type="button">
          Rechercher
        </button>
        <button
          className="userAdminList_button"
          type="button"
          onClick={handleAddUsersButtonClick}
        >
          Ajouter
        </button>
      </div>

      {userData &&
        userData.map((user) => {
          return (
            <UserCard
              firstname={user.firstname}
              lastname={user.lastname}
              id={user.id}
            />
          );
        })}
    </div>
  );
}

export default UserAdminList;
