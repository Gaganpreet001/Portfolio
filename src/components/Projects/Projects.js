import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="HR Management System"
              description="The HR management system is designed to streamline employee management and payroll 
              operations. Built with React.js for the frontend, Java Spring Boot for the backend, and PostgreSQL 
              for database management, the system enables HR managers to easily add team members, track attendance, 
              and generate monthly salary reports. Its intuitive interface allows for smooth navigation, making it simple to 
              manage employee data and monitor attendance in real-time. At the end of each month, the system automatically calculates 
              salaries based on attendance, reducing manual effort and improving overall efficiency in handling payroll processes."
              ghLink="https://github.com/Gaganpreet001/HRMS/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="Blog-Website"
              description="The blog website is designed to provide a seamless platform for users to create, post, 
              and read blogs. Built using React JSX for the frontend and MongoDB with Mongoose for the database, 
              it offers an intuitive interface for users to easily write and publish new blog posts. 
              The platform also allows for smooth browsing, enabling readers to explore a variety of blogs 
              effortlessly. The use of MongoDB ensures efficient data management and scalability, 
              while React JSX delivers a dynamic and responsive user experience, fostering a space for 
              content creation and discovery."
              ghLink="https://github.com/Gaganpreet001/Blog-Website"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Instagram Clone"
              description="The Instagram clone is a fully functional social media platform replicating the 
              core features of Instagram. Developed using React.js for the frontend and MongoDB with Mongoose 
              for database management, it allows users to create accounts, post photos, like and comment on posts, 
              follow other users, and explore content. The responsive and dynamic interface ensures a smooth, 
              Instagram-like experience, while MongoDB ensures efficient handling of large volumes of user data 
              and media. This clone offers all the essential features for social interaction, content sharing, 
              and real-time engagement in a familiar and user-friendly environment."
              ghLink="https://github.com/Gaganpreet001/instagramClone/tree/main/instagram-clone"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Text Editor"
              description="The text editor is a feature-rich application developed in Java, utilizing a 
              linked list data structure to efficiently manage and edit text. By leveraging linked lists, the 
              editor provides smooth performance for operations like inserting, deleting, and modifying text, 
              even with large documents. This structure ensures optimal memory usage and faster manipulation of 
              content compared to traditional array-based implementations. The editor offers standard text editing 
              functionalities while maintaining high performance, making it suitable for handling extensive 
              documents with ease and precision."
              ghLink="https://github.com/Gaganpreet001/Text-Editor"
            
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
