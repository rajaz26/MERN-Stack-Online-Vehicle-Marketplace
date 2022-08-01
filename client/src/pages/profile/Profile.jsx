import React from "react";
import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// import Header from "../../components/header/Header";
import { useState } from "react";
import axios from "axios";

//register function

const Profile = () => {
  const { user } = useContext(AuthContext);
  const id = user._id;
  const { data, loading, error } = useFetch(`/auth/find/${id}`);

  const [username, setUserName] = useState(user.username);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  // const body = {
  //   make: make,
  //   model: model,
  //   yearmodel: yearmodel,
  //   color: color,
  //   average: average,
  //   mileage: mileage,
  //   city: city,
  //   transmission: transmission,
  //   price: price,
  // };

  // const [user1, setUser1] = useState({
  //   username: user.username,
  //   email: user.email,
  //   phone: user.userphone,
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser1({
  //     ...user1, //spread operator
  //     [name]: value,
  //   });
  // };

  const Update = async () => {
    const body = { username, email, phone };
    // const body = {
    //   username1: setUserName,
    //   email1: setEmail,
    //   phone1: setPhone,
    // };

    if (username && email && phone) {
      axios.put(`/auth/profile/${id}`, body).then((res) => console.log(res));
      console.log(body);
    } else {
      alert("invalid input");
    }
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
            <button className="button" onClick={Update}>
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
    </div>
  );
};
// };
export default Profile;
