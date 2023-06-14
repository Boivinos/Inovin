import React, { useState, useEffect } from "react";
import { useForm, useController } from "react-hook-form";
import { NavLink } from "react-router-dom";
import InovinPicture from "../../../assets/InovinPicture_square.png";
import InovinPictureDesktop from "../../../assets/inovinPicture_desktop.png";

function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /*  suivi de l'état de validation du formulaire */
  const [isFormValid, setFormValid] = useState(false);

  /*  màj du state en fonction des erreurs et stockage dans le tableau */
  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;
    setFormValid(!hasErrors);
  }, [errors]);

  const onSubmit = (data) => console.error(data);

  const { field: nomPrenomField } = useController({
    name: "NomPrenom",
    control,
    rules: { required: true, maxLength: 20, pattern: /^[A-Za-z ]+$/i },
  });

  const { field: adresseMailField } = useController({
    name: "AdresseMail",
    control,
    rules: {
      required: "Ce champ est requis",
      pattern: {
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
        message: "Merci de renseigner un email valide",
      },
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
    },
  });

  const { field: messageField } = useController({
    name: "Message",
    control,
    rules: { required: true, minLength: 10, maxLength: 200 },
  });

  return (
    <div className="ContactForm">
      <img
        className="ContactForm_inovinPicture"
        src={InovinPicture}
        alt="Logo"
      />
      <img
        className="ContactForm_inovinPicture_desktop"
        src={InovinPictureDesktop}
        alt="Logo"
      />
      <p className="ContactForm_text"> Nous contacter</p>

      <form className="ContactForm_fields" onSubmit={handleSubmit(onSubmit)}>
        <p className="ContactForm_text_desktop"> Nous contacter</p>
        <input
          className="ContactForm_input"
          name={nomPrenomField.name}
          value={nomPrenomField.value}
          onChange={nomPrenomField.onChange}
          onBlur={nomPrenomField.onBlur}
          placeholder="Nom prénom"
        />
        {errors?.NomPrenom?.type === "required" && (
          <span className="ContactForm_error">Ce champ est requis</span>
        )}
        {errors?.NomPrenom?.type === "maxLength" && (
          <span className="ContactForm_error">
            Ce champ est limité à 20 caractères
          </span>
        )}
        {errors?.NomPrenom?.type === "pattern" && (
          <span className="ContactForm_error">
            Caractères alphabétiques uniquement
          </span>
        )}
        <input
          className="ContactForm_input"
          name={adresseMailField.name}
          value={adresseMailField.value}
          onChange={adresseMailField.onChange}
          onBlur={adresseMailField.onBlur}
          placeholder="Adresse mail"
        />
        {errors?.AdresseMail?.type === "required" && (
          <span className="ContactForm_error">Ce champ est requis</span>
        )}
        {errors?.AdresseMail?.type === "pattern" && (
          <span className="ContactForm_error">
            Merci de renseigner un email valide
          </span>
        )}
        {errors?.AdresseMail?.type === "validExtension" && (
          <span className="ContactForm_error">
            Merci de renseigner une extension valide
          </span>
        )}
        <textarea
          id="ContactForm_inputMessage"
          name={messageField.name}
          value={messageField.value}
          onChange={messageField.onChange}
          onBlur={messageField.onBlur}
          placeholder="Message"
          rows={4}
          cols={40}
        />
        {errors?.Message?.type === "required" && (
          <span className="ContactForm_error">
            Merci d'indiquer l'objet de votre demande
          </span>
        )}
        {errors?.Message?.type === "maxLength" && (
          <span className="ContactForm_error">
            Votre message ne peut pas exéder 200 caractères
          </span>
        )}
        {errors?.Message?.type === "minLength" && (
          <span className="ContactForm_error">
            Votre message doit comporter un minimum de 10 caractères
          </span>
        )}

        {/* vérification de l'état du state pour valider le questionnaire */}
        <button className="ContactForm_button" type="submit">
          <NavLink to={isFormValid ? "/validationMessage" : "#"}>
            Envoyer
          </NavLink>
        </button>
      </form>
    </div>
  );
}

export default Contact;
