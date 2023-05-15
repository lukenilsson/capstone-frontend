import axios from "axios";
import { Link } from "react-router-dom";

export function LogoutLink() {
  const handleClick = () => {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/login";
  };

  return (
    <Link to="/login" onClick={handleClick} className="text-decoration-none">
      Logout
    </Link>
  );
}
