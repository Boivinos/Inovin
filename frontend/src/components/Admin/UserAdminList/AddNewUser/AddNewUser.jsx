import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../../Contexts/api";

function AddNewUser() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addUser = (data) => {
    api
      .post(`http://localhost:8000/api/users`, data)
      .then(() => {
        navigate("/ajout/utilisateur");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="addUserWrapper">
      <div
        className="returnButton"
        onClick={() => navigate(-1)}
        onKeyDown={() => navigate(-1)}
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
      <div className="addUserMessage">
        <p>
          Utilisez le formulaire ci-dessous pour ajouter un nouvel utilisateur
        </p>
      </div>
      <div>
        <hr className="addwinSeperetor" />
      </div>

      <div className="addUserFormContent">
        <form
          className="addUserForm"
          onSubmit={handleSubmit((data) => addUser(data))}
        >
          <div>
            <label htmlFor="firstname"> Prénom : </label>
            <input
              type="text"
              name="firstname"
              {...register("firstname", {
                required: "Ce champ est requis",
                maxLength: 20,
                pattern: /^[A-Za-zÀ-ÿ ]+$/i,
              })}
            />
            {errors.firstname && (
              <span className="ContactForm_error">
                {errors.firstname.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="lastname"> Nom : </label>
            <input
              type="text"
              name="lastname"
              {...register("lastname", {
                required: "Ce champ est requis",
                maxLength: 20,
                pattern: /^[A-Za-zÀ-ÿ ]+$/i,
              })}
            />
            {errors.lastname && (
              <span className="ContactForm_error">
                {errors.lastname.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="born"> Date de naissance : </label>
            <input
              type="date"
              name="born"
              {...register("born", {
                required: "Ce champ est requis",
              })}
            />
            {errors.born && (
              <span className="ContactForm_error">{errors.born.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="emailAdress"> Adresse mail : </label>
            <input
              type="text"
              name="email"
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
              <span className="ContactForm_error">Ce champ est requis</span>
            )}

            {errors?.email?.type === "pattern" && (
              <span className="ContactForm_error">
                Merci de renseigner un email valide
              </span>
            )}
            {errors?.email?.type === "validExtension" && (
              <span className="ContactForm_error">
                Merci de renseigner une extension valide
              </span>
            )}
          </div>

          <div>
            <label htmlFor="password"> Mot de passe : </label>
            <input
              type="text"
              name="password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
            />
            {errors?.password?.type === "required" && (
              <span className="ContactForm_error">Ce champ est requis</span>
            )}
            {errors?.password?.type === "minLength" && (
              <span className="ContactForm_error">
                Ce champ doit comporter au moins 8 caractères
              </span>
            )}
          </div>

          <button className="addUserForm_button" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewUser;
