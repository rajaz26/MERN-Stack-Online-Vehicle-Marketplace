import useFetch from "../../hooks/useFetch";
import "./adList.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdList = () => {
  const { data, loading, error } = useFetch("/used/countByMake");
  const [make, setMake] = useState("");
  const images = [
    require("./corolla.jpg"),
    require("./honda.jpg"),
    require("./suzuki.png"),
    require("./nissan.jpg"),
    require("./mit.jpg"),
  ];
  const navigate = useNavigate();

  const handleSearch = (make) => {
    navigate("/used", { state: { make } });
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return ""; // Check if string is defined
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => {
              const makeValue = data[i]?.make; // Store data[i]?.make in a variable
              const capitalizedMakeValue = capitalizeFirstLetter(makeValue); // Capitalize the first letter
              return (
                <div className="pListItem" key={i}>
                  <img
                    src={img}
                    alt=""
                    className="pListImg"
                    onClick={() => {
                      handleSearch(capitalizedMakeValue); // Pass the capitalized variable to handleSearch
                      setMake(capitalizedMakeValue);
                    }}
                  />
                  <div className="pListTitles">
                    <h1>{capitalizedMakeValue}</h1>{" "}
                    {/* Display the capitalized variable */}
                    <h2>{data[i]?.count} Cars</h2>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default AdList;
