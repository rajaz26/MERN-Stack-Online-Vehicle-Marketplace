import "./post.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import Modal from "react-modal";
import loader from "./loader.gif";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Post2 = (userId) => {
  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const { data, loading, error } = useFetch(`/used/get/${id}`);
  const [make, setMake] = useState(data.make || "");
  const [model, setModel] = useState(data.model || "");
  const [yearmodel, setYearModel] = useState(data.yearmodel || "");
  const [color, setColor] = useState(data.color || "");
  const [average, setAverage] = useState(data.average || "");
  const [mileage, setMileage] = useState(data.mileage || "");
  const [city, setCity] = useState(data.city || "");
  const [transmission, setTransmission] = useState(data.transmission || "");
  const [price, setPrice] = useState(data.price || "");
  const [condition, setCondition] = useState(data.condition || "");
  const [adLoading, setAdLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [files, setFiles] = useState(data.images || []);
  const navigate = useNavigate();

  // Update the state when the data object changes
  useEffect(() => {
    setMake(data.make || "");
    setModel(data.model || "");
    setYearModel(data.yearmodel || "");
    setColor(data.color || "");
    setAverage(data.average || "");
    setMileage(data.mileage || "");
    setCity(data.city || "");
    setTransmission(data.transmission || "");
    setPrice(data.price || "");
    setCondition(data.condition || "");
    setFiles(data.images || []);
  }, [data]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setAdLoading(true);
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "uploads"); // Replace with your own Cloudinary upload preset
      formData.append("cloud_name", "dwfdgfi86"); // Replace with your own Cloudinary cloud name

      return axios
        .post(
          "https://api.cloudinary.com/v1_1/dwfdgfi86/image/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          const { secure_url } = response.data;
          return secure_url;
        });
    });

    try {
      const uploadedFiles = await axios.all(uploaders);
      const imageUrls = uploadedFiles.filter((url) => url !== undefined);

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
        contact: user.user.user.phone,
        images: imageUrls,
        condition: condition,
      };

      const response = await axios.put(`/used/${id}`, body);
      setAdLoading(false);
      setModalIsOpen(true);
    } catch (err) {
      console.error("Ad Posting failed", err);
      setAdLoading(false);
    }
  };

  const handleFileDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    navigate(`/info/${id}`);
  };
  return (
    <div>
      <Navbar />
      <Header type="post" />
      <div className="Container">
        <div className="Wrapper">
          <div className="headingContainer">
            <div className="heading">
              <h1>Update AD !</h1>
            </div>
          </div>
          <form
            onSubmit={handleFormSubmit}
            encType="multipart/form-data"
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
                  placeholder={yearmodel}
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
                <Dropzone onDrop={handleFileDrop} multiple accept="image/*">
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Drop your files or click here to upload</p>
                    </div>
                  )}
                </Dropzone>
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
              {adLoading ? (
                <img src={loader} alt="Loading" className="spinner" />
              ) : (
                <button className="button a" type="submit">
                  Confirm
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ad Success Modal"
        className="modal"
      >
        <h2 className="modalHeading">Ad Updated Successfully</h2>
        <button className="modalButton" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Post2;
