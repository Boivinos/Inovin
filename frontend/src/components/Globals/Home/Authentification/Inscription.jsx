import React from "react";
import { useForm, useController } from "react-hook-form";
import { NavLink } from "react-router-dom";

function Inscription() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.warn(data);
  };

  const { field: nameField } = useController({
    name: "Nom",
    type: "text",
    control,
    rules: {
      required: true,
      maxLength: 20,
    },
  });
  const { field: firstnameField } = useController({
    name: "firstname",
    type: "text",
    control,
    rules: {
      required: true,
      maxLength: 20,
    },
  });
  const { field: birthdayField } = useController({
    name: "datedenaissance",
    control,
    rules: {
      required: true,
      pattern: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
    },
  });

  const { field: mailField } = useController({
    name: "adressemail",
    control,
    rules: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
  });

  const { field: domaineField } = useController({
    name: "nomdudomaine",
    type: "text",
    control,
    rules: {
      required: true,
      maxLength: 50,
    },
  });

  const { field: regionField } = useController({
    name: "Region",
    type: "text",
    control,
    rules: {
      required: true,
      maxLength: 30,
    },
  });
  const { field: descriptionField } = useController({
    name: "description",
    type: "text",
    control,
    rules: {
      required: true,
      maxLength: 400,
    },
  });
  return (
    <div className="formulaire_inscription_page">
      <div className="inovin_picture" />
      <form className="form_inscription" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text_inscription">
          Inscris-toi pour découvrir ta sélection de vins personnalisée.
        </h3>
        <input
          className="input_inscription"
          type="text"
          name={nameField.name}
          placeholder="Nom *"
        />
        {errors.Nom && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        <input
          className="input_inscription"
          type="text"
          name={firstnameField.name}
          placeholder="Prénom *"
        />
        {errors.firstname && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        <input
          className="input_inscription"
          type="date"
          name={birthdayField.name}
          placeholder="Date de naissance *"
        />
        {errors.datedenaissance && (
          <span className="form_inscription_error">Veuillez e</span>
        )}
        <input
          className="input_inscription"
          type="email"
          name={mailField.name}
          placeholder="Adresse email *"
        />
        {errors.adressemail && <span className="form_inscription_error" />}

        <input
          className="input_inscription"
          type="password"
          placeholder="Mot de passe *"
          name="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "Le mot de passe doit comporter au moins 6 caractères.",
            },
          })}
        />
        {errors.password && (
          <span className="errormdp">{errors.password.message}</span>
        )}
        <label className="checkbox_vigneron">
          <input className="checkbox" type="checkbox" />
          <p>Je suis vigneron</p>
        </label>
        <input
          className="input_inscription"
          type="text"
          name={domaineField.name}
          placeholder="Nom du domaine *"
        />
        <input
          className="input_inscription"
          type="text"
          name={regionField.name}
          placeholder="Région *"
        />
        <textarea
          className="form_description"
          type="text"
          name={descriptionField.name}
          placeholder="Description *"
        />
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
