import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import api from "../../../Contexts/api";
import UserContext from "../../../Contexts/UserContext";

function Inscription() {
  const [usedEmail, setUsedEmail] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isVigneron, setIsVigneron] = useState(false);

  const createUser = (data) => {
    setUsedEmail(false);
    api
      .post(`http://localhost:8000/api/users`, data)
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

  const handleCheckboxChange = (e) => {
    setIsVigneron(e.target.checked);
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
          className="input_inscription"
        />
        {errors?.born?.type && (
          <span className="form_inscription_error">Ce champ est requis</span>
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

        <label className="checkbox_vigneron">
          <input
            className="checkbox"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <p>Je suis vigneron</p>
        </label>
        {isVigneron && (
          <>
            <input
              className="input_inscription"
              placeholder="Nom du domaine *"
              {...register("domain", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-zÀ-ÿ ]+$/i,
              })}
            />
            {errors?.domain?.type === "required" && (
              <span className="form_inscription_error">
                Ce champ est requis
              </span>
            )}
            {errors?.domain?.type === "maxLength" && (
              <span className="form_inscription_error">
                Ce champ est limité à 20 caractères
              </span>
            )}

            <input
              className="input_inscription"
              placeholder="Région *"
              {...register("region", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-zÀ-ÿ ]+$/i,
              })}
            />
            {errors?.region?.type === "required" && (
              <span className="form_inscription_error">
                Ce champ est requis
              </span>
            )}
            {errors?.region?.type === "maxLength" && (
              <span className="form_inscription_error">
                Ce champ est limité à 20 caractères
              </span>
            )}
            <textarea
              className="form_description"
              placeholder="description *"
              {...register("description", {
                required: true,
                minLength: 10,
                maxLength: 200,
              })}
            />
            {errors?.description?.type === "required" && (
              <span className="form_inscription_error_text">
                Merci d'indiquer l'objet de votre demande
              </span>
            )}
            {errors?.description?.type === "maxLength" && (
              <span className="form_inscription_error_text">
                Votre message ne peut pas dépasser 200 caractères
              </span>
            )}
            {errors?.description?.type === "minLength" && (
              <span className="form_inscription_error_text">
                Votre message doit comporter au moins 10 caractères
              </span>
            )}
          </>
        )}
        <button className="button_inscription" type="submit">
          INSCRIPTION
        </button>
      </form>
    </div>
  );
}

export default Inscription;
