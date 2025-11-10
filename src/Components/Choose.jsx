import React from "react";
import "./Choose.css";
import { FaChalkboardTeacher, FaPlayCircle, FaLockOpen, FaCertificate } from "react-icons/fa";

const Choose = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="w-icon" />,
      title: "Expert Mentors",
      desc: "Learn from our Expert Professionals who bring real-world experience and hands-on knowledge to every lesson.",
    },
    {
      icon: <FaPlayCircle className="w-icon" />,
      title: "Interactive Learning",
      desc: "Engage in dynamic, project-based courses designed to make learning practical, fun, and result-driven.",
    },
    {
      icon: <FaLockOpen className="w-icon" />,
      title: "Lifetime Access",
      desc: "Revisit any course anytime, anywhere. Your learning journey never expires with full lifetime access.",
    },
    {
      icon: <FaCertificate className="w-icon" />,
      title: "Globally Recognized Certificate",
      desc: "Earn verified certificates that showcase your skills and help you stand out in your academic or professional career.",
    },
  ];

  return (
    <section className="choose-section">
      <div className="choose-header">
        <p className="sub-title">Why Learn With Us</p>
        <h2 className="main-title">Empowering Learners for the Future</h2>
      </div>

      <div className="choose-grid">
        {features.map((item, index) => (
          <div className={`choose-card ${index === 0 ? "active" : ""}`} key={index}>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
