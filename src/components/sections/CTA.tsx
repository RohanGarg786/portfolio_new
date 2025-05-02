import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-900 dark:to-secondary-900 opacity-20 dark:opacity-30 -z-10"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 -z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Bring Your Ideas to Life?
          </h2>
          
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto">
            I'm currently available for freelance work and full-time opportunities. If you're looking for a developer to help with your next project, let's connect!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => window.location.href = '#contact'}
              size="lg"
            >
              Get in Touch
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => window.open('/resume.pdf', '_blank')}
              size="lg"
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;