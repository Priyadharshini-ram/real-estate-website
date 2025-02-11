import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">RealEstate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/research">Research & Insights</Nav.Link>

            

            {/* Profile Dropdown */}
            <NavDropdown title="Profile" id="profile-dropdown">
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/activity">Activity</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reviews">Reviews</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transactions">Transactions</NavDropdown.Item> 
            </NavDropdown>

            {/* Settings Dropdown */}
            <NavDropdown title="Settings" id="settings-dropdown">
              <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/report-fraud">Report a Fraud</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/help-center">Visit Help Center</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
