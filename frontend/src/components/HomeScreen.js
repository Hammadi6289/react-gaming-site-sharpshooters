import React from "react";
import Hero from "./Hero";
import Trending from "./Trending";
import COD from "./COD";
import GameCenters from "./GameCenters";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <COD />
      <GameCenters />
    </div>
  );
};

export default HomeScreen;
