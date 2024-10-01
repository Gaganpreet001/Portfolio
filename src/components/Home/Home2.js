import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container 
      fluid 
      className="home-about-section" 
      id="about" 
      style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100vh",
        textAlign: "center"
      }}
    >
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", marginBottom: "20px" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ fontSize: "1.2em", marginBottom: "40px" }}>
              I am passionate about technology and  product management. Currently, I am pursuing a B.E. in Computer Science, and I have developed
              a solid foundation in programming and business principles.
              <br />
              <br />I have experience in technologies like
              <i>
                <b className="purple"> Java, React, Javascript, and SpringBoot </b>
              </i>
              with a special interest in tools like 
              <i>
                <b className="purple"> Postgres and MongoDB.</b>
              </i>
              <br />
              <br />
              My field of interest includes developing and managing innovative
              <b className="purple"> products and web technologies. </b>
              <br />
              <br />
              I also enjoy working on projects where I can combine my technical 
              and management skills, such as my experience building 
              an <b className="purple">HR Management System</b> and a 
              <b className="purple"> Blog Website</b>.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links" style={{ listStyle: "none", padding: 0 }}>
              <li className="social-icons" style={{ display: "inline-block", margin: "0 15px" }}>
                <a
                  href="https://github.com/Gaganpreet001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ fontSize: "2rem", color: "#333" }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons" style={{ display: "inline-block", margin: "0 15px" }}>
                <a
                  href="https://www.linkedin.com/in/gaganpreet-kaur-47005a231/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ fontSize: "2rem", color: "#0077b5" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
