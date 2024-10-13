"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { IconType } from 'react-icons';
import * as SiIcons from 'react-icons/si';

interface Skill {
  name: string;
  level: number;
  category: string;
  status: 'proficient' | 'exploring';
}

const skillsData: Skill[] = [
  { name: "JavaScript", level: 90, category: "Frontend", status: 'proficient' },
  { name: "TypeScript", level: 85, category: "Frontend", status: 'proficient' },
  { name: "React", level: 88, category: "Frontend", status: 'proficient' },
  { name: "Next.js", level: 85, category: "Frontend", status: 'proficient' },
  { name: "Tailwind CSS", level: 90, category: "Frontend", status: 'proficient' },
  { name: "Node.js", level: 85, category: "Backend", status: 'proficient' },
  { name: "Express", level: 30, category: "Backend", status: 'exploring' },
  { name: "MongoDB", level: 25, category: "Database", status: 'exploring' },
  { name: "PostgreSQL", level: 20, category: "Database", status: 'exploring' },
  { name: "Git", level: 85, category: "DevOps", status: 'proficient' },
  { name: "Docker", level: 15, category: "DevOps", status: 'exploring' },
  { name: "AWS", level: 10, category: "DevOps", status: 'exploring' },
  { name: "Webpack", level: 20, category: "Tools", status: 'exploring' },
  { name: "Solidity", level: 5, category: "Blockchain", status: 'exploring' },
  { name: "GraphQL", level: 15, category: "API", status: 'exploring' },
  { name: "Python", level: 25, category: "Backend", status: 'exploring' }
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getIcon = (name: string): IconType | null => {
    const iconMap: { [key: string]: keyof typeof SiIcons } = {
      "JavaScript": "SiJavascript",
      "TypeScript": "SiTypescript",
      "React": "SiReact",
      "Next.js": "SiNextdotjs",
      "Tailwind CSS": "SiTailwindcss",
      "Node.js": "SiNodedotjs",
      "Express": "SiExpress",
      "MongoDB": "SiMongodb",
      "PostgreSQL": "SiPostgresql",
      "Git": "SiGit",
      "Docker": "SiDocker",
      "AWS": "SiAmazon",
      "Webpack": "SiWebpack",
      "Solidity": "SiSolidity",
      "GraphQL": "SiGraphql",
      "Python": "SiPython"
    };
    const iconName = iconMap[name] || `Si${name.replace(/\./g, '').replace(/\s/g, '')}` as keyof typeof SiIcons;
    return SiIcons[iconName] || null;
  };

  const categories = ["All", ...Array.from(new Set(skillsData.map(skill => skill.category)))];

  const filteredSkills = selectedCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <div className="container mt-12 mx-auto px-4 py-12">
      <main>
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Professional Skills
        </motion.h1>

        <div className="flex justify-center mb-8 space-x-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className="px-4 py-2 rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredSkills.map((skill, index) => {
              const Icon = getIcon(skill.name);
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className={`shadow-lg hover:shadow-xl transition-all duration-300 ${skill.status === 'exploring' ? 'bg-blue-50 dark:bg-blue-900/30' : 'bg-white dark:bg-gradient-to-bl from-red-950 to-gray-900'}`}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-xl font-semibold">{skill.name}</span>
                        {Icon && <Icon className="w-8 h-8 text-blue-500" />}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={skill.level} className="w-full h-2 mb-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</span>
                        <span className="font-semibold">{skill.level}%</span>
                      </div>
                      {skill.status === 'exploring' && (
                        <span className="text-xs text-blue-600 dark:text-blue-400 mt-2 block">Currently exploring, will learn soon</span>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="fixed bottom-5 right-5 z-10">
        <Tooltip content={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full shadow-md"
          >
            {theme === 'dark' ? <SunIcon className="h-[1.2rem] w-[1.2rem]" /> : <MoonIcon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </Tooltip>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="fixed bottom-5 left-5 z-10 rounded-full shadow-md">About My Skills</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">About My Skills</DialogTitle>
          </DialogHeader>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            This page showcases my professional programming skills and proficiency levels. 
            The skills are represented by interactive progress bars, indicating my comfort level with each technology. 
            The percentages are based on my personal assessment, project experience, and continuous learning in these technologies.
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Skills marked as &quot;Currently exploring, will learn soon&quot; are technologies I&apos;m in the process of familiarizing myself with.
            I plan to deepen my knowledge in these areas in the near future.
            Feel free to explore different categories to see my expertise in various areas of software development.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}