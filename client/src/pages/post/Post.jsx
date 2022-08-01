import React from "react";
import "./post.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Post = () => {
  const { user } = useContext(AuthContext);

  const id = user._id;

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [yearmodel, setYearModel] = useState("");
  const [color, setColor] = useState("");
  const [average, setAverage] = useState("");
  const [mileage, setMileage] = useState("");
  const [city, setCity] = useState("");
  const [transmission, setTransmission] = useState("manual");
  const [price, setPrice] = useState("");
  const [fileName, setFileName] = useState("");
  const [condition, setCondition] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files);
  };

  // const postAd = async (event) => {
  //   event.preventDefault();
  //   const body = {
  //     make: make,
  //     model: model,
  //     yearmodel: yearmodel,
  //     color: color,
  //     average: average,
  //     mileage: mileage,
  //     city: city,
  //     transmission: transmission,
  //     price: price,
  //   };

  //   const response = await axios.post(`/auth/post/${id}`, body);

  //   const data = await response.data;
  //   alert("Ad Posted Successfully");
  // };

  const postAd = async (event) => {
    event.preventDefault();

    let imagesarr = [];
    console.log(typeof fileName);
    for (const file in fileName) {
      if (fileName.hasOwnProperty(file)) {
        let fileInstance = fileName[file];
        imagesarr.push(fileInstance["name"]);
      }
    }
    console.log(imagesarr);
    const body = {
      make: make,
      model: model,
      yearmodel: yearmodel,
      average: average,
      mileage: mileage,
      yearmodel: yearmodel,
      price: price,
      city: city,
      color: color,
      transmission: transmission,
      contact: user.phone,
      images: imagesarr,
      condition: condition,
    };
    console.log(body);
    const response = await axios
      .post(`/auth/post/${id}`, body)
      .then((res) => console(res.data), alert("Ad Posted Successfully"))
      .catch((err) => {
        console.log("Add Posting failed", err);
      });
  };
  return (
    <div>
      <Navbar />
      <Header type="post" />
      <div className="Container">
        <div className="Wrapper">
          <div className="headingContainer">
            <div className="heading">
              <h1>Post an AD Now !</h1>
            </div>
          </div>
          <form
            onSubmit={postAd}
            encType="multipart/form-data "
            className="Wrappera"
          >
            <div className="details">
              <span>
                <label className="label">Make</label>
                <input
                  name="make"
                  type="text"
                  className="data"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                />
              </span>
              <span>
                <label className="label">Model</label>
                <input
                  name="model"
                  type="text"
                  className="data"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </span>
              <span>
                <label className="label">Model Year</label>
                <input
                  type="text"
                  name="yearmodel"
                  className="data"
                  value={yearmodel}
                  onChange={(e) => setYearModel(e.target.value)}
                />
              </span>
              <span>
                <label className="label">Mileage</label>
                <input
                  type="text"
                  name="mileage"
                  className="data"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                />
              </span>
              <span>
                <label className="label">Average</label>
                <input
                  type="text"
                  name="average"
                  className="data"
                  value={average}
                  onChange={(e) => setAverage(e.target.value)}
                />
              </span>
              <span>
                <label className="label">Price</label>
                <input
                  type="text"
                  name="price"
                  className="data"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </span>
              <span>
                <label className="label">Color</label>
                <input
                  type="text"
                  name="color"
                  className="data"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </span>
              <span>
                <label className="label">Transmission</label>
                {/* <input type="text" className="data" /> */}
                <select
                  defaultValue={"DEFAULT"}
                  className="selects"
                  name="transmission"
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Choose type of transmission
                  </option>
                  <option className="option">Auto</option>
                  <option className="option">Manual</option>
                </select>
              </span>
              <span>
                <label className="label">City</label>
                <input
                  type="text"
                  className="data"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </span>
              <span>
                <label className="label">Vehicle Images</label>
                <input
                  type="file"
                  filename="images"
                  class="custom-file-input"
                  onChange={onChangeFile}
                  multiple
                />
              </span>
              <span>
                <label className="label">Condition</label>
                <input
                  type="text"
                  name="condition"
                  className="data"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                />
              </span>
            </div>

            <div className="Confirm">
              {/* <Link to={`/info/${user._id}`}> */}
              <button className="button a" type="submit">
                Confirm
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
