import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import projectsData from "../../data/projectsData";
import "./projects.css"

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="display-5">Projects</h2>
            <p className="text-muted">A quick overview of my projects</p>
          </Col>
        </Row>
        {projectsData.map((project, index) => (
          <Row className={`project ${index % 2 === 0 ? "reverse" : ""}`} key={index}>
            <Col md={12} lg={6} className="project-image">
              <img src={project.image} alt={project.title} />
            </Col>
            <Col md={12} lg={6} className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech">{project.tech.join(" • ")}</p>
              <Button variant="secondary-outline" className="mt-3" disabled>
                See Details (Coming Soon)
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}
