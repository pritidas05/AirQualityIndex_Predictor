import React from 'react';
import stu1 from '../src/Image/stu1.png'
import stu2 from '../src/Image/stu2.png'
import stu3 from '../src/Image/stu3.png'
import stu4 from '../src/Image/stu4.png'

const Contact = () => {
  return (
    <section className="common-section mb-5 pt-5 bg-color">
      <div className="container text-center common-title">
        <h2 className="common-heading text-white">Contact Us</h2>
        <p className="mt-3 mb-5 para-width text-light-grey">
        Got questions, suggestions, or feedback? We'd love to hear from you. Feel free to contact us anytime.
        <br />Thank you for choosing Air Quality as your go-to source for AQI predictions and information. Together, we can make a positive impact on the air we breathe.
        </p>
        <hr className="w-25 mx-auto"/>
      </div>

      <div className="container">
        <div className="carousel slide" data-bs-ride="carousel" id="testimonialCarousel">
          <div className="carousel-indicators">
            <button aria-current="true" aria-label="Slide 1" className="active" data-bs-slide-to="0"
                    data-bs-target="#testimonialCarousel" type="button"></button>
            <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#testimonialCarousel"
                    type="button"></button>
            <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#testimonialCarousel"
                    type="button"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row g-4">
                <div className="col-xxl-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3" style={{ width: '18rem',height: '30rem' }}>
                      <img alt="Client 1" className="card-img-top"
                           src={stu1}/>
                      <div className="card-body text-center">
                        <p className="card-title mb-3">Sneha Manna</p>
                        <p className="card-text">Email: snehamanna788@gmail.com <br /> Contact: 7044476788</p>
                        <div className=" mt-3 d-flex justify-content-center">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* More carousel items */}
                
                <div className="col-xxl-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3" style={{ width: '18rem',height: '30rem'  }}>
                      <img alt="Client 2" className="card-img-top" src={stu2}/>
                      <div className="card-body text-center">
                        <p className="card-title mb-3">Sagnik Ghosh</p>
                        <p className="card-text">Email: sagnikghosh1712@gmail.com <br /> Contact: 7846912448</p>
                        <div className=" mt-3 d-flex justify-content-center">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3" style={{ width: '18rem',height: '30rem' }}>
                      <img alt="Client 2" className="card-img-top" src={stu3}/>
                      <div className="card-body text-center">
                        <p className="card-title mb-3">Priti Priya Das</p>
                        <p className="card-text">Email: pritipriyadas05@gmail.com <br /> Contact: 7381785195</p>
                        <div className=" mt-3 d-flex justify-content-center">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-3" style={{ width: '18rem' ,height: '30rem'}}>
                      <img alt="Client 2" className="card-img-top" src={stu4}/>
                      <div className="card-body text-center">
                        <p className="card-title mb-3">Nishitha Sahoo</p>
                        <p className="card-text">Email: sahoonishitha@gmail.com <br /> Contact: 9438707202</p>
                        <div className=" mt-3 d-flex justify-content-center">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Additional carousel items */}
            
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
