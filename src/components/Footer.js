import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="bg-dark text-white py-4 mt-5">
        <Container className="text-center">
          <p className="mb-1">© {new Date().getFullYear()} Real Estate Inc. All rights reserved.</p>
          <p className="mb-0">
            <span
              className="text-white mx-2"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => setShowPrivacy(true)}
            >
              Privacy Policy
            </span>
            |
            <span
              className="text-white mx-2"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => setShowTerms(true)}
            >
              Terms of Service
            </span>
          </p>
        </Container>
      </footer>

      {/* Terms of Service Modal */}
      <Modal show={showTerms} onHide={() => setShowTerms(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Terms of Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>1. Introduction</h5>
          <p>Welcome to Premium Properties. By using our website, you agree to comply with and be bound by these terms.</p>

          <h5>2. Use of Services</h5>
          <p>Our platform provides real estate listings, insights, and services. You agree to use it lawfully.</p>

          <h5>3. User Responsibilities</h5>
          <p>Users must provide accurate information and refrain from fraudulent activity or misuse of the platform.</p>

          <h5>4. Liability Disclaimer</h5>
          <p>We do not guarantee the accuracy of listings. Users are advised to verify details before making decisions.</p>

          <h5>5. Changes to Terms</h5>
          <p>We reserve the right to modify these terms at any time. Continued use of the site indicates acceptance.</p>

          <h5>6. Contact Us</h5>
          <p>If you have any questions, please contact us at <a href="mailto:support@premiumproperties.com">support@premiumproperties.com</a>.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTerms(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal show={showPrivacy} onHide={() => setShowPrivacy(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>1. Introduction</h5>
          <p>Your privacy is important to us. This policy explains how we collect, use, and protect your data.</p>

          <h5>2. Information We Collect</h5>
          <p>We collect personal details (name, email, phone) when you sign up or interact with our services.</p>

          <h5>3. How We Use Your Information</h5>
          <p>We use your data for service improvement, customer support, and marketing communications.</p>

          <h5>4. Data Protection</h5>
          <p>We implement security measures to protect your personal information from unauthorized access.</p>

          <h5>5. Third-Party Sharing</h5>
          <p>We do not sell your data. However, we may share it with trusted partners for essential services.</p>

          <h5>6. Your Rights</h5>
          <p>You have the right to access, modify, or delete your data at any time.</p>

          <h5>7. Changes to This Policy</h5>
          <p>We may update our Privacy Policy occasionally. Changes will be reflected on this page.</p>

          <h5>8. Contact Us</h5>
          <p>If you have any concerns, reach out to us at <a href="mailto:privacy@premiumproperties.com">privacy@premiumproperties.com</a>.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPrivacy(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Footer;
