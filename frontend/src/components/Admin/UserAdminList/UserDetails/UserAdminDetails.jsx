import React, { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useForm } from "react-hook-form";

import api from "../../../Contexts/api";

function UserAdminDetails() {
  const { id } = useParams();
  const [data, setData] = useState(undefined);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

        navigate("/admin/utilisateur");

        navigate("/suppression/utilisateur");
      })
      .catch((error) => console.error(error.message));
  };

  const handleUpdate = (formData) => {
    api
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`, formData)
      .then(() => {
        // redirection vers la page de confirmation (route à modifier)

        navigate("/admin/utilisateur/");

        navigate("/modification/utilisateur");
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <>
      <NavLink to="/admin/utilisateur">
        <div className="validationMessage_returnButtonWrapper">
          <img src="https://i.ibb.co/PchSHGr/60793.png" alt="" />
          <p>Retour</p>
        </div>
      </NavLink>
      <div className="userAdminDetail">
        <h1 id="userAdminDetail_title"> Modification de l'utilisateur</h1>
        {data && (
          <form
            className="userAdminDetail_dataWrapper"
            onSubmit={handleSubmit((formData) => handleUpdate(formData))}
          >
            <ul>
              {" "}
              <li>
                Prénom :
                <input
                  type="text"
                  className="userAdminDetail_input"
                  name="firstname"
                  defaultValue={data[0].firstname}
                  {...register("firstname", {
                    required: "Ce champ est requis",
                  })}
                />
                {/*  gestion des erreurs de saisie adminstrateur avant mise à jour */}
                {errors.firstname && (
                  <span className="userAdminDetail_error">
                    {errors.firstname.message}
                  </span>
                )}
              </li>
              <li>
                Nom :
                <input
                  type="text"
                  className="userAdminDetail_input"
                  {...register("lastname", { required: "Ce champ est requis" })}
                  style={{ color: "black" }}
                  defaultValue={data[0].lastname}
                />
                {/*  gestion des erreurs de saisie adminstrateur avant mise à jour */}
                {errors.lastname && (
                  <span className="userAdminDetail_error">
                    {errors.lastname.message}
                  </span>
                )}
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
                    {...register("password", {
                      required: "Ce champs est requis",
                    })}
                  />
                ) : (
                  <input
                    id="password-input"
                    type="password"
                    name="password"
                    defaultValue={data[0].hashedPassword}
                    {...register("password", {
                      required: "Ce champ est requis",
                    })}
                  />
                )}
                {errors.password && (
                  <span className="userAdminDetail_error">
                    {errors.password.message}
                  </span>
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
                  {...register("emailAdress", {
                    required: "Ce champ est requis",
                    pattern: {
                      value:
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                      message: "Merci de renseigner un email valide",
                    },
                    /* gestion des erreurs de saisie de nom de domaine */
                    validate: {
                      validExtension: (value) => {
                        const validExtensions = ["com", "net", "org", "fr"];
                        const domain = value.split(".").pop();
                        if (!validExtensions.includes(domain.toLowerCase())) {
                          return "Extension de domaine non valide";
                        }
                        return true;
                      },
                    },
                  })}
                />
                {/*  gestion des erreurs de saisie adminstrateur avant mise à jour */}
                {errors.emailAdress && (
                  <span className="userAdminDetail_error">
                    {errors.emailAdress.message}
                  </span>
                )}
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
    </>
  );
}

export default UserAdminDetails;
