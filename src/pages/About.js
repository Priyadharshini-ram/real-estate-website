import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import aboutImage from "../assets/images/aboutus.jpg"; // Ensure the image exists in this path

const About = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="text-center">
        Welcome to <strong>RealEstate</strong>, your trusted partner in buying, selling, and renting properties.  
        We are committed to delivering exceptional service with integrity and expertise.
      </p>

      <Row className="align-items-center">
        <Col md={6}>
          <Image src={aboutImage} alt="About Us" fluid rounded className="shadow" />
        </Col>
        <Col md={6}>
          <Card className="shadow p-4">
            <Card.Body>
              <Card.Title>🏡 Who We Are</Card.Title>
              <Card.Text>
                Established in [Year], <strong>RealEstate</strong> has grown into a leading real estate agency  
                known for its professional and customer-centric approach. Our team consists of experienced  
                real estate agents, legal advisors, and property consultants who ensure a smooth real estate journey.
              </Card.Text>
              
              <Card.Title>🌟 Our Mission</Card.Title>
              <Card.Text>
                Our mission is to simplify real estate transactions and help our clients find their dream properties  
                while maximizing value and investment returns.
              </Card.Text>

              <Card.Title>💡 Why Choose Us?</Card.Title>
              <ul>
                <li>✔ Experienced & Trusted Real Estate Professionals</li>
                <li>✔ A Wide Range of Verified Properties</li>
                <li>✔ Seamless Buying, Selling, and Renting Process</li>
                <li>✔ Transparent Transactions with No Hidden Charges</li>
                <li>✔ Personalized Assistance for Every Client</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3 className="text-center">Meet Our Team</h3>
          <p className="text-center">
            Our team of skilled professionals is dedicated to helping you make informed real estate decisions.
          </p>
          
          <Row className="g-4 text-center">
            <Col md={4}>
              <Card className="shadow">
                <Card.Body>
                  <Card.Title>👨‍💼 John Doe</Card.Title>
                  <Card.Subtitle>Founder & CEO</Card.Subtitle>
                  <Card.Text>With 15+ years of experience in real estate, John leads our company with passion and expertise.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow">
                <Card.Body>
                  <Card.Title>👩‍💼 Jane Smith</Card.Title>
                  <Card.Subtitle>Lead Property Consultant</Card.Subtitle>
                  <Card.Text>Jane specializes in luxury properties and helps clients find their perfect homes.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow">
                <Card.Body>
                  <Card.Title>📜 Michael Johnson</Card.Title>
                  <Card.Subtitle>Legal Advisor</Card.Subtitle>
                  <Card.Text>Michael ensures all legal aspects of property transactions are handled with precision.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
