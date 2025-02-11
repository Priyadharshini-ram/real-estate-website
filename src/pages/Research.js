import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Research = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Real Estate Research & Insights</h2>
      <Row>
        {/* Market Trends Section */}
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Market Trends</Card.Title>
              <Card.Text>
                Discover the latest trends in the real estate market. We provide up-to-date insights into property values, rental yields, and future forecasts.
              </Card.Text>
              <Button variant="primary" href="/market-trends">View Trends</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Property Valuation Section */}
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Property Valuation</Card.Title>
              <Card.Text>
                Get insights into property valuation, including how to determine the market value of a property and tips on improving property value.
              </Card.Text>
              <Button variant="primary" href="/property-valuation">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Expert Articles Section */}
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Expert Articles</Card.Title>
              <Card.Text>
                Read expert articles on a variety of real estate topics, including investment advice, buying/selling tips, and more.
              </Card.Text>
              <Button variant="primary" href="/articles">Browse Articles</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Featured Insights Section */}
      <Row className="mt-5">
        <Col sm={12} md={6}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Featured Insight: 2025 Property Market Forecast</Card.Title>
              <Card.Text>
                An in-depth analysis of what the real estate market is expected to look like in 2025. Find out what areas are expected to see growth.
              </Card.Text>
              <Button variant="primary" href="/2025-forecast">Read Full Report</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Research;
