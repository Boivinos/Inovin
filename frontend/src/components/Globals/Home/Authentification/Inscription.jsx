import React, { useState } from "react";
import { useForm, useController } from "react-hook-form";

function Inscription() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [nameSelected, setnameSelected] = useState(false);
  const [firstnameSelected, setfirstnameSelected] = useState(false);
  const [birthdaySelected, setbirthdaySelected] = useState(false);
  const [mailSelected, setmailSelected] = useState(false);
  const [mdpSelected, setmdpSelected] = useState(false);
  const [domaineSelected, setdomaineSelected] = useState(false);
  const [regionSelected, setregionSelected] = useState(false);
  const [descriptionSelected, setdescriptionSelected] = useState(false);

  const onSubmit = (data) => {
    console.warn(data);
  };

  const resetSelect = () => {
    setnameSelected(false);
    setmailSelected(false);
    setmdpSelected(false);
    setfirstnameSelected(false);
    setbirthdaySelected(false);
    setdescriptionSelected(false);
    setdomaineSelected(false);
    setregionSelected(false);
  };

  const handlenameSelect = () => {
    resetSelect();
    setnameSelected(true);
  };
  const handlemailSelect = () => {
    resetSelect();
    setmailSelected(true);
  };
  const handlefirstnameSelect = () => {
    resetSelect();
    setfirstnameSelected(true);
  };
  const handlebirthdaySelect = () => {
    resetSelect();
    setbirthdaySelected(true);
  };
  const handlemdpSelect = () => {
    resetSelect();
    setmdpSelected(true);
  };

  const handledomaineSelect = () => {
    resetSelect();
    setdomaineSelected(true);
  };
  const handleregionSelect = () => {
    resetSelect();
    setregionSelected(true);
  };
  const handledescriptionSelect = () => {
    resetSelect();
    setdescriptionSelected(true);
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
    name: "nom du domaine",
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
    <>
      <div className="home_logo">
        <h1 className="title_logo">
          IN<span>O</span>VIN
        </h1>
        <h3 className="subtitle_logo">De la dégustation à la création</h3>
      </div>

      <h4 className="text_inscription">
        Inscris-toi pour découvrir ta sélection de vins personnalisée.
      </h4>
      <form className="form_inscription" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`name ${nameSelected ? "selected" : ""}`}
          type="text"
          name={nameField.name}
          placeholder="Nom *"
          onSelect={handlenameSelect}
        />
        {errors.Nom && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        <input
          className={`firstname ${firstnameSelected ? "selected" : ""}`}
          type="text"
          name={firstnameField.name}
          placeholder="Prénom *"
          onSelect={handlefirstnameSelect}
        />
        {errors.firstname && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        <input
          className={`birthday ${birthdaySelected ? "selected" : ""}`}
          type=""
          name={birthdayField.name}
          placeholder="Date de naissance *"
          onSelect={handlebirthdaySelect}
        />
        {errors.datedenaissance && (
          <span className="form_inscription_error">Veuillez e</span>
        )}
        <input
          className={`mail ${mailSelected ? "selected" : ""}`}
          type="email"
          name={mailField.name}
          placeholder="Adresse email *"
          onSelect={handlemailSelect}
        />
        {errors.adressemail && <span className="form_inscription_error" />}

        <input
          className={`mdp ${mdpSelected ? "selected" : ""}`}
          type="password"
          placeholder="Mot de passe *"
          name="password"
          /* eslint-disable react/jsx-props-no-spreading */
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "Le mot de passe doit comporter au moins 6 caractères.",
            },
          })}
          onSelect={handlemdpSelect}
        />
        {errors.password && (
          <span className="errormdp">{errors.password.message}</span>
        )}
        <label className="checkbox_vigneron">
          <input className="checkbox" type="checkbox" />
          <p>Je suis vigneron</p>
        </label>
        <input
          className={`domaine ${domaineSelected ? "selected" : ""}`}
          type="text"
          name={domaineField.name}
          placeholder="Nom du domaine *"
          onSelect={handledomaineSelect}
        />
        <input
          className={`Region ${regionSelected ? "selected" : ""}`}
          type="text"
          name={regionField.name}
          placeholder="Région *"
          onSelect={handleregionSelect}
        />
        <textarea
          className={`form_description ${
            descriptionSelected ? "selected" : ""
          }`}
          type="text"
          name={descriptionField.name}
          placeholder="Description *"
          onSelect={handledescriptionSelect}
        />

        <button className="button_inscription" type="submit" onClick={onSubmit}>
          INSCRIPTION
        </button>
      </form>
    </>
  );
}

export default Inscription;
