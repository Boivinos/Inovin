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
  const colorCheckBoxes = [
    { label: "Rouge", filterFunc: (wine) => wine.color === "red" },
    { label: "Blanc", filterFunc: (wine) => wine.color === "white" },
  ];
  const aromesCheckBoxes = [
    { label: "Fruité", filterFunc: (wine) => wine.fruity === 1 },
    { label: "Floral", filterFunc: (wine) => wine.floral === 1 },
    { label: "Epicé", filterFunc: (wine) => wine.spicy === 1 },
    { label: "Végétal", filterFunc: (wine) => wine.vegetal === 1 },
  ];
  const goutCheckBoxes = [
    { label: "Boisé", filterFunc: (wine) => wine.wooded === 1 },
    { label: "Acide", filterFunc: (wine) => wine.acid === 1 },
    { label: "Amer", filterFunc: (wine) => wine.bitter === 1 },
    { label: "Sucré", filterFunc: (wine) => wine.sugar === 1 },
    { label: "Alcool", filterFunc: (wine) => wine.alcool === 1 },
  ];
  const intensityCheckBoxes = [
    { label: "Léger", filterFunc: (wine) => wine.intensity === "light" },
    { label: "Moyen", filterFunc: (wine) => wine.intensity === "medium" },
    { label: "Intense", filterFunc: (wine) => wine.intensity === "intense" },
  ];

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
      {colorCheckBoxes.map((checkBox) => {
        return (
          <CheckBox
            label={checkBox.label}
            filterFunc={checkBox.filterFunc}
            filterArr={filterArr}
            setFilterArr={setFilterArr}
          />
        );
      })}
      <p>Arômes</p>
      {aromesCheckBoxes.map((checkBox) => {
        return (
          <CheckBox
            label={checkBox.label}
            filterFunc={checkBox.filterFunc}
            filterArr={filterArr}
            setFilterArr={setFilterArr}
          />
        );
      })}
      <p>Goût</p>
      {goutCheckBoxes.map((checkBox) => {
        return (
          <CheckBox
            label={checkBox.label}
            filterFunc={checkBox.filterFunc}
            filterArr={filterArr}
            setFilterArr={setFilterArr}
          />
        );
      })}
      <p>Intensité</p>
      {intensityCheckBoxes.map((checkBox) => {
        return (
          <CheckBox
            label={checkBox.label}
            filterFunc={checkBox.filterFunc}
            filterArr={filterArr}
            setFilterArr={setFilterArr}
          />
        );
      })}
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
