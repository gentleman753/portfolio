import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-12 border-t border-slate-100 dark:border-slate-800/50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Yuvraj Bansal. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
           <a href="https://github.com" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
             <Github size={20} />
           </a>
           <a href="https://linkedin.com" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
             <Linkedin size={20} />
           </a>
           <a href="https://twitter.com" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
             <Twitter size={20} />
           </a>
        </div>
      </div>
    </footer>
  );
};