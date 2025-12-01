import React, { useEffect, useState } from 'react'
import TextType from './TextType';
import { Download } from 'lucide-react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const options = {
    root: null,
    threshold: 0.6,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);


  return (
    
    <>
  <section id="home">
    <div className=" min-h-screen oveerlow-hidden flex justify-center flex-col items-center ">
    <nav className="relative md:top-0 md:fixed z-10 w-[90%] mx-auto flex justify-between items-center py-2 md:py-7 bg-opacity-95">
      <a href="#home"  className="text-2xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        &lt; NorhaN /&gt;
      </a>
    <div className="hidden md:flex gap-8 text-lg font-medium items-center">
      <a href="#home"
        className={`${activeSection === "home" ? "text-pink-500" : "text-purple-500"} hover:text-pink-500 transition-colors`}>
          Home
        </a>
        <a
          href="#about"
        className={`${activeSection === "about" ? "text-pink-500" : "text-purple-500"} hover:text-pink-500 transition-colors`}>
          About
        </a>
        <a
          href="#projects"
        className={`${activeSection === "projects" ? "text-pink-500" : "text-purple-500"} hover:text-pink-500 transition-colors`}
          >
          Projects
        </a>
        <a
          href="#skills"
        className={`${activeSection === "skills" ? "text-pink-500" : "text-purple-500"} hover:text-pink-500 transition-colors`} >
          Skills
        </a>
        <a
          href="#contact"
        className={`${activeSection === "contact" ? "text-pink-500" : "text-purple-500"} hover:text-pink-500 transition-colors`}>
          Contact
        </a>
      </div>
    </nav>
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-r from-black via-purple-300 to-black opacity-50 z-0"></div>
    <div className="relative z-10 ">
      <img className="mx-auto h-90 rounded-full" src="./norhan.jpg" alt="Norhan" />
      <h1 className="text-4xl font-bold bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Norhan Gamal
      </h1>
      <TextType
          text={["Front End Developer | React Specialist", 'Front End Developer | React Specialist']}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-2xl text-white"
      />
    </div>
      
      <a className=' relative z-10 text-2xl border-[#17A6DF] border-2 bg-pink text-white px-8 py-3 rounded-3xl mt-4 hover:bg-purple-500  hover:scale-110 hover:border-none transition-all duration-300' href="./Norhan-Gamal-Resume.pdf" download>Resume <Download className='inline' size={20} /></a> 
    </div>
  </section>
        <About id="about"></About>
        <Projects id="projects"></Projects>
        <Skills id="skills" ></Skills>
        <Contact id="contact"></Contact>
    </>
  )
}
