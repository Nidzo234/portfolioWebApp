import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';  // Optional icons for social links

export default function Home1() {
  return (
    <section id="home" className="home-section d-flex align-items-center py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={6} className="mb-4">
            {/* Your photo */}
            <img 
              src="your-photo.jpg" 
              alt="Your Name" 
              className="img-fluid rounded-circle" 
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6} className="mb-4">
            {/* About Text */}
            <h1 className="display-4 font-weight-bold">Hello, I'm Your Name</h1>
            <p className="lead text-muted">I'm a passionate software developer, creating amazing digital experiences. I specialize in building modern web and mobile applications with a focus on clean code and performance.</p>
            <Button variant="dark" href="#contact" className="mt-3">Get In Touch</Button>
          </Col>
        </Row>

        {/* Optional Social Links */}
        <Row className="justify-content-center">
          <Col>
            <div className="social-icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaGithub size={32} />
              </a>
              <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaLinkedin size={32} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FaTwitter size={32} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
