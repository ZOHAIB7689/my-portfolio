'use client'



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Palette, 
  Brain,
  ArrowRight,
  Trophy,
  ArrowDownCircle,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  Mail,
  
} from "lucide-react";
import Link from 'next/link';


interface TypewriterTextProps {
  words: string[];
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWordIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-teal-600 font-semibold  text-xl"
          >
          {words[currentWordIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, level }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="relative"
  >
    <Card className="overflow-hidden border-2 border-transparent hover:shadow-lg hover:shadow-amber-300/30 bg-gray-700/70 backdrop:blur-lg hover:border-teal-500 transition-colors">
      <CardContent className="p-6 text-center">
        <div className="mb-4 text-teal-400 flex justify-center">
          {icon}
        </div>
        <h3 className="text-xl text-gray-300 font-semibold mb-2">{name}</h3>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div 
            className="bg-teal-500 h-full rounded-full transition-all duration-1000"
            style={{ width: `${level}%` }}
          />
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const HomePage: React.FC = () => {
  const professions = [
    "Web Developer",
    "UI/UX Designer",
    "AI Enthusiast",
    "Full Stack Developer"
  ];

  const skills = [
    { name: "Web Development", icon: <Code2 className="w-8 h-8" />, level: 90 },
    { name: "UI/UX Design", icon: <Palette className="w-8 h-8" />, level: 85 },
    { name: "AI Development", icon: <Brain className="w-8 h-8" />, level: 75 },
  ];
  
  const projects = [
    { 
      title: "LUMHS Quiz test",
      description: "LUMHS quiz test application with a beautiful sleek designing",
      tags: ["Next.js", "TailwindCSS", "Aceternity"],
      link: "https://lumhs-quiz-test.vercel.app/",
      sourceCode: "https://github.com/ZOHAIB7689/lumhs-quiz-test"
    },
    { 
      title: "Quranic widom hub",
      description: "Online Quran learning school with a beautiful UI integration ",
      tags: ["Next.js", "Aceternity", "shadcn"],
      link: "https://quranic-wisdom-hub.vercel.app/",
      sourceCode: "https://github.com/ZOHAIB7689/quranic-wisdom-hub"
    },
    { 
      title: "Portfolio Template",
      description: "Customizable portfolio system",
      tags: ["Next.js", "Framer Motion", "GSAP"],
      link: "#",
      sourceCode: "https://github.com/ZOHAIB7689/portfolio-template"
    },
  ];

  
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center relative overflow-hidden"
        >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.1),transparent)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
              >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                >
                <Badge className="bg-teal-100 text-teal-800 text-sm px-3 py-1">
                  Available for Freelance Projects
                </Badge>
              </motion.div>

              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-6xl font-bold text-gray-900 tracking-tight"
                >
                  Hi, I&apos;m Zohaib
                </motion.h1>
                <TypewriterText words={professions} />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-600 max-w-lg mt-6 leading-relaxed text-lg"
                >
                  Crafting digital experiences that blend creativity with 
                  cutting-edge technology. Specialized in modern web development 
                  and AI integration.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4 pt-6"
              >
                <Button className="bg-teal-600 hover:bg-teal-700 px-6 py-6">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                onClick={() => window.open("mailto:bzohaib754@gmail.com?subject=Contact Inquiry")}
                 variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-6">
                  Contact Me <Mail className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex gap-4 pt-6"
              >
                {[Github, Twitter, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href={index === 0 ? "https://github.com/ZOHAIB7689" : (index === 2 ? "https://www.linkedin.com/in/zohaib-baloch-78974b2b5/" : "#")}
                    whileHover={{ y: -5 }}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
              >
              <div className="relative">
                {/* Background Circles */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-100 rounded-full blur-3xl opacity-20"
                  />
                
                {/* Profile Image */}
                <div className="relative w-[400px] h-[400px] mx-auto">
                  <img 
                    src="/profile.jpg"
                    alt="Zohaib"
                    className="w-full h-full rounded-full object-cover border-8 border-white shadow-2xl"
                    />
                  
                  {/* Floating Achievement Cards */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="absolute -left-16 top-1/2 transform -translate-y-1/2"
                    >
                    <Card className="shadow-xl">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Trophy className="w-8 h-8 text-yellow-500" />
                          <div>
                            <p className="font-semibold">Best Developer</p>
                            <p className="text-sm text-gray-500">2024 Award</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="absolute -right-16 top-1/2 transform  -translate-y-1/2"
                  >
                    <Card className="shadow-xl">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-teal-600">Multiple</p>
                          <p className="text-sm text-gray-500">Projects Delivered</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownCircle className="w-6 h-6 text-teal-600" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-20 px-4  bg-[url('/download.jpeg')] bg-no-repeat bg-center bg-cover md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-800 mb-4">Skills & Expertise</Badge>
            <h2 className="text-4xl font-bold text-orange-400 mb-4">Technical Proficiency</h2>
            <p className="text-zinc-200 max-w-2xl mx-auto">
              Mastering the latest technologies to create seamless digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {skills.map((skill, index) => (
              <SkillCard  key={index} {...skill} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-800 mb-4">Portfolio</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my best work combining design, technology, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden  hover:shadow-lime-400/50 shadow-lg duration-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} className="bg-teal-100 text-teal-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-6">
                      <Button
                        variant="outline" 
                        className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
                        onClick={() => window.open(project.link, "_blank")}
                        >
                        View Project <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
                        onClick={() => window.open(project.sourceCode, "_blank")}
                      >
                        Source Code <Github className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
           <Link href="/projects"> <Button 
            className="bg-teal-600 hover:bg-teal-700">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button></Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
