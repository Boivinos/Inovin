import React from "react";

function UserAdminDetails() {
  return (
    <div className="userAdminDetail">
      <h1 id="userAdminList_title"> Gestion des utilisateurs enregistrés</h1>
      <div className="userAdminList_dataWrapper">
        <p> Utilisateur ID</p>
        <p> Nom : </p>
        <p> Prénom : </p>
        <p> Date de naissance : </p>
        <p> Mot de passe : </p>
        <p> Adresse mail : </p>
        <p> Vigneron : </p>
        <p> Description du domaine : </p>
      </div>
      <div>
        <button type="button"> Enregistrer</button>
        <button type="button"> Supprimer</button>
      </div>
    </div>
  );
}

export default UserAdminDetails;
