import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <p className="text-center">
        We offer comprehensive real estate solutions to help you buy, sell, or rent properties with ease.  
        Our team of experts ensures a seamless experience with personalized support.
      </p>

      <Row className="g-4">
        {/* Buying Assistance */}
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>🏡 Buying Assistance</Card.Title>
              <Card.Text>
                Find your dream home with our expert guidance. We provide market insights, property visits,  
                and negotiation support to get you the best deal.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Selling Support */}
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>💰 Selling Support</Card.Title>
              <Card.Text>
                Sell your property quickly and at the best price. We handle property listing, marketing,  
                and buyer negotiations for a smooth selling process.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Renting Solutions */}
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>🏢 Renting Solutions</Card.Title>
              <Card.Text>
                Looking for a rental property? We offer a wide range of verified rental options that  
                suit your budget and lifestyle.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Property Management */}
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>🔑 Property Management</Card.Title>
              <Card.Text>
                Our property management services take care of everything from tenant screening to maintenance,  
                ensuring hassle-free ownership for landlords.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Legal & Documentation Support */}
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>📜 Legal & Documentation</Card.Title>
              <Card.Text>
                Get assistance with legal paperwork, title verification, and documentation to ensure a  
                smooth and legally compliant transaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Home Loan Assistance */}
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>🏦 Home Loan Assistance</Card.Title>
              <Card.Text>
                We help you find the best home loan options with low-interest rates and easy repayment plans  
                through trusted financial partners.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
