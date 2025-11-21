import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code } from 'lucide-react';
import { SkillCategory } from '../types';

const skillCategories: (SkillCategory & { icon: React.ElementType })[] = [
  {
    title: 'Languages & Frameworks',
    icon: Code,
    skills: ['C/C++', 'JavaScript', 'HTML', 'CSS', 'React.js', 'Express.js', 'Node.js'],
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    skills: ['MongoDB', 'Firebase', 'MySQL', 'VS Code', 'Git/GitHub'],
  },
  {
    title: 'Areas of Interest',
    icon: Cpu,
    skills: ['Data Structures & Algorithms', 'Competitive Programming', 'Web Design', 'System Design'],
  },
];

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">Technical Skills</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          My technical proficiency ranges from low-level algorithms to high-level full stack development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-50 dark:bg-slate-800 rounded-lg text-primary-600 dark:text-primary-400">
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};