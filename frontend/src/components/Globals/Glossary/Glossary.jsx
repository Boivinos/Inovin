import React from "react";
import cepages from "./GlossaryDetail";

function Glossary() {
  return (
    <>
      {cepages.map((cepage, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="container1000" key={index}>
          <p className="cepage_name">{cepage.nom}</p>
          <p className="cepage_description">{cepage.description}</p>
        </div>
      ))}
    </>
  );
}

export default Glossary;
