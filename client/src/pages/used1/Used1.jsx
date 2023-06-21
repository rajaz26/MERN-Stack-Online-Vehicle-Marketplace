import "./used1.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Used1 = () => {
  const location = useLocation();
  const [make, setMake] = useState(location.state.make);
  const [model, setModel] = useState(location.state.model);
  const [city, setCity] = useState(location.state.city);
  const [yearmodel, setYearmodel] = useState(location.state.yearmodel);
  const [condition, setCondition] = useState(location.state.condition);
  let apiUrl = `/used?make=${make}&city=${city}&model=${model}&yearmodel=${yearmodel}&condition=${condition}`;
  if (!city && !model && !yearmodel && !condition) {
    apiUrl = `/used?make=${make}`;
  } else if (!make && !city && !yearmodel && !condition) {
    apiUrl = `/used?model=${model}`;
  } else if (!make && !model && !yearmodel && !condition) {
    apiUrl = `/used?city=${city}`;
  } else if (!make && !model && !yearmodel && !city) {
    apiUrl = `/used?condition=${condition}`;
  } else if (!make && !model && !condition && !city) {
    apiUrl = `/used?yearmodel=${yearmodel}`;
  } else if (!make && !model && !yearmodel) {
    apiUrl = `/used?city=${city}&condition=${condition}`;
  } else if (!make && !model) {
    apiUrl = `/used?city=${city}&condition=${condition}&yearmodel=${yearmodel}`;
  } else if (!make && !city && !yearmodel) {
    apiUrl = `/used?model=${model}&condition=${condition}`;
  } else if (!yearmodel && !city && !condition) {
    apiUrl = `/used?model=${model}&make=${make}`;
  } else if (!city && !model && !condition) {
    apiUrl = `/used?make=${make}&yearmodel=${yearmodel}`;
  } else if (!city && !model && !yearmodel) {
    apiUrl = `/used?make=${make}&condition=${condition}`;
  } else if (!make && !city && !condition) {
    apiUrl = `/used?model=${model}&yearmodel=${yearmodel}`;
  } else if (!make && !city && !yearmodel) {
    apiUrl = `/used?model=${model}&condition=${condition}`;
  } else if (!make && !model && !condition) {
    apiUrl = `/used?city=${city}&yearmodel=${yearmodel}`;
  } else if (!make && !model && !yearmodel) {
    apiUrl = `/used?city=${city}&condition=${condition}`;
  } else if (!city && !condition) {
    apiUrl = `/used?model=${model}&make=${make}&yearmodel=${yearmodel}`;
  } else if (!city && !yearmodel) {
    apiUrl = `/used?model=${model}&make=${make}&condition=${condition}`;
  } else if (!make && !condition) {
    apiUrl = `/used?city=${city}&model=${model}&yearmodel=${yearmodel}`;
  } else if (!make && !yearmodel) {
    apiUrl = `/used?city=${city}&model=${model}&condition=${condition}`;
  } else if (!model && !condition) {
    apiUrl = `/used?city=${city}&make=${make}&yearmodel=${yearmodel}`;
  } else if (!model && !yearmodel) {
    apiUrl = `/used?city=${city}&make=${make}&condition=${condition}`;
  } else if (!model) {
    apiUrl = `/used?city=${city}&make=${make}&yearmodel=${yearmodel}`;
  } else if (!city) {
    apiUrl = `/used?model=${model}&make=${make}&yearmodel=${yearmodel}&condition=${condition}`;
  } else if (!condition) {
    apiUrl = `/used?city=${city}&model=${model}&make=${make}&yearmodel=${yearmodel}`;
  } else if (!yearmodel) {
    apiUrl = `/used?city=${city}&model=${model}&make=${make}&condition=${condition}`;
  } else if (!make) {
    apiUrl = `/used?city=${city}&model=${model}&yearmodel=${yearmodel}&condition=${condition}`;
  } else if (!make && !city && !yearmodel && !condition && !model) {
    apiUrl = `/used?city=${city}&make=${make}&model=${model}&yearmodel=${yearmodel}&condition=${condition}`;
  } else {
    apiUrl = `/used?city=${city}&make=${make}&model=${model}&yearmodel=${yearmodel}&condition=${condition}`;
  }

  const { data, loading, error } = useFetch(apiUrl);
  return (
    <div>
      <Navbar />
      <Header type="post" />

      <div
        className={
          !make && !city && !yearmodel && !condition && !model
            ? "listContainer center"
            : "listContainer"
        }
      >
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Make </label>
              <input
                type="text"
                value={make}
                onChange={(e) => {
                  setMake(e.target.value);
                }}
                placeholder={model}
              />
            </div>
            <div className="lsItem">
              <label>Model</label>
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
              <label>Year Model</label>
              <input
                type="text"
                value={yearmodel}
                onChange={(e) => {
                  setYearmodel(e.target.value);
                }}
                placeholder={yearmodel}
              />
            </div>
            <div className="lsItem">
              <label>Condition</label>
              <input
                type="text"
                value={condition}
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
                placeholder={condition}
              />
            </div>

            <button className="but">Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.length === 0 ? (
                  <p>No results found</p>
                ) : (
                  data.map((item) => <SearchItem item={item} key={item._id} />)
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Used1;
