import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-social">
          <div className="logo">
            <h1>CIMA</h1>
          </div>
          <div className="social">
            <a href="https://instagram.com">
              <img src="https://tse2.mm.bing.net/th?id=OIP.XgT9d552B6R9C60Ul2yqkAHaHa&pid=Api&P=0&h=220" alt="Instagram" className="icon" />
            </a>
          </div>
        </div>

        <div className="operating-hours">
          <h4>OPERATING HOURS</h4>
          <p>Monday-Friday</p>
          <p>7:00 AM - 10:00 PM</p>
          <p>Saturday & Sunday</p>
          <p>8:00 AM - 5:00 PM</p>
        </div>

        <div className="contact-details">
          <h4>CONTACT DETAILS</h4>
          <p>Binghatti Crescent, JVC, Dubai, UAE</p>
          <p>+971 52 689 0628</p>
          <p><a href="mailto:admin@cimauae.com">admin@cimauae.com</a></p>
          <p><a href="mailto:management@cimauae.com">management@cimauae.com</a></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2023 CIMA | <a href="#">Privacy Policy</a> | <a href="#">Cancellation Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
