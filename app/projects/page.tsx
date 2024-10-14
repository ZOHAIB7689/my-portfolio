"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  projectUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  projectUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="relative h-48 w-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300"
        />
      </motion.div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {description}
        </p>
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
