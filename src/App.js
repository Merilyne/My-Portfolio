import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Sun, Moon } from 'lucide-react';
import './App.css';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Initialize with a default theme. We'll load the saved theme on the client.
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // This effect runs only on the client, after the initial render.
    // It safely retrieves the theme from localStorage and updates the state.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []); // The empty dependency array ensures this effect runs only once.
  
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const projects = [
    {
      title: "Capstone Project: Mental Health App",
      description: "A comprehensive mental health application available on both web and mobile platforms. Provides resources, mood tracking, and a supportive community.",
      technologies: ["React", "React Native", "Node.js", "Convex"],
      impact: "Created a cross-platform solution to promote mental wellness and accessibility.",
      link: "https://example.com"
    },
    {
      title: "Music App",
      description: "A mobile music streaming application built with Expo and React Native, featuring a sleek and responsive UI designed with Tailwind CSS for a seamless user experience.",
      technologies: ["Expo", "React Native", "Tailwind CSS"],
      impact: "Designed a user-friendly interface for seamless music discovery and playback.",
      link: "https://example.com"
    },
    {
      title: "Get Electric - E-commerce App",
      description: "An online shopping platform for electronics, built with Next.js for server-side rendering and a fast user experience. Firebase was used for the backend, handling authentication and database.",
      technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      impact: "Developed a performant e-commerce site with real-time data synchronization.",
      link: "https://example.com"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "CSS/Sass", "Next.js"],
    "Backend": ["Node.js", "Express", "Python", "PostgreSQL"],
    "Tools": ["Git", "Docker", "AWS", "Figma"]
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
        {/* Navigation */}
        <nav className="nav">
          <div className="nav-container">
            <h1 className="logo">Merilyne Mbong</h1>
            
            <div className="nav-right-group">
              <ul className="nav-menu">
                <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
                <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
                <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>

              <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            <button onClick={toggleTheme} className="theme-btn-mobile">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />} Switch Theme
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section hero">
          <div className="hero-subtitle">Hi, I'm</div>
          <h2 className="hero-title">Merilyne</h2>
          <p className="hero-description">A Software development Student</p>
          <p className="hero-text">
            I build scalable web and Mobile applications with modern technologies. 
            Passionate about clean code, user experience, and solving complex problems.
            I specialize in building robust and scalable web applications with a modern tech stack. 
            I am deeply passionate about writing clean, maintainable code and designing intuitive user interfaces. 
            I thrive on solving complex problems and am always eager to learn and apply new technologies to create impactful digital experiences.
          </p>
          <div className="button-group">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Get In Touch
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section section-alt">
          <h3 className="section-title">
            <span className="section-number">01.</span> About Me
          </h3>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Hello! I'm Merilyne, a software development student with a strong enthusiasm for building things for the web and mobile. My journey into tech began with a curiosity for how digital experiences are made, which has grown into a passion for coding and problem-solving.
              </p>
              <p>
                I enjoy working with modern frontend and backend technologies to create performant and accessible applications. I love the process of turning a complex problem into a simple, beautiful, and intuitive design.
              </p>
              <p>
                When I'm not at my computer, I enjoy exploring new technologies, contributing to personal projects, and continuously learning to keep my skills sharp.
              </p>
            </div>
            <div className="facts-box">
              <h4 className="facts-title">Quick Facts</h4>
              <ul className="facts-list">
                <li>📍 Based in Calgary, AB</li>
                <li>🎓 Studying Software Development</li>
                <li>🚀 Focused on Full-Stack Development</li>
              
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h3 className="section-title">
            <span className="section-number">02.</span> Featured Projects
          </h3>
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-header">
                <h4 className="project-title">{project.title}</h4>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-impact">
                <span className="impact-label">Impact: </span>
                <span className="impact-text">{project.impact}</span>
              </div>
              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section id="skills" className="section section-alt">
          <h3 className="section-title">
            <span className="section-number">03.</span> Skills & Technologies
          </h3>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-card">
                <h4 className="skill-category">{category}</h4>
                <ul className="skill-list">
                  {items.map((skill) => (
                    <li key={skill}>
                      <span className="skill-dot"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <h3 className="section-title" style={{justifyContent: 'center'}}>
            <span className="section-number">04.</span> Get In Touch
          </h3>
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities. 
            Feel free to reach out if you'd like to connect!
          </p>
          <div className="social-links">
            <a href="mailto:nchiamerilyne@gmail.com" className="social-link" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="https://github.com/Merilyne" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nchia-merilyne-337537297" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
          <a href="mailto:nchiamerilyne@gmail.com" className="btn btn-primary">
            Say Hello
          </a>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>Built with React • © {new Date().getFullYear()} Merilyne Mbong</p>
        </footer>
      </div>
  );
}