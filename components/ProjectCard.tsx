"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FaArrowRight } from 'react-icons/fa'; // You can change this to a different icon if desired

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, projectUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 border border-gray-400 shadow-lg rounded-lg overflow-hidden flex flex-col h-full transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              asChild
              variant="default"
              className="rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
            >
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-semibold flex items-center"
              >
                Explore <FaArrowRight className="ml-2 hover:scale-110 transition-transform duration-200" />
              </a>
            </Button>
          </motion.div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{title}</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        </div>
        <motion.div
          className="mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            asChild
            variant="outline"
            className="w-full rounded-full border-gray-600 dark:border-gray-300 hover:bg-blue-600 dark:hover:bg-indigo-600 transition-colors duration-200"
          >
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-lg font-semibold text-gray-800 dark:text-gray-100"
            >
              Explore <FaArrowRight className="ml-2 hover:scale-110 transition-transform duration-200" />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
