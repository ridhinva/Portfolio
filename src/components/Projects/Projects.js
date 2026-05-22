import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Tools </strong>
        </h1>
        <p style={{ color: "white" }}>
          Security research and exploit development toolkits.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CVE-2026-9082"
              description="Critical remote code execution exploit for CVE-2026-9082. A full proof-of-concept with detailed analysis, exploitation chain, and mitigation recommendations for the disclosed vulnerability."
              ghLink="https://github.com/ridhinva/CVE-2026-9082"
              demoLink="https://github.com/ridhinva/CVE-2026-9082"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Web-Security-Toolkit"
              description="Comprehensive web application security testing toolkit. Includes scanners for SQLi, XSS, SSRF, CSRF, command injection, and IDOR. Modular architecture with automated reporting and payload generation capabilities."
              ghLink="https://github.com/ridhinva/Web-Security-Toolkit"
              demoLink="https://github.com/ridhinva/Web-Security-Toolkit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="API-Security-Toolkit"
              description="Automated API security testing framework supporting REST, GraphQL, and WebSocket endpoints. Features JWT manipulation, rate-limit testing, parameter fuzzing, and BOLA/IDOR detection engines."
              ghLink="https://github.com/ridhinva/API-Security-Toolkit"
              demoLink="https://github.com/ridhinva/API-Security-Toolkit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Exploit-Dev-Toolkit"
              description="Modular exploit development framework with buffer overflow templates, ROP chain builder, format string helper, and custom shellcode generator. Supports multiple architectures including x86, x64, ARM, and MIPS."
              ghLink="https://github.com/ridhinva/Exploit-Dev-Toolkit"
              demoLink="https://github.com/ridhinva/Exploit-Dev-Toolkit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Network-Pivot-Suite"
              description="Advanced network pivoting and tunneling toolkit. Implements SOCKS proxies, port forwarding, DNS tunneling, and ICMP exfiltration. Designed for post-exploitation lateral movement scenarios."
              ghLink="https://github.com/ridhinva/Network-Pivot-Suite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Recon-Automator"
              description="Automated reconnaissance framework that chains subdomain enumeration, port scanning, web technology fingerprinting, and screenshot capture. Integrates 15+ OSINT tools with parallel execution and smart deduplication."
              ghLink="https://github.com/ridhinva/Recon-Automator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
