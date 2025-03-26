import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("authToken") !== null;

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // ✅ Remove token
    navigate("/login"); // ✅ Redirect to Login page
    window.location.reload(); // ✅ Reload to update UI
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Premium Properties</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/map">Map</Nav.Link>

            {/* Profile Dropdown */}
            <NavDropdown title="Profile" id="profile-dropdown">
              {!isAuthenticated ? (
                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              ) : (
                <>
                  <NavDropdown.Item as={Link} to="/activity">Activity</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/reviews">Reviews</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/transactions">Transactions</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/shortlisted">Shortlisted</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item> {/* ✅ Logout Option */}
                </>
              )}
            </NavDropdown>

            {/* Settings Dropdown */}
            <NavDropdown title="Menu" id="menu-dropdown">
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
