import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const id = "62b8615137bd397f5b010388";
  const { data, loading, error } = useFetch(`/auth/info/${id}`);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/used/${data._id}`);
  };
  return (
    <div>
      <div className="featured">
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((item) => (
              <div className="featuredItem">
                <img
                  src={`http://127.0.0.1:5500/images/${item.images[0]}`}
                  alt=""
                  className="featuredImage"
                />
                <div className="featuredTitles">
                  <Link
                    to={`/used/${item._id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <h2>{item.make}</h2>
                    <h1>{item.model}</h1>
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
