import React from "react";
import "./Footer.css";
import Insta from '../assets/Icons/Instagram.png';
import Face from '../assets/Icons/Facebook.png';
import Twitter from '../assets/Icons/Twitter.png';
import LinkedIn from '../assets/Icons/Linkedin.png';
import YouTube from '../assets/Icons/Youtube.png';
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id, attempts = 0) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (attempts < 20) {
      setTimeout(() => scrollToSection(id, attempts + 1), 80);
    }
  };

  const handleGoToCourse = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // wait shortly for Home to render, then try scrolling (with retries)
      setTimeout(() => scrollToSection("course"), 120);
    } else {
      scrollToSection("course");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section brand">
          <a href="/">
            <h2 className="footer-logo">TAT <span>EDTech</span></h2>
          </a>
          <p className="footer-desc">
            Unlock Digital Mastery Effortlessly! Explore and enhance your skills
            with our user-friendly platform.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About us</a></li>
            <li><a href="/course" onClick={handleGoToCourse}>Our Class</a></li>
            <li><a href="/course-details">Programs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Support</a></li>
            <li><a href="/privacy">Privacy policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Social media</h3>
          <div className="social-icons">
            <a href="#"><img src={Insta} alt="instagram" /></a>
            <a href="#"><img src={Face} alt="facebook" /></a>
            <a href="#"><img src={Twitter} alt="twitter" /></a>
            <a href="#"><img src={YouTube} alt="youtube" /></a>
            <a href="#"><img src={LinkedIn} alt="linkedin" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 TAT EDTech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
