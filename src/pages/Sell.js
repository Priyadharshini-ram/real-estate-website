import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Sell = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Sell Your Property</h2>
      <p className="text-center">
        Looking to sell your property? We can help you list it and connect with potential buyers faster than ever.
      </p>

      {/* Section for listing a property */}
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow p-4">
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

              <Button variant="primary" className="w-100 mt-3">
                Sell Your Property Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Optional: You can add more content or images here */}
    </Container>
  );
};

export default Sell;
