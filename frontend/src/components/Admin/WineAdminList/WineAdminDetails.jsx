import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function WineAdminDetails() {
  const { id } = useParams();
  const [wineDetailsData, setWineDetailsData] = useState([]);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/wines/${id}`)
      .then((response) => setWineDetailsData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  const updateWine = (data) => {
    // console.log(data);
    axios
      .put(`http://localhost:8000/api/wines/${id}`, data)
      .then((response) => {
        console.info(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="wineAdminDetailsWrapper">
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

      <div className="wineFormMessage">
        <p>
          Utilisez le formulaire ci-dessous pour mettre à jour les détails du
          vin.
        </p>
        <p>
          Les modifications seront enregistrées lorsque vous appuyez sur
          'Valider'
        </p>
      </div>
      <div className="wineFormDetails">
        <div className="wineImage">
          <img src={wineDetailsData.image} alt="" />
        </div>

        {/* Formulaire pour modifier les détails du vin */}
        <form
          className="wineForm"
          onSubmit={handleSubmit((data) => updateWine(data))}
        >
          <div className="wineFormEditer">
            <div className="wineFormEditer_name">
              <label htmlFor="nameInput"> Nom : </label>
              <input
                type="text"
                className="wineInfoFormEditer_control"
                defaultValue={wineDetailsData.name}
                name="name"
                {...register("name", { required: true })}
              />
            </div>

            <div className="wineFormEditer_domain">
              <label htmlFor="domainInput"> Domaine : </label>
              <input
                type="text"
                className="wineInfoFormEditer_control"
                defaultValue={wineDetailsData.domain}
                name="domain"
                {...register("domain", { required: true })}
              />
            </div>

            <div className="wineFormEditer_region">
              <label htmlFor="regionInput"> Région : </label>
              <input
                type="text"
                className="wineInfoFormEditer_control"
                defaultValue={wineDetailsData.region}
                name="region"
                {...register("region", { required: true })}
              />
            </div>

            <div className="wineFormEditer_year">
              <label htmlFor="yearInput"> Année : </label>
              <input
                type="text"
                className="wineInfoFormEditer_control"
                defaultValue={wineDetailsData.year}
                name="year"
                {...register("year", { required: true })}
              />
            </div>

            <div className="wineFormEditer_grape">
              <label htmlFor="grapeInput"> Cépage : </label>
              <input
                type="text"
                className="wineInfoFormEditer_control"
                defaultValue={wineDetailsData.grape}
                name="grape"
                {...register("grape", { required: true })}
              />
            </div>

            <div className="wineFormEditer_alcohol_content">
              <label htmlFor="alcohol_contentInput"> Teneur en alcool : </label>
              <input
                type="text"
                className="wineInfoFormEditer_control"
                defaultValue={wineDetailsData.alcohol_content}
                name="alcohol_content"
                {...register("alcohol_content", { required: true })}
              />{" "}
              %
            </div>
          </div>

          <button className="wineForm_button" type="submit">
            valider
          </button>
        </form>
      </div>
    </div>
  );
}

export default WineAdminDetails;
