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

function Digital_Marketing() {

  const [activeIndex, setActiveIndex] = useState(null);

  const modules = [
    {
      title: "Module 1",
      subtitle: "Introduction to Digital Marketing",
      details: [
        "Overview of digital marketing and its importance",
        "Understanding customer journey and online branding",
        "Key digital channels and strategies",
      ],
    },
    {
      title: "Module 2",
      subtitle: "Search Engine Optimization (SEO)",
      details: [
        "Keyword research and on-page optimization",
        "Off-page SEO and link building techniques",
        "SEO tools (Google Search Console, SEMrush basics)",
      ],
    },
    {
      title: "Module 3",
      subtitle: "Social Media Marketing",
      details: [
        "Building brand identity on Facebook, Instagram, LinkedIn, and Twitter",
        "Social media content planning and scheduling",
        "Engagement strategies and performance tracking",
      ],
    },
    {
      title: "Module 4",
      subtitle: "Google Ads & Paid Marketing",
      details: [
        "Introduction to Google Ads (Search, Display, and Video campaigns)",
        "Budget management and bidding strategies",
        "Conversion tracking and optimization",
      ],
    },
    {
      title: "Module 5",
      subtitle: "Content & Email Marketing",
      details: [
        "Crafting engaging blog and social media content",
        "Copywriting essentials for digital marketing",
        "Email marketing tools (Mailchimp, Sendinblue)",
      ],
    },
    {
      title: "Module 6",
      subtitle: "Analytics, Strategy & Final Project",
      details: [
        "Using Google Analytics for performance insights",
        "Building a complete digital marketing plan",
        "Live project: Creating and presenting a full marketing strategy",
        "Career guidance and portfolio building",
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
      description: 'Create a professional resume highlighting your digital marketing skills.',
      className: 'courseDetail-resume-building'
    },
    {
      id: 2,
      title: 'Interview Preparation',
      description: 'Get expert guidance and mock interviews to succeed in marketing roles.',
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
    <div className="courseDetail-digitalmarketing-page">
      
      {/* Hero Section */}
      <section className="courseDetail-hero-section">
        <div className="courseDetail-hero-content">
          <div className="courseDetail-hero-heading">
            <h1>DIGITAL MARKETING</h1>
            <p>Become a job-ready digital marketer in just 4 weeks through our intensive, hands-on Digital Marketing Essentials Program.</p>
            <a href="#journey3">
            <button className="courseDetail-start-learning-btn courseDetail-desktop-btn">Start Learning</button>
            </a>
          </div>
          
          <div className="courseDetail-hero-image">
            <img src={Digital_img} alt="Digital Marketing Essentials" />
          </div>
          
          <div className="courseDetail-hero-button">
            <a href="#journey3">
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
                    The Digital Marketing Essentials Program is a 4-week hands-on course designed to equip learners with the fundamental skills needed to build, manage, and grow an online presence effectively.
                    This program covers key areas of digital marketing, including SEO, social media marketing, Google Ads, content creation, and analytics — helping learners understand how to attract, engage, and convert audiences in the digital world.
                    
                    Through practical assignments and live projects, you will gain real-world experience using industry-standard tools and techniques to create impactful digital marketing strategies for brands and businesses.
                  </p>
                  <div className="courseDetail-learning-outcomes">
                    <h3>Learning Outcomes:</h3>
                    <ul>
                      <li>
                        <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                       Understand the core principles and channels of digital marketing.
                      </li>
                      <li>
                        <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                         Create and optimize websites for better visibility using SEO techniques.
                      </li>
                      <li>
                        <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                        Design and manage social media campaigns across major platforms.
                      </li>
                      <li>
                        <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                        Run effective paid advertising campaigns on Google and Meta (Facebook/Instagram).
                      </li>
                      <li>
                        <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                        Analyze marketing performance using Google Analytics and data-driven insights.
                      </li>
                      <li>
                        <img src={tickIcon} alt="tick" className="courseDetail-tick-icon" />
                        Develop a complete digital marketing strategy for a business or personal brand.
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
      <section className="courseDetail-pricing-container" id="journey3">
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
              <a href="https://wa.me/917989659195?text=Hello%2C%20I%20want%20to%20enroll%20in%20the%20Digital%20Marketing%20course." target="_blank" >


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
               <a href="https://wa.me/917989659195?text=Hello%2C%20I%20want%20to%20enroll%20in%20the%20Digital%20Marketing%20course." target="_blank" >
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
            <p>Start your 4-week journey to mastering digital marketing.</p>
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
            <p>Apply your learning to real-world digital marketing scenarios.</p>
          </div>
          <div className="courseDetail-journey-step">
            <div className="courseDetail-step-icon">
              <img src={certificateIcon} alt="Get Certified" />
            </div>
            <h3>Get Certified</h3>
            <p>Earn your Digital Marketing certification and kickstart your marketing career.</p>
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
                <p>Yes, it’s beginner-friendly and covers all digital marketing fundamentals from scratch.</p>
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
                <p>Yes, a certificate will be provided once you complete the final project successfully.</p>
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

export default Digital_Marketing;