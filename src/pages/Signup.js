import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../assets/images/real-estate-white-graphics-design-qr9394ynnogt96or.jpg"

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with:", { name, email, password });
    // Add signup logic here
  };
 return (
    <Container className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <Card style={{ width: "25rem" }} className="p-4 shadow">
        <h3 className="text-center">Sign Up</h3>
        <Form onSubmit={handleSignup}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
         </Form.Group>
          <Button variant="success" type="submit" className="w-100 mt-4">
            Sign Up
          </Button>
        </Form>
        <p className="text-center mt-3">
          Already have an account? <a href="/login">Login</a>
        </p>
</Card>
    </Container>
  );
};
export default Signup;
