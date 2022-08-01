import "./navbar.css";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Navbar = (userId) => {
  const { user, dispatch } = useContext(AuthContext);
  // let set = false;
  // // {
  // //   user ? (set = true) : (set = false);
  // // }
  const navigate = useNavigate();
  const id = userId;
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
          <span className="logo">The Garage</span>
        </Link>

        {user ? (
          <div>
            <Link
              to={`/profile/${user._id}`}
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
