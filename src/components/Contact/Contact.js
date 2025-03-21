import React, { useState } from 'react'
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import "./contact.css"

export default function Contact() {

      const [isLoading, setIsLoading] = useState(false)

      const [formData, setFormData] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
        .sendForm('service_sr80myc', 'template_tueocak', e.target, 'XP_NBg14mGOoS65v8',)
        .then(
          (result) => {
            alert(`Thank you, ${formData.name}! Your message has been sent.`);
            setFormData({ name: "", email: "",title:"", message: "" });
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        )
        .finally(() => {
          setIsLoading(false); 
        });
        
      };
    
      return (
        <section id="contact" className="contact-section py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="display-5">Get in Touch</h2>
              <p className="text-muted">Have a question or want to work together? Send me a message!</p>
            </Col>
          </Row>
          
          {/* <Row className="justify-content-center mb-4">
            <Col md={8} lg={6}>
              <Row className="text-center">
                <Col xs={4} className="text-center">
                  <FaEnvelope size={28} className="text-dark mb-2" />
                  <p className="mb-0">nikolajovanovski234@gmail.com</p>
                </Col>
                <Col xs={4} className="text-center">
                  <FaPhone size={28} className="text-dark mb-2" />
                  <p className="mb-0">+389</p>
                </Col>
                <Col xs={4} className="text-center">
                  <FaMapMarkerAlt size={28} className="text-dark mb-2" />
                  <p className="mb-0">Ohrid, Macedonia</p>
                </Col>
              </Row>
            </Col>
        </Row> */}
                  
          <Row className="justify-content-center">
            <Col md={8} lg={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" name='name' onChange={handleChange} value={formData.name} required />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" name='email' onChange={handleChange} value={formData.email} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter title" name='title' onChange={handleChange} value={formData.title} required />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Enter your message" name='message' onChange={handleChange} value={formData.message} required />
                </Form.Group>
  
                <div className="text-center">
                  {isLoading? 
                  <>
                  <Button variant="dark" disabled className="px-4">
                      <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                      Sending...
                  </Button>

                  </> : 

                  
                  <>
                  <Button variant="dark" type="submit" className="px-4">
                    Send Message
                  </Button>
                  </>}
                  
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
