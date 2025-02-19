import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import bannerImage from "../assets/images/real-estate-white-graphics-design-qr9394ynnogt96or.jpg";
import Everything from "./Everything";
import Counter from "./Counter";
import RealEstateHighlights from "./RealEstateHighlights";
import SearchAgents from "./SearchAgents"; // Import SearchAgents Component

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      {/* Banner Section */}
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
          <h1 className="fw-bold">Elevate your real estate experience</h1>
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
              <Button variant="primary" size="lg" as={Link} to="/buy">
                Buy
              </Button>
            </Col>
            <Col xs="auto">
              <Button variant="success" size="lg" as={Link} to="/sell">
                Sell
              </Button>
            </Col>
            <Col xs="auto">
              <Button variant="warning" size="lg" as={Link} to="/rent">
                Rent
              </Button>
            </Col>
            <Col xs="auto">
              <Button variant="info" size="lg" as={Link} to="/land-plot">
                Land/Plot
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Everything Section */}
      <Everything />

      {/* Counter Section */}
      <Counter />

      
      {/* Search Agents Section (Added Below RealEstateHighlights) */}
      <SearchAgents />

      {/* Real Estate Highlights Section */}
      <RealEstateHighlights />

    </>
  );
};

export default Banner;
