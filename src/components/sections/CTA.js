import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight, FiPlay, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import './CTA.css';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section className="cta-section section-padding" ref={ref}>
      <div className="container">
        <div className="cta-grid">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">
              Start Your <span className="gradient-text">Learning Journey</span>
            </h2>
            <p className="cta-subtitle">
              Build real-world projects and gain industry-relevant skills with our comprehensive programs. 
              Learn from expert mentors and join our growing community of learners.
            </p>
            
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="primary-btn">
                Start Your Journey <FiArrowRight />
              </button>
              <button className="secondary-btn">
                <FiPlay /> Watch Demo Classes
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="cta-features"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="feature-item">
              <div className="feature-icon">
                <FiUsers />
              </div>
              <div className="feature-text">
                <h4>50+</h4>
                <p>Expert Mentors</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <FiTrendingUp />
              </div>
              <div className="feature-text">
                <h4>100+</h4>
                <p>Live Projects</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <FiAward />
              </div>
              <div className="feature-text">
                <h4>24/7</h4>
                <p>Learning Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;