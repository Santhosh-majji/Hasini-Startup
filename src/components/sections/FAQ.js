import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiPlus, FiMinus, FiHelpCircle } from 'react-icons/fi';
import './FAQ.css';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes Hasini Info Tech different from other institutes?",
      answer: "We focus on hands-on learning with real projects, industry mentors, and personalized career guidance. Our curriculum is constantly updated to match current industry demands."
    },
    {
      question: "Do I need prior programming experience to join?",
      answer: "No! Our programs are designed for all levels. We start from basics and gradually build up to advanced concepts. Complete beginners are welcome."
    },
    {
      question: "What kind of support do you provide during the course?",
      answer: "We provide 24/7 learning support, one-on-one mentoring sessions, doubt clearing sessions, and career guidance throughout your journey with us."
    },
    {
      question: "Are the courses available online or offline?",
      answer: "We offer both online and offline modes. You can choose what works best for you. Our online classes are interactive with live sessions and recorded materials."
    },
    {
      question: "What technologies and tools will I learn?",
      answer: "You'll learn industry-standard technologies like React, Node.js, Python, AWS, Docker, and many more depending on your chosen track. All tools used by top companies."
    },
    {
      question: "How long does it take to complete a program?",
      answer: "Program duration varies from 3-6 months depending on the course. We focus on intensive, practical learning to get you job-ready as quickly as possible."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding" ref={ref}>
      <div className="container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="faq-badge">
            <FiHelpCircle className="badge-icon" />
            <span>FAQ</span>
          </div>
          
          <h2 className="faq-title">
            Frequently Asked <span className="faq-highlight">Questions</span>
          </h2>
          
          <p className="faq-description">
            Got questions? We've got answers. Find everything you need to know about our programs.
          </p>
        </motion.div>

        <motion.div 
          className="faq-list"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <div className="faq-icon">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;