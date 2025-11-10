import React, { useState } from "react";
import "./PrivacyAndPolicy.css";
import Privacy from "../assets/Images/privacy.jpg";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleNavigation = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: "intro", title: "Introduction", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828673.png" },
    { id: "collect", title: "Information We Collect", icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png" },
    { id: "use", title: "How We Use Information", icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png" },
    { id: "security", title: "Data Protection & Security", icon: "https://cdn-icons-png.flaticon.com/512/942/942799.png" },
    { id: "cookies", title: "Cookies & Tracking", icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png" },
    { id: "thirdparty", title: "Third-Party Services", icon: "https://cdn-icons-png.flaticon.com/512/471/471664.png" },
    { id: "children", title: "Children’s Privacy", icon: "https://cdn-icons-png.flaticon.com/512/1041/1041385.png" },
    { id: "retention", title: "Data Retention", icon: "https://cdn-icons-png.flaticon.com/512/633/633611.png" },
    { id: "updates", title: "Policy Updates", icon: "https://cdn-icons-png.flaticon.com/512/463/463612.png" },
    { id: "contact", title: "Contact Information", icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png" },
  ];

  const content = {
    intro:
      "Welcome to our EdTech platform. Your privacy is extremely important to us. This Privacy Policy outlines how we collect, use, and protect your personal data to ensure a secure and trustworthy learning experience. By using our platform, you agree to the terms described in this policy.",
    collect:
      "We collect information such as your name, email, contact details, academic preferences, and usage activity to enhance your experience. Data may also include device information, browser type, IP address, and cookies for analytics purposes. All collected data is handled responsibly and securely.",
    use:
      "Your information helps us improve course recommendations, personalize content, process enrollments, and communicate important updates. We may also use your data for customer support, security verification, and platform improvement. We never sell or misuse your data for unauthorized purposes.",
    security:
      "We implement robust administrative, technical, and physical safeguards to protect your information. All sensitive data is encrypted during transmission, and user accounts are password protected. Regular audits are conducted to ensure compliance with modern data security standards.",
    cookies:
      "Our website uses cookies and similar technologies to remember your preferences, analyze user behavior, and deliver customized experiences. You can modify your browser settings to block cookies; however, doing so may affect certain features of the platform.",
    thirdparty:
      "We may partner with trusted third-party providers for services such as payment processing, analytics, and content hosting. These third parties only receive data necessary for their functions and are obligated to maintain its confidentiality and security.",
    children:
      "Protecting the privacy of minors is one of our top priorities. Our platform is designed for learners above 13 years of age. For users under this age, parental consent is required before registration or participation in any courses or services.",
    retention:
      "We retain your personal information only as long as necessary to fulfill the purposes described in this policy. Once data is no longer required, it is securely deleted or anonymized. You may also request deletion of your data at any time by contacting our support team.",
    updates:
      "We may revise this Privacy Policy periodically to reflect changes in our practices or legal requirements. All updates will be posted on this page, and the effective date will be updated accordingly. Continued use of the platform implies acceptance of these updates.",
    contact:
      "If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at trulyaim.in@gmail.com. Our support team is committed to providing clear and timely assistance regarding your privacy rights and data usage.",
  };

  return (
    <div className="privacy-container">
      {/* ===== Banner Section ===== */}
      <section className="banner">
        <div className="banner-content">
          <h1>Privacy Policy</h1>
          <h3>Protecting Your Data, Empowering Your Learning</h3>
          <p>
            At EduTech, we are committed to ensuring that your personal
            information remains private, secure, and transparent. Learn how we
            collect, use, and safeguard your data to provide a trusted learning
            environment.
          </p>
        </div>
        <img className="banner-img" src={Privacy} alt="Privacy Banner" />
      </section>

      {/* ===== Quick Navigation ===== */}
      <section className="quick-nav">
        <h2>Quick Navigation</h2>
        <div className="nav-buttons">
          {sections.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => handleNavigation(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </section>

      {/* ===== Policy Sections ===== */}
      <section className="privacy-section">
        {sections.map((section, index) => (
          <div key={section.id} id={section.id} className="policy-card">
            <img src={section.icon} alt={section.title} />
            <h3>
              {index + 1}. {section.title}
            </h3>
            <p>{content[section.id]}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PrivacyPolicy;
