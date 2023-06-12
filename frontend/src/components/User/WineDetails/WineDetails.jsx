import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import fakeWinelist from "../WineCardList/fakeWineList";
import fakeComments from "./fakeComments";

function WineDetails() {
  const { id } = useParams();
  const data = fakeWinelist[id - 1];
  const [isEditing, setIsEditing] = useState(false);

  const ratingChanged = (newRating) => {
    console.warn(newRating); // envoyer la note dans la table de jointure note, si il y a déjà une ligne qui match le wineid et user id, la mettre à jour
  };

  const displayVueCommentsMode = () => {
    if (fakeComments.length) {
      return (
        <>
          <p>Commentaires :</p>
          {fakeComments.map((com) => {
            return (
              <>
                <p>{`${com.user} le ${com.date} :`}</p>
                <p>{com.content}</p>
              </>
            );
          })}
        </>
      );
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
      <>
        <p>Ajouter un commentaire :</p>
        <input type="text" />
      </>
    );
  };

  const handleComment = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="wineDetailsWrapper">
      <div className="wineInfo">
        <div className="mainWineInfo">
          <div className="imageBloc">
            <img src={data.image} alt="" />
          </div>
          <div className="mainWineInfoBloc">
            <p>{data.name}</p>
            <p>{data.year}</p>
            <p>Région : {data.area}</p>
            <p>{data.winemaker && `Vigneron : ${data.winemaker}`}</p>
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
          <p>Domaine : {data.domain}</p>
          <p>Cépage(s) : {data.grape}</p>
          <p>Teneur en alcool : {data.alcohol_content}%</p>
        </div>
      </div>
      <div className="separator" />
      <div className="wineCommentsAndRecipe">
        <div className="commentsHeaderAndWrapper">
          {isEditing ? displayAddCommentMode() : displayVueCommentsMode()}
        </div>
        <div className="buttonWrapper">
          <button type="button" onClick={handleComment}>
            Ajouter un commentaire
          </button>
          <button type="button">Télécharger la recette</button>
        </div>
      </div>
    </div>
  );
}

export default WineDetails;
