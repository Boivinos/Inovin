import React from "react";
import PropTypes from "prop-types";

function CheckBox({ label, filterFunc, filterArr, setFilterArr }) {
  const filterHandler = (e) => {
    let temp = [];
    if (e.target.checked) {
      setFilterArr([...filterArr, { label, filterFunc }]);
    } else {
      temp = filterArr.filter((el) => el.label !== label);
      setFilterArr(temp);
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
  filterArr: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string, PropTypes.func)
  ).isRequired,
};

export default CheckBox;
