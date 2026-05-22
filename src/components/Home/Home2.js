import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Bug Bounty Hunter and Security Researcher who
              spends days hunting for vulnerabilities and turning them into
              responsible disclosures. Every attack surface tells a story — and
              I love reading between the lines.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Web Application Pentesting, API Security, Network Security,
                  and Reverse Engineering{" "}
                </b>
              </i>
              — with hands-on experience across OWASP Top 10, cloud
              misconfigurations, and authentication bypasses.
              <br />
              <br />
              My key areas of interest include finding
              <i>
                <b className="purple">
                  {" "}
                  IDORs, SSRF, SQL Injection, XSS, and Authentication Flaws,{" "}
                </b>
              </i>
              along with chaining low-severity bugs into critical-impact exploits.
              <br />
              <br />
              When I'm not breaking things, I'm building custom tooling with
              <b className="purple"> Python, Bash, and Go</b> to automate recon
              and scale my
              <i>
                <b className="purple"> bug bounty workflows</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
