import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';
import logo from '../../assets/images/log.png';
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <motion.div 
          className="logo-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="Hasini Info Tech" className="loading-logo" />
        </motion.div>
        
        <motion.div 
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>Hasini Info Tech</h2>
          <p>Transform Your Career in Tech</p>
        </motion.div>
        
        <motion.div 
          className="loading-spinner-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="loading-dots">
            <motion.div 
              className="dot"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.div 
              className="dot"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div 
              className="dot"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;