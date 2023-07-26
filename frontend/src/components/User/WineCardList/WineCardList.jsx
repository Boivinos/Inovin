import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import api from "../../Contexts/api";
import WineCard from "./WineCard/WineCard";
import SearchAndFilterMenu from "./ListButtons/SearchAndFilterMenu";
import UserContext from "../../Contexts/UserContext";

function WineCardList({ request, title, type }) {
  const [search, setSearch] = useState("");
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [colorFilterArr, setColorFilterArr] = useState([]);
  const [otherFilterArr, setOtherFilterArr] = useState([]);
  const [wineCardData, setWineCardData] = useState([]);
  const [wineNotes, setWineNotes] = useState([]);
  const { user } = useContext(UserContext);

  const { href } = window.location;
  const toggleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  useEffect(() => {
    setVisibleMenu(false);
    setWineCardData(undefined);
    api
      .get(request)
      .then((response) => setWineCardData(response.data))
      .catch((error) => console.error(error.message));
  }, [href, request]);

  useEffect(() => {
    api
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/${user?.id}/favoritesandnotes`
      )
      .then((response) => setWineNotes(response.data))
      .catch((error) => console.error(error.message));
  }, [href]);

  const matchNotesWithWines = (wineId) => {
    const note = wineNotes.filter((el) => el.wine_id === wineId)[0];

    return note?.moyenne_note && Number(note.moyenne_note).toFixed(1);
  };

  return (
    <>
      <p className="wineListTitle">Découvrez {title}</p>
      <div className="menuAndListWrapper">
        <button
          type="button"
          className="openFilterMenuButton"
          onClick={() => toggleMenu()}
          id={!visibleMenu ? "visibleButton" : "hiddenButton"}
        >
          Rechercher/filtrer
        </button>
        <SearchAndFilterMenu
          search={search}
          setSearch={setSearch}
          isSearching={search.length > 0}
          visibleMenu={visibleMenu}
          setVisibleMenu={setVisibleMenu}
          toggleMenu={toggleMenu}
          colorFilterArr={colorFilterArr}
          setColorFilterArr={setColorFilterArr}
          otherFilterArr={otherFilterArr}
          setOtherFilterArr={setOtherFilterArr}
        />

        <div className="wineCardList">
          {(!wineCardData || !wineCardData.length) && type === "favori" && (
            <div className="emptySelection">
              <p>Il n'y a pas encore de vin dans vos favoris !</p>
              <NavLink to="/vins" className="link">
                <button type="button">Découvrir tous les vins</button>
              </NavLink>
            </div>
          )}
          {(!wineCardData || !wineCardData.length) && type === "selection" && (
            <div className="emptySelection">
              <p>Il n'y a pas encore de vin dans votre sélection !</p>
              <NavLink to="/quiz" className="link">
                <button type="button">Répondre au quiz</button>
              </NavLink>
            </div>
          )}
          {wineCardData &&
            wineCardData
              .filter((wine) => {
                if (colorFilterArr.length) {
                  for (let i = 0; i < colorFilterArr.length; i += 1) {
                    if (colorFilterArr[i].filterFunc(wine)) {
                      return true;
                    }
                  }
                  return false;
                }
                return true;
              })
              .filter((wine) => {
                if (otherFilterArr.length) {
                  for (let i = 0; i < otherFilterArr.length; i += 1) { //parcourir le tableau de fonctions de filtrage
                    if (otherFilterArr[i].filterFunc(wine)) { //appliquer la fonction de filtrage de l'élément en cours du tableau à l'élément vin qu'on est en train de regarder
                      return true;
                    }
                  }
                  return false;
                }
                return true; //si aucun filtre n'est coché on ne filtre rien donc on renvoie tjr vrai
              })
              .filter((wine) =>
                search !== "Rechercher..."
                  ? wine.name.toLowerCase().includes(search.toLowerCase()) ||
                    wine.domain.toLowerCase().includes(search.toLowerCase())
                  : true
              )
              .map((wine) => {
                return (
                  <WineCard
                    name={wine.name}
                    image={wine.image}
                    domain={wine.domain}
                    key={wine.id}
                    id={wine.id}
                    note={
                      matchNotesWithWines(wine.id)
                        ? Number(matchNotesWithWines(wine.id))
                        : 0
                    }
                  />
                );
              })}
        </div>
      </div>
    </>
  );
}
WineCardList.propTypes = {
  request: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default WineCardList;
