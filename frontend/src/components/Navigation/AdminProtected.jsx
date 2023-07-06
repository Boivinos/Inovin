import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AdminProtected = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const infos = jwtDecode(token);
      if (!infos) {
        navigate("/");
      } else if (!infos.isAdmin) {
        navigate("/");
      }
    }
  }, []);

  return children;
};

export default AdminProtected;
