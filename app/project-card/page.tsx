"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FC } from "react";

// Framer motion variants for animations
const cardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
};

const imageVariants: Variants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

// Define the ProjectCardProps interface
interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  projectUrl: string;
}

// Default export function containing ProjectCard as a nested function
export default function ProjectCardWrapper() {
  function ProjectCard({ title, description, imageSrc, projectUrl }: ProjectCardProps) {
    return (
      <motion.div
        className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300"
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <motion.div className="relative h-48 w-full overflow-hidden" variants={imageVariants}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300"
          />
        </motion.div>
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-6">
          <Button
            onClick={() => window.open(projectUrl, "_blank", "noopener,noreferrer")}
            className="w-full group flex items-center justify-center"
            variant="outline"
          >
            Visit Project
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </motion.div>
    );
  }

  // Example usage of ProjectCard (you can customize or map this as needed)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        title="Portfolio Website"
        description="A sleek, personal portfolio to showcase my skills and projects."
        imageSrc="/portfolio.jpg"
        projectUrl="https://example.com"
      />
      <ProjectCard
        title="AI Chatbot"
        description="A chatbot leveraging NLP for efficient customer support."
        imageSrc="/chatbot.jpg"
        projectUrl="https://example.com"
      />
    </div>
  );
}
