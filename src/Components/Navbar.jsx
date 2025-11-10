import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          {/* <img src={logo} alt="TAT EDTech Logo" /> */}
          <a href="/">
          <h2>TAT EDTech</h2>
          </a>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="aboutus">About Us</a>

          <div
            className={`dropdown ${dropdownOpen ? "open" : ""}`}
            ref={dropdownRef}
          >
            <button
              className="dropbtn"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen((s) => !s);
              }}
            >
              Our Courses <span className="arrow">▼</span>
            </button>
            <div className="dropdown-content">
              <Link
                to="/java-full-stack"
                onClick={() => {
                  setIsOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Java FullStack
              </Link>
              <Link
                to="/python-full-stack"
                onClick={() => {
                  setIsOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Python FullStack
              </Link>
              <Link
                to="/mern-stack"
                onClick={() => {
                  setIsOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Mern Stack
              </Link>
              <Link
                to="/digital-marketing"
                onClick={() => {
                  setIsOpen(false);
                  setDropdownOpen(false);
                }}
              >
                Digital Marketing
              </Link>
            </div>
          </div>

          <a href="/course-details">Programs</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
