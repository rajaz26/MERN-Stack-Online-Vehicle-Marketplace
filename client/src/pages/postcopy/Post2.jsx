import React from "react";
import "./post.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Post2 = (userId) => {
  // const { user } = useContext(AuthContext);
  const { id } = useParams();
  // const getId = () => {
  //   id = req.params.id;
  // };

  const { data, loading, error } = useFetch(`/used/get/${id}`);

  const [make, setMake] = useState(data.make);
  const [model, setModel] = useState(data.model);
  const [yearmodel, setYearModel] = useState(data.yearmodel);
  const [color, setColor] = useState(data.color);
  const [average, setAverage] = useState(data.average);
  const [mileage, setMileage] = useState(data.mileage);
  const [city, setCity] = useState(data.city);
  const [transmission, setTransmission] = useState(data.transmission);
  const [price, setPrice] = useState(data.price);

  const postAd = async (event) => {
    event.preventDefault();
    const body = {
      make: make,
      model: model,
      yearmodel: yearmodel,
      color: color,
      average: average,
      mileage: mileage,
      city: city,
      transmission: transmission,
      price: price,
    };

    // const userId = req.params.userId;
    const response = await axios.put(`/used/${id}`, body);

    alert("Ad Updated Successfully");
  };

  return (
    <div>
      <Navbar />
      <Header type="post" />
      <div className="Container">
        <div className="Wrapper">
          <div className="headingContainer">
            <div className="heading">
              <h1> AD Update !</h1>
            </div>
          </div>

          <div className="details">
            <span>
              <label className="label">Make</label>
              <input
                name="make"
                type="text"
                className="data"
                placeholder={data.make}
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
                placeholder={data.model}
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
                placeholder={data.yearmodel}
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
                placeholder={data.mileage}
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
                placeholder={data.average}
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
                placeholder={data.price}
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
                placeholder={data.color}
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
                placeholder={data.city}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </span>
            <span>
              <label className="label">Vehicle Images</label>
              <input type="file" class="custom-file-input" />
            </span>
          </div>

          <div className="Confirm">
            <button className="button a" onClick={postAd}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post2;
