import React from "react";
import { useNavigate } from "react-router-dom";
import cepages from "./GlossaryDetail";
import glossaryPicture from "../../../assets/glossary_picture.png";

function Glossary() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="returnButton"
        onClick={() => navigate("/")}
        onKeyDown={() => navigate("/")}
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
      <div className="glossaryPage">
        <h1 id="glossary_title">Lexique</h1>
        <img className="glossaryPicture" src={glossaryPicture} alt="Glossary" />
        {cepages.map((cepage, index) => (
          <div
            className={
              index % 2 === 0 ? "glossaryContainerA" : "glossaryContainerB"
            }
            key={cepage.nom}
          >
            <p className="cepage_name">{cepage.nom}</p>
            <div
              className={
                index % 2 === 0 ? "cepage_description" : "cepage_description b"
              }
            >
              <p>{cepage.description}</p>
            </div>
            <div className={index % 2 === 0 ? "Line_styleA" : "Line_styleB"} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Glossary;
