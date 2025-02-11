import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";

const HelpCenter = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the message submission (e.g., send it to the backend or show confirmation)
    console.log("Message submitted:", message);
    alert("Your message has been submitted!");
    setMessage(""); // Clear the message after submission
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Help Center</h2>
      <Card className="shadow p-4">
        <Card.Body>
          <Card.Title>How can we assist you?</Card.Title>
          <Card.Text>
            Welcome to the Help Center. If you have a question or need assistance, please feel free to send us a message below.
          </Card.Text>
          <h5>Frequently Asked Questions (FAQs)</h5>
          <ul>
            <li><strong>How do I buy a property?</strong> - Browse our listings, contact the seller, and schedule a viewing to get started.</li>
            <li><strong>How do I list my property for sale?</strong> - Create an account, fill in the property details, and we'll handle the rest.</li>
            <li><strong>What do I do if I encounter fraudulent activity?</strong> - You can report any suspicious activities through the 'Report a Fraud' section in the Settings.</li>
          </ul>

          {/* Message Bar */}
          <h5>Send us a message</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit Message
            </Button>
          </Form>

          <Button variant="primary" href="/contact" className="mt-3 ml-3">Contact Support</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HelpCenter;
