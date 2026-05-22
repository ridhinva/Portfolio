import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiKalilinux, SiWireshark, SiBurpsuite, SiNmap, SiGnubash, SiHackthebox } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux fontSize={"24px"} />
        <div className="tech-icons-text">Kali Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBurpsuite fontSize={"24px"} />
        <div className="tech-icons-text">Burp Suite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNmap fontSize={"24px"} />
        <div className="tech-icons-text">Nmap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark fontSize={"24px"} />
        <div className="tech-icons-text">Wireshark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash fontSize={"24px"} />
        <div className="tech-icons-text">Netcat</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHackthebox fontSize={"24px"} />
        <div className="tech-icons-text">HackTheBox</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
