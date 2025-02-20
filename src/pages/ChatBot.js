import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "I'm an AI! How can I help you with real estate?", sender: "ai" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {/* Toggle Button */}
      <Button variant="primary" onClick={() => setShowChat(!showChat)}>
        {showChat ? "Close AI Chat" : "Chat with AI"}
      </Button>

      {/* Chatbot Box */}
      {showChat && (
        <Card style={{ width: "300px", position: "absolute", bottom: "50px", right: "0", background: "#f8f9fa" }}>
          <Card.Body>
            <Card.Title className="text-center">💬 Chat with AI</Card.Title>
            <div style={{ maxHeight: "250px", overflowY: "auto", marginBottom: "10px" }}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: msg.sender === "user" ? "right" : "left",
                    background: msg.sender === "user" ? "#007bff" : "#e9ecef",
                    color: msg.sender === "user" ? "white" : "black",
                    padding: "8px",
                    borderRadius: "8px",
                    marginBottom: "5px",
                    width: "fit-content",
                    maxWidth: "80%",
                    marginLeft: msg.sender === "user" ? "auto" : "0",
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            {/* Chat Input */}
            <Form onSubmit={handleSendMessage}>
              <Form.Group className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button type="submit" variant="success" className="ms-2">
                  Send
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;
