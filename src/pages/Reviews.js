import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const Reviews = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Reviews</h2>
      
      <Row>
        <Col md={12}>
          <Card className="shadow p-4">
            <Card.Body>
              <Card.Title>⭐ Recent Reviews</Card.Title>
              <Card.Text>
                Here, you can view the feedback from clients and potential buyers regarding your properties and services.
              </Card.Text>
              <ul>
                <li>⭐ "Fantastic service and very professional. Highly recommend!" - John Doe</li>
                <li>⭐ "Found the perfect home thanks to their excellent guidance." - Sarah Lee</li>
                <li>⭐ "Very responsive and efficient. A pleasure to work with." - Mike Johnson</li>
              </ul>
              
              <Button variant="success" className="mt-3">Leave a Review</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
