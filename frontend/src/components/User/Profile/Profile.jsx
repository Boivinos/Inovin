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
      .get(`http://localhost:8000/api/selection/user/${user && user.id}`)
      .then((response) => setUserDesc(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="user-profile-taste">
        <div className="inovin_picture" />
        <div className="user-profile-taste_list">
          <div className="user-profile-taste_validation">
            {params.get("isFromQuiz") && (
              <p>Merci de tes réponses {user?.firstname}. </p>
            )}
            <p>Découvre ton profil dégustation :</p>
          </div>
          <div>
            <hr className="user-profile-taste_solid" />
          </div>

          <div className="user-profile-taste_text">{userDesc}</div>
        </div>
        {/* router button à définir vvvv */}
        <div className="user-profile-taste_buttonzone">
          <NavLink to="/vins/selection" className="link">
            <button className="user-profile-taste_button" type="button">
              DÉCOUVRIR MA SÉLECTION
            </button>
          </NavLink>
        </div>
      </div>
      <div className="userProfileFooter">
        <NavLink to="/quiz" className="link">
          <p>(Re)lancer le quiz</p>
        </NavLink>
      </div>
    </>
  );
}

export default Profile;
