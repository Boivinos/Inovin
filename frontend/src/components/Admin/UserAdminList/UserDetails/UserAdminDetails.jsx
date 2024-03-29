import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineCheck, AiOutlineMinus } from "react-icons/ai";

import api from "../../../Contexts/api";

function UserAdminDetails() {
  const { id } = useParams();
  const [data, setData] = useState(undefined);
  // State relatif au pop-up de confirmation
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  // axios de suppression d'un utilisateur et gestion du pop-up :
  const confirmDelete = () => {
    setShowConfirmation(true);
  };

  const handleDelete = () => {
    api
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/users/${id}`)
      .then(() => {
        navigate("/admin/utilisateur");
        navigate("/suppression/utilisateur");
      })
      .catch((error) => console.error(error.message));

    setShowConfirmation(false);
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
      <div className={`${showConfirmation ? "userAdmin_overlay" : ""}`}>
        {/* Bouton de retour */}
        {!showConfirmation && (
          <div
            className="returnButton"
            onClick={() => !showConfirmation && navigate(-1)}
            onKeyDown={() => !showConfirmation && navigate(-1)}
            role="button"
            tabIndex={0}
          >
            <img
              className="returnButton_image"
              src="https://i.ibb.co/PchSHGr/60793.png"
              alt=""
            />
            <p>Retour</p>
          </div>
        )}

        {/* Formulaire de gestion des données utilisateur */}
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
                    {...register("lastname", {
                      required: "Ce champ est requis",
                    })}
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
              </ul>

              <div className="userAdminDetail_button">
                <button type="submit" disabled={showConfirmation}>
                  {" "}
                  <AiOutlineCheck
                    className="admin_icons"
                    value={{ size: "10px" }}
                  />
                  Enregistrer
                </button>
                <button
                  type="button"
                  onClick={confirmDelete}
                  disabled={showConfirmation}
                >
                  <AiOutlineMinus
                    className="admin_icons"
                    value={{ size: "10px" }}
                  />
                  Supprimer
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/*    code du pop-up de confirmation une fois affiché */}
      {showConfirmation && (
        <div className="confirmation-message">
          <p>Voulez-vous vraiment supprimer cet utilisateur ?</p>
          <button onClick={handleDelete} type="button">
            Oui
          </button>
          <button onClick={() => setShowConfirmation(false)} type="button">
            Non
          </button>
        </div>
      )}
    </>
  );
}

export default UserAdminDetails;
