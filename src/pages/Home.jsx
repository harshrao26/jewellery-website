import React from "react";
import CarouselContainer from "../components/CarouselContainer";
import ProductList from "../components/ProductList.jsx";
import Details from "../components/Details.jsx";
import Banner from "../components/Banner.jsx";
import BannerNewly from "../components/BannerNewly.jsx";
import ThreeCardContainer from "../components/ThreeCardContainer.jsx";
import Gender from "../components/Gender.jsx";
import Info from "../components/Info.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";
const Home = () => {
  return (
    <div>
      <CarouselContainer />
      <ProductList />
      <Details />
      <ProductCarousel/>
      <Banner />
      <ThreeCardContainer/>
      <Gender />
      <BannerNewly />
      {/* <Info /> */}



    </div>
  );
};

export default Home;
