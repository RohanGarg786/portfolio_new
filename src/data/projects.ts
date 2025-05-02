import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Regent Coatings',
    description: 'Regent Coatings is an italian wood polish brand serving their clients luxury and quality products.',
    image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React'],
    category: 'frontend',
    demoLink: 'https://www.regentcoatings.in/',
    githubLink: 'https://github.com/yourusername/ecommerce',
    featured: true
  },
  {
    id: 2,
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with private messaging, group chats, and media sharing capabilities.',
    image: 'https://images.pexels.com/photos/3850212/pexels-photo-3850212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    category: 'fullstack',
    demoLink: 'https://example.com/chatapp',
    githubLink: 'https://github.com/yourusername/chatapp',
    featured: false
  },
  {
    id:35,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and TypeScript, featuring animations with Framer Motion.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    category: 'frontend',
    demoLink: 'https://example.com/portfolio',
    githubLink: 'https://github.com/yourusername/portfolio',
    featured: false
  }
];