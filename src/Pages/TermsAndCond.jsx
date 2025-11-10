import React, { useState } from "react";
import "./TermsAndCond.css";
import Terms from "../assets/Images/terms.jpg";

const TermsAndCond = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleNavigation = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const termsList = [
    { id: "acceptance", title: "Acceptance of Terms", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828673.png" },
    { id: "user", title: "User Accounts", icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png" },
    { id: "use", title: "Use of Services", icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png" },
    { id: "ip", title: "Intellectual Property", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png" },
    { id: "payment", title: "Payments & Subscriptions", icon: "https://cdn-icons-png.flaticon.com/512/633/633611.png" },
    { id: "termination", title: "Termination", icon: "https://cdn-icons-png.flaticon.com/512/463/463612.png" },
    { id: "disclaimer", title: "Disclaimers", icon: "https://cdn-icons-png.flaticon.com/512/471/471664.png" },
    { id: "liability", title: "Limitation of Liability", icon: "https://cdn-icons-png.flaticon.com/512/942/942799.png" },
    { id: "changes", title: "Changes to Terms", icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png" },
    { id: "contact", title: "Contact Us", icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png" },
  ];

  const content = {
    acceptance:
      "By accessing or using this platform, you acknowledge that you have read, understood, and agreed to comply with these Terms and Conditions. These terms constitute a legally binding agreement between you and our organization. If you do not agree to these terms, you must refrain from using our services immediately. Continued access or usage following any updates constitutes your acceptance of the revised terms.",
    user:
      "To access certain features, users may be required to create an account by providing accurate, current, and complete information. You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. The organization reserves the right to suspend or terminate accounts found to contain false information or involved in unauthorized activities.",
    use:
      "Our services are intended solely for lawful purposes and in accordance with these Terms and Conditions. You agree not to misuse, disrupt, or exploit the platform in any manner that could damage its integrity or performance. Prohibited actions include unauthorized data access, reverse engineering, or the distribution of harmful or misleading content. The organization reserves the right to monitor usage and enforce compliance to maintain service quality.",
    ip:
      "All content, trademarks, designs, graphics, and software featured on this platform are the exclusive intellectual property of the organization or its licensors. Users are not permitted to copy, distribute, modify, or create derivative works from any materials without prior written consent. Unauthorized use of our intellectual property will result in immediate termination of access and may lead to legal action.",
    payment:
      "Certain features or services may require payment or a subscription plan. By completing a transaction, you authorize us to charge the applicable fees using your provided payment method. All fees are non-refundable unless otherwise stated under our refund policy. Users are responsible for ensuring valid payment details and timely renewals to avoid service interruptions.",
    termination:
      "We reserve the right to suspend or terminate access to our services at any time, with or without prior notice, if we believe you have violated these Terms and Conditions or engaged in conduct harmful to our platform or users. Upon termination, your rights to use the services will immediately cease, and any obligations relating to confidentiality, payments, and intellectual property will remain in effect.",
    disclaimer:
      "All materials and services provided on this platform are offered on an 'as-is' and 'as-available' basis, without warranties of any kind, either express or implied. The organization makes no guarantees regarding uninterrupted access, accuracy, or reliability of the content. Users assume full responsibility for their use of the platform and any outcomes arising therefrom.",
    liability:
      "To the fullest extent permitted by applicable law, the organization shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our platform or services. This includes, but is not limited to, loss of data, profits, goodwill, or business opportunities. In any case, our total liability shall not exceed the amount paid by you, if any, for the use of the services.",
    changes:
      "The organization reserves the right to amend, modify, or replace these Terms and Conditions at any time without prior notice. Updates will be posted on this page, and it is your responsibility to review the terms periodically. Continued use of the platform after changes are published constitutes acceptance of the revised terms.",
    contact:
      "For any inquiries, feedback, or concerns regarding these Terms and Conditions, please contact our support team at trulyaim.in@gmail.com. We are committed to addressing your questions promptly and ensuring a transparent and reliable user experience.",
  };

  return (
    <div className="terms-container">
      {/* ===== Banner Section ===== */}
      <section className="banner">
        <div className="banner-content">
          <h1>Terms & Conditions</h1>
          <h3>Your Learning, Our Responsibility</h3>
          <p>
            Explore our platform with confidence. These terms describe your
            rights, responsibilities, and our commitment to providing a safe,
            effective, and transparent learning experience.
          </p>
        </div>
        <img className="banner-img" src={Terms} alt="Banner Icon" />
      </section>

      {/* ===== Quick Navigation ===== */}
      <section className="quick-nav">
        <h2>Quick Navigation</h2>
        <div className="nav-buttons">
          {termsList.map((item) => (
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

      {/* ===== Terms Sections ===== */}
      <section className="terms-section">
        {termsList.map((term, index) => (
          <div key={term.id} id={term.id} className="term-card">
            <img src={term.icon} alt={term.title} />
            <h3>
              {index + 1}. {term.title}
            </h3>
            <p>{content[term.id]}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TermsAndCond;
