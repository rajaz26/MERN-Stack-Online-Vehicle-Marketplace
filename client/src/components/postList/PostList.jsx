import "./postList.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const PostList = () => {
  const { user } = useContext(AuthContext);
  // const id = user._id;
  let id = undefined;
  if (user) {
    id = user._id;
  }
  return (
    <div className="mail">
      <h1 className="mailTitle">Want to sell your car ?</h1>
      <span className="mailDesc">
        Genuine Buyers, Free Ads, Sell Faster and Much More
      </span>
      <div className="mailInputContainer">
        {user ? (
          <Link
            to={`/post/${id}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            <button className="adbutton">Post an Ad</button>
          </Link>
        ) : (
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            <button className="adbutton">Post an Ad</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostList;
