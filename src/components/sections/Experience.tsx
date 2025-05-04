import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { experiences } from '../../data/experience';
import { Calendar, CheckCircle } from 'lucide-react'; 

const Experience: React.FC = () => {
  return (
    <Section 
      id="experience" 
      title="Work Experience" 
      subtitle="My professional journey and work history"
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative mb-12 md:mb-16 ${
              index % 2 === 0 ? ' md:pr-10' : 'md:pl-10'
            } md:w-1/2 ${
              index % 2 === 0 ? 'md:ml-auto' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className={`absolute top-0 ${
              index % 2 === 0 
                ? 'left-0 md:-left-3.5' 
                : 'left-0 md:-left-3.5 md:translate-x-0'
            } md:left-1/2 md:-translate-x-1/2 w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900 border-2 border-primary-500 dark:border-primary-400 z-10`}>
            </div>
            
            {/* Content card */}
            <div className="ml-9 md:ml-0 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex flex-col md:items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.position}
                </h3>
                <div className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                  {exp.company}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                  <Calendar size={16} className="mr-1" />
                  {exp.duration}
                </div>
              </div>
              
              <div className="space-y-2">
                {exp.description.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle size={18} className="text-primary-500 dark:text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.slice(0, 5).map((tech, i) => (
                  <span 
                    key={i} 
                    className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {exp.technologies.length > 5 && (
                  <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    +{exp.technologies.length - 5} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;