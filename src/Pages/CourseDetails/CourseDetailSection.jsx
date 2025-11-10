import React, { useState, useMemo } from "react";
import {
  FaBullhorn,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import "./CourseDetailSection.css";

import Java from '../../assets/Images/javaFStack1.png';
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

const categoriesList = [
  "All Categories",
  "Design",
  "Javascript",
  "Web Development",
];

export default function CourseSection() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [query, setQuery] = useState("");
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  const filteredCourses = useMemo(() => {
    const q = query.trim().toLowerCase();
    return coursesData.filter((c) => {
      const inCategory =
        activeCategory === "All Categories" ||
        c.categories.includes(activeCategory);
      if (!inCategory) return false;
      if (!q) return true;
      const searchable = `${c.name} ${c.desc} ${c.categories.join(
        " "
      )}`.toLowerCase();
      return searchable.includes(q);
    });
  }, [activeCategory, query]);

  return (
    <section className="course-section" id="course">
      <div className="choose-header">
        <h2 className="title sub-title">The world’s top courses</h2>
        <p className="subtitle">
          Choose from thousands of online courses with new additions every
          month.
        </p>
      </div>

      <div className="top-bar">
        <div className="categories-row">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop Search */}
        <div className="search-wrapper desktop-only">
          <div className="search-input">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Mobile Search Toggle */}
        <button
          className="mobile-search-btn mobile-only"
          onClick={() => setShowSearchMobile(true)}
        >
          <FaSearch />
        </button>
      </div>

      {/* Mobile Search Bar */}
      {showSearchMobile && (
        <div className="mobile-search-bar mobile-only">
          <div className="search-input">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="close-icon"
              onClick={() => setShowSearchMobile(false)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      <div className="course-container">
        {filteredCourses.map((course) => (
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

        {filteredCourses.length === 0 && (
          <div className="no-results">
            No courses found for that search/category.
          </div>
        )}
      </div>

      <div className="more-row">
        <button className="more-btn">More →</button>
      </div>
    </section>
  );
}
