import React from "react";
import { FaVideo, FaUserAlt, FaRegClock } from "react-icons/fa";
import "./FeatureStrip.css";

const features = [
  {
    icon: <FaVideo size={22} />,
    title: "30,000 online courses",
    desc: "Enjoy a variety of freshtopics",
  },
  {
    icon: <FaUserAlt size={22} />,
    title: "Expert instruction",
    desc: "Find the right instructor for you",
  },
  {
    icon: <FaRegClock size={22} />,
    title: "Lifetime access",
    desc: "Learn on your schedule",
  },
];

const FeatureStrip = () => (
  <div className="feature-strip">
    {features.map((f, i) => (
      <div key={i} className="feature-item">
        <div className="feature-icon">{f.icon}</div>
        <div>
          <div className="feature-title">{f.title}</div>
          <div className="feature-desc">{f.desc}</div>
        </div>
      </div>
    ))}
  </div>
);

export default FeatureStrip;
