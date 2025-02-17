import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import F1 from "C:/Users/Administrator/Desktop/feb15/my-app/src/a1.jpeg"

const UserProfile = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-start">
        <Col md={8} className="d-flex justify-content-between ">
          {/* Profile Image */}
          <div className="me-3">
            <img
              src={F1}
              alt="Profile"
              className="rounded-circle"
            />
          </div>

          {/* User Info */}
          <div className="flex-grow-1">
            <h6 className="fw-bold">Luci Avetisyan</h6>
            <p className="text-muted mb-2">
              Sed cras nec a nulla sapien adipiscing ut etiam. In sem viverra
              mollis metus quam adipiscing vel nascetur condimentum felis sapien.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-2">
              <FaFacebook className="text-secondary fs-5" />
              <FaTwitter className="text-secondary fs-5" />
              <FaInstagram className="text-secondary fs-5" />
              <FaPinterest className="text-secondary fs-5" />
            </div>

            {/* Comment Button */}
            <Button variant="dark" className="mt-3">View Comments (0)</Button>
          </div>
        </Col>
      </Row>

      {/* Custom Styling for Alignment */}
      <style>
        {`
          .text-muted {
            font-size: 14px;
          }
          .btn-dark {
            border-radius: 8px;
          }
        `}
      </style>
    </Container>
  );
};

export default UserProfile;