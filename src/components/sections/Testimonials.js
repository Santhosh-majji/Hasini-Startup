import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiQuote } from 'react-icons/fi';
import './Testimonials.css';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Frontend Developer",
      company: "Tech Startup",
      image: "👩‍💻",
      rating: 5,
      text: "The hands-on approach at Hasini Info Tech transformed my understanding of web development. The mentors are incredibly supportive and the projects are industry-relevant."
    },
    {
      name: "Rahul Kumar",
      role: "Full Stack Developer", 
      company: "Software Company",
      image: "👨‍💻",
      rating: 5,
      text: "Best decision I made for my career! The curriculum is up-to-date and the learning environment is fantastic. Highly recommend to anyone serious about tech."
    },
    {
      name: "Anita Reddy",
      role: "UI/UX Designer",
      company: "Design Agency",
      image: "👩‍🎨",
      rating: 5,
      text: "The design program exceeded my expectations. From Figma to user research, everything was covered in detail. The portfolio I built helped me land my dream job."
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section section-padding" ref={ref}>
      <div className="container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="testimonials-badge">
            <FiStar className="badge-icon" />
            <span>Student Success</span>
          </div>
          
          <h2 className="testimonials-title">
            What Our <span className="testimonials-highlight">Students Say</span>
          </h2>
          
          <p className="testimonials-description">
            Real stories from students who transformed their careers with us
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-carousel"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="testimonial-card">
            <div className="quote-icon">
              <FiQuote />
            </div>
            
            <div className="testimonial-content">
              <div className="stars">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="star-filled" />
                ))}
              </div>
              
              <p className="testimonial-text">
                "{testimonials[activeIndex].text}"
              </p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[activeIndex].image}
                </div>
                <div className="author-info">
                  <h4>{testimonials[activeIndex].name}</h4>
                  <p>{testimonials[activeIndex].role} at {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button onClick={prevTestimonial} className="carousel-btn">
              <FiChevronLeft />
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="carousel-btn">
              <FiChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;