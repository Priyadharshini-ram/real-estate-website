import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const Buy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedProperty, setExpandedProperty] = useState(null);

  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury Villa",
      price: "$500,000",
      location: "New York",
      image: "villa.jpg",
      video: "villa.mp4",
      lat: 40.7128,
      lng: -74.0060,
      description: "A stunning luxury villa featuring spacious interiors, a private pool, and breathtaking city views. Ideal for upscale living."
    },
    {
      id: 2,
      title: "Modern Apartment",
      price: "$300,000",
      location: "Los Angeles",
      image: "apartment.jpg",
      video: "apartment.mp4",
      lat: 34.0522,
      lng: -118.2437,
      description: "A sleek and modern apartment located in the heart of LA, offering high-end amenities and easy access to entertainment hubs."
    },
    {
      id: 3,
      title: "Cozy Cottage",
      price: "$200,000",
      location: "Texas",
      image: "cottage.jpg",
      video: "cottage.mp4",
      lat: 31.9686,
      lng: -99.9018,
      description: "A charming countryside cottage surrounded by lush greenery, perfect for a peaceful retreat or vacation home."
    }
  ]);

  useEffect(() => {
    // Fetch property listings from an API or database
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePropertyClick = (id) => {
    setExpandedProperty(expandedProperty === id ? null : id); // Toggle expansion
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
              <Card 
                onClick={() => handlePropertyClick(property.id)} 
                style={{ cursor: "pointer" }}
              >
                <Card.Img variant="top" src={property.image} alt={property.title} />
                <Card.Body>
                  <Card.Title>{property.title}</Card.Title>
                  <Card.Text>
                    <strong>Location:</strong> {property.location}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> {property.price}
                  </Card.Text>

                  {expandedProperty === property.id && (
                    <>
                      {/* Property Description */}
                      <p className="text-muted">{property.description}</p>

                      {/* Video Tour */}
                      <video width="100%" controls className="rounded">
                        <source src={property.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Google Map */}
                      <iframe
                        width="100%"
                        height="200"
                        frameBorder="0"
                        style={{ border: 0, marginTop: "10px", borderRadius: "8px" }}
                        src={`https://maps.google.com/maps?q=${property.lat},${property.lng}&hl=es&z=14&output=embed`}
                        allowFullScreen
                      ></iframe>
                    </>
                  )}
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
