import React from 'react';
import './Aboutus.css'; // added import for normal CSS
import Desktop from '../assets/Images/desktop.png';
import Aboutopp from '../assets/Images/aboutopp.png';
import Aboutpic from '../assets/Images/TAT Logo Blue Png.png';
import { FaPlay, FaChalkboardTeacher, FaBriefcase, FaComments } from "react-icons/fa";
import Cda from '../Components/Cda.jsx';

// Replaced feature icons with imports from lucide-react
import {
  Paintbrush,
  ShoppingCart,
  Phone,
  Gift,
  Settings,
  Rocket,
} from 'lucide-react';

// Feature Card Component
const FeatureCard = ({ icon: Icon, title }) => (
  <div className="aboutus-feature-card">
    <div className="aboutus-feature-icon">
      <Icon size={24} />
    </div>
    <div className="aboutus-feature-title">{title}</div>
  </div>
);

 const offers = [
    { icon: <FaPlay />, title: "Online courses" },
    { icon: <FaChalkboardTeacher />, title: "Classroom training" },
    { icon: <FaBriefcase />, title: "Corporate training" },
    { icon: <FaComments />, title: "Community & support" },
  ];

// Main Page Component, renamed to App for preview compatibility
const App = () => {
  return (
    <section id='aboutus'>
    <div className="aboutus-about-page">
      {/* This is a single-file React component. 
        Tailwind CSS is assumed to be available in the environment.
        All custom CSS from the <style> tag has been converted to Tailwind classes.
      */}

      {/* Hero Section */}
      <section className="aboutus-container">
        <div className="aboutus-hero">
          <div className="aboutus-hero-content">
            <h1 className="aboutus-hero-title">About Us</h1>
            <p className="aboutus-hero-subtitle">
              At <strong>TatEduTech</strong>, we are dedicated to providing top-notch online education that empowers individuals to achieve their personal and professional goals.
            </p>
            <button className="aboutus-cta-button">Start Learning</button>
          </div>

          {/* replaced placeholder box with actual image */}
          {/* <div> */}
            <img
              src={Desktop}
              alt="Hero illustration"
              className="aboutus-hero-illustration-box"
            />
          {/* </div> */}
        </div>
      </section>

      {/* We Are EduCo Section */}
      <section className="aboutus-container">
        <div className="aboutus-we-are-educo">
          <div className="aboutus-about-content">
            <h2 className="aboutus-section-title">Who We Are</h2>
            <div className="aboutus-about-text">
              <p>
                Welcome to <strong>TatEduTech</strong>, your trusted partner in quality online education. 
                We provide a variety of courses designed to help learners achieve their career and learning goals.
              </p>
              <p>
                Our mission is to make learning accessible, engaging, and effective. 
                At TateEduTech, we combine expert instructors, interactive content, and practical projects to ensure a comprehensive learning experience.
              </p>
              <p>
                Meet our CEO, who is dedicated to empowering students through knowledge and innovation. 
                With a vision to bridge the gap between education and career success, our leadership team is committed to supporting your growth and achievements.
              </p>

            </div>
          </div>

          {/* replaced placeholder box with actual image */}
          <img src={Aboutpic} alt="About photo" className="aboutus-about-photo" />
        </div>
      </section>

       <section className="offer-section">
      <h2 className="offer-title">What We Offer</h2>
      <p className="offer-subtitle">Here's how we help learners...</p>

      <div className="offer-grid">
        {offers.map((item, index) => (
          <div key={index} className="offer-card">
            <div className="offer-icon">{item.icon}</div>
            <p className="offer-text">{item.title}</p>
          </div>
        ))}
      </div>
    </section>

      {/* Why Choose Us Section */}
      <section className="aboutus-container">
        <div className="aboutus-why-choose-us">
          <div className="aboutus-why-illustration">
            {/* replaced placeholder box with actual image */}
            <img
              src={Aboutopp}
              alt="Why choose us illustration"
              className="aboutus-why-illustration-box"
            />
          </div>

          <div className="aboutus-why-content">
            <h2 className="aboutus-section-title">Why Choose Us</h2>
            <p className="aboutus-why-text">
                          At <strong>TatEduTech</strong>, we provide high-quality courses with expert instructors and interactive learning. 
                Our programs are designed to help you gain practical skills, achieve your career goals, and stay ahead in the ever-changing job market.
            </p>
            <div className="aboutus-features-grid">
              <FeatureCard icon={Paintbrush} title="Creative Design" />
              <FeatureCard icon={ShoppingCart} title="Easy to Customize" />
              <FeatureCard icon={Phone} title="Support 24/7" />
              <FeatureCard icon={Gift} title="Gift for Member" />
              <FeatureCard icon={Settings} title="Optimization" />
              <FeatureCard icon={Rocket} title="Development" />
            </div>
          </div>
        </div>
      </section>

     <Cda />
    </div>
    </section>
  );
};

export default App;