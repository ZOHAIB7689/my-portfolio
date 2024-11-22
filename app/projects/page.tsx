'use client'


import React, { useState, useEffect } from 'react';
import { motion,  } from 'framer-motion';
import { Moon, Code, Layout, Globe, Sparkles, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const ProjectsPage = () => {
  
  // Define the type for the projects object
  type Project = {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    featured?: boolean;
    link?: string; // Added link property
    sourceCode?: string; // Added sourceCode property
  };

  type Projects = {
    web: Project[];
    backend: Project[];
    ui: Project[];
  };

  const [activeCategory, setActiveCategory] = useState<'all' | keyof Projects>('all');
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const categories = [
    { id: 'web', icon: Globe, label: 'Web Apps' },
    { id: 'backend', icon: Code, label: 'Backend Projects' }, // Changed backend icon to Code
    { id: 'ui', icon: Layout, label: 'UI/UX' },
  ];

  const projects: Projects = {
    web: [
      {
        title: "Quranic Wisdom Hub",
        description: "online Quran learing school with beautiful designs and styles",
        tags: ["Aceternity", "Next.js", "Tailwindcss"],
        image: "/quran-school.jpg",
        featured: true,
        link: "https://quranic-wisdom-hub.vercel.app/", // Added link
        sourceCode: "https://github.com/ZOHAIB7689s/quranic-wisdom-hub", // Added sourceCode
      },
      {
        title: "LUMHS quiz test",
        description: "Medical college quiz tes",
        tags: ["Next.js", "shadcn", "Tailwindcss"],
        image: "/Capture.PNG",
        link: "https://example.com/social-media-dashboard", // Added link
        sourceCode: "https://github.com/ZOHAIB7689/lumhs-quiz-test", // Added sourceCode
      }
    ],
    backend: [
      {
        title: "Calculator",
        description: "Calculator project made with typescript for node.js",
        tags: ["TypeScript", "Node.js"],
        sourceCode: "https://github.com/username/repo", // Added sourceCode
      },{
        title: "Student management system",
        description: "a detailed backend project for student management system ",
        tags: ["TypeScript", "Node.js" ,"OOPS"],
        sourceCode: "https://github.com/ZOHAIB7689/student-management-system", // Added sourceCode
      },
      {
        title: "Word Counter",
        description: "Word counter made with Typescript",
        tags: ["TypeScript", "Node.js"],
        sourceCode: "https://github.com/ZOHAIB7689/word-counter", // Added sourceCode
     },  {
    title: "Explicit Type Casting",
    description: "A project demonstrating explicit type casting in TypeScript.",
    tags: ["TypeScript", "Node.js"],
    sourceCode: "https://github.com/ZOHAIB7689/typescript-projects",
  },
  {
    title: "Student Grades",
    description: "A Node.js project to process and manage student grades.",
    tags: ["TypeScript", "Node.js"],
    sourceCode: "https://github.com/ZOHAIB7689/typescript-projects",
  },
  {
    title: "Calculate Area",
    description: "A TypeScript project to calculate areas of different shapes.",
    tags: ["TypeScript", "Node.js"],
    sourceCode: "https://github.com/ZOHAIB7689/typescript-projects",
  },
  {
    title: "Employee Information",
    description: "A project to manage and process employee information.",
    tags: ["TypeScript", "Node.js"],
    sourceCode: "https://github.com/ZOHAIB7689/typescript-projects",
  },
  {
    title: "Fetching Data (Async/Await)",
    description: "A project demonstrating data fetching using async/await in Node.js.",
    tags: ["TypeScript", "Node.js"],
    sourceCode: "https://github.com/ZOHAIB7689/typescript-projects",
  },
  {
    title: "Library Management",
    description: "A Node.js project for managing library books and users.",
    tags: ["TypeScript", "Node.js"],
    sourceCode: "https://github.com/ZOHAIB7689/typescript-projects",
  },
  {
    title: "Process Student Grades",
    description: "A project to process and analyze student grades.",
    tags: ["TypeScript", "Node.js"],
    sourceCode: "https://github.com/ZOHAIB7689/typescript-projects",
  },
  {
    title: "Temperature Calculator",
    description: "A TypeScript project to convert and calculate temperatures.",
    tags: ["TypeScript", "Node.js"],
    sourceCode: "https://github.com/ZOHAIB7689/typescript-projects",
  },
  {
    title: "Traffic Lights",
    description: "A simulation of traffic lights using TypeScript and Node.js.",
    tags: ["TypeScript", "Node.js"],
    sourceCode: "https://github.com/ZOHAIB7689/typescript-projects",
  },
    ],
    ui: [
      {
        title: "Design System",
        description: "Comprehensive UI component library",
        tags: ["Figma", "Storybook", "CSS"],
        image: "/api/placeholder/400/250",
        link: "https://example.com/design-system", // Added link
        sourceCode: "https://github.com/username/repo", // Added sourceCode
      }
    ]
  };

  const learningProjects = [
    {
      day: 1,
      title: "Countdowner Timer",
      description: "Simple countdowner app with set start, stop, and reset options",
      tags: ["Next.js", "Tailwind", "Shadcn"],
      difficulty: "Beginner",
      mentor: "Sir Asharib Ali",
      tryoutLink: "https://mini-countdowner.vercel.app/",
      sourceCode: "https://github.com/ZOHAIB7689/Countdowner-Timer",
    },
    {
      day: 2,
      title: "Weather Widget",
      description: "Real-time weather data visualization",
      tags: ["Next.js", "API", "Shadcn"],
      difficulty: "Intermediate",
      mentor: "Sir Asharib Ali",
      tryoutLink: "https://weather-widget-seven-topaz.vercel.app/",
      sourceCode: "https://github.com/ZOHAIB7689/weather-widget",
    },
    {
      day: 3,
      title: "Birthday Wish App",
      description: "Celebrate the birthday with confetti, lighting candles, and popping balloons",
      tags: ["Next.js", "API", "Shadcn"],
      difficulty: "Intermediate",
      mentor: "Sir Asharib Ali",
      tryoutLink: "https://example.com/tryout", // Replace with actual URL when available
      sourceCode: "https://github.com/ZOHAIB7689/birthday-wish-app",
    },
    {
      day: 4,
      title: "Number Guessing Game",
      description: "A number guessing game where users can start, pause, and track attempts",
      tags: ["Next.js", "API", "Shadcn"],
      difficulty: "Intermediate",
      mentor: "Sir Asharib Ali",
      tryoutLink: "https://number-guessing-game-ten-neon.vercel.app/",
      sourceCode: "https://github.com/ZOHAIB7689/number-guessing-game",
    },
    {
      day: 5,
      title: "Simple Calculator",
      description: "A simple calculator project",
      tags: ["JavaScript", "HTML", "CSS"],
      difficulty: "Beginner",
      mentor: "Sir Asharib Ali",
      tryoutLink: "https://calculator-phi-puce-80.vercel.app/",
      sourceCode: "https://github.com/ZOHAIB7689/simple-calculator",
    },
    {
      day: 6,
      title: "Digital Clock",
      description: "A digital clock project",
      tags: ["JavaScript", "HTML", "CSS"],
      difficulty: "Beginner",
      mentor: "Sir Asharib Ali",
      tryoutLink: "https://digital-clock-mu-liart.vercel.app/",
      sourceCode: "https://github.com/ZOHAIB7689/digital-clock",
    },
    {
      day: 7,
      title: "Random Joke Generator",
      description: "A random joke generator project",
      tags: ["JavaScript", "API"],
      difficulty: "Beginner",
      mentor: "Sir Asharib Ali",
      tryoutLink: "https://random-joke-one.vercel.app/",
      sourceCode: "https://github.com/ZOHAIB7689/random-joke-generator",
    },
    {
      day: 8,
      title: "Color Picker",
      description: "A color picker project",
      tags: ["JavaScript", "HTML", "CSS"],
      difficulty: "Beginner",
      mentor: "Sir Asharib Ali",
      tryoutLink: "https://color-picker-sigma-eight.vercel.app/",
      sourceCode: "https://github.com/ZOHAIB7689/color-picker",
    },
    {
      day: 9,
      title: "Tip Calculator",
      description: "A tip calculator project",
      tags: ["JavaScript", "HTML", "CSS"],
      difficulty: "Beginner",
      mentor: "Sir Asharib Ali",
      tryoutLink: "https://tip-calculator-sand-gamma.vercel.app/",
      sourceCode: "https://github.com/ZOHAIB7689/tip-calculator",
    },
    {
      day: 10,
      title: "Password Generator",
      description: "A password generator project",
      tags: ["JavaScript", "HTML", "CSS"],
      difficulty: "Beginner",
      mentor: "Sir Asharib Ali",
      tryoutLink: "https://example.com/tryout", // Replace with actual URL when available
      sourceCode: "https://github.com/ZOHAIB7689/password-generator",
    },
    {
      day: 11,
      title: "BMI Calculator",
      description: "A BMI calculator project",
      tags: ["JavaScript", "HTML", "CSS"],
      difficulty: "Beginner",
      mentor: "Sir Asharib Ali",
      tryoutLink: "https://example.com/tryout", // Replace with actual URL when available
      sourceCode: "https://github.com/ZOHAIB7689/bmi-calculator",
    },
  ];

  const ProjectCard = ({ project, index, isFeatured = false }: { project: any, index: number, isFeatured?: boolean }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Card 
        className={`group overflow-hidden relative 
          ${isFeatured ? 'md:col-span-2 bg-gradient-to-r from-teal-50 to-white' : ''}
        `}
      >
        <motion.div 
          className="absolute inset-0 bg-teal-600/0 group-hover:bg-teal-600/5 transition-all duration-500"
        />
        
        {project.image && (
          <motion.div 
            className="relative overflow-hidden"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-56 object-cover"
            />
          </motion.div>
        )}

        {isFeatured && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-4 right-4"
          >
            <Badge className="bg-teal-600 text-white px-3 py-1 shadow-lg">
              <Sparkles className="w-4 h-4 mr-1 inline" />
              Featured
            </Badge>
          </motion.div>
        )}

        <CardHeader>
          <CardTitle className="text-xl text-gray-800 group-hover:text-teal-600 transition-colors flex items-center gap-2">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.tags.map((tag: string, i: number) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors duration-300"
                >
                  {tag}
                </Badge>
              </motion.span>
            ))}
          </motion.div>

          <div className="flex gap-4 pt-6">
            {project.link && (
              <Button 
                variant="outline" 
                className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 group"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project 
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:text-teal-800" />
                </motion.span>
              </Button>
            )}
            <Button 
              variant="outline" 
              className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 group"
              onClick={() => window.open(project.sourceCode, "_blank")}
            >
              Source Code
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Github className="ml-2 w-4 h-4 group-hover:text-teal-800" />
              </motion.span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const LearningProjectCard = ({ project, index }: { project: any, index: number }) => (
    <Card 
      className={`group hover:shadow-xl transition-all duration-500 overflow-hidden
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transform: isInView ? 'none' : 'translateY(20px)'
      }}
    >
      <CardHeader>
        <CardTitle className="text-xl text-gray-800 group-hover:text-teal-600 transition-colors flex items-center gap-2">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, i: number) => (
            <Badge key={i} variant="secondary" 
              className="bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors duration-300">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 pt-6">
          {project.tryoutLink && (
            <Button 
              variant="outline" 
              className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
              onClick={() => window.open(project.tryoutLink, "_blank")}
            >
              Try it out <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
          {project.sourceCode && (
            <Button 
              variant="outline" 
              className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
              onClick={() => window.open(project.sourceCode, "_blank")}
            >
              Source Code <Github className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <Moon className="text-teal-600" size={40} />
            <h1 className="text-5xl font-bold text-gray-800">My Projects</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">
            Exploring the boundaries of technology through innovative solutions and continuous learning
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <Tabs defaultValue="portfolio" className="space-y-8">
          <TabsList className="flex justify-center p-1 bg-teal-50 rounded-full">
            <TabsTrigger 
              value="portfolio" 
              className="rounded-full px-6 py-2 data-[state=active]:bg-white"
            >
              Portfolio Projects
            </TabsTrigger>
            <TabsTrigger 
              value="learning" 
              className="rounded-full px-6 py-2 data-[state=active]:bg-white"
            >
              30 Days Challenge
            </TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio">
            {/* Category Navigation */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full transition-all duration-300 
                  ${activeCategory === 'all' ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-600 hover:bg-teal-100'}`}
              >
                All Projects
              </button>
              {categories.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id as keyof Projects)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2
                    ${activeCategory === id ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-600 hover:bg-teal-100'}`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeCategory === 'all' ? (
                Object.values(projects).flat().map((project: Project, index: number) => (
                  <ProjectCard 
                    key={index} 
                    project={project} 
                    index={index}
                    isFeatured={project.featured}
                  />
                ))
              ) : (
                projects[activeCategory]?.map((project: Project, index: number) => (
                  <ProjectCard 
                    key={index} 
                    project={project} 
                    index={index}
                    isFeatured={project.featured}
                  />
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="learning">
            <div className="bg-teal-50 p-8 rounded-lg mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Code size={32} className="text-teal-600" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">30 Days of Code Challenge</h2>
                  <p className="text-teal-600">A journey of continuous improvement with Sir Asharib Ali</p>
                </div>
              </div>
              <div className="h-2 w-full bg-teal-100 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-teal-600 rounded-full" />
              </div>
              <p className="text-right text-sm text-teal-600 mt-1">10 of 30 days completed</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {learningProjects.map((project: any, index: number) => (
                <LearningProjectCard key={index} project={project} index={index} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button 
                variant="outline" 
                className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
              >
                View More
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
