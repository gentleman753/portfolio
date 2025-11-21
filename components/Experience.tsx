import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-10"
      >
        <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
          <Briefcase size={24} />
        </div>
        <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white">Professional Experience</h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative pl-8 md:pl-0"
      >
        {/* Vertical Line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

        {/* Experience Card */}
        <div className="relative md:flex justify-between items-center w-full">
           
           {/* Timeline Dot */}
           <div className="absolute -left-8 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white dark:border-dark-900 md:-translate-x-1/2 md:-translate-y-1/2 z-10 shadow-sm"></div>

           <div className="md:w-5/12 text-left md:text-right mb-4 md:mb-0 md:pr-12">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">Software Engineering Intern</h3>
              <div className="text-primary-600 dark:text-primary-400 font-medium">Parken Solution</div>
           </div>
           
           <div className="md:w-5/12 md:pl-12">
              <div className="bg-white dark:bg-dark-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                 <ul className="space-y-3">
                    {[
                      'Built Bulk WhatsApp Messaging Application',
                      'Integrated Razorpay and PayU payments',
                      'Implemented JWT authentication',
                      'Developed verified template workflows',
                      'Added wallet recharge & balance tracking'
                    ].map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="mt-1.5 text-primary-500">•</span>
                        {item}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};