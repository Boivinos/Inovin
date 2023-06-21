import React from "react";
import cepages from "./GlossaryDetail";

function Glossary() {
  return (
    <div className="glossaryPage">
      <h1>Lexique</h1>
      {cepages.map((cepage, index) => (
        <div
          className={
            index % 2 === 0 ? "glossaryContainerA" : "glossaryContainerB"
          }
          key={cepage.nom}
        >
          <p className="cepage_name">{cepage.nom}</p>
          <p className="cepage_description">{cepage.description}</p>
          <div className={index % 2 === 0 ? "Line_styleA" : "Line_styleB"} />
        </div>
      ))}
    </div>
  );
}

export default Glossary;
