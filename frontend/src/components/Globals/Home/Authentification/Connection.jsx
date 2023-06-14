import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Home from "../Home";

function Connection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [emailSelected, setEmailSelected] = useState(false);
  const [passwordSelected, setPasswordSelected] = useState(false);

  const onSubmit = (data) => {
    console.warn(data);
  };

  const handleEmailSelect = () => {
    setEmailSelected(true);
    setPasswordSelected(false);
  };

  const handlePasswordSelect = () => {
    setEmailSelected(false);
    setPasswordSelected(true);
  };

  return (
    <>
      <Home />
      <h3 className="text_connexion">
        Connecte-toi ou inscris-toi pour découvrir ta sélection de vin
        personnalisée.
      </h3>
      <form className="form_connexion" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`mail ${emailSelected && "selected" }`}
          type="email"
          placeholder="✉️  utilisateur@mail.com"
          name="email"
          /* eslint-disable react/jsx-props-no-spreading */
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Veuillez entrer une adresse e-mail valide.",
            },
          })}
          onSelect={handleEmailSelect}
        />
        {errors.email && (
          <span className="errormail">{errors.email.message}</span>
        )}

        <input
          className={`mdp ${passwordSelected && "selected" }`}
          type="password"
          placeholder="🔒 Mot de passe"
          name="password"
          /* eslint-disable react/jsx-props-no-spreading */
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "Le mot de passe doit comporter au moins 6 caractères.",
            },
          })}
          onSelect={handlePasswordSelect}
        />
        {errors.password && (
          <span className="errormdp">{errors.password.message}</span>
        )}

        <button className="button_connexion" type="submit" onClick={onSubmit}>
          CONNEXION
        </button>
      </form>
      <p className="inscription">Tu n'as pas de compte ?</p>
      <button className="button_inscription" type="submit" onClick={onSubmit}>
        INSCRIPTION
      </button>
    </>
  );
}

export default Connection;
