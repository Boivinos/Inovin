import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Contexts/UserContext";

const Protected = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, []);

  return children;
};

export default Protected;
