import React from "react";
import imagevin from "../../../assets/imagevin.png";

function Home() {
  return (
    <div className="home_logo">
      <h1 className="title_logo">
        IN<span>O</span>VIN
      </h1>
      <h3 className="subtitle_logo">De la dégustation à la création</h3>
      <img className="img_logo" src={imagevin} alt="" width="150" />
    </div>
  );
}

export default Home;
