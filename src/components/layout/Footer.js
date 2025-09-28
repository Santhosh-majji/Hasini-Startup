import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="bg-pattern"></div>
        <div className="bg-gradient"></div>
      </div>
      
      <div className="container">
        <div className="footer-main">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="brand-header">
              <div className="logo-box">
                <img src={require('../../assets/images/log.png')} alt="Hasini Info Tech" className="footer-logo" />
              </div>
              <div className="brand-text">
                <h3>Hasini Info Tech</h3>
                <p>Educational Excellence</p>
              </div>
            </div>
            <p className="brand-desc">
              Transforming students into tech professionals through innovative education and hands-on training.
            </p>
            <div className="social-row">
              <a href="https://facebook.com/hasiniinfotech" className="social-item" aria-label="Follow us on Facebook" title="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com/hasiniinfotech" className="social-item" aria-label="Follow us on Instagram" title="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com/hasiniinfotech" className="social-item" aria-label="Follow us on Twitter" title="Twitter"><FaTwitter /></a>
              <a href="https://linkedin.com/company/hasini-info-tech" className="social-item" aria-label="Follow us on LinkedIn" title="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://youtube.com/@hasiniinfotech" className="social-item" aria-label="Subscribe to our YouTube channel" title="YouTube"><FaYoutube /></a>
            </div>
          </motion.div>

          <div className="footer-sections">
            <motion.div 
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>Programs</h4>
              <ul>
                <li><a href="/under-development">Full Stack Development</a></li>
                <li><a href="/under-development">Data Science</a></li>
                <li><a href="/under-development">Digital Marketing</a></li>
                <li><a href="/under-development">UI/UX Design</a></li>
                <li><a href="/under-development">Cloud Computing</a></li>
              </ul>
            </motion.div>

            <motion.div 
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Company</h4>
              <ul>
                <li><a href="/under-development">About Us</a></li>
                <li><a href="/under-development">Why Choose Us</a></li>
                <li><a href="/under-development">Success Stories</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/under-development">Careers</a></li>
              </ul>
            </motion.div>

            <motion.div 
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Connect</h4>
              <div className="contact-info">
                <div className="contact-row">
                  <HiLocationMarker className="footer-contact-icon" />
                  <span>Plot No: 1111, Mithilapuri Colony Visakhapatnam, Andhra Pradesh</span>
                </div>
                <div className="contact-row">
                  <HiPhone className="footer-contact-icon" />
                  <span>+91 9441105129</span>
                </div>
                <div className="contact-row">
                  <HiMail className="footer-contact-icon" />
                  <span>hr@hasiniinfotech.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bottom-divider"></div>
          <div className="bottom-row">
            <p>&copy; {currentYear} Hasini Info Tech. All rights reserved.</p>
            <div className="bottom-links">
              <a href="/under-development">Privacy</a>
              <a href="/under-development">Terms</a>
              <a href="/under-development">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;