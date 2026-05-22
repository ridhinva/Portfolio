import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Ridhin V A</span>{" "}
            from <span className="purple">Kerala, India</span>.
            <br />
            I'm a passionate{" "}
            <span className="purple">Security Researcher</span> and{" "}
            <span className="purple">Bug Bounty Hunter</span>.
            <br />
            I specialize in finding vulnerabilities in web applications, APIs,
            and infrastructure — turning security flaws into safer products.
            <br />
            <br />
            Outside of hacking, I enjoy activities that keep me sharp and curious:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Hunting Bugs on HackerOne & Bugcrowd 🎯
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Security Writeups & Research 📝
            </li>
            <li className="about-activity">
              <ImPointRight /> CTF Challenges & Labs 🧪
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hack the system, secure the future!"{" "}
          </p>
          <footer className="blockquote-footer">Ridhin V A</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
