import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('yuvrajbansal637@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold font-heading text-slate-900 dark:text-white mb-6">Let's Connect</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-md">
          Have a project in mind or want to discuss algorithms? I'm always open to new opportunities.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={handleCopyEmail}>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email</div>
              <div className="flex items-center gap-2 text-lg font-medium text-slate-900 dark:text-white">
                yuvrajbansal637@gmail.com
                {copiedEmail ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Phone</div>
              <div className="text-lg font-medium text-slate-900 dark:text-white">
                +91 80005 45101
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-dark-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:text-white" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:text-white" placeholder="Doe" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:text-white" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none dark:text-white" placeholder="Your message here..."></textarea>
          </div>

          <button className="w-full py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-600/20 transition-all flex justify-center items-center gap-2">
            Send Message <Send size={18} />
          </button>
        </div>
      </motion.form>
    </div>
  );
};