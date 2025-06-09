import React, { useRef, useEffect, useState } from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: ''
  });
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 1, num2: 1 });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Add intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Generate random captcha numbers on mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaQuestion({ num1, num2 });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear the error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    const captchaAnswer = (captchaQuestion.num1 + captchaQuestion.num2).toString();
    if (!formData.captcha.trim()) {
      errors.captcha = 'Please solve the captcha';
    } else if (formData.captcha !== captchaAnswer) {
      errors.captcha = 'Incorrect captcha answer';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        captcha: ''
      });
      setSubmitSuccess(true);
      generateCaptcha();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" ref={sectionRef} id="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title animate-fade-in">Contact Us</h2>
          <div className="section-underline"></div>
          <h3 className="contact-subtitle animate-fade-in delay-100">Let's Talk About Your Idea</h3>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-fade-in delay-200">
            <div className="contact-info-card">
              <h4 className="contact-info-title">Office Location</h4>
              <div className="contact-info-item">
                <div className="contact-icon location-icon"></div>
                <p>A-64 Residential Colony,<br />Sitapura Industrial Area, Jaipur</p>
              </div>
            </div>
            
            <div className="contact-info-card">
              <h4 className="contact-info-title">Phone</h4>
              <div className="contact-info-item">
                <div className="contact-icon phone-icon"></div>
                <p>+91-141-2988234</p>
              </div>
            </div>
            
            <div className="contact-info-card">
              <h4 className="contact-info-title">Email</h4>
              <div className="contact-info-item">
                <div className="contact-icon email-icon"></div>
                <div>
                  <p>siird@siird.org</p>
                  <p>info@siird.org</p>
                </div>
              </div>
            </div>
            
            <div className="contact-info-card">
              <h4 className="contact-info-title">Working Hours</h4>
              <div className="contact-info-item">
                <div className="contact-icon time-icon"></div>
                <div>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper animate-fade-in delay-300">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <div className="error-message">{formErrors.name}</div>}
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <div className="error-message">{formErrors.email}</div>}
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? 'error' : ''}
                ></textarea>
                {formErrors.message && <div className="error-message">{formErrors.message}</div>}
              </div>
              
              <div className="form-group captcha-group">
                <label htmlFor="captcha">
                  Captcha* What's {captchaQuestion.num1} + {captchaQuestion.num2} =
                </label>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  placeholder="Enter Captcha Value"
                  value={formData.captcha}
                  onChange={handleChange}
                  className={formErrors.captcha ? 'error' : ''}
                />
                {formErrors.captcha && <div className="error-message">{formErrors.captcha}</div>}
              </div>
              
              <div className="form-group">
                <button 
                  type="submit" 
                  className="send-message-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>
              
              {submitSuccess && (
                <div className="success-message">
                  Your message has been sent successfully! We will get back to you soon.
                </div>
              )}
              
              {submitError && (
                <div className="error-message form-error">
                  {submitError}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      <div className="map-container animate-fade-in delay-400">
        <iframe 
          title="IIRD Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.227637888287!2d75.84097771503937!3d26.801784083178387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9a066b0941f%3A0xa7a04eb2b97c5f32!2sSitapura%20Industrial%20Area%2C%20Sitapura%2C%20Jaipur%2C%20Rajasthan%20302022!5e0!3m2!1sen!2sin!4v1625137645931!5m2!1sen!2sin"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection; 