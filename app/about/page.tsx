'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { 
  Code2, 
  Brain, 
  Binary,
  Network,
  ChevronRight,
  GraduationCap,
  Coffee,
  Globe,
  Star,
  Sparkles
} from 'lucide-react';

const AboutPage = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.gradient-circle', {
        y: -30,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 0.2
      });
    });
    return () => ctx.revert();
  }, []);

  const skills = ['Web Development', 'Artificial Intelligence', 'Web3', 'Metaverse'];

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="gradient-circle absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-100/30 blur-3xl" />
        <div className="gradient-circle absolute top-40 right-20 w-96 h-96 rounded-full bg-teal-50/40 blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-tr from-teal-500 to-teal-300 p-1"
            >
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-teal-500" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                Zohaib
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transforming ideas into reality through code
              </p>
              <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                <span className="flex items-center gap-2">
                  <Coffee className="w-4 h-4" />
                  Age: 20
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Started Coding: Feb 2024
                </span>
              </div>
            </motion.div>
          </div>

          {/* Current Journey Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-teal-500" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Current Learning Journey
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Enrolled in the prestigious Governor Sindh Initiative for Artificial Intelligence,
                  Web3 and Metaverse (GIAIC) at Governor House Karachi.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['AI/ML', 'Web3', 'Metaverse', 'Full Stack'].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Learning Path</h2>
            <p className="text-gray-600">Technologies and skills I&apos;m currently mastering</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Code2 />, title: 'Web Development', color: 'from-teal-400 to-emerald-400' },
              { icon: <Brain />, title: 'AI & ML', color: 'from-blue-400 to-teal-400' },
              { icon: <Binary />, title: 'Web3', color: 'from-indigo-400 to-blue-400' },
              { icon: <Network />, title: 'Metaverse', color: 'from-purple-400 to-indigo-400' }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <div className={`w-14 h-14 mb-6 rounded-lg bg-gradient-to-r ${skill.color} p-3 text-white`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  Exploring and mastering the fundamentals and advanced concepts
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">My Journey</h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                date: 'February 2024',
                title: 'Started Coding Journey',
                description: 'Took the first step into the world of programming'
              },
              {
                date: 'Present',
                title: 'GIAIC Student',
                description: 'Learning cutting-edge technologies at Governor House Karachi'
              }
            ].map((event, index) => (
              <motion.div
                key={event.date}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-2 border-teal-200 last:border-transparent"
              >
                <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-teal-400 bg-white" />
                <div className="text-sm text-teal-600 font-semibold mb-2">{event.date}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Future Goals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Future Vision</h2>
            <p className="text-gray-600">Where I&apos;m headed in my development journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Short-term Goals',
                goals: [
                  'Master fundamental web development concepts',
                  'Build a strong foundation in AI/ML',
                  'Complete GIAIC coursework with excellence'
                ]
              },
              {
                title: 'Long-term Vision',
                goals: [
                  'Become a proficient full-stack developer',
                  'Contribute to innovative Web3 projects',
                  'Create impactful solutions using emerging technologies'
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{goal}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage