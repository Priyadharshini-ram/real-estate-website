import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import bannerImage from "../assets/images/real-estate-white-graphics-design-qr9394ynnogt96or.jpg"; // Ensure the path is correct

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Add search logic here (redirect, filter, API call, etc.)
  };

  return (
    <div
      style={{
        background: `url(${bannerImage}) no-repeat center center/cover`,
        height: "80vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "black",
      }}
    >
      <Container>
        <h1 className="fw-bold">Find Your Dream Property</h1>
        <p className="lead">Search for the best real estate deals in your city.</p>

        {/* Search Bar */}
        <Form onSubmit={handleSearch} className="mt-4">
          <Row className="justify-content-center">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Search by city, price, location or property type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-3"
              />
            </Col>
            <Col xs="auto">
              <Button variant="primary" type="submit" size="lg">
                Search
              </Button>
            </Col>
          </Row>
        </Form>

        {/* Buy, Sell, Rent, Land/Plot Buttons */}
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Button variant="primary" size="lg" href="/buy">
              Buy
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="success" size="lg" href="/sell">
              Sell
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="warning" size="lg" href="/rent">
              Rent
            </Button>  
          </Col>
          <Col xs="auto">
            <Button variant="info" size="lg" href="/landplot">
              Land/Plot
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
