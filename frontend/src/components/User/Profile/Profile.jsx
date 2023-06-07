import React, { useEffect, useState } from "react";

function Profile() {
  const [data, setData] = useState();
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
        <div className="user-profile-taste_validation">
          <p>Merci de tes réponses. </p>
          <p>Découvre ton profil dégustation :</p>
        </div>
        <div>
          <hr className="user-profile-taste_solid" />
        </div>

        <div className="user-profile-taste_text">
          <p>{data?.couleur_de_vin}</p>
          <p>{data?.arome}</p>
        </div>
      </div>
      {/* router button à définir */}
      <div className="user-profile-taste_button">
        <button className="user-profile-taste_button" type="button">
          DÉCOUVRIR MA SÉLECTION
        </button>
      </div>
    </div>
  );
}

export default Profile;
