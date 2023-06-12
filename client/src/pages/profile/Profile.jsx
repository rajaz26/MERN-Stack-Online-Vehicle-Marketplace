import React, { useState } from "react";
import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// import Header from "../../components/header/Header";
import axios from "axios";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const id = user.user.user._id;
  const { data, loading, error } = useFetch(`/auth/find/${id}`);

  const [username, setUserName] = useState(user.username);
  const [phone, setPhone] = useState(user.user.user.phone);
  const [email, setEmail] = useState(user.user.user.email);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleUpdate = async () => {
    const body = { username, email, phone };
    if (username && email && phone) {
      try {
        await axios.put(`/auth/profile/${id}`, body);
        setModalIsOpen(true);
      } catch (error) {
        console.error("Update failed", error);
      }
    } else {
      alert("Invalid input");
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Navbar />
      {/* <Header type="profile"/> */}
      <div className="Container1">
        <div className="Wrapper1">
          <div className="profileHeading">
            <h1 className="Profile">Profile</h1>
          </div>
          <div className="profiledata">
            <label className="label a">Username</label>
            <input
              type="text"
              className="input"
              placeholder={data.username}
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            {/* <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder={data.password}
            ></input> */}
            <label className="label">Phone Number</label>
            <input
              type="text"
              className="input"
              placeholder={data.phone}
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <label className="label">Email Address</label>
            <input
              type="text"
              className="input"
              placeholder={data.email}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button className="button" onClick={handleUpdate}>
              Update
            </button>
            <Link
              to={`/info/${id}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              <button className="button">View Ads</button>
            </Link>
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <div className="modal">
          <div className="modalContent">
            <h2 className="modalHeading">Profile Updated Successfully</h2>
            <button className="modalButton" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
