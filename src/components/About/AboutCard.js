import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gaganpreet Kaur</span>
            from <span className="purple">Punjab, India.</span>
            <br />I am currently a 4th year student at Chitkara University.
            <br />
            <br />
            <span className="purple">Internship Experience</span>
            <br />
            Here are some highlights of my role as a Software Development Intern:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong><span className="blue">SDE Intern : CredResolve
               </span></strong>
               <br></br>
                <span className="internship-duration">  July - September 2024  Gurugram</span>
            </li>
            <br></br>
          
            <li className="about-activity">
              <strong> <span >Project Development with React & TypeScript : </span></strong> Led the development of a full-scale project, creating a responsive and optimized UI using React and TypeScript.
            </li>
            <br></br>

            <li className="about-activity">
              <strong><span className="purple">Backend Integration with Java & Spring Boot :  </span></strong> Developed and integrated APIs, optimizing backend efficiency and security.
            </li><br></br>
            <li className="about-activity">
              <strong><span className="purple">Upgrading Existing Applications  : </span></strong> Improved existing apps and websites, fixing bugs and optimizing performance for better user experience.
            </li>
            <br></br>
            <li className="about-activity">
              <strong><span className="purple">Collaboration & Agile Practices  : </span></strong> Worked in a cross-functional team in an Agile environment, ensuring smooth sprint execution and timely delivery.
            </li>
          </ul>
          <br></br>
          <br></br>
          <ul className="about-activity-list">
            <li className="about-activity">
              <ImPointRight />
              <strong><span >SDE Intern : BharatIntern</span></strong>
              <br></br>
            
              <span className="internship-duration">  September - October 2023 Remote</span>
            </li>
<br></br>
            <li className="about-activity">
            
              <strong><span className="purple">Web Development : </span></strong> Built fully functional projects during my internship at BharatIntern, showcasing my front-end skills in HTML, CSS, and JavaScript.
            </li>
            <br></br>

            <li className="about-activity">
              
              <strong><span className="purple">Collaboration & Agile Practices:</span></strong> Worked in a cross-functional team, ensuring smooth sprint execution in an Agile environment.
            </li>
          </ul>
          <br></br>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gagan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
