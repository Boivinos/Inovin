import React from "react";
import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import CheckBoxe from "./CheckBoxe";

function SearchAndFilterMenu({
  search,
  setSearch,
  isSearching,
  setIsSearching,
  visibleMenu,
  toggleMenu,
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
      <CheckBoxe />
      <CheckBoxe />
      <p>Arômes</p>
      <CheckBoxe />
      <CheckBoxe />
      <CheckBoxe />
      <CheckBoxe />
      <p>Goût</p>
      <CheckBoxe />
      <CheckBoxe />
      <CheckBoxe />
      <CheckBoxe />
      <CheckBoxe />
      <p>Intensité</p>
      <CheckBoxe />
      <CheckBoxe />
      <CheckBoxe />
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
};

export default SearchAndFilterMenu;
