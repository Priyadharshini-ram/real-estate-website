import React, { useState, useEffect } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const LandPlot = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [landPlots, setLandPlots] = useState([
    {
      id: 1,
      title: "Spacious Farm Land",
      price: "$50,000",
      location: "Texas",
      size: "5 acres",
      image: "farm_land.jpg",
      video: "farm_land.mp4",
      lat: 31.9686,
      lng: -99.9018,
    },
    {
      id: 2,
      title: "Commercial Plot",
      price: "$120,000",
      location: "New York",
      size: "2 acres",
      image: "commercial_plot.jpg",
      video: "commercial_plot.mp4",
      lat: 40.7128,
      lng: -74.0060,
    },
    {
      id: 3,
      title: "Residential Plot",
      price: "$80,000",
      location: "California",
      size: "3 acres",
      image: "residential_plot.jpg",
      video: "residential_plot.mp4",
      lat: 36.7783,
      lng: -119.4179,
    },
  ]);

  useEffect(() => {
    // Fetch land/plot listings from an API or database
    // Example: fetch('/api/lands').then(res => res.json()).then(data => setLandPlots(data));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleShowVideo = (plot) => {
    setSelectedPlot(plot);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlot(null);
  };

  const filteredLandPlots = landPlots.filter(
    (plot) =>
      plot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plot.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Find Land & Plots for Sale</h2>

      <input
        type="text"
        placeholder="Search by title or location..."
        value={searchQuery}
        onChange={handleSearch}
        className="form-control mb-4"
      />

      <div className="row">
        {filteredLandPlots.length > 0 ? (
          filteredLandPlots.map((plot) => (
            <div key={plot.id} className="col-md-4 mb-4">
              <Card className="shadow-sm">
                <Card.Img
                  variant="top"
                  src={plot.image}
                  alt={plot.title}
                  className="object-cover"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{plot.title}</Card.Title>
                  <Card.Text>
                    <strong>Location:</strong> {plot.location}
                    <br />
                    <strong>Size:</strong> {plot.size}
                    <br />
                    <strong>Price:</strong> <span className="text-primary">{plot.price}</span>
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleShowVideo(plot)}>
                    Watch Video
                  </Button>

                  {/* Google Map */}
                  <iframe
                    width="100%"
                    height="200"
                    frameBorder="0"
                    style={{ border: 0, marginTop: "10px", borderRadius: "8px" }}
                    src={`https://maps.google.com/maps?q=${plot.lat},${plot.lng}&hl=es&z=14&output=embed`}
                    allowFullScreen
                  ></iframe>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No land/plots found.</p>
        )}
      </div>

      {/* Video Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPlot?.title} - Video Tour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPlot && (
            <video width="100%" controls>
              <source src={selectedPlot.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LandPlot;
