// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import GamesList from "./components/GamesList";
import GameDetail from "./components/GameDetail";
import AboutUs from "./components/AboutUs";
import Trending from "./components/Trending";
import COD from "./components/COD";
import GameCenters from "./components/GameCenters";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReservationScreen from "./components/ReservationScreen";

const App = () => {
  return (
    <Router>
      <div className="text-white">
        <Header />
        <div className="w-full xl:max-w-[1250px] mx-auto px-4 ">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/games" element={<GamesList />} />
            <Route path="/cart" element={<ReservationScreen />} />
            <Route path="/games/:slug" element={<GameDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/cod" element={<COD />} />
            <Route path="/game-centers" element={<GameCenters />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
