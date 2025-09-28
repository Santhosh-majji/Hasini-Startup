import React from 'react';
import { motion } from 'framer-motion';
import { FiTool, FiClock, FiArrowLeft } from 'react-icons/fi';
import './UnderDevelopment.css';

const UnderDevelopment = () => {
  return (
    <section className="under-development">
      <div className="container">
        <motion.div 
          className="dev-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="dev-icon"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <FiTool />
          </motion.div>

          <h1 className="dev-title">
            Page Under <span className="gradient-text">Development</span>
          </h1>

          <p className="dev-subtitle">
            We're working hard to bring you something amazing! This page is currently 
            being crafted with the latest technologies and premium design.
          </p>

          <div className="dev-features">
            <motion.div 
              className="dev-feature glass-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FiClock />
              <span>Coming Soon</span>
            </motion.div>

            <motion.div 
              className="dev-feature glass-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FiTool />
              <span>Premium Quality</span>
            </motion.div>
          </div>

          <motion.div 
            className="dev-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="/" className="gradient-btn">
              <FiArrowLeft /> Back to Home
            </a>
            <a href="/contact" className="glass-btn">
              Contact Us
            </a>
          </motion.div>

          <div className="dev-progress">
            <div className="progress-bar">
              <motion.div 
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, delay: 1 }}
              />
            </div>
            <p>Development Progress: 75%</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnderDevelopment;