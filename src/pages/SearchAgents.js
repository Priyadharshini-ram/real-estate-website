import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const SearchAgents = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Find Real Estate Agents in Your City</h2>
      <Form className="mb-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Control type="text" placeholder="Enter City Name..." className="p-3" />
          </Col>
          <Col xs="auto">
            <Button variant="primary" size="lg">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="g-4">
        {/* Sample Agent Cards */}
        <Col md={4}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>Expert in luxury properties, Chennai.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Title>Priya Sharma</Card.Title>
              <Card.Text>Specialist in rental properties, Coimbatore.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Title>Arun Kumar</Card.Title>
              <Card.Text>Trusted agent for plots and land deals, Madurai.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchAgents;
