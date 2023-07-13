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
import Protected from "./Protected";
import Error404 from "./Error404";
import AddNewWine from "../Admin/WineAdminList/AddNewWine";
import AdminProtected from "./AdminProtected";
import ResetPassword from "../Globals/Home/Authentification/ResetPassword";
import ForgotPassword from "../Globals/Home/Authentification/ForgotPassword";

function Router() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/nouveau-mot-de-passe" element={<ResetPassword />} />
      <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} />
      <Route path="*" element={<Error404 />} />

      <Route
        path="/profil"
        element={
          <Protected>
            <Profile />
          </Protected>
        }
      />
      <Route
        path="/quiz"
        element={
          <Protected>
            <Quiz />
          </Protected>
        }
      />
      <Route
        path="/vins"
        element={
          <Protected>
            <WineCardList
              request="http://localhost:8000/api/wines"
              title={"l'ensemble de nos vins"}
              type="all"
            />
          </Protected>
        }
      />
      <Route
        path="/vins/selection"
        element={
          <Protected>
            <WineCardList
              request={`http://localhost:8000/api/selection/${user && user.id}`}
              title="votre sélection personnalisée"
              type="selection"
            />
          </Protected>
        }
      />
      <Route
        path="/vins/favoris"
        element={
          <Protected>
            <WineCardList
              request={`http://localhost:8000/api/${user && user.id}/favorites`}
              title="vos vins favoris"
              type="favori"
            />
          </Protected>
        }
      />
      <Route
        path="/vins/detail/:id"
        element={
          <Protected>
            <WineDetails />
          </Protected>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/lexique" element={<Glossary />} />

      <Route
        path="/validationMessage"
        element={
          <Protected>
            <ValidationMessage />
          </Protected>
        }
      />
      <Route
        path="/modification/utilisateur"
        element={
          <AdminModificationValidation
            urlRetour="/admin/utilisateur"
            message="Les modifications de l'utilisateur on été prises en compte avec succès !"
          />
        }
      />
      <Route
        path="/modification/vin"
        element={
          <AdminModificationValidation
            urlRetour="/admin/vin"
            message="Les modifications du vin ont été prises en compte avec succès !"
          />
        }
      />
      <Route
        path="/suppression/utilisateur"
        element={
          <AdminModificationValidation
            urlRetour="/admin/utilisateur"
            message="L'utilisateur a bien été supprimé !"
          />
        }
      />
      <Route
        path="/suppression/vin"
        element={
          <AdminModificationValidation
            urlRetour="/admin/vin"
            message="La suppression du vin a bien été prise en compte !"
          />
        }
      />
      <Route
        path="/ajout/utilisateur"
        element={
          <AdminModificationValidation
            urlRetour="/admin/utilisateur"
            message="L'ajout d'un utilisateur a bien été pris en compte !"
          />
        }
      />
      <Route
        path="/ajout/vin"
        element={
          <AdminModificationValidation
            urlRetour="/admin/vin"
            message="L'ajout d'un vin a bien été pris en compte !"
          />
        }
      />

      {/* routes de l'utilisateur Admin - gestion des utilisateurs et des vins : */}
      {/* useradminlist */}
      <Route
        path="/admin/utilisateur"
        element={
          <AdminProtected>
            <UserAdminList />
          </AdminProtected>
        }
      />
      {/* useradmindetails/:id */}
      <Route
        path="/admin/utilisateur/:id"
        element={
          <AdminProtected>
            <UserAdminDetails />
          </AdminProtected>
        }
      />
      {/* /addnewuser */}
      <Route
        path="/admin/utilisateur/ajout"
        element={
          <AdminProtected>
            <AddNewUser />
          </AdminProtected>
        }
      />
      {/* wineadminlist */}
      <Route
        path="/admin/vin"
        element={
          <AdminProtected>
            <WineAdminList />
          </AdminProtected>
        }
      />
      {/* /wineadmindetails/:id */}
      <Route
        path="/admin/vin/:id"
        element={
          <AdminProtected>
            <WineAdminDetails />
          </AdminProtected>
        }
      />
      {/* /ajoutervin */}
      <Route
        path="/admin/vin/ajout"
        element={
          <AdminProtected>
            <AddNewWine />
          </AdminProtected>
        }
      />
    </Routes>
  );
}

export default Router;
