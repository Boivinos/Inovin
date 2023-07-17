import React from "react";
import { useLocation } from "react-router-dom";
import Connection from "./Authentification/Connection";

function Home() {
  const location = useLocation();
  const tokenExpired = location.state?.sessionExpired;
  return (
    <div className="home_logo">
      {tokenExpired && (
        <p className="sessionExpired">
          Votre session a expiré, merci de vous reconnecter
        </p>
      )}
      <Connection />
    </div>
  );
}

export default Home;
