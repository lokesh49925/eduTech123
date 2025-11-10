import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Top Section */}
      {/* <section className="contact-contact-hero contact-container-fluid contact-my-5" id="contact">
        <div className="contact-row contact-align-items-center contact-justify-content-between contact-p-4 contact-content-block"> */}
          {/* Left Side */}
          {/* <div className="contact-col-md-6 contact-mb-4 contact-mb-md-0 contact-contact-text">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="contact-btn-light-custom fw-semibold px-4 py-2">
              Start Learning
            </button>
          </div> */}

          {/* Right Side */}
          {/* <div className="contact-col-md-6 contact-text-center contact-img-block">
            <img
              src="/Images/rightimage.png"
              alt="Contact Illustration"
              className="contact-img-fluid-custom"
            />
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="contact-contact-form-section contact-pt-5 contact-pb-3">
        <div className="contact-ball contact-ball1"></div>
        <div className="contact-ball contact-ball2"></div>
        <div className="contact-ball contact-ball3"></div>
        <div className="contact-ball contact-ball4"></div>
        <div className="contact-ball contact-ball5"></div>
        <div className="contact-container">
          <h2 className="contact-text-center contact-mb-3">Contact Us</h2>
          <p className="contact-text-center contact-text-light contact-mb-3 contact-subtitle">
            Any question or remarks? Just write us a message!
          </p>

          <div className="contact-contact-box contact-row">
            {/* Left side */}
            <div className="contact-col-lg-5 contact-col-md-12 contact-col-12 contact-contact-info contact-p-4">
              <h4>Contact Information</h4>
              <p className="contact-mt-3 contact-mail">
                <i className="bi bi-envelope"></i> trulyaim.in@gmail.<br/>
                

                  +91 7989659195

              </p>
              <p>
                <i className="bi bi-geo-alt"></i> 02_419/33 Near Sreepeetam,
              Bhirdhavanam apartment
              Bapandora Colony, Kakinada.
              Andhra Pradesh, India.
              </p>
              <div className="contact-social-icons contact-mt-4">
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            {/* Right side */}
            <div className="contact-col-lg-6 contact-col-md-12 contact-col-12 contact-contact-form contact-p-4">
              <form onSubmit={handleSubmit}>
                <div className="contact-row">
                  <div className="contact-col-md-6 contact-mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="contact-form-control-custom"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-col-md-6 contact-mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="contact-form-control-custom"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-col-md-6 contact-mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="contact-form-control-custom"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-col-md-6 contact-mb-3">
                    <label>Phone Number</label>
                    <div className="contact-input-group-custom">
                      <span className="contact-input-group-text-custom">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        className="contact-form-control-custom"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="contact-mb-3">
                  <label>Select Subject?</label>
                  <div className="contact-subject-options contact-d-flex contact-flex-wrap contact-gap-3 contact-mt-2">
                    {["General Inquiry", "Brand Identity", "UI/UX", "Packaging Design"].map(
                      (subject, i) => (
                        <label key={i} className="contact-subject-option">
                          <input
                            type="radio"
                            name="subject"
                            value={subject}
                            checked={formData.subject === subject}
                            onChange={handleChange}
                            required
                          />{" "}
                          {subject}
                        </label>
                      )
                    )}
                  </div>
                </div>

                <div className="contact-mb-3">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className="contact-form-control-custom"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="contact-text-end">
                  <button type="submit" className="contact-btn-primary-custom contact-send-btn">
                    Send Message
                  </button>
                </div>
                <div className="contact-send-img"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;