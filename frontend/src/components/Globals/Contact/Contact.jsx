import React from "react";
import { useForm, useController } from "react-hook-form";
import InovinPicture from "../../../assets/InovinPicture_square.png";

function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.warn(data);

  const { field: nomPrenomField } = useController({
    name: "NomPrenom",
    control,
    rules: { required: true, maxLength: 20 },
  });

  const { field: adresseMailField } = useController({
    name: "AdresseMail",
    control,
    rules: {
      required: true,
      pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
    },
  });

  const { field: messageField } = useController({
    name: "Message",
    control,
    rules: { required: true, maxLength: 200 },
  });

  return (
    <div className="ContactForm">
      <img
        className="ContactForm_inovinPicture"
        src={InovinPicture}
        alt="Logo"
      />
      <p className="ContactForm_text"> Nous contacter</p>
      <form className="ContactForm_fields" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="ContactForm_input"
          name={nomPrenomField.name}
          value={nomPrenomField.value}
          onChange={nomPrenomField.onChange}
          onBlur={nomPrenomField.onBlur}
          placeholder="Nom prénom"
        />
        {errors.NomPrenom && (
          <span className="ContactForm_error">Ce champ est requis</span>
        )}
        <input
          className="ContactForm_input"
          name={adresseMailField.name}
          value={adresseMailField.value}
          onChange={adresseMailField.onChange}
          onBlur={adresseMailField.onBlur}
          placeholder="Adresse mail"
        />
        {errors.AdresseMail && (
          <span className="ContactForm_error">
            Merci de renseigner un email valide
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
        {errors.Message && (
          <span className="ContactForm_error">
            Merci d'indiquer l'objet de votre demande
          </span>
        )}
        <button className="ContactForm_button" type="submit">
          {" "}
          Envoyer{" "}
        </button>
      </form>
    </div>
  );
}

export default Contact;
