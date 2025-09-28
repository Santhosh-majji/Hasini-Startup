import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, 
  FiCheckCircle, FiArrowRight, FiGlobe,
  FiStar, FiUsers, FiAward
} from 'react-icons/fi';
import { validateForm, sanitizeInput } from '../../utils/formValidation';
import { submitContactForm } from '../../utils/api';
import Toast, { useToast } from '../ui/Toast';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setFormErrors] = useState({});
  const { toast, showToast, hideToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      showToast('Please fix the errors in the form', 'error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const sanitizedData = {
        ...formData,
        name: sanitizeInput(formData.name),
        message: sanitizeInput(formData.message)
      };
      
      await submitContactForm(sanitizedData);
      showToast('Thank you! We\'ll get back to you within 24 hours.', 'success');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        experience: '',
        message: ''
      });
    } catch (error) {
      showToast('Something went wrong. Please try again or contact us directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email Us",
      value: "hr@hasiniinfotech.com",
      description: "Get a response within 2 hours",
      color: "#4285F4"
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      value: "+91 9441105129",
      description: "Mon-Sat, 9AM-6PM",
      color: "#34A853"
    },
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      value: "Plot No: 1111, Mithilapuri Colony",
      description: "Visakhapatnam, Andhra Pradesh",
      color: "#EA4335"
    },
    {
      icon: <FiGlobe />,
      title: "Online Learning",
      value: "Available Worldwide",
      description: "Join from anywhere",
      color: "#FBBC04"
    }
  ];

  const courses = [
    "Full Stack Development",
    "Data Science & ML",
    "UI/UX Design",
    "Digital Marketing",
    "Cloud Computing",
    "Mobile App Development",
    "DevOps Engineering",
    "Cybersecurity"
  ];

  const experienceLevels = [
    "Complete Beginner",
    "Some Programming Knowledge",
    "1-2 Years Experience",
    "3+ Years Experience",
    "Career Change"
  ];

  return (
    <section className="contact-premium-section section-padding" ref={ref}>
      <div className="contact-premium-container">
        {/* Header */}
        <motion.div 
          className="contact-premium-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-badge">
            <FiSend className="badge-icon" />
            <span>Get In Touch</span>
          </div>
          
          <h2 className="contact-main-title">
            Ready to <span className="contact-highlight">Transform</span> Your Career?
          </h2>
          
          <p className="contact-description">
            Take the first step towards your dream career in tech. Our admissions team is here to guide you.
            <br />
            Get personalized course recommendations and career guidance.
          </p>
        </motion.div>

        <div className="contact-main-grid">
          {/* Contact Info Cards */}
          <motion.div 
            className="contact-info-section"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-info-header">
              <h3>Let's Connect</h3>
              <p>Multiple ways to reach us</p>
            </div>
            
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div 
                    className="info-icon"
                    style={{ background: `${info.color}20`, borderColor: `${info.color}40` }}
                  >
                    <span style={{ color: info.color }}>{info.icon}</span>
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p className="info-value">{info.value}</p>
                    <span className="info-description">{info.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div 
              className="trust-indicators"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="trust-item">
                <FiUsers />
                <span>Expert Mentors</span>
              </div>
              <div className="trust-item">
                <FiStar />
                <span>Quality Learning</span>
              </div>
              <div className="trust-item">
                <FiAward />
                <span>Industry Projects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Premium Form */}
          <motion.div 
            className="contact-form-section"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="form-premium-card">
              <div className="form-header">
                <h3>Start Your Journey Today</h3>
                <p>Fill out the form and get a personalized learning path within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="premium-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <div className={`input-premium-wrapper ${focusedField === 'name' ? 'focused' : ''}`}>
                      <FiUser className="input-icon" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <div className={`input-premium-wrapper ${focusedField === 'email' ? 'focused' : ''}`}>
                      <FiMail className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <div className={`input-premium-wrapper ${focusedField === 'phone' ? 'focused' : ''}`}>
                      <FiPhone className="input-icon" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Interested Course *</label>
                    <div className={`input-premium-wrapper ${focusedField === 'course' ? 'focused' : ''}`}>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('course')}
                        onBlur={() => setFocusedField(null)}
                        required
                      >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course.toLowerCase().replace(/\s+/g, '-')}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Experience Level</label>
                  <div className={`input-premium-wrapper ${focusedField === 'experience' ? 'focused' : ''}`}>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('experience')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="">Select your experience level</option>
                      {experienceLevels.map((level, index) => (
                        <option key={index} value={level.toLowerCase().replace(/\s+/g, '-')}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Message (Optional)</label>
                  <div className={`input-premium-wrapper ${focusedField === 'message' ? 'focused' : ''}`}>
                    <FiMessageSquare className="input-icon" />
                    <textarea
                      name="message"
                      placeholder="Tell us about your goals, background, or any specific questions..."
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                <motion.button 
                  type="submit" 
                  className={`submit-premium-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Course Details</span>
                      <FiArrowRight />
                    </>
                  )}
                </motion.button>

                <div className="form-footer">
                  <div className="security-note">
                    <FiCheckCircle />
                    <span>Your information is secure and will never be shared</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="map-premium-section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="map-header">
            <h3>Visit Our Campus</h3>
            <p>Experience our state-of-the-art learning environment</p>
          </div>
          
          <div className="map-premium-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.2!2d83.3!3d17.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQyJzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hasini Info Tech Location"
            />
          </div>
        </motion.div>
      </div>
      
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </section>
  );
};

export default Contact;