import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import local images
import fo1 from "C:/Users/Administrator/Desktop/feb15/my-app/src/l1.png";
import fo2 from "C:/Users/Administrator/Desktop/feb15/my-app/src/l2.png";
import fo3 from "C:/Users/Administrator/Desktop/feb15/my-app/src/l3.png";
import fo4 from "C:/Users/Administrator/Desktop/feb15/my-app/src/l4.png";
import fo5 from "C:/Users/Administrator/Desktop/feb15/my-app/src/l5.png";
import fo6 from "C:/Users/Administrator/Desktop/feb15/my-app/src/l1.png";

const articles = [
  {
    title: "Integer Maecenas Eget Viverra",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21, 2022",
    readTime: "2 minute read",
    image: fo1,
  },
  {
    title: "Integer Maecenas Eget Viverra",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21, 2022",
    readTime: "2 minute read",
    image: fo2,
  },
  {
    title: "Integer Maecenas Eget Viverra",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21, 2022",
    readTime: "2 minute read",
    image: fo3,
  },
  {
    title: "Integer Maecenas Eget Viverra",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21, 2022",
    readTime: "2 minute read",
    image: fo4,
  },
  {
    title: "Integer Maecenas Eget Viverra",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21, 2022",
    readTime: "2 minute read",
    image: fo5,
  },
  {
    title: "Integer Maecenas Eget Viverra",
    description: "Aenean eleifend ante maecenas pulvinar montes lorem et pede.",
    date: "June 21, 2022",
    readTime: "2 minute read",
    image: fo6,
  },
];

const RelatedArticles = () => {
  return (
    <Container className="mt-5" style={{ marginLeft: "40px", marginRight: "40px" }}>
      <h4 className="fw-bold text-primary mb-4">YOU MAY ALSO LIKE</h4>
      <Row>
        {articles.map((article, index) => (
          <Col lg={4} md={6} sm={12} key={index} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src={article.image} alt="Article Thumbnail" className="w-100 rounded" />
              <Card.Body>
                <Card.Title className="fw-bold">{article.title}</Card.Title>
                <Card.Text className="text-muted">{article.description}</Card.Text>
                <div className="d-flex justify-content-between text-muted small">
                  <span>{article.date}</span>
                  <span>⏳ {article.readTime}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RelatedArticles;
