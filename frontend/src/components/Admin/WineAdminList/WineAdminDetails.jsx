import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../Contexts/api";

function WineAdminDetails() {
  const { id } = useParams();
  const [wineDetailsData, setWineDetailsData] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // show popup pour supprimer le vin
  const [showDeleteMsg, setShowDeleteMsg] = useState(false);

  useEffect(() => {
    api
      .get(`http://localhost:8000/api/wines/${id}`)
      .then((response) => setWineDetailsData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  const updateWine = (data) => {
    // console.log(data);
    api
      .put(`http://localhost:8000/api/wines/${id}`, data)
      .then(() => {
        navigate("/modification/vin");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Affiche le message de confirmation de suppression
  const handleShowDeleteMsg = () => {
    setShowDeleteMsg(true);
  };

  // bouton "non"
  const handleCancelDelete = () => {
    setShowDeleteMsg(false);
  };

  // bouton "oui"
  const handleDelete = () => {
    if (showDeleteMsg) {
      api
        .delete(`http://localhost:8000/api/wines/${id}`)
        .then(() => {
          // Redirigez l'utilisateur après la suppression
          navigate("/suppression/vin");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      {/* popup pour supprimer le vin */}
      {showDeleteMsg && (
        <div className="popupWindow">
          <div className="confirmationDeleteMessage">
            <p>Êtes-vous sûr de vouloir supprimer?</p>
            <button className="isDelete" onClick={handleDelete} type="button">
              Oui
            </button>
            <button
              className="isNotDelete"
              onClick={handleCancelDelete}
              type="button"
            >
              Non
            </button>
          </div>
        </div>
      )}

      <div className="wineAdminDetailsWrapper ">
        {/* Tout le contenu qui doit être flouté */}
        <div
          className="returnButton"
          onClick={() => !showDeleteMsg && navigate(-1)}
          onKeyDown={() => !showDeleteMsg && navigate(-1)}
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

        <div className="wineFormMessage">
          <p>
            Utilisez le formulaire ci-dessous pour mettre à jour les détails du
            vin.
          </p>
          <p>
            Les modifications seront enregistrées lorsque vous appuyez sur
            'Valider'
          </p>
        </div>

        <div className="wineFormDetails">
          <div className="wineImage">
            <img src={wineDetailsData.image} alt="" />
          </div>
          <div className="wineModificationForm">
            {/* Formulaire pour modifier les détails du vin */}
            <form
              className="wineForm"
              onSubmit={handleSubmit((data) => updateWine(data))}
            >
              <div className="wineFormEditer">
                <div className="wineFormEditer_name">
                  <label htmlFor="nameInput"> Nom : </label>
                  <input
                    type="text"
                    className="wineInfoFormEditer_control"
                    defaultValue={wineDetailsData.name}
                    name="name"
                    {...register("name", {
                      required: true,
                      maxLength: {
                        value: 20,
                        message: "Ce champ est limité à 20 caractères",
                      },
                      pattern: {
                        value: /^[A-Za-zÀ-ÿ ]+$/i,
                        message: "Caractères alphabétiques uniquement",
                      },
                    })}
                  />
                  {errors.name && (
                    <span className="ContactForm_error">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="wineFormEditer_domain">
                  <label htmlFor="domainInput"> Domaine : </label>
                  <input
                    type="text"
                    className="wineInfoFormEditer_control"
                    defaultValue={wineDetailsData.domain}
                    name="domain"
                    {...register("domain", {
                      required: true,
                      maxLength: {
                        value: 20,
                        message: "Ce champ est limité à 20 caractères",
                      },
                      pattern: {
                        value: /^[A-Za-zÀ-ÿ ]+$/i,
                        message: "Caractères alphabétiques uniquement",
                      },
                    })}
                  />
                  {errors.domain && (
                    <span className="ContactForm_error">
                      {errors.domain.message}
                    </span>
                  )}
                </div>

                <div className="wineFormEditer_region">
                  <label htmlFor="regionInput"> Région : </label>
                  <input
                    type="text"
                    className="wineInfoFormEditer_control"
                    defaultValue={wineDetailsData.region}
                    name="region"
                    {...register("region", {
                      required: true,
                      maxLength: {
                        value: 20,
                        message: "Ce champ est limité à 20 caractères",
                      },
                      pattern: {
                        value: /^[A-Za-zÀ-ÿ ]+$/i,
                        message: "Caractères alphabétiques uniquement",
                      },
                    })}
                  />
                  {errors.region && (
                    <span className="ContactForm_error">
                      {errors.region.message}
                    </span>
                  )}
                </div>

                <div className="wineFormEditer_year">
                  <label htmlFor="yearInput"> Année : </label>
                  <input
                    type="text"
                    className="wineInfoFormEditer_control"
                    defaultValue={wineDetailsData.year}
                    name="year"
                    {...register("year", {
                      required: true,

                      maxLength: {
                        value: 4,
                        message: "Ce champ est limité à 4 caractères",
                      },
                      pattern: {
                        value: /^[0-9]{4}$/,
                        message: "L'année doit être un nombre à 4 chiffres",
                      },
                    })}
                  />
                  {errors.year && (
                    <span className="ContactForm_error">
                      {errors.year.message}
                    </span>
                  )}
                </div>

                <div className="wineFormEditer_grape">
                  <label htmlFor="grapeInput"> Cépage : </label>
                  <input
                    type="text"
                    className="wineInfoFormEditer_control"
                    defaultValue={wineDetailsData.grape}
                    name="grape"
                    {...register("grape", {
                      required: true,
                      maxLength: {
                        value: 20,
                        message: "Ce champ est limité à 20 caractères",
                      },
                      pattern: {
                        value: /^[A-Za-zÀ-ÿ ]+$/i,
                        message: "Caractères alphabétiques uniquement",
                      },
                    })}
                  />
                  {errors.grape && (
                    <span className="ContactForm_error">
                      {errors.grape.message}
                    </span>
                  )}
                </div>

                <div className="wineFormEditer_alcohol_content">
                  <label htmlFor="alcohol_contentInput">
                    Teneur en alcool :
                  </label>
                  <input
                    type="text"
                    className="wineInfoFormEditer_control"
                    defaultValue={wineDetailsData.alcohol_content}
                    name="alcohol_content"
                    {...register("alcohol_content", {
                      required: true,
                      maxLength: {
                        value: 6,
                        message: "Ce champ est limité à 6 caractères",
                      },
                      pattern: {
                        value:
                          /^(8(\.[0-9]+)?|9(\.[0-9]*)?|1[0-4](\.[0-9]*)?|15(\.0*)?)$/,
                        message: "Le taux d'alcool doit être entre 8 et 15",
                      },
                    })}
                  />
                  {errors.alcohol_content && (
                    <span className="ContactForm_error">
                      {errors.alcohol_content.message}
                    </span>
                  )}
                  %
                </div>
              </div>

              <button
                className="wineForm_button"
                type="submit"
                disabled={showDeleteMsg}
              >
                modifier
              </button>
            </form>
            <button
              className="deleteButton"
              type="button"
              onClick={() => !showDeleteMsg && handleShowDeleteMsg()}
              disabled={showDeleteMsg}
            >
              supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineAdminDetails;
