import React from 'react';
import { motion } from 'framer-motion';

interface SkillProgressProps {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ name, level, icon }) => {
  const percentage = (level / 5) * 100;
  
  const barVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${percentage}%`,
      transition: { duration: 1, ease: 'easeOut' }
    }
  };
  
  return (
    <div className="mb-4">
      <div className="flex items-center mb-1">
        {icon && <span className="mr-2">{icon}</span>}
        <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{level}/5</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-500 rounded-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={barVariants}
        />
      </div>
    </div>
  );
};

export default SkillProgress;