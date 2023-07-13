import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import api from "../../../Contexts/api";
import UserContext from "../../../Contexts/UserContext";

function Inscription() {
  const [usedEmail, setUsedEmail] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const createUser = (data) => {
    const dob = new Date(data.born);
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    const m = now.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) {
      age -= 1;
    }
    if (age < 18) {
      setAgeError(true);
      return;
    }
    api
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/users`, data)
      .then((response) => {
        localStorage.removeItem("token");
        localStorage.setItem("token", response.data.token);
        api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        setUser(jwtDecode(localStorage.getItem("token")));
        navigate("/quiz", { state: { isFirstConnection: true } });
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 409") {
          setUsedEmail(true);
        }
        console.error(error);
      });
  };

  return (
    <div className="formulaire_inscription_page">
      <div className="inovin_picture" />
      <form
        className="form_inscription"
        onSubmit={handleSubmit((data) => createUser(data))}
      >
        <h3 className="text_inscription">
          Inscris-toi pour découvrir ta sélection de vins personnalisée.
        </h3>

        <input
          className="input_inscription"
          placeholder="Prénom *"
          {...register("firstname", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-zÀ-ÿ ]+$/i,
          })}
        />
        {errors?.firstname?.type === "required" && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        {errors?.firstname?.type === "maxLength" && (
          <span className="form_inscription_error">
            Ce champ est limité à 20 caractères
          </span>
        )}
        {errors?.firstname?.type === "pattern" && (
          <span className="form_inscription_error">
            Caractères alphabétiques uniquement
          </span>
        )}

        <input
          className="input_inscription"
          placeholder="Nom *"
          {...register("lastname", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-zÀ-ÿ ]+$/i,
          })}
        />
        {errors?.lastname?.type === "required" && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        {errors?.lastname?.type === "maxLength" && (
          <span className="form_inscription_error">
            Ce champ est limité à 20 caractères
          </span>
        )}
        {errors?.lastname?.type === "pattern" && (
          <span className="form_inscription_error">
            Caractères alphabétiques uniquement
          </span>
        )}
        <input
          name="born"
          type="date"
          {...register("born", {
            required: "Ce champ est requis",
          })}
          className="input_inscription date"
        />
        {errors?.born?.type && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        {ageError && (
          <span className="form_inscription_error">
            Tu dois être majeur pour accéder à Inovin
          </span>
        )}

        <input
          className="input_inscription"
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
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        {usedEmail && (
          <span className="form_inscription_error">Email déjà utilisé</span>
        )}

        {errors?.email?.type === "pattern" && (
          <span className="form_inscription_error">
            Merci de renseigner un email valide
          </span>
        )}
        {errors?.email?.type === "validExtension" && (
          <span className="form_inscription_error">
            Merci de renseigner une extension valide
          </span>
        )}

        <input
          className="input_inscription"
          type="password"
          name="password"
          id="password"
          placeholder="🔒 Mot de passe"
          {...register("password", {
            required: true,
            minLength: 4,
          })}
        />
        {errors?.password?.type === "required" && (
          <span className="form_inscription_error">Ce champ est requis</span>
        )}
        {errors?.password?.type === "minLength" && (
          <span className="form_inscription_error">
            Ce champ doit comporter au moins 4 caractères
          </span>
        )}
        <button className="button_inscription" type="submit">
          Inscription
        </button>
      </form>
    </div>
  );
}

export default Inscription;
