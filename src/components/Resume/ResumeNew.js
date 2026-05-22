import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "120px" }}>
          <h1 style={{ color: "white", textAlign: "center" }}>
            Resume page has been replaced by <strong className="purple">Tools</strong>
          </h1>
          <p style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
            Check out my security tools and projects in the Tools section.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
