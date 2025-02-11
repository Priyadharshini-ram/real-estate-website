import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const ReportFraud = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the fraud report (e.g., send it to the backend)
    console.log("Fraud Report Submitted:", { name, email, description });
    alert("Your fraud report has been submitted.");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Report a Fraud</h2>
      <Card className="shadow p-4">
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

            <Button variant="danger" type="submit" className="w-100 mt-3">
              Submit Report
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReportFraud;
