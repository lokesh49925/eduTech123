import React from "react";
import "./Cda.css";
import { FaReact, FaPython, FaAngular, FaJs, FaSass, FaVuejs, FaLaravel } from "react-icons/fa";
import { SiGraphql } from "react-icons/si";
import { PiCoffeeFill } from "react-icons/pi";

const Cda = () => {
  return (
    <section className="cda-container">
      {/* Floating Icons */}
      <div className="floating-icons">
        <FaAngular className="icon angular" />
        <FaReact className="icon react" />
        <SiGraphql className="icon graphql" />
        <FaPython className="icon python" />
        <FaJs className="icon js" />
        <PiCoffeeFill className="icon coffee" />
        <FaSass className="icon sass" />
        <FaVuejs className="icon vue" />
        <FaLaravel className="icon laravel" />
      </div>

      {/* Text Content */}
      <div className="cda-content">
        <h1 className="cda-title">Empower Your Learning Journey with EduSpark</h1>
        <p className="cda-subtitle">
          Discover courses that help you grow your skills, achieve your goals,
          and unlock new opportunities — all in one place.
        </p>
        <div className="cda-buttons">
          <a href="/contact">
          <button className="btn business-btn">Contact Us</button>
          </a>
           <a href="https://wa.me/917989659195"  target="_blank"> 
          <button className="btn start-btn">Start Learning for Free</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cda;
