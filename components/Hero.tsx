'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">


        {/* Profile Image Container */}
        <motion.div
          className="relative w-64 h-64 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Decorative rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary-300/30"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-accent-300/20"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Profile image placeholder - REPLACE WITH YOUR ACTUAL IMAGE */}
          <motion.div
            className="absolute inset-4 rounded-full overflow-hidden shadow-2xl glass"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          > 
            <img
              src="/yasmin.jpg"
              alt="Yasmin Sebei"
              className="w-full h-full object-cover"
            />
  
          </motion.div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Hey, I'm Yasmin!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-light">
            Computer Engineering Student • DevOps Enthusiast
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Passionate about <span className="font-semibold text-primary-600">AI</span>, 
            <span className="font-semibold text-primary-600"> Cloud Technologies</span>, and 
            <span className="font-semibold text-primary-600"> Building for Social Impact</span> ✨
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="https://github.com/Witchyass"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/90 transition-all hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yasmin-sebei"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/90 transition-all hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:yasminsbii09@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Get in Touch</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
