import React, { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ReservationScreen() {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
    selectedLocation,
  } = state;
  const [error, setError] = useState(null);

  useEffect(() => {
    // You can use selectedLocation here for any side effects related to it
    console.log("Selected Location:", selectedLocation);
  }, [selectedLocation]);

  return (
    <div className="bg-[#070320]">
      <div className="bg-cover bg-center h-60"></div>
      <Helmet>
        <title>Your Seat Reservation</title>
      </Helmet>
      <h1 className="text-center mt-2 mb-6 text-3xl font-semibold">
        Seat Reservation
      </h1>
      <div className="container mx-auto px-4">
        {cartItems.length === 0 ? (
          <div className="text-center mb-4">
            No reservations made..{" "}
            <Link to="/" className="text-blue-400">
              Go reserve a seat
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {error ? (
                <div className="text-center text-red-500">Error: {error}</div>
              ) : (
                <ul className="divide-y divide-gray-700">
                  {cartItems.map((item) => (
                    <li key={item._id} className="py-4 flex">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded mr-4"
                      />
                      <div className="flex flex-col justify-between">
                        <div>
                          <Link
                            to={`/game/${item.slug}`}
                            className="text-xl font-semibold text-blue-400 hover:underline"
                          >
                            {item.name}
                          </Link>
                          {selectedLocation && (
                            <p className="text-gray-400 mt-1">
                              <strong>Selected Location:</strong>{" "}
                              {selectedLocation}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center mt-2">
                          <Button
                            variant="light"
                            disabled={item.quantity === 1}
                            className="mr-2"
                          >
                            <i className="fas fa-minus-circle"></i>
                          </Button>{" "}
                          <span>{item.quantity}</span>{" "}
                          <Button
                            variant="light"
                            disabled={item.quantity === item.availableSeats}
                            className="ml-2"
                          >
                            <i className="fas fa-plus-circle"></i>
                          </Button>
                          <div className="md:w-1/4 text-center">
                            ${item.pricing}
                          </div>
                          <div className="md:w-1/6">
                            <Button variant="light">
                              <i className="fas fa-trash"></i>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="md:mt-0">
              <Card>
                <Card.Body>
                  <div>
                    <h3 className="text-center font-semibold mb-4">
                      Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                      items) : $
                      {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                    </h3>
                    <div className="flex justify-center">
                      <Button
                        type="button"
                        variant="primary"
                        className="w-full md:w-auto"
                        disabled={cartItems.length === 0}
                      >
                        Proceed to Checkout
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
