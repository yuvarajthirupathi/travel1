import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import fo1 from "C:/Users/Administrator/Desktop/feb15/my-app/src/Screenshot 2025-02-16 183839.png"

const LeftSpacedContent = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-start">
        <Col md={{ span: 8, offset: 1 }} className="ms-md-5">
          {/* Title */}
          <h2 className="fw-bold">Tincidunt veni tellus orci aenean consectetur</h2>

          {/* Description */}
          <p>
            Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque 
            vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus 
            mus ac ante viverra.
          </p>

          {/* Image with Left Space */}
          <div className="position-relative">
            <Image
              src={fo1}
              alt="Scenic house by lake"
              fluid
              className="rounded shadow-sm"
              height="4000px"
              width="600px"
            />
            {/* Floating Zoom Icon */}
            <div className="position-absolute top-0 end-0 m-3 bg-light p-2 rounded-circle shadow-sm">
              
            </div>
          </div>

          {/* Italicized Text */}
          <p className="fst-italic text-muted mt-2">Ut pede leo libero cum ridiculus</p>

          {/* Additional Paragraph */}
          <p>
            Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque 
            vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus 
            mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed enim.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LeftSpacedContent;
