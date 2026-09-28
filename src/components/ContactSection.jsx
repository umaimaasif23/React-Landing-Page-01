import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap backend API ya Formspree integration kar sakte hain
    console.log('Form Submitted:', formData);
    setSubmitted(true);

    // Form reset after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Side: Contact Info & Details */}
        <div className="contact-info-side">
          <span className="contact-subtitle">GET IN TOUCH</span>
          <h2 className="contact-heading">Let's Talk About Your Food Cravings</h2>
          <p className="contact-desc">
            Have questions about our menu, catering services, or want to give feedback? Drop us a message and our team will get back to you in no time!
          </p>

          <div className="info-cards">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Visit Us</h4>
                <p>123 Food Street, Gourmet Avenue, Karachi</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <p>+92 (300) 1234567</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email Us</h4>
                <p>support@zestybites.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="contact-form-side">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>

            {submitted ? (
              <div className="success-message">
                🎉 Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="+92 3XX XXXXXXX"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="Write your message or query here..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;