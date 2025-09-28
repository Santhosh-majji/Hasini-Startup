import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiUserPlus, FiBookOpen, FiCode, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import './Process.css';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const steps = [
    {
      step: "01",
      title: "Enroll",
      description: "Join our program and get access to all courses",
      details: "Complete registration, choose your track, and get started with your learning journey.",
      icon: <FiUserPlus />
    },
    {
      step: "02", 
      title: "Learn",
      description: "Study with expert-led courses and materials",
      details: "Access video tutorials, live sessions, and comprehensive study materials.",
      icon: <FiBookOpen />
    },
    {
      step: "03",
      title: "Build",
      description: "Create real-world projects for your portfolio",
      details: "Work on industry-standard projects with mentor guidance and feedback.",
      icon: <FiCode />
    },
    {
      step: "04",
      title: "Get Ready",
      description: "Prepare for your career with industry skills",
      details: "Mock interviews, resume building, and career guidance to help you succeed.",
      icon: <FiTrendingUp />
    }
  ];

  return (
    <section className="process section-padding" ref={ref}>
      <div className="container">
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="process-title">
            Your Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="process-subtitle">
            Follow our proven 4-step process to transform your career
          </p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line">
            <motion.div 
              className="timeline-progress"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.3 }}
            >
              <div className="step-content">
                <div className="step-header">
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">{step.icon}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <p className="step-details">{step.details}</p>
                {index < steps.length - 1 && (
                  <div className="next-arrow">
                    <FiArrowRight />
                  </div>
                )}
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;