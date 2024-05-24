import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <div className="intro">
        <h2>👋 Hi I am</h2>
        <h1>Xolisile Ndlovu</h1>
        <h3>🇿🇦 Software Developer, based in South Africa</h3>
        <p>
          I'm very passionate about coding, programming, and creating powerful
          software solutions. I'm a qualified electronic prepress artisan
          working towards my goal of being a software engineer.
        </p>
        <p>
          Feel free to <a>Contact me</a>
        </p>
      </div>
      <div>
        <h2>My Skills:</h2>
        <Row>
          <Col>
            <h5 className="skill-name">C++</h5>
            <h5 className="skill-name">Python</h5>
            <h5 className="skill-name">HTML</h5>
            <h5 className="skill-name">CSS</h5>
            <h5 className="skill-name">Bootstrap CSS</h5>
            <h5 className="skill-name">APIs</h5>
            <h5 className="skill-name">Git</h5>
            <h5 className="skill-name">Reactjs</h5>
            <h5>Responsive Web Design</h5>
          </Col>
        </Row>
      </div>
    </div>
  );
}
