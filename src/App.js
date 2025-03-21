import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/Navbar/NavHeader';
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { useRef } from 'react';
import PageFooter from './components/PageFooter/PageFooter';
import EducationExperience from './components/EducationAndExperience/EducationExperience';


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const expirienceRef = useRef(null);
  const projecRef = useRef(null);
  const contactRef = useRef(null);


  const sctollToSection = (ref) =>{
    if (!ref.current) return;
    const navbarHeight = 40; 
    const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  return (
    <div className="App">

      <header className="App-header">
        <NavHeader
          scrollToHome = {() => sctollToSection(homeRef)}
          scrollToAbout = {() => sctollToSection(aboutRef)}
          scrollToExpirience = {() => sctollToSection(expirienceRef)}
          scrollToProject = {() => sctollToSection(projecRef)}
          scrollToContact = {() => sctollToSection(contactRef)}
        />
        

        <div id='home' ref={homeRef}>
          <Home ref={homeRef}/>
        </div>

  
        
        { <div id='about' ref={aboutRef}>
          <AboutMe/>
        </div> }


        <div id='experience' ref={expirienceRef}>
          <EducationExperience/>
          </div>
       
        <div id='projects' ref={projecRef}>
          <Projects/>
        </div>

        <div id='contact' ref={contactRef}>
          <Contact ref={contactRef}/>
        </div>
        
        <PageFooter/>
        
      </header>
    </div>
  );
}

export default App;
