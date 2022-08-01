import "./viewad.css";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../context/AuthContext";

import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { AdContext } from "../../context/AdContext";
import AdFind from "../../api/AdFind";
import useFetch from "../../hooks/useFetch";
const View = () => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const { car, setCar } = useContext(AdContext);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await AdFind.get("/info");
  //       console.log(response.data.data);
  //       setCar(response.data.data.car);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const { user } = useContext(AuthContext);
  const id = user._id;
  const { data, loading, error } = useFetch(`/auth/info/${id}`);
  return (
    <div>
      <div className="viewItem">
        {/* {open && (
          <div className="popup">
            <div className="popWrapper">
              <h2>Are You Sure?</h2>
              <div className="marks">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="notdelete"
                  onClick={() => setOpen(false)}
                />
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="del"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        )} */}
        <img
          src="https://cdn.carbuzz.com/gallery-images/original/192000/200/192288.jpg"
          className="viewImg"
        />
        ;
        {/* {car &&
          car.map((el) => { */}
        {/* return ( */}
        {data.map((item) => {
          <div className="viewDesc">
            {/* <h1 className="viewTitle">{el.model}</h1> */}

            <h1 className="viewTitle"></h1>
            <div>
              <div className="viewSubtitle">Date Posted</div>
              <div className="viewTaxiOp">24 / Feb / 2022</div>
            </div>
          </div>;
          {
            /* ); */
          }
          {
            /* })} */
          }
          <div className="viewDetails">
            <div className="viewDetailTexts">
              <button className="viewCheckButton">View Ad</button>

              <button
                className="viewCheckButtond "
                // onClick={() => handleOpen()}
              >
                Delete Ad
              </button>

              <button className="viewCheckButtone">Edit Ad</button>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default View;
