import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Calendar, Code, Cpu, Server } from 'lucide-react';

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const infoItems = [
    {
      icon: <Code className="text-primary-600 dark:text-primary-400" />,
      title: "Full Stack Development",
      text: "Proficient in building complete web applications from frontend to backend with the MERN stack.",
    },
    {
      icon: <Cpu className="text-secondary-600 dark:text-secondary-400" />,
      title: "Microservices Architecture",
      text: "Experience in designing and implementing scalable microservices using Docker and RabbitMQ.",
    },
    {
      icon: <Server className="text-accent-600 dark:text-accent-400" />,
      title: "Backend Development",
      text: "Skilled in creating robust APIs, database management, and server-side logic.",
    },
    {
      icon: <Calendar className="text-green-600 dark:text-green-400" />,
      title: "1 Year of Experience",
      text: "One year of professional experience working on various web development projects.",
    }
  ];

  return (
    <Section id="about" title="About Me" subtitle="Get to know my background, skills, and expertise">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-gray-700 dark:text-gray-300">
            I'm a passionate Full Stack Developer with a strong focus on the MERN stack (MongoDB, Express.js, React, Node.js). My journey in web development began with a deep curiosity about how digital products are built from the ground up.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            Over the past year, I've gained valuable experience working on diverse projects that have enhanced my technical skills and problem-solving abilities. I specialize in creating responsive web applications with clean, efficient code and intuitive user interfaces.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            In addition to my core MERN stack expertise, I've expanded my skill set to include Docker for containerization, TypeScript for type-safe code, and microservices architecture for building scalable applications. I also have experience with message queuing systems like RabbitMQ for asynchronous communication between services.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            I'm constantly learning and staying updated with the latest technologies and best practices in the field. I believe in writing clean, maintainable code and collaborating effectively with teams to deliver high-quality solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;