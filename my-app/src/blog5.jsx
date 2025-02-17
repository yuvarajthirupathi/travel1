import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const ImageGridWithSidebar = () => {
  const images = [
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
    "",
  ];

  const latestPosts = [
    {
      title: "10 Habits That Will Change Your Life for the Better",
      date: "June 21, 2022",
      readTime: "2 minute read",
    },
    {
      title: "10 Habits That Will Change Your Life for the Better",
      date: "June 21, 2022",
      readTime: "2 minute read",
    },
    {
      title: "10 Habits That Will Change Your Life for the Better",
      date: "June 21, 2022",
      readTime: "2 minute read",
    },
    {
      title: "10 Habits That Will Change Your Life for the Better",
      date: "June 21, 2022",
      readTime: "2 minute read",
    },
  ];

  return (
    <Container className="mt-4">
      <Row className="d-flex">
        {/* Main Content - Image Grid */}
        <Col md={8} className="d-flex flex-column">
          <h3 className="fw-bold">Faucibus nullam luctus felis pretium donec</h3>
          <p>
            Amet tempus viverra ut libero nascetur id veni ridiculus rhoncus. Dis donec cras ultrices. 
            Eras vivamus enim nec nulla semper imperdiet aenean montes dictum porttitor metus.
          </p>

          {/* Image Grid using Flexbox */}
          <div className="d-flex flex-wrap gap-3">
            {images.map((img, index) => (
              <div key={index} className="flex-grow-1" style={{ minWidth: "48%" }}>
                <Image src={img} alt={`img-${index}`} fluid className="rounded shadow-sm" />
              </div>
            ))}
          </div>
        </Col>

        {/* Sidebar - Latest Posts */}
        <Col md={4} className="d-flex flex-column">
          <h5 className="fw-bold">The Latest</h5>
          {latestPosts.map((post, index) => (
            <Card key={index} className="mb-3 p-2 shadow-sm flex-grow-1">
              <Card.Body>
                <Card.Title style={{ fontSize: "14px" }}>{post.title}</Card.Title>
                <Card.Text className="text-muted" style={{ fontSize: "12px" }}>
                  {post.date} • {post.readTime}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGridWithSidebar;

