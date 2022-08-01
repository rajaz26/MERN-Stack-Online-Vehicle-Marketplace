import "./new.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// const Used1 = (props) => {
const New = () => {
  const location = useLocation();
  const [price, setPrice] = useState("");
  const [model, setModel] = useState("");
  const [city, setCity] = useState("");
  // const { name, city, price, setName, setCity, setPrice } = props;
  const { data, loading, error } = useFetch(
    `/used?model=${model}&city=${city}`
  );
  return (
    <div>
      <Navbar />
      <Header type="post" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Make or Model</label>
              <input
                type="text"
                value={model}
                onChange={(e) => {
                  setModel(e.target.value);
                }}
                placeholder={model}
              />
            </div>
            <div className="lsItem">
              <label>City</label>
              <select
                className="select"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select City
                </option>
                <option>Islamabad</option>
                <option>Rawalpindi</option>
                <option>Karachi</option>
                <option>Lahore</option>
                <option>Peshawar</option>
                <option>Quetta</option>
                <option>Multan</option>
                <option>Faisalabad</option>
                <option>Hyderabad</option>
                <option>Sialkot</option>
              </select>
            </div>
            <div className="lsItem">
              <label>Price</label>
              <select
                // defaultValue={"DEFAULT"}
                className="select"
                // value={price}
                placeholder={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select Budget
                </option>
                <option>PKR 50 - 40 Lacs</option>
                <option>PKR 40 - 30 Lacs</option>
                <option>PKR 30 - 20 Lacs</option>
              </select>
            </div>
            <div className="lsItem">
              <label>Rating</label>
              <select defaultValue={"DEFAULT"} className="select">
                <option value="Default" disabled>
                  All
                </option>
                <option>8-10</option>
                <option>6-8</option>
                <option>4-6</option>
                <option>2-4</option>
                <option>0-2</option>
              </select>
            </div>
            {/* <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput"/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput"/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput"/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput"/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput"/>
                </div>
              </div>
            </div> */}
            <button className="but">Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
