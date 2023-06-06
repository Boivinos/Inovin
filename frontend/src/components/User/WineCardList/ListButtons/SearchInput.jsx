import React from "react";
import PropTypes from "prop-types";

function SearchInput({ search, setSearch, isSearching, setIsSearching }) {
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const focusHandler = () => {
    if (!isSearching) {
      setIsSearching(true);
      setSearch("");
    }
  };

  return (
    <input
      type="text"
      className={`searchInput ${!isSearching && "defaultInput"}`}
      value={search}
      onChange={(e) => changeHandler(e)}
      onFocus={() => focusHandler()}
    />
  );
}

SearchInput.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  isSearching: PropTypes.string.isRequired,
  setIsSearching: PropTypes.func.isRequired,
};

export default SearchInput;
