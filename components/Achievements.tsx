import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Code } from 'lucide-react';
import { Achievement } from '../types';

const achievements: Achievement[] = [
  {
    title: 'Flipkart GRID 7.0',
    rank: 'National Semi-Finalist',
    description: 'Among top teams nationwide',
    icon: Trophy
  },
  {
    title: 'LeetCode Knight',
    rank: 'Top 3.75%',
    description: 'Rating 1926 | 500+ Problems Solved',
    icon: Code
  },
  {
    title: 'Codeforces',
    rank: 'Specialist',
    description: 'Max Rating 1426 | Global Rank 648 (Round 1042)',
    icon: Award
  },
  {
    title: 'CodeChef',
    rank: '3 Star (Max 1756)',
    description: 'Global Rank 45 in Starters 129',
    icon: Star
  }
];

export const Achievements: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">Achievements & Competitive Programming</h2>
        <p className="text-slate-600 dark:text-slate-400">Consistent performance in algorithmic contests.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4">
              <item.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 font-heading">{item.title}</h3>
            <div className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-2">{item.rank}</div>
            {item.description && (
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
          <div className="px-4 py-2 bg-white dark:bg-dark-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            Rank 853 – LeetCode Weekly 457
          </div>
          <div className="px-4 py-2 bg-white dark:bg-dark-800 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
             Rank 641 – LC Biweekly 163
          </div>
      </motion.div>
    </div>
  );
};