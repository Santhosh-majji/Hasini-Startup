import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  const [counters, setCounters] = useState({ courses: 0, projects: 0, hours: 0 });
  
  useEffect(() => {
    if (isInView) {
      const animateCounter = (target, key, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCounters(prev => ({ ...prev, [key]: target }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
          }
        }, 16);
      };
      
      setTimeout(() => animateCounter(15, 'courses'), 500);
      setTimeout(() => animateCounter(200, 'projects'), 700);
      setTimeout(() => animateCounter(500, 'hours'), 900);
    }
  }, [isInView]);

  const values = [
    {
      icon: <FiUsers />,
      title: "Student-Centric Approach",
      description: "Every decision we make puts our students first. From curriculum design to career support, your success is our priority."
    },
    {
      icon: <FiTrendingUp />,
      title: "Industry-Relevant Learning",
      description: "We stay ahead of tech trends to ensure you learn the most in-demand skills that employers are actively seeking."
    },
    {
      icon: <FiAward />,
      title: "Excellence in Education",
      description: "Our commitment to quality education means you get the best learning experience with proven results."
    }
  ];

  return (
    <section className="about-modern-section section-padding" ref={ref}>
      <div className="about-container">
        {/* Header Section */}
        <motion.div 
          className="about-header-section"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-badge">
            <div className="badge-dot"></div>
            <span>About Us</span>
          </div>
          
          <h2 className="about-main-title">
            What We <span className="about-highlight">Stand For</span>
          </h2>
          
          <p className="about-main-description">
            We're on a mission to democratize tech education and make it accessible to everyone.
            <br />
            Our approach combines cutting-edge curriculum with personalized mentorship.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="about-content-grid">
          {/* Left Content */}
          <motion.div 
            className="about-story-section"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="story-content">
              <h3 className="story-title">
                Transforming Students Into <span className="story-highlight">Tech Professionals</span>
              </h3>
              
              <div className="story-text">
                <p>
                  At <strong>Hasini Info Tech</strong>, we bridge the gap between academic learning and industry requirements. 
                  Our comprehensive programs are designed to take you from beginner to job-ready professional.
                </p>
                
                <p>
                  Founded by industry veterans, we understand what employers are looking for. Our hands-on 
                  approach combines theoretical knowledge with practical skills, ensuring our graduates 
                  are confident and competent in their new careers.
                </p>
              </div>
              
              <motion.a 
                href="/contact"
                className="story-cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Your Journey</span>
                <FiArrowRight />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="about-visual-section"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="visual-showcase">
              <div className="showcase-main-card">
                <div className="card-header">
                  <div className="card-title">Success Metrics</div>
                  <div className="card-status">Live</div>
                </div>
                
                <div className="metrics-grid">
                  <div className="metric-item">
                    <div className="metric-value">{counters.courses}+</div>
                    <div className="metric-label">Courses Available</div>
                    <div className="metric-bar">
                      <motion.div 
                        className="metric-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "85%" } : {}}
                        transition={{ duration: 1.5, delay: 1 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div className="metric-item">
                    <div className="metric-value">{counters.projects}+</div>
                    <div className="metric-label">Practice Projects</div>
                    <div className="metric-bar">
                      <motion.div 
                        className="metric-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "90%" } : {}}
                        transition={{ duration: 1.5, delay: 1.2 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div className="metric-item">
                    <div className="metric-value">{counters.hours}+</div>
                    <div className="metric-label">Learning Hours</div>
                    <div className="metric-bar">
                      <motion.div 
                        className="metric-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "95%" } : {}}
                        transition={{ duration: 1.5, delay: 1.4 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                className="floating-element element-1"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="element-icon">💻</div>
                <div className="element-text">Learn</div>
              </motion.div>
              
              <motion.div 
                className="floating-element element-2"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="element-icon">🚀</div>
                <div className="element-text">Build</div>
              </motion.div>
              
              <motion.div 
                className="floating-element element-3"
                animate={{ y: [-8, 12, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="element-icon">💼</div>
                <div className="element-text">Career</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="about-values-section"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="values-header">
            <h3 className="values-title">Our Core Values</h3>
            <p className="values-description">
              The principles that guide everything we do and shape our approach to education.
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;