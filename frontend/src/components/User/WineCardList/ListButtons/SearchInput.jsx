import React from "react";
import PropTypes from "prop-types";

function SearchInput({ search, setSearch, isSearching }) {
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const focusHandler = () => {
    if (!isSearching) {
      setSearch("");
    }
  };

  return (
    <div className="searchInputWrapper">
      <input
        type="text"
        placeholder="Rechercher..."
        className={`searchInput ${!isSearching && "defaultInput"}`}
        value={search}
        onChange={(e) => changeHandler(e)}
        onFocus={() => focusHandler()}
      />
      <img
        src="https://i.ibb.co/QMtjxLM/Pik-Png-com-loupe-png-3599608.png"
        alt=""
      />
    </div>
  );
}

SearchInput.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
};

export default SearchInput;
