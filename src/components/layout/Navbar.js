import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiGrid, FiBriefcase, FiMail } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/log.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', active: true, icon: FiHome },
    { name: 'About', href: '/under-development', active: false, icon: FiUser },
    { name: 'Services', href: '/under-development', active: false, icon: FiGrid },
    { name: 'Portfolio', href: '/under-development', active: false, icon: FiBriefcase },
    { name: 'Contact', href: '/contact', active: true, icon: FiMail }
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-left">
          <a href="/" className="nav-logo">
            <img src={logo} alt="Hasini InfoTech" className="logo-img" />
            <div className="brand-name">
              <span className="hasini">HASINI</span>
              <span className="infotech">InfoTech Pvt.Ltd</span>
            </div>
          </a>
        </div>

        <div className="nav-center">
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`nav-link ${
                  (item.href === '/' && location.pathname === '/') || 
                  (item.href === '/contact' && location.pathname === '/contact') 
                    ? 'active' 
                    : item.name === 'Home' || item.name === 'Contact' 
                      ? '' 
                      : 'disabled'
                }`}
                onClick={() => setIsOpen(false)}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="nav-icon" />
                <span>{item.name}</span>
                {item.name !== 'Home' && item.name !== 'Contact' && <span className="dev-badge">Soon</span>}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="nav-right">
          <motion.a 
            href="/contact"
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.a>

          <button 
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;