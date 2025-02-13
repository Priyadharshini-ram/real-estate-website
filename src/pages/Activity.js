import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const Activity = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Your Activity</h2>
      <Row>
        <Col md={12}>
          <Card className="shadow p-4">
            <Card.Body>
              <Card.Title>Recent Activities</Card.Title>
              <Card.Text>
                Here, you can view your recent interactions, property views, searches, and more.
              </Card.Text>
              <ul>
                <li>✅ Viewed "Luxury Beachfront Villa" in Miami</li>
                <li>✅ Saved "Apartment in New York" to favorites</li>
                <li>✅ Inquired about "2BHK flat in Los Angeles"</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Activity;
