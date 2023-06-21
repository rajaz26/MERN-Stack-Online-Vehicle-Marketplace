import React, { useContext, useEffect, useState } from "react";
import "./info.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import View from "../../components/viewad/View";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import axios from "axios";

const Info = () => {
  const { user } = useContext(AuthContext);
  const id = user.user.user._id;

  const [ads, setAds] = useState([]);
  const { data, loading, error, refetch } = useFetch(`/auth/info/${id}`);
  useEffect(() => {
    if (!loading && !error) {
      setAds(data);
    }
  }, [loading, error, data]);

  const [showConfirmation, setShowConfirmation] = useState(false); // State variable to control confirmation model
  const [itemIdToDelete, setItemIdToDelete] = useState(null); // State variable to store the ID of the item to be deleted

  const handleDelete = (itemId) => {
    console.log(itemId);
    setAds((prevAds) => prevAds.filter((item) => item && item._id !== itemId));
  };

  const deleteAd = (itemId) => {
    setItemIdToDelete(itemId); // Store the ID of the item to be deleted
    setShowConfirmation(true); // Show the confirmation model
  };

  const confirmDelete = () => {
    if (itemIdToDelete) {
      axios
        .delete(`/used/delete/${id}/${itemIdToDelete}`)
        .then((res) => {
          handleDelete(itemIdToDelete);
          console.log("Ad successfully deleted!");
        })
        .catch((error) => {
          console.log(error, "Ad not deleted");
        })
        .finally(() => {
          setShowConfirmation(false); // Hide the confirmation model
          setItemIdToDelete(null); // Reset the item ID to delete
        });
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="post" />
      <div className="title">
        <h1>Your Posted Ads:</h1>
      </div>
      <hr className="line" />

      <div className="Container2">
        {loading ? (
          <h1 className="loadingMessage">Loading...</h1>
        ) : ads.length === 0 ? (
          <h1 className="noAdsMessage">There are no ads posted.</h1>
        ) : (
          ads.map((item) => {
            if (!item) {
              return null; // Skip rendering if item is null
            }
            return (
              <div key={item._id} name={item._id} className="divBorder">
                <div className="c">
                  {item.createdAt && item.createdAt.slice(0, 10)}
                </div>
                <div className="viewItem">
                  <img src={item.images[0]} className="viewImg" />

                  <div className="viewDesc">
                    <h1 className="viewTitle">
                      {item.make} {item.model}
                    </h1>
                    <div className="viewSubtitl">
                      Model Year: {item.yearmodel}
                    </div>
                    <div>
                      <div className="viewSubtitle">Date Posted:</div>
                      <div className="viewTaxiOp">
                        {item.createdAt && item.createdAt.slice(0, 10)}
                      </div>
                    </div>
                  </div>
                  <div className="viewDetails">
                    <div className="viewDetailTexts">
                      <Link to={`/used/${item._id}`}>
                        <button className="viewCheckButton">View Ad</button>
                      </Link>
                      <button
                        className="viewCheckButtond"
                        onClick={() => deleteAd(item._id)}
                      >
                        Delete Ad
                      </button>

                      <Link to={`/post2/${item._id}`}>
                        <button className="viewCheckButtone">Edit Ad</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Confirmation Model */}
      {showConfirmation && (
        <div className="confirmationModel">
          <h3>Are you sure you want to delete this item?</h3>
          <div className="confirmationButtons">
            <button className="confirmationButton" onClick={confirmDelete}>
              Yes
            </button>
            <button
              className="confirmationButton"
              onClick={() => setShowConfirmation(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
