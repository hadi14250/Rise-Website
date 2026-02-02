import React from 'react';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';

const Careers: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900" />
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      <div className="relative z-10 section-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-white/70 mb-12">
              Interested in working with us? We'd love to hear from you.
            </p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
              <HiMail className="w-10 h-10 text-primary-600" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-dark-800 mb-4">
              Send Us Your Resume
            </h2>
            <p className="text-dark-500 mb-6">
              Email your resume and cover letter to:
            </p>
            <a 
              href="mailto:cs@riseglobal.me"
              className="inline-flex items-center gap-2 text-2xl font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              cs@riseglobal.me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
