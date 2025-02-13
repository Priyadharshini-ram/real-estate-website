import React, { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { name: "John Doe", rating: 5, comment: "Great service and properties!" },
    { name: "Jane Smith", rating: 4, comment: "Smooth experience, but room for improvement." },
  ]);
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const addReview = () => {
    if (newReview.name && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", rating: 5, comment: "" });
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">User Reviews</h2>
      <Card className="p-4 shadow mb-4">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rating (1-5)</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="5"
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Your Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write your review"
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={addReview} className="w-100">
            Submit Review
          </Button>
          
        </Form>
      </Card>

      <div className="mt-4">
        {reviews.map((review, index) => (
          <Card key={index} className="mb-3 p-3 shadow-sm">
            <h5>{review.name}</h5>
            <div className="text-warning">
              {[...Array(review.rating)].map((_, i) => (
                <StarFill key={i} className="me-1" />
              ))}
            </div>
            <p>{review.comment}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Reviews;
