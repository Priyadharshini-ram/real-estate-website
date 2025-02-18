import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const Buy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [properties, setProperties] = useState([
    { id: 1, title: "Luxury Villa", price: "$500,000", location: "New York", image: "villa.jpg" },
    { id: 2, title: "Modern Apartment", price: "$300,000", location: "Los Angeles", image: "apartment.jpg" },
    { id: 3, title: "Cozy Cottage", price: "$200,000", location: "Texas", image: "cottage.jpg" }
  ]);

  useEffect(() => {
    // Fetch property listings from an API or database
    // Example: fetch('/api/properties').then(res => res.json()).then(data => setProperties(data));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Browse Properties for Sale</h2>
      <Form.Control
        type="text"
        placeholder="Search by title or location..."
        value={searchQuery}
        onChange={handleSearch}
        className="mb-4"
      />
      <Row>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Col md={4} key={property.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={property.image} alt={property.title} />
                <Card.Body>
                  <Card.Title>{property.title}</Card.Title>
                  <Card.Text>
                    <strong>Location:</strong> {property.location}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> {property.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-gray-500">No properties found.</p>
        )}
      </Row>
    </Container>
  );
};

export default Buy;
