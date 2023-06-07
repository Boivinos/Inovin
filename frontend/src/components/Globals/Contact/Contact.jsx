
import React from "react";
import { useForm } from "react-hook-form";
import InovinPicture from "../../../assets/InovinPicture_square.png";

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.warn(data);

  return (
    <div className="ContactForm">
      <img
        className="ContactForm_inovinPicture"
        src={InovinPicture}
        alt="Logo"
      />
      <p className="ContactForm_text"> Nous contacter</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="ContactForm_input"
          {...register("NomPrénom", { required: true, maxLength: 25 })}
          placeholder="Nom prénom"
        />
        <input
          className="ContactForm_input"
          {...register("AdresseMail", { required: true, maxLength: 20 })}
          placeholder="Adresse mail"
        />

        <input
          className="ContactForm_input"
          placeholder="Message"
          {...register("Message", { required: true, maxLength: 20 })}
        />
        <input className="ContactForm_button" type="submit" />
      </form>
    </div>
  );

}

export default Contact;
