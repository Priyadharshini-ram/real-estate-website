import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container className="text-center">
        <p className="mb-1">© {new Date().getFullYear()} Real Estate Inc. All rights reserved.</p>
        <p className="mb-0">
          <a href="/privacy" className="text-white mx-2">Privacy Policy</a> | 
          <a href="/terms" className="text-white mx-2">Terms of Service</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
