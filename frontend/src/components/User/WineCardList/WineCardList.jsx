import React, { useState } from "react";
import WineCard from "./WineCard/WineCard";
import SearchAndFilterMenu from "./ListButtons/SearchAndFilterMenu";
import fakeWinelist from "./fakeWineList";

function WineCardList() {
  const [search, setSearch] = useState("Rechercher...");
  const [isSearching, setIsSearching] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [colorFilterArr, setColorFilterArr] = useState([]);
  const [otherFilterArr, setOtherFilterArr] = useState([]);

  const toggleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <>
      <p className="wineListTitle">Découvrez l'ensemble de nos vins</p>
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
          {fakeWinelist
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
                  key={wine.name}
                  id={wine.id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default WineCardList;
