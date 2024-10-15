"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from 'react-icons/fa';

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
      className="bg-card dark:bg-gradient-to-l from-indigo-950 to-rose-950 border-2 border-emerald-950 shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
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
              variant="secondary"
              className="hover:bg-primary-foreground"
            >
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <FaExternalLinkAlt className="ml-2" />
              </a>
            </Button>
          </motion.div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-foreground">{title}</h2>
          <p className="text-muted-foreground mb-4">{description}</p>
        </div>
        <motion.div
          className="mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            asChild
            variant="default"
            className="w-full"
          >
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <FaExternalLinkAlt className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
