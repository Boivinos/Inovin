import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../../Contexts/api";

function ResetPassword() {
  const [differentPwdError, setDifferentPwdError] = useState(false);
  const [passwordReseted, setPasswordReseted] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const infos = jwtDecode(token);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetPassword = (data) => {
    setPasswordReseted(false);
    setDifferentPwdError(false);
    if (data.password !== data.password_control) {
      setDifferentPwdError(true);
    } else {
      data.token = token; // eslint-disable-line no-param-reassign
      api
        .post(`http://localhost:8000/updatepassword`, data)
        .then((response) => {
          if (response.status === 204) {
            setPasswordReseted(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <div
        className="returnButton"
        onClick={() => navigate("/")}
        onKeyDown={() => navigate("/")}
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
      <div className="resetPassword">
        <h1> Mettre à jour le mot de passe pour {infos.email}</h1>
        <form
          className=""
          onSubmit={handleSubmit((data) => resetPassword(data))}
        >
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
              Ce champ doit comporter au moins 8 caractères
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
              minLength: 8,
            })}
          />
          {errors?.password?.type === "required" && (
            <span className="error_connexion">Ce champ est requis</span>
          )}
          {errors?.password?.type === "minLength" && (
            <span className="error_connexion">
              Ce champ doit comporter au moins 8 caractères
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
          {passwordReseted && (
            <p className="emailSent">
              Votre nouveau mot de passe a été enregistré avec succès !
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
