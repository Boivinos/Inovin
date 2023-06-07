import React from "react";
import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import CheckBox from "./CheckBox";

function SearchAndFilterMenu({
  search,
  setSearch,
  isSearching,
  setIsSearching,
  visibleMenu,
  toggleMenu,
  filterArr,
  setFilterArr,
}) {
  return (
    <div
      className="searchAndFilterMenu"
      id={visibleMenu ? "visibleMenu" : "hiddenMenu"}
    >
      <div className="searchAndCloseWrapper">
        <SearchInput
          search={search}
          setSearch={setSearch}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
        <div
          role="button"
          aria-label="closefitlermenu"
          tabIndex={0}
          className="closeFilterMenu"
          onClick={() => toggleMenu()}
          onKeyDown={() => toggleMenu()}
        >
          <img
            src="https://i.postimg.cc/wjWJqLxc/fleche-filter-menu.png"
            alt=""
          />
        </div>
      </div>
      <p>FILTRES</p>
      <p>Couleur</p>
      <CheckBox
        label="Rouge"
        filterFunc={(wine) => wine.color === "red"}
        filterArr={filterArr}
        setFilterArr={setFilterArr}
      />
      <CheckBox
        label="Blanc"
        filterFunc={(wine) => wine.color === "white"}
        filterArr={filterArr}
        setFilterArr={setFilterArr}
      />
      <p>Arômes</p>
      <CheckBox
        label="Fruité"
        filterFunc={(wine) => wine.fruity === 1}
        filterArr={filterArr}
        setFilterArr={setFilterArr}
      />
      <CheckBox label="Floral" filterFunc={(wine) => wine.floral === 1} />
      <CheckBox label="Epicé" filterFunc={(wine) => wine.spicy === 1} />
      <CheckBox label="Végétal" filterFunc={(wine) => wine.vegetal === 1} />
      <p>Goût</p>
      <CheckBox label="Boisé" filterFunc={(wine) => wine.wooded === 1} />
      <CheckBox label="Acide" filterFunc={(wine) => wine.acid === 1} />
      <CheckBox label="Amer" filterFunc={(wine) => wine.bitter === 1} />
      <CheckBox label="Sucré" filterFunc={(wine) => wine.sugar === 1} />
      <CheckBox label="Alcool" filterFunc={(wine) => wine.alcool === 1} />
      <p>Intensité</p>
      <CheckBox
        label="Léger"
        filterFunc={(wine) => wine.intensity === "intense"}
      />
      <CheckBox
        label="Moyen"
        filterFunc={(wine) => wine.intensity === "medium"}
      />
      <CheckBox
        label="Intense"
        filterFunc={(wine) => wine.intensity === "intense"}
      />
    </div>
  );
}

SearchAndFilterMenu.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
  setIsSearching: PropTypes.func.isRequired,
  visibleMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  setFilterArr: PropTypes.func.isRequired,
  filterArr: PropTypes.shape([]).isRequired,
};

export default SearchAndFilterMenu;
