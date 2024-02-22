import React, { useContext, useState } from "react";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ReservationScreen() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const [error, setError] = useState(null);
  return (
    <div>
      <Helmet>
        <title>Your Seat Reservation</title>
      </Helmet>
      <h1>Seat Reservation</h1>
      <Row>
        {/* tomorrow start from here */}

        <Col md={8}>
          {cartItems.length === 0 ? (
            <div>
              No reservations made.. <Link to="/"> Go reserve a seat</Link>
            </div>
          ) : (
            <ListGroup>
              {error ? (
                <div>Error: {error}</div>
              ) : (
                cartItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={4}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{" "}
                        <Link to={`/game/${item.slug}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}>
                        <Button variant="light" disabled={item.quantity === 1}>
                          <i className="fas fa-minus-circle"></i>
                        </Button>{" "}
                        <span>{item.quantity}</span>{" "}
                        <Button
                          variant="light"
                          disabled={item.quantity === item.avaialSeats}
                        >
                          <i className="fas fa-plus-circle"></i>
                        </Button>
                      </Col>
                      <Col md={3}>${item.pricing}</Col>
                      <Col md={2}>
                        <Button variant="light">
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          )}
        </Col>
        {/* tomorrow start from here */}

        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
