import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImg from "../assets/Images/about-img.png"; 

const Counter = ({ target, suffix = "", duration = 1500, startNow }) => {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!startNow) return;
    startRef.current = null;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = timestamp - startRef.current;
      const pct = Math.min(progress / duration, 1);
      const current = Math.floor(pct * target);
      setValue(current);
      if (pct < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [startNow, target, duration]);

  return (
    <h3>
      {value}
      {suffix}
    </h3>
  );
};

const AboutSection = () => {
  const statsRef = useRef(null);
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      // If no IO support, just start counters on small screens
      if (window.innerWidth <= 1024) setStartCounters(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only auto-start on mobile/tablet widths as requested (<=1024)
          if (entry.isIntersecting && window.innerWidth <= 2000) {
            setStartCounters(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left Image */}
        <div className="about-image">
          <img src={aboutImg} alt="About us group" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <div className="choose-header">
          <h4 className="sub-title">About us</h4>
          <h2>E-Learning Platform for Digital Skills</h2>
          </div>
         <div className="about-image-mobile">
          <img src={aboutImg} alt="About us group" />
        </div>
          <p>
            Empower yourself with the knowledge and skills gained through online
            education! The key to your future! Empower yourself with the
            knowledge and skills gained through online education! The key to
            your future!
          </p>
          <a href="aboutus">
          <button className="learn-btn">
            Learn more <span>→</span>
          </button>
          </a>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="about-stats" ref={statsRef}>
        <div className="stat">
        
          <Counter target={15} suffix="+" duration={1200} startNow={startCounters} />
          <p>Years of experience</p>
        </div>
        <div className="stat">
  
          <Counter target={100} suffix="k" duration={1500} startNow={startCounters} />
          <p>Students worldwide</p>
        </div>
        <div className="stat">
          <Counter target={45} suffix="+" duration={1200} startNow={startCounters} />
          <p>Class subjects</p>
        </div>
        <div className="stat">
          <Counter target={98} suffix="%" duration={1200} startNow={startCounters} />
          <p>Student satisfactions</p>
        </div>
      </div> */}
    </section>
  );
};

export default AboutSection;