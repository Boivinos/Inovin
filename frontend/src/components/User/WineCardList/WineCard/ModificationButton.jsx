import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ModificationButton() {
  const navigateToAdminWineModificationPage = useNavigate();
  const handleWineModifButtonClick = () => {
    navigateToAdminWineModificationPage("/ADRESSE A DEFINIR");
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

export default ModificationButton;
