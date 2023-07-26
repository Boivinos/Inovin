import React from "react";
import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import CheckBox from "./CheckBox";

function SearchAndFilterMenu({
  search,
  setSearch,
  isSearching,
  visibleMenu,
  toggleMenu,
  colorFilterArr,
  setColorFilterArr,
  otherFilterArr,
  setOtherFilterArr,
}) {
  const colorCheckBoxes = [
    { label: "Rouge", filterFunc: (wine) => wine.red === 1 },
    { label: "Blanc", filterFunc: (wine) => wine.white === 1 },
  ];
  const aromesCheckBoxes = [
    { label: "Fruité", filterFunc: (wine) => wine.fruity === 1 }, //renvoie vrai ou faux en fonction de si wine.fruity vaut 1
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
    { label: "Léger", filterFunc: (wine) => wine.short === 1 },
    { label: "Moyen", filterFunc: (wine) => wine.medium === 1 },
    { label: "Intense", filterFunc: (wine) => wine.intense === 1 },
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
            key={checkBox.label}
            label={checkBox.label}
            filterFunc={checkBox.filterFunc}
            filterArr={colorFilterArr}
            setFilterArr={setColorFilterArr}
          />
        );
      })}
      <p>Arômes</p>
      {aromesCheckBoxes.map((checkBox) => {
        return (
          <CheckBox
            key={checkBox.label}
            label={checkBox.label}
            filterFunc={checkBox.filterFunc}
            filterArr={otherFilterArr}
            setFilterArr={setOtherFilterArr}
          />
        );
      })}
      <p>Goût</p>
      {goutCheckBoxes.map((checkBox) => {
        return (
          <CheckBox
            key={checkBox.label}
            label={checkBox.label}
            filterFunc={checkBox.filterFunc}
            filterArr={otherFilterArr}
            setFilterArr={setOtherFilterArr}
          />
        );
      })}
      <p>Intensité</p>
      {intensityCheckBoxes.map((checkBox) => {
        return (
          <CheckBox
            key={checkBox.label}
            label={checkBox.label}
            filterFunc={checkBox.filterFunc}
            filterArr={otherFilterArr}
            setFilterArr={setOtherFilterArr}
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
  visibleMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  colorFilterArr: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string, PropTypes.func)
  ).isRequired,
  setColorFilterArr: PropTypes.func.isRequired,
  otherFilterArr: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string, PropTypes.func)
  ).isRequired,
  setOtherFilterArr: PropTypes.func.isRequired,
};

export default SearchAndFilterMenu;
