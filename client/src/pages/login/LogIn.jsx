import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const { dispatch } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await axios.post("/auth/login2", credentials);

      // Login successful
      setLoading(false);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: response.data, username: response.data.user.username },
      });

      navigate("/");
    } catch (error) {
      setLoading(false);
      setError("Invalid phone number or password");
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="post" />
      <div className="logContainer">
        <div className="logWrapper">
          <div className="loginEntry">
            <form className="loginForm" onSubmit={handleLogin}>
              <label className="label">Phone Number</label>
              <input
                type="text"
                placeholder="phone"
                name="phone"
                onChange={handleChange}
                className={`input ${error && "input-error"}`} // Apply input-error class if there is an error
              />
              <label className="label">Password</label>
              <input
                type="password"
                className={`input ${error && "input-error"}`} // Apply input-error class if there is an error
                placeholder="password"
                name="password"
                onChange={handleChange}
              />

              <button disabled={loading} type="submit" className="button">
                Confirm
              </button>
            </form>
          </div>
          <div className="logImg">
            <h1>LOG IN</h1>
            <div className="as">
              <h6>Don't have an account? </h6>
              <Link to="/signin">
                <button className="buttonreg">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default LogIn;
