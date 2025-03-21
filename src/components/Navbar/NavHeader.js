import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"

export default function NavHeader({scrollToHome, scrollToAbout ,scrollToExpirience,scrollToProject, scrollToContact}) {

    const [shadow, setShadow] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setShadow(true);
          } else {
            setShadow(false);
          }

     

          const scrollPosition = window.scrollY + 200;
          
          const sections = [
            { id: "home", offset: document.getElementById("home")?.offsetTop },
            { id: "about", offset: document.getElementById("about")?.offsetTop },
            { id: "experience", offset: document.getElementById("experience")?.offsetTop },
            { id: "projects", offset: document.getElementById("projects")?.offsetTop },
            { id: "contact", offset: document.getElementById("contact")?.offsetTop }
          ];

          for (let section of sections) {
            if (section.offset !== undefined && scrollPosition >= section.offset) {
              setActiveSection(section.id);
              console.log(section.id)
            }
          }

        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);



      const styles = {
        navbarShadow: {
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease-in-out",
        },
          
      };

 

    
      

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top" style={shadow ? styles.navbarShadow : {}}>
      <Container>
        <Navbar.Brand href="#home">Nikola Jovanovski</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={activeSection === "home" ? "active-link" : ""} href="#features" onClick={scrollToHome}>Home</Nav.Link>
            <Nav.Link className={activeSection === "about" ? "active-link" : ""} href="#about" onClick={scrollToAbout}>About me</Nav.Link>
            <Nav.Link className={activeSection === "experience" ? "active-link" : ""} href="#experience" onClick={scrollToExpirience}>Experience</Nav.Link>
            <Nav.Link className={activeSection === "projects" ? "active-link" : ""} href="#projects" onClick={scrollToProject}>Projects</Nav.Link>
            <Nav.Link className={activeSection === "contact" ? "active-link" : ""} href="#contact" onClick={scrollToContact}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
