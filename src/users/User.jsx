import React from "react";
import Carousel from "./components/Carousel";
import Stats from "./components/Stats";
import Cards from "./components/Cards";
import Header from "./components/Header/Header";
import Search from "./components/Search";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export const User = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Stats />
      <Cards />
      <Search />
      <Faq />
      <Footer />
    </div>
  );
};
