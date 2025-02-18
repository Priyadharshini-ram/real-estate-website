import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const Sell = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    contact: "",
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Property listed successfully!");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Sell Your Property</h2>
      <p className="text-center">
        Looking to sell your property? We can help you list it and connect with potential buyers faster than ever.
      </p>

      {/* Information Section */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow p-4 mb-4">
            <Card.Body>
              <Card.Title>🏠 Have a Property to Sell?</Card.Title>
              <Card.Text>
                Listing your property with us means you’ll get access to a vast network of buyers, market insights,
                and expert support throughout the entire selling process. Our team ensures that your listing reaches the
                right audience quickly and effectively.
              </Card.Text>
              <Card.Title>🚀 List Your Property & Connect With Clients Faster!</Card.Title>
              <Card.Text>
                Our user-friendly platform allows you to list your property with ease. Whether it’s a home, apartment, or commercial property,
                we handle everything from listing to negotiations, so you can sell your property quickly and efficiently.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Listing Form Section */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow p-4">
            <Card.Body>
              <h3 className="mb-3">List Your Property</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Property Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter property title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    placeholder="Enter property description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="contact"
                    placeholder="Enter contact number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Upload Images</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  List Property
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Sell;
