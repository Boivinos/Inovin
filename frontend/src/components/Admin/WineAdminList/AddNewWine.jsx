import React from "react";
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

  const addWine = (data) => {
    api
      .post(`http://localhost:8000/api/wines`, data)
      .then(() => {
        console.warn(data);
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
              <span className="ContactForm_error">{errors.name.message}</span>
            )}
          </div>

          <div className="addWineForm_image">
            <label htmlFor="nameInput"> Image: </label>
            <input
              type="text"
              className="addWineForm_control"
              name="image"
              {...register("image", {
                required: true,
                pattern: {
                  value:
                    /^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?.(jpg|png|gif)$/i,
                  message:
                    "Entrez une URL valide qui pointe vers une image (doit commencer par http:// ou https:// et se terminer par .jpg, .png ou .gif)",
                },
              })}
            />
            {errors.image && (
              <span className="ContactForm_error">{errors.image.message}</span>
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
              <span className="ContactForm_error">{errors.domain.message}</span>
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
              <span className="ContactForm_error">{errors.region.message}</span>
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
              <span className="ContactForm_error">{errors.year.message}</span>
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
              <span className="ContactForm_error">{errors.grape.message}</span>
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
                  value: /^(8\.[5-9]|9\.[0-9]|1[0-4]\.[0-9]|15)$/,
                  message: "Le degré d'alcool doit être entre 8.5 et 15",
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
          <button className="addWineForm_button" type="submit">
            ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewWine;
