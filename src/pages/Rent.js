import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const Rent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedProperty, setExpandedProperty] = useState(null);

  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury Villa",
      rent: "$2,500/month",
      location: "New York",
      image: "villa.jpg",
      video: "villa.mp4",
      lat: 40.7128,
      lng: -74.0060,
      description: "A spacious luxury villa with top-notch amenities, private garden, and a modern interior. Located in a prime area with excellent connectivity."
    },
    {
      id: 2,
      title: "Modern Apartment",
      rent: "$1,800/month",
      location: "Los Angeles",
      image: "apartment.jpg",
      video: "apartment.mp4",
      lat: 34.0522,
      lng: -118.2437,
      description: "A stylish modern apartment with breathtaking city views, high-end security, and easy access to restaurants and shopping centers."
    },
    {
      id: 3,
      title: "Cozy Cottage",
      rent: "$1,200/month",
      location: "Texas",
      image: "cottage.jpg",
      video: "cottage.mp4",
      lat: 31.9686,
      lng: -99.9018,
      description: "A peaceful countryside cottage, perfect for those looking for a cozy and relaxing retreat. Surrounded by nature with a spacious backyard."
    }
  ]);

  useEffect(() => {
    // Fetch rental property listings from an API or database
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
      <h2 className="text-center mb-4">Find Rental Properties</h2>

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
                    <strong>Rent:</strong> {property.rent}
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
          <p className="text-center text-gray-500">No rental properties found.</p>
        )}
      </Row>
    </Container>
  );
};

export default Rent;
