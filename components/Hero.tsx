import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6 text-center lg:text-left"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-medium mb-2">
          Available for Work
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-slate-900 dark:text-white">
          Hi, I'm <br className="hidden lg:block" />
          <span className="relative inline-block">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400 animate-pulse-slow">
               Yuvraj Bansal
             </span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
          Software Developer | Full Stack | DSA Enthusiast
        </p>
        
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
          <a 
            href="#contact"
            className="px-8 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-slate-200 dark:shadow-none"
          >
            Contact Me <ArrowRight size={18} />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
          >
            Download Resume <Download size={18} />
          </a>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-slate-500 dark:text-slate-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Github size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Linkedin size={24} /></a>
          <a href="mailto:yuvrajbansal637@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Mail size={24} /></a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex justify-center lg:justify-end relative"
      >
        {/* Abstract representation of code/tech */}
        <div className="relative w-72 h-72 md:w-96 md:h-96">
           <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-indigo-500 opacity-20 blur-3xl animate-pulse"></div>
           <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-100 dark:border-slate-700 transform rotate-3 hover:rotate-0 transition-transform duration-500 flex flex-col overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-2 font-mono text-xs md:text-sm">
                <div className="text-slate-400">// Portfolio.tsx</div>
                <div><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">Developer</span> = <span className="text-yellow-600 dark:text-yellow-400">{"{"}</span></div>
                <div className="pl-4">name: <span className="text-green-600 dark:text-green-400">'Yuvraj Bansal'</span>,</div>
                <div className="pl-4">role: <span className="text-green-600 dark:text-green-400">'Full Stack Engineer'</span>,</div>
                <div className="pl-4">skills: [<span className="text-green-600 dark:text-green-400">'React'</span>, <span className="text-green-600 dark:text-green-400">'Node'</span>, <span className="text-green-600 dark:text-green-400">'C++'</span>],</div>
                <div className="pl-4">hardWorker: <span className="text-red-600 dark:text-red-400">true</span></div>
                <div><span className="text-yellow-600 dark:text-yellow-400">{"}"}</span>;</div>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                 <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 border-2 border-white dark:border-slate-800"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-500 border-2 border-white dark:border-slate-800"></div>
                 </div>
                 <div className="text-xs text-slate-400">Compiling...</div>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};