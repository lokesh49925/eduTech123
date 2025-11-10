import React, { useState, useMemo } from "react";
import {
  FaBullhorn,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import "./Programming.css";

import Java from "../../assets/Images/javaFStack1.png";
import Python from "../../assets/Images/pythonFStack.png";
import MERN from "../../assets/Images/mernStack.png";
import DigitalMarketing from "../../assets/Images/digitalMark.png";
const coursesData = [
  {
    id: 1,
    name: "Java Full Stack",
    icon: Java,
    price: "₹299",
    desc: "Full Stack Development Essentials with Java",
    duration: "6 Weeks",
    level: "Beginner",
    students: 480,
    rating: 4.7,
    color: "#F89820",
    categories: ["Web Development", "All Categories"],
  },
  {
    id: 2,
    name: "Python Full Stack",
    icon: Python,
    price: "₹299",
    desc: "Full Stack Development Essentials with Python",
    duration: "6 Weeks",
    level: "Beginner",
    students: 500,
    rating: 4.6,
    color: "#306998",
    categories: ["Web Development", "All Categories"],
  },
  {
    id: 3,
    name: "MERN Stack",
    icon: MERN,
    price: "₹299",
    desc: "MERN (MongoDB, Express, React, Node) Full Stack",
    duration: "6 Weeks",
    level: "Intermediate",
    students: 460,
    rating: 4.8,
    color: "#61DAFB",
    categories: ["Javascript", "Web Development", "All Categories"],
  },
  {
    id: 4,
    name: "Digital Marketing",
    icon: DigitalMarketing,
    price: "₹299",
    desc: "Digital Marketing Essentials",
    duration: "4 Weeks",
    level: "Beginner",
    students: 450,
    rating: 4.5,
    color: "#E63946",
    categories: ["Design", "All Categories"],
  },
  {
    id: 5,
    name: "Digital Marketing",
    icon: DigitalMarketing,
    price: "₹299",
    desc: "Digital Marketing Essentials",
    duration: "4 Weeks",
    level: "Beginner",
    students: 450,
    rating: 4.5,
    color: "#E63946",
    categories: ["Design", "All Categories"],
    
  },
  {
    id: 6,
    name: "MERN Stack",
    icon: MERN,
    price: "₹299",
    desc: "MERN (MongoDB, Express, React, Node) Full Stack",
    duration: "6 Weeks",
    level: "Intermediate",
    students: 460,
    rating: 4.8,
    color: "#61DAFB",
    categories: ["Javascript", "Web Development", "All Categories"],
  },
  {
    id: 7,
    name: "Python Full Stack",
    icon: Python,
    price: "₹299",
    desc: "Full Stack Development Essentials with Python",
    duration: "6 Weeks",
    level: "Beginner",
    students: 500,
    rating: 4.6,
    color: "#306998",
    categories: ["Web Development", "All Categories"],
  },
  {
    id: 8,
    name: "Java Full Stack",
    icon: Java,
    price: "₹299",
    desc: "Full Stack Development Essentials with Java",
    duration: "6 Weeks",
    level: "Beginner",
    students: 480,
    rating: 4.7,
    color: "#F89820",
    categories: ["Web Development", "All Categories"],
  }
];



export default function Programming() {

 

  return (
    <section className="programming-section" id="programming-languages">
      <div className="programming-header">
        <h2 className="title sub-title">Programming Languages</h2>
      </div>

      

      <div className="course-container">
        {coursesData.map((course) => (
          <article className="course-card" key={course.id}>
            <div className="card-header">
              <div className="course-icon">
                {" "}
                <img
                  src={course.icon}
                  alt={`${course.name} icon`}
                  className="course-icon"
                 
                />
              </div>
              <div className="price-badge">{course.price}</div>
            </div>

            <div className="card-body">
              <h3 className="course-name">{course.name}</h3>
              <p className="course-desc">{course.desc}</p>
              <div className="card-meta">
                <span>🕓 {course.duration}</span>
                <span>🎓 {course.level}</span>
                <span>👥 {course.students}</span>
              </div>
              <div className="rating-row">
                <div className="stars1">⭐ {course.rating}/5</div>
              </div>
              
            </div>
          </article>
        ))}

        
      </div>

     
    </section>
  );
}
