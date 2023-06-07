
import React, { useState } from "react";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    alert(`Connexion réussie !`);
  };

  return (
    <>
      <h3 className="text_connexion">
        Connecte-toi ou inscris-toi pour découvrir ta sélection de vin
        personnalisée.
      </h3>
      <form className="form_connexion">
        <input
          className="mail"
          value={email}
          placeholder="✉️  utilisateur@mail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="mdp"
          type="password"
          value={password}
          placeholder="🔒 Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="button_connexion" type="button" onClick={onSubmit}>
          CONNEXION
        </button>
        <p className="inscription">Tu n'as pas de compte ?</p>
        <button className="button_inscription" type="button" onClick={onSubmit}>
          INSCRIPTION
        </button>
      </form>
    </>
  );
}

export default Connexion;
