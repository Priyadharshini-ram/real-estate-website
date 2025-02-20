import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeartBroken } from "react-icons/fa";

const Shortlisted = () => {
  const [shortlistedBuy, setShortlistedBuy] = useState([]);
  const [shortlistedRent, setShortlistedRent] = useState([]);
  const [shortlistedPlots, setShortlistedPlots] = useState([]);

  useEffect(() => {
    // Load shortlisted properties for Buy, Rent, and Land/Plots
    const savedBuy = JSON.parse(localStorage.getItem("shortlisted")) || [];
    const savedRent = JSON.parse(localStorage.getItem("shortlistedRent")) || [];
    const savedPlots = JSON.parse(localStorage.getItem("shortlistedPlots")) || [];

    setShortlistedBuy(savedBuy);
    setShortlistedRent(savedRent);
    setShortlistedPlots(savedPlots);
  }, []);

  const removeFromShortlist = (id, type) => {
    if (type === "buy") {
      const updatedBuy = shortlistedBuy.filter((property) => property.id !== id);
      setShortlistedBuy(updatedBuy);
      localStorage.setItem("shortlisted", JSON.stringify(updatedBuy));
    } else if (type === "rent") {
      const updatedRent = shortlistedRent.filter((property) => property.id !== id);
      setShortlistedRent(updatedRent);
      localStorage.setItem("shortlistedRent", JSON.stringify(updatedRent));
    } else {
      const updatedPlots = shortlistedPlots.filter((plot) => plot.id !== id);
      setShortlistedPlots(updatedPlots);
      localStorage.setItem("shortlistedPlots", JSON.stringify(updatedPlots));
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Shortlisted Properties</h2>

      <Row>
        {[...shortlistedBuy, ...shortlistedRent, ...shortlistedPlots].length > 0 ? (
          [...shortlistedBuy, ...shortlistedRent, ...shortlistedPlots].map((property) => (
            <Col md={4} key={property.id} className="mb-4">
              <Card style={{ position: "relative" }}>
                <Card.Img variant="top" src={property.image} alt={property.title} />
                <Card.Body>
                  <Card.Title>{property.title}</Card.Title>
                  <Card.Text>
                    <strong>Location:</strong> {property.location}
                  </Card.Text>
                  <Card.Text>
                    <strong>{property.price ? "Price" : "Rent"}:</strong> {property.price || property.rent}
                  </Card.Text>

                  {/* Remove from Shortlist Icon */}
                  <FaHeartBroken 
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      color: "gray",
                      fontSize: "20px",
                      cursor: "pointer"
                    }}
                    onClick={() => removeFromShortlist(property.id, property.price ? "buy" : property.rent ? "rent" : "plot")}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-gray-500">No properties shortlisted yet.</p>
        )}
      </Row>
    </Container>
  );
};

export default Shortlisted;
