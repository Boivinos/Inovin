import React, { useState } from "react";
import WineCard from "./WineCard/WineCard";
import SearchAndFilterMenu from "./ListButtons/SearchAndFilterMenu";
import fakeWinelist from "./fakeWineList";

function WineCardList() {
  const [search, setSearch] = useState("Rechercher...");
  const [isSearching, setIsSearching] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [filterArr, setFilterArr] = useState([]);

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
          filterArr={filterArr}
          setFilterArr={setFilterArr}
        />

        <div className="wineCardList">
          {fakeWinelist
            .filter((wine) => {
              if (filterArr.length) {
                for (let i = 0; i < filterArr.length; i += 1) {
                  if (filterArr[i](wine)) {
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
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default WineCardList;
