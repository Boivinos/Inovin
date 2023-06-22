import React from "react";
import { Routes, Route } from "react-router-dom";
import Connection from "../Globals/Home/Authentification/Connection";
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

function Router() {
  const id = 1; // replace with user id
  return (
    <Routes>
      <Route path="/" element={<Connection />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route
        path="/wineCardList"
        element={
          <WineCardList
            request="http://localhost:8000/api/wines"
            title={"l'ensemble de nos vins"}
          />
        }
      />
      <Route
        path="/wineCardSelection"
        element={
          <WineCardList
            request={`http://localhost:8000/api/selection/${id}`}
            title="votre sélection personnalisée"
          />
        }
      />
      <Route path="/wineDetails/:id" element={<WineDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/glossary" element={<Glossary />} />
      <Route path="/validationMessage" element={<ValidationMessage />} />

      {/* routes de l'utilisateur Admin: */}
      <Route path="/userAdminList" element={<UserAdminList />} />
      <Route path="/userAdminDetails" element={<UserAdminDetails />} />
      <Route path="/wineAdminList" element={<WineAdminList />} />
      <Route path="/wineAdminDetails" element={<WineAdminDetails />} />
      <Route
        path="/AdminModificationValidation"
        element={<AdminModificationValidation />}
      />
    </Routes>
  );
}

export default Router;
