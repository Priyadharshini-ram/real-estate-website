import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const SearchAgents = () => {
  return (
    <Container className="mt-5 text-center">
      {/* Title */}
      <h2 className="mb-4 fw-bold">Find Real Estate Agents in Your City</h2>

      {/* Search Bar */}
      <Form className="mb-4">
        <Row className="justify-content-center">
          <Col md={6} sm={8} xs={10}>
            <Form.Control
              type="text"
              placeholder="Enter City Name..."
              className="p-3 text-center"
            />
          </Col>
          <Col xs="auto">
            <Button variant="primary" size="lg">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Agent Listings */}
      <Row className="g-4 justify-content-center">
        {[
          { name: "John Doe", specialty: "Luxury properties in Chennai" },
          { name: "Priya Sharma", specialty: "Rental properties in Coimbatore" },
          { name: "Arun Kumar", specialty: "Land and plots in Madurai" },
        ].map((agent, index) => (
          <Col md={4} sm={6} xs={12} key={index}>
            <Card className="p-4 shadow-sm text-center">
              <Card.Body>
                <Card.Title className="fw-bold">{agent.name}</Card.Title>
                <Card.Text className="text-muted">{agent.specialty}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchAgents;
