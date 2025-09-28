import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiPlay, FiStar } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" className="hero" ref={containerRef}>
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="mesh-gradient"></div>
        <div className="noise-overlay"></div>
      </div>
      
      <motion.div className="container" style={{ y, opacity }}>
        <div className="hero-layout">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="hero-announcement"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="announcement-content">
                <FiStar className="announcement-icon" />
                <span>Future-Focused Learning Platform</span>
                <div className="announcement-badge">New Batch Starting</div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Don't Just <span className="title-highlight">Learn</span> —
              <br /><span className="title-accent">Build, Create & Get Industry-Ready</span>
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Join a future-focused learning platform where you don't just learn — you build, create, and get industry-ready. Transform your passion into expertise with real projects, live mentorship, and career-focused training.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a 
                href="/contact"
                className="btn-primary"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Your Journey</span>
                <FiArrowRight className="btn-icon" />
              </motion.a>
              
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiPlay className="btn-icon" />
                <span>Watch Demo Classes</span>
              </motion.button>
            </motion.div>
            
            <motion.div
              className="hero-metrics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="metric">
                <div className="metric-value">50+</div>
                <div className="metric-label">Expert Mentors</div>
              </div>
              <div className="metric-divider"></div>
              <div className="metric">
                <div className="metric-value">100+</div>
                <div className="metric-label">Live Projects</div>
              </div>
              <div className="metric-divider"></div>
              <div className="metric">
                <div className="metric-value">24/7</div>
                <div className="metric-label">Learning Support</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="code-workspace">
              <div className="workspace-bg"></div>
              
              {/* Main Code Editor */}
              <motion.div 
                className="code-editor"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="editor-header">
                  <div className="editor-tabs">
                    <div className="tab active">App.jsx</div>
                    <div className="tab">styles.css</div>
                    <div className="tab">api.js</div>
                  </div>
                  <div className="editor-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                </div>
                <div className="editor-content">
                  <div className="code-line">
                    <span className="line-number">1</span>
                    <span className="code-text">
                      <span className="keyword">import</span> <span className="string">React</span> <span className="keyword">from</span> <span className="string">'react'</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">2</span>
                    <span className="code-text">
                      <span className="keyword">import</span> <span className="string">'./App.css'</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">3</span>
                    <span className="code-text"></span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">4</span>
                    <span className="code-text">
                      <span className="keyword">function</span> <span className="function">App</span><span className="bracket">()</span> <span className="bracket">{'{'}</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">5</span>
                    <span className="code-text">
                      <span style={{marginLeft: '16px'}}><span className="keyword">return</span> <span className="bracket">(</span></span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">6</span>
                    <span className="code-text">
                      <span style={{marginLeft: '32px'}}><span className="tag">{'<'}div</span> <span className="attribute">className</span>=<span className="string">"app"</span><span className="tag">{'>'}</span></span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">7</span>
                    <span className="code-text">
                      <span style={{marginLeft: '48px'}}><span className="tag">{'<'}h1{'>'}</span><span className="text">Welcome to Hasini</span><span className="tag">{'<'}/h1{'>'}</span></span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">8</span>
                    <span className="code-text">
                      <span style={{marginLeft: '32px'}}><span className="tag">{'<'}/div{'>'}</span></span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">9</span>
                    <span className="code-text">
                      <span style={{marginLeft: '16px'}}><span className="bracket">)</span></span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">10</span>
                    <span className="code-text">
                      <span className="bracket">{'}'}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Tech Icons */}
              <motion.div 
                className="tech-stack-orbit"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="tech-icon tech-react">⚛️</div>
                <div className="tech-icon tech-node">🟢</div>
                <div className="tech-icon tech-python">🐍</div>
                <div className="tech-icon tech-js">🟨</div>
              </motion.div>
              
              {/* Learning Progress Cards */}
              <motion.div 
                className="progress-card card-1"
                animate={{ y: [-12, 12, -12], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="card-header">
                  <span className="card-icon">📚</span>
                  <span className="card-title">Learning</span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2, delay: 1.5 }}
                  ></motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="progress-card card-2"
                animate={{ y: [15, -15, 15], rotate: [0, -2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="card-header">
                  <span className="card-icon">🚀</span>
                  <span className="card-title">Building</span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: "72%" }}
                    transition={{ duration: 2, delay: 1.7 }}
                  ></motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="progress-card card-3"
                animate={{ y: [-10, 18, -10], rotate: [0, 1, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="card-header">
                  <span className="card-icon">💼</span>
                  <span className="card-title">Career Ready</span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: "95%" }}
                    transition={{ duration: 2, delay: 1.9 }}
                  ></motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;