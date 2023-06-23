import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function UserCard({ firstname, lastname, id }) {
  return (
    <div className="userCardWrapper">
      <NavLink to={`/userAdminDetails/${id}`}>
        <div className="userCard">
          <p>
            {firstname} {lastname}
          </p>
        </div>
      </NavLink>
    </div>
  );
}

UserCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default UserCard;
