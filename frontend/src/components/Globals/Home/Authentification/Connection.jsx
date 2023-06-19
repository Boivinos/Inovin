import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Home from "../Home";

function Connection() {
  const {
    register /* enregistre les valeurs d'un champ pour pouvoir les utilisé */,
    handleSubmit /* Gestion de transmission du formulaire */,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.warn(data);

  return (
    <>
      <Home />

      <div className="formulaire_connexion_page">
        <div className="inovin_picture" />
        <form className="form_connexion" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text_connexion">
            Connecte-toi ou inscris-toi pour découvrir ta sélection de vin
            personnalisée.
          </h3>
          <input
            className="input_connexion"
            type="email"
            placeholder="✉️  utilisateur@mail.com"
            name="mail"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Veuillez entrer une adresse e-mail valide.",
              },
            })}
          />
          {errors.email?.type === "required" && (
            <p role="alert">Email is required</p>
          )}

          <input
            className="input_connexion"
            type="password"
            placeholder="🔒 Mot de passe"
            name="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message:
                  "Le mot de passe doit comporter au moins 6 caractères.",
              },
            })}
          />

          <NavLink to="/profile">
            <button
              className="button_connexion"
              // type="button"
              type="submit"
              onClick={onSubmit}
            >
              {" "}
              CONNEXION
            </button>
          </NavLink>
          <div className="inscription">
            Tu n'as pas de compte ?
            <NavLink to="/inscription" className="button_inscription">
              <button
                className="button_inscription"
                type="submit"
                onClick={onSubmit}
              >
                INSCRIPTION
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

export default Connection;
