import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Blood Link',
    techStack: ['MERN', 'Redux Toolkit', 'JWT', 'Axios'],
    description: [
      'Full-stack blood bank with role-based dashboard',
      'Real-time analytics visualization',
      'Secure authentication + REST APIs'
    ],
    links: { repo: '#' }
  },
  {
    title: 'Hunger Hub',
    techStack: ['MERN', 'Razorpay', 'React', 'Node.js'],
    description: [
      'Food delivery platform with menu browsing & cart',
      'Search + filters for faster discovery',
      'Secure payment integration & optimized backend'
    ],
    links: { repo: '#' }
  },
  {
    title: 'Insta News',
    techStack: ['HTML', 'CSS', 'JavaScript', 'API'],
    description: [
      'API-based news aggregation application',
      'Dynamic category filtering',
      'Robust error handling and responsive layout'
    ],
    links: { repo: '#' }
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-2">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400">Some of my recent work.</p>
        </motion.div>
        
        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          href="https://github.com" 
          target="_blank"
          className="hidden md:flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline mt-4 md:mt-0"
        >
          View GitHub <ExternalLink size={16} />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white dark:bg-dark-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <FolderGit2 size={24} />
              </div>
              <div className="flex gap-3">
                 {project.links?.repo && (
                   <a href={project.links.repo} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Github size={20} /></a>
                 )}
                 {project.links?.demo && (
                   <a href={project.links.demo} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><ExternalLink size={20} /></a>
                 )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-heading">{project.title}</h3>
            
            <ul className="space-y-2 mb-6 flex-grow">
              {project.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0"></span>
                  {desc}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};