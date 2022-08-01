import "./searchItem.css";
import { Link } from "react-router-dom";
const SearchItem = ({ item }) => {
  const date = item.createdAt;
  const result = date.slice(0, 10);

  return (
    <div className="searchItem">
      <img
        src={`http://127.0.0.1:5500/images/${item.images[0]}`}
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.make}</h1>
        <span className="siDistance">{item.model}</span>
        <span className="siTaxiOp">{item.transmission}</span>
        <span className="siSubtitle">Model : {item.yearmodel}</span>
        <span className="siFeatures">Average : {item.average}</span>
        <span className="siCancelOp">{item.city}</span>
        <span className="siCancelOpSubtitle">Date Posted : {result}</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Condition : {item.condition}</span>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">PKR {item.price} lacs</span>
          <span className="siTaxOp">Price is negotiable</span>
          <Link to={`/used/${item._id}`}>
            <button className="siCheckButton">Check Vehicle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
