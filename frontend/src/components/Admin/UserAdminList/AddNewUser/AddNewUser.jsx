import React from "react";
import { useForm } from "react-hook-form";

function AddNewUser() {
  const {
    register,
    /*     handleSubmit,
    formState: { errors }, */
  } = useForm();

  return (
    <form>
      <p>
        {" "}
        Renseigner les champs ci-dessous pour ajouter un nouvel utilisateur :{" "}
      </p>
      <ul>
        <li>
          {" "}
          Prénom :
          <input
            type="text"
            className="userAdminDetail_input"
            {...register("firstname", { required: "Ce champ est requis" })}
            style={{ color: "black" }}
            defaultValue=""
          />
        </li>
        <li>
          {" "}
          Nom :
          <input
            type="text"
            className="userAdminDetail_input"
            {...register("lastname", { required: "Ce champ est requis" })}
            style={{ color: "black" }}
            defaultValue=""
          />
        </li>
        <li>
          {" "}
          Date de naissance :
          <input
            type="date"
            className="userAdminDetail_input"
            {...register("born", { required: "Ce champ est requis" })}
            style={{ color: "black" }}
            defaultValue=""
          />
        </li>
        <li>
          {" "}
          Mot de passe:
          <input
            type="password"
            className="userAdminDetail_input"
            {...register("password", { required: "Ce champ est requis" })}
            style={{ color: "black" }}
            defaultValue=""
          />
        </li>
        <li>
          {" "}
          Adresse mail :
          <input
            type="email"
            className="userAdminDetail_input"
            {...register("password", { required: "Ce champ est requis" })}
            style={{ color: "black" }}
            defaultValue=""
          />
        </li>
      </ul>
    </form>
  );
}

export default AddNewUser;
