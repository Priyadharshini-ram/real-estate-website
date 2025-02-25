import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const Buy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedProperty, setExpandedProperty] = useState(null);
  const [shortlisted, setShortlisted] = useState([]);

  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury Villa",
      price: "Rs 50,00,000",
      location: "Trichy",
      image: "/assets/images/buy1.jpg", // ✅ Using public folder
      video: "/assets/videos/villa.mp4",
      lat: 10.7905,
      lng: 78.7047,
      description: "A stunning luxury villa featuring spacious interiors and peaceful views. Ideal for happy living."
    },
    {
      id: 2,
      title: "Modern Villa",
      price: "Rs 35,00,000",
      location: "Madurai",
      image: "/assets/images/buy2.jpg", // ✅ Using public folder
      video: "/assets/videos/apartment.mp4",
      lat: 9.9252,
      lng: 78.1198,
      description: "A simple and elegant house with great facilities."
    }
  ]);

  useEffect(() => {
    const savedShortlist = JSON.parse(localStorage.getItem("shortlisted")) || [];
    setShortlisted(savedShortlist);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePropertyClick = (id) => {
    setExpandedProperty(expandedProperty === id ? null : id);
  };

  const toggleShortlist = (property) => {
    let updatedShortlist;
    if (shortlisted.some((item) => item.id === property.id)) {
      updatedShortlist = shortlisted.filter((item) => item.id !== property.id);
    } else {
      updatedShortlist = [...shortlisted, property];
    }
    setShortlisted(updatedShortlist);
    localStorage.setItem("shortlisted", JSON.stringify(updatedShortlist));
  };

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Browse Properties for Sale</h2>

      <input
        type="text"
        placeholder="Search by title or location..."
        value={searchQuery}
        onChange={handleSearch}
        className="form-control mb-4"
      />

      <Row>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Col md={4} key={property.id} className="mb-4">
              <Card 
                onClick={() => handlePropertyClick(property.id)} 
                style={{ cursor: "pointer", position: "relative" }}
              >
                {/* Heart Icon for Shortlist */}
                <FaHeart 
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    color: shortlisted.some((item) => item.id === property.id) ? "red" : "gray",
                    fontSize: "20px",
                    cursor: "pointer"
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents triggering card click
                    toggleShortlist(property);
                  }}
                />

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
                      <p className="text-muted">{property.description}</p>

                      <video width="100%" controls className="rounded">
                        <source src={property.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

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
