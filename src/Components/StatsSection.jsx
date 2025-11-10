import React, { useEffect, useState } from "react";
import "./StatsSection.css";

// Import your own icon images
import mentorIcon from "../assets/Icons/mentor.png";
import alumniIcon from "../assets/Icons/alumni.png";
import partnerIcon from "../assets/Icons/partner.png";

const StatsSection = () => {
  const [mentors, setMentors] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [partners, setPartners] = useState(0);

  useEffect(() => {
    const animateCount = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 20);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setter(Math.floor(start));
      }, 20);
    };

    animateCount(setMentors, 10);
    animateCount(setAlumni, 100);
    animateCount(setPartners, 10);
  }, []);

  return (
    <section className="stats-section">
      <div className="stat-item">
        <img src={mentorIcon} alt="Mentor Icon" className="stat-img" />
        <div className="stat-info">
          <h2>{mentors}+</h2>
          <p>Experienced Mentors</p>
        </div>
      </div>

      <div className="stat-item">
        <img src={alumniIcon} alt="Alumni Icon" className="stat-img" />
        <div className="stat-info">
          <h2>{alumni.toLocaleString()}+</h2>
          <p>Successful Students</p>
        </div>
      </div>

      <div className="stat-item">
        <img src={partnerIcon} alt="Partner Icon" className="stat-img" />
        <div className="stat-info">
          <h2>{partners}+</h2>
          <p>Partner Companies</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
