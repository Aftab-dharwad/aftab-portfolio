
import { useEffect } from 'react';

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';

import {
  SiMongodb,
  SiTensorflow,
  SiExpress,
  SiJsonwebtokens,
  SiPytorch,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiPostman,
  SiStreamlit,

} from 'react-icons/si';

import {
  Database,
  BrainCircuit,
} from 'lucide-react';

import './App.css';


function App() {
  useEffect(() => {
    document.title = 'Aftab Dharwad | Full-Stack Developer & AI/ML';
  }, []);

  return (
    <main className="app">
      <div className="container">
        <header className="site-header">
          <a className="brand" href="#home" aria-label="Aftab Dharwad home">
            <span className="brand-mark">AD</span>
            <span className="brand-name">Aftab Dharwad</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>


          <a
            className="secondary-button resume-button"
            href="/Aftab_Dharwad_Resume.pdf"
            download="Aftab_Dharwad_Resume.pdf"
          >
            Download Resume <span aria-hidden="true">↓</span>
          </a>

        </header>

        <section className="hero section" id="home">
          <div className="hero-content">
            <span className="availability">
              <span className="availability-dot" />
              Available for Opportunities
            </span>

            <p className="hero-greeting">Hello, I'm</p>

            <h1 className="hero-title">
              Aftab Ismailsab
              <span> Dharwad</span>
            </h1>

            <h2 className="hero-subtitle">
              M.Tech CSE (AI/ML) · Full-Stack Developer
            </h2>

            <p className="hero-description">
              I build web applications and explore AI/ML solutions to solve
              real-world problems through clean code, thoughtful design,
              and practical engineering.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View My Work <span aria-hidden="true">→</span>
              </a>
              <a className="secondary-button" href="#contact">
                Contact Me
              </a>
            </div>


            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-heading">
                  <span className="hero-stat-icon">✳</span>
                  <strong>AI/ML</strong>
                </div>
                <span>Specialization</span>
              </div>

              <div className="hero-stat">
                <div className="hero-stat-heading">
                  <span className="hero-stat-icon">{"{}"}</span>
                  <strong>MERN</strong>
                </div>
                <span>Full-Stack</span>
              </div>

              <div className="hero-stat">
                <div className="hero-stat-heading">
                  <span className="hero-stat-icon">⌘</span>
                  <strong>Java</strong>
                </div>
                <span>Development</span>
              </div>
            </div>

          </div>

          <div className="hero-visual" aria-label="Developer workspace">
            <div className="visual-glow" />
            <div className="visual-grid" />
            <div className="code-window">
              <div className="window-toolbar">
                <span />
                <span />
                <span />
                <p>developer.js</p>
              </div>

              <div className="code-content">
                <p><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</p>

                <p className="code-indent">
                  <span className="code-key">name</span>: <span className="code-green">'Aftab Dharwad'</span>,
                </p>

                <p className="code-indent">
                  <span className="code-key">role</span>: <span className="code-green">'Full-Stack Developer'</span>,
                </p>

                <p className="code-indent">
                  <span className="code-key">specialization</span>: <span className="code-green">'AI/ML'</span>,
                </p>

                <p className="code-indent">
                  <span className="code-key">stack</span>: [
                </p>

                <p className="code-indent code-extra-indent">
                  <span className="code-green">'Java'</span>, <span className="code-green">'React'</span>,
                </p>

                <p className="code-indent code-extra-indent">
                  <span className="code-green">'Node.js'</span>, <span className="code-green">'MongoDB'</span>
                </p>

                <p className="code-indent">],</p>

                <p className="code-indent">
                  <span className="code-key">mindset</span>: <span className="code-green">'Always Learning'</span>
                </p>

                <p>{'}'};</p>

                <br />

                <p>
                  <span className="code-blue">developer</span>.<span className="code-yellow">buildImpact</span>();
                </p>
              </div>

              <div className="code-footer">
                <span className="availability-dot" />
                Ready to build something meaningful
              </div>
            </div>
            <div className="visual-caption">
              <span>01 / SOFTWARE ENGINEERING</span>
              <span>BUILD · LEARN · IMPROVE</span>
            </div>
          </div>
        </section>


        <div className="tech-strip" aria-label="Technologies">
          <span className="tech-strip-label">TECHNOLOGIES</span>

          <div className="tech-item">
            <FaJava className="tech-icon java-icon" aria-hidden="true" />
            <span>Java</span>
          </div>

          <div className="tech-item">
            <FaReact className="tech-icon react-icon" aria-hidden="true" />
            <span>React</span>
          </div>

          <div className="tech-item">
            <FaNodeJs className="tech-icon node-icon" aria-hidden="true" />
            <span>Node.js</span>
          </div>

          <div className="tech-item">
            <SiMongodb className="tech-icon mongo-icon" aria-hidden="true" />
            <span>MongoDB</span>
          </div>

          <div className="tech-item">
            <Database className="tech-icon sql-icon" aria-hidden="true" />
            <span>SQL</span>
          </div>

          <div className="tech-item">
            <FaPython className="tech-icon python-icon" aria-hidden="true" />
            <span>Python</span>
          </div>
        </div>


        <section className="section" id="about">
          <div className="about-layout">
            <div className="about-content">
              <div className="section-heading">
                <span className="section-eyebrow">01 / ABOUT ME</span>
                <h2 className="section-title">
                  Building software.
                  <br />
                  <span className="accent-text">
                    Exploring intelligence.
                  </span>
                </h2>

                <p className="section-description">
                  I'm a Computer Science postgraduate from PES University,
                  specializing in Artificial Intelligence and Machine Learning.
                  My experience spans full-stack web development, AI-powered
                  applications, and intelligent systems designed to solve
                  practical problems.
                </p>

                <p className="section-description">
                  From developing MERN-stack applications to exploring deep
                  learning and explainable AI, I enjoy turning ideas into
                  useful, well-designed software. I'm always looking to learn,
                  improve my engineering skills, and contribute to meaningful
                  projects.
                </p>
              </div>
            </div>

            <div className="about-profile-card">
              <div className="about-card-top">
                <div className="about-avatar">AD</div>
                <div>
                  <h3>Aftab Dharwad</h3>
                  <p>Full-Stack Developer · AI/ML</p>
                </div>
                <span className="about-status-dot" title="Open to opportunities" />
              </div>

              <div className="about-card-divider" />

              <div className="about-highlight">
                <span className="about-highlight-icon">⌘</span>
                <div>
                  <h4>Full-Stack Development</h4>
                  <p>Building responsive applications with the MERN stack and REST APIs.</p>
                </div>
              </div>

              <div className="about-highlight">
                <span className="about-highlight-icon">✳</span>
                <div>
                  <h4>Artificial Intelligence</h4>
                  <p>Exploring machine learning, deep learning, and explainable AI.</p>
                </div>
              </div>

              <div className="about-highlight">
                <span className="about-highlight-icon">↗</span>
                <div>
                  <h4>Engineering Mindset</h4>
                  <p>Focused on clean code, continuous learning, and practical solutions.</p>
                </div>
              </div>

              <div className="about-tech-section">
                <div className="about-tech-heading">
                  <span className="about-tech-label">CORE TECH STACK</span>
                  <span className="about-tech-caption">Tools I use</span>
                </div>

                <div className="about-tech-grid">
                  <div className="about-tech-item">
                    <FaReact />
                    <span>React</span>
                  </div>
                  <div className="about-tech-item">
                    <FaNodeJs />
                    <span>Node.js</span>
                  </div>
                  <div className="about-tech-item">
                    <FaJava />
                    <span>Java</span>
                  </div>
                  <div className="about-tech-item">
                    <FaPython />
                    <span>Python</span>
                  </div>
                  <div className="about-tech-item">
                    <SiTensorflow />
                    <span>TensorFlow</span>
                  </div>
                  <div className="about-tech-item">
                    <BrainCircuit />
                    <span>AI / ML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section" id="skills">
          <div className="section-heading">
            <span className="section-eyebrow">02 / EXPERTISE</span>
            <h2 className="section-title">
              Technologies I work with.
            </h2>
            <p className="section-description">
              A collection of technologies and tools I've used across
              full-stack development, AI/ML projects, and application building.
            </p>
          </div>

          <div className="skills-grid">
            <article className="skill-card">
              <div className="skill-card-icon">{"</>"}</div>
              <h3>Programming Languages</h3>
              <p>Core languages used in software and web development.</p>


              <div className="skill-tags">

                <span><FaJava className="tech-icon java-icon" /> Java</span>
                <span><FaPython className="tech-icon python-icon" /> Python</span>
                <span><FaJs className="tech-icon javascript-icon" /> JavaScript</span>
                <span><Database className="tech-icon sql-icon" /> SQL</span>
                <span><FaHtml5 className="tech-icon html-icon" /> HTML</span>
                <span><FaCss3Alt className="tech-icon css-icon" /> CSS</span>

              </div>

            </article>

            <article className="skill-card">
              <div className="skill-card-icon">{"{}"}</div>
              <h3>Full-Stack Development</h3>
              <p>Building responsive interfaces and application backends.</p>


              <div className="skill-tags">

                <span><FaReact className="tech-icon react-icon" /> React.js</span>
                <span><FaNodeJs className="tech-icon node-icon" /> Node.js</span>
                <span><SiExpress className="tech-icon express-icon" /> Express.js</span>
                <span><SiMongodb className="tech-icon mongodb-icon" /> MongoDB</span>
                <span><Database className="tech-icon api-icon" /> REST APIs</span>
                <span><SiJsonwebtokens className="tech-icon jwt-icon" /> JWT</span>

              </div>


            </article>

            <article className="skill-card">
              <div className="skill-card-icon">✳</div>
              <h3>AI & Machine Learning</h3>
              <p>Developing predictive models and exploring deep learning.</p>

              <div className="skill-tags">

                <span><BrainCircuit className="tech-icon ml-icon" /> Machine Learning</span>
                <span><BrainCircuit className="tech-icon ml-icon" /> Deep Learning</span>
                <span><BrainCircuit className="tech-icon ml-icon" /> CNN</span>
                <span><SiTensorflow className="tech-icon tensorflow-icon" /> TensorFlow</span>
                <span><SiPytorch className="tech-icon pytorch-icon" /> PyTorch</span>
                <span><SiOpencv className="tech-icon opencv-icon" /> OpenCV</span>
                <span><SiPandas className="tech-icon pandas-icon" /> Pandas</span>
                <span><SiNumpy className="tech-icon numpy-icon" /> NumPy</span>
                <span><BrainCircuit className="tech-icon shap-icon" /> SHAP</span>
                <span><BrainCircuit className="tech-icon lime-icon" /> LIME</span>
                <span><BrainCircuit className="tech-icon nlp-icon" /> NLP</span>

              </div>

            </article>

            <article className="skill-card">
              <div className="skill-card-icon">✧</div>
              <h3>Generative AI</h3>
              <p>Working with language models and AI-powered applications.</p>

              <div className="skill-tags">

                <span><BrainCircuit className="tech-icon genai-icon" /> LLMs</span>
                <span><BrainCircuit className="tech-icon genai-icon" /> Prompt Engineering</span>
                <span><BrainCircuit className="tech-icon groq-icon" /> Groq API</span>
                <span><BrainCircuit className="tech-icon anthropic-icon" /> Claude API</span>

              </div>

            </article>

            <article className="skill-card">
              <div className="skill-card-icon">⌘</div>
              <h3>Tools & Platforms</h3>
              <p>Tools used for development, testing, and version control.</p>

              <div className="skill-tags">
                <span><FaGitAlt className="tech-icon git-icon" /> Git</span>
                <span><FaGithub className="tech-icon github-icon" /> GitHub</span>
                <span><SiPostman className="tech-icon postman-icon" /> Postman</span>
                <span><SiStreamlit className="tech-icon streamlit-icon" /> Streamlit</span>
              </div>

            </article>
          </div>
        </section>


        <section className="section" id="projects">
          <div className="section-heading">
            <span className="section-eyebrow">03 / SELECTED WORK</span>
            <h2 className="section-title">
              Projects built to solve problems.
            </h2>
            <p className="section-description">
              A selection of projects combining full-stack development,
              machine learning, and practical AI applications.
            </p>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-visual healthcare-visual">
                <div className="project-visual-top">
                  <span>AI / HEALTHCARE</span>
                  <span className="project-number">01</span>
                </div>

                <div className="healthcare-art">
                  <div className="healthcare-orbit orbit-one" />
                  <div className="healthcare-orbit orbit-two" />
                  <div className="healthcare-core">AI</div>
                  <span className="healthcare-node node-one">ML</span>
                  <span className="healthcare-node node-two">CNN</span>
                  <span className="healthcare-node node-three">XAI</span>
                </div>

                <div className="project-visual-bottom">
                  <span>Predictive Analytics</span>
                  <span>Explainable AI</span>
                </div>
              </div>

              <div className="project-body">
                <span className="project-category">MACHINE LEARNING</span>
                <h3>AI-Driven Predictive Healthcare System</h3>
                <p>
                  A healthcare prediction system focused on early risk
                  assessment for diabetes, heart disease, and chronic
                  kidney disease. Includes deep learning for clinical
                  data and medical images, with SHAP and LIME for
                  model interpretability.
                </p>

                <div className="project-tags">
                  <span>Python</span>
                  <span>TensorFlow</span>
                  <span>PyTorch</span>
                  <span>OpenCV</span>
                  <span>Streamlit</span>
                </div>

                <div className="project-footer">
                  <span className="project-type">
                    <span className="project-status-dot" />
                    AI / ML Project
                  </span>
                  <a
                    href="https://github.com/Aftab-dharwad"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub Profile <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-visual voice-visual">
                <div className="project-visual-top">
                  <span>GENERATIVE AI</span>
                  <span className="project-number">02</span>
                </div>

                <div className="voice-art">
                  <div className="voice-ring voice-ring-one" />
                  <div className="voice-ring voice-ring-two" />
                  <div className="voice-mic">♫</div>
                  <div className="voice-wave">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="project-visual-bottom">
                  <span>Voice Interaction</span>
                  <span>LLM Integration</span>
                </div>
              </div>

              <div className="project-body">
                <span className="project-category">FULL-STACK · GENERATIVE AI</span>
                <h3>AI Voice Assistant</h3>
                <p>
                  A full-stack AI assistant integrating the Groq API
                  for conversational responses, speech-to-text for
                  voice input, JWT-based authentication, and
                  customizable assistant configurations.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Groq API</span>
                  <span>JWT</span>
                </div>

                <div className="project-footer">
                  <span className="project-type">
                    <span className="project-status-dot" />
                    Full-Stack Project
                  </span>
                  <a
                    href="https://github.com/Aftab-dharwad"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub Profile <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>


        <section className="section" id="education">
          <div className="section-heading">
            <span className="section-eyebrow">04 / BACKGROUND</span>
            <h2 className="section-title">Education & experience.</h2>
            <p className="section-description">
              My academic foundation and early professional experience
              in software development.
            </p>
          </div>

          <div className="journey-grid">
            <div className="journey-column">
              <h3 className="journey-column-title">
                <span className="journey-title-icon">✦</span>
                Education
              </h3>

              <div className="timeline">
                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="timeline-period">AUG 2024 — AUG 2026</span>
                    <h4>Master of Technology</h4>
                    <p className="timeline-field">
                      Computer Science and Engineering
                    </p>
                    <p className="timeline-place">
                      PES University · Bengaluru, Karnataka
                    </p>
                    <span className="timeline-badge">AI/ML Specialization</span>
                  </div>
                </article>

                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="timeline-period">AUG 2020 — MAY 2024</span>
                    <h4>Bachelor of Engineering</h4>
                    <p className="timeline-field">
                      Computer Science and Engineering
                    </p>
                    <p className="timeline-place">
                      Jain College of Engineering and Technology, Karnataka
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="journey-column">
              <h3 className="journey-column-title">
                <span className="journey-title-icon">⌘</span>
                Experience
              </h3>

              <div className="timeline">
                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="timeline-period">AUG 2023 — SEP 2023</span>
                    <h4>Full Stack Web Developer</h4>
                    <p className="timeline-place">
                      AI Robosoft Products and Services · Bengaluru
                    </p>
                    <ul className="experience-points">
                      <li>
                        Developed full-stack applications using MongoDB,
                        Express.js, React.js, and Node.js.
                      </li>
                      <li>
                        Implemented JWT-based authentication and RESTful APIs.
                      </li>
                      <li>
                        Worked on frontend-backend integration and
                        real-time system communication.
                      </li>
                    </ul>
                  </div>
                </article>

                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-card">
                    <span className="timeline-period">JUN 2023 — JUL 2023</span>
                    <h4>Full Stack Web Developer</h4>
                    <p className="timeline-place">
                      Varcons Technologies Pvt Ltd · Bengaluru
                    </p>
                    <ul className="experience-points">
                      <li>
                        Built responsive web applications using HTML,
                        CSS, and JavaScript.
                      </li>
                      <li>
                        Used Bootstrap to develop reusable UI components.
                      </li>
                      <li>
                        Applied Git version control and core web
                        development principles.
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>



        <section className="section" id="contact">
          <div className="contact-panel">
            <div className="contact-content">
              <span className="section-eyebrow">05 / GET IN TOUCH</span>
              <h2 className="section-title">
                Let's build something
                <span className="accent-text"> meaningful.</span>
              </h2>
              <p className="section-description">
                I'm interested in software development opportunities
                where I can contribute, keep learning, and build useful
                applications. Feel free to reach out.
              </p>

              <div className="contact-actions">
                <a
                  className="primary-button"
                  href="mailto:aftabdharwad40@gmail.com"
                >
                  Email Me <span aria-hidden="true">↗</span>
                </a>

                <a
                  className="secondary-button"
                  href="https://www.linkedin.com/in/aftab-d-90b478288/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="contact-details">
              <a
                className="contact-detail"
                href="mailto:aftabdharwad40@gmail.com"
              >
                <span className="contact-detail-icon">@</span>

                <span>
                  <small>Email</small>
                  <strong className="contact-email-link">
                    aftabdharwad40@gmail.com
                  </strong>
                </span>

                <span className="contact-arrow">↗</span>
              </a>

              <a
                className="contact-detail"
                href="https://github.com/Aftab-dharwad"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-detail-icon">⌘</span>
                <span>
                  <small>GitHub</small>
                  <strong>Aftab-dharwad</strong>
                </span>
                <span className="contact-arrow">↗</span>
              </a>

              <a
                className="contact-detail"
                href="https://www.linkedin.com/in/aftab-d-90b478288/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-detail-icon">in</span>
                <span>
                  <small>LinkedIn</small>
                  <strong>Connect professionally</strong>
                </span>
                <span className="contact-arrow">↗</span>
              </a>
            </div>
          </div>
        </section>


        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Aftab Dharwad</span>
          <span>Designed with care · Built with React</span>
        </footer>
      </div>
    </main>
  );
}

export default App;
