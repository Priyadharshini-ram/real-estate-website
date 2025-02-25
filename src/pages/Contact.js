import React from "react";
import { Container, Row, Col, Form, Button, Image, Card } from "react-bootstrap";
import contactImage from "../assets/images/contact us.avif"; // Ensure the image exists in this path

const Contact = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center">
        Have any questions? Feel free to reach out to us, and our team will get back to you as soon as possible.
      </p>

      {/* Contact Form & Image Section */}
      <Row className="align-items-stretch">
        {/* Image Section */}
        <Col xs={12} md={6} className="d-flex">
          <Image 
            src={contactImage} 
            alt="Contact Us" 
            fluid 
            rounded 
            className="shadow w-100"
            style={{ minHeight: "100%", objectFit: "cover" }}
          />
        </Col>

        {/* Contact Form Section */}
        <Col xs={12} md={6} className="d-flex">
          <Card className="shadow p-4 w-100 d-flex flex-column justify-content-center">
            <Card.Body>
              <Card.Title>📩 Get in Touch</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your message..." required />
                </Form.Group>
                <Button variant="primary" type="submit">Send Message</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
