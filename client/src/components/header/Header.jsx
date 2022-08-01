// import "./header.css";
// import { react } from "react";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import { AuthContext } from "../../context/AuthContext";
// const Header = (props, userId) => {
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   // const idd = useParams();
//   // console.log(idd, "IDD");
//   // const location = useLocation();
//   // const id = location.pathname.split("/")[2];
//   // const id = user._id;
//   // console.log("hello");
//   // console.log(id);
//   // console.log("bye");
//   let id = undefined;
//   if (user) {
//     id = user._id;
//     console.log(id, "ID:");
//   }
//   const { data, loading, error } = useFetch(`/auth/info/${id}`);
//   const [model, setModel] = useState("");

//   const [city, setCity] = useState(undefined);
//   const [price, setPrice] = useState(undefined);
//   // const { setName, setCity, setPrice, type } = props;

//   const { type } = props;

//   const handleSearch = () => {
//     navigate("/used", { state: { model, city, price } });
//   };

//   const handleSearchNew = () => {
//     navigate("/new", { state: { model, city, price } });
//   };
//   return (
//     <div className="header">
//       <div
//         className={
//           type === "post" ? "headerContainer listMode" : "headerContainer"
//         }
//       >
//         <div className="headerList">
//           {id ? (
//             <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
//               <div className="headerListItems active">Home</div>
//             </Link>
//           ) : (
//             <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
//               <div className="headerListItems active">Home</div>
//             </Link>
//           )}
//           {/* <Link to="/used" style={{ color: "white", textDecoration: "none" }}> */}
//           <div className="headerLi" onClick={handleSearch}>
//             Used Cars
//           </div>
//           {/* </Link> */}
//           <Link
//             to="/new"
//             style={{ color: "white", textDecoration: "none" }}
//             onClick={handleSearchNew}
//           >
//             <div className="headerLi">New Cars</div>
//           </Link>
//           {id ? (
//             <Link
//               // to={`/post/${user._id}`}
//               to={`/post/${id}`}
//               style={{ color: "white", textDecoration: "none" }}
//             >
//               <div className="headerLi">Post Ad</div>
//             </Link>
//           ) : (
//             <Link
//               to={`/login`}
//               style={{ color: "white", textDecoration: "none" }}
//             >
//               <div className="headerLi">Post Ad</div>
//             </Link>
//           )}
//         </div>
//         {type !== "post" && (
//           <>
//             <h1 className="headerTitle">The Garage</h1>
//             <p className="headerDesc">
//               Buy and sell vehicle and get the best prices !
//             </p>
//             <div className="headerSearch">
//               <div className="headerSearchItem">
//                 <input
//                   type="text"
//                   placeholder="Car make or model"
//                   className="headerSearchInput"
//                   onChange={(e) => setModel(e.target.value)}
//                 />
//               </div>
//               <div className="headerSearchItem">
//                 <select
//                   defaultValue={"DEFAULT"}
//                   className="dropdown"
//                   onChange={(e) => setCity(e.target.value)}
//                 >
//                   <option value="DEFAULT" disabled selected>
//                     Select City
//                   </option>
//                   <option>Islamabad</option>
//                   <option>Rawalpindi</option>
//                   <option>Karachi</option>
//                   <option>Lahore</option>
//                   <option>Peshawar</option>
//                   <option>Quetta</option>f<option>Multan</option>
//                   <option>Faisalabad</option>
//                   <option>Hyderabad</option>
//                   <option>Sialkot</option>
//                 </select>
//               </div>
//               <div className="headerSearchItem">
//                 <select
//                   className="dropdown"
//                   onChange={(e) => setPrice(e.target.value)}
//                 >
//                   <option value="" disabled selected>
//                     Select Budget
//                   </option>
//                   <option>PKR 50 - 40 Lacs</option>
//                   <option>PKR 40 - 30 Lacs</option>
//                   <option>PKR 30 - 20 Lacs</option>
//                 </select>
//               </div>
//               <div className="headerSearchItem">
//                 {/* <Link to="/used"> */}
//                 <button className="headerBtn" onClick={handleSearch}>
//                   Search
//                 </button>
//                 {/* </Link> */}
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
import "./header.css";
import { react } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
const Header = (props, userId) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // const idd = useParams();
  // console.log(idd, "IDD");
  // const location = useLocation();
  // const id = location.pathname.split("/")[2];
  // const id = user._id;
  // console.log("hello");
  // console.log(id);
  // console.log("bye");
  let id = undefined;
  if (user) {
    id = user._id;
    console.log(id, "ID:");
  }
  const { data, loading, error } = useFetch(`/auth/info/${id}`);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [city, setCity] = useState(undefined);

  // const { setName, setCity, setPrice, type } = props;

  const { type } = props;

  const handleSearch = () => {
    navigate("/used", { state: { make, model, city } });
  };

  const handleSearchNew = () => {
    navigate("/new", { state: { make, model, city } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "post" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          {id ? (
            <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
              <div className="headerListItems active">Home</div>
            </Link>
          ) : (
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              <div className="headerListItems active">Home</div>
            </Link>
          )}
          {/* <Link to="/used" style={{ color: "white", textDecoration: "none" }}> */}
          <div className="headerLi" onClick={handleSearch}>
            Used Cars
          </div>
          {/* </Link> */}
          <Link
            to="/new"
            style={{ color: "white", textDecoration: "none" }}
            onClick={handleSearchNew}
          >
            <div className="headerLi">New Cars</div>
          </Link>
          {id ? (
            <Link
              // to={`/post/${user._id}`}
              to={`/post/${id}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              <div className="headerLi">Post Ad</div>
            </Link>
          ) : (
            <Link
              to={`/login`}
              style={{ color: "white", textDecoration: "none" }}
            >
              <div className="headerLi">Post Ad</div>
            </Link>
          )}
        </div>
        {type !== "post" && (
          <>
            <h1 className="headerTitle">The Garage</h1>
            <p className="headerDesc">
              Buy and sell vehicle and get the best prices !
            </p>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <input
                  type="text"
                  placeholder="Make"
                  className="headerSearchInput"
                  onChange={(e) => setMake(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <input
                  type="text"
                  placeholder="Model"
                  className="headerSearchInput"
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <select
                  defaultValue={"DEFAULT"}
                  className="dropdown"
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="DEFAULT" disabled selected>
                    Select City
                  </option>
                  <option>Islamabad</option>
                  <option>Rawalpindi</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Peshawar</option>
                  <option>Quetta</option>f<option>Multan</option>
                  <option>Faisalabad</option>
                  <option>Hyderabad</option>
                  <option>Sialkot</option>
                </select>
              </div>

              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
