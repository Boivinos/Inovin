import React from "react";
import WineCard from "./WineCard/WineCard";

function WineCardList() {
  const fakeWinelist = [
    {
      name: "Meursault-Blagny",
      image:
        "https://images.vivino.com/thumbs/5RHf-mfuRHm-jpg3UlKKfw_pb_x960.png",
      domain: "Louis Latour",
    },
    {
      name: "Pomerol",
      image:
        "https://images.vivino.com/thumbs/M889RhjFRdOdvTh4xYBDoQ_pb_x960.png",
      domain: "Chateau de Sales",
    },
    {
      name: "Natana Cuvée Rouge",
      image:
        "https://images.vivino.com/thumbs/a7-WsnN6TKG4lH1LjfFjbw_pb_x960.png",
      domain: "Marianne",
    },
    {
      name: "Domaine de Bila-Haut",
      image:
        "https://images.vivino.com/thumbs/7phdZm64SHiWwH8wwCpedQ_pb_x960.png",
      domain: "M. Chapoutier",
    },
    {
      name: "Pomerol 2014",
      image:
        "https://images.vivino.com/thumbs/_abY0tGKQnC6mdcJAo0wcQ_pb_x960.png",
      domain: "Chateau l'Evangile",
    },
    {
      name: "Margaux 2013",
      image:
        "https://images.vivino.com/thumbs/t61FjP97R-SOyDIHfV_OPg_pb_x960.png",
      domain: "Chateau la Besssane",
    },
  ];

  return (
    <div className="wineCardList">
      {fakeWinelist.map((wine) => {
        return (
          <WineCard name={wine.name} image={wine.image} domain={wine.domain} />
        );
      })}
    </div>
  );
}

export default WineCardList;
