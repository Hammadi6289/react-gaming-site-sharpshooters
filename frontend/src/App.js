import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Header from "./components/Header";
import Trending from "./components/Trending";
import COD from "./components/COD";
import GameCenters from "./components/GameCenters";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import GamesList from "./components/GamesList";
import GameDetail from "./components/GameDetail";

function App() {
  return (
    <Router>
      <div className="text-white">
        <Header />

        <div className="w-full xl:max-w-[1250px] mx-auto px-4 ">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/games" element={<GamesList />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/cod" element={<COD />} />
            <Route path="/game-centers" element={<GameCenters />} />
            <Route exact path="/games/:slug" component={GameDetail} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
