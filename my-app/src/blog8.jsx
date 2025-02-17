import React from "react";
import './t.css'
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const NewsletterSignup = () => {
  return (
    <Container fluid className="newsletter-section mt-5">
      <Row className="justify-content-center">
        <Col lg={10} md={11} className="position-relative">
          {/* Background Image */}
          <div className="newsletter-bg">
            <div className="content-overlay p-5 text-white">
              <h2 className="fw-bold">Sign Up for Our Newsletters</h2>
              <p>Get notified of the best deals on our WordPress themes.</p>

              {/* Email Input */}
              <Form className="d-flex mt-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="me-2"
                  width= "200px"
        
                />
                <Button variant="light">Subscribe</Button>
              </Form>

              {/* Privacy Notice */}
              <Form.Check
                type="checkbox"
                label="By checking this box, you confirm that you have read and agree to our Terms regarding the storage of the data submitted through this form."
                className="mt-2 small"
              />
            </div>
          </div>
        </Col>
      </Row>

      {/* Custom Styling */}
      <style>
        {`
          .newsletter-section {
            max-width:80%;
            overflow: hidden;
            
          }
          .newsletter-bg {
            // background: url('C:/Users/Administrator/Desktop/feb15/my-app/src/Rectangle 1339 (1).png') no-repeat center center;
            background-size: cover;
            border-radius: 8px;
            overflow: hidden;
            height:400px;
            padding:80px 20px ;
        
          }
          .content-overlay {
            background: rgba(0, 0, 0, 0.6);
            border-radius: 8px;
          }
        `}
      </style>
    </Container>
  );
};

export default NewsletterSignup;
