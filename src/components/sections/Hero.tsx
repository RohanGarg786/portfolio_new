import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Github, Linkedin } from 'lucide-react';
import Button from '../ui/Button';
import Cartoon  from '../../../public/cartoon1.png';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="order-2 md:order-1"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Full Stack
              <span className="block text-primary-600 dark:text-primary-400">Developer</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed"
            >
              Specializing in MERN stack development with expertise in Docker, TypeScript, and microservices architecture. Let's bring your ideas to life!
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <Button 
                onClick={() => window.location.href = '#contact'}
                size="lg"
                className="px-8"
              >
                Hire Me
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '#projects'}
                className="px-8"
              >
                View Projects
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={28} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Developer Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <img 
                  src={Cartoon} 
                  alt="Developer cartoon"
                  className="w-full max-w-lg mx-auto"
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="text-primary-600 dark:text-primary-400 font-bold text-lg">React</div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <div className="text-secondary-600 dark:text-secondary-400 font-bold text-lg">Node.js</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 left-1/3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              >
                <div className="text-accent-600 dark:text-accent-400 font-bold text-lg">MongoDB</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;