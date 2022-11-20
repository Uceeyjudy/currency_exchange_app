import React from "react";
import { ContactInfoStyle } from "../../components/styles/Contact.styled";

const ContactInfo = () => {
  return (
    <ContactInfoStyle>
      <div className="contact-details">
        <h3>Contact Information</h3>
        <div>
          <img src="/assets/svg/location-icon.svg" alt="location icon" />
          <span>2, Hamilton Avenue, Silicon Valley</span>
        </div>

        <div>
          <img src="/assets/svg/call-icon.svg" alt="phone call icon" />
          <span>+62 528 124 5600</span>
        </div>

        <div>
          <img src="/assets/svg/message-icon.svg" alt="message icon" />
          <span>Contact@streetrates.com</span>
        </div>
      </div>

      <div className="social-media">
        <h3>Social Media</h3>
        <p>You can connect with us via social media</p>
        <div className="social-icons-container">
          <a href="/">
            <img src="/assets/svg/facebook-logo.svg" alt="facebook logo" />
          </a>

          <a href="/">
            <img src="/assets/svg/linkedIn-logo.svg" alt="linkedIn logo" />
          </a>

          <a href="/">
            <img src="/assets/svg/instagram-logo.svg" alt="Instagram logo" />
          </a>

          <a href="/">
            <img src="/assets/svg/twitter-logo.svg" alt="Twiter logo" />
          </a>
        </div>
      </div>
    </ContactInfoStyle>
  );
};

export default ContactInfo;
