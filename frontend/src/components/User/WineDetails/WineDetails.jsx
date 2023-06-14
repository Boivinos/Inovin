import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import VueComments from "./Comments/VueComments";
import CommentButton from "./Comments/CommentButton";
import AddComments from "./Comments/AddComments";
import FavoriteButton from "../WineCardList/WineCard/FavoriteButton";

function WineDetails() {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [wineDetailsData, setWineDetailsData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/wines/${id}`)
      .then((response) => setWineDetailsData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/wine/${id}/comments`)
      .then((response) => setCommentsData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  const ratingChanged = (newRating) => {
    console.warn(newRating); // envoyer la note dans la table de jointure note, si il y a déjà une ligne qui match le wineid et user id, la mettre à jour
  };

  const displayVueCommentsMode = () => {
    if (commentsData.length) {
      return <VueComments commentsData={commentsData} />;
    }
    return (
      <>
        <p>Commentaires :</p>
        <p>Il n'y a pas encore de commentaires</p>
      </>
    );
  };

  const displayAddCommentMode = () => {
    return (
      <AddComments
        commentValue={commentValue}
        setCommentValue={setCommentValue}
      />
    );
  };

  return (
    <div className="wineDetailsWrapper">
      <NavLink to="/wineCardList">
        <div className="returnButtonWrapper">
          <img src="https://i.ibb.co/PchSHGr/60793.png" alt="" />
          <p>Retour</p>
        </div>
      </NavLink>
      <div className="wineInfo">
        <div className="mainWineInfo">
          <div className="imageBloc">
            <img src={wineDetailsData.image} alt="" />
          </div>
          <div className="mainWineInfoBloc">
            <p>{wineDetailsData.name}</p>
            <p>{wineDetailsData.year}</p>
            <p>Région : {wineDetailsData.area}</p>
            <p>
              {wineDetailsData.winemaker &&
                `Vigneron : ${wineDetailsData.winemaker}`}
            </p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={35}
              isHalf
              activeColor="#ffd700"
              value={3} // recuperer les notes depuis la table de jointure note et faire une moyenne
            />
          </div>
        </div>
        <div className="detailedWineInfo">
          <p>Informations sur le vin :</p>
          <p>Domaine : {wineDetailsData.domain}</p>
          <p>Cépage(s) : {wineDetailsData.grape}</p>
          <p>Teneur en alcool : {wineDetailsData.alcohol_content}%</p>
        </div>
        <div className="favoriteButton">
          <FavoriteButton />
        </div>
      </div>
      <div className="separator" />
      <div className="wineCommentsAndRecipe">
        <div className="commentsHeaderAndWrapper">
          {isEditing ? displayAddCommentMode() : displayVueCommentsMode()}
        </div>
        <div className="buttonWrapper">
          <CommentButton
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            commentValue={commentValue}
            setCommentValue={setCommentValue}
          />
          <button type="button">Télécharger la recette</button>
        </div>
      </div>
    </div>
  );
}

export default WineDetails;
