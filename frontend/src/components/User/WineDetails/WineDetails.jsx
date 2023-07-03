import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import VueComments from "./Comments/VueComments";
import CommentButton from "./Comments/CommentButton";
import AddComments from "./Comments/AddComments";
import FavoriteButton from "../WineCardList/WineCard/FavoriteButton";
import UserContext from "../../Contexts/UserContext";

function WineDetails() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [wineDetailsData, setWineDetailsData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [note, setNote] = useState(location.state.wineNote);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/wines/${id}`)
      .then((response) => setWineDetailsData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/wines/${id}/comments`)
      .then((response) => setCommentsData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  const ratingChanged = (newRating) => {
    setNote(newRating);
    const body = {
      wine_id: id,
      note: newRating,
      user_id: user.id,
    };

    axios
      .post("http://localhost:8000/api/usernotes", body)
      .then((response) => {
        console.warn(response);
      })
      .catch((error) => {
        console.error(error);
      });
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
      <div
        className="returnButtonWrapper"
        onClick={() => navigate(-1)}
        onKeyDown={() => navigate(-1)}
        role="button"
        tabIndex={0}
      >
        <img src="https://i.ibb.co/PchSHGr/60793.png" alt="" />
        <p>Retour</p>
      </div>

      <div className="wineInfo">
        <div className="mainWineInfo">
          <div className="imageBloc">
            <img src={wineDetailsData.image} alt="" />
          </div>
          <div className="mainWineInfoBloc">
            <p>{wineDetailsData.name}</p>
            <p>{wineDetailsData.year}</p>
            <p>Région : {wineDetailsData.region}</p>
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
              value={note} // recuperer les notes depuis la table de jointure note et faire une moyenne
            />
            {!note && <p>Il n'y a pas encore de note pour ce vin</p>}
          </div>
        </div>
        <div className="detailedWineInfo">
          <p>Informations sur le vin :</p>
          <p>Domaine : {wineDetailsData.domain}</p>
          <p>Cépage(s) : {wineDetailsData.grape}</p>
          <p>Teneur en alcool : {wineDetailsData.alcohol_content}%</p>
        </div>
        <div className="favoriteButton">
          <FavoriteButton wineId={Number(id)} />
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
            commentsData={commentsData}
            setCommentsData={setCommentsData}
          />
          <button type="button">Télécharger la recette</button>
        </div>
      </div>
    </div>
  );
}

export default WineDetails;
