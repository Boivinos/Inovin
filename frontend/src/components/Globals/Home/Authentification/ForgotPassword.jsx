import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../../Contexts/api";

function ForgotPassword() {
  const [messageSent, setMessageSent] = useState(false);
  const [noUserError, setNoUserError] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendResetPassEmail = (data) => {
    setMessageSent(false);
    setNoUserError(false);
    api
      .post(`${import.meta.env.VITE_BACKEND_URL}/resetpassword`, data)
      .then((response) => {
        if (response.status === 204) {
          setNoUserError(true); //erreur de user inconnu
        } else if (response.data === "Message sent") {
          setMessageSent(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
        <h1 id="forgotPassword_h1">
          {" "}
          Entrer votre mail pour recevoir un lien et changer votre mot de passe
        </h1>
        <form
          className=""
          onSubmit={handleSubmit((data) => sendResetPassEmail(data))}
        >
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
          <button className="button_connexion" type="submit">
            {" "}
            Envoyer l'e-mail
          </button>
          {messageSent && (
            <p className="emailSent">
              Votre email a été envoyé, pensez à vérifier dans les spams !
            </p>
          )}
          {noUserError && (
            <span className="error_connexion">Email inconnu</span>
          )}
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
