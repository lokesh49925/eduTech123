import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css"; // normal CSS file
import Testi from '../assets/Images/testi.png';

const testimonials = [
  {
    img: Testi,
    name: "Vaishnavi S",
    // company: "Grower.io",
    text: "“The platform’s live courses and mentors helped me master React faster than I expected. The community is awesome!”",
  },
  {
    img: Testi,
    name: "Rajesh K",
    // company: "DLDesign.co",
    text: "“I loved how interactive the lessons were. The projects really gave me hands-on experience for my career.”",
  },
  {
    img: Testi,
    name: "Sai Ganesh M",
    // company: "TechNova",
    text: "“Their ML and DL courses are top-notch. The flexible schedule made it easy to balance work and learning.”",
  },
  {
    img: Testi,
    name: "Monika R",
    // company: "Learnify",
    text: "“One of the best edutech platforms! Clear explanations, real-world projects, and great mentor support.”",
  },
];

const Choose = () => {
  return (
    <section className="testimonial-section">
        <div className="choose-header">
      <h4 className="testimonial-subtitle sub-title">Testimonial</h4>
      <h2 className="testimonial-title">What Our Students Say</h2>
        </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 1 },
          901: { slidesPerView: 2 },
          1440: { slidesPerView: 2 },
        }}
        className="testimonial-slider"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={item.img} alt={item.name} className="testimonial-img" />
              <div className="testimonial-content">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">{item.text}</p>
                <h4 className="testimonial-name">{item.name}</h4>
                <p className="testimonial-company">{item.company}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Choose;
