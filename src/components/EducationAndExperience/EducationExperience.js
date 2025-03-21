import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./educationAndExperience.css"
import educationData from "../../data/educationData";
import experienceData from "../../data/experienceData";
export default function EducationExperience() {
  return (
    <section id="education-experience" className="edu-exp-section py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="display-5">Education & Experience</h2>
            <p className="text-muted">A quick overview of my academic and professional journey.</p>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-4">
            <h4 className="fw-bold mb-3">🎓 Education</h4>
            {educationData.map((edu, index) => (
              <div key={index} className="edu-exp-item">
                <h5>{edu.degree}</h5>
                <p className="text-muted mb-1">{edu.school}</p>
                <p className="text-muted small">{edu.year}</p>
              </div>
            ))}
          </Col>

          <Col md={6}>
            <h4 className="fw-bold mb-3">💼 Experience</h4>
            {experienceData.map((exp, index) => (
              <div key={index} className="edu-exp-item">
                <h5>{exp.role}</h5>  
                <p className="text-muted mb-1">{exp.company}</p>
                <p className="text-muted mb-1">{exp.info.join(" • ")}</p>
                <p className="text-muted small">{exp.year}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
