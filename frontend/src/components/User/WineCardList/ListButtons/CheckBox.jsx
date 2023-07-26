import React from "react";
import PropTypes from "prop-types";

function CheckBox({ label, filterFunc, filterArr, setFilterArr }) {
  const filterHandler = (e) => {
    let temp = [];
    if (e.target.checked) {
      setFilterArr([...filterArr, { label, filterFunc }]); //lorsqu'on coche la case, on ajoute au tableau de filtre un objet contenant le label et la fonction
    } else {
      temp = filterArr.filter((el) => el.label !== label); //quand on décoche, on l'enlève du tableau de filtrage
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
