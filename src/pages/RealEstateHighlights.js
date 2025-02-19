import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRegBuilding, FaLaptopHouse, FaUsers, FaRocket, FaHandshake, FaSearch, FaBalanceScale, FaClipboardList, FaHome } from "react-icons/fa";

const highlights = [
  { icon: <FaRegBuilding />, title: "Luxury Listings", description: "Explore exclusive luxury homes in Tamil Nadu." },
  { icon: <FaLaptopHouse />, title: "Easy Platform", description: "List properties effortlessly and promote them." },
  { icon: <FaClipboardList />, title: "Best Resources", description: "Access expert real estate blogs and guides." },
  { icon: <FaUsers />, title: "Quality Service", description: "Screened and handpicked leads by professionals." },
  { icon: <FaRocket />, title: "Quick Response", description: "Expect fast replies from our dedicated team." },
  { icon: <FaHandshake />, title: "Direct Approach", description: "Connect without intermediaries or middlemen." },
  { icon: <FaSearch />, title: "Powerful Search", description: "Find your dream property with our advanced tools." },
  { icon: <FaBalanceScale />, title: "Compare Listings", description: "Compare multiple properties side-by-side." },
  { icon: <FaHome />, title: "Secure Transactions", description: "Transparent and hassle-free property dealings." }
];

const RealEstateHighlights = () => {
  return (
    <Container className="mt-5 text-center">
      <h2 className="mb-4 fw-bold">Why Choose Us?</h2>
      <p className="text-muted mb-5">Experience the best real estate services tailored for you.</p>
      
      <Row className="g-4">
        {highlights.map((item, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="d-flex">
            <Card className="shadow-lg border-0 rounded-lg p-4 text-center flex-fill highlight-card">
              <div className="text-primary display-4 mb-3">{item.icon}</div>
              <Card.Body>
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RealEstateHighlights;
