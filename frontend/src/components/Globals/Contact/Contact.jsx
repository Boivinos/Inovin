import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import InovinPicture from "../../../assets/InovinPicture_square.png";
import InovinPictureDesktop from "../../../assets/inovinPicture_desktop.png";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navigate = useNavigate();

  /*  récupération des données saisies par l'utilisateur à l'envoi + condition de vérification des conditions de validation du formulaire avant envoi */
  const onSubmit = (dataSubmitted) => {
    const { firstname, lastname, emailAdress, Message } = dataSubmitted;

    /* configuration du module emailJS  */

    const serviceID = "service_9jco7r9";
    const templateID = "template_zbg3l7w";
    const userID = "sYm8hxJPQyx7BS6oc";

    const templateParams = {
      firstname,
      lastname,
      emailAdress,
      Message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.warn("E-mail envoyé avec succès !", response);

        /* récupération du prénom saisi par l'utilisateur et navigation possible si toutes les erreurs de saisie ont été résolues */

        const queryParams = new URLSearchParams({
          firstname: encodeURIComponent(firstname),
        }).toString();
        navigate(isValid ? `/validationMessage?${queryParams}` : "#");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'e-mail :", error);
      });
  };

  /*   affichage des erreurs de saisie rencontrées dans la console */
  console.error("erreurs de saisie", errors);

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

        {/* Configuration du champ prénom et gestion des erreurs */}
        <input
          className="ContactForm_input"
          {...register("firstname", {
            required: "Ce champ est requis",
            maxLength: {
              value: 20,
              message: "Ce champ est limité à 20 caractères",
            },
            pattern: {
              value: /^[A-Za-zÀ-ÿ ]+$/i,
              message: "Caractères alphabétiques uniquement",
            },
          })}
          placeholder="Prénom *"
        />

        {/* Affichage des erreurs pour le champ prénom */}
        {errors.firstname && (
          <span className="ContactForm_error">{errors.firstname.message}</span>
        )}

        {/* Configuration du champ nom et gestion des erreurs */}
        <input
          className="ContactForm_input"
          {...register("lastname", {
            required: "Ce champ est requis",
            maxLength: {
              value: 20,
              message: "Ce champ est limité à 20 caractères",
            },
            pattern: {
              value: /^[A-Za-zÀ-ÿ ]+$/i,
              message: "Caractères alphabétiques uniquement",
            },
          })}
          placeholder="Nom *"
        />

        {/* Affichage des erreurs pour le champ nom */}
        {errors.lastname && (
          <span className="ContactForm_error">{errors.lastname.message}</span>
        )}

        {/* Configuration du champ adresse mail et gestion des erreurs */}
        <input
          className="ContactForm_input"
          {...register("emailAdress", {
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
          })}
          placeholder="Adresse mail *"
        />

        {/* Affichage des erreurs pour le champ adresse mail */}
        {errors.emailAdress && (
          <span className="ContactForm_error">
            {errors.emailAdress.message}
          </span>
        )}

        {/* Configuration du champ message et gestion des erreurs */}
        <textarea
          id="ContactForm_inputMessage"
          {...register("Message", {
            required: "Merci d'indiquer l'objet de votre demande",
            minLength: {
              value: 10,
              message: "Votre message doit comporter au moins 10 caractères",
            },
            maxLength: {
              value: 200,
              message: "Votre message ne peut pas dépasser 200 caractères",
            },
          })}
          placeholder="Message *"
          rows={4}
          cols={40}
        />

        {/* Affichage des erreurs pour le champ message */}
        {errors.Message && (
          <span className="ContactForm_error">{errors.Message.message}</span>
        )}

        <button className="ContactForm_button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
