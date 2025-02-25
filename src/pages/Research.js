import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { FaChartLine, FaCalculator, FaNewspaper, FaGlobe } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const researchItems = [
  {
    icon: <FaChartLine size={50} className="mb-3 text-primary" />,
    title: "Market Trends",
    text: "Discover the latest real estate market trends, including property values and forecasts.",
    link: "/market-trends",
  },
  {
    icon: <FaCalculator size={50} className="mb-3 text-primary" />,
    title: "Property Valuation",
    text: "Learn how to determine market value and get tips on increasing property worth.",
    link: "/property-valuation",
  },
  {
    icon: <FaNewspaper size={50} className="mb-3 text-primary" />,
    title: "Expert Articles",
    text: "Access articles on investment strategies, buying/selling tips, and market insights.",
    link: "/articles",
  },
  {
    icon: <FaGlobe size={60} className="mb-3 text-success" />,
    title: "🌍 2025 Property Market Forecast",
    text: "Discover which areas will see the most growth in 2025.",
    link: "/2025-forecast",
  },
];

const Research = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one card at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Slide every 2.5 seconds
    arrows: false,
  };

  return (
    <Container fluid className="mt-5 p-0">
      <h2 className="text-center mb-4">📊 Real Estate Research & Insights</h2>

      <Slider {...settings} className="w-100">
        {researchItems.map((item, index) => (
          <div key={index} className="d-flex justify-content-center">
            <Card
              className="shadow text-center"
              style={{
                width: "80%", // Makes card responsive
                maxWidth: "600px", // Limits max width for readability
                margin: "0 auto",
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                {item.icon}
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="flex-grow-1">{item.text}</Card.Text>
                <Button variant="primary" href={item.link}>
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Research;
