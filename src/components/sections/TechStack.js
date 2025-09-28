import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  FiArrowRight, FiTrendingUp, FiStar, FiHeart, 
  FiCode, FiGithub, FiExternalLink, FiPlay
} from 'react-icons/fi';
import './TechStack.css';

const StudentShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeProject, setActiveProject] = useState(0);

  const studentProjects = [
    {
      id: 1,
      title: 'EcoTrack - Sustainability App',
      student: 'Priya Sharma',
      duration: '3 months',
      description: 'A comprehensive app that helps users track their carbon footprint and suggests eco-friendly alternatives.',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=EcoTrack+App',
      tech: ['React Native', 'Node.js', 'MongoDB', 'AI/ML'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      stats: { users: '2.5K+', rating: '4.8', downloads: '10K+' },
      links: { github: '#', demo: '#' }
    },
    {
      id: 2,
      title: 'SmartFinance - Budget Tracker',
      student: 'Arjun Patel',
      duration: '4 months',
      description: 'An intelligent personal finance manager with AI-powered spending insights and investment recommendations.',
      image: 'https://via.placeholder.com/400x250/f093fb/ffffff?text=SmartFinance+App',
      tech: ['React', 'Python', 'PostgreSQL', 'Chart.js'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      stats: { users: '1.8K+', rating: '4.9', downloads: '8K+' },
      links: { github: '#', demo: '#' }
    },
    {
      id: 3,
      title: 'HealthHub - Telemedicine Platform',
      student: 'Sneha Reddy',
      duration: '5 months',
      description: 'A complete telemedicine solution connecting patients with doctors through video consultations and health monitoring.',
      image: 'https://via.placeholder.com/400x250/4facfe/ffffff?text=HealthHub+App',
      tech: ['Vue.js', 'Express', 'Socket.io', 'WebRTC'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      stats: { users: '3.2K+', rating: '4.7', downloads: '15K+' },
      links: { github: '#', demo: '#' }
    }
  ];

  const achievements = [
    { icon: <FiCode />, number: '150+', label: 'Projects Built' },
    { icon: <FiStar />, number: '4.9/5', label: 'Average Rating' },
    { icon: <FiTrendingUp />, number: '85%', label: 'Job Placement' },
    { icon: <FiHeart />, number: '25K+', label: 'App Downloads' }
  ];

  return (
    <section className="student-showcase-section section-padding" ref={ref}>
      <div className="showcase-container">
        {/* Header */}
        <motion.div 
          className="showcase-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="showcase-badge">
            <FiStar className="badge-icon" />
            <span>Student Showcase</span>
          </div>
          
          <h2 className="showcase-title">
            Amazing <span className="showcase-highlight">Student Projects</span>
          </h2>
          
          <p className="showcase-description">
            Discover incredible applications built by our students.
            <br />
            Real projects solving real-world problems with cutting-edge technology.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div 
          className="featured-project"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="project-showcase">
            <div className="project-image">
              <img src={studentProjects[activeProject].image} alt={studentProjects[activeProject].title} />
              <div className="play-overlay">
                <FiPlay />
              </div>
            </div>
            <div className="project-details">
              <div 
                className="project-gradient-bar"
                style={{ background: studentProjects[activeProject].gradient }}
              />
              <h3 className="project-title">{studentProjects[activeProject].title}</h3>
              <div className="project-meta">
                <span className="student-name">By {studentProjects[activeProject].student}</span>
                <span className="project-duration">{studentProjects[activeProject].duration}</span>
              </div>
              <p className="project-description">{studentProjects[activeProject].description}</p>
              <div className="project-tech">
                {studentProjects[activeProject].tech.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-stats">
                <div className="stat">
                  <span className="stat-number">{studentProjects[activeProject].stats.users}</span>
                  <span className="stat-label">Users</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{studentProjects[activeProject].stats.rating}</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{studentProjects[activeProject].stats.downloads}</span>
                  <span className="stat-label">Downloads</span>
                </div>
              </div>
              <div className="project-links">
                <a href={studentProjects[activeProject].links.github} className="project-link">
                  <FiGithub /> Code
                </a>
                <a href={studentProjects[activeProject].links.demo} className="project-link primary">
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Navigation */}
        <motion.div 
          className="project-navigation"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {studentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`nav-project ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div 
                className="nav-project-gradient"
                style={{ background: project.gradient }}
              />
              <div className="nav-project-info">
                <h4>{project.title}</h4>
                <span>{project.student}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div 
          className="achievements-section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* CTA */}
        <motion.div 
          className="showcase-cta-section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cta-content">
            <h3>Build Your Own Success Story</h3>
            <p>Join our students and create amazing projects that make a real impact</p>
            <motion.a 
              href="/contact"
              className="showcase-cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Building</span>
              <FiArrowRight />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentShowcase;