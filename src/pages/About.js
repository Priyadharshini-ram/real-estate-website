import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import aboutImage from "../assets/images/about-us.webp"; // Ensure the image exists in this path

const About = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="text-center">
        Welcome to <strong>Premium Properties</strong>, your trusted partner in buying, selling, and renting properties.
        We are committed to delivering exceptional service with integrity and expertise.
      </p>

      {/* Image & Content Section */}
      <Row className="align-items-stretch">
        {/* Image Section */}
        <Col xs={12} md={6} className="d-flex">
          <Image
            src={aboutImage}
            alt="About Us"
            fluid
            rounded
            className="shadow w-100"
            style={{ minHeight: "100%", objectFit: "cover" }}
          />
        </Col>

        {/* Content Section */}
        <Col xs={12} md={6} className="d-flex">
          <Card className="shadow p-4 w-100 d-flex flex-column justify-content-center">
            <Card.Body>
              <Card.Title>🏡 Who We Are</Card.Title>
              <Card.Text>
                Established in 2010, <strong>Premium Properties</strong> has grown into a leading real estate agency  
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

      {/* Meet Our Team Section */}
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
                  <Card.Text>
                    With 15+ years of experience in real estate, John leads our company with passion and expertise.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow">
                <Card.Body>
                  <Card.Title>👩‍💼 Jane Smith</Card.Title>
                  <Card.Subtitle>Lead Property Consultant</Card.Subtitle>
                  <Card.Text>
                    Jane specializes in luxury properties and helps clients find their perfect homes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow">
                <Card.Body>
                  <Card.Title>📜 Michael Johnson</Card.Title>
                  <Card.Subtitle>Legal Advisor</Card.Subtitle>
                  <Card.Text>
                    Michael ensures all legal aspects of property transactions are handled with precision.
                  </Card.Text>
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
