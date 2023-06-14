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

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Connection />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/wineCardList" element={<WineCardList />} />
      <Route path="/wineDetails/:id" element={<WineDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/glossary" element={<Glossary />} />
    </Routes>
  );
}

export default Router;
