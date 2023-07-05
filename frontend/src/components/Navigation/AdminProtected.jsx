import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Contexts/UserContext";

const AdminProtected = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isAdmin) navigate("/");
  }, []);

  return children;
};

export default AdminProtected;
