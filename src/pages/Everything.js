import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHome, FaCouch, FaBalanceScale, FaClipboardList, FaFileContract, FaFileInvoice, FaSearch, FaChartLine, FaFileSignature } from "react-icons/fa";

const services = [
  { icon: <FaHome />, title: "Home Loan" },
  { icon: <FaCouch />, title: "Home Interior" },
  { icon: <FaBalanceScale />, title: "Property Legal Services" },
  { icon: <FaClipboardList />, title: "Property Management" },
  { icon: <FaFileContract />, title: "Online Rent Agreement" },
  { icon: <FaFileInvoice />, title: "Rent Receipt Generator" },
  { icon: <FaSearch />, title: "Title Search" },
  { icon: <FaChartLine />, title: "Valuation" },
  { icon: <FaFileSignature />, title: "Property Registration" },
];

const Everything = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Everything You Need at One Place</h2>
      <Row className="g-4">
        {services.map((service, index) => (
          <Col md={4} key={index} className="text-center">
            <Card className="p-4 shadow-sm">
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
