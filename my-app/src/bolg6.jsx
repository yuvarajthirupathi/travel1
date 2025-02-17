import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaFacebook, FaPinterest, FaLinkedin } from "react-icons/fa";
import fo1 from "C:/Users/Administrator/Desktop/feb15/my-app/src/s1.png"
import fo2 from "C:/Users/Administrator/Desktop/feb15/my-app/src/s2.png"
import fo3 from "C:/Users/Administrator/Desktop/feb15/my-app/src/s3.png"

const SpacedContent = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-start ms-md-4">
        <Col md={10}>
          {/* Title */}
          <h2 className="fw-bold">Eu ridiculus fringilla</h2>

          {/* Description */}
          <p className="hello">
            Nam dictum vitae penatibus ligula id sem eget ante faucibus feugiat 
            nascetur vel. Pretium vitae mus rhoncus sit maecenas quam felis orci adipiscing.
          </p>

          {/* Image Grid */}
          <Row className="g-1">
            <Col md={4}>
              <Image src={fo1} alt="Lake View" fluid rounded />
            </Col>
            <Col md={4}>
              <Image src={fo2} alt="Mountain View" fluid rounded />
            </Col>
            <Col md={4}>
              <Image src={fo3} alt="Boat View" fluid rounded />
            </Col>
          </Row>

          {/* Additional Content */}
          <p className="mt-3">
            Venenatis ante veni nullam ridiculus penatibus <a href="#">vidi eu consectetur</a> integer. 
            Vulputate ipsum lorem nascetur rhoncus.
          </p>

          <p>
            Ante blandit amet ultricies ut in nam massa rhoncus. Eget eu massa nisi quis viverra dapibus aliquam.
          </p>

          {/* Social Share Buttons */}
          <div className="d-flex align-items-center mt-4">
            <span className="fw-bold me-3">10K Shares</span>
            <Button variant="primary" className="me-2 d-flex align-items-center">
              <FaFacebook className="me-1" /> Shares 636
            </Button>
            <Button variant="danger" className="me-2 d-flex align-items-center">
              <FaPinterest className="me-1" /> Shares 636
            </Button>
            <Button variant="info" className="d-flex align-items-center">
              <FaLinkedin className="me-1" /> 636
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SpacedContent;
