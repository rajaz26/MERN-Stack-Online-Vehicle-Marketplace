import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/Home";
import Vehicle from "./pages/vehicle/Vehicle";
import Used1 from "./pages/used1/Used1";
import SignIn from "./pages/sign in/SignIn";
import LogIn from "./pages/login/LogIn";
import Info from "./pages/info/Info";
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import New from "./pages/newcar/New";
import Post2 from "./pages/postcopy/Post2";

function App() {
  const [name, setName] = useState("");
  const [city, setCity] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/used" element={<Used1 />} />
        <Route path="/new" element={<New />} />
        <Route path="/used/:id" element={<Vehicle />} />
        <Route
          path="/signin"
          element={!isAuthenticated ? <SignIn /> : <LogIn />}
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/post/:userId" element={<Post />} />
        <Route path="/post2/:id" element={<Post2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
