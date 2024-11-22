"use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaFigma, FaSass } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer, SiAdobexd, 
         SiMongodb, SiPostgresql, SiFirebase, SiDocker, SiVercel, 
         SiAew} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  proficiency: number;
  experience: string;
}

interface Category {
  id: string;
  name: string;
}

const SkillsPage = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: Category[] = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'devops', name: 'DevOps' }
  ];

  const skills: Record<string, Skill[]> = {
    frontend: [
      { name: 'React', icon: FaReact, proficiency: 90, experience: '3 years' },
      { name: 'Next.js', icon: SiNextdotjs, proficiency: 85, experience: '2 years' },
      { name: 'JavaScript', icon: SiJavascript, proficiency: 88, experience: '4 years' },
      { name: 'TypeScript', icon: SiTypescript, proficiency: 82, experience: '2 years' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 92, experience: '3 years' },
      { name: 'Framer Motion', icon: SiFramer, proficiency: 80, experience: '1 year' },
      { name: 'Sass', icon: FaSass, proficiency: 85, experience: '3 years' }
    ],
    backend: [
      { name: 'Node.js', icon: FaNodeJs, proficiency: 80, experience: '3 years' },
      { name: 'MongoDB', icon: SiMongodb, proficiency: 75, experience: '2 years' },
      { name: 'PostgreSQL', icon: SiPostgresql, proficiency: 78, experience: '2 years' },
      { name: 'Firebase', icon: SiFirebase, proficiency: 85, experience: '2 years' }
    ],
    design: [
      { name: 'Figma', icon: FaFigma, proficiency: 88, experience: '2 years' },
      { name: 'Adobe XD', icon: SiAdobexd, proficiency: 82, experience: '1 year' }
    ],
    devops: [
      { name: 'Git', icon: FaGitAlt, proficiency: 85, experience: '3 years' },
      { name: 'Docker', icon: SiDocker, proficiency: 70, experience: '1 year' },
      { name: 'AWS', icon: SiAew, proficiency: 65, experience: '1 year' },
      { name: 'Vercel', icon: SiVercel, proficiency: 88, experience: '2 years' }
    ]
  };

  const getFilteredSkills = (): Skill[] => {
    if (selectedCategory === 'all') {
      return Object.values(skills).flat();
    }
    return skills[selectedCategory] || [];
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.category-button', {
        y: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    },
    hover: { 
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Technical <span className="text-teal-600">Expertise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            A showcase of my technical skills and professional experience in various domains.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`category-button px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-teal-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {getFilteredSkills().map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-xl shadow-lg group"
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className="flex flex-col items-center">
                  <skill.icon className="w-16 h-16 text-teal-600 mb-4 transform transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{skill.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <motion.div
                      className="h-2.5 rounded-full bg-teal-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <div className="flex justify-between w-full text-sm text-gray-600">
                    <span>{skill.proficiency}%</span>
                    <span>{skill.experience}</span>
                  </div>
                  
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute inset-0 bg-teal-600 bg-opacity-90 rounded-xl p-4 flex items-center justify-center"
                    >
                      <div className="text-white text-center">
                        <p className="font-semibold mb-2">Experience Details</p>
                        <p className="text-sm">
                          {skill.experience} of professional experience with {skill.name}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg">
            Continuously expanding my skillset and staying up-to-date with the latest technologies.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
