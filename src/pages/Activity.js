import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const Activity = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Activity</h2>
      <Row>
        <Col md={12}>
          <Card className="shadow p-4">
            <Card.Body>
              <Card.Title>Recent Activities</Card.Title>
              <Card.Text>
                Here, you can view your recent interactions, property views, searches, and more.
              </Card.Text>
              <ul>
                <li>✅ Recently Viewed  </li>
                <li>✅ Saved to favorites</li>
                <li>✅ Saved to searches</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Activity;
