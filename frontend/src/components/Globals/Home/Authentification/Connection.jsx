import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import jwtDecode from "jwt-decode";
import api from "../../../Contexts/api";
import UserContext from "../../../Contexts/UserContext";

function Connection() {
  const [connectionError, setConnectionError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const userLoginCheck = (data) => {
    setConnectionError(false);
    api
      .post(`http://localhost:8000/api/login`, data)
      .then((response) => {
        localStorage.removeItem("token");
        localStorage.setItem("token", response.data.token);
        api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        const user = jwtDecode(localStorage.getItem("token"));
        setUser(user);
        navigate(user.isAdmin ? "/admin/utilisateur" : "/profil");
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 401") {
          setConnectionError(true);
        }
        console.error(error);
      });
  };

  return (
    <div className="formulaire_connexion_page">
      <div className="inovin_picture" />
      <form
        className="form_connexion"
        onSubmit={handleSubmit((data) => userLoginCheck(data))}
      >
        <h3 className="text_connexion">
          Connecte-toi ou inscris-toi pour découvrir ta sélection de vin
          personnalisée.
        </h3>
        <input
          className="input_connexion"
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
          <span className="error_connexion">Ce champ est requis</span>
        )}

        {errors?.email?.type === "pattern" && (
          <span className="error_connexion">
            Merci de renseigner un email valide
          </span>
        )}
        {errors?.email?.type === "validExtension" && (
          <span className="error_connexion">
            Merci de renseigner une extension valide
          </span>
        )}

        <input
          className="input_connexion"
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
          <span className="error_connexion">Ce champ est requis</span>
        )}
        {errors?.password?.type === "minLength" && (
          <span className="error_connexion">
            Ce champ doit comporter au moins 4 caractères
          </span>
        )}
        {connectionError && (
          <span className="error_connexion">
            Email ou mot de passe incorret
          </span>
        )}
        <button className="button_connexion" type="submit">
          {" "}
          Connexion
        </button>

        <div className="inscription">
          Tu n'as pas de compte ?
          <NavLink to="/inscription">
            <button className="button_inscription" type="submit">
              Inscription
            </button>
          </NavLink>
          <NavLink to="/mot-de-passe-oublie">
            <p>Mot de passe oublié ?</p>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Connection;
