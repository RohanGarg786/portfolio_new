import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import SkillProgress from '../ui/SkillProgress';
import { skills } from '../../data/skills';
import { Code, Server, Box, Database, FileType, File as FileHtml, File as FileCss, Layers, Link, Network, MessageSquare, Github as Git, Repeat, Boxes, ListTodo, Puzzle as PuzzlePiece } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'devops', name: 'DevOps' },
    { id: 'other', name: 'Other' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      ReactLogo: <Code size={20} />,
      FileType: <FileType size={20} />,
      Code: <Code size={20} />,
      FileHtml: <FileHtml size={20} />,
      FileCss: <FileCss size={20} />,
      Layers: <Layers size={20} />,
      Server: <Server size={20} />,
      Database: <Database size={20} />,
      Link: <Link size={20} />,
      Network: <Network size={20} />,
      MessageSquare: <MessageSquare size={20} />,
      Box: <Box size={20} />,
      Git: <Git size={20} />,
      Repeat: <Repeat size={20} />,
      Boxes: <Boxes size={20} />,
      ListTodo: <ListTodo size={20} />,
      PuzzlePiece: <PuzzlePiece size={20} />,
    };
    
    return iconMap[iconName] || <Code size={20} />;
  };
  
  return (
    <Section 
      id="skills" 
      title="Skills & Expertise" 
      subtitle="A comprehensive overview of my technical skills and proficiency levels"
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map(category => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <SkillProgress
                name={skill.name}
                level={skill.level}
                icon={getIconComponent(skill.icon)}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default Skills;