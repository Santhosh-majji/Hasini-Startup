import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  SiGoogle, SiAmazon, SiApple, SiNetflix, 
  SiSpotify, SiAdobe, SiTesla, SiUber, SiAirbnb, SiSlack,
  SiSamsung, SiIntel, SiNvidia, SiOracle, SiSalesforce,
  SiMongodb, SiReact, SiNodedotjs
} from 'react-icons/si';
import { FiTrendingUp, FiAward } from 'react-icons/fi';
import './Partners.css';

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const partners = [
    { name: 'Google', icon: <SiGoogle />, color: '#4285F4' },
    { name: 'Amazon', icon: <SiAmazon />, color: '#FF9900' },
    { name: 'Apple', icon: <SiApple />, color: '#000000' },
    { name: 'Netflix', icon: <SiNetflix />, color: '#E50914' },
    { name: 'Spotify', icon: <SiSpotify />, color: '#1DB954' },
    { name: 'Adobe', icon: <SiAdobe />, color: '#FF0000' },
    { name: 'Tesla', icon: <SiTesla />, color: '#CC0000' },
    { name: 'Uber', icon: <SiUber />, color: '#000000' },
    { name: 'Airbnb', icon: <SiAirbnb />, color: '#FF5A5F' },
    { name: 'Slack', icon: <SiSlack />, color: '#4A154B' },
    { name: 'Samsung', icon: <SiSamsung />, color: '#1428A0' },
    { name: 'Intel', icon: <SiIntel />, color: '#0071C5' },
    { name: 'NVIDIA', icon: <SiNvidia />, color: '#76B900' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Oracle', icon: <SiOracle />, color: '#F80000' },
    { name: 'Salesforce', icon: <SiSalesforce />, color: '#00A1E0' }
  ];

  return (
    <section className="partners-premium-section section-padding" ref={ref}>
      <div className="partners-premium-container">
        {/* Header */}
        <motion.div 
          className="partners-premium-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="partners-badge">
            <FiTrendingUp className="badge-icon" />
            <span>Industry Partners</span>
          </div>
          
          <h2 className="partners-main-title">
            Learn <span className="partners-highlight">Industry-Standard</span> Technologies
          </h2>
          
          <p className="partners-description">
            Master the same technologies used by the world's leading companies.
            <br />
            Build projects with tools trusted by millions of developers worldwide.
          </p>
        </motion.div>

        {/* Advanced Marquee */}
        <motion.div 
          className="partners-marquee-wrapper"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="marquee-container">
            <div className="marquee-track">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="partner-logo-card"
                  style={{ '--brand-color': partner.color }}
                >
                  <div className="partner-icon" style={{ color: partner.color }}>
                    {partner.icon}
                  </div>
                  <span className="partner-label">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Second Row - Reverse Direction */}
          <div className="marquee-container reverse">
            <div className="marquee-track">
              {[...partners.slice(9), ...partners.slice(9)].map((partner, index) => (
                <div
                  key={`${partner.name}-reverse-${index}`}
                  className="partner-logo-card"
                  style={{ '--brand-color': partner.color }}
                >
                  <div className="partner-icon" style={{ color: partner.color }}>
                    {partner.icon}
                  </div>
                  <span className="partner-label">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning Features */}
        <motion.div 
          className="partners-stats-section"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="stats-premium-grid">
            <div className="stat-premium-card">
              <div className="stat-icon">
                <SiReact />
              </div>
              <div className="stat-content">
                <h3>Modern</h3>
                <p>Frameworks</p>
              </div>
            </div>
            
            <div className="stat-premium-card">
              <div className="stat-icon">
                <SiNodedotjs />
              </div>
              <div className="stat-content">
                <h3>Full-Stack</h3>
                <p>Development</p>
              </div>
            </div>
            
            <div className="stat-premium-card">
              <div className="stat-icon">
                <FiAward />
              </div>
              <div className="stat-content">
                <h3>Industry</h3>
                <p>Best Practices</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Benefits */}
        <motion.div 
          className="trust-indicators"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="trust-item">
            <div className="trust-number">20+</div>
            <div className="trust-label">Technologies</div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <div className="trust-number">100+</div>
            <div className="trust-label">Practice Projects</div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <div className="trust-number">24/7</div>
            <div className="trust-label">Learning Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;