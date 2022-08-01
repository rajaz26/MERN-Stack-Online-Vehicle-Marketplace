import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";

const Contact = ({ setOpen, carId }) => {
  return (
    <div className="contact">
      <div className="rContainer">
        <h1>RREREREER</h1>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={setOpen(false)}
        />
        <h1>RREREREER</h1>
      </div>
    </div>
  );
};

export default Contact;
