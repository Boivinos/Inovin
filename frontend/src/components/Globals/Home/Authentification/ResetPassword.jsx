import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import { useForm } from "react-hook-form";

function ResetPassword() {
  const [differentPwdError, setDifferentPwdError] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const infos = jwtDecode(token);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetPassword = (data) => {
    if (data.password !== data.password_control) {
      setDifferentPwdError(true);
    } else {
      console.warn(data);
    }
  };

  return (
    <div className="resetPassword">
      <h1> Mettre à jour le mot de passe pour {infos.email}</h1>
      <form className="" onSubmit={handleSubmit((data) => resetPassword(data))}>
        <input
          className="input_connexion"
          type="password"
          name="password"
          id="password"
          placeholder="🔒 Mot de passe"
          {...register("password", {
            required: true,
            minLength: 4,
          })}
        />
        {errors?.password?.type === "required" && (
          <span className="error_connexion">Ce champ est requis</span>
        )}
        {errors?.password?.type === "minLength" && (
          <span className="error_connexion">
            Ce champ doit comporter au moins 4 caractères
          </span>
        )}

        <input
          className="input_connexion"
          type="password"
          name="password_control"
          id="password_control"
          placeholder="🔒 Vérifier le mot de passe"
          {...register("password_control", {
            required: true,
            minLength: 4,
          })}
        />
        {errors?.password?.type === "required" && (
          <span className="error_connexion">Ce champ est requis</span>
        )}
        {errors?.password?.type === "minLength" && (
          <span className="error_connexion">
            Ce champ doit comporter au moins 4 caractères
          </span>
        )}
        {differentPwdError && (
          <span className="error_connexion">
            Les mots de passe ne sont pas identiques
          </span>
        )}
        <button className="button_connexion" type="submit">
          {" "}
          Mettre à jour mon mot de passe
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
