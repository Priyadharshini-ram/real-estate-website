import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Image } from "react-bootstrap";
import fraudImage from "../assets/images/report fraud.jpg"; // Ensure the image exists in this path

const ReportFraud = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Fraud Report Submitted:", { name, email, description });
    alert("Your fraud report has been submitted.");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Report a Fraud</h2>

      {/* Image & Form Section */}
      <Row className="align-items-stretch">
        {/* Image Section */}
        <Col xs={12} md={6} className="d-flex">
          <Image
            src={fraudImage}
            alt="Report Fraud"
            fluid
            rounded
            className="shadow w-100"
            style={{ minHeight: "100%", objectFit: "cover" }}
          />
        </Col>

        {/* Form Section */}
        <Col xs={12} md={6} className="d-flex">
          <Card className="shadow p-4 w-100 d-flex flex-column justify-content-center">
            <Card.Body>
              <Card.Title>Submit Your Fraud Report</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formDescription" className="mb-3">
                  <Form.Label>Description of the Fraud</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Provide a detailed description of the fraudulent activity"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="danger" type="submit" className="mt-3">
                  Submit Report
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReportFraud;
