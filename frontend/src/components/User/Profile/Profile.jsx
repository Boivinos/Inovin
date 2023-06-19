import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";


function Profile() {
  const [data, setData] = useState();

  const { search } = useLocation();
  // console.log(search);
  const params = new URLSearchParams(search);
  // console.log(params.get("isFromQuiz"));

  useEffect(() => {
    // API à changer
    fetch(
      "http://mockbin.org/bin/d1687d09-1d04-40a6-b033-585a044a99ad?foo=bar&foo=baz"
    )
      .then((response) => response.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="user-profile-taste">
      <div className="user-profile-taste_list">
        {params.get("isFromQuiz") === "true" && (
          <>
            <div className="user-profile-taste_validation">
              <p>Merci de tes réponses. </p>
              <p>Découvre ton profil dégustation :</p>
            </div>
            <div>
              <hr className="user-profile-taste_solid" />
            </div>
          </>
        )}

        <div className="user-profile-taste_text">
          <p>{data?.couleur_de_vin}</p>
          <p>{data?.arome}</p>
        </div>
      </div>
      {/* router button à définir vvvv */}
      <div className="user-profile-taste_buttonzone">
        <NavLink to="/wineCardList" className="link">
          <button className="user-profile-taste_button" type="button">
            DÉCOUVRIR MA SÉLECTION
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Profile;
