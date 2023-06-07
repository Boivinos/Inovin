import React, { useState } from "react";
import WineCard from "./WineCard/WineCard";
import FilterButton from "./ListButtons/FilterButton";
import SearchInput from "./ListButtons/SearchInput";
import CheckBoxes from "./ListButtons/CheckBoxes";

function WineCardList() {
  const fakeWinelist = [
    {
      name: "Meursault-Blagny",
      image:
        "https://images.vivino.com/thumbs/5RHf-mfuRHm-jpg3UlKKfw_pb_x960.png",
      domain: "Louis Latour",
      red: 0,
      white: 1,
      fruity: 1,
      floral: 0,
      spicy: 0,
      vegetal: 1,
      wooded: 0,
      acid: 1,
      bitter: 0,
      sugar: 0,
      alcool: 1,
      short_intensity: 0,
      medium_intensity: 1,
      long_intensity: 0,
    },
    {
      name: "Pomerol",
      image:
        "https://images.vivino.com/thumbs/M889RhjFRdOdvTh4xYBDoQ_pb_x960.png",
      domain: "Chateau de Sales",
      red: 1,
      white: 0,
      fruity: 0,
      floral: 0,
      spicy: 1,
      vegetal: 1,
      wooded: 0,
      acid: 1,
      bitter: 1,
      sugar: 0,
      alcool: 1,
      short_intensity: 0,
      medium_intensity: 0,
      long_intensity: 1,
    },
    {
      name: "Natana Cuvée Rouge",
      image:
        "https://images.vivino.com/thumbs/a7-WsnN6TKG4lH1LjfFjbw_pb_x960.png",
      domain: "Marianne",
      red: 1,
      white: 0,
      fruity: 1,
      floral: 1,
      spicy: 1,
      vegetal: 1,
      wooded: 1,
      acid: 1,
      bitter: 1,
      sugar: 1,
      alcool: 1,
      short_intensity: 0,
      medium_intensity: 0,
      long_intensity: 1,
    },
    {
      name: "Domaine de Bila-Haut",
      image:
        "https://images.vivino.com/thumbs/7phdZm64SHiWwH8wwCpedQ_pb_x960.png",
      domain: "M. Chapoutier",
      red: 1,
      white: 0,
      fruity: 1,
      floral: 1,
      spicy: 0,
      vegetal: 0,
      wooded: 0,
      acid: 1,
      bitter: 0,
      sugar: 0,
      alcool: 0,
      short_intensity: 1,
      medium_intensity: 0,
      long_intensity: 0,
    },
    {
      name: "Pomerol 2014",
      image:
        "https://images.vivino.com/thumbs/_abY0tGKQnC6mdcJAo0wcQ_pb_x960.png",
      domain: "Chateau l'Evangile",
      red: 1,
      white: 0,
      fruity: 0,
      floral: 1,
      spicy: 0,
      vegetal: 1,
      wooded: 1,
      acid: 1,
      bitter: 0,
      sugar: 1,
      alcool: 0,
      short_intensity: 0,
      medium_intensity: 1,
      long_intensity: 0,
    },
    {
      name: "Margaux 2013",
      image:
        "https://images.vivino.com/thumbs/t61FjP97R-SOyDIHfV_OPg_pb_x960.png",
      domain: "Chateau la Besssane",
      red: 1,
      white: 0,
      fruity: 1,
      floral: 1,
      spicy: 1,
      vegetal: 1,
      wooded: 0,
      acid: 1,
      bitter: 1,
      sugar: 0,
      alcool: 1,
      short_intensity: 0,
      medium_intensity: 0,
      long_intensity: 1,
    },
  ];

  const [search, setSearch] = useState("Rechercher");
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <p className="wineListTitle">Découvrez l'ensemble de nos vins</p>
      <div className="listButtonWrapper">
        <FilterButton />
        <SearchInput
          search={search}
          setSearch={setSearch}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
      </div>
      <div className="checkBoxList">
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
        <CheckBoxes />
      </div>
      <div className="wineCardList">
        {fakeWinelist
          .filter((wine) =>
            search !== "Rechercher"
              ? wine.name.toLowerCase().includes(search.toLowerCase()) ||
                wine.domain.toLowerCase().includes(search.toLowerCase())
              : true
          )
          .map((wine) => {
            return (
              <WineCard
                name={wine.name}
                image={wine.image}
                domain={wine.domain}
                key={wine.name}
              />
            );
          })}
      </div>
    </>
  );
}

export default WineCardList;

// ---- chain filters ----
// const filterMethods = [
//     (item => item.category_id.includes(selectedCategoryOptions)),
//     (item => item.discounts.length > 0),
//     ((item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1)
//   ]

//   const filteredArray = arrayToFilter.filter((item) => {
//     for (let i = 0; i < filterMethods.length; i++) {
//       if (!filterMethods[i](item)) {
//         return false
//       }
//     }
//     return true
//   })

// ---- toggle 1 & 0 as bool ----
// setShowlogo(prev => prev === 0 ? 1 : 0)
