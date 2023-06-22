import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function UserAdminList() {
  const [userData, setUserData] = useState(undefined);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className="userAdminList">
      <p>user Admin List</p>
      {userData &&
        userData.map((user) => {
          return (
            <UserCard
              firstname={user.firstname}
              lastname={user.lastname}
              id={user.id}
            />
          );
        })}
    </div>
  );
}

export default UserAdminList;
