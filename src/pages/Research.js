import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaChartLine, FaCalculator, FaNewspaper, FaGlobe } from "react-icons/fa";

const Research = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">📊 Real Estate Research & Insights</h2>

      {/* Horizontal Scrollable Row */}
      <div className="d-flex flex-row flex-nowrap overflow-auto gap-3 p-2">
        {/* Market Trends Section */}
        <Card className="shadow text-center flex-shrink-0" style={{ width: "300px" }}>
          <Card.Body className="d-flex flex-column">
            <FaChartLine size={40} className="mb-3 text-primary" />
            <Card.Title>Market Trends</Card.Title>
            <Card.Text className="flex-grow-1">
              Discover the latest real estate market trends, including property values and forecasts.
            </Card.Text>
            <Button variant="primary" href="/market-trends">View Trends</Button>
          </Card.Body>
        </Card>

        {/* Property Valuation Section */}
        <Card className="shadow text-center flex-shrink-0" style={{ width: "300px" }}>
          <Card.Body className="d-flex flex-column">
            <FaCalculator size={40} className="mb-3 text-primary" />
            <Card.Title>Property Valuation</Card.Title>
            <Card.Text className="flex-grow-1">
              Learn how to determine market value and get tips on increasing property worth.
            </Card.Text>
            <Button variant="primary" href="/property-valuation">Learn More</Button>
          </Card.Body>
        </Card>

        {/* Expert Articles Section */}
        <Card className="shadow text-center flex-shrink-0" style={{ width: "300px" }}>
          <Card.Body className="d-flex flex-column">
            <FaNewspaper size={40} className="mb-3 text-primary" />
            <Card.Title>Expert Articles</Card.Title>
            <Card.Text className="flex-grow-1">
              Access articles on investment strategies, buying/selling tips, and market insights.
            </Card.Text>
            <Button variant="primary" href="/articles">Browse Articles</Button>
          </Card.Body>
        </Card>

        {/* 2025 Forecast Section */}
        <Card className="shadow text-center flex-shrink-0" style={{ width: "300px" }}>
          <Card.Body className="d-flex flex-column">
            <FaGlobe size={50} className="mb-3 text-success" />
            <Card.Title>🌍 2025 Property Market Forecast</Card.Title>
            <Card.Text className="flex-grow-1">
              Discover which areas will see the most growth in 2025.
            </Card.Text>
            <Button variant="success" href="/2025-forecast">Read Full Report</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Research;
