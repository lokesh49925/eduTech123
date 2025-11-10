import React, { useState } from 'react';
import './Java_full_stack.css';
import Digital_img from "../assets/Images/Digital_Marketing_img.png";
import About_img from "../assets/Images/About_img.png";
import Curriculum_img from "../assets/Images/Curriculm_image.png";
import enrollIcon from '../assets/Icons/enroll-icon.png';
import liveTrainingIcon from '../assets/Icons/live-training-icon.png';
import projectsIcon from '../assets/Icons/projects-icon.png';
import certificateIcon from '../assets/Icons/certificate-icon.png';
import tickIcon from '../assets/Images/tick.png';
import plusIcon from '../assets/Images/plus.png';

function Java_full_stack() {

  const [activeIndex, setActiveIndex] = useState(null);

  const modules = [
    {
      title: "Module 1",
      subtitle: "Web Development Fundamentals",
      details: [
        "Introduction to web technologies",
        "HTML5, CSS3, and JavaScript essentials",
        "Building responsive web pages",
      ],
    },
    {
      title: "Module 2",
      subtitle: "Core Java Programming",
      details: [
        "Java basics, OOPs concepts",
        "Exception handling, collections, and file handling",
        "Mini console project",
      ],
    },
    {
      title: "Module 3",
      subtitle: "Advanced Java & JDBC",
      details: [
        "Servlets and JSP",
        "Database connectivity with MySQL using JDBC",
        "MVC architecture",
      ],
    },
    {
      title: "Module 4",
      subtitle: "Spring Boot Framework",
      details: [
        "Introduction to Spring and Spring Boot",
        "Creating RESTful APIs",
        "Spring Data JPA for database integration",
      ],
    },
    {
      title: "Module 5",
      subtitle: "Front-End Integration (React.js Essentials)",
      details: [
        "React basics: components, props, and state",
        "API integration with backend services",
        "Routing and UI interactivity",
      ],
    },
    {
      title: "Module 6",
      subtitle: "Capstone Project & Deployment",
      details: [
        "Full stack project development",
        "Version control with Git and GitHub",
        "Project deployment on cloud (AWS / Render / Netlify)",
        "Career guidance and interview preparation",
      ],
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const sessions = [
    {
      id: 1,
      title: 'Resume Building',
      description: 'Create a professional resume highlighting your full stack development skills.',
      className: 'courseDetail-resume-building'
    },
    {
      id: 2,
      title: 'Interview Preparation',
      description: 'Get expert guidance and mock interviews to succeed in technical rounds.',
      className: 'courseDetail-interview-prep'
    },
    {
      id: 3,
      title: 'Career Guidance',
      description: 'Learn how to present your portfolio and projects to recruiters effectively.',
      className: 'courseDetail-freelancing-guide'
    }
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <section id='java-full-stack'>
    <div className="courseDetail-javafullstack-page">
      
      {/* Hero Section */}
      <section className="courseDetail-hero-section">
        <div className="courseDetail-hero-content">
          <div className="courseDetail-hero-heading">
            <h1>JAVA FULL STACK<br/><span className="courseDetail-essentials">ESSENTIALS PROGRAM</span></h1>
            <p>Become a job-ready full stack developer in just 45 days through our intensive, hands-on Java Full Stack Essentials Program.</p>
            <a href="#journey1">
            <button className="courseDetail-start-learning-btn courseDetail-desktop-btn">Start Learning</button>
            </a>
          </div>
          
          <div className="courseDetail-hero-image">
            <img src={Digital_img} alt="Java Full Stack Essentials" />
          </div>
          
          <div className="courseDetail-hero-button">
             <a href="#journey1">
            <button className="courseDetail-start-learning-btn courseDetail-mobile-btn">Start Learning</button>
            </a>
          </div>
        </div>
      </section>

      {/* About Course Section */}
      <section className="courseDetail-about-section">
              <div className="courseDetail-about-container">
                <div className="courseDetail-about-heading">
                  <h2>About the Course</h2>
                </div>
      
                <div className="courseDetail-about-image">
                  <img src={About_img} alt="About Digital Marketing" />
                </div>
      
                <div className="courseDetail-about-content">
                  <p>
                    The Java Full Stack Essentials Program is a 45-day intensive course designed to equip learners with the fundamental skills to become a proficient full stack developer. 
                    This program integrates Java backend development with modern frontend technologies, helping you build, connect, and deploy complete web applications confidently.
                  </p>
                  <div className="courseDetail-learning-outcomes">
                    <h3>Learning Outcomes:</h3>
                    <ul>
                      <li>
                        <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                       Create interactive web interfaces using HTML, CSS, and JavaScript.
                      </li>
                      <li>
                        <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                         Build backend APIs and web applications using Spring Boot.
                      </li>
                      <li>
                        <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                        Connect applications to databases using JDBC and JPA.
                      </li>
                      <li>
                        <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                        Integrate frontend and backend to create complete web solutions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

      {/* Curriculum Overview */}
      <section className="courseDetail-curriculum-section">
      <div className="courseDetail-curriculum-container">
        <div className="courseDetail-curriculum-heading">
          <h2>Curriculum Overview (6 Modules)</h2>
        </div>

        <div className="courseDetail-curriculum-image">
          <img src={Curriculum_img} alt="Curriculum Overview" />
        </div>

        <div className="courseDetail-curriculum-content">
          <div className="courseDetail-modules-list">
            {modules.map((module, index) => (
              <div key={index} className="courseDetail-module-wrapper">
                <div
                  className={`courseDetail-module-item ${activeIndex === index ? "courseDetail-active" : ""}`}
                  onClick={() => handleClick(index)}
                >
                  <div className="courseDetail-module-content">
                    <h4>{module.title}</h4>
                    <p>{module.subtitle}</p>
                  </div>
                  <div className="courseDetail-module-arrow">
                    <img
                      src={plusIcon}
                      alt="toggle"
                      className={`courseDetail-arrow-icon ${activeIndex === index ? "courseDetail-rotated" : ""}`}
                    />
                  </div>
                </div>

                {activeIndex === index && (
                  <div className="courseDetail-module-details">
                    <ul>
                      {module.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Pricing Section */}
      <section className="courseDetail-pricing-container" id="journey1">
        <div className="courseDetail-pricing-header">
          <h2>Pricing & Enrollment</h2>
        </div>
        
        <div className="courseDetail-pricing-cards">
          <div className="courseDetail-pricing-card">
            <div className="courseDetail-card-header">
              <h3>Self-Paced</h3>
              <div className="courseDetail-price">
                <span className="courseDetail-currency">₹</span>
                <span className="courseDetail-amount">499</span>
              </div>
            </div>
            <div className="courseDetail-card-description">
              <p>Access all course materials and learn at your own pace — ideal for independent learners.</p>
            </div>
            <div className="courseDetail-features-list">
              <div className="courseDetail-feature-item"><span className="courseDetail-checkmark">✓</span><span>Lifetime access to course videos</span></div>
              <div className="courseDetail-feature-item"><span className="courseDetail-checkmark">✓</span><span>Downloadable resources</span></div>
              <div className="courseDetail-feature-item"><span className="courseDetail-checkmark">✓</span><span>Access to community forum</span></div>
               <div className="courseDetail-feature-item"><span className="courseDetail-checkmark">✓</span><span>Course completion certificate</span></div>
            </div>
            <a href="https://wa.me/917989659195?text=Hello%2C%20I%20want%20to%20enroll%20in%20the%20Java%20Full%20Stack%20course." target="_blank">
            <button className="courseDetail-enroll-btn">Enroll Now</button>
            </a>
          </div>

          <div className="courseDetail-pricing-card courseDetail-instructor-led">
            <div className="courseDetail-popular-badge">Most Popular</div>
            <div className="courseDetail-card-header">
              <h3>Instructor-Led</h3>
              <div className="courseDetail-price">
                <span className="courseDetail-currency">₹</span>
                <span className="courseDetail-amount">999</span>
              </div>
            </div>
            <div className="courseDetail-card-description">
              <p>Learn directly from experts through live sessions, mentorship, and guided projects.</p>
            </div>
            <div className="courseDetail-features-list">
              <div className="courseDetail-feature-item"><span className="courseDetail-checkmark">✓</span><span>All features of Self-Paced</span></div>
              <div className="courseDetail-feature-item"><span className="courseDetail-checkmark">✓</span><span>Live instructor sessions</span></div>
              <div className="courseDetail-feature-item"><span className="courseDetail-checkmark">✓</span><span>Project guidance & review</span></div>
              <div className="courseDetail-feature-item"><span className="courseDetail-checkmark">✓</span><span>Course completion certificate</span></div>
            </div>
             <a href="https://wa.me/917989659195?text=Hello%2C%20I%20want%20to%20enroll%20in%20the%20Java%20Full%20Stack%20course." target="_blank" >
            <button className="courseDetail-enroll-btn">Enroll Now</button>
            </a>
          </div>
        </div>
      </section>

      {/* Student Journey */}

      <section className="courseDetail-student-journey-container" >
        <div className="courseDetail-journey-header">
          <h1>Student Journey</h1>
        </div>
        
        <div className="courseDetail-journey-steps">
          <div className="courseDetail-journey-step">
            <div className="courseDetail-step-icon">
              <img src={enrollIcon} alt="Enroll & Learn" />
            </div>
            <h3>Enroll & Learn</h3>
            <p>Start your 45-day journey to mastering full stack development.</p>
          </div>
          <div className="courseDetail-journey-step">
            <div className="courseDetail-step-icon">
              <img src={liveTrainingIcon} alt="Live Training" />
            </div>
            <h3>Live Training</h3>
            <p>Engage with instructors and peers through interactive sessions.</p>
          </div>
          <div className="courseDetail-journey-step">
            <div className="courseDetail-step-icon">
              <img src={projectsIcon} alt="Hands-on Projects" />
            </div>
            <h3>Hands-on Projects</h3>
            <p>Apply your learning to real-world web development scenarios.</p>
          </div>
          <div className="courseDetail-journey-step">
            <div className="courseDetail-step-icon">
              <img src={certificateIcon} alt="Get Certified" />
            </div>
            <h3>Get Certified</h3>
            <p>Earn your Java Full Stack certification and kickstart your tech career.</p>
          </div>
        </div>
      </section>

      {/* Track Record */}
      {/* <section className="courseDetail-track-record-container">
        <div className="courseDetail-track-record-section">
          <div className="courseDetail-track-record-header">
            <h2>Our Proven Track Record</h2>
          </div>
          <div className="courseDetail-stats-grid">
            <div className="courseDetail-stat-item"><div className="courseDetail-stat-number courseDetail-stat-purple-1">200+</div><div className="courseDetail-stat-label">Hiring Partners</div></div>
            <div className="courseDetail-stat-item"><div className="courseDetail-stat-number courseDetail-stat-purple-2">400+</div><div className="courseDetail-stat-label">Batches Completed</div></div>
            <div className="courseDetail-stat-item"><div className="courseDetail-stat-number courseDetail-stat-purple-3">15K+</div><div className="courseDetail-stat-label">Students Trained</div></div>
            <div className="courseDetail-stat-item"><div className="courseDetail-stat-number courseDetail-stat-purple-4">2M+</div><div className="courseDetail-stat-label">Hours of Training</div></div>
          </div>
        </div>
      </section> */}

      {/* Career Booster Section */}
      <section className="courseDetail-career-booster-section">
        <div className="courseDetail-container">
          <h2 className="courseDetail-section-title">Free Career Booster Add-On Sessions</h2>
          <div className="courseDetail-sessions-grid">
            {sessions.map((session) => (
              <div key={session.id} className={`courseDetail-session-card ${session.className}`}>
                <h3 className="courseDetail-session-title">{session.title}</h3>
                <p className="courseDetail-session-description">{session.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Platform Section */}
      <section className="courseDetail-join-section">
        <div className="courseDetail-join-container">
          <h2>Join the world’s largest online learning platform</h2>
          <div className="courseDetail-email-signup">
            <input type="email" placeholder="name@email.com" />
            <button>Join now</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
            
    <section className="courseDetail-faq-section">
      <div className="courseDetail-faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="courseDetail-faq-list">

          <div className="courseDetail-faq-item">
            <div className="courseDetail-faq-question" onClick={() => toggleFAQ(0)}>
              <span>Is this course suitable for beginners?</span>
              <img
                src={plusIcon}
                alt="toggle"
                className={`courseDetail-faq-icon ${activeFAQ === 0 ? "courseDetail-active" : ""}`}
              />
            </div>
            {activeFAQ === 0 && (
              <div className="courseDetail-faq-answer">
                <p>Yes, it’s beginner-friendly and covers all Java full stack fundamentals from scratch.</p>
              </div>
            )}
          </div>

          <div className="courseDetail-faq-item">
            <div className="courseDetail-faq-question" onClick={() => toggleFAQ(1)}>
              <span>Do I get lifetime access to course materials?</span>
              <img
                src={plusIcon}
                alt="toggle"
                className={`courseDetail-faq-icon ${activeFAQ === 1 ? "courseDetail-active" : ""}`}
              />
            </div>
            {activeFAQ === 1 && (
              <div className="courseDetail-faq-answer">
                <p>Yes, all course materials and recordings will be available for lifetime access.</p>
              </div>
            )}
          </div>

          <div className="courseDetail-faq-item">
            <div className="courseDetail-faq-question" onClick={() => toggleFAQ(2)}>
              <span>Will I receive a certificate upon completion?</span>
              <img
                src={plusIcon}
                alt="toggle"
                className={`courseDetail-faq-icon ${activeFAQ === 2 ? "courseDetail-active" : ""}`}
              />
            </div>
            {activeFAQ === 2 && (
              <div className="courseDetail-faq-answer">
                <p>Yes, a certificate will be provided once you complete the full stack project successfully.</p>
              </div>
            )}
          </div>

          <div className="courseDetail-faq-item">
            <div className="courseDetail-faq-question" onClick={() => toggleFAQ(3)}>
              <span>What if I’m not satisfied with the course?</span>
              <img
                src={plusIcon}
                alt="toggle"
                className={`courseDetail-faq-icon ${activeFAQ === 3 ? "courseDetail-active" : ""}`}
              />
            </div>
            {activeFAQ === 3 && (
              <div className="courseDetail-faq-answer">
                <p>We offer a 30-day money-back guarantee if you’re unsatisfied with the learning experience.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>

    </div>
    </section>
  );
}

export default Java_full_stack;