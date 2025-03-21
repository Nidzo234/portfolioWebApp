import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./pageFooter.css"

export default function PageFooter() {
    return (
        <footer className="footer bg-dark text-light py-4">
          <Container>
            <Row className="align-items-center text-center">
              <Col md={6} className="mb-3 mb-md-0">
                <p className="mb-0">&copy; {new Date().getFullYear()} Nikola Jovanovski. All rights reserved.</p>
              </Col>
              <Col md={6}>
                <div className="d-flex justify-content-center gap-3">
                  <a href="https://github.com/Nidzo234" target="_blank" rel="noopener noreferrer" className="text-light">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://linkedin.com/in/nikola-jovanovski-9050b7353" target="_blank" rel="noopener noreferrer" className="text-light">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-light">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      );
}
