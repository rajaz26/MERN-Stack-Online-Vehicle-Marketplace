import { Link, Navigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featuredAds.css";

const FeaturedAds = () => {
  const { data, loading, error } = useFetch("/used?featured=true&limit=4");

  const handleChange = () => {};
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={`http://127.0.0.1:5500/images/${item.images[0]}`}
                alt=""
                className="fpImg"
              />
              <Link to={`/used/${item._id}`} style={{ textDecoration: "none" }}>
                <span className="fpName">
                  {item.make} {item.model}
                </span>
              </Link>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Price : PKR {item.price} Lacs</span>
              {item.rating && (
                <div className="fpRating">
                  <span>Rating : </span>
                  <button>{item.rating}</button>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedAds;
