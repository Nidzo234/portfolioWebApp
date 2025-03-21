import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutMe.css"
export default function AboutMe() {

   const onButtonClick = () => {
      
        const pdfUrl = "/Nikola Jovanovski CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.setAttribute("download", "Nikola Jovanovski Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <section id="about" className="about-section">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="about-image text-center">
            <img  src="/images/finki.jpg" alt="Nikola Jovanovski" />
          </Col>
          <Col md={6} className="about-details">
            <h2 className="display-5">About Me</h2>
            <p>
            I'm a Software Developer with experience in React, React Native, Java, Spring Boot, and SQL. I enjoy building web and mobile applications, writing clean code, and solving problems. Always eager to learn and take on new challenges!
            </p>
            <p>
              When I’m not coding, you’ll find me exploring design trends, working on side projects, or enjoying coffee at my favorite café.
            </p>

            <div className='btn btn-secondary' onClick={onButtonClick}>Download my resume</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
