import React from "react";

function UserAdminList() {
  return (
    <div>
      <p>coucou</p>
    </div>
  );
}

export default UserAdminList;

/* import React, { useState, useEffect } from "react"; */
/* import axios from "axios";
import PropTypes from "prop-types"; */

/* function UserAdminList({ request }) {
  const [userData, setUserData] = useState(undefined);
  useEffect(() => {
    axios
      .get(request)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error.message));
  }, [userData]); */

/*   return (
    <div className="userAdminList">
      <p>user Admin List</p>
      {userData &&
        userData.map((user) => {
          return <UserCard ={user.name}/>;
        })}
    </div>
  ); */
/* }

UserAdminList.propTypes = {
  request: PropTypes.string.isRequired,
};

export default UserAdminList; */
