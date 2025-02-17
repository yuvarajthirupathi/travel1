import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Text */}
          <Col md={6} xs={12} className="text-start">
            Designed & Developed by <strong>XP DESIGN</strong>
          </Col>

          {/* Right Side: Social Icons */}
          <Col md={6} xs={12} className="text-end">
            <FaFacebookF className="mx-2" />
            <span>29</span>
            <FaTwitter className="mx-2" />
            <span>70K</span>
            <FaInstagram className="mx-2" />
            <span>40</span>
            <FaYoutube className="mx-2" />
            <span>13K</span>
          </Col>
        </Row>
      </Container>

      {/* Scroll to Top Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#777",
          color: "white",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ▲
      </div>
    </footer>
  );
};

export default Footer;
