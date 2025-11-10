import React from "react";
import "./Herrr.css";
import rightImage from "../assets/images/hero-right1.png"; 
import google from "../assets/images/msme.png";
import canva from "../assets/images/iso.png";
import amazon from "../assets/images/stupind.png";
// import sketch from "../assets/images/Google.png";

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h1>Master <span>Digital Skills </span>with Ease!</h1>
        <p className="hero-left-p">
          Unlock Digital Mastery Effortlessly! Explore and Enhance your skills
          with our user-friendly platform.
        </p>

        {/* INLINE IMAGE FOR TABLET / MOBILE */}
        <div className="hero-image-mobile-wrapper">
          <img src={rightImage} alt="Learning Platform" className="hero-image-mobile" />
        </div>

        <div className="students">
          <p className="students-title">Total students</p>
          <div className="avatars">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="student" />
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="student" />
            <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="student" />
            <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="student" />
            <div className="count">100+</div>
          </div>
        </div>

        <div className="buttons">
          <a href="https://wa.me/917989659195"  target="_blank"> 
          <button className="btn-primary">Start learning</button>
          </a>
          <a href="#course">
          <button className="btn-secondary">Learn more</button>
          </a>
        </div>

        <div className="trusted-section">
          <p className="trusted-title">Recognized by</p>
          <div className="logo-slider">
            <div className="slide-track">
              <img src={google} alt="Google" />
              <img src={canva} alt="Canva" />
              <img src={amazon} alt="Amazon" />
              {/* <img src={sketch} alt="Sketch" /> */}
              <img src={google} alt="Google" />
              <img src={canva} alt="Canva" />
              <img src={amazon} alt="Amazon" />
              {/* <img src={sketch} alt="Sketch" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={rightImage} alt="Learning Platform" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
