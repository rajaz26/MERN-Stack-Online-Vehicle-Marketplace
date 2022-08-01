import React from "react";
import "./slider.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Slider = () => {
  //functions

  const [name, setName] = useState("");
  const handleClick = () => {};
  return (
    //Display/Render
    <div className="slidcontainer">
      <h1>Form</h1>
      <form>
        <div className="items">
          <div className="slidItem">
            <label> Name: </label>
            <input placeholder="Name here" onClick={handleClick} />
          </div>

          <div className="slidItem">
            <label> Age: </label>
            <input placeholder="Age in number" />
          </div>
        </div>
        <Link to="/login">
          <button className="buttonss">Confirm</button>
        </Link>
      </form>
    </div>
  );
};

export default Slider;
