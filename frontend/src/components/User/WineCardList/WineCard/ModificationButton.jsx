import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ModificationButton({ id }) {
  const navigateToAdminWineModificationPage = useNavigate();
  const handleWineModifButtonClick = () => {
    navigateToAdminWineModificationPage(`/admin/vin/${id}`);
  };
  return (
    <button
      className="modification-button"
      onClick={handleWineModifButtonClick}
      type="button"
    >
      <FaRegEdit />
    </button>
  );
}
ModificationButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ModificationButton;
