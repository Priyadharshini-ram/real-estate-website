import React, { useState } from "react";
import { Container, Row, Col, Card, Accordion, Button, Form, Image } from "react-bootstrap";
import faqImage from "../assets/images/helpcenter.jpg"; // Ensure the image exists in this path

const HelpCenter = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", message);
    alert("Your message has been submitted!");
    setMessage("");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Help Center</h2>

      {/* FAQ Section with Image */}
      <Row className="align-items-center">
        {/* Image - Above FAQ on small screens, beside it on large screens */}
        <Col xs={12} md={6} className="mb-4 mb-md-0 d-flex justify-content-center">
          <Image 
            src={faqImage} 
            alt="Help Center Illustration" 
            fluid 
            rounded 
            className="shadow w-100"
          />
        </Col>

        {/* FAQ Section */}
        <Col xs={12} md={6}>
          <Card className="shadow p-4">
            <Card.Body>
              <Card.Title>How can we assist you?</Card.Title>
              <Card.Text>
                Welcome to the Help Center. If you have a question or need assistance, please check our FAQs below or send us a message.
              </Card.Text>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How do I buy a property?</Accordion.Header>
                  <Accordion.Body>
                    Browse our listings, contact the seller, and schedule a viewing to get started. We also provide expert guidance throughout the process.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>How do I list my property for sale?</Accordion.Header>
                  <Accordion.Body>
                    Create an account, navigate to the "Sell" section, fill in the property details, and submit your listing. Our team will verify and publish it.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>What do I do if I encounter fraudulent activity?</Accordion.Header>
                  <Accordion.Body>
                    You can report any suspicious activities through the 'Report a Fraud' section in the Settings. Our team will investigate and take necessary action.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Form */}
      <Card className="shadow p-4 mt-4">
        <Card.Body>
          <Card.Title>Still need help? Send us a message</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue or question here..."
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
          <Button variant="primary" href="/contact" className="mt-3 ml-3">
            Contact Support
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HelpCenter;
