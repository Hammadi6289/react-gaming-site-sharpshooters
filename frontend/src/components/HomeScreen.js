import React from "react";
import Hero from "./Hero";
import Trending from "./Trending";
import COD from "./COD";
import GameCenters from "./GameCenters";
import { Helmet } from "react-helmet-async";

const HomeScreen = () => {
  return (
    <div>
      <Helmet>
        <title>Sharpshooter Arena</title>
      </Helmet>
      <Hero />
      <Trending />
      <COD />
      <GameCenters />
    </div>
  );
};

export default HomeScreen;
