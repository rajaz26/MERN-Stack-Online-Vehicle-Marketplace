import "./signIn.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null); // State for registration status
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/register",
        {
          username,
          email,
          password,
          phone,
        }
      );

      // Registration successful
      setRegistrationStatus("success");

      // Redirect to login page after a delay
      setTimeout(() => {
        navigate("/login"); // Use navigate function instead of history.push
      }, 2000);
    } catch (error) {
      console.error(error.response.data);
      // Registration failed
      setRegistrationStatus("failed");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="post" />
      <div className="signContainer">
        <div className="signWrapper">
          <div className="signImg">
            <h1>SIGN UP</h1>
            <h6>Enter the required details to create an account</h6>
          </div>
          <div className="signinEntry">
            <form onSubmit={registerUser} className="signinForm">
              <label className="label">Username</label>
              <input
                type="text"
                name="name"
                className="input"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label className="label">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label className="label">Email Address</label>
              <input
                type="text"
                name="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="button" type="submit">
                Confirm
              </button>
              {/* Registration status model */}
              {registrationStatus === "success" && (
                <div className="registrationSuccess">
                  Registration Successful!
                </div>
              )}
              {registrationStatus === "failed" && (
                <div className="registrationFailed">Incorrect Data !</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
