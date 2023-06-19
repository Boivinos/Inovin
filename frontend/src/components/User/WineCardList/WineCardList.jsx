import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import WineCard from "./WineCard/WineCard";
import SearchAndFilterMenu from "./ListButtons/SearchAndFilterMenu";

function WineCardList({ request, title }) {
  const [search, setSearch] = useState("Rechercher...");
  const [isSearching, setIsSearching] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [colorFilterArr, setColorFilterArr] = useState([]);
  const [otherFilterArr, setOtherFilterArr] = useState([]);
  const [wineCardData, setWineCardData] = useState(undefined);

  const toggleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  useEffect(() => {
    axios
      .get(request)
      .then((response) => setWineCardData(response.data))
      .catch((error) => console.error(error.message));
  }, [wineCardData]);

  return (
    <>
      <p className="wineListTitle">Découvrez {title}</p>
      <div className="menuAndListWrapper">
        <button
          type="button"
          className="openFilterMenuButton"
          onClick={() => toggleMenu()}
          id={!visibleMenu ? "visibleButton" : "hiddenButton"}
        >
          Rechercher/filtrer
        </button>
        <SearchAndFilterMenu
          search={search}
          setSearch={setSearch}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          visibleMenu={visibleMenu}
          setVisibleMenu={setVisibleMenu}
          toggleMenu={toggleMenu}
          colorFilterArr={colorFilterArr}
          setColorFilterArr={setColorFilterArr}
          otherFilterArr={otherFilterArr}
          setOtherFilterArr={setOtherFilterArr}
        />

        <div className="wineCardList">
          {wineCardData &&
            wineCardData
              .filter((wine) => {
                if (colorFilterArr.length) {
                  for (let i = 0; i < colorFilterArr.length; i += 1) {
                    if (colorFilterArr[i].filterFunc(wine)) {
                      return true;
                    }
                  }
                  return false;
                }
                return true;
              })
              .filter((wine) => {
                if (otherFilterArr.length) {
                  for (let i = 0; i < otherFilterArr.length; i += 1) {
                    if (otherFilterArr[i].filterFunc(wine)) {
                      return true;
                    }
                  }
                  return false;
                }
                return true;
              })
              .filter((wine) =>
                search !== "Rechercher..."
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
                    key={wine.id}
                    id={wine.id}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
}
WineCardList.propTypes = {
  request: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WineCardList;
