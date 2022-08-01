import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Home from "../home/Home";
const LogIn = () => {
  const [credentials, setCredentials] = useState({
    phone: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      const id = res.data.details._id;

      navigate("/");
      // navigate(<Home userId={id} />);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  // return (
  //   <div className="login">
  //     <div className="lContainer">
  //       <input
  //         type="text"
  //         placeholder="username"
  //         id="phone"
  //         onChange={handleChange}
  //         className="lInput"
  //       />
  //       <input
  //         type="text"
  //         placeholder="password"
  //         id="password"
  //         onChange={handleChange}
  //         className="lInput"
  //       />
  //       <button disabled={loading} onClick={handleClick} className="lButton">
  //         Login
  //       </button>
  //       {error && <span>{error.message}</span>}
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <Navbar />
      <Header type="post" />
      <div className="logContainer">
        <div className="logWrapper">
          <div className="loginEntry">
            <form className="loginForm">
              <label className="label">Phone Number</label>
              <input
                type="text"
                placeholder="phone"
                id="phone"
                onChange={handleChange}
                className="input"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="password"
                name="password"
                id="password"
                onChange={handleChange}
              ></input>
              {/* <button className='button'>Confirm</button> */}
              {/* <Link to="/"> */}
              <button
                disabled={loading}
                /*type="submit"*/ className="button"
                onClick={handleClick}
              >
                Confirm
              </button>
              {/* </Link> */}
            </form>
          </div>
          <div className="logImg">
            <h1>LOG IN</h1>
            <div className="as">
              <h6>Doesn't have an account? </h6>
              <Link to="/signin">
                <button className="buttonreg">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default LogIn;
