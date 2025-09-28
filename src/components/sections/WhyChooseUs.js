import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiUsers, FiBriefcase, FiTrendingUp, FiTarget, FiZap } from 'react-icons/fi';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const reasons = [
    {
      icon: <FiCode />,
      title: "Learn by Building",
      description: "No boring theory! Build 15+ real projects from day one. Every concept is taught through hands-on coding.",
      highlight: "15+ Projects",
      color: "#FFC107"
    },
    {
      icon: <FiUsers />,
      title: "Industry Mentors",
      description: "Learn directly from professionals working at Google, Microsoft, and top startups. Get insider knowledge.",
      highlight: "Expert Guidance",
      color: "#2196F3"
    },
    {
      icon: <FiBriefcase />,
      title: "Job-Ready Skills",
      description: "Master the exact tech stack used by companies. From React to AWS - learn what employers actually want.",
      highlight: "Industry Stack",
      color: "#FF9800"
    },
    {
      icon: <FiTrendingUp />,
      title: "Career Guidance",
      description: "Resume building, interview prep, and career counseling. We guide you towards your dream career path.",
      highlight: "Career Support",
      color: "#4CAF50"
    },
    {
      icon: <FiTarget />,
      title: "Personalized Path",
      description: "Choose your specialization - Frontend, Backend, Full Stack, or Mobile. Tailored learning for your goals.",
      highlight: "Your Choice",
      color: "#9C27B0"
    },
    {
      icon: <FiZap />,
      title: "Fast Track to Success",
      description: "6 months to transform from beginner to job-ready. Intensive, focused, and results-driven approach.",
      highlight: "6 Months",
      color: "#FF5722"
    }
  ];

  return (
    <section className="whychoose-section section-padding" ref={ref}>
      <div className="container">
        <motion.div 
          className="whychoose-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="whychoose-title">
            Why Students Choose <span className="whychoose-gradient-text">Hasini Info Tech</span>
          </h2>
          <p className="whychoose-subtitle">
            We don't just teach coding - we build careers. Here's what makes us different from other institutes.
          </p>
        </motion.div>

        <div className="whychoose-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="whychoose-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="whychoose-card-header">
                <div 
                  className="whychoose-icon"
                  style={{ backgroundColor: `${reason.color}20`, color: reason.color }}
                >
                  {reason.icon}
                </div>
                <div className="whychoose-highlight" style={{ color: reason.color }}>
                  {reason.highlight}
                </div>
              </div>
              <div className="whychoose-content">
                <h3 className="whychoose-card-title">{reason.title}</h3>
                <p className="whychoose-card-description">{reason.description}</p>
              </div>
              <div className="whychoose-card-number">0{index + 1}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="whychoose-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="whychoose-cta-content">
            <h3>Ready to Start Your Tech Journey?</h3>
            <p>Join our community of passionate learners and start building your future</p>
            <motion.a 
              href="/contact"
              className="whychoose-cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;