import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

function Connection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.warn("données", data);
    navigate(isValid ? "/profile" : "#");
  };

  console.warn(errors);

  return (
    <div className="formulaire_connexion_page">
      <div className="inovin_picture" />
      <form className="form_connexion" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text_connexion">
          Connecte-toi ou inscris-toi pour découvrir ta sélection de vin
          personnalisée.
        </h3>
        <input
          className="input_connexion"
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
          <span className="error_connexion">Ce champ est requis</span>
        )}

        {errors?.email?.type === "pattern" && (
          <span className="error_connexion">
            Merci de renseigner un email valide
          </span>
        )}
        {errors?.email?.type === "validExtension" && (
          <span className="error_connexion">
            Merci de renseigner une extension valide
          </span>
        )}

        <input
          className="input_connexion"
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
          <span className="error_connexion">Ce champ est requis</span>
        )}
        {errors?.password?.type === "minLength" && (
          <span className="error_connexion">
            Ce champ doit comporter au moins 6 caractères
          </span>
        )}

        <button className="button_connexion" type="submit">
          {" "}
          CONNEXION
        </button>
        <div className="inscription">
          Tu n'as pas de compte ?
          <NavLink to="/inscription">
            <button className="button_inscription" type="submit">
              INSCRIPTION
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Connection;
