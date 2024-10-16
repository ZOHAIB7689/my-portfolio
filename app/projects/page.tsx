"use client"
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Coming soon",
      description: "as this portfolio is at initial position i will bring them soon",
      imageSrc: "/project-01.png",
      projectUrl: "https://project1.com",
      color: "bg-gradient-to-r from-purple-500/50 to-pink-500/50"
    },
    {
      title: "Demo",
      description: "this is just a demo i will add them soon",
      imageSrc: "/project-02.png",
      projectUrl: "https://project2.com",
      color: "bg-gradient-to-r from-green-400/50 to-blue-500/50"
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
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`${project.color} rounded-lg overflow-hidden transform transition duration-300`}
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
