import React from "react";
import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import CheckBoxe from "./CheckBoxe";

function SearchAndFilterMenu({
  search,
  setSearch,
  isSearching,
  setIsSearching,
}) {
  return (
    <div className="searchAndFilterMenu">
      <div className="searchAndCloseWrapper">
        <SearchInput
          search={search}
          setSearch={setSearch}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/59/59254.png"
          alt=""
          className="closeFilterMenu"
        />
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
};

export default SearchAndFilterMenu;
