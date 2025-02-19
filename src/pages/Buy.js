import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Modal, Button } from "react-bootstrap";

const Buy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [properties, setProperties] = useState([
    { id: 1, title: "Luxury Villa", price: "$500,000", location: "New York", image: "villa.jpg", video: "villa.mp4", lat: 40.7128, lng: -74.0060 },
    { id: 2, title: "Modern Apartment", price: "$300,000", location: "Los Angeles", image: "apartment.jpg", video: "apartment.mp4", lat: 34.0522, lng: -118.2437 },
    { id: 3, title: "Cozy Cottage", price: "$200,000", location: "Texas", image: "cottage.jpg", video: "cottage.mp4", lat: 31.9686, lng: -99.9018 }
  ]);

  useEffect(() => {
    // Fetch property listings from an API or database
    // Example: fetch('/api/properties').then(res => res.json()).then(data => setProperties(data));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleShowVideo = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
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
              <Card onClick={() => handleShowVideo(property)} style={{ cursor: "pointer" }}>
                <Card.Img variant="top" src={property.image} alt={property.title} />
                <Card.Body>
                  <Card.Title>{property.title}</Card.Title>
                  <Card.Text>
                    <strong>Location:</strong> {property.location}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> {property.price}
                  </Card.Text>
                  <iframe
                    width="100%"
                    height="200"
                    frameBorder="0"
                    style={{ border: 0, marginTop: "10px", borderRadius: "8px" }}
                    src={`https://maps.google.com/maps?q=${property.lat},${property.lng}&hl=es&z=14&output=embed`}
                    allowFullScreen
                  ></iframe>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-gray-500">No properties found.</p>
        )}
      </Row>

      {/* Video Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProperty?.title} - Video Tour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProperty && (
            <video width="100%" controls>
              <source src={selectedProperty.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Buy;
