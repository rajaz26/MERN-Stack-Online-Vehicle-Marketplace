import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const id = "645ea99882357bbe0422d11e";
  const { data, loading, error } = useFetch(`/auth/info/${id}`);
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/used/${item._id}`);
  };

  return (
    <div>
      <div className="featured">
        {loading ? (
          "Loading"
        ) : (
          <>
            {data &&
              data.map(
                (item) =>
                  item && (
                    <div
                      className="featuredItem"
                      key={item._id}
                      onClick={() => handleClick(item)}
                    >
                      {item.images && item.images[0] && (
                        <img
                          src={item.images[0]}
                          alt=""
                          className="featuredImage"
                        />
                      )}
                      <div className="featuredTitles">
                        <Link
                          to={`/used/${item._id}`}
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          {item.make && <h2>{item.make}</h2>}
                          {item.model && <h1>{item.model}</h1>}
                        </Link>
                      </div>
                    </div>
                  )
              )}
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
