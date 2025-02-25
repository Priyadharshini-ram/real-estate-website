import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHome, FaCouch, FaBalanceScale, FaClipboardList, FaFileContract, FaFileInvoice, FaSearch, FaChartLine, FaFileSignature } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import navigation hook



const services = [
  { icon: <FaHome />, title: "Home Loan", path: "/services/home-loan" },
  { icon: <FaCouch />, title: "Home Interior", path: "/services/home-interior" },
  { icon: <FaBalanceScale />, title: "Property Legal Services", path: "/services/legal-services" },
  { icon: <FaClipboardList />, title: "Property Management", path: "/services/property-management" },
  { icon: <FaFileContract />, title: "Online Rent Agreement", path: "/services/rent-agreement" },
  { icon: <FaFileInvoice />, title: "Rent Receipt Generator", path: "/services/rent-receipt" },
  { icon: <FaSearch />, title: "Title Search", path: "/services/title-search" },
  { icon: <FaChartLine />, title: "Valuation", path: "/services/valuation" },
  { icon: <FaFileSignature />, title: "Property Registration", path: "/services/property-registration" },
];

const Everything = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = (path) => {
    navigate(path); // Navigate to the selected service page
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Everything You Need at One Place</h2>
      <Row className="g-4">
        {services.map((service, index) => (
          <Col md={4} key={index} className="text-center">
            <Card className="p-4 shadow-sm cursor-pointer" onClick={() => handleClick(service.path)} style={{ cursor: "pointer" }}>
              <div className="text-primary display-4">{service.icon}</div>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Everything;
