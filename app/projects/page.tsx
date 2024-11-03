"use client";

import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Quran Learning Hub",
      description: "I developed Quranic Wisdom Hub, an interactive project aimed at enhancing Quran learning for all ages. This platform features structured courses like Quran Basics, Tajweed Essentials, and Kids Tajweed, along with engaging webinars. Built using Next.js and Tailwind CSS, the project emphasizes a user-friendly design to provide an enriching learning experience.",
      imageSrc: "/quran-school.jpg",
      projectUrl: "https://quranic-wisdom-hub.vercel.app/",
      color: "bg-gradient-to-r from-teal-400 to-blue-500"
    },
    {
      title: "Demo Project",
      description: "This is just a demo; I will add more details soon.",
      imageSrc: "/project-02.png",
      projectUrl: "https://project2.com",
      color: "bg-gradient-to-r from-yellow-400 to-red-500"
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`${project.color} rounded-lg overflow-hidden transform transition duration-300 shadow-lg`}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              projectUrl={project.projectUrl}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};         

export default ProjectsPage;
