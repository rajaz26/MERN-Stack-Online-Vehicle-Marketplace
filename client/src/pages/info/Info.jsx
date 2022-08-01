import React, { useState } from "react";
import "./info.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import View from "../../components/viewad/View";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Delete from "./Delete";

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleArrowLeft,
//   faCircleArrowRight,
//   faCircleXmark,
//   faLocationDot,
// } from "@fortawesome/free-solid-svg-icons";
const Info = () => {
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const id = "62b8615137bd397f5b010388";

  // const location = useLocation();
  // const id = location.pathname.split("/")[2];

  const { user } = useContext(AuthContext);
  const id = user._id;

  const { data, loading, error } = useFetch(`/auth/info/${id}`);

  var date;
  var result;
  return (
    <div>
      <Navbar />
      <Header type="post" />
      <div className="title">
        <h1>Your Posted Ads :</h1>
      </div>
      <hr className="line" />

      <div className="Container2">
        {data.map((item) => (
          <div key={`${item._id}`} name={`${item._id}`}>
            <div className="c">
              {(date = item.createdAt)}
              {(result = date.slice(0, 10))}
            </div>
            <div className="viewItem">
              <img
                // src="https://cdn.carbuzz.com/gallery-images/original/192000/200/192288.jpg"
                src={`http://127.0.0.1:5500/images/${item.images[0]}`}
                className="viewImg"
              />

              <div className="viewDesc">
                <h1 className="viewTitle">
                  {item.make} {item.model}
                </h1>
                <div className="viewSubtitl">Model Year : {item.yearmodel}</div>
                <div>
                  <div className="viewSubtitle">Date Posted :</div>
                  {/* <div className="viewTaxiOp">
                  {item.createdAt.slice(0, 10)}
                </div> */}
                  <div className="viewTaxiOp">{result}</div>
                </div>
              </div>
              <div className="viewDetails">
                <div className="viewDetailTexts">
                  <Link to={`/used/${item._id}`}>
                    <button className="viewCheckButton">View Ad</button>
                  </Link>
                  <Delete item={item._id} />

                  <Link to={`/post2/${item._id}`}>
                    <button className="viewCheckButtone">Edit Ad</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* })} */}
        {/* <View />
        <View />
        <View /> */}
      </div>
    </div>
  );
};

export default Info;
