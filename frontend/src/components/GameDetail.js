import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { Store } from "../Store";
import Calendar from "react-calendar";

const GameDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchGameDetail = async () => {
      try {
        const response = await axios.get(`/api/games/${slug}`);
        setGame(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGameDetail();
  }, [slug]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const onChangeDate = (newDate) => {
    setDate(newDate);
  };

  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const handleReservationButton = async () => {
    const existItem = cart.cartItems.find((x) => x._id === game._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/game/${game._id}`);
    if (data.avaialSeats < quantity) {
      window.alert("All seats reserved");
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...game, quantity },
    });
    navigate("/cart");
  };

  if (loading) return <LoadingBox />;
  if (error) return <MessageBox variant="danger">{error}</MessageBox>;
  if (!game) return <div>No game found</div>;

  return (
    <div className="container mx-auto px-4">
      <Fade right>
        <div className="hero-section bg-gray-950 text-white py-20 mb-6">
          <div className="text-center">
            <Helmet>
              <title>{game.name}</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-4">{game.name}</h1>
            <p className="text-xl">Presented by {game.brand}</p>
          </div>
        </div>
      </Fade>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-2">
          <div className="relative">
            <img
              src={game.images[currentImageIndex]}
              alt={game.name}
              className="w-full"
              style={{
                transition: "transform 1s",
                ":hover": { transform: "scale(1.1)" },
              }}
            />
          </div>
        </div>
        <div className="col-span-4 md:col-span-2">
          <h2 className="text-2xl font-bold">{game.name}</h2>
          <div className="flex items-center">
            {[...Array(Math.floor(game.rating))].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="text-yellow-500"
              />
            ))}
            <span className="ml-2 text-yellow-500 text-sm">{game.rating}</span>
          </div>
          <p>{game.description}</p>
          <div className="my-4">
            <p className="mb-2">
              <strong>Release Date:</strong> {game.releaseDate}
            </p>
            <p className="text-green-500">
              <strong>Pricing:</strong> {game.pricing}
            </p>
          </div>
          <button
            className="bg-gradient-to-r from-purple-500 to-red-700 text-white px-4 py-2 rounded-md mt-4"
            onClick={handleReservationButton}
          >
            Reserve your Machine.
          </button>
          <p className="text-red-500 text-sm mt-2">
            *We reserve the right to cancel reservations with less than 2 days
            notice.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        {game.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Screenshot ${index + 1}`}
            className={`w-full max-w-xs cursor-pointer hover:animate-pulse cursor-pointer"${
              currentImageIndex === index ? "border-2 border-yellow-500" : ""
            }`}
            style={{ maxWidth: "100px" }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <div className="react-calendar-container">
        <div className="react-calendar">
          <h2>Check your Schedule</h2>
          <Calendar onChange={onChangeDate} value={date} />
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
