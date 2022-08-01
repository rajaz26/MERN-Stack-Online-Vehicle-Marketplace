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
  // const id = "62b8615137bd397f5b010388";
  const { data, loading, error } = useFetch(`/used/get/${id}`);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const { car } = useFetch(`/auth/find/62b06cf5ff79799755c349f2`);
  // console.log(car);

  const photos = [
    {
      src: "https://media.ed.edmunds-media.com/honda/civic/2022/oem/2022_honda_civic_sedan_si_fq_oem_1_1280x855.jpg",
    },
    {
      src: "https://media.ed.edmunds-media.com/honda/civic/2022/oem/2022_honda_civic_sedan_si_rq_oem_1_1280x855.jpg",
    },
    {
      src: "https://media.ed.edmunds-media.com/honda/civic/2022/oem/2022_honda_civic_sedan_si_r_oem_1_1280x855.jpg",
    },
    {
      src: "https://media.ed.edmunds-media.com/honda/civic/2022/oem/2022_honda_civic_sedan_si_edetail_oem_1_1280x855.jpg",
    },
    {
      src: "https://media.ed.edmunds-media.com/honda/civic/2022/oem/2022_honda_civic_sedan_si_w_oem_1_1280x855.jpg",
    },
    {
      src: "https://media.ed.edmunds-media.com/honda/civic/2022/oem/2022_honda_civic_sedan_si_detail_oem_1_1280x855.jpg",
    },
  ];

  const handleOpen = () => {
    setSlideNumber(0);
    setOpen3(true);
  };
  const x = 0;
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
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
    // navigate("/login");

    setOpen3(true);
  };
  const butClick = () => {
    navigate("/login");
  };
  // var img = [];
  var img = Object.assign([], data.images);
  console.log("Yel", img);
  // img[0] = data.images[0];
  // img[1] = data.images[1];
  return (
    <div>
      <Navbar />
      <Header type="post" />
      {loading ? (
        "Loading"
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
          {open2 && (
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
          {open3 && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen3(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={`http://127.0.0.1:5500/images/${img[slideNumber]}`}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}

          {/* {loading ? (
        "Loading"
      ) : (
        <div className="VehicleContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={photos[slideNumber].src}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          {openModal && (
            <div className="slider2">
              <FontAwesomeIcon icon={faCircleXmark} className="close" />
              <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" />
              <div className="sliderWrapper">
                <h1>Hello</h1>
              </div>
              <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" />
            </div>
          )} */}

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
              {data.yearmodel} {data.make} {data.model}
            </h1>
            <div className="VehicleAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.city}</span>
            </div>
            <span className="VehicleDistance">PKR {data.price} Lacs</span>
            <span className="VehiclePriceHighlight">
              Mileage : {data.mileage} km
            </span>
            <span className="VehicleDistance">
              Condition : {data.condition}
            </span>
            <div className="VehicleImages">
              {/* {console.log("Apki images:", data.images)}
              {console.log("Hello", img)} */}
              {img.map((image, i) => (
                <div className="VehicleImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={`http://127.0.0.1:5500/images/${img[i]}`}
                    alt=""
                    className="VehicleImg"
                  />
                </div>
              ))}
              {/* {data.map((images, i) => ( */}
              {/* {data.map((images, i) => ( */}
              {/* <div className="VehicleImgWrapper" key={1}>
                <img
                  onClick={() => handleOpen(1)}
                  src={`http://127.0.0.1:5500/images/${img[1]}`}
                  alt=""
                  className="VehicleImg"
                />
              </div> */}
            </div>
            {/* <div className="VehicleDetails">
              <div className="VehicleDetailsTexts">
                <h1 className="VehicleTitle">Vehicle Description</h1>
                <p className="VehicleDesc">
                  The Civic has been an icon in the Honda History since its
                  introduction almost 50 years ago and has evolved over the
                  years keeping tradition in mind as well as embracing various
                  technological and design innovations. The Civic has been an
                  icon in the Honda History since its introduction almost 50
                  years ago and has evolved over the years keeping tradition in
                  mind as well as embracing various technological and design
                  innovations. The Civic has been an icon in the Honda History
                  since its introduction almost 50 years ago and has evolved
                  over the years keeping tradition in mind as well as embracing
                  various technological and design innovations.
                </p>
              </div> */}

            <div className="VehicleDetailsPrice">
              <h1>Lets get it done</h1>
              <span>
                Login and contact the seller. Meet him , check the vehicle and
                finalize the deal
              </span>
              <h2>
                <b>PKR {data.price} Lacs</b>
              </h2>
              {user ? (
                <button onClick={handleClick2}>Contact Seller</button>
              ) : (
                <button onClick={handleClick}>Contact Seller</button>
              )}
            </div>
          </div>

          <PostList />
        </div>
      )}
    </div>
  );
};

export default Vehicle;
