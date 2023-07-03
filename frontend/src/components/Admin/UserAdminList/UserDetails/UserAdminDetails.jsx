import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import axios from "axios";

function UserAdminDetails() {
  const { id } = useParams();
  const [data, setData] = useState(undefined);
  const navigate = useNavigate();

  // Gestion de la visibilité ou non du mot de passe
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // axios d'affichage des données détaillées d'un utilisateur :
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  // formatage de la date de naissance pour le front
  const formatBirthDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR");
  };

  // axios de suppression d'un utilisateur :
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`)
      .then(() => {
        // redirection vers la page de confirmation (route à modifier)
        navigate("/useradminlist");
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="userAdminDetail">
      <h1 id="userAdminDetail_title"> Gestion des utilisateurs enregistrés</h1>
      {data && (
        <div className="userAdminDetail_dataWrapper">
          <ul>
            {" "}
            <li>ID de l'Utilisateur : {data[0].id}</li>
            <li> Nom : {data[0].lastname}</li>
            <li> Prénom : {data[0].firstname}</li>
            <li> Date de naissance : {formatBirthDate(data[0].born)}</li>
            <li>
              Mot de passe
              <button
                onClick={togglePasswordVisibility}
                type="button"
                id="passwordVisibility"
              >
                {showPassword ? (
                  <MdVisibilityOff size={17} />
                ) : (
                  <MdVisibility size={17} />
                )}
              </button>
              :
              {showPassword ? (
                <span id="password-showed">{data[0].hashedPassword}</span>
              ) : (
                <input
                  id="password-input"
                  type="password"
                  value={data[0].hashedPassword}
                  readOnly
                />
              )}
            </li>
            <li> Adresse mail : {data[0].email}</li>
            <li> Vigneron : {data[0].isvigneron}</li>
            <li> Domaine : {data[0].wine_domain}</li>
            <li> Description du domaine : {data[0].desc_domain}</li>
            <li> Photo du domaine : {data[0].picture_domain}</li>
          </ul>
        </div>
      )}

      <div className="userAdminDetail_button">
        <button type="button"> Enregistrer</button>
        <button type="button" onClick={handleDelete}>
          {" "}
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default UserAdminDetails;