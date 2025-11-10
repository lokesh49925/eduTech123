import React from "react";
import Footer from "./Components/Footer.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import Choose from "./Components/Choose.jsx";
import Testimonial from "./Components/Testimonial.jsx";
import Cda from "./Components/Cda.jsx";
import StatsSection from "./Components/StatsSection.jsx";
import AboutSection from "./Components/About.jsx";
import Navbar from "./Components/Navbar.jsx";
import CourseSection from "./Components/CourseSection.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JavaCource from './Pages/Java_full_stack.jsx';
import DigitalMarketing from './Pages/Digital_marketing.jsx';
import MernStack from './Pages/Mern_full_stack.jsx';
import PythonCourse from './Pages/Python_full_stack.jsx';
import CourseDetails from "./Pages/CourseDetails/CourseDetails.jsx";
import Contact from "./Pages/Contact.jsx";
import Aboutus from "./Pages/Aboutus.jsx";
import TermsAndCond from "./Pages/TermsAndCond.jsx";
import PrivacyPolicy from "./Pages/PrivacyAndPolicy.jsx";



function Home() {
  return (
    <div>
      <>
      <HeroSection />
      <StatsSection />
      <CourseSection />
      <Choose />
      <AboutSection />
      <Testimonial />
      <Cda />
      </>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/java-full-stack" element={<JavaCource />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/mern-stack" element={<MernStack />} />
        <Route path="/python-full-stack" element={<PythonCourse />} />
        <Route path ='/course' element={<CourseSection/>}/>
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path='/terms' element={<TermsAndCond />}/>
        <Route path="/privacy" element={<PrivacyPolicy />}/>
      </Routes>
      <Footer />
    </BrowserRouter>

  );
};

export default App;
