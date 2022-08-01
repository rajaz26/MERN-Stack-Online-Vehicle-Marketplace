import React from "react";
import "./home.css";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import AdList from "../../components/adList/AdList";
import FeaturedAds from "../../components/featuredAds/FeaturedAds";
import PostList from "../../components/postList/PostList";
import Footer from "../../components/footer/Footer";
import Sldier from "../../components/slider/Slider";
import Slider from "../../components/slider/Slider";
const Home = (props, userId) => {
  const { name, setName, city, setCity, price, setPrice } = props;
  return (
    <div>
      {userId ? <Navbar userId={userId} /> : <Navbar />}
      {userId ? (
        <Header
          setName={setName}
          setCity={setCity}
          setPrice={setPrice}
          userId={userId}
        />
      ) : (
        <Header />
      )}
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Manufacturer</h1>
        <AdList />
        <h1 className="homeTitle">Customer's Favorites</h1>
        <FeaturedAds />
        <PostList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
