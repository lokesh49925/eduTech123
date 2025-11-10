import React from "react";
import {
  FaReact, FaAngular, FaPython, FaNodeJs, FaSass, FaDigitalOcean, FaChartLine,
} from "react-icons/fa";
import {
  SiJavascript, SiBootstrap, SiGatsby, SiVuedotjs, SiLaravel,
  SiMongodb, SiDjango, SiWebpack, SiHtml5, SiCss3, SiNginx, SiGoogleanalytics, SiSemrush
} from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillMegaphoneFill } from "react-icons/bs";
import "./CourseDetails.css";
import TypewriterEffect from  './TypewritterEffect.jsx';
import FeatureStrip from "../CourseDetails/FeatureStrip";
import CourseDetailSection from "../CourseDetails/CourseDetailSection";
import Programming from "../CourseDetails/Programming";

const floatingIcons = [
  { icon: <FaAngular color="#DD0031" />, style: { top: "7%", left: "6%" }, float: 1 },
  { icon: <SiJavascript color="#F7DF1E" />, style: { top: "18%", left: "14%" }, float: 2 },
  { icon: <FaPython color="#3776AB" />, style: { top: "60%", left: "4%" }, float: 3 },
  { icon: <FaReact color="#61DBFB" />, style: { bottom: "13%", left: "12%" }, float: 4 },
  { icon: <SiBootstrap color="#7952B3" />, style: { bottom: "23%", left: "9%" }, float: 5 },
  { icon: <SiGatsby color="#663399" />, style: { top: "8%", right: "14%" }, float: 2 },
  { icon: <FaNodeJs color="#3C873A" />, style: { top: "27%", right: "7%" }, float: 1 },
  { icon: <SiVuedotjs color="#42b883" />, style: { bottom: "25%", right: "7%" }, float: 3 },
  { icon: <SiLaravel color="#FF2D20" />, style: { top: "60%", right: "13%" }, float: 4 },
  { icon: <FaSass color="#CC6699" />, style: { bottom: "10%", right: "17%" }, float: 5 },

  { icon: <SiMongodb color="#47A248" />, style: { top: "33%", left: "2%" }, float: 6 },
  { icon: <SiDjango color="#092E20" />, style: { top: "75%", left: "16%" }, float: 7 },
  { icon: <SiWebpack color="#8DD6F9" />, style: { top: "44%", right: "3%" }, float: 2 },
  { icon: <SiHtml5 color="#E34F26" />, style: { bottom: "21%", right: "12%" }, float: 6 },
  { icon: <SiCss3 color="#2965f1" />, style: { top: "22%", right: "16%" }, float: 8 },
  { icon: <SiNginx color="#269539" />, style: { top: "48%", left: "20%" }, float: 7 },
  { icon: <SiGoogleanalytics color="#FBBC05" />, style: { bottom: "16%", left: "25%" }, float: 3 },
  { icon: <BsFillMegaphoneFill color="#ff3c7e" />, style: { top: "67%", right: "18%" }, float: 8 }, // Digital Marketing
  { icon: <SiSemrush color="#ff6f52" />, style: { top: "55%", right: "6%" }, float: 9 }, // SEO
  { icon: <FaDigitalOcean color="#0080FF" />, style: { top: "24%", left: "21%" }, float: 10 },
  { icon: <MdOutlineEmail color="#A3A3A3" />, style: { bottom: "4%", left: "18%" }, float: 9 }, // Email marketing
  { icon: <FaChartLine color="#34a853" />, style: { top: "13%", right: "7%" }, float: 1 }, // Analytics
];

const CourseDetails = () => (
  <>
  <section id="course-details">
    <div className="course-hero-section">
      {floatingIcons.map((item, idx) => (
        <div
          key={idx}
          className={`floating-icon float${item.float}`}
          style={item.style}
        >
          {item.icon}
        </div>
      ))}
      <div className="hero-box">
        <h1>
  Build Better <span><TypewriterEffect /></span>
</h1>
        <p>
          Build skills with courses. Join TAT to watch, play, learn, make, and discover.
          Explore our extensive library of expert-led courses for all levels.
        </p>
        <button>View Plans</button>
        <div className="hero-features">
        </div>
      </div>
    </div>

    <FeatureStrip />
    <CourseDetailSection />
    <Programming />
    </section>
  </>
  
);

export default CourseDetails;
