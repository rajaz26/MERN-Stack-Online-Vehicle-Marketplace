import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./info.css";

const Delete = (props) => {
  const { user } = useContext(AuthContext);
  const id = user._id;
  // console.log(event);
  const deleteAd = (event) => {
    axios
      .delete(`/used/delete/${id}/${props.item}`)
      .then((res) => {
        let $itemCard = document.querySelector(`[name="${props.item}"]`);
        $itemCard.remove();
        console.log("Ad successfully deleted!");
      })
      .catch((error) => {
        console.log(error, "Ad not deleted");
      });
  };

  return (
    <div>
      <button onClick={deleteAd} className="viewCheckButtond ">
        Delete Ad
      </button>
    </div>
  );
};

export default Delete;
