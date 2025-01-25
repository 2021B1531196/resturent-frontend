import React from "react";
import "./Contac.css";
import { MapPin, Phone, Mail, Clock } from "react-feather";

const Contac = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div >
          <h2>Any question or remarks? Just write us a message</h2>
          <div className="divider"></div>
        </div>
        <div className="content-grid">
        
          <div className="contact-info">
            <h3>Find Us</h3>
            <div className="info-list">
              <div className="info-item">
                <MapPin className="icon" />
                <div>
                  <h4>Location</h4>
                  <p>New Delhi</p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="icon" />
                <div>
                  <h4>Phone</h4>
                  <p>(+91) 1234567201</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="icon" />
                <div>
                  <h4>Email</h4>
                  <p>info@restaurantname.com</p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="icon" />
                <div>
                  <h4>Hours</h4>
                  <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Your message..."></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contac;
