import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useForm } from "react-hook-form";

import api from "../../../Contexts/api";

function UserAdminDetails() {
  const { id } = useParams();
  const [data, setData] = useState(undefined);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // Gestion de la visibilité ou non du mot de passe
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // axios d'affichage des données détaillées d'un utilisateur :
  useEffect(() => {
    api
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
    api
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`)
      .then(() => {
        // redirection vers la page de confirmation (route à modifier)
        navigate("/useradminlist");
      })
      .catch((error) => console.error(error.message));
  };

  const handleUpdate = (formData) => {
    api
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`, formData)
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
        <form
          className="userAdminDetail_dataWrapper"
          onSubmit={handleSubmit((formData) => handleUpdate(formData))}
        >
          <ul>
            {" "}
            <li>
              Nom :
              <input
                type="text"
                className="userAdminDetail_input"
                {...register("lastname", { required: true })}
                style={{ color: "black" }}
                defaultValue={data[0].lastname}
              />
            </li>
            <li>
              Prénom :
              <input
                type="text"
                className="userAdminDetail_input"
                name="firstname"
                defaultValue={data[0].firstname}
                {...register("firstname", { required: true })}
              />
            </li>
            <li> Date de naissance : {formatBirthDate(data[0].born)}</li>
            <li>
              Mot de passe{" "}
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
                <input
                  id="password-input"
                  type="text"
                  name="password"
                  defaultValue={data[0].hashedPassword}
                  {...register("password", { required: true })}
                />
              ) : (
                <input
                  id="password-input"
                  type="password"
                  name="password"
                  defaultValue={data[0].hashedPassword}
                  {...register("password", { required: true })}
                />
              )}
            </li>
            <li>
              {" "}
              Adresse mail :
              <input
                type="text"
                className="userAdminDetail_input"
                name="emailAdress"
                defaultValue={data[0].email}
                {...register("emailAdress", { required: true })}
              />
            </li>
            <li> Vigneron : {data[0].isvigneron}</li>
          </ul>

          <div className="userAdminDetail_button">
            <button type="submit"> Enregistrer</button>
            <button type="button" onClick={handleDelete}>
              {" "}
              Supprimer
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default UserAdminDetails;
