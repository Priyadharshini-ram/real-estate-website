import React from "react";
import CountUp from "react-countup";
import { Container, Row, Col, Card } from "react-bootstrap";

const stats = [
  { title: "Total Properties", count: 5000, icon: "🏠" },
  { title: "Sold Properties", count: 3500, icon: "✅" },
  { title: "Available Properties", count: 1500, icon: "📌" },
  { title: "Happy Clients", count: 2000, icon: "😊" },
];

const Counter = () => {
  return (
    <Container className="mt-5 text-center">
      <h2 className="mb-4">Our Achievements</h2>
      <Row className="justify-content-center">
        {stats.map((stat, index) => (
          <Col md={3} sm={6} key={index} className="mb-4">
            <Card className="p-4 shadow-sm">
              <h1>{stat.icon}</h1>
              <h3>
                <CountUp start={0} end={stat.count} duration={3} separator="," />
              </h3>
              <p className="text-muted">{stat.title}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Counter;
