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

function Router() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscription" element={<Inscription />} />
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

            urlRetour="/admin/vin"

            message="Vos Modifications de l'utilisateur on été prises en compte avec succès !"
          />
        }
      />
      <Route
        path="/modification/vin"
        element={
          <AdminModificationValidation
            urlRetour="/admin/vin"
            message="Les modifications du vin on été prises en compte avec succès !"
          />
        }
      />
      <Route
        path="/suppression/utilisateur"
        element={
          <AdminModificationValidation
          
            urlRetour="/admin/vin"

            message="L'utilisateur a bien été supprimer avec succés !"
          />
        }
      />
      <Route
        path="/suppression/vin"
        element={
          <AdminModificationValidation
            urlRetour="/admin/vin"
            message="La suppression du vin a bien été prises en compte !"
          />
        }
      />
      <Route
        path="/ajout/utilisateur"
        element={
          <AdminModificationValidation

            urlRetour="/admin/vin"

            message="L'ajout d'un utilisateur a bien été prises en compte avec succés !"
          />
        }
      />
      <Route
        path="/ajout/vin"
        element={
          <AdminModificationValidation
            urlRetour="/admin/vin"
            message="L'ajout d'un vin a bien été prises en compte avec succés !"
          />
        }
      />

      {/* routes de l'utilisateur Admin - gestion des utilisateurs et des vins : */}
      {/* useradminlist */}
      <Route path="/admin/utilisateur" element={<UserAdminList />} />
      {/* useradmindetails/:id */}
      <Route path="/admin/utilisateur/:id" element={<UserAdminDetails />} />
      {/* /addnewuser */}
      <Route path="/admin/utilisateur/ajout" element={<AddNewUser />} />
      {/* wineadminlist */}
      <Route path="/admin/vin" element={<WineAdminList />} />
      {/* /wineadmindetails/:id */}
      <Route path="/admin/vin/:id" element={<WineAdminDetails />} />
      {/* /ajoutervin */}
      <Route path="/admin/vin/ajout" element={<AddNewWine />} />
      <Route
        path="/adminmodificationvalidation"
        element={<AdminModificationValidation />}
      />
    </Routes>
  );
}

export default Router;
