// import React, { Fragment } from 'react'
import "./signIn.css";
// import { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

// const SignIn = ({setAuth}) => {

//   const [inputs,setInputs]=useState({
//     name:"",
//     password:"",
//     phone:"",
//     email:""
//   });

//   const {name,password,phone,email}=inputs;

//   const onChange = e =>
//   setInputs({ ...inputs, [e.target.name]: e.target.value });

//   const onSubmitForm=async e=>{
//     e.preventDefault();
//     try {
//       const body={name,password,phone,email};

//       const response= await fetch(
//         "http://localhost:3000/authentication/signin",
//       {
//         method:"POST",
//         headers:
//         {"Content-type":"application/json"}
//         ,
//         body: JSON.stringify(body)
//       });

//       const parseRes= await response.json();
//       //we saved a user in database and then we received a token
//       //now we'll set that token for that particular user
//       //The setItem() method sets the value of the specified Storage Object item
//       //here it sets token = parseRes.token(token received)
//       localStorage.setItem("token",parseRes.token);

//       setAuth(true);
//     }
//     catch(err){
//       console.error(err.message);
//     }
//   }
//   return (
//     <Fragment>
//       <div>
//         <Navbar/>
//         <Header type="post"/>
//         <div className="signContainer">
//             <div className="signWrapper">
//                 <div className="signImg">
//                       <h1>SIGN IN</h1>
//                       <h6>Enter the required details to create an account</h6>
//                 </div>
//                 <div className="signinEntry">
//                   <form onSubmit={onSubmitForm} className="signinForm">
//                       <label className='label'>Username</label>
//                       <input type="text"
//                        name="name"
//                       className='input'
//                       value={name}

//                       onChange={e => onChange(e)}/>

//                       <label className='label'>Password</label>
//                       <input type="password"
//                       name="password"
//                       className='input'
//                       value={password}
//                       onChange={e=>onChange(e)}
//                       />
//                       <label className='label'>Phone Number</label>
//                       <input type="text"
//                       name="phone"
//                       className='input'
//                       value={phone}
//                       onChange={e=>onChange(e)}/>

//                       <label className='label'>Email Address</label>
//                       <input type="text"
//                       name="email"
//                       className='input'
//                       value={email}
//                       onChange={e=>onChange(e)}/>

//                       <button className='button'>Confirm</button>
//                     </form>

//                 </div>
//             </div>
//         </div>
//       </div>
//     </Fragment>
//   )
// }

// export default SignIn

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const registerUser = async (event) => {
    event.preventDefault();
    const body = {
      username: username,
      email: email,
      password: password,
      phone: phone,
    };
    const response = await axios.post("/auth/register", body);
    console.log(data);
    const data = await response.data;

    //     const response = await fetch('http://localhost:5000/register', {
    // 	method: 'POST',
    // 	headers: {
    // 		'Content-Type': 'application/json',
    // 	},
    // 	body: JSON.stringify({
    // 		name,
    // 		email,
    // 		password,
    // 	}),
    // })
  };

  // return (
  //   <div>
  //     <h1>Register</h1>
  //     <form onSubmit={registerUser}>
  //       <input
  //         value={username}
  //         onChange={(e) => setUserName(e.target.value)}
  //         type="text"
  //         placeholder="Name"
  //       />
  //       <input
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         type="email"
  //         placeholder="Email"
  //       />
  //       <input
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         type="text"
  //         placeholder="Password"
  //       />
  //       <input
  //         value={phone}
  //         onChange={(e) => setPhone(e.target.value)}
  //         type="text"
  //         placeholder="phone"
  //       />
  //       <input type="submit" value="Register" />
  //     </form>
  //   </div>

  return (
    <div>
      <Navbar />
      <Header type="post" />
      <div className="signContainer">
        <div className="signWrapper">
          <div className="signImg">
            <h1>SIGN IN</h1>
            <h6>Enter the required details to create an account</h6>
          </div>
          <div className="signinEntry">
            <form onSubmit={registerUser} className="signinForm">
              <label className="label">Username</label>
              <input
                type="text"
                name="name"
                className="input"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label className="label">Email Address</label>
              <input
                type="text"
                name="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Link to="/login">
                <button className="button" type="submit" value="Register">
                  Confirm
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
