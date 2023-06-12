import "./vehicle.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import PostList from "../../components/postList/PostList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Vehicle = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/used/get/${id}`);
  console.log(data);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleOpen = () => {
    setSlideNumber(0);
    setOpen3(true);
  };

  const handleMove = (direction, num) => {
    num = num - 1;
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? num : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === num ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClick3 = () => {
    setOpen3(true);
  };
  const handleClose = () => {
    setOpen3(false);
  };
  const butClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      <Header type="post" />

      {loading && !data ? (
        "Loading"
      ) : error ? (
        "Error fetching data" // Display an error message if there's an error
      ) : (
        <div className="VehicleContainer">
          {open && (
            <div className="contact">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />

              <div className="VehicleDetailsPrice">
                <h2 className="textStyle">
                  Please login to view the contact number
                </h2>
                <button className="contactBut" onClick={butClick}>
                  Login
                </button>
              </div>
            </div>
          )}
          {open2 && data && (
            <div className="contact">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen2(false)}
              />

              <div className="sliderContact">
                <h2 className="textStyle">The contact Number is :</h2>
                <button className="contactBut">0{data.contact}</button>
              </div>
            </div>
          )}
          {open3 && data && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={handleClose}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l", data.images.length)}
              />
              <div className="sliderWrapper">
                <img
                  src={data.images[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r", data.images.length)}
              />
            </div>
          )}
          <div className="VehicleWrapper">
            {user ? (
              <button className="bookNow" onClick={handleClick2}>
                Contact Seller
              </button>
            ) : (
              <button className="bookNow" onClick={handleClick}>
                Contact Seller
              </button>
            )}
            <h1 className="VehicleTitle">
              {data && `${data.yearmodel} ${data.make} ${data.model}`}
            </h1>
            <div className="VehicleAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data && data.city}</span>
            </div>
            <span className="VehicleDistance">
              PKR {data && data.price} Lacs
            </span>
            <span className="VehiclePriceHighlight">
              Mileage : {data && data.mileage} km
            </span>
            <span className="VehicleDistance">
              Condition : {data && data.condition}
            </span>
            {data.images && data.images.length > 0 ? (
              <div className="VehicleImages">
                {data.images.map((image, i) => (
                  <div className="VehicleImgWrapper" key={i}>
                    <img
                      onClick={() => handleOpen(i)}
                      src={image}
                      alt=""
                      className="VehicleImg"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div>No images available</div>
            )}

            <div className="VehicleDetailsPrice">
              <h1>Lets get it done</h1>
              <span>
                Login and contact the seller. Meet him, check the vehicle, and
                finalize the deal
              </span>
              <h2>
                <b>PKR {data && data.price} </b>
              </h2>
              {user ? (
                <button className="contactBtn" onClick={handleClick2}>
                  Contact Seller
                </button>
              ) : (
                <button className="contactBtn" onClick={handleClick}>
                  Contact Seller
                </button>
              )}
            </div>
          </div>
          <PostList />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Vehicle;
