import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Header from "./components/Header";
import Trending from "./components/Trending";
import COD from "./components/COD";
import GameCenters from "./components/GameCenters";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <div className="text-white">
        <Header />

        <div className="w-full xl:max-w-[1250px] mx-auto px-4 ">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
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
}

export default App;
