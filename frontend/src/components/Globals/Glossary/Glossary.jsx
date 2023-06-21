import React from "react";
import cepages from "./GlossaryDetail";

function Glossary() {
  return (
    <div className="glossaryPage">
      {cepages.map((cepage, index) => (
        <div
          className={
            index % 2 === 0 ? "glossaryContainerA" : "glossaryContainerB"
          }
          key={cepage.nom}
        >
          <p className="cepage_name">{cepage.nom}</p>
          <p className="cepage_description">{cepage.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Glossary;
