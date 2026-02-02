'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience & Leadership</span>
          </h2>
          <p className="text-gray-600 text-lg">
            My journey in tech and community building
          </p>
        </motion.div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary-600" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {portfolioData.experience.map((exp: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                    {exp.company && (
                      <p className="text-primary-600 font-medium">{exp.company}</p>
                    )}
                    {exp.location && (
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    )}
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-primary-600" />
            Leadership & Community
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.leadership.map((role: any, index: number) => (
              <LeadershipCard key={index} role={role} index={index} />
            ))}
          </div>
        </div>

        {/* Awards & Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary-600" />
            Awards & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.awards.map((award: any, index: number) => (
              <AwardCard key={index} award={award} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipCard({ role, index }: { role: any; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = role.images && role.images.length > 0;

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % role.images.length);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev - 1 + role.images.length) % role.images.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass rounded-2xl overflow-hidden hover:shadow-xl transition-all"
    >
      {/* Image Carousel */}
      {hasImages && (
        <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={role.images[currentImageIndex]}
              alt={`${role.organization} - ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Carousel Controls */}
          {role.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {role.images.map((_: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentImageIndex
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-2">{role.title}</h4>
        <p className="text-primary-600 font-medium mb-1">{role.organization}</p>
        <p className="text-gray-500 text-sm mb-4">{role.period}</p>
        <ul className="space-y-2">
          {role.responsibilities.map((resp: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
              <span className="text-primary-600 mt-1">✓</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function AwardCard({ award, index }: { award: any; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = award.images && award.images.length > 0;

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % award.images.length);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev - 1 + award.images.length) % award.images.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="glass rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col"
    >
      {/* Image Carousel */}
      {hasImages && (
        <div className="relative h-40 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={award.images[currentImageIndex]}
              alt={`${award.name} - ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Carousel Controls */}
          {award.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                {award.images.map((_: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === currentImageIndex
                        ? 'bg-white w-4'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4 text-center flex-1 flex flex-col justify-center">
        <Award className="w-8 h-8 mx-auto mb-2 text-accent-500" />
        <h4 className="font-bold text-gray-800 text-sm mb-1">{award.name}</h4>
        <p className="text-xs text-gray-600">{award.issuer}</p>
        {award.description && (
          <p className="text-xs text-gray-500 mt-2">{award.description}</p>
        )}
      </div>
    </motion.div>
  );
}
