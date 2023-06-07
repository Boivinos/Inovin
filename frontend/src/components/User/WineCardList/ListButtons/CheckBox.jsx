import React from "react";
import PropTypes from "prop-types";

function CheckBox({ label, filterFunc, filterArr, setFilterArr }) {
  const filterHandler = (e) => {
    if (e.target.checked) {
      setFilterArr([...filterArr, filterFunc]);
    } else {
      setFilterArr(filterArr.filter(() => false));
    }
  };

  return (
    <label>
      <input type="checkbox" onChange={(e) => filterHandler(e)} />
      {label}
    </label>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  filterFunc: PropTypes.func.isRequired,
  setFilterArr: PropTypes.func.isRequired,
  filterArr: PropTypes.shape([]).isRequired,
};

export default CheckBox;
