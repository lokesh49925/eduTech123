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

function Python_full_stack() {

  const [activeIndex, setActiveIndex] = useState(null);

  const modules = [
    {
      title: "Module 1",
      subtitle: "Front-End Web Development",
      details: [
        "Introduction to web technologies",
        "HTML5, CSS3, and JavaScript fundamentals",
        "DOM manipulation and responsive web design",
      ],
    },
    {
      title: "Module 2",
      subtitle: "Python Programming Essentials",
      details: [
        "Python syntax, data types, and control structures",
        "Functions, modules, and file handling",
        "Object-Oriented Programming in Python",
      ],
    },
    {
      title: "Module 3",
      subtitle: "Backend Development with Flask / Django",
      details: [
        "Setting up backend applications",
        "Routing, templates, and form handling",
        "REST API development with Flask / Django REST Framework",
      ],
    },
    {
      title: "Module 4",
      subtitle: "Database Management",
      details: [
        "Introduction to databases and SQL",
        "Performing CRUD operations using MySQL",
        "ORM integration (SQLAlchemy / Django ORM)",
      ],
    },
    {
      title: "Module 5",
      subtitle: "Front-End Integration (React.js Essentials)",
      details: [
        "Introduction to React.js",
        "Building reusable UI components",
        "Connecting frontend with backend APIs",
      ],
    },
    {
      title: "Module 6",
      subtitle: "Project & Deployment",
      details: [
        "Developing a full stack project from scratch",
        "Git & GitHub for version control",
        "Deployment on cloud platforms (AWS / Render / Netlify)",
        "Resume building and interview preparation",
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
    <div className="courseDetail-pythonfullstack-page">
      
      {/* Hero Section */}
      <section className="courseDetail-hero-section">
        <div className="courseDetail-hero-content">
          <div className="courseDetail-hero-heading">
            <h1>PYTHON FULL STACK<br/><span className="courseDetail-essentials">ESSENTIALS PROGRAM</span></h1>
            <p>Become a job-ready Python full stack developer in just 45 days through our intensive, hands-on training program.</p>
            <a href="#journey4">
            <button className="courseDetail-start-learning-btn courseDetail-desktop-btn">Start Learning</button>
            </a>
          </div>
          
          <div className="courseDetail-hero-image">
            <img src={Digital_img} alt="Python Full Stack Essentials" />
          </div>
          
          <div className="courseDetail-hero-button">
             <a href="#journey4">
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
            <img src={About_img} alt="About Python Full Stack Essentials" />
          </div>
          
          <div className="courseDetail-about-content">
            <p>
                         The Python Full Stack Essentials Program is a 45-day hands-on training course designed to equip learners with the essential skills to build and deploy full stack web applications using Python. The program combines modern front-end technologies with powerful backend frameworks like Flask and Django, helping learners become confident, job-ready developers in a short span of time.
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
                             Develop backend web applications using Python frameworks (Flask / Django).
                           </li>
                           <li>
                             <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                             Connect and manage databases using MySQL.
                           </li>
                           <li>
                             <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                            Implement RESTful APIs and integrate them with front-end applications.
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
      <section className="courseDetail-pricing-container" id="journey4">
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
            <a href="https://wa.me/917989659195?text=Hello%2C%20I%20want%20to%20enroll%20in%20the%20Python%20Full%20Stack%20course." target="_blank" >
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
             <a href="https://wa.me/917989659195?text=Hello%2C%20I%20want%20to%20enroll%20in%20the%20Python%20Full%20Stack%20course." target="_blank" >
            <button className="courseDetail-enroll-btn">Enroll Now</button>
            </a>
          </div>
        </div>
      </section>

      {/* Student Journey */}
      <section className="courseDetail-student-journey-container">
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
            <p>Apply your learning to real-world full stack development scenarios.</p>
          </div>
          <div className="courseDetail-journey-step">
            <div className="courseDetail-step-icon">
              <img src={certificateIcon} alt="Get Certified" />
            </div>
            <h3>Get Certified</h3>
            <p>Earn your Python Full Stack certification and kickstart your tech career.</p>
          </div>
        </div>
      </section>

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
                     <p>Yes, it’s beginner-friendly and covers all Python full stack fundamentals from scratch.</p>
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
  );
}

export default Python_full_stack;