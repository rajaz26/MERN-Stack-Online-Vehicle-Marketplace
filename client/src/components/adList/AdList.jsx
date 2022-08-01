import useFetch from "../../hooks/useFetch";
import "./adList.css";

const AdList = () => {
  const { data, loading, error } = useFetch("/used/countByMake");

  const images = [
    require("./corolla.jpg"),
    require("./honda.jpg"),
    require("./suzuki.png"),
    require("./nissan.jpg"),
    require("./mit.jpg"),
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.make}</h1>
                  <h2>{data[i]?.count} Cars</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default AdList;
