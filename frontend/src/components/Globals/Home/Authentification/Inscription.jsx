import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";

function Inscription() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.warn(data);
    navigate(isValid ? "/Quizz" : "#");
  };

  return (
    <div className="formulaire_inscription_page">
      <div className="inovin_picture" />
      <form className="form_inscription" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text_inscription">
          Inscris-toi pour découvrir ta sélection de vins personnalisée.
        </h3>

        <input
          className="input_inscription"
          placeholder="Prénom *"
          {...register("name", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-zÀ-ÿ ]+$/i,
          })}
        />
        {errors?.name?.type === "required" && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        {errors?.name?.type === "maxLength" && (
          <span className="form_inscription_error">
            Ce champ est limité à 20 caractères
          </span>
        )}
        {errors?.name?.type === "pattern" && (
          <span className="form_inscription_error">
            Caractères alphabétiques uniquement
          </span>
        )}

        <input
          className="input_inscription"
          placeholder="Nom *"
          {...register("firstname", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-zÀ-ÿ ]+$/i,
          })}
        />
        {errors?.firstname?.type === "required" && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        {errors?.firstname?.type === "maxLength" && (
          <span className="form_inscription_error">
            Ce champ est limité à 20 caractères
          </span>
        )}
        {errors?.firstname?.type === "pattern" && (
          <span className="form_inscription_error">
            Caractères alphabétiques uniquement
          </span>
        )}

        <input
          className="input_inscription"
          placeholder="Date de naissance * "
          type="date"
          id="email"
          name="datedenaissance"
          {...register("email", {
            required: true,
            pattern:
              /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
          })}
        />
        <input
          className="input_inscription"
          type="email"
          id="email"
          name="mail"
          placeholder="✉️  utilisateur@mail.com"
          {...register("email", {
            required: "Ce champ est requis",
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
        {errors?.email?.type === "required" && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}

        {errors?.email?.type === "pattern" && (
          <span className="form_inscription_error">
            Merci de renseigner un email valide
          </span>
        )}
        {errors?.email?.type === "validExtension" && (
          <span className="form_inscription_error">
            Merci de renseigner une extension valide
          </span>
        )}

        <input
          className="input_inscription"
          type="password"
          name="password"
          id="password"
          placeholder="🔒 Mot de passe"
          {...register("password", {
            required: true,
            minLength: 6,
          })}
        />
        {errors?.password?.type === "required" && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        {errors?.password?.type === "minLength" && (
          <span className="form_inscription_error">
            Ce champ doit comporter au moins 6 caractères
          </span>
        )}

        <label className="checkbox_vigneron">
          <input className="checkbox" type="checkbox" />
          <p>Je suis vigneron</p>
        </label>
        <input
          className="input_inscription"
          placeholder="Nom du domaine *"
          {...register("domain", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-zÀ-ÿ ]+$/i,
          })}
        />
        {errors?.domain?.type === "required" && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        {errors?.domain?.type === "maxLength" && (
          <span className="form_inscription_error">
            Ce champ est limité à 20 caractères
          </span>
        )}

        <input
          className="input_inscription"
          placeholder="Région *"
          {...register("region", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-zÀ-ÿ ]+$/i,
          })}
        />
        {errors?.region?.type === "required" && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        {errors?.region?.type === "maxLength" && (
          <span className="form_inscription_error">
            Ce champ est limité à 20 caractères
          </span>
        )}
        <textarea
          className="form_description"
          placeholder="description *"
          {...register("description", {
            required: true,
            minLength: 10,
            maxLength: 200,
          })}
        />
        {errors?.description?.type === "required" && (
          <span className="form_inscription_error_text">
            Merci d'indiquer l'objet de votre demande
          </span>
        )}
        {errors?.description?.type === "maxLength" && (
          <span className="form_inscription_error_text">
            Votre message ne peut pas dépasser 200 caractères
          </span>
        )}
        {errors?.description?.type === "minLength" && (
          <span className="form_inscription_error_text">
            Votre message doit comporter au moins 10 caractères
          </span>
        )}

        <NavLink to="/quiz" state={{ fromInscription: true }}>
          <button
            className="button_inscription"
            type="submit"
            onClick={onSubmit}
          >
            INSCRIPTION
          </button>
        </NavLink>
      </form>
    </div>
  );
}

export default Inscription;
