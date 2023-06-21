import "./navbar.css";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Navbar = (userId) => {
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  let id = 0;
  if (user) {
    id = user.user.user._id;
  }
  const logout = async (e) => {
    try {
      dispatch({ type: "LOGIN_FAILURE" });
      navigate("/");
      console.log("Logout pass");
    } catch (err) {
      console.log(err, "Logout fail");
    }
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        {/* <button onClick={handle}>Logout</button> */}
        <Link
          // to={`/${user._id}`}
          to={`/`}
          style={{ color: "white", textDecoration: "none" }}
        >
          <img src="/logo.png" alt="" className="garageLogo" />
        </Link>

        {user ? (
          <div>
            <Link
              to={`/profile/${id}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              {user.username}
            </Link>

            <button className="navButton" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/signin">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
