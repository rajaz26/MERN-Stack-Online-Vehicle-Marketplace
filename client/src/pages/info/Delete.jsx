import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./info.css";

const Delete = (props) => {
  const { user } = useContext(AuthContext);
  const id = user.user.user._id;

  const deleteAd = () => {
    axios
      .delete(`/used/delete/${id}/${props.item}`)
      .then((res) => {
        props.onDelete(props.item); // Call the onDelete callback after deleting the ad
        console.log("Ad successfully deleted!");
      })
      .catch((error) => {
        console.log(error, "Ad not deleted");
      });
  };

  return (
    <div>
      <button onClick={deleteAd} className="viewCheckButtond">
        Delete Ad
      </button>
    </div>
  );
};

export default Delete;
