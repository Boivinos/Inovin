import React, { useEffect } from "react";
import Connection from "./Authentification/Connection";
import Inscription from "./Authentification/Inscription";

function Home() {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZmlyc3RuYW1lIjoiS2V5aUp1TWFBbiIsImxhc3RuYW1lIjoiSW5vdmluIiwiaXNBZG1pbiI6MSwiaWF0IjoxNjg3NDI4Mzg0LCJleHAiOjE2ODc0MzE5ODR9.tIzHAwi4KTtnXkC2GngLVahci5efebNVBFbOFrUOoiY"
    );
  }, []);

  return (
    <div className="home_logo">
      <Connection />
      <Inscription />
    </div>
  );
}

export default Home;
