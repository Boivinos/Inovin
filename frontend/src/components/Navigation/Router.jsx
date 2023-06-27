import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Inscription from "../Globals/Home/Authentification/Inscription";
import Quiz from "../User/Quiz/Quiz";
import WineCardList from "../User/WineCardList/WineCardList";
import WineDetails from "../User/WineDetails/WineDetails";
import Contact from "../Globals/Contact/Contact";
import Glossary from "../Globals/Glossary/Glossary";
import Profile from "../User/Profile/Profile";
import ValidationMessage from "../Globals/ValidationMessage/ValidationMessage";
import UserAdminList from "../Admin/UserAdminList/UserAdminList";
import WineAdminList from "../Admin/WineAdminList/WineAdminList";
import UserAdminDetails from "../Admin/UserAdminList/UserDetails/UserAdminDetails";
import WineAdminDetails from "../Admin/WineAdminList/WineAdminDetails";
import AdminModificationValidation from "../Admin/AdminModificationValidation";
import AddNewUser from "../Admin/UserAdminList/AddNewUser/AddNewUser";
import UserContext from "../Contexts/UserContext";
import Home from "../Globals/Home/Home";

function Router() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profil" element={<Profile />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route
        path="/vins"
        element={
          <WineCardList
            request="http://localhost:8000/api/wines"
            title={"l'ensemble de nos vins"}
            type="all"
          />
        }
      />
      <Route
        path="/vins/selection"
        element={
          <WineCardList
            request={`http://localhost:8000/api/selection/${user && user.id}`}
            title="votre sélection personnalisée"
            type="selection"
          />
        }
      />
      <Route
        path="/vins/favoris"
        element={
          <WineCardList
            request={`http://localhost:8000/api/${user && user.id}/favorites`}
            title="vos vins favoris"
            type="favori"
          />
        }
      />
      <Route path="/vins/detail/:id" element={<WineDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/lexique" element={<Glossary />} />
      <Route path="/validationMessage" element={<ValidationMessage />} />

      {/* routes de l'utilisateur Admin - gestion des utilisateurs et des vins : */}

      <Route path="/useradminlist" element={<UserAdminList />} />
      <Route path="/useradmindetails/:id" element={<UserAdminDetails />} />
      <Route path="/addnewuser" element={<AddNewUser />} />
      <Route path="/wineadminlist" element={<WineAdminList />} />
      <Route path="/wineadmindetails" element={<WineAdminDetails />} />

      <Route
        path="/adminmodificationvalidation"
        element={<AdminModificationValidation />}
      />
    </Routes>
  );
}

export default Router;
