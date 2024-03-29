import Header from "@/shared/widgets/header/header";
import React from "react";
import Banner from "./features/banner";
import Branding from "./features/branding";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
    </div>
  );
};

export default Home;
