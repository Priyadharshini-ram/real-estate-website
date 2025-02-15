import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import  Button  from "../ui/Button"; // Updated import for Button
import  Input  from "../ui/Input"; // Updated import for Input
import  Textarea  from "../ui/Textarea"; // Updated import for Textarea
import { Calendar } from "lucide-react";

const Activity = () => {
  const [activities, setActivities] = useState([
    { title: "Property Viewing", date: "2025-02-15", description: "Scheduled visit to a luxury apartment." },
    { title: "Client Meeting", date: "2025-02-18", description: "Discussing investment opportunities." },
  ]);
  const [newActivity, setNewActivity] = useState({ title: "", date: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity({ ...newActivity, [name]: value });
  };

  const addActivity = () => {
    if (newActivity.title && newActivity.date && newActivity.description) {
      setActivities([...activities, newActivity]);
      setNewActivity({ title: "", date: "", description: "" });
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Your Activity</h2>
      <Row>
        <Col md={12}>
          <Card className="shadow p-4">
            <Card.Body>
              <Card.Title>Recent Activities</Card.Title>
              <Card.Text>
                Here, you can view your recent interactions, property views, searches, and more.
              </Card.Text>
              <ul>
                {activities.map((activity, index) => (
                  <li key={index}>✅ {activity.title}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <Card className="shadow p-4">
            <Card.Body>
              <h3 className="font-semibold mb-4">Upcoming Activities</h3>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Activity Title"
                  name="title"
                  value={newActivity.title}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Input
                  type="date"
                  name="date"
                  value={newActivity.date}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Textarea
                  placeholder="Activity Description"
                  name="description"
                  value={newActivity.description}
                  onChange={handleInputChange}
                  className="mb-2"
                />
                <Button onClick={addActivity} className="w-full bg-blue-500">
                  Add Activity
                </Button>
              </div>

              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <Card key={index} className="p-4 border border-gray-200">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" /> {activity.date}
                    </div>
                    <h3 className="font-semibold">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </Card>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Activity;
