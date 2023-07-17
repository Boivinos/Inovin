import React, { useEffect, useState, useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import api from "../../Contexts/api";

function Profile() {
  const { search } = useLocation();
  const [userDesc, setUserDesc] = useState("");
  const params = new URLSearchParams(search);

  const { user } = useContext(UserContext);

  useEffect(() => {
    api
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/selection/user/${
          user && user.id
        }`
      )
      .then((response) => setUserDesc(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="user-profile-taste">
        <div className="inovin_picture" />

        <div className="user-profile-taste_validation">
          {params.get("isFromQuiz") && (
            <p>Merci de tes réponses {user?.firstname}. </p>
          )}
          {userDesc && <p>Découvre ton profil dégustation :</p>}
        </div>

        <hr className="user-profile-taste_solid" />
        {userDesc && (
          <>
            <div className="user-profile-taste_text">{userDesc}</div>
            <NavLink to="/vins/selection" className="link">
              <button className="user-profile-taste_button" type="button">
                Découvrir ma séléction
              </button>
            </NavLink>
          </>
        )}
        {!userDesc && (
          <>
            {" "}
            <div className="user-profile-taste_text">
              Tu n'as pas de profil dégustation, réponds à notre quiz pour le
              découvrir.
            </div>
            <NavLink to="/quiz" className="link">
              <button className="user-profile-taste_button" type="button">
                Commencer le quiz
              </button>
            </NavLink>
          </>
        )}
      </div>
      <div className="userProfileFooter">
        {userDesc && (
          <NavLink to="/quiz" className="link">
            <p>Recommencer le quiz</p>
          </NavLink>
        )}
      </div>
    </>
  );
}

export default Profile;
