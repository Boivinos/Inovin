import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../Contexts/api";

function AddNewWine() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const inputRef = useRef();

  const addWine = (data) => {
    // pour que l'image puisse arriver dans le back en post il faut utiliser formData
    const formData = new FormData();
    formData.append("alcohol_content", data.alcohol_content);
    formData.append("domain", data.domain);
    formData.append("grape", data.grape);
    formData.append("name", data.name);
    formData.append("region", data.region);
    formData.append("year", data.year);
    formData.append("image", data.image[0]);

    api
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/wines`, formData)

      .then(() => {
        navigate("/ajout/vin");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="addWineWrapper">
      <div
        className="returnButton"
        onClick={() => navigate(-1)}
        onKeyDown={() => navigate(-1)}
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

      <div className="addWineMessage">
        <p>
          Utilisez le formulaire ci-dessous pour ajouter un nouveau vin à notre
          collection.
        </p>
        <p>
          Les informations seront enregistrées lorsque vous appuyez sur
          'Ajouter'.
        </p>
      </div>
      <div>
        <hr className="addwinSeperetor" />
      </div>

      <div className="addWineFormContent">
        <form
          className="addWineForm"
          onSubmit={handleSubmit((data) => addWine(data))}
        >
          <div className="addWineForm_name">
            <label htmlFor="nameInput"> Nom : </label>
            <input
              type="text"
              className="addWineForm_control"
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
              <span className="error_newWine">{errors.name.message}</span>
            )}
          </div>

          <div className="addWineForm_domain">
            <label htmlFor="domainInput"> Domaine : </label>
            <input
              type="text"
              className="addWineForm_control"
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
              <span className="error_newWine">{errors.domain.message}</span>
            )}
          </div>

          <div className="addWineForm_region">
            <label htmlFor="regionInput"> Région : </label>
            <input
              type="text"
              className="addWineForm_control"
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
              <span className="error_newWine">{errors.region.message}</span>
            )}
          </div>

          <div className="addWineForm_year">
            <label htmlFor="yearInput"> Année : </label>
            <input
              type="text"
              className="addWineForm_control"
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
              <span className="error_newWine">{errors.year.message}</span>
            )}
          </div>

          <div className="addWineForm_grape">
            <label htmlFor="grapeInput"> Cépage : </label>
            <input
              type="text"
              className="addWineForm_control"
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
              <span className="error_newWine">{errors.grape.message}</span>
            )}
          </div>

          <div className="addWineForm_alcohol_content">
            <label htmlFor="alcohol_contentInput"> Teneur en alcool : </label>
            <input
              type="text"
              className="addWineForm_control"
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
            />{" "}
            %
            {errors.alcohol_content && (
              <span className="error_newWine">
                {errors.alcohol_content.message}
              </span>
            )}
          </div>

          <div className="addWineForm_image">
            {/* upload file  */}
            <input
              type="file"
              name="image"
              ref={inputRef}
              {...register("image", {
                required: true,
              })}
            />
          </div>

          <button className="addWineForm_button" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewWine;
