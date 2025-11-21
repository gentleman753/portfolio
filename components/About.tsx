import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-full text-primary-600 dark:text-primary-400 mb-4"
        >
          <User size={24} />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4"
        >
          About Me
        </motion.h2>
        <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white dark:bg-dark-900/50 rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100 dark:border-slate-800 text-center"
      >
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          I am a <span className="font-semibold text-slate-900 dark:text-white">B-Tech student in Ceramic Engineering</span> at 
          <span className="text-primary-600 dark:text-primary-400 font-medium"> IIT (BHU), Varanasi</span> (CGPA 8.03). 
          I specialize in full-stack development and love solving problems with Data Structures & Algorithms. 
          I enjoy <span className="font-medium text-slate-900 dark:text-white">Competitive Programming</span>, 
          building scalable web apps, and designing clean user experiences.
        </p>
      </motion.div>
    </div>
  );
};