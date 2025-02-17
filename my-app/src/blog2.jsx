import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaSoundcloud, FaMedium, FaVimeo, FaTelegram } from "react-icons/fa";

const PageLayout = () => {
  const socialData = [
    { name: "Facebook", icon: <FaFacebook className="text-primary" />, stats: "96 Likes" },
    { name: "Twitter", icon: <FaTwitter className="text-info" />, stats: "60K Followers" },
    { name: "Instagram", icon: <FaInstagram className="text-danger" />, stats: "20K Followers" },
    { name: "Pinterest", icon: <FaPinterest className="text-danger" />, stats: "13K Likes" },
    { name: "Youtube", icon: <FaYoutube className="text-danger" />, stats: "625K Subscribers" },
    { name: "SoundCloud", icon: <FaSoundcloud className="text-warning" />, stats: "20K Followers" },
    { name: "Medium", icon: <FaMedium className="text-dark" />, stats: "13K Likes" },
    { name: "Vimeo", icon: <FaVimeo className="text-primary" />, stats: "20K Followers" },
    { name: "Telegram", icon: <FaTelegram className="text-info" />, stats: "906K Followers" },
  ];

  return (
    <Container className="mt-4">
      <Row>
        {/* Left Column - Main Content */}
        <Col lg={8} md={12}>
          <Card className="p-3 mb-4 shadow-sm">
            <p>
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.
              Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing velit ante
              luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.
            </p>
            <img
              src="https://via.placeholder.com/900x103"
              alt="Placeholder"
              className="img-fluid my-3 rounded"
            />
          </Card>

          {/* Table of Contents Section */}
          <Card className="p-3 shadow-sm">
            <h5 className="fw-bold text-primary">📖 Table of Contents</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="text-success fw-bold">1. Nam condimentum varius justo</ListGroup.Item>
              <ListGroup.Item className="text-success fw-bold">2. Faucibus nullam luctus felis pretium donec</ListGroup.Item>
              <ListGroup.Item>
                <ul className="ps-3 mb-0">
                  <li>  Trincidunt vel tellus orci aenean consectetur</li>
                  <li> Eu ridiculus fringilla</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* Right Column - Social Media Links */}
        <Col lg={4} md={12}>
          <h5 className="fw-bold text-primary"> Social Links</h5>
          <Row>
            {socialData.map((social, index) => (
              <Col xs={4} className="mb-3 text-center" key={index}>
                <Card className="p-3 border-0 shadow-sm social-card">
                  <span className="fs-3">{social.icon}</span>
                  <strong className="mt-2">{social.name}</strong>
                  <span className="text-muted">{social.stats}</span>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Custom CSS for Hover Effects */}
      <style>
        {`
          .social-card {
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .social-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </Container>
  );
};

export default PageLayout;
