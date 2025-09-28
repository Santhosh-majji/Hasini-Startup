import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [showMore, setShowMore] = useState(false);

  const programs = [
    // Development Programs
    {
      id: 1,
      title: "Full Stack Development",
      category: "development",
      duration: "6 months",
      level: "Beginner to Advanced",
      illustration: "💻",
      description: "Master both frontend and backend development with modern technologies",
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "TypeScript"]
    },
    {
      id: 2,
      title: "Mobile App Development",
      category: "development", 
      duration: "5 months",
      level: "Intermediate",
      illustration: "📱",
      description: "Build native and cross-platform mobile applications",
      skills: ["React Native", "Flutter", "iOS", "Android", "Dart", "Swift"]
    },
    {
      id: 3,
      title: "Frontend Development",
      category: "development",
      duration: "4 months",
      level: "Beginner",
      illustration: "🎨",
      description: "Create stunning user interfaces with modern frameworks",
      skills: ["React", "Vue.js", "Angular", "CSS3", "HTML5", "Sass"]
    },
    {
      id: 4,
      title: "Backend Development",
      category: "development",
      duration: "5 months",
      level: "Intermediate",
      illustration: "⚙️",
      description: "Build robust server-side applications and APIs",
      skills: ["Node.js", "Python", "Java", "PostgreSQL", "Redis", "GraphQL"]
    },
    // Design Programs
    {
      id: 5,
      title: "UI/UX Design",
      category: "design",
      duration: "4 months", 
      level: "Beginner",
      illustration: "🎯",
      description: "Create beautiful and user-friendly digital experiences",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing", "Design Systems"]
    },
    {
      id: 6,
      title: "Graphic Design",
      category: "design",
      duration: "3 months",
      level: "Beginner",
      illustration: "🖌️",
      description: "Master visual communication and brand design",
      skills: ["Photoshop", "Illustrator", "InDesign", "Branding", "Typography", "Color Theory"]
    },
    {
      id: 7,
      title: "Motion Graphics",
      category: "design",
      duration: "4 months",
      level: "Intermediate",
      illustration: "🎬",
      description: "Create engaging animations and motion designs",
      skills: ["After Effects", "Cinema 4D", "Lottie", "Animation", "Video Editing", "3D Modeling"]
    },
    {
      id: 8,
      title: "Web Design",
      category: "design",
      duration: "3 months",
      level: "Beginner",
      illustration: "🌐",
      description: "Design modern and responsive websites",
      skills: ["Figma", "Webflow", "Responsive Design", "CSS Grid", "Flexbox", "Bootstrap"]
    },
    // Cloud Programs
    {
      id: 9,
      title: "AWS Cloud Architect",
      category: "cloud",
      duration: "5 months",
      level: "Advanced",
      illustration: "☁️",
      description: "Design and deploy scalable cloud solutions on AWS",
      skills: ["AWS", "EC2", "S3", "Lambda", "CloudFormation", "Terraform"]
    },
    {
      id: 10,
      title: "DevOps Engineering",
      category: "cloud",
      duration: "6 months",
      level: "Intermediate",
      illustration: "🔧",
      description: "Automate deployment and manage cloud infrastructure",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Ansible", "Monitoring"]
    },
    {
      id: 11,
      title: "Azure Solutions",
      category: "cloud",
      duration: "4 months",
      level: "Intermediate",
      illustration: "🌩️",
      description: "Build enterprise solutions on Microsoft Azure",
      skills: ["Azure", "ARM Templates", "Azure Functions", "Cosmos DB", "Power BI", "Logic Apps"]
    },
    {
      id: 12,
      title: "Google Cloud Platform",
      category: "cloud",
      duration: "4 months",
      level: "Intermediate",
      illustration: "🚀",
      description: "Leverage Google's cloud services for modern applications",
      skills: ["GCP", "BigQuery", "Cloud Functions", "Kubernetes Engine", "Firebase", "TensorFlow"]
    },
    // Data Science Programs
    {
      id: 13,
      title: "Data Science & ML",
      category: "data",
      duration: "6 months",
      level: "Advanced",
      illustration: "📊",
      description: "Analyze data and build machine learning models",
      skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Jupyter", "Statistics"]
    },
    {
      id: 14,
      title: "Data Analytics",
      category: "data",
      duration: "4 months",
      level: "Intermediate",
      illustration: "📈",
      description: "Extract insights from data using modern tools",
      skills: ["SQL", "Tableau", "Power BI", "Excel", "R", "Data Visualization"]
    },
    {
      id: 15,
      title: "Big Data Engineering",
      category: "data",
      duration: "5 months",
      level: "Advanced",
      illustration: "🗄️",
      description: "Handle large-scale data processing and storage",
      skills: ["Hadoop", "Spark", "Kafka", "Elasticsearch", "MongoDB", "Cassandra"]
    },
    {
      id: 16,
      title: "AI & Deep Learning",
      category: "data",
      duration: "6 months",
      level: "Expert",
      illustration: "🤖",
      description: "Build intelligent systems with neural networks",
      skills: ["PyTorch", "TensorFlow", "Keras", "Computer Vision", "NLP", "Neural Networks"]
    },
    // Marketing Programs
    {
      id: 17,
      title: "Digital Marketing",
      category: "marketing",
      duration: "3 months",
      level: "Beginner",
      illustration: "📢",
      description: "Master online marketing and growth strategies",
      skills: ["SEO", "Google Ads", "Facebook Ads", "Analytics", "Content Marketing", "Email Marketing"]
    },
    {
      id: 18,
      title: "Social Media Marketing",
      category: "marketing",
      duration: "2 months",
      level: "Beginner",
      illustration: "📲",
      description: "Build brand presence across social platforms",
      skills: ["Instagram", "LinkedIn", "TikTok", "Twitter", "Content Creation", "Influencer Marketing"]
    },
    {
      id: 19,
      title: "Growth Hacking",
      category: "marketing",
      duration: "3 months",
      level: "Intermediate",
      illustration: "📊",
      description: "Drive rapid business growth with data-driven strategies",
      skills: ["A/B Testing", "Conversion Optimization", "Product Analytics", "Viral Marketing", "Retention", "Metrics"]
    },
    {
      id: 20,
      title: "Content Marketing",
      category: "marketing",
      duration: "3 months",
      level: "Beginner",
      illustration: "✍️",
      description: "Create compelling content that drives engagement",
      skills: ["Copywriting", "Blog Writing", "Video Marketing", "Storytelling", "Brand Voice", "Content Strategy"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Programs' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'data', name: 'Data Science' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  const displayedPrograms = activeCategory === 'all' && !showMore 
    ? filteredPrograms.slice(0, 6)
    : filteredPrograms;

  return (
    <section id="services" className="services section-padding" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="section-subtitle">
            Choose from 20+ industry-focused programs designed for career success
          </p>
        </motion.div>

        <motion.div 
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="programs-grid">
          {displayedPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              className="program-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
              layout
            >
              <div className="program-header">
                <div className="program-illustration">{program.illustration}</div>
                <div className="program-meta">
                  <span className="duration">{program.duration}</span>
                  <span className="level">{program.level}</span>
                </div>
              </div>
              
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              
              <div className="skills-list">
                {program.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
              
              <button className="enroll-btn">
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>

        {activeCategory === 'all' && !showMore && (
          <motion.div 
            className="show-more-section"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              className="show-more-btn"
              onClick={() => setShowMore(true)}
            >
              Show More Programs ({programs.length - 6}+)
            </button>
          </motion.div>
        )}

        {/* <motion.div 
          className="programs-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>Ready to start your journey?</p>
          <button className="view-all-btn">Explore All Programs</button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Services;