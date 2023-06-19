import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
    console.error("affichage des données", dataSubmitted);
    navigate(isValid ? "/validationMessage" : "#");
  };

  /*   affichage des erreurs rencontrées dans la console */
  console.error("affichage des erreurs", errors);

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

        {/*  configuration du champ nom prénom et gestion des erreurs :  */}
        <input
          className="ContactForm_input"
          {...register("userName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-zÀ-ÿ ]+$/i,
          })}
          placeholder="Nom prénom *"
        />
        {errors?.userName?.type === "required" && (
          <span className="ContactForm_error">Ce champ est requis</span>
        )}
        {errors?.userName?.type === "maxLength" && (
          <span className="ContactForm_error">
            Ce champ est limité à 20 caractères
          </span>
        )}
        {errors?.userName?.type === "pattern" && (
          <span className="ContactForm_error">
            Caractères alphabétiques uniquement
          </span>
        )}

        {/*  configuration du champ adresse mail et gestion des erreurs :  */}
        <input
          className="ContactForm_input"
          {...register("emailAdress", {
            required: true,
            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
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
        {errors?.emailAdress?.type === "required" && (
          <span className="ContactForm_error">Ce champ est requis</span>
        )}
        {errors?.emailAdress?.type === "pattern" && (
          <span className="ContactForm_error">
            Merci de renseigner un email valide
          </span>
        )}
        {errors?.emailAdress?.type === "validExtension" && (
          <span className="ContactForm_error">
            Merci de renseigner une extension valide
          </span>
        )}

        {/*  configuration du champ message et gestion des erreurs :  */}
        <textarea
          id="ContactForm_inputMessage"
          {...register("Message", {
            required: true,
            minLength: 10,
            maxLength: 200,
          })}
          placeholder="Message *"
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
            Votre message ne peut pas dépasser 200 caractères
          </span>
        )}
        {errors?.Message?.type === "minLength" && (
          <span className="ContactForm_error">
            Votre message doit comporter au moins 10 caractères
          </span>
        )}

        <button className="ContactForm_button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
