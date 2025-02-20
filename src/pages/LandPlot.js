import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const LandPlot = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPlot, setExpandedPlot] = useState(null);

  const [plots, setPlots] = useState([
    {
      id: 1,
      title: "Spacious Residential Plot",
      price: "$150,000",
      location: "San Francisco, CA",
      image: "residential-plot.jpg",
      video: "residential-plot.mp4",
      lat: 37.7749,
      lng: -122.4194,
      description: "A prime residential plot in the heart of San Francisco, ideal for building your dream home with scenic city views."
    },
    {
      id: 2,
      title: "Commercial Land",
      price: "$300,000",
      location: "Dallas, TX",
      image: "commercial-land.jpg",
      video: "commercial-land.mp4",
      lat: 32.7767,
      lng: -96.7970,
      description: "Strategically located commercial land, perfect for businesses looking to establish their presence in a bustling area."
    },
    {
      id: 3,
      title: "Farmland for Sale",
      price: "$100,000",
      location: "Nashville, TN",
      image: "farmland.jpg",
      video: "farmland.mp4",
      lat: 36.1627,
      lng: -86.7816,
      description: "Expansive farmland suitable for agriculture or a countryside retreat. Peaceful surroundings with fertile soil."
    }
  ]);

  useEffect(() => {
    // Fetch land plot listings from an API or database if needed
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePlotClick = (id) => {
    setExpandedPlot(expandedPlot === id ? null : id); // Toggle expansion
  };

  const filteredPlots = plots.filter((plot) =>
    plot.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Explore Available Land & Plots</h2>

      <Form.Control
        type="text"
        placeholder="Search by title or location..."
        value={searchQuery}
        onChange={handleSearch}
        className="mb-4"
      />

      <Row>
        {filteredPlots.length > 0 ? (
          filteredPlots.map((plot) => (
            <Col md={4} key={plot.id} className="mb-4">
              <Card 
                onClick={() => handlePlotClick(plot.id)} 
                style={{ cursor: "pointer" }}
              >
                <Card.Img variant="top" src={plot.image} alt={plot.title} />
                <Card.Body>
                  <Card.Title>{plot.title}</Card.Title>
                  <Card.Text>
                    <strong>Location:</strong> {plot.location}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> {plot.price}
                  </Card.Text>

                  {expandedPlot === plot.id && (
                    <>
                      {/* Plot Description */}
                      <p className="text-muted">{plot.description}</p>

                      {/* Video Tour */}
                      <video width="100%" controls className="rounded">
                        <source src={plot.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Google Map */}
                      <iframe
                        width="100%"
                        height="200"
                        frameBorder="0"
                        style={{ border: 0, marginTop: "10px", borderRadius: "8px" }}
                        src={`https://maps.google.com/maps?q=${plot.lat},${plot.lng}&hl=es&z=14&output=embed`}
                        allowFullScreen
                      ></iframe>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-gray-500">No land plots found.</p>
        )}
      </Row>
    </Container>
  );
};

export default LandPlot;
