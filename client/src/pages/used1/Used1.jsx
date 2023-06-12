import "./used1.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// const Used1 = (props) => {
const Used1 = () => {
  const location = useLocation();
  const [make, setMake] = useState(location.state.make);
  const [model, setModel] = useState(location.state.model);
  const [city, setCity] = useState(location.state.city);
  let apiUrl = `/used?make=${make}&city=${city}&model=${model}`;

  if (!city & !model) {
    apiUrl = `/used?make=${make}`;
  } else if (!make & !city) {
    apiUrl = `/used?model=${model}`;
  } else if (!make & !model) {
    apiUrl = `/used?city=${city}`;
  } else if (!model) {
    apiUrl = `/used?city=${city}&make=${make}`;
  } else if (!city) {
    apiUrl = `/used?model=${model}&make=${make}`;
  } else if (!make) {
    apiUrl = `/used?city=${city}&model=${model}`;
  }
  const { data, loading, error } = useFetch(apiUrl);
  return (
    <div>
      <Navbar />
      <Header type="post" />
      <div className="listContainer">
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
