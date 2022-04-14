import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Feel free to contact me at the information given below</p>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>
                  <b>
                    University of Central Florida
                    <br />
                    Department of Mathematics, College of Sciences
                  </b>
                  <br />
                  4393 Andromeda Loop N, Orlando, FL 32816
                </p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>awnon.bhowmik@ucf.edu</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 (917) 524-6720</p>
              </div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14012.016761821696!2d-81.2005611!3d28.5996511!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xecb9226da188179!2sUniversity%20of%20Central%20Florida%20Department%20of%20Mathematics!5e0!3m2!1sen!2sbd!4v1637663967952!5m2!1sen!2sbd"
                width="100%"
                height="290 px"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              id="contact-form"
              className="php-email-form"
              onsubmit="myFunction()"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="hidden" name="contact_number" />
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <br />
              <div className="text-center">
                <button type="submit" value="Send">
                  Send Message
                </button>
              </div>
              <br />
              <p id="demo"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
