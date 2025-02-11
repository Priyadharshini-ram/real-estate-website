import React, { useState } from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";

const Transactions = () => {
  const [transactions] = useState([
    {
      id: 1,
      type: "Purchase",
      property: "3 Bedroom Apartment",
      date: "2025-01-15",
      price: "$350,000",
    },
    {
      id: 2,
      type: "Sale",
      property: "2 Bedroom House",
      date: "2024-11-20",
      price: "$290,000",
    },
    {
      id: 3,
      type: "Rental",
      property: "Studio Apartment",
      date: "2024-10-05",
      price: "$1,200/month",
    },
  ]);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Transactions</h2>
      <Card className="shadow p-4">
        <Card.Body>
          <h5>Your past transactions are listed below:</h5>
          <ListGroup>
            {transactions.map((transaction) => (
              <ListGroup.Item key={transaction.id} className="d-flex justify-content-between">
                <div>
                  <strong>{transaction.type}</strong> - {transaction.property}
                  <br />
                  <small>{transaction.date}</small>
                </div>
                <div>
                  <span>{transaction.price}</span>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="secondary" className="mt-3" href="/profile">Back to Profile</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Transactions;
