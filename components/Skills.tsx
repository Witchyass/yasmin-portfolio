'use client';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Wrench } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

const skillIcons: Record<string, any> = {
  'Data Analysis & AI': Database,
  'Programming Languages': Code,
  'Cloud & Infrastructure': Cloud,
  'DevOps & Development': Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A diverse toolkit for building modern solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(portfolioData.skills).map(([category, skills], index: number) => {
            const Icon = skillIcons[category] || Code;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-2xl p-6 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill: string, i: number) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="px-3 py-1.5 bg-white/80 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
