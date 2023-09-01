import React ,{ useRef }from 'react';
import Services from './Services';
import Contact from './Contact';
import './About-styles/bootstrap-grid.css'
import './About-styles/style.css'

import Hero from "../src/Image/hero.mp4";




function About() {

  const divRef = useRef();
  return (
    <section className="bg-main bg-color hero-section">
      <div className="container">
        <div className="row mb-5">
          <div className="d-flex flex-column align-items-start justify-content-center col-xl-6 col-lg-6 col-md-12 col-12 order-1 order-lg-0 text-md-start text-center">
            <h1 className="text-capitalize fw-bolder text-white">
              Empowering Healthy Choices with AQI
            </h1>
            <p className="mt-5 mb-5 para-width text-light-grey">
            Welcome to Air Quality - Your Trusted AQI Prediction Source

            </p>
            <div className="text-center w-100 text-md-start">

              <button className="btn btn-primary px-5 py-2" data-bs-offset="0,5" 
              data-bs-placement="top" 
              data-bs-title="Get Best Services" 
              data-bs-toggle="tooltip"
              onClick={() => {
               divRef.current.scrollIntoView({ behavior: "smooth" });
               }}>
                Contact Us
              </button>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-12 order-0 order-lg-1 hero-image--section">
            <div className="text-md-end text-center mb-5">
              <video autoPlay className="hero-video--section" loop muted>
                <source src={Hero} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1684208460">
        <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path className="shape-fill" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <Services/>
      <div ref={divRef}/>
      <Contact />
    </section>
  );
}

export default About;
