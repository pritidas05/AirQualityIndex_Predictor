import React from 'react';
import link from "../src/Image/link.gif";
import speaker from "../src/Image/speaker.gif";
import seo from "../src/Image/seo.gif";
import save from "../src/Image/save.png";
import './upload.css';

const Services = () => {
  return (
    <div>
      <section className="services-section">
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading">What We Offer</h2>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="container mt-5">
          <div className="row g-5">
            {/* Service 1 */}
            <div className="col-xxl-4 col-lg-4 col-md-12 col-12">
              <div className="card-box rounded-2 p-5 text-center">
                <img alt="Link Building" className="img-fluid" src={link} width="200px" />
                <h5 className="my-3 fw-normal">Real-Time AQI Data</h5>
                <p className="pe-3 mb-5">
                Our website delivers real-time AQI data collected from various monitoring stations across your region.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-xxl-4 col-lg-4 col-md-12 col-12">
              <div className="card-box rounded-2 p-5 text-center shadow">
                <img alt="Content Marketing" className="img-fluid" src={speaker} width="200px" />
                <h5 className="my-3 fw-normal">Predictive Analytics</h5>
                <p className="pe-3 mb-5">
                Our advanced algorithms analyze historical data, current conditions, and relevant factors to provide accurate AQI predictions for the upcoming hours or days.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-xxl-4 col-lg-4 col-md-12 col-12">
              <div className="card-box rounded-2 p-5 text-center">
                <img alt="On Page SEO" className="img-fluid" src={seo} width="200px" />
                <h5 className="my-3 fw-normal">Comparative Analysis</h5>
                <p className="pe-3 mb-5">
                Compare air quality data between different locations, helping you make informed decisions about travel and outdoor activities.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="more-info-section bg-color">
        <section className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 img-section">
              <figure>
                <img alt="Mobile Chat" className="img-fluid" width="400px" src={save} />
              </figure>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center align-items-star custom-padding-leftt">
              <h1 className="common-heading text-capitalize fw-bolder text-white">
                Go Green To Breathe Clean
              </h1>
              <p className="mt-3 mb-5 para-width text-light-grey">
              At Air Quality, we are dedicated to providing you with accurate and up-to-date information about the Air Quality Index (AQI) in your area. Our mission is to empower individuals, communities, and decision-makers with valuable insights to make informed choices for a healthier environment.
              We envision a world where everyone has easy access to real-time air quality data and predictive insights. By offering reliable AQI predictions, we aim to contribute to the well-being of people and the planet.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="common-section business-section " id="online_services">
        <div className="container text-center fw-bold common-title">
          <h2 className="common-heading">Our Team</h2>
          <p className="my-3 fw-normal">
          Our team consists of environmental experts, data scientists, and web developers passionate about improving air quality awareness. We are committed to maintaining the quality of our predictions and continuously enhancing our platform's capabilities.
          Our predictions are based on robust data analysis techniques, ensuring high accuracy and reliability. Our website is designed with user experience in mind. Navigating and accessing information is simple and intuitive. We believe in the power of informed communities. Our platform 
          encourages users to share local observations, contributing to a collaborative approach to air quality awareness.
          </p>
          <hr className="w-25 mx-auto" />
        </div>

        
      </section>
    </div>
  );
}

export default Services;
